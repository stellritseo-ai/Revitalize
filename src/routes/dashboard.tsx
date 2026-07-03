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
  Upload
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
  Legend
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
      { title: "Revitalize Office — Admin Dashboard" },
      { name: "description", content: "Internal business management console for Revitalize Group." }
    ],
  }),
  component: DashboardPage,
});

// Premium copper-themed chart colors
const COLORS = ["#D69873", "#975033", "#C0A080", "#8C6A53", "#5C4033", "#B58A63"];

// Custom Premium Tooltip for Recharts
const CustomChartTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#140b07] border border-white/10 rounded-xl p-3.5 shadow-2xl backdrop-blur-md animate-in fade-in duration-150">
        <p className="text-[10px] uppercase font-bold tracking-[0.15em] text-white/40">{label}</p>
        <p className="text-sm font-bold text-copper mt-1.5">
          {payload[0].name}: <span className="text-white font-sans">${Number(payload[0].value).toLocaleString()}</span>
        </p>
      </div>
    );
  }
  return null;
};

function DashboardPage() {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [currentUser, setCurrentUser] = useState<{ id: string; username: string; role: string } | null>(null);

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

  const [activeTab, setActiveTab] = useState<"overview" | "leads" | "reviews" | "settings" | "chat" | "gallery" | "emails" | "security">("overview");

  // Portal Security States
  const [portalUsers, setPortalUsers] = useState<PortalUser[]>([]);
  const [updateUsername, setUpdateUsername] = useState("");
  const [updatePassword, setUpdatePassword] = useState("");
  const [addUsername, setAddUsername] = useState("");
  const [addPassword, setAddPassword] = useState("");
  const [addRole, setAddRole] = useState<"admin" | "editor" | "viewer">("viewer");

  // Store data states
  const [leads, setLeads] = useState<Lead[]>([]);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [webEmails, setWebEmails] = useState<WebEmail[]>([]);
  const [chatSessions, setChatSessions] = useState<ChatSession[]>([]);
  const [activeSessionId, setActiveSessionId] = useState<string | null>(null);
  const [adminReplyText, setAdminReplyText] = useState("");
  const [galleryPhotos, setGalleryPhotos] = useState<GalleryPhoto[]>([]);
  const [lightboxPhoto, setLightboxPhoto] = useState<string | null>(null);

  // Filter states
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");
  const [typeFilter, setTypeFilter] = useState<string>("all");

  // Lead editing state
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);
  const [isEditingLead, setIsEditingLead] = useState(false);
  const [editEstimatedValue, setEditEstimatedValue] = useState(0);
  const [editNotes, setEditNotes] = useState("");
  const [editStatus, setEditStatus] = useState<Lead["status"]>("new");

  // Add Custom Lead Form States
  const [isAddingLead, setIsAddingLead] = useState(false);
  const [newLeadName, setNewLeadName] = useState("");
  const [newLeadEmail, setNewLeadEmail] = useState("");
  const [newLeadPhone, setNewLeadPhone] = useState("");
  const [newLeadAddress, setNewLeadAddress] = useState("");
  const [newLeadType, setNewLeadType] = useState("remodeling");
  const [newLeadDesc, setNewLeadDesc] = useState("");
  const [newLeadVal, setNewLeadVal] = useState(15000);

  // Review reply state
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);
  const [reviewReplyText, setReviewReplyText] = useState("");

  // Confirmation Modal
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

  // Prefill profile input
  useEffect(() => {
    if (currentUser) {
      setUpdateUsername(currentUser.username);
    }
  }, [currentUser]);

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

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem("revitalize-session-token");
    localStorage.removeItem("revitalize-session-user");
    toast.info("Logged out successfully.");
    navigate({ to: "/login" });
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

  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0d0704] text-white font-sans">
        <div className="text-center">
          <div className="h-8 w-8 rounded-full border-2 border-copper border-t-transparent animate-spin mx-auto mb-4"></div>
          <p className="text-xs uppercase font-bold tracking-widest text-copper/60">Loading Workspace...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0d0704] flex font-sans text-white/90 selection:bg-copper selection:text-white overflow-hidden">
      {/* Dynamic Glow effects */}
      <div className="absolute top-[-10%] right-[10%] w-[35rem] h-[35rem] rounded-full bg-copper/5 blur-[150px] pointer-events-none -z-10 animate-pulse duration-10000" />
      <div className="absolute bottom-[10%] left-[20%] w-[45rem] h-[45rem] rounded-full bg-[#975033]/4 blur-[180px] pointer-events-none -z-10 animate-pulse duration-10000" />

      {/* Confirmation Modal */}
      {confirmConfig && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="bg-[#140b07] rounded-2xl p-6 max-w-sm w-full shadow-2xl border border-white/10 animate-in zoom-in-95 duration-200">
            <h3 className="text-lg font-bold text-white mb-2 font-serif">{confirmConfig.title}</h3>
            <p className="text-sm text-white/60 leading-relaxed mb-6">{confirmConfig.message}</p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setConfirmConfig(null)}
                className="px-4 py-2 rounded-xl text-xs font-bold border border-white/10 hover:bg-white/5 transition text-white/80 hover:text-white"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  confirmConfig.onConfirm();
                  setConfirmConfig(null);
                }}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-rose-600 hover:bg-rose-700 text-white shadow-lg transition"
              >
                {confirmConfig.confirmText || "Confirm"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox Modal */}
      {lightboxPhoto && (
        <div 
          onClick={() => setLightboxPhoto(null)}
          className="fixed inset-0 z-[99999] bg-black/95 flex items-center justify-center p-4 cursor-pointer animate-in fade-in duration-200"
        >
          <img src={lightboxPhoto} alt="Lightbox Enlarged" className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl border border-white/10" />
          <button className="absolute top-6 right-6 text-white hover:text-gray-300 p-2">
            <X className="w-6 h-6" />
          </button>
        </div>
      )}

      {/* Left Sidebar Navigation */}
      <aside className="w-64 sm:w-72 shrink-0 bg-[#0c0704]/95 backdrop-blur-xl border-r border-white/[0.05] flex flex-col justify-between p-6 sticky top-0 h-screen z-45">
        <div className="space-y-8 overflow-y-auto pr-1 scrollbar-none">
          {/* Logo & Branding */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="Revitalize Office" className="h-9 w-auto object-contain bg-white rounded p-0.5" />
            <div>
              <h1 className="font-bold text-sm tracking-wide font-serif leading-none">Revitalize Office</h1>
              <p className="text-[9px] text-copper font-bold leading-none mt-2.5 uppercase tracking-[0.15em]">Control Desk</p>
            </div>
          </div>

          {/* Navigation Links list */}
          <nav className="flex flex-col gap-1.5">
            {[
              { id: "overview", label: "Analytics Overview", icon: TrendingUp },
              { id: "leads", label: "Leads Manager", icon: Briefcase },
              { id: "reviews", label: "Reviews Board", icon: Star },
              { id: "emails", label: "Web Inquiries", icon: Mail },
              { id: "chat", label: "Live Chats", icon: MessageCircle, badge: chatSessions.some(s => s.unread) },
              { id: "gallery", label: "Gallery Admin", icon: ImageIcon },
              { id: "settings", label: "Settings", icon: Settings },
              ...(currentUser?.role === "admin" ? [{ id: "security", label: "Security Users", icon: Sliders }] : [])
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`w-full px-4 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-between transition-all duration-300 relative group overflow-hidden ${
                    isActive 
                      ? "bg-gradient-to-r from-copper/20 to-copper/5 text-white border border-copper/30 shadow-lg shadow-copper/5 font-black" 
                      : "text-white/60 hover:bg-white/[0.03] hover:text-white border border-transparent"
                  }`}
                >
                  <span className="flex items-center gap-3 relative z-10">
                    <Icon className={`w-4 h-4 transition-colors ${isActive ? "text-copper" : "text-white/40 group-hover:text-copper"}`} />
                    {tab.label}
                  </span>
                  
                  {/* Left sliding bar indicator */}
                  <span className={`absolute left-0 top-1/4 bottom-1/4 w-1 rounded-r bg-copper transition-all duration-300 ${
                    isActive ? "h-1/2 opacity-100" : "h-0 opacity-0 group-hover:h-1/3 group-hover:opacity-60"
                  }`} />
                  
                  {/* Badge */}
                  {tab.badge && (
                    <span className="w-1.5 h-1.5 bg-rose-500 rounded-full shrink-0 animate-pulse relative z-10" />
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Sidebar Footer */}
        <div className="border-t border-white/[0.05] pt-5 space-y-4">
          <div className="flex items-center gap-3 pl-2">
            <div className="w-8 h-8 rounded-full bg-copper/10 border border-copper/20 flex items-center justify-center text-copper text-xs font-black">
              {currentUser?.username.charAt(0).toUpperCase()}
            </div>
            <div>
              <p className="text-xs font-bold text-white leading-none">{currentUser?.username}</p>
              <p className="text-[9px] text-white/40 uppercase tracking-widest leading-none mt-1.5">{currentUser?.role}</p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-bold bg-white/5 hover:bg-rose-500/10 hover:text-rose-400 border border-white/10 hover:border-rose-500/20 transition-all duration-300 cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Workspace Column */}
      <div className="flex-1 min-h-screen overflow-y-auto flex flex-col relative z-10">
        <main className="flex-1 p-6 md:p-8 max-w-7xl w-full mx-auto">
          {/* TAB 1: OVERVIEW */}
          {activeTab === "overview" && (
            <div className="space-y-6 animate-in fade-in duration-300">
              {/* Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                {[
                  { title: "Total Leads Logged", val: analytics.totalLeads, suffix: "Live", isEmerald: true },
                  { title: "Active Pipeline", val: analytics.activeCount, suffix: "Leads", isCopper: true },
                  { title: "Estimated Revenue", val: `$${(analytics.totalValue / 1000).toFixed(0)}k`, suffix: "Active", isBlue: true },
                  { title: "Closed Won Contracts", val: `$${(analytics.wonValue / 1000).toFixed(0)}k`, suffix: "Won", isEmerald: true },
                  { title: "Close Win Rate", val: `${analytics.winRate}%`, suffix: "Average", isNeutral: true }
                ].map((item, idx) => (
                  <div 
                    key={idx} 
                    className="bg-gradient-to-br from-[#18100b]/80 to-[#120804]/90 backdrop-blur-md p-5 rounded-2xl border border-white/[0.05] shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] flex flex-col justify-between hover:border-copper/20 hover:scale-[1.01] hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <span className="text-[10px] text-white/40 font-bold uppercase tracking-wider">{item.title}</span>
                    <div className="flex items-baseline justify-between mt-2">
                      <span className="text-2xl font-bold text-white tracking-tight">{item.val}</span>
                      <span className={`text-[9px] font-black border px-2 py-0.5 rounded-full flex items-center gap-0.5 ${
                        item.isEmerald ? "text-emerald-400 bg-emerald-500/10 border-emerald-500/20" :
                        item.isCopper ? "text-copper bg-copper/10 border-copper/25" :
                        item.isBlue ? "text-blue-400 bg-blue-500/10 border-blue-500/20" :
                        "text-white/60 bg-white/5 border-white/10"
                      }`}>
                        {item.suffix === "Live" && <ArrowUpRight className="w-3 h-3 animate-bounce" />}
                        {item.suffix}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Charts Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Monthly Revenue Chart */}
                <div className="lg:col-span-8 bg-gradient-to-br from-[#18100b]/80 to-[#120804]/90 backdrop-blur-md p-6 rounded-2xl border border-white/[0.05] shadow-xl">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4 font-serif">Revenue & Inquiry Timeline</h3>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={analytics.timelineChart}>
                        <defs>
                          <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#D69873" stopOpacity={0.25}/>
                            <stop offset="95%" stopColor="#D69873" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.02)" />
                        <XAxis dataKey="name" stroke="#718096" fontSize={11} tickLine={false} />
                        <YAxis stroke="#718096" fontSize={11} tickLine={false} />
                        <RechartsTooltip content={<CustomChartTooltip />} />
                        <Area type="monotone" dataKey="revenue" stroke="#D69873" strokeWidth={2.5} fillOpacity={1} fill="url(#colorRevenue)" name="Contract Value ($)" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Status Pie Chart */}
                <div className="lg:col-span-4 bg-gradient-to-br from-[#18100b]/80 to-[#120804]/90 backdrop-blur-md p-6 rounded-2xl border border-white/[0.05] shadow-xl">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4 font-serif">Leads Pipeline Split</h3>
                  <div className="h-80 flex flex-col items-center justify-center">
                    <div className="w-full h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={analytics.statusChart}
                            cx="50%"
                            cy="50%"
                            innerRadius={60}
                            outerRadius={80}
                            paddingAngle={4}
                            dataKey="value"
                          >
                            {analytics.statusChart.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <RechartsTooltip content={<CustomChartTooltip />} />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 w-full text-[10px] font-bold text-white/50">
                      {analytics.statusChart.map((entry, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 truncate">
                          <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: COLORS[idx % COLORS.length] }} />
                          <span className="truncate text-white/70">{entry.name}: <span className="text-white font-sans">{entry.value}</span></span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Project Types Chart */}
                <div className="lg:col-span-6 bg-gradient-to-br from-[#18100b]/80 to-[#120804]/90 backdrop-blur-md p-6 rounded-2xl border border-white/[0.05] shadow-xl">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4 font-serif">Project Distribution Value</h3>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={analytics.projectTypesChart}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(255,255,255,0.02)" />
                        <XAxis dataKey="name" stroke="#718096" fontSize={10} tickLine={false} />
                        <YAxis stroke="#718096" fontSize={11} tickLine={false} />
                        <RechartsTooltip content={<CustomChartTooltip />} />
                        <Bar dataKey="amount" fill="#975033" radius={[4, 4, 0, 0]} name="Value ($)" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Regions Chart */}
                <div className="lg:col-span-6 bg-gradient-to-br from-[#18100b]/80 to-[#120804]/90 backdrop-blur-md p-6 rounded-2xl border border-white/[0.05] shadow-xl">
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4 font-serif">Tampa Bay Cities Share</h3>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={analytics.regionChart} layout="vertical">
                        <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="rgba(255,255,255,0.02)" />
                        <XAxis type="number" stroke="#718096" fontSize={11} tickLine={false} />
                        <YAxis dataKey="name" type="category" stroke="#718096" fontSize={11} tickLine={false} width={80} />
                        <RechartsTooltip contentStyle={{ backgroundColor: "#140b07", borderColor: "rgba(255,255,255,0.1)", borderRadius: "12px", color: "white" }} />
                        <Bar dataKey="value" fill="#D69873" radius={[0, 4, 4, 0]} name="Leads Count" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: LEADS */}
          {activeTab === "leads" && (
            <div className="space-y-6 animate-in fade-in duration-300">
              {/* Tools Header */}
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-gradient-to-br from-[#18100b]/80 to-[#120804]/90 backdrop-blur-md p-4 rounded-2xl border border-white/[0.05] shadow-xl">
                <div className="relative w-full sm:max-w-xs">
                  <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
                  <input
                    type="text"
                    placeholder="Search leads by name, email..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-white/[0.02] border border-white/10 rounded-xl text-xs text-white placeholder-white/30 focus:border-copper focus:ring-0 focus:outline-none transition duration-200"
                  />
                </div>

                <div className="flex gap-2 w-full sm:w-auto">
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="bg-[#120804] text-white border border-white/10 rounded-xl px-3 py-2 text-xs focus:outline-none w-1/2 sm:w-auto font-semibold"
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
                    className="bg-[#120804] text-white border border-white/10 rounded-xl px-3 py-2 text-xs focus:outline-none w-1/2 sm:w-auto font-semibold"
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
                    className="bg-copper hover:bg-copper-deep text-white px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-1.5 shrink-0 shadow-md shadow-copper/20 hover:-translate-y-0.5 active:translate-y-0 transition cursor-pointer"
                  >
                    <Plus className="w-4 h-4" /> Add Lead
                  </button>
                </div>
              </div>

              {/* Leads List Table */}
              <div className="bg-gradient-to-br from-[#18100b]/80 to-[#120804]/90 backdrop-blur-md rounded-2xl border border-white/[0.05] shadow-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-white/[0.02] border-b border-white/[0.05] text-[10px] font-black uppercase tracking-wider text-white/40">
                        <th className="p-4 pl-6">Client Name</th>
                        <th className="p-4">Contact Info</th>
                        <th className="p-4">City</th>
                        <th className="p-4">Service</th>
                        <th className="p-4">Estimated Value</th>
                        <th className="p-4">Status</th>
                        <th className="p-4 pr-6 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/[0.03] text-xs">
                      {filteredLeads.length === 0 ? (
                        <tr>
                          <td colSpan={7} className="text-center p-12 text-white/30">
                            No leads found matching your search filters.
                          </td>
                        </tr>
                      ) : (
                        filteredLeads.map((lead) => (
                          <tr key={lead.id} className="hover:bg-white/[0.01] transition-colors duration-200">
                            <td className="p-4 pl-6 font-bold text-white">{lead.name}</td>
                            <td className="p-4 text-white/60 font-medium">
                              <div>{lead.phone}</div>
                              <div className="text-[10px] text-white/40 mt-0.5">{lead.email}</div>
                            </td>
                            <td className="p-4 text-white/70 font-medium">
                              {lead.address.split(",").slice(-3, -2)[0]?.trim() || "Tampa"}
                            </td>
                            <td className="p-4 font-semibold text-white/85">
                              <span className="capitalize">{lead.projectType.replace("-", " ")}</span>
                            </td>
                            <td className="p-4 font-bold text-copper font-sans">
                              ${lead.estimatedValue.toLocaleString()}
                            </td>
                            <td className="p-4">
                              <span
                                className={`px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-wider inline-flex items-center border ${
                                  lead.status === "new" ? "bg-blue-500/10 text-blue-400 border-blue-500/20" :
                                  lead.status === "contacted" ? "bg-amber-500/10 text-amber-400 border-amber-500/20" :
                                  lead.status === "consultation_scheduled" ? "bg-purple-500/10 text-purple-400 border-purple-500/20" :
                                  lead.status === "proposal_sent" ? "bg-indigo-500/10 text-indigo-400 border-indigo-500/20" :
                                  lead.status === "won" ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" :
                                  "bg-rose-500/10 text-rose-400 border-rose-500/20"
                                }`}
                              >
                                {lead.status === "new" && (
                                  <span className="w-1 h-1 rounded-full bg-blue-400 mr-1.5 animate-pulse inline-block" />
                                )}
                                {lead.status.replace("_", " ")}
                              </span>
                            </td>
                            <td className="p-4 pr-6 text-right space-x-1 whitespace-nowrap">
                              <button
                                onClick={() => handleEditLead(lead)}
                                className="p-2 bg-white/5 hover:bg-copper/20 hover:text-white border border-white/5 hover:border-copper/25 rounded-lg text-white/70 transition inline-flex items-center"
                              >
                                <Edit2 className="w-3.5 h-3.5" />
                              </button>
                              <button
                                onClick={() => handleDeleteLead(lead.id, lead.name)}
                                className="p-2 bg-rose-500/10 hover:bg-rose-500/25 border border-rose-500/20 rounded-lg text-rose-400 transition inline-flex items-center"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Edit / Details Drawer */}
              {isEditingLead && selectedLead && (
                <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
                  <div className="w-full max-w-lg bg-[#140b07] h-full shadow-2xl p-6 overflow-y-auto flex flex-col justify-between border-l border-white/5 animate-in slide-in-from-right duration-250">
                    <div className="space-y-6">
                      <div className="flex items-center justify-between border-b border-white/[0.05] pb-4">
                        <div>
                          <h3 className="text-lg font-bold text-white font-serif">{selectedLead.name}</h3>
                          <p className="text-[10px] text-copper font-bold uppercase tracking-wider mt-0.5">Lead Details Profile</p>
                        </div>
                        <button 
                          onClick={() => { setIsEditingLead(false); setSelectedLead(null); }}
                          className="p-1.5 rounded-full hover:bg-white/5 transition"
                        >
                          <X className="w-5 h-5 text-white/50 hover:text-white" />
                        </button>
                      </div>

                      {/* Metadata list */}
                      <div className="grid grid-cols-2 gap-4 text-xs">
                        <div>
                          <span className="text-[9px] font-bold text-white/40 uppercase tracking-wide block">Email Address</span>
                          <a href={`mailto:${selectedLead.email}`} className="font-semibold text-copper hover:underline mt-0.5 block">{selectedLead.email}</a>
                        </div>
                        <div>
                          <span className="text-[9px] font-bold text-white/40 uppercase tracking-wide block">Phone Number</span>
                          <a href={`tel:${selectedLead.phone}`} className="font-semibold text-copper hover:underline mt-0.5 block">{selectedLead.phone}</a>
                        </div>
                        <div className="col-span-2">
                          <span className="text-[9px] font-bold text-white/40 uppercase tracking-wide block">Property Address</span>
                          <p className="font-semibold text-white/80 mt-0.5">{selectedLead.address}</p>
                        </div>
                        <div>
                          <span className="text-[9px] font-bold text-white/40 uppercase tracking-wide block">Project Category</span>
                          <p className="font-semibold text-white/80 capitalize mt-0.5">{selectedLead.projectType.replace("-", " ")}</p>
                        </div>
                        <div>
                          <span className="text-[9px] font-bold text-white/40 uppercase tracking-wide block">Created At</span>
                          <p className="font-semibold text-white/80 mt-0.5">{new Date(selectedLead.createdAt).toLocaleDateString()}</p>
                        </div>
                        <div className="col-span-2 bg-white/[0.02] border border-white/5 p-3 rounded-xl">
                          <span className="text-[9px] font-bold text-white/40 uppercase tracking-wide block">Project Scope Description</span>
                          <p className="text-white/70 font-medium leading-relaxed mt-1">{selectedLead.description}</p>
                        </div>
                      </div>

                      {/* Edit Form */}
                      <div className="border-t border-white/[0.05] pt-4 space-y-4">
                        <h4 className="text-xs font-black uppercase tracking-wider text-white font-serif">Management Controls</h4>

                        <div className="space-y-1.5">
                          <label className="text-[10px] text-white/40 font-bold uppercase tracking-wide block">Pipeline Stage</label>
                          <select
                            value={editStatus}
                            onChange={(e) => setEditStatus(e.target.value as Lead["status"])}
                            className="w-full bg-[#120804] text-white border border-white/10 rounded-xl px-3 py-2.5 text-xs focus:ring-1 focus:ring-copper focus:border-copper focus:outline-none"
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
                          <label className="text-[10px] text-white/40 font-bold uppercase tracking-wide block">Estimated Contract Value ($)</label>
                          <input
                            type="number"
                            value={editEstimatedValue}
                            onChange={(e) => setEditEstimatedValue(Number(e.target.value))}
                            className="w-full bg-[#120804] text-white border border-white/10 rounded-xl px-3 py-2.5 text-xs focus:ring-1 focus:ring-copper focus:border-copper focus:outline-none"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-[10px] text-white/40 font-bold uppercase tracking-wide block">Internal Project Notes</label>
                          <textarea
                            rows={3}
                            value={editNotes}
                            onChange={(e) => setEditNotes(e.target.value)}
                            placeholder="Add details about estimates, phone calls, or scheduled on-site inspections..."
                            className="w-full bg-[#120804] text-white border border-white/10 rounded-xl px-3 py-2.5 text-xs focus:ring-1 focus:ring-copper focus:border-copper focus:outline-none"
                          />
                        </div>
                      </div>

                      {/* Photos Upload Section */}
                      <div className="border-t border-white/[0.05] pt-4 space-y-3">
                        <div className="flex items-center justify-between">
                          <h4 className="text-xs font-black uppercase tracking-wider text-white font-serif">Project Site Photos</h4>
                          <label className="bg-white/5 hover:bg-copper/20 hover:text-white border border-white/10 hover:border-copper/25 px-3 py-1.5 rounded-lg text-[10px] font-bold flex items-center gap-1.5 cursor-pointer transition">
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
                            <div key={pIdx} className="relative group aspect-square rounded-xl overflow-hidden border border-white/5">
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
                            <div className="col-span-3 text-center py-6 bg-white/[0.01] rounded-xl border border-dashed border-white/10 text-white/30 text-xs font-medium">
                              No site photos uploaded yet.
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-white/10 pt-4 flex gap-3">
                      <button
                        onClick={() => { setIsEditingLead(false); setSelectedLead(null); }}
                        className="w-1/2 border border-white/10 rounded-xl py-3 text-xs font-bold hover:bg-white/5 transition"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={handleSaveLeadDetails}
                        className="w-1/2 bg-copper hover:bg-copper-deep text-white rounded-xl py-3 text-xs font-bold shadow-lg shadow-copper/15 transition"
                      >
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Add Custom Lead Dialog */}
              {isAddingLead && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
                  <div className="bg-[#140b07] rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden border border-white/10 animate-in zoom-in-95 duration-200">
                    <div className="bg-gradient-to-r from-copper to-[#975033] p-4 text-white flex items-center justify-between">
                      <h3 className="font-bold text-sm leading-tight font-serif">Create New Business Lead</h3>
                      <button 
                        onClick={() => setIsAddingLead(false)}
                        className="text-white/80 hover:text-white p-1 rounded-full"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    <form onSubmit={handleAddCustomLead} className="p-6 space-y-4 text-xs text-left">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="text-[10px] text-white/40 font-bold uppercase tracking-wider block">Client Name</label>
                          <input
                            type="text"
                            required
                            value={newLeadName}
                            onChange={(e) => setNewLeadName(e.target.value)}
                            placeholder="e.g. John Doe"
                            className="w-full bg-[#120804] border border-white/10 rounded-xl py-2.5 px-3 focus:outline-none focus:ring-1 focus:ring-copper focus:border-copper text-white"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] text-white/40 font-bold uppercase tracking-wider block">Estimated Value ($)</label>
                          <input
                            type="number"
                            value={newLeadVal}
                            onChange={(e) => setNewLeadVal(Number(e.target.value))}
                            className="w-full bg-[#120804] border border-white/10 rounded-xl py-2.5 px-3 focus:outline-none focus:ring-1 focus:ring-copper focus:border-copper text-white"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] text-white/40 font-bold uppercase tracking-wider block">Phone Number</label>
                          <input
                            type="text"
                            required
                            value={newLeadPhone}
                            onChange={(e) => setNewLeadPhone(e.target.value)}
                            placeholder="(813) 555-0100"
                            className="w-full bg-[#120804] border border-white/10 rounded-xl py-2.5 px-3 focus:outline-none focus:ring-1 focus:ring-copper focus:border-copper text-white"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] text-white/40 font-bold uppercase tracking-wider block">Email Address</label>
                          <input
                            type="email"
                            required
                            value={newLeadEmail}
                            onChange={(e) => setNewLeadEmail(e.target.value)}
                            placeholder="client@domain.com"
                            className="w-full bg-[#120804] border border-white/10 rounded-xl py-2.5 px-3 focus:outline-none focus:ring-1 focus:ring-copper focus:border-copper text-white"
                          />
                        </div>
                        <div className="col-span-2 space-y-1">
                          <label className="text-[10px] text-white/40 font-bold uppercase tracking-wider block">Address</label>
                          <input
                            type="text"
                            required
                            value={newLeadAddress}
                            onChange={(e) => setNewLeadAddress(e.target.value)}
                            placeholder="e.g. 104 Oak Dr, Tampa, FL 33602"
                            className="w-full bg-[#120804] border border-white/10 rounded-xl py-2.5 px-3 focus:outline-none focus:ring-1 focus:ring-copper focus:border-copper text-white"
                          />
                        </div>
                        <div className="col-span-2 space-y-1">
                          <label className="text-[10px] text-white/40 font-bold uppercase tracking-wider block">Project Type</label>
                          <select
                            value={newLeadType}
                            onChange={(e) => setNewLeadType(e.target.value)}
                            className="w-full bg-[#120804] border border-white/10 rounded-xl py-2.5 px-3 focus:outline-none focus:ring-1 focus:ring-copper focus:border-copper text-white"
                          >
                            <option value="remodeling">Home Remodeling</option>
                            <option value="real-estate">Real Estate Brokerage</option>
                            <option value="kitchen">Kitchen Remodel</option>
                            <option value="bathroom">Bath Remodel</option>
                            <option value="cleaning">Cleaning</option>
                            <option value="cabinets">Cabinets Sales</option>
                          </select>
                        </div>
                        <div className="col-span-2 space-y-1">
                          <label className="text-[10px] text-white/40 font-bold uppercase tracking-wider block">Project Scope Description</label>
                          <textarea
                            rows={3}
                            value={newLeadDesc}
                            onChange={(e) => setNewLeadDesc(e.target.value)}
                            placeholder="Describe the requested work details..."
                            className="w-full bg-[#120804] border border-white/10 rounded-xl py-2.5 px-3 focus:outline-none focus:ring-1 focus:ring-copper focus:border-copper text-white"
                          />
                        </div>
                      </div>

                      <div className="flex gap-3 pt-2">
                        <button
                          type="button"
                          onClick={() => setIsAddingLead(false)}
                          className="w-1/2 border border-white/10 rounded-xl py-3 font-bold hover:bg-white/5 transition"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="w-1/2 bg-copper hover:bg-copper-deep text-white rounded-xl py-3 font-bold shadow-lg shadow-copper/15 transition"
                        >
                          Create Lead
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: REVIEWS */}
          {activeTab === "reviews" && (
            <div className="space-y-6 animate-in fade-in duration-300">
              {/* Reviews list */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {reviews.map((rev) => (
                  <div key={rev.id} className="bg-gradient-to-br from-[#18100b]/80 to-[#120804]/90 backdrop-blur-md p-6 rounded-2xl border border-white/[0.05] shadow-xl flex flex-col justify-between space-y-4 hover:border-copper/20 hover:scale-[1.01] hover:-translate-y-0.5 transition-all duration-300">
                    <div>
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-bold text-sm text-white font-serif leading-tight">{rev.title}</h4>
                          <p className="text-[10px] text-white/40 font-semibold mt-0.5">{rev.author} · {rev.location}</p>
                        </div>
                        <div className="flex items-center gap-0.5 text-copper shrink-0">
                          {Array.from({ length: rev.rating }).map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-current" />
                          ))}
                        </div>
                      </div>

                      <p className="text-xs text-white/80 leading-relaxed font-medium mt-3 italic">
                        "{rev.text}"
                      </p>

                      {rev.replyText && (
                        <div className="mt-3 bg-copper/5 border border-copper/15 rounded-xl p-3 text-xs leading-relaxed text-white/90">
                          <span className="font-black text-[9px] uppercase tracking-wider text-copper block mb-0.5">Revitalize Response</span>
                          "{rev.replyText}"
                        </div>
                      )}
                    </div>

                    <div className="border-t border-white/[0.05] pt-4 flex items-center justify-between gap-2">
                      <button
                        onClick={() => handleToggleReviewFeatured(rev.id)}
                        className={`px-3 py-1.5 rounded-lg text-[10px] font-bold border transition duration-300 ${
                          rev.featured
                            ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20 hover:bg-emerald-500/20"
                            : "bg-white/5 text-white/40 border-white/10 hover:bg-white/10"
                        }`}
                      >
                        {rev.featured ? "Featured on Site" : "Hidden from Site"}
                      </button>

                      <button
                        onClick={() => {
                          setSelectedReview(rev);
                          setReviewReplyText(rev.replyText || "");
                        }}
                        className="px-3.5 py-1.5 bg-copper hover:bg-copper-deep text-white rounded-lg text-[10px] font-bold flex items-center gap-1 hover:scale-103 active:scale-97 transition cursor-pointer"
                      >
                        <MessageSquare className="w-3.5 h-3.5" /> Reply
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Reply Dialog */}
              {selectedReview && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
                  <div className="bg-[#140b07] rounded-2xl w-full max-w-md shadow-2xl overflow-hidden border border-white/10 animate-in zoom-in-95 duration-200">
                    <div className="bg-gradient-to-r from-copper to-[#975033] p-4 text-white flex items-center justify-between">
                      <h3 className="font-bold text-sm leading-tight font-serif">Reply to Review</h3>
                      <button 
                        onClick={() => setSelectedReview(null)}
                        className="text-white/80 hover:text-white p-1 rounded-full"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="p-6 space-y-4 text-xs text-left">
                      <div className="p-3 bg-white/[0.02] border border-white/5 rounded-xl text-white/70 italic">
                        "{selectedReview.text}"
                      </div>

                      <div className="space-y-1">
                        <label className="text-[10px] text-white/40 font-bold uppercase tracking-wider block">Response Message</label>
                        <textarea
                          rows={4}
                          value={reviewReplyText}
                          onChange={(e) => setReviewReplyText(e.target.value)}
                          placeholder="Write a response showing appreciation or addressing project highlights..."
                          className="w-full bg-[#120804] border border-white/10 rounded-xl py-2.5 px-3 focus:outline-none focus:ring-1 focus:ring-copper focus:border-copper text-white"
                        />
                      </div>

                      <div className="flex gap-3">
                        <button
                          type="button"
                          onClick={() => setSelectedReview(null)}
                          className="w-1/2 border border-white/10 rounded-xl py-3 font-bold hover:bg-white/5 transition"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={handleSaveReviewReply}
                          className="w-1/2 bg-copper hover:bg-copper-deep text-white rounded-xl py-3 font-bold shadow-lg shadow-copper/15 transition"
                        >
                          Submit Response
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 4: EMAILS */}
          {activeTab === "emails" && (
            <div className="space-y-6 animate-in fade-in duration-300">
              {/* Inquiries list */}
              <div className="bg-gradient-to-br from-[#18100b]/80 to-[#120804]/90 backdrop-blur-md rounded-2xl border border-white/[0.05] shadow-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-white/[0.02] border-b border-white/[0.05] text-[10px] font-black uppercase tracking-wider text-white/40">
                        <th className="p-4 pl-6">Sender Details</th>
                        <th className="p-4">Requested Service</th>
                        <th className="p-4">Message Body</th>
                        <th className="p-4">Sent At</th>
                        <th className="p-4 pr-6 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/[0.03] text-xs">
                      {webEmails.length === 0 ? (
                        <tr>
                          <td colSpan={5} className="text-center p-12 text-white/30">
                            No contact form submissions recorded yet.
                          </td>
                        </tr>
                      ) : (
                        webEmails.map((email) => (
                          <tr key={email.id} className="hover:bg-white/[0.01] transition-colors duration-200">
                            <td className="p-4 pl-6">
                              <div className="font-bold text-white">{email.name}</div>
                              <div className="text-[10px] text-white/40 mt-0.5">{email.email} · {email.phone}</div>
                            </td>
                            <td className="p-4 font-semibold text-white/80 truncate max-w-[120px]">
                              {email.service || "General Inquiry"}
                            </td>
                            <td className="p-4 text-white/60 font-medium leading-relaxed max-w-sm truncate">
                              {email.message}
                            </td>
                            <td className="p-4 text-white/40 font-medium whitespace-nowrap">
                              {new Date(email.createdAt).toLocaleString()}
                            </td>
                            <td className="p-4 pr-6 text-right space-x-1 whitespace-nowrap">
                              <button
                                onClick={() => triggerConfirm({
                                  title: "Read Submission",
                                  message: `Message from ${email.name}:\n\n"${email.message}"`,
                                  confirmText: "Okay",
                                  onConfirm: () => {}
                                })}
                                className="p-2 bg-white/5 hover:bg-copper/20 hover:text-white border border-white/5 hover:border-copper/25 rounded-lg text-white/70 transition inline-flex items-center"
                              >
                                <Eye className="w-3.5 h-3.5" />
                              </button>
                              <button
                                onClick={() => handleDeleteEmail(email.id)}
                                className="p-2 bg-rose-500/10 hover:bg-rose-500/25 border border-rose-500/20 rounded-lg text-rose-400 transition inline-flex items-center"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: CHAT */}
          {activeTab === "chat" && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-[520px] items-stretch animate-in fade-in duration-300">
              {/* Sidebar list */}
              <div className="lg:col-span-4 bg-gradient-to-br from-[#18100b]/80 to-[#120804]/90 backdrop-blur-md rounded-2xl border border-white/[0.05] shadow-xl overflow-hidden flex flex-col">
                <div className="p-4 border-b border-white/[0.05] bg-white/[0.01]">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-white font-serif">Active Sessions</h4>
                </div>
                <div className="flex-1 overflow-y-auto divide-y divide-white/[0.03]">
                  {chatSessions.map((session) => {
                    const initials = session.clientName.split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2);
                    return (
                      <button
                        key={session.id}
                        onClick={() => handleSelectChat(session.id)}
                        className={`w-full text-left p-4 flex items-center justify-between transition-colors duration-200 ${
                          activeSessionId === session.id ? "bg-copper/10 border-l-4 border-copper" : "hover:bg-white/[0.01]"
                        }`}
                      >
                        <div className="flex items-center gap-3 truncate pr-2">
                          <div className="w-8 h-8 rounded-full bg-white/[0.05] border border-white/10 flex items-center justify-center text-xs font-black text-white shrink-0">
                            {initials}
                          </div>
                          <div className="truncate">
                            <div className="font-bold text-xs text-white flex items-center gap-1.5">
                              {session.clientName}
                              {session.unread && (
                                <span className="w-1.5 h-1.5 bg-rose-500 rounded-full shrink-0 animate-pulse" />
                              )}
                            </div>
                            <p className="text-[10px] text-white/40 mt-1 truncate">{session.lastMessage}</p>
                          </div>
                        </div>
                        <span className="text-[9px] text-white/30 shrink-0 font-medium font-sans">
                          {formatChatTime(session.lastMessageTime)}
                        </span>
                      </button>
                    );
                  })}
                  {chatSessions.length === 0 && (
                    <div className="text-center py-12 text-white/30 text-xs">
                      No active chat sessions found.
                    </div>
                  )}
                </div>
              </div>

              {/* Conversation Window */}
              <div className="lg:col-span-8 bg-gradient-to-br from-[#18100b]/80 to-[#120804]/90 backdrop-blur-md rounded-2xl border border-white/[0.05] shadow-xl overflow-hidden flex flex-col h-full">
                {activeChatSession ? (
                  <>
                    {/* Active Header */}
                    <div className="p-4 border-b border-white/[0.05] flex items-center justify-between bg-white/[0.01]">
                      <div>
                        <h4 className="font-bold text-xs text-white font-serif leading-none">{activeChatSession.clientName}</h4>
                        <p className="text-[9px] text-white/40 font-medium leading-none mt-1.5">
                          Wesley Chapel, FL · <span className="text-copper">Chrome · Mobile Device</span>
                        </p>
                      </div>
                    </div>

                    {/* Active Messages */}
                    <div className="flex-1 p-4 overflow-y-auto bg-white/[0.01] space-y-4">
                      {activeChatSession.messages.map((msg) => (
                        <div
                          key={msg.id}
                          className={`flex gap-2 max-w-[80%] ${
                            msg.sender === "admin" ? "ml-auto flex-row-reverse" : "mr-auto"
                          }`}
                        >
                          <div
                            className={`p-3.5 rounded-2xl text-xs leading-relaxed ${
                              msg.sender === "admin"
                                ? "bg-copper text-white rounded-tr-none shadow-md"
                                : "bg-[#1d1410] text-white/95 border border-white/5 rounded-tl-none shadow-md"
                            }`}
                          >
                            <p>{msg.text}</p>
                            <span className={`text-[8px] mt-1.5 block text-right font-medium font-sans ${
                              msg.sender === "admin" ? "text-white/60" : "text-white/30"
                            }`}>
                              {formatChatTime(msg.timestamp)}
                            </span>
                          </div>
                        </div>
                      ))}
                      <div ref={chatEndRef} />
                    </div>

                    {/* Active Input Reply */}
                    <form onSubmit={handleSendChatReply} className="p-3 border-t border-white/[0.05] flex items-center gap-2 bg-[#120804]">
                      <input
                        type="text"
                        placeholder="Type admin response..."
                        value={adminReplyText}
                        onChange={(e) => setAdminReplyText(e.target.value)}
                        className="flex-1 bg-white/[0.02] border border-white/10 focus:border-copper focus:ring-0 focus:outline-none rounded-xl px-4 py-3 text-xs font-medium text-white placeholder-white/20"
                      />
                      <button
                        type="submit"
                        disabled={!adminReplyText.trim()}
                        className="bg-copper hover:bg-copper-deep text-white w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-lg shadow-copper/20 transition duration-300 disabled:opacity-50"
                      >
                        <Send className="w-3.5 h-3.5" />
                      </button>
                    </form>
                  </>
                ) : (
                  <div className="flex-1 flex flex-col items-center justify-center text-white/30 text-xs gap-2">
                    <MessageCircle className="w-8 h-8 text-white/10 animate-pulse" />
                    Select a chat session from the list to respond in real-time.
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 6: GALLERY */}
          {activeTab === "gallery" && (
            <div className="space-y-6 animate-in fade-in duration-300">
              {/* Gallery Upload bar */}
              <div className="flex items-center justify-between bg-gradient-to-br from-[#18100b]/80 to-[#120804]/90 backdrop-blur-md p-4 rounded-2xl border border-white/[0.05] shadow-xl">
                <div>
                  <h3 className="text-sm font-bold text-white font-serif leading-none">Photo Gallery manager</h3>
                  <p className="text-[10px] text-white/40 font-medium leading-none mt-1">Manage files showing on public Gallery sections</p>
                </div>

                <label className="bg-copper hover:bg-copper-deep text-white px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-1.5 shrink-0 shadow-md shadow-copper/20 hover:-translate-y-0.5 active:translate-y-0 transition cursor-pointer">
                  <Upload className="w-4 h-4" /> Add Photo
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleUploadGallery}
                    className="hidden"
                  />
                </label>
              </div>

              {/* Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {galleryPhotos.map((photo) => (
                  <div key={photo.id} className="relative group aspect-square rounded-2xl overflow-hidden border border-white/[0.05] shadow bg-[#120804]">
                    <img
                      src={photo.url}
                      alt="Gallery item"
                      className="w-full h-full object-cover cursor-zoom-in group-hover:scale-105 transition-transform duration-500"
                      onClick={() => setLightboxPhoto(photo.url)}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-3">
                      <span className="text-[8px] text-white/60 font-medium">
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
                {galleryPhotos.length === 0 && (
                  <div className="col-span-full text-center py-12 bg-[#120804]/50 border border-dashed border-white/10 rounded-2xl text-white/30 text-xs">
                    No gallery photos found. Click 'Add Photo' to upload.
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 7: SETTINGS */}
          {activeTab === "settings" && (
            <div className="space-y-6 max-w-xl mx-auto animate-in fade-in duration-300">
              <div className="bg-[#120804]/50 backdrop-blur-md p-6 rounded-2xl border border-white/5 shadow-xl space-y-4">
                <div>
                  <h3 className="text-sm font-bold text-white font-serif leading-none">Security Settings</h3>
                  <p className="text-[10px] text-white/40 font-medium leading-none mt-1">Change your portal login credentials</p>
                </div>

                <form onSubmit={handleUpdateProfile} className="space-y-4 text-xs text-left">
                  <div className="space-y-1.5">
                    <label className="text-[10px] text-white/40 font-bold uppercase tracking-wider block">Username</label>
                    <input
                      type="text"
                      required
                      value={updateUsername}
                      onChange={(e) => setUpdateUsername(e.target.value)}
                      className="w-full bg-[#120804] border border-white/10 rounded-xl py-2.5 px-4 focus:outline-none focus:ring-1 focus:ring-copper focus:border-copper text-white"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] text-white/40 font-bold uppercase tracking-wider block">New Password</label>
                    <input
                      type="password"
                      placeholder="Enter new password (optional)"
                      value={updatePassword}
                      onChange={(e) => setUpdatePassword(e.target.value)}
                      className="w-full bg-[#120804] border border-white/10 rounded-xl py-2.5 px-4 focus:outline-none focus:ring-1 focus:ring-copper focus:border-copper text-white"
                    />
                  </div>

                  <button
                    type="submit"
                    className="bg-copper hover:bg-copper-deep text-white font-bold py-3 px-6 rounded-xl transition shadow-lg shadow-copper/20 cursor-pointer animate-in fade-in"
                  >
                    Update Credentials
                  </button>
                </form>
              </div>
            </div>
          )}

          {/* TAB 8: SECURITY */}
          {activeTab === "security" && currentUser?.role === "admin" && (
            <div className="space-y-6 max-w-3xl mx-auto animate-in fade-in duration-300">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                {/* Account Creator */}
                <div className="bg-[#120804]/50 backdrop-blur-md p-6 rounded-2xl border border-white/5 shadow-xl space-y-4">
                  <div>
                    <h3 className="text-sm font-bold text-white font-serif leading-none">Register New Account</h3>
                    <p className="text-[10px] text-white/40 font-medium leading-none mt-1">Add sub-accounts for other staff/members</p>
                  </div>

                  <form onSubmit={handleCreateUser} className="space-y-4 text-xs text-left">
                    <div className="space-y-1.5">
                      <label className="text-[10px] text-white/40 font-bold uppercase tracking-wider block">Username</label>
                      <input
                        type="text"
                        required
                        value={addUsername}
                        onChange={(e) => setAddUsername(e.target.value)}
                        placeholder="e.g. jiten"
                        className="w-full bg-[#120804] border border-white/10 rounded-xl py-2.5 px-4 focus:outline-none focus:ring-1 focus:ring-copper focus:border-copper text-white"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] text-white/40 font-bold uppercase tracking-wider block">Password</label>
                      <input
                        type="password"
                        required
                        value={addPassword}
                        onChange={(e) => setAddPassword(e.target.value)}
                        placeholder="••••••••"
                        className="w-full bg-[#120804] border border-white/10 rounded-xl py-2.5 px-4 focus:outline-none focus:ring-1 focus:ring-copper focus:border-copper text-white"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] text-white/40 font-bold uppercase tracking-wider block">User Role Permission</label>
                      <select
                        value={addRole}
                        onChange={(e) => setAddRole(e.target.value as any)}
                        className="w-full bg-[#120804] text-white border border-white/10 rounded-xl py-2.5 px-4 focus:outline-none focus:ring-1 focus:ring-copper focus:border-copper"
                      >
                        <option value="viewer">Viewer (Read-only)</option>
                        <option value="editor">Editor (CRUD access)</option>
                        <option value="admin">Administrator (Full permissions)</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="bg-copper hover:bg-copper-deep text-white font-bold py-3 px-6 rounded-xl transition shadow-lg shadow-copper/25 cursor-pointer animate-in"
                    >
                      Add Portal Account
                    </button>
                  </form>
                </div>

                {/* Accounts List */}
                <div className="bg-[#120804]/50 backdrop-blur-md p-6 rounded-2xl border border-white/5 shadow-xl space-y-4">
                  <div>
                    <h3 className="text-sm font-bold text-white font-serif leading-none">Registered Accounts</h3>
                    <p className="text-[10px] text-white/40 font-medium leading-none mt-1">Management of portal users list</p>
                  </div>

                  <div className="divide-y divide-white/5 text-xs text-left">
                    {portalUsers.map((user) => (
                      <div key={user.id} className="py-3 flex items-center justify-between">
                        <div>
                          <div className="font-bold text-white">{user.username}</div>
                          <div className="text-[9px] text-copper uppercase font-black tracking-wider mt-0.5">{user.role}</div>
                        </div>
                        <button
                          onClick={() => handleDeleteUser(user.id, user.username)}
                          className="p-1.5 bg-rose-500/10 hover:bg-rose-500/25 border border-rose-500/20 rounded-lg text-rose-400 transition"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}
