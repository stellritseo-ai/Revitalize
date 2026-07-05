import React, { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send, Sparkles, Phone, Calendar, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";
import favIcon from "@/assets/fav.png";

interface Message {
  id: string;
  sender: "user" | "assistant";
  text: string;
  timestamp: Date;
}

export function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(1); // Start with 1 to prompt interaction
  const [sessionCreated, setSessionCreated] = useState(false);
  const [initTimestamp] = useState(() => new Date());
  
  // Registration Form States
  const [regName, setRegName] = useState("");
  const [regPhone, setRegPhone] = useState("");
  const [regService, setRegService] = useState("Free Estimate");
  const [regError, setRegError] = useState("");

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "init",
      sender: "assistant",
      text: "Hi there! 👋 Welcome to Revitalize Group. How can we help you today with your real estate or home improvement needs?",
      timestamp: initTimestamp,
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Load existing chat session on mount
  useEffect(() => {
    const storedId = localStorage.getItem("revitalize-chat-session-id");
    if (storedId) {
      fetch("/api/chats?t=" + Date.now())
        .then((r) => (r.ok ? r.json() : []))
        .then((sessions) => {
          if (Array.isArray(sessions)) {
            const match = sessions.find((s: any) => s.id === storedId);
            if (match) {
              const mapped = match.messages.map((m: any) => ({
                id: m.id,
                sender: m.sender === "admin" ? "assistant" : m.sender === "assistant" ? "assistant" : "user",
                text: m.text,
                timestamp: new Date(m.timestamp),
              }));
              if (mapped.length > 0) {
                setMessages([
                  {
                    id: "init",
                    sender: "assistant",
                    text: `Hello ${match.clientName}! 👋 Welcome to Revitalize Group. How can we help you today with your real estate or home improvement needs?`,
                    timestamp: initTimestamp,
                  },
                  ...mapped,
                ]);
              }
              setSessionCreated(true);
            }
          }
        })
        .catch(() => {});
    }
  }, [initTimestamp]);

  // Poll for admin replies when chat is open
  useEffect(() => {
    if (!isOpen) return;
    const storedId = localStorage.getItem("revitalize-chat-session-id");
    if (!storedId) return;

    const interval = setInterval(() => {
      fetch("/api/chats?t=" + Date.now())
        .then((r) => (r.ok ? r.json() : []))
        .then((sessions) => {
          if (Array.isArray(sessions)) {
            const match = sessions.find((s: any) => s.id === storedId);
            if (match) {
              const mapped = match.messages.map((m: any) => ({
                id: m.id,
                sender: m.sender === "admin" ? "assistant" : m.sender === "assistant" ? "assistant" : "user",
                text: m.text,
                timestamp: new Date(m.timestamp),
              }));
              if (mapped.length > 0) {
                setMessages([
                  {
                    id: "init",
                    sender: "assistant",
                    text: `Hello ${match.clientName}! 👋 Welcome to Revitalize Group. How can we help you today with your real estate or home improvement needs?`,
                    timestamp: initTimestamp,
                  },
                  ...mapped,
                ]);
              }
            }
          }
        })
        .catch(() => {});
    }, 4000);

    return () => clearInterval(interval);
  }, [isOpen, sessionCreated, initTimestamp]);

  useEffect(() => {
    if (isOpen) {
      setUnreadCount(0);
      scrollToBottom();
    }
  }, [isOpen, messages, isTyping]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleStartChat = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!regName.trim()) {
      setRegError("Please enter your name.");
      return;
    }
    if (!regPhone.trim()) {
      setRegError("Please enter your phone number.");
      return;
    }
    setRegError("");
    setIsTyping(true);

    try {
      const createRes = await fetch("/api/chats", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          action: "create",
          clientName: regName,
          clientCity: regService,
          clientPhone: regPhone,
        }),
      });

      if (createRes.ok) {
        const sessionData = await createRes.json();
        const activeSessionId = sessionData.id;
        localStorage.setItem("revitalize-chat-session-id", activeSessionId || "");
        
        // Push initial greetings from assistant mentioning service choice
        const greetingText = `Hello ${regName}! 👋 Thank you for choosing Revitalize Group. We noticed you are interested in our "${regService}" services. An agent has been alerted and will respond shortly. Please feel free to describe your project or ask any questions here!`;
        
        // Save the welcome message to the database
        await fetch("/api/chats", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            action: "message",
            sessionId: activeSessionId,
            sender: "assistant",
            text: greetingText,
          }),
        });

        // Set state
        setMessages([
          {
            id: "init",
            sender: "assistant",
            text: greetingText,
            timestamp: new Date(),
          }
        ]);
        setSessionCreated(true);
      } else {
        setRegError("Failed to connect chat. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setRegError("Server error. Please try again later.");
    } finally {
      setIsTyping(false);
    }
  };

  const handleSend = async (textToSend: string) => {
    if (!textToSend.trim()) return;

    const userMessage: Message = {
      id: Math.random().toString(),
      sender: "user",
      text: textToSend,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    try {
      const activeSessionId = localStorage.getItem("revitalize-chat-session-id");

      // Send the client's message to the backend
      if (activeSessionId) {
        await fetch("/api/chats", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            action: "message",
            sessionId: activeSessionId,
            sender: "client",
            text: textToSend,
          }),
        });
      }

      // Simulate assistant response if keywords hit
      setTimeout(async () => {
        let replyText = "";
        let isFallback = false;
        const lower = textToSend.toLowerCase();

        if (lower.includes("estimate") || lower.includes("remodel") || lower.includes("renovat") || lower.includes("renov")) {
          replyText = "We would love to help you with your home renovations! Revitalize Group provides expert kitchen and bath remodeling, flooring, custom cabinetry, and full-scale updates. You can schedule a consultation by clicking our buttons, or call us directly at (813) 323-0291.";
        } else if (lower.includes("buy") || lower.includes("sell") || lower.includes("agent") || lower.includes("broker") || lower.includes("real estate") || lower.includes("property")) {
          replyText = "At Revitalize Group, we help clients make smarter decisions by combining licensed real estate services with professional home improvements. Whether you are buying your first home or preparing to sell for maximum equity, we've got you covered. What properties or areas are you interested in?";
        } else if (lower.includes("call") || lower.includes("phone") || lower.includes("callback") || lower.includes("contact")) {
          replyText = "We'd be glad to give you a call back! Please type your phone number and the best time to reach you below, and our team will get in touch shortly. You can also call us directly at (813) 323-0291.";
        } else {
          isFallback = true;
        }

        if (isFallback) {
          setIsTyping(false);
          return;
        }

        const assistantMessage: Message = {
          id: Math.random().toString(),
          sender: "assistant",
          text: replyText,
          timestamp: new Date(),
        };

        setMessages((prev) => [...prev, assistantMessage]);
        setIsTyping(false);

        // Send simulated assistant response to the database
        if (activeSessionId) {
          await fetch("/api/chats", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              action: "message",
              sessionId: activeSessionId,
              sender: "assistant",
              text: replyText,
            }),
          });
        }
      }, 1200);

    } catch (e) {
      console.error("Failed to sync chat message:", e);
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] font-sans">
      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-[320px] sm:w-[380px] bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-charcoal/10 overflow-hidden flex flex-col max-h-[500px] transition-all duration-300 transform scale-100 origin-bottom-right animate-in fade-in slide-in-from-bottom-5">
          {/* Header */}
          <div className="bg-gradient-to-r from-copper to-[#975033] p-4 text-white flex items-center justify-between shadow-md">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-white/20 overflow-hidden shrink-0">
                  <img src={favIcon} alt="Revitalize Logo" className="w-7 h-7 object-contain" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight">Revitalize Assistant</h4>
                <p className="text-[10px] text-white/70 leading-none mt-0.5">Real Estate & Home Improvement Specialists</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white hover:bg-white/10 p-1.5 rounded-full transition"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Form / Onboarding Screen */}
          {!sessionCreated ? (
            <form onSubmit={handleStartChat} className="flex-1 p-6 overflow-y-auto space-y-3.5 bg-gray-50/50 flex flex-col justify-center min-h-[320px]">
              <div className="text-center mb-1">
                <h3 className="font-extrabold text-sm text-charcoal tracking-wide uppercase">Start Live Chat</h3>
                <p className="text-[10.5px] text-charcoal-soft/75 mt-0.5 font-medium">Introduce yourself to start chatting with an agent</p>
              </div>

              {regError && (
                <div className="bg-rose-50 border border-rose-100 text-rose-600 text-[10.5px] p-2.5 rounded-xl font-bold text-center animate-shake">
                  {regError}
                </div>
              )}

              <div className="space-y-1">
                <label className="text-[9.5px] text-charcoal-soft/50 font-black uppercase tracking-wider block text-left">Your Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Doe"
                  value={regName}
                  onChange={(e) => setRegName(e.target.value)}
                  className="w-full bg-white border border-charcoal/10 rounded-xl py-2.5 px-3 focus:outline-none focus:border-copper focus:ring-1 focus:ring-copper text-xs font-semibold text-charcoal"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[9.5px] text-charcoal-soft/50 font-black uppercase tracking-wider block text-left">Phone Number</label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. (813) 555-0199"
                  value={regPhone}
                  onChange={(e) => setRegPhone(e.target.value)}
                  className="w-full bg-white border border-charcoal/10 rounded-xl py-2.5 px-3 focus:outline-none focus:border-copper focus:ring-1 focus:ring-copper text-xs font-semibold text-charcoal"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[9.5px] text-charcoal-soft/50 font-black uppercase tracking-wider block text-left">Service Needed</label>
                <select
                  value={regService}
                  onChange={(e) => setRegService(e.target.value)}
                  className="w-full bg-white border border-charcoal/10 rounded-xl py-2.5 px-3 focus:outline-none focus:border-copper focus:ring-1 focus:ring-copper text-xs font-bold text-charcoal appearance-none cursor-pointer"
                >
                  <option value="Free Estimate">Free Estimate</option>
                  <option value="Real Estate">Real Estate</option>
                  <option value="Buy & Sell Home">Buy & Sell Home</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={isTyping}
                className="w-full bg-copper hover:bg-copper-deep text-white font-extrabold text-xs py-3 rounded-xl shadow-lg shadow-copper/20 hover:scale-[1.01] active:scale-[0.99] transition mt-2 flex items-center justify-center gap-1.5 cursor-pointer"
              >
                {isTyping ? "Connecting..." : "Start Chatting"}
              </button>
            </form>
          ) : (
            <>
              {/* Message Area */}
              <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50/50 min-h-[220px] max-h-[340px]">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex gap-2 max-w-[85%] ${
                      msg.sender === "user" ? "ml-auto flex-row-reverse" : "mr-auto"
                    }`}
                  >
                    {msg.sender === "assistant" && (
                      <div className="w-7 h-7 rounded-full bg-copper/10 flex items-center justify-center text-copper text-xs shrink-0 font-bold border border-copper/10">
                        R
                      </div>
                    )}
                    <div
                      className={`p-3 rounded-2xl text-sm leading-relaxed ${
                        msg.sender === "user"
                          ? "bg-copper text-white rounded-tr-none shadow-md shadow-copper/10"
                          : "bg-white text-charcoal border border-charcoal/5 rounded-tl-none shadow-sm"
                      }`}
                    >
                      <p>{msg.text}</p>
                    </div>
                  </div>
                ))}

                {isTyping && (
                  <div className="flex gap-2 max-w-[85%] mr-auto items-center">
                    <div className="w-7 h-7 rounded-full bg-copper/10 flex items-center justify-center text-copper text-xs shrink-0 font-bold border border-copper/10">
                      R
                    </div>
                    <div className="bg-white border border-charcoal/5 p-3 rounded-2xl rounded-tl-none flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-charcoal/40 rounded-full animate-bounce" />
                      <span className="w-1.5 h-1.5 bg-charcoal/40 rounded-full animate-bounce [animation-delay:0.2s]" />
                      <span className="w-1.5 h-1.5 bg-charcoal/40 rounded-full animate-bounce [animation-delay:0.4s]" />
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Form */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend(inputValue);
                }}
                className="p-3 border-t border-charcoal/10 bg-white flex items-center gap-2"
              >
                <input
                  type="text"
                  placeholder="Ask a question..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="flex-1 bg-gray-50 border border-charcoal/10 focus:border-copper focus:ring-0 focus:outline-none rounded-xl px-4 py-2.5 text-sm font-medium"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="bg-copper hover:bg-copper-deep text-white w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-md shadow-copper/20 hover:scale-105 active:scale-95 transition disabled:opacity-50 disabled:scale-100 disabled:shadow-none cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </>
          )}
        </div>
      )}

      {/* Floating Bubble Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-white hover:scale-110 active:scale-95 flex items-center justify-center shadow-xl cursor-pointer hover:shadow-2xl transition duration-300 relative group border border-charcoal/10"
        style={{
          boxShadow: "0 8px 30px rgba(214, 152, 115, 0.35)",
        }}
      >
        <span className="absolute inset-0 rounded-full bg-copper/15 animate-ping -z-10 group-hover:opacity-0 transition-opacity duration-300" />
        <img src={favIcon} alt="Chat Logo" className="w-8 h-8 object-contain group-hover:scale-110 transition-transform duration-300" />

        {/* Unread notification badge */}
        {unreadCount > 0 && !isOpen && (
          <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-white animate-bounce animate-duration-500">
            {unreadCount}
          </span>
        )}
      </button>
    </div>
  );
}
