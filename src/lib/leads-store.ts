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

export interface GalleryPhoto {
  id: string;
  url: string;
  category?: string;
  uploadedAt: string;
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
    title: "A Kitchen Transformation Beyond Expectations",
    text: "Revitalize Real Estate completely rebuilt my outdated Tampa kitchen, and the results are stunning. They handled everything—drywall, flooring, custom cabinetry, and even coordinated plumbing seamlessly. Their team showed up on time every day, stayed on budget, and kept the worksite surprisingly clean. I finally have the kitchen I've always dreamed of. Highly recommend!",
    author: "David R.",
    location: "Tampa, FL",
    rating: 5,
    featured: true,
    createdAt: "2026-05-01T12:00:00Z"
  },
  {
    id: "review-2",
    title: "Real Pros Who Delivered Excellence",
    text: "From framing to final paint, everything was clean and permitted correctly. I loved that they offered video meetings during the planning phase—it saved us so much time and made the process incredibly convenient. The craftsmanship is on a completely different level. Revitalize Real Estate is the definition of professional.",
    author: "Lisa M.",
    location: "Clearwater, FL",
    rating: 5,
    featured: true,
    createdAt: "2026-05-02T12:00:00Z"
  },
  {
    id: "review-3",
    title: "A Bathroom Remodel That Feels Like a Spa",
    text: "We hired Revitalize Real Estate for a full bathroom remodel, and the results exceeded every expectation. The attention to detail in the tile work, the premium fixtures, and the flawless finish made our master bath feel like a luxury spa. Their project manager kept us informed every single day. This is the quality you hope for but rarely find.",
    author: "Marcus T.",
    location: "St. Petersburg, FL",
    rating: 5,
    featured: true,
    createdAt: "2026-05-03T12:00:00Z"
  },
  {
    id: "review-4",
    title: "No Hidden Fees—Exactly What Was Quoted",
    text: "I was skeptical about remodeling our master bath, but Revitalize Real Estate made it stress-free. Their estimate process was surprisingly accurate. The final invoice matched the initial quote almost perfectly—no hidden fees, no surprise costs. They delivered premium quality with integrity. We couldn't be happier.",
    author: "Elena P.",
    location: "Tampa, FL",
    rating: 5,
    featured: true,
    createdAt: "2026-05-04T12:00:00Z"
  },
  {
    id: "review-5",
    title: "They Navigated Permitting Like Pros",
    text: "We hired Revitalize Real Estate for a commercial build-out for our new retail space in Wesley Chapel, and they were incredible. They navigated the city permitting process like seasoned experts and got us open on time. Their team was professional, efficient, and communicative. Highly recommend for any construction need!",
    author: "Robert W.",
    location: "Wesley Chapel, FL",
    rating: 5,
    featured: true,
    createdAt: "2026-05-05T12:00:00Z"
  },
  {
    id: "review-6",
    title: "A Whole-Home Transformation",
    text: "I was nervous about undertaking a whole-home improvement project, but their project manager kept me informed every single day. The transformation is breathtaking—every room feels brand new. From the kitchen to the bathrooms to the flooring, the craftsmanship is impeccable. I finally love coming home.",
    author: "Amanda C.",
    location: "Riverview, FL",
    rating: 5,
    featured: true,
    createdAt: "2026-05-06T12:00:00Z"
  },
  {
    id: "review-7",
    title: "Professional Cleaning That Sold Our House in 8 Hours",
    text: "We had our house on the market for months with no offers. Revitalize Real Estate came in for a professional deep clean and some minor touch-ups, and we had an offer in just 8 hours. The difference was night and day. They made our house look like a million bucks. I can't thank them enough!",
    author: "Sarah & Mark T.",
    location: "Brandon, FL",
    rating: 5,
    featured: true,
    createdAt: "2026-05-07T12:00:00Z"
  },
  {
    id: "review-8",
    title: "Affordable, Honest, and Incredibly Detailed",
    text: "Love this company! They are very honest, professional, and incredibly detailed. Their prices are very affordable. They made our house look like a million dollars, and after they finished the job, we wanted to keep the house instead of selling it. We really love their work and highly recommend them.",
    author: "Jennifer K.",
    location: "Lutz, FL",
    rating: 5,
    featured: true,
    createdAt: "2026-05-08T12:00:00Z"
  },
  {
    id: "review-9",
    title: "From Vision to Reality—Flawlessly Executed",
    text: "We had a very specific vision for our kitchen remodel, and Revitalize Real Estate brought it to life flawlessly. They listened to everything we wanted, offered expert suggestions, and delivered a result that exceeded our dreams. The custom cabinetry and premium counters are showstoppers. Thank you!",
    author: "Michael & Laura D.",
    location: "Odessa, FL",
    rating: 5,
    featured: true,
    createdAt: "2026-05-09T12:00:00Z"
  },
  {
    id: "review-10",
    title: "Expert Guidance for First-Time Home Sellers",
    text: "As first-time home sellers, we were overwhelmed. Revitalize Real Estate guided us through the entire process—from pre-listing improvements to staging advice. They helped us prepare our home to sell for top dollar, and we couldn't be happier with the result. Their expertise is unmatched.",
    author: "Ryan & Jessica P.",
    location: "Land O' Lakes, FL",
    rating: 5,
    featured: true,
    createdAt: "2026-05-10T12:00:00Z"
  },
  {
    id: "review-11",
    title: "Quality Work, Respectful Team",
    text: "Their team was incredibly respectful of our home and family during the renovation. They worked efficiently, kept the noise to a minimum, and cleaned up every day before leaving. The quality of their work is outstanding. I would hire them again in a heartbeat for any future project.",
    author: "Cynthia R.",
    location: "Zephyrhills, FL",
    rating: 5,
    featured: true,
    createdAt: "2026-05-11T12:00:00Z"
  },
  {
    id: "review-12",
    title: "Premium Cabinet Design That Transformed Our Kitchen",
    text: "We chose Revitalize Real Estate for premium cabinet sales and custom design, and the results are phenomenal. The custom cabinetry is beautiful, functional, and perfectly fits our space. The entire process was seamless, from the design consultation to the final installation. Highly recommend their cabinet services!",
    author: "Tom & Diane S.",
    location: "Plant City, FL",
    rating: 5,
    featured: true,
    createdAt: "2026-05-12T12:00:00Z"
  },
  {
    id: "review-13",
    title: "An Investment That Increased Our Home's Value",
    text: "We hired Revitalize Real Estate for a bathroom remodel and flooring installation before selling our home. The investment paid off—we received multiple offers above asking price within days. Their work added incredible value to our property. They are our go-to team for any future home projects.",
    author: "Karen & James W.",
    location: "Apollo Beach, FL",
    rating: 5,
    featured: true,
    createdAt: "2026-05-13T12:00:00Z"
  }
];

export const INITIAL_CHATS: ChatSession[] = [];

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

const DEFAULT_ADMIN = { id: "admin-1", username: "admin", role: "admin", password: "admin123" };

// ── LOCAL STORAGE FALLBACK HELPERS ──
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

// ── GENERIC API FETCH HELPER ──
async function apiCall<T>(url: string, method: string, body?: any): Promise<T> {
  const options: RequestInit = { method };
  if (body !== undefined) {
    options.headers = { "content-type": "application/json" };
    options.body = JSON.stringify(body);
  }
  const res = await fetch(url, options);
  if (!res.ok) {
    const errorBody = await res.json().catch(() => ({}));
    throw new Error(errorBody.error || `HTTP error ${res.status}`);
  }
  return res.json() as Promise<T>;
}

// ── LEADS ──
export const getLeads = async (): Promise<Lead[]> => {
  try {
    const leads = await apiCall<Lead[]>("/api/leads", "GET");
    setStorageItem("revitalize-leads", leads);
    return leads;
  } catch (err) {
    console.warn("MongoDB offline, falling back to local storage leads:", err);
    return getStorageItem<Lead[]>("revitalize-leads", INITIAL_LEADS);
  }
};

export const addLead = async (leadData: Omit<Lead, "id" | "status" | "estimatedValue" | "createdAt">): Promise<Lead> => {
  try {
    return await apiCall<Lead>("/api/leads", "POST", { leadData });
  } catch (err) {
    console.warn("MongoDB offline, falling back to local storage:", err);
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
  }
};

export const addCustomLead = async (lead: Omit<Lead, "id" | "createdAt">): Promise<Lead> => {
  try {
    return await apiCall<Lead>("/api/leads", "POST", { custom: true, lead });
  } catch (err) {
    console.warn("MongoDB offline, falling back to local storage:", err);
    const leads = await getLeads();
    const newLead: Lead = {
      ...lead,
      id: "lead-" + Math.random().toString(36).substr(2, 9),
      createdAt: new Date().toISOString()
    };
    leads.push(newLead);
    setStorageItem("revitalize-leads", leads);
    return newLead;
  }
};

export const updateLeadStatus = async (id: string, status: Lead["status"]): Promise<Lead[] | null> => {
  try {
    return await apiCall<Lead[]>("/api/leads", "PUT", { id, updates: { status } });
  } catch (err) {
    console.warn("MongoDB offline, falling back to local storage:", err);
    const leads = await getLeads();
    const updated = leads.map(l => l.id === id ? { ...l, status } : l);
    setStorageItem("revitalize-leads", updated);
    return updated;
  }
};

export const updateLeadDetails = async (id: string, updates: Partial<Pick<Lead, "estimatedValue" | "notes" | "status">>): Promise<Lead[] | null> => {
  try {
    return await apiCall<Lead[]>("/api/leads", "PUT", { id, updates });
  } catch (err) {
    console.warn("MongoDB offline, falling back to local storage:", err);
    const leads = await getLeads();
    const updated = leads.map(l => l.id === id ? { ...l, ...updates } : l);
    setStorageItem("revitalize-leads", updated);
    return updated;
  }
};

export const deleteLead = async (id: string): Promise<Lead[]> => {
  try {
    return await apiCall<Lead[]>("/api/leads", "DELETE", { id });
  } catch (err) {
    console.warn("MongoDB offline, falling back to local storage:", err);
    const leads = await getLeads();
    const filtered = leads.filter(l => l.id !== id);
    setStorageItem("revitalize-leads", filtered);
    return filtered;
  }
};

export const uploadLeadPhoto = async (leadId: string, base64Photo: string): Promise<Lead[]> => {
  try {
    return await apiCall<Lead[]>("/api/leads/photos", "POST", { leadId, base64Photo });
  } catch (err) {
    console.warn("MongoDB offline, falling back to local storage:", err);
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
  }
};

export const removeLeadPhoto = async (leadId: string, photoIndex: number): Promise<Lead[]> => {
  try {
    return await apiCall<Lead[]>("/api/leads/photos", "DELETE", { leadId, photoIndex });
  } catch (err) {
    console.warn("MongoDB offline, falling back to local storage:", err);
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
  }
};

// ── REVIEWS ──
export const getReviews = async (): Promise<Review[]> => {
  try {
    const reviews = await apiCall<Review[]>("/api/reviews", "GET");
    setStorageItem("revitalize-reviews", reviews);
    return reviews;
  } catch (err) {
    console.warn("MongoDB offline, falling back to local storage reviews:", err);
    return getStorageItem<Review[]>("revitalize-reviews", INITIAL_REVIEWS);
  }
};

export const addReview = async (reviewData: Omit<Review, "id" | "featured" | "createdAt"> & { newReviewPhoto?: string }): Promise<Review> => {
  try {
    return await apiCall<Review>("/api/reviews", "POST", reviewData);
  } catch (err) {
    console.warn("MongoDB offline, falling back to local storage:", err);
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
  }
};

export const toggleReviewFeatured = async (id: string): Promise<Review[]> => {
  try {
    return await apiCall<Review[]>("/api/reviews", "PUT", { id, action: "featured" });
  } catch (err) {
    console.warn("MongoDB offline, falling back to local storage:", err);
    const reviews = await getReviews();
    const updated = reviews.map(r => r.id === id ? { ...r, featured: !r.featured } : r);
    setStorageItem("revitalize-reviews", updated);
    return updated;
  }
};

export const replyToReview = async (id: string, replyText: string): Promise<Review[]> => {
  try {
    return await apiCall<Review[]>("/api/reviews", "PUT", { id, replyText, action: "reply" });
  } catch (err) {
    console.warn("MongoDB offline, falling back to local storage:", err);
    const reviews = await getReviews();
    const updated = reviews.map(r => r.id === id ? { ...r, replyText } : r);
    setStorageItem("revitalize-reviews", updated);
    return updated;
  }
};

export const deleteReview = async (id: string): Promise<Review[]> => {
  try {
    return await apiCall<Review[]>("/api/reviews", "DELETE", { id });
  } catch (err) {
    console.warn("MongoDB offline, falling back to local storage:", err);
    const reviews = await getReviews();
    const updated = reviews.filter(r => r.id !== id);
    setStorageItem("revitalize-reviews", updated);
    return updated;
  }
};

// ── CHATS ──
export const getChatSessions = async (): Promise<ChatSession[]> => {
  try {
    const chats = await apiCall<ChatSession[]>("/api/chats?t=" + Date.now(), "GET");
    setStorageItem("revitalize-chats", chats);
    return chats;
  } catch (err) {
    console.warn("MongoDB offline, falling back to local storage chats:", err);
    return getStorageItem<ChatSession[]>("revitalize-chats", INITIAL_CHATS);
  }
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
  try {
    return await apiCall<ChatSession>("/api/chats", "POST", { action: "create", clientName, clientCity, clientEmail, clientPhone });
  } catch (err) {
    console.warn("MongoDB offline, falling back to local storage:", err);
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
  }
};

export const sendChatMessage = async (sessionId: string, sender: "client" | "admin", text: string): Promise<ChatSession | null> => {
  try {
    return await apiCall<ChatSession | null>("/api/chats", "POST", { action: "message", sessionId, sender, text });
  } catch (err) {
    console.warn("MongoDB offline, falling back to local storage:", err);
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
  }
};

export const markChatAsRead = async (sessionId: string): Promise<ChatSession[]> => {
  try {
    return await apiCall<ChatSession[]>("/api/chats", "POST", { action: "read", sessionId });
  } catch (err) {
    console.warn("MongoDB offline, falling back to local storage:", err);
    const chats = await getChatSessions();
    const updated = chats.map(c => c.id === sessionId ? { ...c, unread: false } : c);
    setStorageItem("revitalize-chats", updated);
    return updated;
  }
};

export const deleteChatSession = async (id: string): Promise<ChatSession[]> => {
  try {
    const chats = await apiCall<ChatSession[]>("/api/chats?id=" + id, "DELETE");
    setStorageItem("revitalize-chats", chats);
    return chats;
  } catch (err) {
    console.warn("MongoDB offline, falling back to local storage:", err);
    const chats = await getChatSessions();
    const filtered = chats.filter(c => c.id !== id);
    setStorageItem("revitalize-chats", filtered);
    return filtered;
  }
};

// ── EMAILS ──
export const getWebEmails = async (): Promise<WebEmail[]> => {
  try {
    const emails = await apiCall<WebEmail[]>("/api/emails", "GET");
    setStorageItem("revitalize-emails", emails);
    return emails;
  } catch (err) {
    console.warn("MongoDB offline, falling back to local storage emails:", err);
    return getStorageItem<WebEmail[]>("revitalize-emails", INITIAL_EMAILS);
  }
};

export const addWebEmail = async (emailData: Omit<WebEmail, "id" | "createdAt">): Promise<WebEmail> => {
  try {
    return await apiCall<WebEmail>("/api/emails", "POST", { emailData });
  } catch (err) {
    console.warn("MongoDB offline, falling back to local storage:", err);
    const emails = await getWebEmails();
    const newEmail: WebEmail = {
      ...emailData,
      id: "email-" + Math.random().toString(36).substr(2, 9),
      createdAt: new Date().toISOString()
    };
    emails.unshift(newEmail);
    setStorageItem("revitalize-emails", emails);
    return newEmail;
  }
};

export const deleteWebEmail = async (id: string): Promise<WebEmail[]> => {
  try {
    return await apiCall<WebEmail[]>("/api/emails", "DELETE", { id });
  } catch (err) {
    console.warn("MongoDB offline, falling back to local storage:", err);
    const emails = await getWebEmails();
    const filtered = emails.filter(e => e.id !== id);
    setStorageItem("revitalize-emails", filtered);
    return filtered;
  }
};

// ── GALLERY PHOTOS ──
export const getGalleryPhotos = async (): Promise<GalleryPhoto[]> => {
  try {
    const photos = await apiCall<GalleryPhoto[]>("/api/gallery", "GET");
    setStorageItem("revitalize-gallery-photos", photos);
    return photos;
  } catch (err) {
    console.warn("MongoDB offline, falling back to local storage gallery:", err);
    return getStorageItem<GalleryPhoto[]>("revitalize-gallery-photos", [
      { id: "photo-1", url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c", uploadedAt: new Date().toISOString() }
    ]);
  }
};

export const uploadGalleryPhoto = async (base64Photo: string, category?: string): Promise<GalleryPhoto[]> => {
  try {
    return await apiCall<GalleryPhoto[]>("/api/gallery", "POST", { base64Photo, category });
  } catch (err) {
    console.warn("MongoDB offline, falling back to local storage:", err);
    const photos = await getGalleryPhotos();
    const newPhoto: GalleryPhoto = {
      id: "photo-" + Math.random().toString(36).substr(2, 9),
      url: base64Photo,
      category: category || "residential",
      uploadedAt: new Date().toISOString()
    };
    photos.unshift(newPhoto);
    setStorageItem("revitalize-gallery-photos", photos);
    return photos;
  }
};

export const removeGalleryPhoto = async (id: string): Promise<GalleryPhoto[]> => {
  try {
    return await apiCall<GalleryPhoto[]>(`/api/gallery?id=${id}`, "DELETE");
  } catch (err) {
    console.warn("MongoDB offline, falling back to local storage:", err);
    const photos = await getGalleryPhotos();
    const filtered = photos.filter(p => p.id !== id);
    setStorageItem("revitalize-gallery-photos", filtered);
    return filtered;
  }
};

// ── PORTAL SECURITY & AUTH ──
export const loginAdmin = async (username: string, password: string): Promise<{ success: boolean; token: string }> => {
  try {
    const res = await apiCall<{ success: boolean; user: any }>("/api/users", "POST", { action: "login", username, password });
    if (res.success && typeof window !== "undefined") {
      const token = "token-" + res.user.id + "-" + Math.random().toString(36).substr(2, 9);
      localStorage.setItem("revitalize-session-token", token);
      localStorage.setItem("revitalize-session-user", JSON.stringify(res.user));
      return { success: true, token };
    }
    throw new Error("Invalid credentials");
  } catch (err) {
    console.warn("MongoDB offline, checking local storage accounts:", err);
    const accounts = getStorageItem<any[]>("revitalize-admin-accounts", [DEFAULT_ADMIN]);
    const user = accounts.find(a => a.username.toLowerCase() === username.toLowerCase() && a.password === password);
    if (user) {
      const token = "token-" + user.id + "-" + Math.random().toString(36).substr(2, 9);
      localStorage.setItem("revitalize-session-token", token);
      localStorage.setItem("revitalize-session-user", JSON.stringify({ id: user.id, username: user.username, role: user.role }));
      return { success: true, token };
    }
    throw new Error("Invalid username or password.");
  }
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
  try {
    return await apiCall<PortalUser[]>("/api/users", "GET");
  } catch (err) {
    console.warn("MongoDB offline, falling back to local storage:", err);
    const accounts = getStorageItem<any[]>("revitalize-admin-accounts", [DEFAULT_ADMIN]);
    return accounts.map(a => ({ id: a.id, username: a.username, role: a.role }));
  }
};

export const createPortalUser = async (username: string, password: string, role: string): Promise<{ success: boolean; id: string; username: string; role: string }> => {
  try {
    return await apiCall<{ success: boolean; id: string; username: string; role: string }>("/api/users", "POST", { action: "create", username, password, role });
  } catch (err) {
    console.warn("MongoDB offline, falling back to local storage:", err);
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
  }
};

export const deletePortalUser = async (userId: string): Promise<{ success: boolean }> => {
  try {
    return await apiCall<{ success: boolean }>("/api/users", "POST", { action: "delete", userId });
  } catch (err) {
    console.warn("MongoDB offline, falling back to local storage:", err);
    const accounts = getStorageItem<any[]>("revitalize-admin-accounts", [DEFAULT_ADMIN]);
    const filtered = accounts.filter(a => a.id !== userId);
    setStorageItem("revitalize-admin-accounts", filtered);
    return { success: true };
  }
};

export const updateUserCredentials = async (userId: string, username?: string, password?: string): Promise<{ success: boolean; username: string }> => {
  try {
    const res = await apiCall<{ success: boolean; username: string }>("/api/users", "POST", { action: "update", userId, username, password });
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
  } catch (err) {
    console.warn("MongoDB offline, falling back to local storage:", err);
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

    const storedUser = localStorage.getItem("revitalize-session-user");
    if (storedUser) {
      const u = JSON.parse(storedUser);
      if (u.id === userId) {
        u.username = updatedUsername;
        localStorage.setItem("revitalize-session-user", JSON.stringify(u));
      }
    }
    return { success: true, username: updatedUsername };
  }
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

export interface SiteSettings {
  alertEmail: string;
  officePhone: string;
  smsTemplate: string;
  emailAlert: boolean;
  smsAlert: boolean;
  maintenanceMode: boolean;
  weekdays: string;
  saturdays: string;
  sundays: string;
}

export const getSiteSettings = async (): Promise<SiteSettings> => {
  try {
    return await apiCall<SiteSettings>("/api/settings?t=" + Date.now(), "GET");
  } catch (err) {
    console.warn("MongoDB offline, falling back to local storage settings:", err);
    let email = getStorageItem("rev_settings_alertEmail", "revitalizerealestate@gmail.com");
    if (email === "robertsa210@icloud.com") {
      email = "revitalizerealestate@gmail.com";
      setStorageItem("rev_settings_alertEmail", email);
    }
    let phone = getStorageItem("rev_settings_officePhone", "(813) 323-0291");
    if (phone === "(210) 429-5526") {
      phone = "(813) 323-0291";
      setStorageItem("rev_settings_officePhone", phone);
    }
    return {
      alertEmail: email,
      officePhone: phone,
      smsTemplate: getStorageItem("rev_settings_smsTemplate", "Hi {Name}, thank you for contacting Revitalize Group! Daniel Thompson will contact you during the {Time} to discuss your {Type} project."),
      emailAlert: getStorageItem("rev_settings_emailAlert", "true") === "true",
      smsAlert: getStorageItem("rev_settings_smsAlert", "true") === "true",
      maintenanceMode: getStorageItem("rev_settings_maintenanceMode", "false") === "true",
      weekdays: getStorageItem("rev_settings_weekdays", "8:00 AM - 5:00 PM"),
      saturdays: getStorageItem("rev_settings_saturdays", "8:00 AM - 5:00 PM"),
      sundays: getStorageItem("rev_settings_sundays", "Closed (Emergency 24/7)")
    };
  }
};

export const saveSiteSettings = async (settings: Partial<SiteSettings>): Promise<SiteSettings> => {
  try {
    return await apiCall<SiteSettings>("/api/settings", "POST", settings);
  } catch (err) {
    console.warn("MongoDB offline, saving to local storage settings:", err);
    Object.entries(settings).forEach(([key, val]) => {
      setStorageItem("rev_settings_" + key, String(val));
    });
    return getSiteSettings();
  }
};
