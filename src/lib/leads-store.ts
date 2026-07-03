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

// ── LOCAL STORAGE INITIALIZATION HELPER ──

const getStorageItem = <T>(key: string, defaultValue: T): T => {
  if (typeof window === "undefined") return defaultValue;
  const stored = localStorage.getItem(key);
  if (!stored) {
    localStorage.setItem(key, JSON.stringify(defaultValue));
    return defaultValue;
  }
  try {
    return JSON.parse(stored) as T;
  } catch {
    return defaultValue;
  }
};

const setStorageItem = <T>(key: string, value: T): void => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

// ── GET/SET METHODS ──

export const getLeads = async (): Promise<Lead[]> => {
  return getStorageItem<Lead[]>("revitalize-leads", INITIAL_LEADS);
};

export const addLead = async (leadData: Omit<Lead, "id" | "status" | "estimatedValue" | "createdAt">): Promise<Lead> => {
  const leads = await getLeads();
  let estimatedValue = 15000;
  switch (leadData.projectType) {
    case "remodeling": estimatedValue = 45000; break;
    case "kitchen": estimatedValue = 85000; break;
    case "bathroom": estimatedValue = 25000; break;
    case "real-estate": estimatedValue = 350000; break;
    case "cleaning": estimatedValue = 1200; break;
    case "cabinets": estimatedValue = 15000; break;
  }
  const newLead: Lead = {
    ...leadData,
    id: "lead-" + Math.random().toString(36).substr(2, 9),
    status: "new",
    estimatedValue,
    createdAt: new Date().toISOString(),
    photos: []
  };
  leads.push(newLead);
  setStorageItem("revitalize-leads", leads);
  return newLead;
};

export const addCustomLead = async (lead: Omit<Lead, "id" | "createdAt">): Promise<Lead> => {
  const leads = await getLeads();
  const newLead: Lead = {
    ...lead,
    id: "lead-" + Math.random().toString(36).substr(2, 9),
    createdAt: new Date().toISOString()
  };
  leads.push(newLead);
  setStorageItem("revitalize-leads", leads);
  return newLead;
};

export const updateLeadStatus = async (id: string, status: Lead["status"]): Promise<Lead[] | null> => {
  const leads = await getLeads();
  const updated = leads.map(l => l.id === id ? { ...l, status } : l);
  setStorageItem("revitalize-leads", updated);
  return updated;
};

export const updateLeadDetails = async (id: string, updates: Partial<Pick<Lead, "estimatedValue" | "notes" | "status">>): Promise<Lead[] | null> => {
  const leads = await getLeads();
  const updated = leads.map(l => l.id === id ? { ...l, ...updates } : l);
  setStorageItem("revitalize-leads", updated);
  return updated;
};

export const deleteLead = async (id: string): Promise<Lead[]> => {
  const leads = await getLeads();
  const filtered = leads.filter(l => l.id !== id);
  setStorageItem("revitalize-leads", filtered);
  return filtered;
};

export const uploadLeadPhoto = async (leadId: string, base64Photo: string): Promise<Lead[]> => {
  const leads = await getLeads();
  const updated = leads.map(l => {
    if (l.id === leadId) {
      const photos = l.photos || [];
      return { ...l, photos: [...photos, base64Photo] };
    }
    return l;
  });
  setStorageItem("revitalize-leads", updated);
  return updated;
};

export const removeLeadPhoto = async (leadId: string, photoIndex: number): Promise<Lead[]> => {
  const leads = await getLeads();
  const updated = leads.map(l => {
    if (l.id === leadId && l.photos) {
      const photos = [...l.photos];
      photos.splice(photoIndex, 1);
      return { ...l, photos };
    }
    return l;
  });
  setStorageItem("revitalize-leads", updated);
  return updated;
};

// ── REVIEWS ──

export const getReviews = async (): Promise<Review[]> => {
  return getStorageItem<Review[]>("revitalize-reviews", INITIAL_REVIEWS);
};

export const addReview = async (reviewData: Omit<Review, "id" | "featured" | "createdAt"> & { newReviewPhoto?: string }): Promise<Review> => {
  const reviews = await getReviews();
  const photos: string[] = [];
  if (reviewData.newReviewPhoto) {
    photos.push(reviewData.newReviewPhoto);
  }
  const newReview: Review = {
    ...reviewData,
    id: "review-" + Math.random().toString(36).substr(2, 9),
    featured: true,
    createdAt: new Date().toISOString(),
    photos
  };
  reviews.unshift(newReview);
  setStorageItem("revitalize-reviews", reviews);
  return newReview;
};

export const toggleReviewFeatured = async (id: string): Promise<Review[]> => {
  const reviews = await getReviews();
  const updated = reviews.map(r => r.id === id ? { ...r, featured: !r.featured } : r);
  setStorageItem("revitalize-reviews", updated);
  return updated;
};

export const replyToReview = async (id: string, replyText: string): Promise<Review[]> => {
  const reviews = await getReviews();
  const updated = reviews.map(r => r.id === id ? { ...r, replyText } : r);
  setStorageItem("revitalize-reviews", updated);
  return updated;
};

// ── CHATS ──

export const getChatSessions = async (): Promise<ChatSession[]> => {
  return getStorageItem<ChatSession[]>("revitalize-chats", INITIAL_CHATS);
};

export const getChatSessionById = async (sessionId: string): Promise<ChatSession | null> => {
  const chats = await getChatSessions();
  return chats.find(c => c.id === sessionId) || null;
};

export const createChatSession = async (
  clientName: string,
  clientCity: string = "Tampa",
  clientEmail?: string,
  clientPhone?: string
): Promise<ChatSession> => {
  const chats = await getChatSessions();
  const newSession: ChatSession = {
    id: "session-" + Math.random().toString(36).substr(2, 9),
    clientName,
    clientCity,
    clientEmail,
    clientPhone,
    lastMessage: "Chat session initialized",
    lastMessageTime: new Date().toISOString(),
    unread: true,
    messages: []
  };
  chats.push(newSession);
  setStorageItem("revitalize-chats", chats);
  return newSession;
};

export const sendChatMessage = async (sessionId: string, sender: "client" | "admin", text: string): Promise<ChatSession | null> => {
  const chats = await getChatSessions();
  let updatedSession: ChatSession | null = null;

  const updatedChats = chats.map(c => {
    if (c.id === sessionId) {
      const newMsg: ChatMessage = {
        id: "msg-" + Math.random().toString(36).substr(2, 9),
        sender,
        text,
        timestamp: new Date().toISOString()
      };
      updatedSession = {
        ...c,
        messages: [...c.messages, newMsg],
        lastMessage: text,
        lastMessageTime: newMsg.timestamp,
        unread: sender === "client"
      };
      return updatedSession;
    }
    return c;
  });

  setStorageItem("revitalize-chats", updatedChats);
  return updatedSession;
};

export const markChatAsRead = async (sessionId: string): Promise<ChatSession[]> => {
  const chats = await getChatSessions();
  const updated = chats.map(c => c.id === sessionId ? { ...c, unread: false } : c);
  setStorageItem("revitalize-chats", updated);
  return updated;
};

// ── EMAILS ──

export const getWebEmails = async (): Promise<WebEmail[]> => {
  return getStorageItem<WebEmail[]>("revitalize-emails", INITIAL_EMAILS);
};

export const addWebEmail = async (emailData: Omit<WebEmail, "id" | "createdAt">): Promise<WebEmail> => {
  const emails = await getWebEmails();
  const newEmail: WebEmail = {
    ...emailData,
    id: "email-" + Math.random().toString(36).substr(2, 9),
    createdAt: new Date().toISOString()
  };
  emails.unshift(newEmail);
  setStorageItem("revitalize-emails", emails);
  return newEmail;
};

export const deleteWebEmail = async (id: string): Promise<WebEmail[]> => {
  const emails = await getWebEmails();
  const filtered = emails.filter(e => e.id !== id);
  setStorageItem("revitalize-emails", filtered);
  return filtered;
};

// ── GALLERY PHOTOS ──

export interface GalleryPhoto {
  id: string;
  url: string;
  uploadedAt: string;
}

export const getGalleryPhotos = async (): Promise<GalleryPhoto[]> => {
  return getStorageItem<GalleryPhoto[]>("revitalize-gallery-photos", [
    { id: "photo-1", url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c", uploadedAt: new Date().toISOString() }
  ]);
};

export const uploadGalleryPhoto = async (base64Photo: string): Promise<GalleryPhoto[]> => {
  const photos = await getGalleryPhotos();
  const newPhoto: GalleryPhoto = {
    id: "photo-" + Math.random().toString(36).substr(2, 9),
    url: base64Photo,
    uploadedAt: new Date().toISOString()
  };
  photos.unshift(newPhoto);
  setStorageItem("revitalize-gallery-photos", photos);
  return photos;
};

export const removeGalleryPhoto = async (id: string): Promise<GalleryPhoto[]> => {
  const photos = await getGalleryPhotos();
  const filtered = photos.filter(p => p.id !== id);
  setStorageItem("revitalize-gallery-photos", filtered);
  return filtered;
};

// ── PORTAL SECURITY & AUTH ──

const DEFAULT_ADMIN = { id: "admin-1", username: "admin", role: "admin", password: "admin" };

export const loginAdmin = async (username: string, password: string): Promise<{ success: boolean; token: string }> => {
  const accounts = getStorageItem<any[]>("revitalize-admin-accounts", [DEFAULT_ADMIN]);
  const user = accounts.find(a => a.username.toLowerCase() === username.toLowerCase() && a.password === password);
  if (user) {
    const token = "token-" + user.id + "-" + Math.random().toString(36).substr(2, 9);
    localStorage.setItem("revitalize-session-token", token);
    localStorage.setItem("revitalize-session-user", JSON.stringify({ id: user.id, username: user.username, role: user.role }));
    return { success: true, token };
  }
  throw new Error("Invalid username or password.");
};

export const verifyAdminToken = async (token: string): Promise<{ valid: boolean; id?: string; username?: string; role?: string }> => {
  const activeToken = localStorage.getItem("revitalize-session-token");
  const storedUser = localStorage.getItem("revitalize-session-user");
  if (activeToken === token && storedUser) {
    const u = JSON.parse(storedUser);
    return { valid: true, id: u.id, username: u.username, role: u.role };
  }
  return { valid: false };
};

export const getPortalUsers = async (): Promise<PortalUser[]> => {
  const accounts = getStorageItem<any[]>("revitalize-admin-accounts", [DEFAULT_ADMIN]);
  return accounts.map(a => ({ id: a.id, username: a.username, role: a.role }));
};

export const createPortalUser = async (username: string, password: string, role: string): Promise<{ success: boolean; id: string; username: string; role: string }> => {
  const accounts = getStorageItem<any[]>("revitalize-admin-accounts", [DEFAULT_ADMIN]);
  if (accounts.some(a => a.username.toLowerCase() === username.toLowerCase())) {
    throw new Error("Username already exists.");
  }
  const newUser = {
    id: "admin-" + Math.random().toString(36).substr(2, 9),
    username,
    password,
    role
  };
  accounts.push(newUser);
  setStorageItem("revitalize-admin-accounts", accounts);
  return { success: true, id: newUser.id, username: newUser.username, role: newUser.role };
};

export const deletePortalUser = async (userId: string): Promise<{ success: boolean }> => {
  const accounts = getStorageItem<any[]>("revitalize-admin-accounts", [DEFAULT_ADMIN]);
  const filtered = accounts.filter(a => a.id !== userId);
  setStorageItem("revitalize-admin-accounts", filtered);
  return { success: true };
};

export const updateUserCredentials = async (userId: string, username?: string, password?: string): Promise<{ success: boolean; username: string }> => {
  const accounts = getStorageItem<any[]>("revitalize-admin-accounts", [DEFAULT_ADMIN]);
  let updatedUsername = "";
  const updated = accounts.map(a => {
    if (a.id === userId) {
      updatedUsername = username || a.username;
      return {
        ...a,
        username: username || a.username,
        password: password || a.password
      };
    }
    return a;
  });
  setStorageItem("revitalize-admin-accounts", updated);

  // Update current session user store as well
  const storedUser = localStorage.getItem("revitalize-session-user");
  if (storedUser) {
    const u = JSON.parse(storedUser);
    if (u.id === userId) {
      u.username = updatedUsername;
      localStorage.setItem("revitalize-session-user", JSON.stringify(u));
    }
  }

  return { success: true, username: updatedUsername };
};

// Analytics calculator helper
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
