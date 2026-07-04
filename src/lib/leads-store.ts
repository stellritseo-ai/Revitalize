import { createServerFn } from "@tanstack/react-start";

export interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  address: string;
  projectType: string;
  description: string;
  contactTime: string;
  status: "new" | "contacted" | "consultation_scheduled" | "proposal_sent" | "won" | "lost";
  estimatedValue: number;
  notes?: string;
  createdAt: string;
  photos?: string[];
}

export interface Review {
  id: string;
  title: string;
  text: string;
  author: string;
  location: string;
  rating: number;
  featured: boolean;
  replyText?: string;
  createdAt: string;
  photos?: string[];
}

export interface WebEmail {
  id: string;
  name: string;
  email: string;
  phone?: string;
  service?: string;
  message?: string;
  source?: string;
  createdAt: string;
}

export interface ChatMessage {
  id: string;
  sender: "client" | "admin";
  text: string;
  timestamp: string;
}

export interface ChatSession {
  id: string;
  clientName: string;
  clientCity: string;
  clientEmail?: string;
  clientPhone?: string;
  lastMessage: string;
  lastMessageTime: string;
  unread: boolean;
  messages: ChatMessage[];
}

export interface PortalUser {
  id: string;
  username: string;
  role: string;
}

// ── INITIAL PRE-SEEDS CUSTOMIZED FOR TAMPA / REVITALIZE ──
export const INITIAL_LEADS: Lead[] = [
  {
    id: "lead-1",
    name: "Marcus Vance",
    email: "marcus.vance@gmail.com",
    phone: "(813) 555-0192",
    address: "18206 Heron Cove Dr, Tampa, FL 33647",
    projectType: "remodeling",
    description: "Looking to renovate our master bedroom suite and build an adjoining home office. Needs updated paint, custom built-in shelves, new crown molding, and luxury vinyl plank flooring.",
    contactTime: "morning",
    status: "new",
    estimatedValue: 45000,
    createdAt: "2026-06-15T09:30:00Z"
  },
  {
    id: "lead-2",
    name: "Sarah Jenkins",
    email: "sarah.j.kitchen@yahoo.com",
    phone: "(727) 555-8831",
    address: "704 Beach Dr NE, St. Petersburg, FL 33701",
    projectType: "kitchen",
    description: "Full kitchen remodeling. House was built in 1978 and needs a complete gut, island expansion, quartz countertops, modern light fixtures, and high-end double ovens.",
    contactTime: "afternoon",
    status: "contacted",
    estimatedValue: 85000,
    createdAt: "2026-06-14T14:15:00Z"
  },
  {
    id: "lead-3",
    name: "Daniel Alvarez",
    email: "dan_alvarez@outlook.com",
    phone: "(813) 555-4421",
    address: "9405 Oakwood Dr, Brandon, FL 33511",
    projectType: "real-estate",
    description: "Wanting to list our home for sale. Interested in Revitalize Group's unique pre-listing renovation strategy. We want to remodel the guest bathroom and paint the exterior to maximize value before hitting the market.",
    contactTime: "evening",
    status: "proposal_sent",
    estimatedValue: 32000,
    createdAt: "2026-06-12T11:00:00Z"
  },
  {
    id: "lead-4",
    name: "Emily Croft",
    email: "emily.croft@gmail.com",
    phone: "(813) 555-7729",
    address: "3102 N Highland Ave, Tampa, FL 33603",
    projectType: "bathroom",
    description: "Bathroom renovation. Master bathroom walk-in shower tile replacement, new frameless glass door, floating double vanity, and updated fixtures.",
    contactTime: "afternoon",
    status: "consultation_scheduled",
    estimatedValue: 24500,
    createdAt: "2026-06-11T16:40:00Z"
  },
  {
    id: "lead-5",
    name: "Amanda Carter",
    email: "amanda.carter@comcast.net",
    phone: "(727) 555-1284",
    address: "1282 Bayshore Blvd, Dunedin, FL 34698",
    projectType: "cleaning",
    description: "Need pre-move-in deep cleaning for our new 4,500 sq ft home. Includes deep carpet cleaning, window washing inside/out, and cabinet disinfection.",
    contactTime: "morning",
    status: "won",
    notes: "Contract signed, scheduled for June 22. Staff allocated.",
    estimatedValue: 1200,
    createdAt: "2026-06-08T10:10:00Z"
  },
  {
    id: "lead-6",
    name: "Jonathan Riggs",
    email: "jriggs_investments@gmail.com",
    phone: "(813) 555-9012",
    address: "4202 E Fowler Ave, Tampa, FL 33620",
    projectType: "cabinets",
    description: "Needs premium cabinet sales and installation for an entire multi-unit complex remodel (12 kitchens total). Looking for solid wood shaker-style white cabinets.",
    contactTime: "evening",
    status: "lost",
    notes: "Client chose a cheaper low-grade particle-board supplier.",
    estimatedValue: 54000,
    createdAt: "2026-06-05T15:20:00Z"
  }
];

export const INITIAL_REVIEWS: Review[] = [
  {
    id: "review-1",
    title: "Brilliant Real Estate & Renovation Service!",
    text: "Revitalize Group helped us buy a fixer-upper in St. Petersburg and remodeled the kitchen before we moved in. The combination of broker and renovation under one roof saved us so much time and money. The work is absolutely stunning!",
    author: "The Miller Family",
    location: "St. Petersburg",
    rating: 5,
    featured: true,
    createdAt: "2026-05-10T10:00:00Z"
  },
  {
    id: "review-2",
    title: "Kitchen Remodel Perfection",
    text: "We hired them to remodel our kitchen and bathroom. The custom cabinetry, quartz countertops, and flooring are gorgeous. They finished on schedule and within budget.",
    author: "Melissa & Ben R.",
    location: "Tampa",
    rating: 5,
    featured: true,
    createdAt: "2026-05-18T14:30:00Z"
  }
];

export const INITIAL_CHATS: ChatSession[] = [
  {
    id: "session-1",
    clientName: "Marcus Vance",
    clientCity: "Tampa",
    lastMessage: "When can someone come out to look at the master bedroom space?",
    lastMessageTime: new Date(Date.now() - 3600000 * 2).toISOString(),
    unread: true,
    messages: [
      {
        id: "msg-1",
        sender: "client",
        text: "Hi, I need an estimate for bedroom remodeling and an office build.",
        timestamp: new Date(Date.now() - 3600000 * 2.2).toISOString()
      },
      {
        id: "msg-2",
        sender: "admin",
        text: "Hi Marcus! We can certainly help with that. We specialize in home renovations and office conversions. Do you have a preferred timeline?",
        timestamp: new Date(Date.now() - 3600000 * 2.1).toISOString()
      },
      {
        id: "msg-3",
        sender: "client",
        text: "Looking to start next month. When can someone come out to look at the master bedroom space?",
        timestamp: new Date(Date.now() - 3600000 * 2).toISOString()
      }
    ]
  }
];

export const INITIAL_EMAILS: WebEmail[] = [
  {
    id: "email-1",
    name: "Charlotte Horn",
    email: "charlotte.horn@gmail.com",
    phone: "813-555-8291",
    service: "Real Estate Strategy",
    message: "Hi, I'm thinking of selling my Brandon house. I want to know more about how your pre-listing renovations can help me sell for more.",
    source: "Contact Page",
    createdAt: "2026-06-16T18:22:00Z"
  }
];

const DEFAULT_ADMIN = { id: "admin-1", username: "admin", role: "admin", password: "admin" };

// ── SERVER ROUTING ENGINE (Bypasses Static Analysis) ──
async function getDbServer(): Promise<any> {
  const path = "./db.server";
  return import(/* @vite-ignore */ path);
}

// ── SERVER FUNCTIONS (RPC endpoints) ──

const getLeadsServer = createServerFn({ method: "GET" })
  .handler(async () => {
    const { dbGetLeads } = await getDbServer();
    return dbGetLeads(INITIAL_LEADS);
  });

const addLeadServer = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: Omit<Lead, "id" | "status" | "estimatedValue" | "createdAt"> }) => {
    const { dbAddLead } = await getDbServer();
    let estimatedValue = 15000;
    switch (data.projectType) {
      case "remodeling": estimatedValue = 45000; break;
      case "kitchen": estimatedValue = 85000; break;
      case "bathroom": estimatedValue = 25000; break;
      case "real-estate": estimatedValue = 350000; break;
      case "cleaning": estimatedValue = 1200; break;
      case "cabinets": estimatedValue = 15000; break;
    }
    const newLead: Lead = {
      ...data,
      id: "lead-" + Math.random().toString(36).substr(2, 9),
      status: "new",
      estimatedValue,
      createdAt: new Date().toISOString(),
      photos: []
    };
    return dbAddLead(newLead);
  });

const addCustomLeadServer = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: Omit<Lead, "id" | "createdAt"> }) => {
    const { dbAddLead } = await getDbServer();
    const newLead: Lead = {
      ...data,
      id: "lead-" + Math.random().toString(36).substr(2, 9),
      createdAt: new Date().toISOString()
    };
    return dbAddLead(newLead);
  });

const updateLeadStatusServer = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: { id: string; status: Lead["status"] } }) => {
    const { dbUpdateLead } = await getDbServer();
    return dbUpdateLead(data.id, { status: data.status });
  });

const updateLeadDetailsServer = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: { id: string; updates: Partial<Pick<Lead, "estimatedValue" | "notes" | "status">> } }) => {
    const { dbUpdateLead } = await getDbServer();
    return dbUpdateLead(data.id, data.updates);
  });

const deleteLeadServer = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: { id: string } }) => {
    const { dbDeleteLead } = await getDbServer();
    return dbDeleteLead(data.id);
  });

const uploadLeadPhotoServer = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: { leadId: string; base64Photo: string } }) => {
    const { getDb } = await getDbServer();
    const db = await getDb();
    const leadsCol = db.collection("leads");
    await leadsCol.updateOne({ id: data.leadId }, { $push: { photos: data.base64Photo } } as any);
    const docs = await leadsCol.find({}).toArray();
    return docs.map((d: any) => ({ ...d, id: d.id || String(d._id), _id: undefined })) as any;
  });

const removeLeadPhotoServer = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: { leadId: string; photoIndex: number } }) => {
    const { getDb } = await getDbServer();
    const db = await getDb();
    const leadsCol = db.collection("leads");
    const lead = await leadsCol.findOne({ id: data.leadId });
    if (lead && lead.photos) {
      const photos = [...lead.photos];
      photos.splice(data.photoIndex, 1);
      await leadsCol.updateOne({ id: data.leadId }, { $set: { photos } });
    }
    const docs = await leadsCol.find({}).toArray();
    return docs.map((d: any) => ({ ...d, id: d.id || String(d._id), _id: undefined })) as any;
  });

const getReviewsServer = createServerFn({ method: "GET" })
  .handler(async () => {
    const { dbGetReviews } = await getDbServer();
    return dbGetReviews(INITIAL_REVIEWS);
  });

const addReviewServer = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: Omit<Review, "id" | "featured" | "createdAt"> & { newReviewPhoto?: string } }) => {
    const { dbAddReview } = await getDbServer();
    const photos: string[] = [];
    if (data.newReviewPhoto) {
      photos.push(data.newReviewPhoto);
    }
    const newReview: Review = {
      title: data.title,
      text: data.text,
      author: data.author,
      location: data.location,
      rating: data.rating,
      id: "review-" + Math.random().toString(36).substr(2, 9),
      featured: true,
      createdAt: new Date().toISOString(),
      photos
    };
    return dbAddReview(newReview);
  });

const toggleReviewFeaturedServer = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: { id: string } }) => {
    const { getDb, dbUpdateReview } = await getDbServer();
    const db = await getDb();
    const review = await db.collection("reviews").findOne({ id: data.id });
    const featured = review ? !review.featured : false;
    return dbUpdateReview(data.id, { featured });
  });

const replyToReviewServer = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: { id: string; replyText: string } }) => {
    const { dbUpdateReview } = await getDbServer();
    return dbUpdateReview(data.id, { replyText: data.replyText });
  });

const getChatSessionsServer = createServerFn({ method: "GET" })
  .handler(async () => {
    const { dbGetChatSessions } = await getDbServer();
    return dbGetChatSessions(INITIAL_CHATS);
  });

const createChatSessionServer = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: { clientName: string; clientCity: string; clientEmail?: string; clientPhone?: string } }) => {
    const { dbSaveChatSession } = await getDbServer();
    const newSession: ChatSession = {
      id: "session-" + Math.random().toString(36).substr(2, 9),
      clientName: data.clientName,
      clientCity: data.clientCity || "Tampa",
      clientEmail: data.clientEmail,
      clientPhone: data.clientPhone,
      lastMessage: "Chat session initialized",
      lastMessageTime: new Date().toISOString(),
      unread: true,
      messages: []
    };
    await dbSaveChatSession(newSession);
    return newSession;
  });

const sendChatMessageServer = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: { sessionId: string; sender: "client" | "admin"; text: string } }) => {
    const { getDb, dbSaveChatSession } = await getDbServer();
    const db = await getDb();
    const session = await db.collection("chat_sessions").findOne({ id: data.sessionId });
    if (!session) return null;
    const newMsg: ChatMessage = {
      id: "msg-" + Math.random().toString(36).substr(2, 9),
      sender: data.sender,
      text: data.text,
      timestamp: new Date().toISOString()
    };
    const updatedSession: ChatSession = {
      ...session,
      messages: [...(session.messages || []), newMsg],
      lastMessage: data.text,
      lastMessageTime: newMsg.timestamp,
      unread: data.sender === "client"
    } as any;
    await dbSaveChatSession(updatedSession);
    return updatedSession;
  });

const markChatAsReadServer = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: { sessionId: string } }) => {
    const { getDb } = await getDbServer();
    const db = await getDb();
    await db.collection("chat_sessions").updateOne({ id: data.sessionId }, { $set: { unread: false } });
    const docs = await db.collection("chat_sessions").find({}).toArray();
    return docs.map((d: any) => ({ ...d, id: d.id || String(d._id), _id: undefined })) as any;
  });

const getWebEmailsServer = createServerFn({ method: "GET" })
  .handler(async () => {
    const { dbGetWebEmails } = await getDbServer();
    return dbGetWebEmails(INITIAL_EMAILS);
  });

const addWebEmailServer = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: Omit<WebEmail, "id" | "createdAt"> }) => {
    const { dbAddWebEmail } = await getDbServer();
    const newEmail: WebEmail = {
      ...data,
      id: "email-" + Math.random().toString(36).substr(2, 9),
      createdAt: new Date().toISOString()
    };
    return dbAddWebEmail(newEmail);
  });

const deleteWebEmailServer = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: { id: string } }) => {
    const { dbDeleteWebEmail } = await getDbServer();
    return dbDeleteWebEmail(data.id);
  });

const getGalleryPhotosServer = createServerFn({ method: "GET" })
  .handler(async () => {
    const { dbGetGalleryPhotos } = await getDbServer();
    return dbGetGalleryPhotos([
      { id: "photo-1", url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c", uploadedAt: new Date().toISOString() }
    ]);
  });

const uploadGalleryPhotoServer = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: { base64Photo: string } }) => {
    const { dbAddGalleryPhoto } = await getDbServer();
    const newPhoto = {
      id: "photo-" + Math.random().toString(36).substr(2, 9),
      url: data.base64Photo,
      uploadedAt: new Date().toISOString()
    };
    return dbAddGalleryPhoto(newPhoto);
  });

const removeGalleryPhotoServer = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: { id: string } }) => {
    const { dbRemoveGalleryPhoto } = await getDbServer();
    return dbRemoveGalleryPhoto(data.id);
  });

const loginAdminServer = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: { username: string; password: string } }) => {
    const { dbGetPortalUsers } = await getDbServer();
    const accounts = await dbGetPortalUsers(DEFAULT_ADMIN);
    const user = accounts.find((a: any) => a.username.toLowerCase() === data.username.toLowerCase() && a.password === data.password);
    if (user) {
      return { success: true, user: { id: user.id, username: user.username, role: user.role } };
    }
    throw new Error("Invalid username or password.");
  });

const getPortalUsersServer = createServerFn({ method: "GET" })
  .handler(async () => {
    const { dbGetPortalUsers } = await getDbServer();
    const users = await dbGetPortalUsers(DEFAULT_ADMIN);
    return users.map((u: any) => ({ id: u.id, username: u.username, role: u.role }));
  });

const createPortalUserServer = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: { username: string; password: string; role: string } }) => {
    const { dbGetPortalUsers, dbAddPortalUser } = await getDbServer();
    const accounts = await dbGetPortalUsers(DEFAULT_ADMIN);
    if (accounts.some((a: any) => a.username.toLowerCase() === data.username.toLowerCase())) {
      throw new Error("Username already exists.");
    }
    const newUser = {
      id: "admin-" + Math.random().toString(36).substr(2, 9),
      username: data.username,
      password: data.password,
      role: data.role
    };
    await dbAddPortalUser(newUser);
    return { success: true, id: newUser.id, username: newUser.username, role: newUser.role };
  });

const deletePortalUserServer = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: { userId: string } }) => {
    const { dbDeletePortalUser } = await getDbServer();
    await dbDeletePortalUser(data.userId);
    return { success: true };
  });

const updateUserCredentialsServer = createServerFn({ method: "POST" })
  .handler(async ({ data }: { data: { userId: string; username?: string; password?: string } }) => {
    const { dbUpdatePortalUser } = await getDbServer();
    const updates: any = {};
    if (data.username) updates.username = data.username;
    if (data.password) updates.password = data.password;
    const users = await dbUpdatePortalUser(data.userId, updates);
    const updatedUser = users.find((u: any) => u.id === data.userId);
    return { success: true, username: updatedUser ? updatedUser.username : (data.username || "") };
  });

// ── EXPORTED DATABASE INTERFACE METHODS (Graceful routing) ──

export const getLeads = async (): Promise<Lead[]> => {
  return getLeadsServer();
};

export const addLead = async (leadData: Omit<Lead, "id" | "status" | "estimatedValue" | "createdAt">): Promise<Lead> => {
  return addLeadServer({ data: leadData });
};

export const addCustomLead = async (lead: Omit<Lead, "id" | "createdAt">): Promise<Lead> => {
  return addCustomLeadServer({ data: lead });
};

export const updateLeadStatus = async (id: string, status: Lead["status"]): Promise<Lead[] | null> => {
  return updateLeadStatusServer({ data: { id, status } });
};

export const updateLeadDetails = async (id: string, updates: Partial<Pick<Lead, "estimatedValue" | "notes" | "status">>): Promise<Lead[] | null> => {
  return updateLeadDetailsServer({ data: { id, updates } });
};

export const deleteLead = async (id: string): Promise<Lead[]> => {
  return deleteLeadServer({ data: { id } });
};

export const uploadLeadPhoto = async (leadId: string, base64Photo: string): Promise<Lead[]> => {
  return uploadLeadPhotoServer({ data: { leadId, base64Photo } });
};

export const removeLeadPhoto = async (leadId: string, photoIndex: number): Promise<Lead[]> => {
  return removeLeadPhotoServer({ data: { leadId, photoIndex } });
};

// Reviews
export const getReviews = async (): Promise<Review[]> => {
  return getReviewsServer();
};

export const addReview = async (reviewData: Omit<Review, "id" | "featured" | "createdAt"> & { newReviewPhoto?: string }): Promise<Review> => {
  return addReviewServer({ data: reviewData });
};

export const toggleReviewFeatured = async (id: string): Promise<Review[]> => {
  return toggleReviewFeaturedServer({ data: { id } });
};

export const replyToReview = async (id: string, replyText: string): Promise<Review[]> => {
  return replyToReviewServer({ data: { id, replyText } });
};

// Chats
export const getChatSessions = async (): Promise<ChatSession[]> => {
  return getChatSessionsServer();
};

export const getChatSessionById = async (sessionId: string): Promise<ChatSession | null> => {
  const sessions = await getChatSessions();
  return sessions.find(s => s.id === sessionId) || null;
};

export const createChatSession = async (
  clientName: string,
  clientCity: string = "Tampa",
  clientEmail?: string,
  clientPhone?: string
): Promise<ChatSession> => {
  return createChatSessionServer({ data: { clientName, clientCity, clientEmail, clientPhone } });
};

export const sendChatMessage = async (sessionId: string, sender: "client" | "admin", text: string): Promise<ChatSession | null> => {
  return sendChatMessageServer({ data: { sessionId, sender, text } });
};

export const markChatAsRead = async (sessionId: string): Promise<ChatSession[]> => {
  return markChatAsReadServer({ data: { sessionId } });
};

// Emails
export const getWebEmails = async (): Promise<WebEmail[]> => {
  return getWebEmailsServer();
};

export const addWebEmail = async (emailData: Omit<WebEmail, "id" | "createdAt">): Promise<WebEmail> => {
  return addWebEmailServer({ data: emailData });
};

export const deleteWebEmail = async (id: string): Promise<WebEmail[]> => {
  return deleteWebEmailServer({ data: { id } });
};

// Gallery
export const getGalleryPhotos = async (): Promise<GalleryPhoto[]> => {
  return getGalleryPhotosServer();
};

export const uploadGalleryPhoto = async (base64Photo: string): Promise<GalleryPhoto[]> => {
  return uploadGalleryPhotoServer({ data: { base64Photo } });
};

export const removeGalleryPhoto = async (id: string): Promise<GalleryPhoto[]> => {
  return removeGalleryPhotoServer({ data: { id } });
};

// Auth & Portal Users
export const loginAdmin = async (username: string, password: string): Promise<{ success: boolean; token: string }> => {
  const res = await loginAdminServer({ data: { username, password } });
  if (res.success && typeof window !== "undefined") {
    const token = "token-" + res.user.id + "-" + Math.random().toString(36).substr(2, 9);
    localStorage.setItem("revitalize-session-token", token);
    localStorage.setItem("revitalize-session-user", JSON.stringify(res.user));
    return { success: true, token };
  }
  throw new Error("Invalid username or password.");
};

export const verifyAdminToken = async (token: string): Promise<{ valid: boolean; id?: string; username?: string; role?: string }> => {
  if (typeof window === "undefined") return { valid: false };
  const activeToken = localStorage.getItem("revitalize-session-token");
  const storedUser = localStorage.getItem("revitalize-session-user");
  if (activeToken === token && storedUser) {
    const u = JSON.parse(storedUser);
    return { valid: true, id: u.id, username: u.username, role: u.role };
  }
  return { valid: false };
};

export const getPortalUsers = async (): Promise<PortalUser[]> => {
  return getPortalUsersServer();
};

export const createPortalUser = async (username: string, password: string, role: string): Promise<{ success: boolean; id: string; username: string; role: string }> => {
  return createPortalUserServer({ data: { username, password, role } });
};

export const deletePortalUser = async (userId: string): Promise<{ success: boolean }> => {
  return deletePortalUserServer({ data: { userId } });
};

export const updateUserCredentials = async (userId: string, username?: string, password?: string): Promise<{ success: boolean; username: string }> => {
  const res = await updateUserCredentialsServer({ data: { userId, username, password } });
  if (res.success && typeof window !== "undefined") {
    const storedUser = localStorage.getItem("revitalize-session-user");
    if (storedUser) {
      const u = JSON.parse(storedUser);
      if (u.id === userId) {
        u.username = res.username;
        localStorage.setItem("revitalize-session-user", JSON.stringify(u));
      }
    }
  }
  return res;
};

// Analytics calculator helper (preserved exactly)
export const getAnalyticsData = (leads: Lead[], reviews: Review[]) => {
  const totalValue = leads.reduce((acc, curr) => curr.status !== "lost" ? acc + curr.estimatedValue : acc, 0);
  const activeCount = leads.filter(l => ["contacted", "consultation_scheduled", "proposal_sent"].includes(l.status)).length;
  
  const wonLeads = leads.filter(l => l.status === "won");
  const lostLeads = leads.filter(l => l.status === "lost");
  const wonValue = wonLeads.reduce((acc, curr) => acc + curr.estimatedValue, 0);
  const totalClosed = wonLeads.length + lostLeads.length;
  const winRate = totalClosed > 0 ? Math.round((wonLeads.length / totalClosed) * 100) : 0;
  
  const averageValue = leads.length > 0 ? Math.round(leads.reduce((acc, curr) => acc + curr.estimatedValue, 0) / leads.length) : 0;

  // 1. Project type distribution
  const typeCounts: Record<string, { count: number; value: number }> = {};
  leads.forEach(l => {
    if (!typeCounts[l.projectType]) {
      typeCounts[l.projectType] = { count: 0, value: 0 };
    }
    typeCounts[l.projectType].count += 1;
    typeCounts[l.projectType].value += l.estimatedValue;
  });

  const projectTypesChart = Object.entries(typeCounts).map(([name, data]) => ({
    name: name.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" "),
    value: data.count,
    amount: data.value
  }));

  // 2. Status distribution
  const statusLabels: Record<Lead["status"], string> = {
    new: "New Lead",
    contacted: "Contacted",
    consultation_scheduled: "Consultation Scheduled",
    proposal_sent: "Proposal Sent",
    won: "Contract Won",
    lost: "Lost / Closed"
  };

  const statusCounts: Record<string, number> = {
    "New Lead": 0,
    "Contacted": 0,
    "Consultation Scheduled": 0,
    "Proposal Sent": 0,
    "Contract Won": 0,
    "Lost / Closed": 0
  };

  leads.forEach(l => {
    const label = statusLabels[l.status];
    statusCounts[label] = (statusCounts[label] || 0) + 1;
  });

  const statusChart = Object.entries(statusCounts).map(([name, value]) => ({
    name,
    value
  }));

  // 3. Regional distribution (cities)
  const cityCounts: Record<string, number> = {};
  leads.forEach(l => {
    const addressStr = l.address || "";
    const parts = addressStr.split(",");
    let city = "Tampa";
    if (parts.length >= 2) {
      const cityPart = parts[parts.length - 2].trim();
      city = cityPart || "Tampa";
    }
    cityCounts[city] = (cityCounts[city] || 0) + 1;
  });

  const regionChart = Object.entries(cityCounts)
    .map(([name, value]) => ({ name, value }))
    .sort((a, b) => b.value - a.value);

  // 4. Growth monthly timeline
  const monthlyData: Record<string, { count: number; value: number }> = {
    "Jan": { count: 4, value: 54000 },
    "Feb": { count: 6, value: 89000 },
    "Mar": { count: 8, value: 145000 },
    "Apr": { count: 9, value: 110000 },
    "May": { count: 12, value: 240000 },
    "Jun": { count: 0, value: 0 }
  };

  leads.forEach(l => {
    if (!l.createdAt) return;
    const date = new Date(l.createdAt);
    if (isNaN(date.getTime())) return;
    const month = date.toLocaleString("en-US", { month: "short" });
    if (monthlyData[month]) {
      monthlyData[month].count += 1;
      monthlyData[month].value += l.estimatedValue;
    } else {
      monthlyData[month] = { count: 1, value: l.estimatedValue };
    }
  });

  const timelineChart = Object.entries(monthlyData).map(([month, data]) => ({
    name: month,
    leads: data.count,
    revenue: data.value
  }));

  return {
    totalValue,
    activeCount,
    winRate,
    wonValue,
    averageValue,
    totalLeads: leads.length,
    projectTypesChart,
    statusChart,
    regionChart,
    timelineChart
  };
};

export interface GalleryPhoto {
  id: string;
  url: string;
  uploadedAt: string;
}
