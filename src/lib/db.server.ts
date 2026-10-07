import { MongoClient, ObjectId } from "mongodb";
import { hashPassword } from "./crypto.server.js";

// MongoDB Connection Config
const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://revitalize_db_user:y0YMD1Zehs44T4se@revitalize.umub891.mongodb.net/?appName=revitalize";
const DB_NAME = "revitalize";

let client: MongoClient | null = null;

async function getClient(): Promise<MongoClient> {
  if (!client) {
    const newClient = new MongoClient(MONGODB_URI, {
      connectTimeoutMS: 5000,
      socketTimeoutMS: 15000,
    });
    await newClient.connect();
    client = newClient;
  }
  return client;
}

export async function getDb() {
  const connectedClient = await getClient();
  return connectedClient.db(DB_NAME);
}

// Helper to safely map MongoDB documents (_id) to application types (id)
function mapDoc<T>(doc: any): T {
  if (!doc) return null as any;
  const { _id, ...rest } = doc;
  return {
    ...rest,
    id: rest.id || String(_id),
  } as T;
}

function normalizeLeadDoc(doc: any): any {
  if (!doc) return null;
  const mapped = mapDoc<any>(doc);
  const data = mapped.leadData || mapped;
  return {
    ...mapped,
    name: data.name || mapped.name || "Unknown Lead",
    email: data.email || mapped.email || "",
    phone: data.phone || mapped.phone || "",
    address: data.address || mapped.address || "Tampa, FL",
    projectType: data.projectType || mapped.projectType || "remodeling",
    description: data.description || mapped.description || "",
    contactTime: data.contactTime || mapped.contactTime || "anytime",
    status: data.status || mapped.status || "new",
    estimatedValue: typeof data.estimatedValue === "number" ? data.estimatedValue : (typeof mapped.estimatedValue === "number" ? mapped.estimatedValue : 15000),
    createdAt: data.createdAt || mapped.createdAt || new Date().toISOString(),
    photos: Array.isArray(data.photos) ? data.photos : (Array.isArray(mapped.photos) ? mapped.photos : []),
    notes: data.notes || mapped.notes || ""
  };
}

// ── LEADS ──
export async function dbGetLeads(initialSeeds: any[]): Promise<any[]> {
  const db = await getDb();
  const leadsCol = db.collection("leads");
  const count = await leadsCol.countDocuments();
  if (count === 0 && initialSeeds.length > 0) {
    await leadsCol.insertMany(initialSeeds);
    return initialSeeds;
  }
  const docs = await leadsCol.find({}).toArray();
  return docs.map(normalizeLeadDoc);
}

export async function dbAddLead(lead: any): Promise<any> {
  const db = await getDb();
  const leadsCol = db.collection("leads");
  const normalized = normalizeLeadDoc(lead);
  const result = await leadsCol.insertOne(normalized);
  return { ...normalized, id: normalized.id || String(result.insertedId) };
}

export async function dbUpdateLead(id: string, updates: any): Promise<any[] | null> {
  const db = await getDb();
  const leadsCol = db.collection("leads");
  
  let res = await leadsCol.updateOne({ id }, { $set: updates });
  if (res.matchedCount === 0) {
    if (ObjectId.isValid(id)) {
      await leadsCol.updateOne({ _id: new ObjectId(id) }, { $set: updates });
    }
  }
  
  const docs = await leadsCol.find({}).toArray();
  return docs.map(mapDoc);
}

export async function dbDeleteLead(id: string): Promise<any[]> {
  const db = await getDb();
  const leadsCol = db.collection("leads");
  
  let res = await leadsCol.deleteOne({ id });
  if (res.deletedCount === 0) {
    if (ObjectId.isValid(id)) {
      await leadsCol.deleteOne({ _id: new ObjectId(id) });
    }
  }
  
  const docs = await leadsCol.find({}).toArray();
  return docs.map(mapDoc);
}

// ── REVIEWS ──
export async function dbGetReviews(initialSeeds: any[]): Promise<any[]> {
  const db = await getDb();
  const reviewsCol = db.collection("reviews");
  
  if (initialSeeds && initialSeeds.length > 0) {
    for (const seed of initialSeeds) {
      const exists = await reviewsCol.findOne({
        $or: [
          { id: seed.id },
          { title: seed.title, author: seed.author }
        ]
      });
      if (!exists) {
        await reviewsCol.insertOne(seed);
      }
    }
  }

  const docs = await reviewsCol.find({}).toArray();
  return docs.map(mapDoc);
}

export async function dbAddReview(review: any): Promise<any> {
  const db = await getDb();
  const reviewsCol = db.collection("reviews");
  const result = await reviewsCol.insertOne(review);
  return { ...review, id: review.id || String(result.insertedId) };
}

export async function dbUpdateReview(id: string, updates: any): Promise<any[]> {
  const db = await getDb();
  const reviewsCol = db.collection("reviews");
  
  let res = await reviewsCol.updateOne({ id }, { $set: updates });
  if (res.matchedCount === 0) {
    if (ObjectId.isValid(id)) {
      await reviewsCol.updateOne({ _id: new ObjectId(id) }, { $set: updates });
    }
  }
  
  const docs = await reviewsCol.find({}).toArray();
  return docs.map(mapDoc);
}

export async function dbDeleteReview(id: string): Promise<any[]> {
  const db = await getDb();
  const reviewsCol = db.collection("reviews");
  let res = await reviewsCol.deleteOne({ id });
  if (res.deletedCount === 0) {
    if (ObjectId.isValid(id)) {
      await reviewsCol.deleteOne({ _id: new ObjectId(id) });
    }
  }
  const docs = await reviewsCol.find({}).toArray();
  return docs.map(mapDoc);
}

// ── WEB EMAILS ──
export async function dbGetWebEmails(initialSeeds: any[]): Promise<any[]> {
  const db = await getDb();
  const emailsCol = db.collection("web_emails");
  const count = await emailsCol.countDocuments();
  if (count === 0 && initialSeeds.length > 0) {
    await emailsCol.insertMany(initialSeeds);
    return initialSeeds;
  }
  const docs = await emailsCol.find({}).toArray();
  return docs.map(mapDoc);
}

export async function dbAddWebEmail(email: any): Promise<any> {
  const db = await getDb();
  const emailsCol = db.collection("web_emails");
  const result = await emailsCol.insertOne(email);
  return { ...email, id: email.id || String(result.insertedId) };
}

export async function dbDeleteWebEmail(id: string): Promise<any[]> {
  const db = await getDb();
  const emailsCol = db.collection("web_emails");
  
  let res = await emailsCol.deleteOne({ id });
  if (res.deletedCount === 0) {
    if (ObjectId.isValid(id)) {
      await emailsCol.deleteOne({ _id: new ObjectId(id) });
    }
  }
  
  const docs = await emailsCol.find({}).toArray();
  return docs.map(mapDoc);
}

// ── CHATS ──
export async function dbGetChatSessions(initialSeeds: any[]): Promise<any[]> {
  const db = await getDb();
  const chatsCol = db.collection("chat_sessions");
  const count = await chatsCol.countDocuments();
  if (count === 0 && initialSeeds.length > 0) {
    await chatsCol.insertMany(initialSeeds);
    return initialSeeds;
  }
  const docs = await chatsCol.find({}).toArray();
  return docs.map(mapDoc);
}

export async function dbSaveChatSession(session: any): Promise<void> {
  const db = await getDb();
  const chatsCol = db.collection("chat_sessions");
  await chatsCol.updateOne({ id: session.id }, { $set: session }, { upsert: true });
}

// ── GALLERY PHOTOS ──
export async function dbGetGalleryPhotos(initialSeeds: any[]): Promise<any[]> {
  const db = await getDb();
  const galleryCol = db.collection("gallery_photos");
  const count = await galleryCol.countDocuments();
  if (count === 0 && initialSeeds.length > 0) {
    await galleryCol.insertMany(initialSeeds);
    return initialSeeds;
  }
  const docs = await galleryCol.find({}).toArray();
  return docs.map(mapDoc);
}

export async function dbAddGalleryPhoto(photo: any): Promise<any[]> {
  const db = await getDb();
  const galleryCol = db.collection("gallery_photos");
  await galleryCol.insertOne(photo);
  const docs = await galleryCol.find({}).toArray();
  return docs.map(mapDoc);
}

export async function dbRemoveGalleryPhoto(id: string): Promise<any[]> {
  const db = await getDb();
  const galleryCol = db.collection("gallery_photos");
  
  let res = await galleryCol.deleteOne({ id });
  if (res.deletedCount === 0) {
    if (ObjectId.isValid(id)) {
      await galleryCol.deleteOne({ _id: new ObjectId(id) });
    }
  }
  
  const docs = await galleryCol.find({}).toArray();
  return docs.map(mapDoc);
}

// ── PORTAL SECURITY & AUTH ACCOUNTS ──
export async function dbGetPortalUsers(defaultAdmin: any): Promise<any[]> {
  const db = await getDb();
  const accountsCol = db.collection("portal_users");
  const count = await accountsCol.countDocuments();
  if (count === 0) {
    const hashedPassword = await hashPassword(defaultAdmin.password);
    const seededAdmin = { ...defaultAdmin, password: hashedPassword };
    await accountsCol.insertOne(seededAdmin);
    return [seededAdmin];
  }

  // Ensure default admin exists and has the correct password hashed
  const existingDefaultAdmin = await accountsCol.findOne({ username: defaultAdmin.username });
  if (!existingDefaultAdmin) {
    const hashedPassword = await hashPassword(defaultAdmin.password);
    const seededAdmin = { ...defaultAdmin, password: hashedPassword };
    await accountsCol.insertOne(seededAdmin);
  } else {
    // If it exists but contains a plaintext password (no salt separator ':'), update to hashed admin123
    const isPlaintext = !existingDefaultAdmin.password.includes(":");
    if (isPlaintext) {
      const hashedPassword = await hashPassword(defaultAdmin.password);
      await accountsCol.updateOne({ id: existingDefaultAdmin.id }, { $set: { password: hashedPassword } });
    }
  }

  const docs = await accountsCol.find({}).toArray();
  return docs.map(mapDoc);
}

export async function dbAddPortalUser(user: any): Promise<void> {
  const db = await getDb();
  const accountsCol = db.collection("portal_users");
  await accountsCol.insertOne(user);
}

export async function dbDeletePortalUser(userId: string): Promise<void> {
  const db = await getDb();
  const accountsCol = db.collection("portal_users");
  
  let res = await accountsCol.deleteOne({ id: userId });
  if (res.deletedCount === 0) {
    if (ObjectId.isValid(userId)) {
      await accountsCol.deleteOne({ _id: new ObjectId(userId) });
    }
  }
}

export async function dbUpdatePortalUser(userId: string, updates: any): Promise<any[]> {
  const db = await getDb();
  const accountsCol = db.collection("portal_users");
  
  let res = await accountsCol.updateOne({ id: userId }, { $set: updates });
  if (res.matchedCount === 0) {
    if (ObjectId.isValid(userId)) {
      await accountsCol.updateOne({ _id: new ObjectId(userId) }, { $set: updates });
    }
  }
  
  const docs = await accountsCol.find({}).toArray();
  return docs.map(mapDoc);
}

// ── SETTINGS ──
export async function dbGetSettings(defaultSettings: any): Promise<any> {
  const db = await getDb();
  const settingsCol = db.collection("settings");
  let doc = await settingsCol.findOne({ id: "site_config" });
  if (!doc) {
    const seeded = { ...defaultSettings, id: "site_config" };
    await settingsCol.insertOne(seeded);
    return seeded;
  }
  
  // Auto-correct legacy database values if present
  let needsUpdate = false;
  const updates: any = {};
  if (doc.alertEmail === "robertsa210@icloud.com") {
    doc.alertEmail = "revitalizerealestate@gmail.com";
    updates.alertEmail = "revitalizerealestate@gmail.com";
    needsUpdate = true;
  }
  if (doc.officePhone === "(210) 429-5526") {
    doc.officePhone = "(813) 323-0291";
    updates.officePhone = "(813) 323-0291";
    needsUpdate = true;
  }
  if (needsUpdate) {
    await settingsCol.updateOne({ id: "site_config" }, { $set: updates });
  }

  return mapDoc(doc);
}

export async function dbSaveSettings(settings: any): Promise<any> {
  const db = await getDb();
  const settingsCol = db.collection("settings");
  await settingsCol.updateOne({ id: "site_config" }, { $set: settings }, { upsert: true });
  const doc = await settingsCol.findOne({ id: "site_config" });
  return mapDoc(doc);
}

// ── BLOG POSTS ──
export async function dbGetBlogPosts(initialSeeds: any[]): Promise<any[]> {
  const db = await getDb();
  const blogCol = db.collection("blog_posts");
  const count = await blogCol.countDocuments();
  if (count === 0 && initialSeeds && initialSeeds.length > 0) {
    try {
      await blogCol.insertMany(initialSeeds);
      return initialSeeds;
    } catch (e) {
      console.warn("Could not batch insert initial blog posts:", e);
    }
  }
  const docs = await blogCol.find({}).sort({ _id: -1 }).toArray();
  return docs.map(mapDoc);
}

export async function dbAddBlogPost(post: any): Promise<any> {
  const db = await getDb();
  const blogCol = db.collection("blog_posts");
  const postToInsert = {
    ...post,
    id: post.id || "blog-" + Math.random().toString(36).substr(2, 9),
    date: post.date || new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
    createdAt: new Date().toISOString(),
    isCustom: true
  };
  const result = await blogCol.insertOne(postToInsert);
  return { ...postToInsert, id: postToInsert.id || String(result.insertedId) };
}

export async function dbDeleteBlogPost(id: string | number): Promise<any[]> {
  const db = await getDb();
  const blogCol = db.collection("blog_posts");

  const idStr = String(id);
  let res = await blogCol.deleteOne({ $or: [{ id: idStr }, { id: typeof id === "number" ? id : -1 }] });
  if (res.deletedCount === 0) {
    if (ObjectId.isValid(idStr)) {
      await blogCol.deleteOne({ _id: new ObjectId(idStr) });
    }
  }

  const docs = await blogCol.find({}).sort({ _id: -1 }).toArray();
  return docs.map(mapDoc);
}

