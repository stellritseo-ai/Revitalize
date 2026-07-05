import { MongoClient } from "mongodb";
import crypto from "crypto";
import { v2 as cloudinary } from "cloudinary";

// ── CONFIG ──
const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://revitalize_db_user:y0YMD1Zehs44T4se@revitalize.umub891.mongodb.net/?appName=revitalize";
const DB_NAME = "revitalize";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME || "hbld03xh",
  api_key: process.env.CLOUDINARY_API_KEY || "315681416549322",
  api_secret: process.env.CLOUDINARY_API_SECRET || "VA-N6KeiGaH5T1t2GVjqsJvpwlw",
  secure: true,
});

// ── DB CONNECTION ──
let cachedClient: MongoClient | null = null;
async function getDb() {
  if (!cachedClient) {
    const c = new MongoClient(MONGODB_URI, { connectTimeoutMS: 8000, socketTimeoutMS: 20000 });
    await c.connect();
    cachedClient = c;
  }
  return cachedClient.db(DB_NAME);
}

function mapDoc(doc: any) {
  if (!doc) return null;
  const { _id, ...rest } = doc;
  return { ...rest, id: rest.id || String(_id) };
}

function json(res: any, data: any, status = 200) {
  res.statusCode = status;
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Cache-Control", "no-store");
  res.end(JSON.stringify(data));
  return true;
}

// ── CRYPTO ──
function hashPassword(password: string): string {
  const salt = crypto.randomBytes(16).toString("hex");
  const hash = crypto.pbkdf2Sync(password, salt, 1000, 64, "sha512").toString("hex");
  return `${salt}:${hash}`;
}
function verifyPassword(password: string, storedHash: string): boolean {
  const [salt, hash] = storedHash.split(":");
  if (!salt || !hash) return false;
  const verifyHash = crypto.pbkdf2Sync(password, salt, 1000, 64, "sha512").toString("hex");
  return hash === verifyHash;
}

// ── DEFAULT DATA ──
const DEFAULT_ADMIN = { id: "admin-1", username: "admin", role: "admin", password: "admin123" };
const DEFAULT_SETTINGS = {
  id: "site_config",
  alertEmail: "revitalizerealestate@gmail.com",
  officePhone: "(813) 323-0291",
  smsTemplate: "Hi {Name}, thank you for contacting Revitalize Group! Daniel Thompson will contact you during the {Time} to discuss your {Type} project.",
  emailAlert: true,
  smsAlert: true,
  maintenanceMode: false,
  weekdays: "8:00 AM - 5:00 PM",
  saturdays: "8:00 AM - 5:00 PM",
  sundays: "Closed (Emergency 24/7)",
};

// ── READ BODY ──
async function readBody(req: any): Promise<any> {
  return new Promise((resolve) => {
    const chunks: Buffer[] = [];
    req.on("data", (c: Buffer) => chunks.push(c));
    req.on("end", () => {
      const raw = Buffer.concat(chunks).toString();
      try { resolve(raw ? JSON.parse(raw) : {}); } catch { resolve({}); }
    });
  });
}

// ── MAIN HANDLER ──
export default async function handler(req: any, res: any) {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const pathname = url.pathname;
  const method = req.method?.toUpperCase() || "GET";

  try {
    const db = await getDb();

    // ── /api/settings ──
    if (pathname === "/api/settings") {
      const col = db.collection("settings");
      if (method === "GET") {
        let doc = await col.findOne({ id: "site_config" });
        if (!doc) {
          await col.insertOne(DEFAULT_SETTINGS);
          return json(res, DEFAULT_SETTINGS);
        }
        // Auto-fix legacy values
        const updates: any = {};
        if (doc.alertEmail === "robertsa210@icloud.com") updates.alertEmail = "revitalizerealestate@gmail.com";
        if (doc.officePhone === "(210) 429-5526") updates.officePhone = "(813) 323-0291";
        if (Object.keys(updates).length) await col.updateOne({ id: "site_config" }, { $set: updates });
        return json(res, mapDoc(doc));
      }
      if (method === "POST") {
        const body = await readBody(req);
        await col.updateOne({ id: "site_config" }, { $set: body }, { upsert: true });
        const doc = await col.findOne({ id: "site_config" });
        return json(res, mapDoc(doc));
      }
    }

    // ── /api/leads ──
    if (pathname === "/api/leads") {
      const col = db.collection("leads");
      if (method === "GET") {
        const docs = await col.find({}).toArray();
        return json(res, docs.map(mapDoc));
      }
      if (method === "POST") {
        const body = await readBody(req);
        await col.insertOne(body);
        return json(res, body);
      }
      if (method === "PUT") {
        const body = await readBody(req);
        await col.updateOne({ id: body.id }, { $set: body });
        const docs = await col.find({}).toArray();
        return json(res, docs.map(mapDoc));
      }
      if (method === "DELETE") {
        const body = await readBody(req);
        await col.deleteOne({ id: body.id });
        const docs = await col.find({}).toArray();
        return json(res, docs.map(mapDoc));
      }
    }

    // ── /api/leads/photos ──
    if (pathname === "/api/leads/photos") {
      const body = await readBody(req);
      const leadsCol = db.collection("leads");
      if (method === "POST") {
        const uploadUrl = await cloudinary.uploader.upload(body.base64Photo, { folder: "revitalize/leads", resource_type: "auto" });
        await leadsCol.updateOne({ id: body.leadId }, { $push: { photos: uploadUrl.secure_url } } as any);
      } else if (method === "DELETE") {
        const lead = await leadsCol.findOne({ id: body.leadId });
        if (lead?.photos) {
          const photos = [...lead.photos];
          const photoUrl = photos[body.photoIndex];
          if (photoUrl?.includes("cloudinary.com")) {
            const parts = photoUrl.split("/");
            const fi = parts.indexOf("revitalize");
            const id = fi !== -1 ? parts.slice(fi).join("/").split(".")[0] : parts[parts.length - 1].split(".")[0];
            await cloudinary.uploader.destroy(id);
          }
          photos.splice(body.photoIndex, 1);
          await leadsCol.updateOne({ id: body.leadId }, { $set: { photos } });
        }
      }
      const docs = await leadsCol.find({}).toArray();
      return json(res, docs.map(mapDoc));
    }

    // ── /api/reviews ──
    if (pathname === "/api/reviews") {
      const col = db.collection("reviews");
      if (method === "GET") {
        const docs = await col.find({}).toArray();
        return json(res, docs.map(mapDoc));
      }
      if (method === "POST") {
        const body = await readBody(req);
        const photos: string[] = [];
        if (body.newReviewPhoto) {
          const r = await cloudinary.uploader.upload(body.newReviewPhoto, { folder: "revitalize/reviews", resource_type: "auto" });
          photos.push(r.secure_url);
        }
        const review = {
          title: body.title, text: body.text, author: body.author, location: body.location,
          rating: body.rating, id: "review-" + Math.random().toString(36).substr(2, 9),
          featured: true, createdAt: new Date().toISOString(), photos,
        };
        await col.insertOne(review);
        const docs = await col.find({}).toArray();
        return json(res, docs.map(mapDoc));
      }
      if (method === "PUT") {
        const body = await readBody(req);
        if (body.action === "reply") {
          await col.updateOne({ id: body.id }, { $set: { replyText: body.replyText } });
        } else if (body.action === "featured") {
          const r = await col.findOne({ id: body.id });
          await col.updateOne({ id: body.id }, { $set: { featured: r ? !r.featured : false } });
        }
        const docs = await col.find({}).toArray();
        return json(res, docs.map(mapDoc));
      }
      if (method === "DELETE") {
        const body = await readBody(req);
        await col.deleteOne({ id: body.id });
        const docs = await col.find({}).toArray();
        return json(res, docs.map(mapDoc));
      }
    }

    // ── /api/emails ──
    if (pathname === "/api/emails") {
      const col = db.collection("web_emails");
      if (method === "GET") {
        const docs = await col.find({}).toArray();
        return json(res, docs.map(mapDoc));
      }
      if (method === "POST") {
        const body = await readBody(req);
        const email = { ...body.emailData, id: "email-" + Math.random().toString(36).substr(2, 9), createdAt: new Date().toISOString() };
        await col.insertOne(email);
        const docs = await col.find({}).toArray();
        return json(res, docs.map(mapDoc));
      }
      if (method === "DELETE") {
        const body = await readBody(req);
        await col.deleteOne({ id: body.id });
        const docs = await col.find({}).toArray();
        return json(res, docs.map(mapDoc));
      }
    }

    // ── /api/chats ──
    if (pathname === "/api/chats") {
      const col = db.collection("chat_sessions");
      if (method === "GET") {
        const docs = await col.find({}).toArray();
        return json(res, docs.map(mapDoc));
      }
      if (method === "DELETE") {
        const id = url.searchParams.get("id");
        if (!id) return json(res, { error: "Missing ID" }, 400);
        await col.deleteOne({ id });
        const docs = await col.find({}).toArray();
        return json(res, docs.map(mapDoc));
      }
      if (method === "POST") {
        const body = await readBody(req);
        if (body.action === "create") {
          const session = {
            id: "session-" + Math.random().toString(36).substr(2, 9),
            clientName: body.clientName, clientCity: body.clientCity || "Tampa",
            clientEmail: body.clientEmail, clientPhone: body.clientPhone,
            lastMessage: "Chat session initialized", lastMessageTime: new Date().toISOString(),
            unread: true, messages: [],
          };
          await col.insertOne(session);
          return json(res, session);
        }
        if (body.action === "message") {
          const session = await col.findOne({ id: body.sessionId });
          if (!session) return json(res, null, 404);
          const msg = { id: "msg-" + Math.random().toString(36).substr(2, 9), sender: body.sender, text: body.text, timestamp: new Date().toISOString() };
          const updated = { ...session, messages: [...(session.messages || []), msg], lastMessage: body.text, lastMessageTime: msg.timestamp, unread: body.sender === "client" };
          await col.replaceOne({ id: body.sessionId }, updated);
          return json(res, mapDoc(updated));
        }
        if (body.action === "read") {
          await col.updateOne({ id: body.sessionId }, { $set: { unread: false } });
          const docs = await col.find({}).toArray();
          return json(res, docs.map(mapDoc));
        }
      }
    }

    // ── /api/gallery ──
    if (pathname === "/api/gallery") {
      const col = db.collection("gallery_photos");
      if (method === "GET") {
        const docs = await col.find({}).toArray();
        return json(res, docs.map(mapDoc));
      }
      if (method === "POST") {
        const body = await readBody(req);
        const r = await cloudinary.uploader.upload(body.base64Photo, { folder: "revitalize/gallery", resource_type: "auto" });
        const photo = { id: "photo-" + Math.random().toString(36).substr(2, 9), url: r.secure_url, category: body.category || "residential", uploadedAt: new Date().toISOString() };
        await col.insertOne(photo);
        const docs = await col.find({}).toArray();
        return json(res, docs.map(mapDoc));
      }
      if (method === "DELETE") {
        let id = url.searchParams.get("id");
        if (!id) { const b = await readBody(req); id = b.id; }
        if (!id) return json(res, { error: "Missing ID" }, 400);
        const photo = await col.findOne({ id });
        if (photo?.url?.includes("cloudinary.com")) {
          try {
            const parts = photo.url.split("/");
            const fi = parts.indexOf("revitalize");
            const pid = fi !== -1 ? parts.slice(fi).join("/").split(".")[0] : parts[parts.length - 1].split(".")[0];
            await cloudinary.uploader.destroy(pid);
          } catch {}
        }
        await col.deleteOne({ id });
        const docs = await col.find({}).toArray();
        return json(res, docs.map(mapDoc));
      }
    }

    // ── /api/users ──
    if (pathname === "/api/users") {
      const col = db.collection("portal_users");
      const ensureAdmin = async () => {
        const count = await col.countDocuments();
        if (count === 0) {
          const seeded = { ...DEFAULT_ADMIN, password: hashPassword(DEFAULT_ADMIN.password) };
          await col.insertOne(seeded);
        } else {
          const existing = await col.findOne({ username: DEFAULT_ADMIN.username });
          if (!existing) {
            await col.insertOne({ ...DEFAULT_ADMIN, password: hashPassword(DEFAULT_ADMIN.password) });
          } else if (!existing.password.includes(":")) {
            await col.updateOne({ id: existing.id }, { $set: { password: hashPassword(DEFAULT_ADMIN.password) } });
          }
        }
      };

      if (method === "GET") {
        await ensureAdmin();
        const docs = await col.find({}).toArray();
        return json(res, docs.map(d => ({ id: d.id, username: d.username, role: d.role })));
      }
      if (method === "POST") {
        const body = await readBody(req);
        await ensureAdmin();
        if (body.action === "login") {
          const users = await col.find({}).toArray();
          const user = users.find((u: any) => u.username.toLowerCase() === body.username.toLowerCase());
          if (user && verifyPassword(body.password, user.password)) {
            return json(res, { success: true, user: { id: user.id, username: user.username, role: user.role } });
          }
          return json(res, { error: "Invalid username or password" }, 401);
        }
        if (body.action === "create") {
          const users = await col.find({}).toArray();
          if (users.some((u: any) => u.username.toLowerCase() === body.username.toLowerCase())) {
            return json(res, { error: "Username already exists" }, 400);
          }
          const newUser = { id: "admin-" + Math.random().toString(36).substr(2, 9), username: body.username, password: hashPassword(body.password), role: body.role };
          await col.insertOne(newUser);
          return json(res, { success: true, id: newUser.id, username: newUser.username, role: newUser.role });
        }
        if (body.action === "delete") {
          await col.deleteOne({ id: body.userId });
          return json(res, { success: true });
        }
        if (body.action === "update") {
          const updates: any = {};
          if (body.username) updates.username = body.username;
          if (body.password) updates.password = hashPassword(body.password);
          await col.updateOne({ id: body.userId }, { $set: updates });
          const users = await col.find({}).toArray();
          const updated = users.find((u: any) => u.id === body.userId);
          return json(res, { success: true, username: updated?.username || body.username || "" });
        }
      }
    }

    res.statusCode = 404;
    res.end(JSON.stringify({ error: "Not Found" }));
  } catch (error: any) {
    console.error("[API Error]", error?.message || error);
    res.statusCode = 500;
    res.setHeader("Content-Type", "application/json");
    res.end(JSON.stringify({ error: error?.message || "Internal Server Error" }));
  }
}
