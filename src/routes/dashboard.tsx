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
  ChevronDown
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
  Legend,
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
      { title: "Revitalize Office — Admin Dashboard" },
      { name: "description", content: "Internal business management console for Revitalize Group." }
    ],
  }),
  component: DashboardPage,
});

// Premium light palette colours
const COLORS = ["#3B82F6", "#10B981", "#F59E0B", "#8B5CF6", "#EF4444", "#EC4899"];

// Premium Light Custom Tooltip
const CustomChartTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-slate-150 rounded-xl p-3 shadow-xl animate-in fade-in duration-150">
        <p className="text-[10px] uppercase font-bold tracking-wider text-slate-400">{label}</p>
        {payload.map((p: any, idx: number) => (
          <p key={idx} className="text-xs font-bold text-slate-800 mt-1">
            {p.name}: <span className="text-copper font-sans">{typeof p.value === "number" ? `$${p.value.toLocaleString()}` : p.value}</span>
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

  // Accordion integrations trigger
  const [isServicesExpanded, setIsServicesExpanded] = useState(true);

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
      <div className="min-h-screen flex items-center justify-center bg-slate-50 text-slate-800 font-sans">
        <div className="text-center">
          <div className="h-8 w-8 rounded-full border-2 border-copper border-t-transparent animate-spin mx-auto mb-4"></div>
          <p className="text-xs uppercase font-bold tracking-widest text-slate-400">Loading Workspace...</p>
        </div>
      </div>
    );
  }

  // Calculate targets progress
  const wonCount = leads.filter(l => l.status === "won").length;
  const targetCount = 15;
  const targetPercent = Math.min(Math.round((wonCount / targetCount) * 100), 100);

  return (
    <div className="min-h-screen bg-[#F5F6F8] flex font-sans text-slate-800 overflow-hidden antialiased">
      
      {/* Confirmation Modal */}
      {confirmConfig && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full shadow-2xl border border-slate-100 animate-in zoom-in-95 duration-200">
            <h3 className="text-lg font-bold text-slate-900 mb-2 font-serif">{confirmConfig.title}</h3>
            <p className="text-sm text-slate-500 leading-relaxed mb-6">{confirmConfig.message}</p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setConfirmConfig(null)}
                className="px-4 py-2 rounded-xl text-xs font-bold border border-slate-200 text-slate-600 hover:bg-slate-50 transition"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  confirmConfig.onConfirm();
                  setConfirmConfig(null);
                }}
                className="px-4 py-2 rounded-xl text-xs font-bold bg-copper hover:bg-copper-deep text-white shadow-lg transition"
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
          className="fixed inset-0 z-[99999] bg-black/80 flex items-center justify-center p-4 cursor-pointer animate-in fade-in duration-200"
        >
          <img src={lightboxPhoto} alt="Lightbox Enlarged" className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl" />
          <button className="absolute top-6 right-6 text-white hover:text-gray-300 p-2">
            <X className="w-6 h-6" />
          </button>
        </div>
      )}

      {/* Left Sidebar Navigation (Connexio Aesthetic adaptation) */}
      <aside className="w-64 sm:w-72 shrink-0 bg-white border-r border-slate-200 flex flex-col justify-between p-6 sticky top-0 h-screen z-45">
        <div className="space-y-6 overflow-y-auto pr-1 scrollbar-none flex-1 flex flex-col">
          {/* Logo & Branding */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-copper/10 rounded-xl flex items-center justify-center text-copper font-serif font-black shadow-sm">
              R
            </div>
            <div>
              <h1 className="font-bold text-sm text-slate-900 tracking-tight leading-none">Revitalize</h1>
              <p className="text-[10px] text-slate-400 font-bold leading-none mt-1 uppercase tracking-wider">Group Office</p>
            </div>
          </div>

          {/* User Profile Card (Under Logo as in image) */}
          <div className="bg-[#F8F9FA] rounded-2xl p-3 border border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-2.5 min-w-0">
              <div className="w-8 h-8 rounded-full bg-copper text-white flex items-center justify-center text-xs font-black shadow-inner shrink-0">
                {currentUser?.username.charAt(0).toUpperCase()}
              </div>
              <div className="truncate">
                <p className="text-xs font-bold text-slate-900 leading-none truncate">{currentUser?.username}</p>
                <p className="text-[9px] text-slate-400 leading-none mt-1 truncate">admin@revitalizegroup.com</p>
              </div>
            </div>
            <button onClick={() => setActiveTab("settings")} className="p-1 text-slate-400 hover:text-slate-600 transition">
              <ChevronRight className="w-4 h-4 rotate-90" />
            </button>
          </div>

          {/* Navigation Links list */}
          <div className="space-y-6 flex-1">
            <div className="space-y-1">
              <p className="text-[9px] font-black uppercase text-slate-400 tracking-widest pl-2 mb-2">Main Menu</p>
              {[
                { id: "overview", label: "Dashboard", icon: TrendingUp },
                { id: "leads", label: "Leads Manager", icon: Briefcase },
                { id: "reviews", label: "Reviews Board", icon: Star },
                { id: "emails", label: "Web Inquiries", icon: Mail },
                { id: "chat", label: "Live Chats", icon: MessageCircle, badge: chatSessions.some(s => s.unread) }
              ].map((tab) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`w-full px-3 py-2.5 rounded-xl text-xs font-bold flex items-center justify-between transition-all duration-200 ${
                      isActive 
                        ? "bg-[#F3F4F6] text-slate-900" 
                        : "text-slate-500 hover:bg-slate-50 hover:text-slate-800"
                    }`}
                  >
                    <span className="flex items-center gap-2.5">
                      <Icon className={`w-4 h-4 ${isActive ? "text-copper" : "text-slate-400"}`} />
                      {tab.label}
                    </span>
                    {tab.badge && (
                      <span className="w-1.5 h-1.5 bg-rose-500 rounded-full shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Integrations collapsible tree as in image */}
            <div className="space-y-1.5">
              <button 
                onClick={() => setIsServicesExpanded(!isServicesExpanded)}
                className="w-full flex items-center justify-between text-slate-500 hover:text-slate-850 px-2 py-1"
              >
                <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">Services Mix</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isServicesExpanded ? "" : "-rotate-90"}`} />
              </button>
              {isServicesExpanded && (
                <div className="pl-3.5 border-l border-slate-100 space-y-1 mt-1 animate-in fade-in duration-200">
                  <div className="text-[11px] text-slate-600 flex items-center gap-2 py-1 px-2 rounded hover:bg-slate-50 cursor-pointer">
                    <span className="w-1.5 h-1.5 rounded-full bg-copper" /> Buy & Sell Properties
                  </div>
                  <div className="text-[11px] text-slate-600 flex items-center gap-2 py-1 px-2 rounded hover:bg-slate-50 cursor-pointer">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" /> Home Renovations
                  </div>
                  <div className="text-[11px] text-slate-600 flex items-center gap-2 py-1 px-2 rounded hover:bg-slate-50 cursor-pointer">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400" /> Kitchen Remodeling
                  </div>
                  <div className="text-[11px] text-slate-600 flex items-center gap-2 py-1 px-2 rounded hover:bg-slate-50 cursor-pointer">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-400" /> Bathroom Transformations
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Target card at the bottom of sidebar matching the image */}
          <div className="bg-[#FAF9F5] border border-copper/10 rounded-2xl p-4 space-y-3 shadow-sm mt-auto shrink-0 text-left">
            <div>
              <h4 className="text-xs font-black text-slate-800 flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5 text-copper" /> Target Inflow progress
              </h4>
              <p className="text-[10px] text-slate-400 mt-1">Won leads against monthly target</p>
            </div>
            
            <div className="space-y-1.5">
              <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                <div className="bg-copper h-full rounded-full transition-all duration-500" style={{ width: `${targetPercent}%` }} />
              </div>
              <div className="flex justify-between text-[9px] text-slate-500 font-bold uppercase tracking-wider">
                <span>{targetPercent}% Achieved</span>
                <span>{wonCount}/{targetCount} Leads</span>
              </div>
            </div>

            <button 
              onClick={() => setActiveTab("leads")}
              className="w-full bg-copper hover:bg-copper-deep text-white py-2 rounded-xl text-[10px] font-black uppercase tracking-wider transition duration-200"
            >
              Add New Leads
            </button>
          </div>
        </div>

        {/* Sidebar bottom Other Menu */}
        <div className="border-t border-slate-100 pt-4 mt-4 space-y-2">
          <p className="text-[9px] font-black uppercase text-slate-400 tracking-widest pl-2">Other</p>
          <button
            onClick={() => setActiveTab("settings")}
            className="w-full px-3 py-2.5 rounded-xl text-xs font-bold text-slate-500 hover:bg-slate-50 hover:text-slate-800 flex items-center gap-2.5 transition"
          >
            <Settings className="w-4 h-4 text-slate-400" />
            <span>Settings Panel</span>
          </button>
          {currentUser?.role === "admin" && (
            <button
              onClick={() => setActiveTab("security")}
              className="w-full px-3 py-2.5 rounded-xl text-xs font-bold text-slate-500 hover:bg-slate-50 hover:text-slate-800 flex items-center gap-2.5 transition"
            >
              <Sliders className="w-4 h-4 text-slate-400" />
              <span>Portal Security</span>
            </button>
          )}
          <button
            onClick={handleLogout}
            className="w-full px-3 py-2.5 rounded-xl text-xs font-bold text-rose-600 hover:bg-rose-50 flex items-center gap-2.5 transition cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Main Workspace Column */}
      <div className="flex-1 min-h-screen overflow-y-auto flex flex-col relative bg-[#F8F9FB] z-10">
        
        {/* Workspace Top Header (Connexio aesthetic: Search + Notification icons) */}
        <header className="bg-white border-b border-slate-200/80 px-8 py-4 flex items-center justify-between sticky top-0 z-40">
          <div>
            <h1 className="font-serif font-black text-xl text-slate-900 leading-none">Dashboard</h1>
            <p className="text-[11px] text-slate-400 font-medium leading-none mt-1.5">Monitor and control your lead pipelines & feedback</p>
          </div>

          <div className="flex items-center gap-4">
            {/* Search Anythings bar */}
            <div className="relative hidden md:block">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search Anythings..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-64 bg-slate-50 border border-slate-200/80 hover:bg-slate-100/50 rounded-xl py-2 pl-10 pr-4 text-xs focus:bg-white focus:border-copper focus:outline-none transition duration-200"
              />
            </div>

            {/* Inquiries chat icon */}
            <button 
              onClick={() => setActiveTab("chat")}
              className="w-9 h-9 rounded-xl border border-slate-200/80 hover:bg-slate-50 flex items-center justify-center text-slate-600 transition relative"
            >
              <MessageSquare className="w-4 h-4" />
              {chatSessions.some(s => s.unread) && (
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-rose-500 rounded-full animate-pulse" />
              )}
            </button>

            {/* Notification alert icon */}
            <button 
              onClick={() => setActiveTab("emails")}
              className="w-9 h-9 rounded-xl border border-slate-200/80 hover:bg-slate-50 flex items-center justify-center text-slate-600 transition relative"
            >
              <Bell className="w-4 h-4" />
              {webEmails.length > 0 && (
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-copper rounded-full" />
              )}
            </button>
          </div>
        </header>

        {/* Workspace Body */}
        <main className="flex-1 p-8 max-w-7xl w-full mx-auto space-y-8">
          
          {/* TAB 1: OVERVIEW */}
          {activeTab === "overview" && (
            <div className="space-y-6 animate-in fade-in duration-300">
              
              {/* Metric Cards Row matching layout and style in image */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { title: "Total Leads Logged", val: analytics.totalLeads, desc: "+12% from last month", isTrendUp: true, icon: Users },
                  { title: "Active Pipeline", val: analytics.activeCount, desc: "98.5% Response Rate", isTrendUp: true, icon: Briefcase },
                  { title: "Estimated Revenue", val: `$${(analytics.totalValue / 1000).toFixed(0)}k`, desc: "78% of target goal", isTrendUp: false, icon: DollarSign },
                  { title: "Web Inquiries", val: webEmails.length, desc: `${webEmails.length > 0 ? `${webEmails.length} Action needed` : "Inbox clear"}`, isAlert: webEmails.length > 0, icon: Mail }
                ].map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div 
                      key={idx} 
                      className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between hover:shadow-md hover:scale-[1.01] transition-all duration-300 text-left"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{item.title}</span>
                        <div className="w-8 h-8 rounded-lg bg-copper/5 flex items-center justify-center text-copper">
                          <Icon className="w-4 h-4" />
                        </div>
                      </div>
                      <div className="mt-4 flex items-baseline justify-between">
                        <span className="text-3xl font-bold text-slate-900 tracking-tight">{item.val}</span>
                        <span className={`text-[9px] font-bold flex items-center gap-0.5 ${
                          item.isAlert ? "text-rose-500 bg-rose-50 border border-rose-100 px-1.5 py-0.5 rounded-md" :
                          item.isTrendUp ? "text-emerald-500" : "text-amber-500"
                        }`}>
                          {item.isTrendUp && <ArrowUpRight className="w-3 h-3" />}
                          {item.desc}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Upper Charts Grid matching image */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                
                {/* Chart 1: Revenue & Inflows Monthly analytics */}
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-left">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-xs font-black uppercase tracking-wider text-slate-400">Services Revenue Analytics</h3>
                      <p className="text-[11px] text-slate-400 mt-1">Monthly estimated project values won</p>
                    </div>
                    <select className="bg-slate-50 border border-slate-200 text-slate-600 rounded-lg px-2.5 py-1 text-[10px] font-bold focus:outline-none">
                      <option>Last 1 Years</option>
                      <option>Last 6 Months</option>
                    </select>
                  </div>
                  <div className="h-72">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={analytics.timelineChart}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                        <XAxis dataKey="name" stroke="#A0AEC0" fontSize={10} tickLine={false} />
                        <YAxis stroke="#A0AEC0" fontSize={11} tickLine={false} />
                        <RechartsTooltip content={<CustomChartTooltip />} />
                        <Bar dataKey="revenue" fill="#D69873" radius={[4, 4, 0, 0]} name="Value ($)" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Chart 2: Daily Lead Timeline activity */}
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-left">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-xs font-black uppercase tracking-wider text-slate-400">Lead Inflow Timeline</h3>
                      <p className="text-[11px] text-slate-400 mt-1">Activity hourly leads volume received</p>
                    </div>
                    <select className="bg-slate-50 border border-slate-200 text-slate-600 rounded-lg px-2.5 py-1 text-[10px] font-bold focus:outline-none">
                      <option>Last 24 Hours</option>
                      <option>Last 7 Days</option>
                    </select>
                  </div>
                  <div className="h-72">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={analytics.timelineChart}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                        <XAxis dataKey="name" stroke="#A0AEC0" fontSize={10} tickLine={false} />
                        <YAxis stroke="#A0AEC0" fontSize={11} tickLine={false} />
                        <RechartsTooltip content={<CustomChartTooltip />} />
                        <Line type="monotone" dataKey="revenue" stroke="#3B82F6" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} name="Leads Value ($)" />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>

              {/* Lower Section Charts & Mix Distribution */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                
                {/* Double Line/Area Project Values */}
                <div className="lg:col-span-8 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-left">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-xs font-black uppercase tracking-wider text-slate-400">Residential vs Real Estate mix</h3>
                      <p className="text-[11px] text-slate-400 mt-1">Historical performance of renovation projects vs listings</p>
                    </div>
                    <select className="bg-slate-50 border border-slate-200 text-slate-600 rounded-lg px-2.5 py-1 text-[10px] font-bold focus:outline-none">
                      <option>Last 24 Hours</option>
                      <option>Last 30 Days</option>
                    </select>
                  </div>
                  <div className="h-72">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={analytics.timelineChart}>
                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
                        <XAxis dataKey="name" stroke="#A0AEC0" fontSize={10} tickLine={false} />
                        <YAxis stroke="#A0AEC0" fontSize={11} tickLine={false} />
                        <RechartsTooltip content={<CustomChartTooltip />} />
                        <Area type="monotone" dataKey="revenue" stackId="1" stroke="#D69873" fill="#D69873" fillOpacity={0.1} name="Renovation" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Device distribution styled indicators */}
                <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-left flex flex-col justify-between">
                  <div>
                    <h3 className="text-xs font-black uppercase tracking-wider text-slate-400">Leads Mix Share</h3>
                    <p className="text-[11px] text-slate-400 mt-1">Breakdown of incoming inquiries category split</p>
                  </div>

                  <div className="py-4 space-y-4">
                    <div className="flex justify-between items-baseline">
                      <span className="text-2xl font-bold text-slate-800">{analytics.totalLeads}</span>
                      <span className="text-[10px] text-slate-400 uppercase font-black tracking-wider">Total mix</span>
                    </div>

                    <div className="space-y-3">
                      {[
                        { label: "Remodeling", pct: 60, val: Math.round(analytics.totalLeads * 0.6), color: "bg-blue-500" },
                        { label: "Real Estate", pct: 25, val: Math.round(analytics.totalLeads * 0.25), color: "bg-emerald-500" },
                        { label: "Auxiliary", pct: 15, val: Math.round(analytics.totalLeads * 0.15), color: "bg-amber-400" }
                      ].map((item, index) => (
                        <div key={index} className="space-y-1.5">
                          <div className="flex justify-between text-[11px] font-bold text-slate-600">
                            <span>{item.label}</span>
                            <span>{item.val} ({item.pct}%)</span>
                          </div>
                          <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                            <div className={`h-full ${item.color} rounded-full`} style={{ width: `${item.pct}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Table: Lead Status Logs */}
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden text-left">
                <div className="p-5 border-b border-slate-100 flex flex-col sm:flex-row gap-4 items-center justify-between">
                  <h4 className="font-serif font-black text-sm text-slate-900">Recent Pipeline Log</h4>
                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <div className="relative w-full sm:w-64">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-400" />
                      <input
                        type="text"
                        placeholder="Search leads..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200/80 rounded-xl py-1.5 pl-9 pr-3 text-xs focus:outline-none focus:bg-white focus:border-copper"
                      />
                    </div>
                    <button
                      onClick={() => setIsAddingLead(true)}
                      className="bg-copper hover:bg-copper-deep text-white px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap"
                    >
                      + Add Lead
                    </button>
                  </div>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50/55 border-b border-slate-100 text-[10px] font-black uppercase tracking-wider text-slate-400">
                        <th className="p-4 pl-6">Client Name</th>
                        <th className="p-4">Contact</th>
                        <th className="p-4">Project Area</th>
                        <th className="p-4">Category</th>
                        <th className="p-4">Status</th>
                        <th className="p-4 pr-6 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-xs">
                      {filteredLeads.slice(0, 5).map((lead) => (
                        <tr key={lead.id} className="hover:bg-slate-50/40 transition">
                          <td className="p-4 pl-6 font-bold text-slate-950">{lead.name}</td>
                          <td className="p-4 text-slate-500 font-medium">{lead.phone}</td>
                          <td className="p-4 text-slate-600 font-semibold">{lead.address.split(",").slice(-3, -2)[0]?.trim() || "Tampa"}</td>
                          <td className="p-4 font-semibold text-slate-700 capitalize">{lead.projectType.replace("-", " ")}</td>
                          <td className="p-4">
                            <span className={`px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider border ${
                              lead.status === "new" ? "bg-blue-50 text-blue-600 border-blue-150" :
                              lead.status === "won" ? "bg-emerald-50 text-emerald-600 border-emerald-150" :
                              "bg-amber-50 text-amber-600 border-amber-150"
                            }`}>
                              {lead.status}
                            </span>
                          </td>
                          <td className="p-4 pr-6 text-right space-x-1.5 whitespace-nowrap">
                            <button
                              onClick={() => handleEditLead(lead)}
                              className="p-1.5 hover:bg-slate-50 rounded-lg text-slate-400 hover:text-slate-700 transition"
                            >
                              <Edit2 className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => handleDeleteLead(lead.id, lead.name)}
                              className="p-1.5 hover:bg-rose-50 rounded-lg text-rose-500 transition"
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

          {/* TAB 2: LEADS */}
          {activeTab === "leads" && (
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="flex flex-col sm:flex-row gap-4 items-center justify-between bg-white p-4 rounded-2xl border border-slate-100 shadow-sm text-left">
                <div className="relative w-full sm:max-w-xs">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search leads by name, email..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:bg-white focus:border-copper focus:outline-none"
                  />
                </div>

                <div className="flex gap-2 w-full sm:w-auto">
                  <select
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                    className="bg-white border border-slate-200 text-slate-700 rounded-xl px-3 py-2 text-xs focus:outline-none w-1/2 sm:w-auto font-semibold"
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
                    className="bg-white border border-slate-200 text-slate-700 rounded-xl px-3 py-2 text-xs focus:outline-none w-1/2 sm:w-auto font-semibold"
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

              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden text-left">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-100 text-[10px] font-black uppercase tracking-wider text-slate-400">
                        <th className="p-4 pl-6">Client Name</th>
                        <th className="p-4">Contact Info</th>
                        <th className="p-4">City</th>
                        <th className="p-4">Service</th>
                        <th className="p-4">Estimated Value</th>
                        <th className="p-4">Status</th>
                        <th className="p-4 pr-6 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-xs">
                      {filteredLeads.map((lead) => (
                        <tr key={lead.id} className="hover:bg-slate-50/40 transition">
                          <td className="p-4 pl-6 font-bold text-slate-900">{lead.name}</td>
                          <td className="p-4 text-slate-500 font-medium">
                            <div>{lead.phone}</div>
                            <div className="text-[10px] text-slate-450 mt-0.5">{lead.email}</div>
                          </td>
                          <td className="p-4 text-slate-600 font-medium">
                            {lead.address.split(",").slice(-3, -2)[0]?.trim() || "Tampa"}
                          </td>
                          <td className="p-4 font-semibold text-slate-700">
                            <span className="capitalize">{lead.projectType.replace("-", " ")}</span>
                          </td>
                          <td className="p-4 font-bold text-slate-900">
                            ${lead.estimatedValue.toLocaleString()}
                          </td>
                          <td className="p-4">
                            <span className={`px-2.5 py-1 rounded-full text-[9px] font-black uppercase tracking-wider inline-block border ${
                              lead.status === "new" ? "bg-blue-50 text-blue-600 border-blue-150" :
                              lead.status === "won" ? "bg-emerald-50 text-emerald-600 border-emerald-150" :
                              "bg-amber-50 text-amber-600 border-amber-150"
                            }`}>
                              {lead.status.replace("_", " ")}
                            </span>
                          </td>
                          <td className="p-4 pr-6 text-right space-x-1 whitespace-nowrap">
                            <button
                              onClick={() => handleEditLead(lead)}
                              className="p-2 bg-slate-50 hover:bg-copper/10 hover:text-copper border border-slate-200 rounded-lg text-slate-500 transition inline-flex items-center"
                            >
                              <Edit2 className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => handleDeleteLead(lead.id, lead.name)}
                              className="p-2 bg-rose-50 hover:bg-rose-100 border border-rose-200 rounded-lg text-rose-600 transition inline-flex items-center"
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

              {/* Edit drawer rendering */}
              {isEditingLead && selectedLead && (
                <div className="fixed inset-0 z-50 flex justify-end bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
                  <div className="w-full max-w-lg bg-white h-full shadow-2xl p-6 overflow-y-auto flex flex-col justify-between border-l border-slate-100 animate-in slide-in-from-right duration-250">
                    <div className="space-y-6 text-left">
                      <div className="flex items-center justify-between border-b border-slate-150 pb-4">
                        <div>
                          <h3 className="text-lg font-bold text-slate-900 font-serif">{selectedLead.name}</h3>
                          <p className="text-[10px] text-copper font-bold uppercase tracking-wider mt-0.5">Lead Details Profile</p>
                        </div>
                        <button 
                          onClick={() => { setIsEditingLead(false); setSelectedLead(null); }}
                          className="p-1 rounded-full hover:bg-slate-100 transition"
                        >
                          <X className="w-5 h-5 text-slate-500" />
                        </button>
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-xs">
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
                        <div className="col-span-2 bg-slate-50 border border-slate-150 p-3 rounded-xl">
                          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wide block">Project Scope Description</span>
                          <p className="text-slate-700 font-medium leading-relaxed mt-1">{selectedLead.description}</p>
                        </div>
                      </div>

                      <div className="border-t border-slate-150 pt-4 space-y-4">
                        <h4 className="text-xs font-black uppercase tracking-wider text-slate-800 font-serif">Management Controls</h4>

                        <div className="space-y-1.5">
                          <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wide block">Pipeline Stage</label>
                          <select
                            value={editStatus}
                            onChange={(e) => setEditStatus(e.target.value as Lead["status"])}
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs focus:bg-white focus:border-copper focus:outline-none"
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
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs focus:bg-white focus:border-copper focus:outline-none"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wide block">Internal Project Notes</label>
                          <textarea
                            rows={3}
                            value={editNotes}
                            onChange={(e) => setEditNotes(e.target.value)}
                            placeholder="Add details about estimates..."
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-3 py-2.5 text-xs focus:bg-white focus:border-copper focus:outline-none"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-slate-200 pt-4 flex gap-3">
                      <button
                        onClick={() => { setIsEditingLead(false); setSelectedLead(null); }}
                        className="w-1/2 border border-slate-200 rounded-xl py-3 text-xs font-bold hover:bg-slate-50 transition"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={handleSaveLeadDetails}
                        className="w-1/2 bg-copper hover:bg-copper-deep text-white rounded-xl py-3 text-xs font-bold shadow transition"
                      >
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Add Custom Lead modal */}
              {isAddingLead && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm animate-in fade-in duration-200">
                  <div className="bg-white rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden border border-slate-100 animate-in zoom-in-95 duration-200">
                    <div className="bg-gradient-to-r from-copper to-[#975033] p-4 text-white flex items-center justify-between">
                      <h3 className="font-bold text-sm leading-tight font-serif">Create New Business Lead</h3>
                      <button 
                        onClick={() => setIsAddingLead(false)}
                        className="text-white/85 hover:text-white p-1 rounded-full"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    <form onSubmit={handleAddCustomLead} className="p-6 space-y-4 text-xs text-left">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1">
                          <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Client Name</label>
                          <input
                            type="text"
                            required
                            value={newLeadName}
                            onChange={(e) => setNewLeadName(e.target.value)}
                            placeholder="e.g. John Doe"
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3 focus:outline-none focus:bg-white focus:border-copper"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Estimated Value ($)</label>
                          <input
                            type="number"
                            value={newLeadVal}
                            onChange={(e) => setNewLeadVal(Number(e.target.value))}
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3 focus:outline-none focus:bg-white focus:border-copper"
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
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3 focus:outline-none focus:bg-white focus:border-copper"
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
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3 focus:outline-none focus:bg-white focus:border-copper"
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
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3 focus:outline-none focus:bg-white focus:border-copper"
                          />
                        </div>
                        <div className="col-span-2 space-y-1">
                          <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Project Type</label>
                          <select
                            value={newLeadType}
                            onChange={(e) => setNewLeadType(e.target.value)}
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3 focus:outline-none focus:bg-white focus:border-copper"
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
                          <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Project Scope Description</label>
                          <textarea
                            rows={3}
                            value={newLeadDesc}
                            onChange={(e) => setNewLeadDesc(e.target.value)}
                            placeholder="Describe the requested work details..."
                            className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-3 focus:outline-none focus:bg-white focus:border-copper"
                          />
                        </div>
                      </div>

                      <div className="flex gap-3 pt-2">
                        <button
                          type="button"
                          onClick={() => setIsAddingLead(false)}
                          className="w-1/2 border border-slate-250 rounded-xl py-3 font-bold hover:bg-slate-50 transition"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="w-1/2 bg-copper hover:bg-copper-deep text-white rounded-xl py-3 font-bold shadow transition"
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
            <div className="space-y-6 animate-in fade-in duration-200">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-left">
                {reviews.map((rev) => (
                  <div key={rev.id} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between space-y-4 hover:shadow-md transition">
                    <div>
                      <div className="flex items-start justify-between">
                        <div>
                          <h4 className="font-bold text-sm text-slate-900 font-serif leading-tight">{rev.title}</h4>
                          <p className="text-[10px] text-slate-400 font-semibold mt-0.5">{rev.author} · {rev.location}</p>
                        </div>
                        <div className="flex items-center gap-0.5 text-copper shrink-0">
                          {Array.from({ length: rev.rating }).map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-current" />
                          ))}
                        </div>
                      </div>

                      <p className="text-xs text-slate-600 leading-relaxed font-medium mt-3 italic">
                        "{rev.text}"
                      </p>

                      {rev.replyText && (
                        <div className="mt-3 bg-slate-50 border border-slate-100 rounded-xl p-3 text-xs leading-relaxed text-slate-700">
                          <span className="font-black text-[9px] uppercase tracking-wider text-copper block mb-0.5">Revitalize Response</span>
                          "{rev.replyText}"
                        </div>
                      )}
                    </div>

                    <div className="border-t border-slate-100 pt-4 flex items-center justify-between gap-2">
                      <button
                        onClick={() => handleToggleReviewFeatured(rev.id)}
                        className={`px-3 py-1.5 rounded-lg text-[10px] font-bold border transition ${
                          rev.featured
                            ? "bg-emerald-50 text-emerald-700 border-emerald-150 hover:bg-emerald-100"
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
                        className="px-3.5 py-1.5 bg-copper hover:bg-copper-deep text-white rounded-lg text-[10px] font-bold flex items-center gap-1 transition"
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
              <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden text-left">
                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="bg-slate-50 border-b border-slate-100 text-[10px] font-black uppercase tracking-wider text-slate-400">
                        <th className="p-4 pl-6">Sender Details</th>
                        <th className="p-4">Requested Service</th>
                        <th className="p-4">Message Body</th>
                        <th className="p-4">Sent At</th>
                        <th className="p-4 pr-6 text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-xs">
                      {webEmails.map((email) => (
                        <tr key={email.id} className="hover:bg-slate-50/40 transition">
                          <td className="p-4 pl-6">
                            <div className="font-bold text-slate-900">{email.name}</div>
                            <div className="text-[10px] text-slate-400 mt-0.5">{email.email} · {email.phone}</div>
                          </td>
                          <td className="p-4 font-semibold text-slate-700 truncate max-w-[120px]">
                            {email.service || "General Inquiry"}
                          </td>
                          <td className="p-4 text-slate-600 font-medium leading-relaxed max-w-sm truncate">
                            {email.message}
                          </td>
                          <td className="p-4 text-slate-400 font-medium whitespace-nowrap">
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
                              className="p-2 bg-slate-50 hover:bg-slate-100 rounded-lg text-slate-500 transition inline-flex items-center"
                            >
                              <Eye className="w-3.5 h-3.5" />
                            </button>
                            <button
                              onClick={() => handleDeleteEmail(email.id)}
                              className="p-2 bg-rose-50 hover:bg-rose-100 border border-rose-200 rounded-lg text-rose-600 transition inline-flex items-center"
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
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-[500px] items-stretch animate-in fade-in duration-200 text-left">
              <div className="lg:col-span-4 bg-white rounded-2xl border border-slate-150 shadow-sm overflow-hidden flex flex-col">
                <div className="p-4 border-b border-slate-100 bg-slate-50/50">
                  <h4 className="font-bold text-xs uppercase tracking-wider text-slate-500">Active Sessions</h4>
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
                        <div className="font-bold text-xs text-slate-800 flex items-center gap-1.5">
                          {session.clientName}
                          {session.unread && (
                            <span className="w-1.5 h-1.5 bg-rose-500 rounded-full shrink-0" />
                          )}
                        </div>
                        <p className="text-[10px] text-slate-400 mt-1 truncate">{session.lastMessage}</p>
                      </div>
                      <span className="text-[9px] text-slate-400 shrink-0 font-medium">
                        {formatChatTime(session.lastMessageTime)}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-150 shadow-sm overflow-hidden flex flex-col h-full">
                {activeChatSession ? (
                  <>
                    <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/50">
                      <div>
                        <h4 className="font-bold text-xs text-slate-900 font-serif leading-none">{activeChatSession.clientName}</h4>
                        <p className="text-[10px] text-slate-400 font-medium leading-none mt-1">{activeChatSession.clientCity} · Visitor Session</p>
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
                            className={`p-3.5 rounded-2xl text-xs leading-relaxed ${
                              msg.sender === "admin"
                                ? "bg-copper text-white rounded-tr-none shadow"
                                : "bg-white text-slate-800 border border-slate-150 rounded-tl-none shadow"
                            }`}
                          >
                            <p>{msg.text}</p>
                            <span className={`text-[8px] mt-1 block text-right font-medium ${
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
                        className="flex-1 bg-slate-50 border border-slate-200 focus:bg-white focus:border-copper focus:ring-0 focus:outline-none rounded-xl px-4 py-2.5 text-xs text-slate-800"
                      />
                      <button
                        type="submit"
                        disabled={!adminReplyText.trim()}
                        className="bg-copper hover:bg-copper-deep text-white w-9 h-9 rounded-xl flex items-center justify-center shrink-0 shadow transition"
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
              <div className="flex items-center justify-between bg-white p-4 rounded-2xl border border-slate-100 shadow-sm text-left">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 font-serif leading-none">Photo Gallery manager</h3>
                  <p className="text-[10px] text-slate-400 font-medium leading-none mt-1">Manage files showing on public Gallery sections</p>
                </div>

                <label className="bg-copper hover:bg-copper-deep text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 shrink-0 shadow-md transition cursor-pointer">
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
                  <div key={photo.id} className="relative group aspect-square rounded-2xl overflow-hidden border border-slate-150 shadow bg-slate-50">
                    <img
                      src={photo.url}
                      alt="Gallery item"
                      className="w-full h-full object-cover cursor-zoom-in"
                      onClick={() => setLightboxPhoto(photo.url)}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-200 flex items-end justify-between p-3">
                      <span className="text-[8px] text-white/80 font-medium">
                        Uploaded {new Date(photo.uploadedAt).toLocaleDateString()}
                      </span>
                      <button
                        onClick={() => handleDeleteGallery(photo.id)}
                        className="p-1.5 bg-rose-650 hover:bg-rose-700 text-white rounded-lg transition"
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
            <div className="space-y-6 max-w-xl mx-auto animate-in fade-in duration-200 text-left">
              <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4">
                <div>
                  <h3 className="text-sm font-bold text-slate-900 font-serif leading-none">Security Settings</h3>
                  <p className="text-[10px] text-slate-400 font-medium leading-none mt-1">Change your portal login credentials</p>
                </div>

                <form onSubmit={handleUpdateProfile} className="space-y-4 text-xs">
                  <div className="space-y-1.5">
                    <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Username</label>
                    <input
                      type="text"
                      required
                      value={updateUsername}
                      onChange={(e) => setUpdateUsername(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-4 focus:outline-none focus:bg-white focus:border-copper"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">New Password</label>
                    <input
                      type="password"
                      placeholder="Enter new password (optional)"
                      value={updatePassword}
                      onChange={(e) => setUpdatePassword(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-4 focus:outline-none focus:bg-white focus:border-copper"
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
          {activeTab === "security" && currentUser?.role === "admin" && (
            <div className="space-y-6 max-w-3xl mx-auto animate-in fade-in duration-200 text-left">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 font-serif leading-none">Register New Account</h3>
                    <p className="text-[10px] text-slate-400 font-medium leading-none mt-1">Add sub-accounts for other staff/members</p>
                  </div>

                  <form onSubmit={handleCreateUser} className="space-y-4 text-xs">
                    <div className="space-y-1.5">
                      <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Username</label>
                      <input
                        type="text"
                        required
                        value={addUsername}
                        onChange={(e) => setAddUsername(e.target.value)}
                        placeholder="e.g. jiten"
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-4 focus:outline-none focus:bg-white focus:border-copper"
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
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-4 focus:outline-none focus:bg-white focus:border-copper"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">User Role Permission</label>
                      <select
                        value={addRole}
                        onChange={(e) => setAddRole(e.target.value as any)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 px-4 focus:outline-none focus:bg-white focus:border-copper"
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

                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4">
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 font-serif leading-none">Registered Accounts</h3>
                    <p className="text-[10px] text-slate-400 font-medium leading-none mt-1">Management of portal users list</p>
                  </div>

                  <div className="divide-y divide-slate-100 text-xs">
                    {portalUsers.map((user) => (
                      <div key={user.id} className="py-3 flex items-center justify-between">
                        <div>
                          <div className="font-bold text-slate-800">{user.username}</div>
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
          )}

        </main>
      </div>
    </div>
  );
}
