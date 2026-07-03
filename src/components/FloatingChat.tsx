import React, { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send, Sparkles, Phone, Calendar, ArrowRight } from "lucide-react";
import { Link } from "@tanstack/react-router";

interface Message {
  id: string;
  sender: "user" | "assistant";
  text: string;
  timestamp: Date;
}

export function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [unreadCount, setUnreadCount] = useState(1); // Start with 1 to prompt interaction
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "init",
      sender: "assistant",
      text: "Hi there! 👋 Welcome to Revitalize Group. How can we help you today with your real estate or home improvement needs?",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setUnreadCount(0);
      scrollToBottom();
    }
  }, [isOpen, messages, isTyping]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSend = (textToSend: string) => {
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

    // Simulate response
    setTimeout(() => {
      let replyText = "";
      const lower = textToSend.toLowerCase();

      if (lower.includes("estimate") || lower.includes("remodel") || lower.includes("renovat") || lower.includes("renov")) {
        replyText = "We would love to help you with your home renovations! Revitalize Group provides expert kitchen and bath remodeling, flooring, custom cabinetry, and full-scale updates. You can schedule a consultation by clicking our buttons, or call us directly at (813) 323-0291.";
      } else if (lower.includes("buy") || lower.includes("sell") || lower.includes("agent") || lower.includes("broker") || lower.includes("real estate") || lower.includes("property")) {
        replyText = "At Revitalize Group, we help clients make smarter decisions by combining licensed real estate services with professional home improvements. Whether you are buying your first home or preparing to sell for maximum equity, we've got you covered. What properties or areas are you interested in?";
      } else if (lower.includes("call") || lower.includes("phone") || lower.includes("callback") || lower.includes("contact")) {
        replyText = "We'd be glad to give you a call back! Please type your phone number and the best time to reach you below, and our team will get in touch shortly. You can also call us directly at (813) 323-0291.";
      } else {
        replyText = "Thank you for reaching out! Revitalize Group is your one team for every step of your home journey (real estate, renovations, and property solutions). Let us know your contact info or call us directly at (813) 323-0291 to discuss your goals.";
      }

      const assistantMessage: Message = {
        id: Math.random().toString(),
        sender: "assistant",
        text: replyText,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1200);
  };

  const selectQuickOption = (option: string, displayMessage: string) => {
    handleSend(displayMessage);
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
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                  <Sparkles className="w-5 h-5 text-white animate-pulse" />
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

            {/* Quick Suggestions - Only show when there are no user messages yet */}
            {messages.length === 1 && !isTyping && (
              <div className="pt-2 pl-9 space-y-2">
                <button
                  onClick={() => selectQuickOption("estimate", "I'd like to get a free estimate / consultation")}
                  className="w-full text-left flex items-center justify-between p-3 rounded-xl border border-charcoal/10 bg-white hover:border-copper/40 hover:bg-copper/5 transition text-xs font-semibold text-charcoal-soft hover:text-copper shadow-sm"
                >
                  <span className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5" /> Get a Free Estimate
                  </span>
                  <ArrowRight className="w-3 h-3 opacity-60" />
                </button>
                <button
                  onClick={() => selectQuickOption("realty", "I have a question about buying or selling a home")}
                  className="w-full text-left flex items-center justify-between p-3 rounded-xl border border-charcoal/10 bg-white hover:border-copper/40 hover:bg-copper/5 transition text-xs font-semibold text-charcoal-soft hover:text-copper shadow-sm"
                >
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5" /> Buy or Sell a Home
                  </span>
                  <ArrowRight className="w-3 h-3 opacity-60" />
                </button>
                <button
                  onClick={() => selectQuickOption("callback", "I'd like to request a callback")}
                  className="w-full text-left flex items-center justify-between p-3 rounded-xl border border-charcoal/10 bg-white hover:border-copper/40 hover:bg-copper/5 transition text-xs font-semibold text-charcoal-soft hover:text-copper shadow-sm"
                >
                  <span className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5" /> Request a Callback
                  </span>
                  <ArrowRight className="w-3 h-3 opacity-60" />
                </button>
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
              className="bg-copper hover:bg-copper-deep text-white w-10 h-10 rounded-xl flex items-center justify-center shrink-0 shadow-md shadow-copper/20 hover:scale-105 active:scale-95 transition disabled:opacity-50 disabled:scale-100 disabled:shadow-none"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* Floating Bubble Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-gradient-to-tr from-copper to-[#975033] hover:scale-110 active:scale-95 text-white flex items-center justify-center shadow-xl cursor-pointer hover:shadow-2xl transition duration-300 relative group"
        style={{
          boxShadow: "0 8px 30px rgba(214, 152, 115, 0.4)",
        }}
      >
        <span className="absolute inset-0 rounded-full bg-copper/30 animate-ping -z-10 group-hover:animate-none" />
        <MessageCircle className="w-6 h-6" />

        {/* Unread notification badge */}
        {unreadCount > 0 && !isOpen && (
          <span className="absolute -top-1 -right-1 bg-rose-500 text-white text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center border-2 border-white animate-bounce">
            {unreadCount}
          </span>
        )}
      </button>
    </div>
  );
}
