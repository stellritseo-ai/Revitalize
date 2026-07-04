import { useState, useEffect, useMemo, useRef } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import {
  TrendingUp,
  Briefcase,
  Users,
  DollarSign,
  MapPin,
  Star,
  CheckCircle,
  AlertTriangle,
  Clock,
  Trash2,
  Edit2,
  Plus,
  Phone,
  Mail,
  FileText,
  Settings,
  LogOut,
  MessageSquare,
  Calendar,
  ChevronRight,
  Filter,
  Search,
  MessageCircle,
  User,
  ThumbsUp,
  Sliders,
  Bell,
  ArrowUpRight,
  ShieldAlert,
  Info,
  Image as ImageIcon,
  Eye,
  X,
  Send,
  Upload,
  ChevronDown,
  Globe,
  Home,
  Layers
} from "lucide-react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as RechartsTooltip,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  LineChart,
  Line
} from "recharts";
import {
  getLeads,
  getReviews,
  getWebEmails,
  getChatSessions,
  getGalleryPhotos,
  getPortalUsers,
  getAnalyticsData,
  updateLeadStatus,
  updateLeadDetails,
  deleteLead,
  addCustomLead,
  uploadLeadPhoto,
  removeLeadPhoto,
  toggleReviewFeatured,
  replyToReview,
  addReview,
  sendChatMessage,
  markChatAsRead,
  deleteWebEmail,
  uploadGalleryPhoto,
  removeGalleryPhoto,
  updateUserCredentials,
  createPortalUser,
  deletePortalUser,
  verifyAdminToken,
  Lead,
  Review,
  WebEmail,
  ChatSession,
  GalleryPhoto,
  PortalUser
} from "@/lib/leads-store";
import { toast } from "sonner";
import logo from "@/assets/logo.png";

const formatChatTime = (timestamp: string) => {
  if (!timestamp) return "";
  try {
    const d = new Date(timestamp);
    if (!isNaN(d.getTime())) {
      return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    }
    return timestamp;
  } catch {
    return timestamp;
  }
};

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Revitalize Office — Dashboard" },
      { name: "description", content: "Business operations management portal." }
    ],
  }),
  component: DashboardPage,
});

// Custom Tooltip styled exactly like the Connexio mockup
const CustomChartTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-slate-200 rounded-xl p-3 shadow-lg animate-in fade-in duration-100 text-xs">
        <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1">{label}</p>
        {payload.map((p: any, idx: number) => (
          <p key={idx} className="font-semibold text-slate-800 flex items-center gap-1.5 mt-0.5">
            <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ backgroundColor: p.stroke || p.fill || "#D69873" }} />
            {p.name}: <span className="font-bold text-slate-900">{typeof p.value === "number" ? `$${p.value.toLocaleString()}` : p.value}</span>
          </p>
        ))}
      </div>
    );
  }
  return null;
};

function DashboardPage() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [currentUser, setCurrentUser] = useState<{ id: string; username: string; role: string } | null>(null);
  const [activeTab, setActiveTab] = useState<"overview" | "leads" | "reviews" | "settings" | "chat" | "gallery" | "emails" | "security">("overview");

  // Database / state stores
  const [leads, setLeads] = useState<Lead[]>([]);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [webEmails, setWebEmails] = useState<WebEmail[]>([]);
  const [chatSessions, setChatSessions] = useState<ChatSession[]>([]);
  const [activeSessionId, setActiveSessionId] = useState<string | null>(null);
  const [adminReplyText, setAdminReplyText] = useState("");
  const [galleryPhotos, setGalleryPhotos] = useState<GalleryPhoto[]>([]);
  const [lightboxPhoto, setLightboxPhoto] = useState<string | null>(null);

  // Portal Security States
  const [portalUsers, setPortalUsers] = useState<PortalUser[]>([]);
  const [updateUsername, setUpdateUsername] = useState("");
  const [updatePassword, setUpdatePassword] = useState("");
  const [addUsername, setAddUsername] = useState("");
  const [addPassword, setAddPassword] = useState("");
  const [addRole, setAddRole] = useState<"admin" | "editor" | "viewer">("viewer");

  // Filters & Search
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [typeFilter, setTypeFilter] = useState<string>("all");

  // Modals & Forms
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [isEditingLead, setIsEditingLead] = useState(false);
  const [editEstimatedValue, setEditEstimatedValue] = useState(0);
  const [editNotes, setEditNotes] = useState("");
  const [editStatus, setEditStatus] = useState<Lead["status"]>("new");

  const [isAddingLead, setIsAddingLead] = useState(false);
  const [newLeadName, setNewLeadName] = useState("");
  const [newLeadEmail, setNewLeadEmail] = useState("");
  const [newLeadPhone, setNewLeadPhone] = useState("");
  const [newLeadAddress, setNewLeadAddress] = useState("");
  const [newLeadType, setNewLeadType] = useState("remodeling");
  const [newLeadDesc, setNewLeadDesc] = useState("");
  const [newLeadVal, setNewLeadVal] = useState(15000);

  const [selectedReview, setSelectedReview] = useState<Review | null>(null);
  const [reviewReplyText, setReviewReplyText] = useState("");

  const [confirmConfig, setConfirmConfig] = useState<{
    title: string;
    message: string;
    confirmText?: string;
    onConfirm: () => void;
  } | null>(null);

  const triggerConfirm = (config: {
    title: string;
    message: string;
    confirmText?: string;
    onConfirm: () => void;
  }) => {
    setConfirmConfig(config);
  };

  // Check auth
  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("revitalize-session-token");
      if (!token) {
        setIsAuthenticated(false);
        navigate({ to: "/login" });
        return;
      }
      try {
        const res = await verifyAdminToken(token);
        if (res.valid) {
          setIsAuthenticated(true);
          setCurrentUser({
            id: res.id || "",
            username: res.username || "",
            role: res.role || "admin"
          });
        } else {
          localStorage.removeItem("revitalize-session-token");
          setIsAuthenticated(false);
          navigate({ to: "/login" });
        }
      } catch (e) {
        console.error("Token verification failed:", e);
        setIsAuthenticated(false);
        navigate({ to: "/login" });
      }
    };
    checkAuth();
  }, [navigate]);

  // Load active tab data
  useEffect(() => {
    if (isAuthenticated) {
      getLeads().then(setLeads);
      getReviews().then(setReviews);
      getWebEmails().then(setWebEmails);
      getChatSessions().then(setChatSessions);
      getGalleryPhotos().then(setGalleryPhotos);
      if (currentUser?.role === "admin") {
        getPortalUsers().then(setPortalUsers);
      }
    }
  }, [isAuthenticated, activeTab, currentUser]);

  const activeChatSession = useMemo(() => {
    return chatSessions.find((s) => s.id === activeSessionId) || null;
  }, [chatSessions, activeSessionId]);

  // Auto scroll chat
  const chatEndRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [activeChatSession?.messages]);

  // Calculate analytics
  const analytics = useMemo(() => {
    return getAnalyticsData(leads, reviews);
  }, [leads, reviews]);

  const handleLogout = () => {
    localStorage.removeItem("revitalize-session-token");
    setIsAuthenticated(false);
    navigate({ to: "/login" });
  };

  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!currentUser) return;
    try {
      const res = await updateUserCredentials(currentUser.id, updateUsername, updatePassword);
      if (res.success) {
        toast.success("Credentials updated successfully!");
        setCurrentUser((prev) => prev ? { ...prev, username: res.username } : null);
        setUpdatePassword("");
      }
    } catch (err: any) {
      toast.error(err.message || "Failed to update profile");
    }
  };

  const handleCreateUser = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!addUsername.trim() || !addPassword.trim()) {
      toast.error("Username and password are required.");
      return;
    }
    try {
      const res = await createPortalUser(addUsername, addPassword, addRole);
      if (res.success) {
        toast.success(`User '${res.username}' added.`);
        setAddUsername("");
        setAddPassword("");
        setAddRole("viewer");
        getPortalUsers().then(setPortalUsers);
      }
    } catch (err: any) {
      toast.error(err.message || "Failed to create portal user.");
    }
  };

  const handleDeleteUser = (userId: string, username: string) => {
    if (username === "admin") {
      toast.error("The primary administrator account 'admin' cannot be deleted.");
      return;
    }
    if (currentUser && userId === currentUser.id) {
      toast.error("You cannot delete the account you are currently logged in with.");
      return;
    }
    triggerConfirm({
      title: "Delete Account",
      message: `Are you sure you want to delete user '${username}'?`,
      confirmText: "Delete",
      onConfirm: async () => {
        try {
          const res = await deletePortalUser(userId);
          if (res.success) {
            toast.success("Portal account deleted.");
            getPortalUsers().then(setPortalUsers);
          }
        } catch (err: any) {
          toast.error("Failed to delete user.");
        }
      }
    });
  };

  // Lead Handlers
  const handleEditLead = (lead: Lead) => {
    setSelectedLead(lead);
    setEditEstimatedValue(lead.estimatedValue);
    setEditStatus(lead.status);
    setEditNotes(lead.notes || "");
    setIsEditingLead(true);
  };

  const handleSaveLeadDetails = async () => {
    if (!selectedLead) return;
    try {
      const updated = await updateLeadDetails(selectedLead.id, {
        estimatedValue: editEstimatedValue,
        status: editStatus,
        notes: editNotes
      });
      if (updated) {
        setLeads(updated);
        toast.success("Lead details updated.");
        setIsEditingLead(false);
        setSelectedLead(null);
      }
    } catch {
      toast.error("Failed to update lead details.");
    }
  };

  const handleDeleteLead = (id: string, name: string) => {
    triggerConfirm({
      title: "Delete Lead",
      message: `Are you sure you want to delete the lead for ${name}?`,
      confirmText: "Delete",
      onConfirm: async () => {
        try {
          const updated = await deleteLead(id);
          setLeads(updated);
          toast.success("Lead deleted successfully.");
          setIsEditingLead(false);
          setSelectedLead(null);
        } catch {
          toast.error("Failed to delete lead.");
        }
      }
    });
  };

  const handleAddCustomLead = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newLeadName.trim()) return;
    try {
      await addCustomLead({
        name: newLeadName,
        email: newLeadEmail,
        phone: newLeadPhone,
        address: newLeadAddress,
        projectType: newLeadType,
        description: newLeadDesc,
        status: "new",
        estimatedValue: newLeadVal,
        contactTime: "anytime"
      });
      toast.success("Lead created successfully.");
      setIsAddingLead(false);
      setNewLeadName("");
      setNewLeadEmail("");
      setNewLeadPhone("");
      setNewLeadAddress("");
      setNewLeadDesc("");
      setNewLeadVal(15000);
      getLeads().then(setLeads);
    } catch {
      toast.error("Failed to create lead.");
    }
  };

  const handleUploadPhoto = async (e: React.ChangeEvent<HTMLInputElement>, leadId: string) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64 = reader.result as string;
      try {
        const updated = await uploadLeadPhoto(leadId, base64);
        setLeads(updated);
        const current = updated.find(l => l.id === leadId);
        if (current) setSelectedLead(current);
        toast.success("Photo added successfully.");
      } catch {
        toast.error("Failed to upload photo.");
      }
    };
    reader.readAsDataURL(file);
  };

  const handleRemovePhoto = async (leadId: string, index: number) => {
    try {
      const updated = await removeLeadPhoto(leadId, index);
      setLeads(updated);
      const current = updated.find(l => l.id === leadId);
      if (current) setSelectedLead(current);
      toast.success("Photo removed.");
    } catch {
      toast.error("Failed to remove photo.");
    }
  };

  // Review Handlers
  const handleToggleReviewFeatured = async (id: string) => {
    try {
      const updated = await toggleReviewFeatured(id);
      setReviews(updated);
      toast.success("Review visibility toggled.");
    } catch {
      toast.error("Failed to toggle review.");
    }
  };

  const handleSaveReviewReply = async () => {
    if (!selectedReview) return;
    try {
      const updated = await replyToReview(selectedReview.id, reviewReplyText);
      setReviews(updated);
      toast.success("Admin reply saved.");
      setSelectedReview(null);
      setReviewReplyText("");
    } catch {
      toast.error("Failed to save reply.");
    }
  };

  // Email Handlers
  const handleDeleteEmail = (id: string) => {
    triggerConfirm({
      title: "Delete Email Message",
      message: "Are you sure you want to delete this contact submission?",
      confirmText: "Delete",
      onConfirm: async () => {
        try {
          const updated = await deleteWebEmail(id);
          setWebEmails(updated);
          toast.success("Inquiry deleted.");
        } catch {
          toast.error("Failed to delete inquiry.");
        }
      }
    });
  };

  // Chat Handlers
  const handleSelectChat = async (id: string) => {
    setActiveSessionId(id);
    const updated = await markChatAsRead(id);
    setChatSessions(updated);
  };

  const handleSendChatReply = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!activeSessionId || !adminReplyText.trim()) return;
    try {
      const updated = await sendChatMessage(activeSessionId, "admin", adminReplyText);
      if (updated) {
        setChatSessions(prev => prev.map(s => s.id === activeSessionId ? updated : s));
        setAdminReplyText("");
      }
    } catch {
      toast.error("Failed to send reply.");
    }
  };

  // Gallery Handlers
  const handleUploadGallery = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = async () => {
      const base64 = reader.result as string;
      try {
        const updated = await uploadGalleryPhoto(base64);
        setGalleryPhotos(updated);
        toast.success("Gallery photo uploaded.");
      } catch {
        toast.error("Failed to upload photo.");
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDeleteGallery = (id: string) => {
    triggerConfirm({
      title: "Delete Gallery Photo",
      message: "Are you sure you want to remove this photo from the gallery page?",
      confirmText: "Remove",
      onConfirm: async () => {
        try {
          const updated = await removeGalleryPhoto(id);
          setGalleryPhotos(updated);
          toast.success("Photo removed.");
        } catch {
          toast.error("Failed to remove photo.");
        }
      }
    });
  };

  // Filtering leads
  const filteredLeads = useMemo(() => {
    return leads.filter((lead) => {
      const matchesSearch =
        lead.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.phone.includes(searchTerm);
      const matchesStatus = statusFilter === "all" || lead.status === statusFilter;
      const matchesType = typeFilter === "all" || lead.projectType === typeFilter;
      return matchesSearch && matchesStatus && matchesType;
    });
  }, [leads, searchTerm, statusFilter, typeFilter]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8f9fa] text-slate-800 font-inter">
        <div className="text-center space-y-4">
          <div className="w-8 h-8 border-4 border-copper border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-xs uppercase font-bold tracking-widest text-slate-400">Loading Workspace...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex font-inter text-[#1a1f36] antialiased selection:bg-copper selection:text-white">
      
      {/* Left Sidebar Navigation (Matching exact Connexio structure but for Revitalize Group) */}
      <aside className="w-64 sm:w-72 bg-white border-r border-[#e3e6f0] flex flex-col justify-between p-5 sticky top-0 h-screen z-40">
        <div className="space-y-6 overflow-y-auto pr-1 scrollbar-none">
          
          {/* Header branding */}
          <div className="flex items-center justify-between pb-2">
            <div className="flex items-center gap-2">
              <img src={logo} alt="Revitalize Office" className="h-12 w-auto object-contain" />
            </div>
            <button className="text-[#a0aec0] hover:text-[#4f566b]">
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
          </div>



          {/* Main Menu Links */}
          <div className="space-y-1">
            <p className="text-xs font-bold uppercase tracking-wider text-slate-400 px-3 mb-1.5">Main Menu</p>
            {[
              { id: "overview", label: "Overview & Stats", icon: TrendingUp },
              { id: "leads", label: "Leads Manager", icon: Briefcase },
              { id: "reviews", label: "Reviews Moderator", icon: Star },
              { id: "gallery", label: "Update Gallery", icon: ImageIcon },
              { id: "chat", label: "Live Chat", icon: MessageCircle, badge: chatSessions.some(s => s.unread) },
              { id: "emails", label: "Web Emails", icon: Mail },
              { id: "settings", label: "Portal Settings", icon: Settings },
              { id: "security", label: "Security Settings", icon: Sliders }
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`w-full px-3.5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-250 flex items-center justify-between relative group ${
                    isActive 
                      ? "bg-[#faf7f5] text-[#1a1f36]" 
                      : "text-slate-500 hover:bg-[#faf7f5]/45 hover:text-slate-800"
                  }`}
                >
                  <span className="flex items-center gap-3 relative z-10">
                    <Icon className={`w-4 h-4 transition-transform duration-300 group-hover:scale-110 ${isActive ? "text-copper" : "text-slate-400 group-hover:text-copper"}`} />
                    {tab.label}
                  </span>
                  {tab.badge && (
                    <span className="w-1.5 h-1.5 bg-rose-500 rounded-full shrink-0 animate-pulse relative z-10" />
                  )}
                  {isActive && (
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-copper rounded-r-md" />
                  )}
                </button>
              );
            })}
          </div>



          {/* Unlock More Features promo card */}
          <div className="bg-slate-50 border border-slate-100 rounded-2xl p-4 space-y-3">
            <div className="flex items-center gap-1.5 text-copper">
              <Info className="w-4 h-4 shrink-0" />
              <span className="text-[10px] font-black uppercase tracking-wider">Sync Active</span>
            </div>
            <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
              Real-time synchronization active with Tampa Bay MLS indices.
            </p>
            <div className="space-y-1">
              <div className="flex items-center justify-between text-[9px] font-bold text-slate-400">
                <span>Synchronized Leads</span>
                <span>15/30 Limit</span>
              </div>
              <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                <div className="h-full bg-copper rounded-full" style={{ width: "50%" }}></div>
              </div>
            </div>
            <button className="w-full bg-[#1a1f36] hover:bg-[#1a1f36]/90 text-white py-2 rounded-xl text-[10px] font-bold uppercase tracking-wider transition">
              Upgrade Subscription
            </button>
          </div>

        </div>

        {/* Sidebar Footer */}
        <div className="border-t border-slate-100 pt-4 space-y-2">

          <button
            onClick={handleLogout}
            className="w-full px-3.5 py-2.5 rounded-xl text-xs font-bold text-rose-600 hover:bg-rose-50 transition flex items-center gap-3 cursor-pointer"
          >
            <LogOut className="w-4 h-4 text-rose-500" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Workspace Column */}
      <div className="flex-1 min-h-screen overflow-y-auto flex flex-col">
        
        {/* Top Header Bar */}
        <header className="bg-white border-b border-[#e3e6f0] px-6 py-4 flex items-center justify-between sticky top-0 z-30">
          <div>
            <h1 className="font-bold text-xl text-slate-800 leading-none capitalize">
              {activeTab === "overview" ? "Dashboard" : activeTab.replace("-", " ")}
            </h1>
            <p className="text-xs text-slate-500 mt-1.5 font-medium">
              {activeTab === "overview" && "Monitor and control your business leads and pipeline"}
              {activeTab === "leads" && "Manage customer pipelines and project estimations"}
              {activeTab === "reviews" && "Review client testimonials and manage website display"}
              {activeTab === "emails" && "View details of incoming contact form submissions"}
              {activeTab === "chat" && "Respond to active website visitor chat messages"}
              {activeTab === "gallery" && "Manage images showcased on the public website"}
              {activeTab === "settings" && "Modify administrator login credentials"}
              {activeTab === "security" && "Create and manage system user accounts"}
            </p>
          </div>

          <div className="flex items-center gap-4">
            {/* Search Bar */}
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
              <input
                type="text"
                placeholder="Search Anythings"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-9 pr-4 py-2 border border-slate-200 rounded-xl text-xs text-slate-700 placeholder-slate-400 bg-slate-50 focus:bg-white focus:outline-none focus:ring-1 focus:ring-copper focus:border-copper w-48 transition"
              />
            </div>
            
            <button className="p-2 text-slate-400 hover:text-slate-600 relative">
              <MessageSquare className="w-4 h-4" />
              {chatSessions.some(s => s.unread) && (
                <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-rose-500 rounded-full" />
              )}
            </button>
            <button className="p-2 text-slate-400 hover:text-slate-600 relative">
              <Bell className="w-4 h-4" />
              <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-rose-500 rounded-full" />
            </button>
          </div>
        </header>

        {/* Content Workspace Area */}
        <main className="flex-1 p-6 md:p-8 max-w-7xl w-full mx-auto space-y-6">
          
          {/* TAB 1: OVERVIEW */}
          {activeTab === "overview" && (
            <div className="space-y-6 animate-in fade-in duration-200">
              
              {/* Overview Cards Row (Exactly 4 cards from mockup) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                
                {/* Card 1: Total Leads */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between hover:scale-[1.01] transition-all">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-bold uppercase tracking-wider flex items-center gap-1.5">
                      Total Leads <Info className="w-3 h-3 text-slate-300" />
                    </span>
                    <span className="w-6 h-6 rounded-lg bg-copper/10 text-copper flex items-center justify-center">
                      <Briefcase className="w-3.5 h-3.5" />
                    </span>
                  </div>
                  <div className="flex items-baseline justify-between mt-3">
                    <span className="text-3xl font-extrabold text-slate-800 tracking-tight">{leads.length}</span>
                    <span className="text-xs font-bold text-emerald-600 flex items-center gap-0.5">
                      <ArrowUpRight className="w-3 h-3" /> +12% from last month
                    </span>
                  </div>
                </div>

                {/* Card 2: Active Renovations */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between hover:scale-[1.01] transition-all">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-bold uppercase tracking-wider flex items-center gap-1.5">
                      Active Projects <Info className="w-3 h-3 text-slate-300" />
                    </span>
                    <span className="w-6 h-6 rounded-lg bg-indigo-55/15 text-indigo-600 flex items-center justify-center">
                      <Home className="w-3.5 h-3.5 text-copper" />
                    </span>
                  </div>
                  <div className="flex items-baseline justify-between mt-3">
                    <span className="text-3xl font-extrabold text-slate-800 tracking-tight">
                      {leads.filter(l => ["contacted", "consultation_scheduled", "proposal_sent"].includes(l.status)).length}
                    </span>
                    <span className="text-xs font-bold text-[#0061ff] flex items-center gap-0.5">
                      94.5% On Schedule
                    </span>
                  </div>
                </div>

                {/* Card 3: Contract Value */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between hover:scale-[1.01] transition-all">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-bold uppercase tracking-wider flex items-center gap-1.5">
                      Contract Value <Info className="w-3 h-3 text-slate-300" />
                    </span>
                    <span className="w-6 h-6 rounded-lg bg-emerald-55/15 text-emerald-600 flex items-center justify-center">
                      <DollarSign className="w-3.5 h-3.5 text-copper" />
                    </span>
                  </div>
                  <div className="flex items-baseline justify-between mt-3">
                    <span className="text-3xl font-extrabold text-slate-800 tracking-tight">
                      ${(analytics.totalValue / 1000).toFixed(0)}k
                    </span>
                    <span className="text-xs font-bold text-slate-500">
                      78% of quarterly goal
                    </span>
                  </div>
                </div>

                {/* Card 4: Pending Reviews */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm flex flex-col justify-between hover:scale-[1.01] transition-all">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500 font-bold uppercase tracking-wider flex items-center gap-1.5">
                      Pending Reviews <Info className="w-3 h-3 text-slate-300" />
                    </span>
                    <span className="w-6 h-6 rounded-lg bg-rose-55/15 text-rose-600 flex items-center justify-center">
                      <Star className="w-3.5 h-3.5 text-copper" />
                    </span>
                  </div>
                  <div className="flex items-baseline justify-between mt-3">
                    <span className="text-3xl font-extrabold text-slate-800 tracking-tight">
                      {reviews.filter(r => !r.featured).length}
                    </span>
                    <span className="text-xs font-bold text-rose-600 flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3" /> 2 requiring attention
                    </span>
                  </div>
                </div>

              </div>

              {/* Charts grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                
                {/* Chart 1: Devices Usage Analytics -> Lead Acquisition Analytics */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide">Lead Acquisition Analytics</h3>
                    <div className="flex gap-2">
                      <select className="bg-slate-50 border border-slate-200 rounded-lg text-[10px] font-bold px-2 py-1 focus:outline-none">
                        <option>Last 1 Years</option>
                        <option>Last 6 Months</option>
                      </select>
                    </div>
                  </div>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={analytics.timelineChart}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                        <XAxis dataKey="name" stroke="#a0aec0" fontSize={10} tickLine={false} />
                        <YAxis stroke="#a0aec0" fontSize={10} tickLine={false} />
                        <RechartsTooltip content={<CustomChartTooltip />} />
                        <Bar dataKey="revenue" fill="#e2e8f0" radius={[4, 4, 0, 0]} name="Lead volume">
                          {analytics.timelineChart.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={index === 5 ? "#D69873" : "#e2e8f0"} />
                          ))}
                        </Bar>
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Chart 2: Temperature Monitoring -> Renovation Project Progress */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide">Project Progress Timeline</h3>
                    <div className="flex gap-2">
                      <select className="bg-slate-50 border border-slate-200 rounded-lg text-[10px] font-bold px-2 py-1 focus:outline-none">
                        <option>Last 24 Hours</option>
                      </select>
                    </div>
                  </div>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={[
                        { name: "04.00", value: 21 },
                        { name: "08.00", value: 23 },
                        { name: "12.00", value: 20 },
                        { name: "16.00", value: 26 },
                        { name: "20.00", value: 24 },
                        { name: "23.00", value: 28 }
                      ]}>
                        <defs>
                          <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#D69873" stopOpacity={0.25}/>
                            <stop offset="95%" stopColor="#D69873" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                        <XAxis dataKey="name" stroke="#a0aec0" fontSize={10} tickLine={false} />
                        <YAxis stroke="#a0aec0" fontSize={10} tickLine={false} />
                        <RechartsTooltip content={<CustomChartTooltip />} />
                        <Area type="monotone" dataKey="value" stroke="#D69873" strokeWidth={2} fillOpacity={1} fill="url(#colorValue)" name="Progress rate (%)" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Chart 3: Energy Consumption -> Business Revenue & Cost */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide">Revenue vs Cost Breakdown</h3>
                    <div className="flex gap-2">
                      <select className="bg-slate-50 border border-slate-200 rounded-lg text-[10px] font-bold px-2 py-1 focus:outline-none">
                        <option>Last 24 Hours</option>
                      </select>
                    </div>
                  </div>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={[
                        { name: "12.00", revenue: 50, cost: 35 },
                        { name: "16.00", revenue: 75, cost: 42 },
                        { name: "20.00", revenue: 65, cost: 38 },
                        { name: "23.00", revenue: 90, cost: 48 }
                      ]}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                        <XAxis dataKey="name" stroke="#a0aec0" fontSize={10} tickLine={false} />
                        <YAxis stroke="#a0aec0" fontSize={10} tickLine={false} />
                        <RechartsTooltip content={<CustomChartTooltip />} />
                        <Line type="monotone" dataKey="revenue" stroke="#D69873" strokeWidth={2} dot={{ r: 4 }} name="Contract Value" />
                        <Line type="monotone" dataKey="cost" stroke="#4f566b" strokeWidth={2} dot={{ r: 4 }} name="Operational Cost" />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Chart 4: Device Distribution -> Service Distribution (Horizontal columns) */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide">Service Distribution</h3>
                  </div>
                  <div className="h-64 flex flex-col justify-between">
                    <div>
                      <div className="text-2xl font-extrabold text-slate-800 leading-none">100%</div>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block mt-1.5">Project Split</span>
                    </div>

                    <div className="grid grid-cols-4 gap-4 text-center mt-2">
                      {[
                        { label: "Remodeling", val: "40%", height: "h-24", color: "bg-copper" },
                        { label: "Real Estate", val: "30%", height: "h-16", color: "bg-copper/70" },
                        { label: "Cabinets", val: "20%", height: "h-10", color: "bg-copper/50" },
                        { label: "Flooring", val: "10%", height: "h-6", color: "bg-copper/30" }
                      ].map((bar, idx) => (
                        <div key={idx} className="flex flex-col items-center justify-end gap-2">
                          <div className={`w-3.5 rounded-t-md ${bar.color} ${bar.height} transition-all duration-500`} />
                          <div className="leading-tight">
                            <span className="text-xs font-black text-slate-800 block">{bar.val}</span>
                            <span className="text-[8px] font-bold text-slate-400 block uppercase tracking-wider truncate max-w-[55px]">{bar.label}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>

              {/* Bottom Section: Devices Status -> Renovations & Leads Status */}
              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
                <div className="p-5 border-b border-slate-100 flex flex-col sm:flex-row gap-4 items-center justify-between">
                  <div>
                    <h3 className="text-sm font-extrabold text-slate-800 uppercase tracking-wide">Renovations & Leads Status</h3>
                  </div>

                  <div className="flex gap-2 w-full sm:w-auto">
                    <div className="relative flex-1 sm:flex-none">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                      <input
                        type="text"
                        placeholder="Search Leads..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-9 pr-4 py-2 border border-slate-200 rounded-xl text-xs text-slate-700 bg-slate-50 focus:bg-white focus:outline-none w-full sm:w-48 transition"
                      />
                    </div>
                    <button
                      onClick={() => setIsAddingLead(true)}
                      className="bg-copper hover:bg-copper-deep text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-md shadow-copper/10 transition shrink-0"
                    >
                      <Plus className="w-3.5 h-3.5" /> Add Lead
                    </button>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-sm">
                    <thead>
                      <tr className="bg-slate-50/50 border-b border-slate-100 text-xs font-black uppercase tracking-wider text-slate-400">
                        <th className="p-4 pl-6">Client Name</th>
                        <th className="p-4">Requested Service</th>
                        <th className="p-4">Pipeline Status</th>
                        <th className="p-4">Property Location</th>
                        <th className="p-4 pr-6 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-150">
                      {filteredLeads.slice(0, 5).map((lead) => (
                        <tr key={lead.id} className="hover:bg-slate-50/30 transition">
                          <td className="p-4 pl-6 font-bold text-slate-800">{lead.name}</td>
                          <td className="p-4 text-slate-500 font-medium capitalize">{lead.projectType.replace("-", " ")}</td>
                          <td className="p-4">
                            <span className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider inline-block ${
                              lead.status === "won" ? "bg-emerald-50 text-emerald-700 border border-emerald-100" :
                              lead.status === "lost" ? "bg-rose-50 text-rose-700 border border-rose-100" :
                              "bg-amber-50 text-amber-700 border border-amber-100"
                            }`}>
                              {lead.status.replace("_", " ")}
                            </span>
                          </td>
                          <td className="p-4 text-slate-600 font-medium">{lead.address?.split(",")?.[0] || "Tampa"}</td>
                          <td className="p-4 pr-6 text-right space-x-1.5">
                            <button
                              onClick={() => handleEditLead(lead)}
                              className="p-1.5 bg-slate-50 hover:bg-copper/10 hover:text-copper border border-slate-200 rounded-lg text-slate-500 transition inline-flex items-center"
                            >
                              <Edit2 className="w-3 h-3" />
                            </button>
                            <button
                              onClick={() => handleDeleteLead(lead.id, lead.name)}
                              className="p-1.5 bg-rose-50 hover:bg-rose-100 border border-rose-200 rounded-lg text-rose-600 transition inline-flex items-center"
                            >
                              <Trash2 className="w-3 h-3" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: LEADS */}
          {activeTab === "leads" && (
            <div className="space-y-6 animate-in fade-in duration-200">
              {/* Table search toolbar */}
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm">
                <div className="relative w-full sm:max-w-xs">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search leads by name, email..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-slate-200 rounded-xl text-xs focus:ring-1 focus:ring-copper focus:border-copper focus:outline-none"
                  />
                </div>

                <div className="flex gap-2 w-full sm:w-auto">
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs focus:outline-none w-1/2 sm:w-auto font-semibold"
                  >
                    <option value="all">All Statuses</option>
                    <option value="new">New</option>
                    <option value="contacted">Contacted</option>
                    <option value="consultation_scheduled">Consultation Scheduled</option>
                    <option value="proposal_sent">Proposal Sent</option>
                    <option value="won">Won</option>
                    <option value="lost">Lost</option>
                  </select>
                  <select
                    value={typeFilter}
                    onChange={(e) => setTypeFilter(e.target.value)}
                    className="bg-white border border-slate-200 rounded-xl px-3 py-2 text-xs focus:outline-none w-1/2 sm:w-auto font-semibold"
                  >
                    <option value="all">All Services</option>
                    <option value="remodeling">Home Remodeling</option>
                    <option value="real-estate">Real Estate</option>
                    <option value="kitchen">Kitchen Remodel</option>
                    <option value="bathroom">Bath Remodel</option>
                    <option value="cleaning">Cleaning</option>
                    <option value="cabinets">Cabinets</option>
                  </select>
                  <button
                    onClick={() => setIsAddingLead(true)}
                    className="bg-copper hover:bg-copper-deep text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 shrink-0 shadow-md shadow-copper/10 transition cursor-pointer"
                  >
                    <Plus className="w-4 h-4" /> Add Lead
                  </button>
                </div>
              </div>

              {/* Table */}
              <div className="bg-white rounded-2xl border border-slate-200/80 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-sm">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-100 text-xs font-black uppercase tracking-wider text-slate-400">
                        <th className="p-4 pl-6">Client Name</th>
                        <th className="p-4">Contact Info</th>
                        <th className="p-4">City</th>
                        <th className="p-4">Service</th>
                        <th className="p-4">Estimated Value</th>
                        <th className="p-4">Status</th>
                        <th className="p-4 pr-6 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-150 text-sm">
                      {filteredLeads.map((lead) => (
                        <tr key={lead.id} className="hover:bg-slate-50/50 transition">
                          <td className="p-4 pl-6 font-bold text-slate-800">{lead.name}</td>
                          <td className="p-4 text-slate-500 font-medium">
                            <div>{lead.phone}</div>
                            <div className="text-xs text-slate-400 mt-0.5">{lead.email}</div>
                          </td>
                          <td className="p-4 text-slate-600 font-medium">
                            {lead.address?.split(",")?.slice(-3, -2)?.[0]?.trim() || "Tampa"}
                          </td>
                          <td className="p-4 font-semibold text-slate-800">
                            <span className="capitalize">{lead.projectType.replace("-", " ")}</span>
                          </td>
                          <td className="p-4 font-bold text-slate-900">
                            ${lead.estimatedValue.toLocaleString()}
                          </td>
                          <td className="p-4">
                            <span
                              className={`px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider inline-block border ${
                                lead.status === "won" ? "bg-emerald-50 text-emerald-700 border-emerald-100" :
                                lead.status === "lost" ? "bg-rose-50 text-rose-700 border-rose-100" :
                                "bg-amber-50 text-amber-700 border-amber-100"
                              }`}
                            >
                              {lead.status.replace("_", " ")}
                            </span>
                          </td>
                          <td className="p-4 pr-6 text-right space-x-1.5 whitespace-nowrap">
                            <button
                              onClick={() => handleEditLead(lead)}
                              className="p-1.5 bg-slate-50 hover:bg-copper/10 hover:text-copper border border-slate-200 rounded-lg text-slate-500 transition inline-flex items-center"
                            >
                              <Edit2 className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => handleDeleteLead(lead.id, lead.name)}
                              className="p-1.5 bg-rose-50 hover:bg-rose-100 border border-rose-200 rounded-lg text-rose-600 transition inline-flex items-center"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: REVIEWS */}
          {activeTab === "reviews" && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {reviews.map((rev) => (
                  <div key={rev.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-bold text-sm text-slate-800 leading-tight">{rev.title}</h4>
                          <p className="text-xs text-slate-500 font-semibold mt-0.5">{rev.author} · {rev.location}</p>
                        </div>
                        <div className="flex items-center gap-0.5 text-copper shrink-0">
                          {Array.from({ length: rev.rating }).map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-current" />
                          ))}
                        </div>
                      </div>

                      <p className="text-sm text-slate-650 leading-relaxed font-medium mt-3 italic">
                        "{rev.text}"
                      </p>

                      {rev.replyText && (
                        <div className="mt-3 bg-slate-50 border border-slate-100 rounded-xl p-3.5 text-sm leading-relaxed text-slate-700">
                          <span className="font-black text-xs uppercase tracking-wider text-copper block mb-0.5">Revitalize Response</span>
                          "{rev.replyText}"
                        </div>
                      )}
                    </div>

                    <div className="border-t border-slate-100 pt-4 flex items-center justify-between gap-2">
                      <button
                        onClick={() => handleToggleReviewFeatured(rev.id)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold border transition ${
                          rev.featured
                            ? "bg-emerald-50 text-emerald-700 border-emerald-250 hover:bg-emerald-100"
                            : "bg-slate-50 text-slate-500 border-slate-200 hover:bg-slate-100"
                        }`}
                      >
                        {rev.featured ? "Featured on Site" : "Hidden from Site"}
                      </button>

                      <button
                        onClick={() => {
                          setSelectedReview(rev);
                          setReviewReplyText(rev.replyText || "");
                        }}
                        className="px-3 py-1.5 bg-[#1a1f36] hover:bg-[#1a1f36]/90 text-white rounded-lg text-xs font-bold flex items-center gap-1 transition"
                      >
                        <MessageSquare className="w-3.5 h-3.5" /> Reply
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: EMAILS */}
          {activeTab === "emails" && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse text-sm">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-100 text-xs font-black uppercase tracking-wider text-slate-400">
                        <th className="p-4 pl-6">Sender Details</th>
                        <th className="p-4">Requested Service</th>
                        <th className="p-4">Message Body</th>
                        <th className="p-4">Sent At</th>
                        <th className="p-4 pr-6 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-150 text-sm">
                      {webEmails.map((email) => (
                        <tr key={email.id} className="hover:bg-slate-50/50 transition">
                          <td className="p-4 pl-6">
                            <div className="font-bold text-slate-800">{email.name}</div>
                            <div className="text-xs text-slate-400 mt-0.5">{email.email} · {email.phone}</div>
                          </td>
                          <td className="p-4 font-semibold text-slate-800 truncate max-w-[120px]">
                            {email.service || "General Inquiry"}
                          </td>
                          <td className="p-4 text-slate-600 font-medium leading-relaxed max-w-sm truncate">
                            {email.message}
                          </td>
                          <td className="p-4 text-slate-400 font-medium whitespace-nowrap">
                            {new Date(email.createdAt).toLocaleString()}
                          </td>
                          <td className="p-4 pr-6 text-right space-x-1.5 whitespace-nowrap">
                            <button
                              onClick={() => triggerConfirm({
                                title: "Read Submission",
                                message: `Message from ${email.name}:\n\n"${email.message}"`,
                                confirmText: "Okay",
                                onConfirm: () => {}
                              })}
                              className="p-1.5 bg-slate-50 hover:bg-copper/10 border border-slate-200 rounded-lg text-slate-500 transition inline-flex items-center"
                            >
                              <Eye className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => handleDeleteEmail(email.id)}
                              className="p-1.5 bg-rose-50 hover:bg-rose-100 border border-rose-200 rounded-lg text-rose-600 transition inline-flex items-center"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: CHAT */}
          {activeTab === "chat" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-[500px] items-stretch animate-in fade-in duration-200">
              {/* Sidebar */}
              <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
                <div className="p-4 border-b border-slate-100 bg-slate-50/50">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-slate-700">Active Sessions</h4>
                </div>
                <div className="flex-1 overflow-y-auto divide-y divide-slate-100">
                  {chatSessions.map((session) => (
                    <button
                      key={session.id}
                      onClick={() => handleSelectChat(session.id)}
                      className={`w-full text-left p-4 flex items-center justify-between transition ${
                        activeSessionId === session.id ? "bg-slate-50 border-l-4 border-copper" : "hover:bg-slate-50/50"
                      }`}
                    >
                      <div className="truncate pr-2">
                        <div className="font-bold text-sm text-slate-800 flex items-center gap-1.5">
                          {session.clientName}
                          {session.unread && (
                            <span className="w-1.5 h-1.5 bg-rose-500 rounded-full shrink-0" />
                          )}
                        </div>
                        <p className="text-xs text-slate-400 mt-1 truncate">{session.lastMessage}</p>
                      </div>
                      <span className="text-xs text-slate-400 shrink-0 font-medium">
                        {formatChatTime(session.lastMessageTime)}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Chat View */}
              <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-full">
                {activeChatSession ? (
                  <>
                    <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                      <div>
                        <h4 className="font-bold text-sm text-slate-800 leading-none">{activeChatSession.clientName}</h4>
                        <p className="text-xs text-slate-400 font-medium leading-none mt-1">{activeChatSession.clientCity} · Visitor Session</p>
                      </div>
                    </div>

                    <div className="flex-1 p-4 overflow-y-auto bg-slate-50/20 space-y-4">
                      {activeChatSession.messages.map((msg) => (
                        <div
                          key={msg.id}
                          className={`flex gap-2 max-w-[80%] ${
                            msg.sender === "admin" ? "ml-auto flex-row-reverse" : "mr-auto"
                          }`}
                        >
                          <div
                            className={`p-3 rounded-2xl text-sm leading-relaxed ${
                              msg.sender === "admin"
                                ? "bg-copper text-white rounded-tr-none shadow-sm"
                                : "bg-white text-slate-800 border border-slate-200 rounded-tl-none shadow-sm"
                            }`}
                          >
                            <p>{msg.text}</p>
                            <span className={`text-[10px] mt-1 block text-right font-medium ${
                              msg.sender === "admin" ? "text-white/70" : "text-slate-400"
                            }`}>
                              {formatChatTime(msg.timestamp)}
                            </span>
                          </div>
                        </div>
                      ))}
                      <div ref={chatEndRef} />
                    </div>

                    <form onSubmit={handleSendChatReply} className="p-3 border-t border-slate-100 flex items-center gap-2 bg-white">
                      <input
                        type="text"
                        placeholder="Type admin response..."
                        value={adminReplyText}
                        onChange={(e) => setAdminReplyText(e.target.value)}
                        className="flex-1 bg-slate-50 border border-slate-200 focus:border-copper focus:ring-0 focus:outline-none rounded-xl px-4 py-2.5 text-sm font-medium"
                      />
                      <button
                        type="submit"
                        disabled={!adminReplyText.trim()}
                        className="bg-copper hover:bg-copper-deep text-white w-9 h-9 rounded-xl flex items-center justify-center shrink-0 shadow transition disabled:opacity-50"
                      >
                        <Send className="w-3.5 h-3.5" />
                      </button>
                    </form>
                  </>
                ) : (
                  <div className="flex-1 flex flex-col items-center justify-center text-slate-400 text-xs gap-2">
                    <MessageCircle className="w-8 h-8 text-slate-200 animate-pulse" />
                    Select a chat session from the list to respond in real-time.
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 6: GALLERY */}
          {activeTab === "gallery" && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="flex items-center justify-between bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
                <div>
                  <h3 className="text-base font-bold text-slate-800 leading-none">Photo Gallery Manager</h3>
                  <p className="text-xs text-slate-500 font-medium leading-none mt-1">Manage files showing on public Gallery sections</p>
                </div>

                <label className="bg-copper hover:bg-copper-deep text-white px-4 py-2.5 rounded-xl text-sm font-bold flex items-center gap-1.5 shrink-0 shadow transition cursor-pointer">
                  <Upload className="w-4 h-4" /> Add Photo
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleUploadGallery}
                    className="hidden"
                  />
                </label>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {galleryPhotos.map((photo) => (
                  <div key={photo.id} className="relative group aspect-square rounded-2xl overflow-hidden border border-slate-200 shadow bg-white">
                    <img
                      src={photo.url}
                      alt="Gallery item"
                      className="w-full h-full object-cover cursor-zoom-in"
                      onClick={() => setLightboxPhoto(photo.url)}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-3">
                      <span className="text-xs text-white/80 font-medium">
                        Uploaded {new Date(photo.uploadedAt).toLocaleDateString()}
                      </span>
                      <button
                        onClick={() => handleDeleteGallery(photo.id)}
                        className="p-1.5 bg-rose-600 hover:bg-rose-700 text-white rounded-lg transition"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 7: SETTINGS */}
          {activeTab === "settings" && (
            <div className="space-y-6 max-w-xl mx-auto animate-in fade-in duration-200">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <div>
                  <h3 className="text-sm font-bold text-slate-800 leading-none">Security Settings</h3>
                  <p className="text-[10px] text-slate-400 font-medium leading-none mt-1">Change your portal login credentials</p>
                </div>

                <form onSubmit={handleUpdateProfile} className="space-y-4 text-xs text-left">
                  <div className="space-y-1.5">
                    <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Username</label>
                    <input
                      type="text"
                      required
                      value={updateUsername}
                      onChange={(e) => setUpdateUsername(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-4 focus:outline-none focus:ring-1 focus:ring-copper focus:border-copper"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">New Password</label>
                    <input
                      type="password"
                      placeholder="Enter new password (optional)"
                      value={updatePassword}
                      onChange={(e) => setUpdatePassword(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-4 focus:outline-none focus:ring-1 focus:ring-copper focus:border-copper"
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-copper hover:bg-copper-deep text-white font-bold py-3 px-6 rounded-xl transition shadow"
                  >
                    Update Credentials
                  </button>
                </form>
              </div>
            </div>
          )}

          {/* TAB 8: SECURITY */}
          {activeTab === "security" && (
            currentUser?.role === "admin" ? (
              <div className="space-y-6 max-w-3xl mx-auto animate-in fade-in duration-200">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                    <div>
                      <h3 className="text-sm font-bold text-slate-800 leading-none">Register New Account</h3>
                      <p className="text-[10px] text-slate-400 font-medium leading-none mt-1">Add sub-accounts for other staff/members</p>
                    </div>

                    <form onSubmit={handleCreateUser} className="space-y-4 text-xs text-left">
                      <div className="space-y-1.5">
                        <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Username</label>
                        <input
                          type="text"
                          required
                          value={addUsername}
                          onChange={(e) => setAddUsername(e.target.value)}
                          placeholder="e.g. jiten"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-4 focus:outline-none focus:ring-1 focus:ring-copper focus:border-copper"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Password</label>
                        <input
                          type="password"
                          required
                          value={addPassword}
                          onChange={(e) => setAddPassword(e.target.value)}
                          placeholder="••••••••"
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-4 focus:outline-none focus:ring-1 focus:ring-copper focus:border-copper"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">User Role Permission</label>
                        <select
                          value={addRole}
                          onChange={(e) => setAddRole(e.target.value as any)}
                          className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-4 focus:outline-none focus:ring-1 focus:ring-copper"
                        >
                          <option value="viewer">Viewer (Read-only)</option>
                          <option value="editor">Editor (CRUD access)</option>
                          <option value="admin">Administrator (Full permissions)</option>
                        </select>
                      </div>

                      <button
                        type="submit"
                        className="bg-copper hover:bg-copper-deep text-white font-bold py-3 px-6 rounded-xl transition shadow"
                      >
                        Add Portal Account
                      </button>
                    </form>
                  </div>

                  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                    <div>
                      <h3 className="text-sm font-bold text-slate-800 leading-none">Registered Accounts</h3>
                      <p className="text-[10px] text-slate-400 font-medium leading-none mt-1">Management of portal users list</p>
                    </div>

                    <div className="divide-y divide-slate-100 text-xs text-left">
                      {portalUsers.map((user) => (
                        <div key={user.id} className="py-3 flex items-center justify-between">
                          <div>
                            <div className="font-bold text-slate-850">{user.username}</div>
                            <div className="text-[9px] text-copper uppercase font-black tracking-wider mt-0.5">{user.role}</div>
                          </div>
                          <button
                            onClick={() => handleDeleteUser(user.id, user.username)}
                            className="p-1.5 bg-rose-50 hover:bg-rose-100 border border-rose-200 rounded-lg text-rose-600 transition"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="max-w-md mx-auto bg-white p-8 rounded-2xl border border-slate-200 shadow-sm text-center space-y-4 animate-in fade-in duration-200">
                <div className="w-12 h-12 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center mx-auto border border-rose-100">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 text-sm">Admin Permission Required</h3>
                  <p className="text-xs text-slate-505 mt-2 leading-relaxed">
                    Access to system user accounts, privilege management, and portal credentials list is restricted to the primary Administrator account.
                  </p>
                </div>
              </div>
            )
          )}
        </main>
      </div>

      {/* Edit / Details Dialog */}
      {isEditingLead && selectedLead && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-lg bg-white h-full shadow-2xl p-6 overflow-y-auto flex flex-col justify-between border-l border-slate-200 animate-in slide-in-from-right duration-250 text-xs text-left">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-800">{selectedLead.name}</h3>
                  <p className="text-[10px] text-copper font-bold uppercase tracking-wider mt-0.5">Lead Details Profile</p>
                </div>
                <button 
                  onClick={() => { setIsEditingLead(false); setSelectedLead(null); }}
                  className="p-1.5 rounded-full hover:bg-slate-100 transition"
                >
                  <X className="w-5 h-5 text-slate-500" />
                </button>
              </div>

              {/* Metadata */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wide block">Email Address</span>
                  <a href={`mailto:${selectedLead.email}`} className="font-semibold text-copper hover:underline mt-0.5 block">{selectedLead.email}</a>
                </div>
                <div>
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wide block">Phone Number</span>
                  <a href={`tel:${selectedLead.phone}`} className="font-semibold text-copper hover:underline mt-0.5 block">{selectedLead.phone}</a>
                </div>
                <div className="col-span-2">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wide block">Property Address</span>
                  <p className="font-semibold text-slate-800 mt-0.5">{selectedLead.address}</p>
                </div>
                <div>
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wide block">Project Category</span>
                  <p className="font-semibold text-slate-800 capitalize mt-0.5">{selectedLead.projectType.replace("-", " ")}</p>
                </div>
                <div>
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wide block">Created At</span>
                  <p className="font-semibold text-slate-800 mt-0.5">{new Date(selectedLead.createdAt).toLocaleDateString()}</p>
                </div>
                <div className="col-span-2 bg-slate-50 border border-slate-100 p-3 rounded-xl">
                  <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wide block">Project Scope Description</span>
                  <p className="text-slate-650 font-medium leading-relaxed mt-1">{selectedLead.description}</p>
                </div>
              </div>

              {/* Edit inputs */}
              <div className="border-t border-slate-100 pt-4 space-y-4">
                <h4 className="text-xs font-black uppercase tracking-wider text-slate-700">Management Controls</h4>

                <div className="space-y-1.5">
                  <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wide block">Pipeline Stage</label>
                  <select
                    value={editStatus}
                    onChange={(e) => setEditStatus(e.target.value as Lead["status"])}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs focus:ring-1 focus:ring-copper focus:border-copper focus:outline-none"
                  >
                    <option value="new">New Lead</option>
                    <option value="contacted">Contacted</option>
                    <option value="consultation_scheduled">Consultation Scheduled</option>
                    <option value="proposal_sent">Proposal Sent</option>
                    <option value="won">Won (Contract Signed)</option>
                    <option value="lost">Lost (Archived)</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wide block">Estimated Contract Value ($)</label>
                  <input
                    type="number"
                    value={editEstimatedValue}
                    onChange={(e) => setEditEstimatedValue(Number(e.target.value))}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs focus:ring-1 focus:ring-copper focus:border-copper focus:outline-none font-semibold text-slate-800"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wide block">Internal Project Notes</label>
                  <textarea
                    rows={3}
                    value={editNotes}
                    onChange={(e) => setEditNotes(e.target.value)}
                    placeholder="Add details about estimates, phone calls, or scheduled on-site inspections..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs focus:ring-1 focus:ring-copper focus:border-copper focus:outline-none"
                  />
                </div>
              </div>

              {/* Photos */}
              <div className="border-t border-slate-100 pt-4 space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-black uppercase tracking-wider text-slate-700">Project Site Photos</h4>
                  <label className="bg-slate-50 hover:bg-copper/10 hover:text-copper border border-slate-200 hover:border-copper/25 px-3 py-1.5 rounded-lg text-[10px] font-bold flex items-center gap-1.5 cursor-pointer transition">
                    <Upload className="w-3.5 h-3.5" /> Upload File
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleUploadPhoto(e, selectedLead.id)}
                      className="hidden"
                    />
                  </label>
                </div>

                <div className="grid grid-cols-3 gap-2">
                  {selectedLead.photos && selectedLead.photos.map((photo, pIdx) => (
                    <div key={pIdx} className="relative group aspect-square rounded-xl overflow-hidden border border-slate-150 shadow-sm bg-slate-50">
                      <img
                        src={photo}
                        alt={`Lead Site ${pIdx + 1}`}
                        className="w-full h-full object-cover cursor-zoom-in"
                        onClick={() => setLightboxPhoto(photo)}
                      />
                      <button
                        onClick={() => handleRemovePhoto(selectedLead.id, pIdx)}
                        className="absolute top-1 right-1 p-1 bg-red-600/90 text-white rounded-full opacity-0 group-hover:opacity-100 transition shadow"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                  {(!selectedLead.photos || selectedLead.photos.length === 0) && (
                    <div className="col-span-3 text-center py-6 bg-slate-50 rounded-xl border border-dashed border-slate-200 text-slate-400 font-medium">
                      No site photos uploaded yet.
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="border-t border-slate-100 pt-4 flex gap-3">
              <button
                onClick={() => { setIsEditingLead(false); setSelectedLead(null); }}
                className="w-1/2 border border-slate-200 rounded-xl py-3 font-bold hover:bg-slate-50 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveLeadDetails}
                className="w-1/2 bg-copper hover:bg-copper-deep text-white rounded-xl py-3 font-bold shadow-lg shadow-copper/10 transition"
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Custom Lead Dialog */}
      {isAddingLead && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden border border-slate-200 animate-in zoom-in-95 duration-200 text-xs text-left">
            <div className="bg-gradient-to-r from-copper to-[#975033] p-4 text-white flex items-center justify-between">
              <h3 className="font-bold text-sm leading-tight">Create New Business Lead</h3>
              <button 
                onClick={() => setIsAddingLead(false)}
                className="text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleAddCustomLead} className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Client Name</label>
                  <input
                    type="text"
                    required
                    value={newLeadName}
                    onChange={(e) => setNewLeadName(e.target.value)}
                    placeholder="e.g. John Doe"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3 focus:outline-none focus:ring-1 focus:ring-copper focus:border-copper"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Estimated Value ($)</label>
                  <input
                    type="number"
                    value={newLeadVal}
                    onChange={(e) => setNewLeadVal(Number(e.target.value))}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3 focus:outline-none focus:ring-1 focus:ring-copper focus:border-copper"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Phone Number</label>
                  <input
                    type="text"
                    required
                    value={newLeadPhone}
                    onChange={(e) => setNewLeadPhone(e.target.value)}
                    placeholder="(813) 555-0100"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3 focus:outline-none focus:ring-1 focus:ring-copper focus:border-copper"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Email Address</label>
                  <input
                    type="email"
                    required
                    value={newLeadEmail}
                    onChange={(e) => setNewLeadEmail(e.target.value)}
                    placeholder="client@domain.com"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3 focus:outline-none focus:ring-1 focus:ring-copper focus:border-copper"
                  />
                </div>
                <div className="col-span-2 space-y-1">
                  <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Address</label>
                  <input
                    type="text"
                    required
                    value={newLeadAddress}
                    onChange={(e) => setNewLeadAddress(e.target.value)}
                    placeholder="e.g. 104 Oak Dr, Tampa, FL 33602"
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3 focus:outline-none focus:ring-1 focus:ring-copper focus:border-copper"
                  />
                </div>
                <div className="col-span-2 space-y-1">
                  <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Project Type</label>
                  <select
                    value={newLeadType}
                    onChange={(e) => setNewLeadType(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3 focus:outline-none focus:ring-1 focus:ring-copper focus:border-copper"
                  >
                    <option value="remodeling font-semibold">Home Remodeling</option>
                    <option value="real-estate font-semibold">Real Estate Brokerage</option>
                    <option value="kitchen font-semibold">Kitchen Remodel</option>
                    <option value="bathroom font-semibold">Bath Remodel</option>
                    <option value="cleaning font-semibold">Cleaning</option>
                    <option value="cabinets font-semibold">Cabinets Sales</option>
                  </select>
                </div>
                <div className="col-span-2 space-y-1">
                  <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Project Scope Description</label>
                  <textarea
                    rows={3}
                    value={newLeadDesc}
                    onChange={(e) => setNewLeadDesc(e.target.value)}
                    placeholder="Describe the requested work details..."
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3 focus:outline-none focus:ring-1 focus:ring-copper"
                  />
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setIsAddingLead(false)}
                  className="w-1/2 border border-slate-200 rounded-xl py-3 font-bold hover:bg-slate-50 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-1/2 bg-copper hover:bg-copper-deep text-white rounded-xl py-3 font-bold shadow-lg shadow-copper/10 transition"
                >
                  Create Lead
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Review Reply dialog */}
      {selectedReview && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl overflow-hidden border border-slate-250 animate-in zoom-in-95 duration-200 text-xs text-left">
            <div className="bg-gradient-to-r from-copper to-[#975033] p-4 text-white flex items-center justify-between">
              <h3 className="font-bold text-sm leading-tight">Reply to Review</h3>
              <button 
                onClick={() => setSelectedReview(null)}
                className="text-white/80 hover:text-white p-1 rounded-full"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-slate-500 italic">
                "{selectedReview.text}"
              </div>

              <div className="space-y-1">
                <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Response Message</label>
                <textarea
                  rows={4}
                  value={reviewReplyText}
                  onChange={(e) => setReviewReplyText(e.target.value)}
                  placeholder="Write a response showing appreciation or addressing project highlights..."
                  className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3 focus:outline-none focus:ring-1 focus:ring-copper"
                />
              </div>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => setSelectedReview(null)}
                  className="w-1/2 border border-slate-200 rounded-xl py-3 font-bold hover:bg-slate-50 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSaveReviewReply}
                  className="w-1/2 bg-copper hover:bg-copper-deep text-white rounded-xl py-3 font-bold shadow-lg shadow-copper/10 transition"
                >
                  Submit Response
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
