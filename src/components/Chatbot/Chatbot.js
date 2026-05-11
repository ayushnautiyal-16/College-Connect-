"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { X, Send, User } from "lucide-react";
import { collegesData } from "@/utils/collegesData";
import { getAssetUrl } from "@/utils/assets";

// Neha's avatar image via CloudFront CDN
const NEHA_AVATAR = getAssetUrl("Gemini_Generated_Image_li3cjdli3cjdli3c.png");

// ─── Chat flow steps ───────────────────────────────────────────
const STEPS = {
    GREETING: "greeting",
    ASK_NAME: "ask_name",
    ASK_COURSE: "ask_course",
    ASK_COLLEGE: "ask_college",
    ASK_PERCENTAGE: "ask_percentage",
    ASK_EMAIL: "ask_email",
    ASK_PHONE: "ask_phone",
    DONE: "done",
};

// Quick-pick course options
const COURSE_OPTIONS = [
    "B.Tech (CSE)",
    "MBA",
    "BCA",
    "BBA",
    "B.Pharma",
    "B.Sc Agriculture",
    "BHM (Hotel Management)",
    "B.A. LL.B",
    "B.Sc Nursing / MBBS",
    "B.Com / Commerce",
    "B.Des / Design",
    "MCA",
    "Diploma / Polytechnic",
];

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [currentStep, setCurrentStep] = useState(STEPS.GREETING);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const [userData, setUserData] = useState({
        name: "",
        course: "",
        college: "",
        percentage: "",
        email: "",
        phone: "",
    });
    const [showQuickPicks, setShowQuickPicks] = useState(null); // 'course' | 'college' | null
    const [hasGreeted, setHasGreeted] = useState(false);
    const [pulse, setPulse] = useState(true);
    const [showGreetingBubble, setShowGreetingBubble] = useState(false);
    const greetingTimerRef = useRef(null);

    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);

    // College names for quick picks
    const collegeNames = collegesData.map((c) => c.name);

    // ─── Auto-scroll ────────────────────────────────────────────
    const scrollToBottom = useCallback(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, []);

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping, scrollToBottom]);

    // ─── Show greeting bubble after 3 seconds ────────────────────
    useEffect(() => {
        if (!isOpen && !hasGreeted) {
            greetingTimerRef.current = setTimeout(() => {
                setShowGreetingBubble(true);
            }, 3000);
        }
        return () => {
            if (greetingTimerRef.current) clearTimeout(greetingTimerRef.current);
        };
    }, [isOpen, hasGreeted]);

    // ─── Focus input when chat opens ────────────────────────────
    useEffect(() => {
        if (isOpen) {
            setShowGreetingBubble(false);
            setTimeout(() => inputRef.current?.focus(), 400);
        }
    }, [isOpen, currentStep]);

    // ─── Add bot message with typing delay ──────────────────────
    const addBotMessage = useCallback((text, delay = 800) => {
        setIsTyping(true);
        return new Promise((resolve) => {
            setTimeout(() => {
                setMessages((prev) => [...prev, { sender: "bot", text }]);
                setIsTyping(false);
                resolve();
            }, delay);
        });
    }, []);

    // ─── Greeting flow on first open ────────────────────────────
    useEffect(() => {
        if (isOpen && !hasGreeted) {
            setHasGreeted(true);
            setPulse(false);
            const greet = async () => {
                await addBotMessage("Hello! 👋 I'm Neha, your Admission Assistant at College Connect.", 600);
                await addBotMessage(
                    "I'll help you find the perfect college & course in just a few quick questions!",
                    900
                );
                await addBotMessage("Let's start — what's your name? 😊", 700);
                setCurrentStep(STEPS.ASK_NAME);
            };
            greet();
        }
    }, [isOpen, hasGreeted, addBotMessage]);

    // ─── Handle user response ───────────────────────────────────
    const handleSend = async (overrideValue) => {
        const value = (overrideValue || inputValue).trim();
        if (!value) return;

        // Add user message
        setMessages((prev) => [...prev, { sender: "user", text: value }]);
        setInputValue("");
        setShowQuickPicks(null);

        switch (currentStep) {
            case STEPS.ASK_NAME:
                setUserData((prev) => ({ ...prev, name: value }));
                await addBotMessage(`Nice to meet you, ${value}! 🎉`);
                await addBotMessage(
                    "Which course are you interested in? Pick one below or type your own:",
                    900
                );
                setShowQuickPicks("course");
                setCurrentStep(STEPS.ASK_COURSE);
                break;

            case STEPS.ASK_COURSE:
                setUserData((prev) => ({ ...prev, course: value }));
                await addBotMessage(`Great choice — "${value}"! 📚`);
                await addBotMessage(
                    "Do you have a specific college in mind? Pick one or type the name:",
                    900
                );
                setShowQuickPicks("college");
                setCurrentStep(STEPS.ASK_COLLEGE);
                break;

            case STEPS.ASK_COLLEGE:
                setUserData((prev) => ({ ...prev, college: value }));
                await addBotMessage(`Got it — "${value}" noted! 🏫`);
                await addBotMessage(
                    "What was your 12th class percentage (or expected)? This helps us match eligibility.",
                    900
                );
                setCurrentStep(STEPS.ASK_PERCENTAGE);
                break;

            case STEPS.ASK_PERCENTAGE:
                setUserData((prev) => ({ ...prev, percentage: value }));
                await addBotMessage(`${value}% — that's awesome! 💯`);
                await addBotMessage(
                    "Almost done! Please share your email so our counselor can send you personalized college recommendations. 📧",
                    900
                );
                setCurrentStep(STEPS.ASK_EMAIL);
                break;

            case STEPS.ASK_EMAIL: {
                // Simple email validation
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) {
                    await addBotMessage(
                        "Hmm, that doesn't look like a valid email. Could you double-check? 🤔"
                    );
                    return;
                }
                setUserData((prev) => ({ ...prev, email: value }));
                await addBotMessage("Thanks! One last thing 🙏");
                await addBotMessage(
                    "Could you share your phone / WhatsApp number? We'll only use it to reach you with updates.",
                    900
                );
                setCurrentStep(STEPS.ASK_PHONE);
                break;
            }

            case STEPS.ASK_PHONE: {
                const phoneRegex = /^[6-9]\d{9}$/;
                const cleaned = value.replace(/[\s\-+]/g, "").replace(/^91/, "");
                if (!phoneRegex.test(cleaned)) {
                    await addBotMessage(
                        "Please enter a valid 10-digit Indian mobile number. 📱"
                    );
                    return;
                }
                setUserData((prev) => ({ ...prev, phone: cleaned }));
                // Submit lead
                const lead = {
                    ...userData,
                    phone: cleaned,
                    submittedAt: new Date().toISOString(),
                };
                submitLead(lead);

                await addBotMessage(
                    `You're all set, ${userData.name}! 🎊`
                );
                await addBotMessage(
                    "Our expert counselor will reach out to you shortly with the best college options matching your profile. Good luck! 🚀",
                    1000
                );
                setCurrentStep(STEPS.DONE);
                break;
            }

            default:
                await addBotMessage(
                    "Thanks for chatting! If you have more questions, feel free to call us or visit our contact page. 😊"
                );
                break;
        }
    };

    // ─── Submit lead (store locally + API) ──────────────────────
    const submitLead = async (lead) => {
        // Save to localStorage as backup
        try {
            const existing = JSON.parse(localStorage.getItem("chatbot_leads") || "[]");
            existing.push(lead);
            localStorage.setItem("chatbot_leads", JSON.stringify(existing));
        } catch (e) {
            console.error("Failed to save lead locally:", e);
        }

        // POST to API (create this endpoint later)
        try {
            await fetch("/api/chatbot-lead", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(lead),
            });
        } catch (e) {
            console.error("Failed to send lead to API:", e);
        }
    };

    // ─── Reset chat ─────────────────────────────────────────────
    const resetChat = () => {
        setMessages([]);
        setCurrentStep(STEPS.GREETING);
        setUserData({ name: "", course: "", college: "", percentage: "", email: "", phone: "" });
        setShowQuickPicks(null);
        setHasGreeted(false);
    };

    // ─── Key handler ────────────────────────────────────────────
    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    const isDone = currentStep === STEPS.DONE;

    return (
        <>
            {/* ── Greeting Bubble ──────────────────────────────── */}
            {showGreetingBubble && !isOpen && (
                <div
                    className="fixed bottom-[26px] right-[72px] z-[60] animate-greetSlideIn cursor-pointer"
                    onClick={() => {
                        setShowGreetingBubble(false);
                        setIsOpen(true);
                        setPulse(false);
                    }}
                >
                    <div className="relative bg-white rounded-2xl shadow-xl shadow-indigo-200/40 border border-indigo-100/60 px-4 py-3 max-w-[240px] group hover:shadow-2xl hover:shadow-indigo-300/40 transition-all duration-300 hover:-translate-y-0.5">
                        {/* Close button */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                setShowGreetingBubble(false);
                            }}
                            className="absolute -top-2 -right-2 w-5 h-5 bg-slate-200 hover:bg-slate-300 rounded-full flex items-center justify-center transition-colors"
                            aria-label="Dismiss greeting"
                        >
                            <X className="w-3 h-3 text-slate-500" />
                        </button>
                        {/* Bubble tail (pointing right toward the bot icon) */}
                        <div className="absolute top-1/2 -right-[7px] -translate-y-1/2 w-3.5 h-3.5 bg-white border-r border-b border-indigo-100/60 rotate-[-45deg]" />
                        <p className="text-[13px] font-medium text-slate-700 leading-snug">
                            Hi! I'm <span className="text-indigo-600 font-semibold">Neha</span>, your Admission Assistant 👋
                        </p>
                        <p className="text-[11px] text-slate-400 mt-1">
                            Click to find your perfect college
                        </p>
                    </div>
                </div>
            )}

            {/* ── Chat Toggle Button ─────────────────────────────── */}
            <button
                onClick={() => {
                    setIsOpen((prev) => !prev);
                    setPulse(false);
                    setShowGreetingBubble(false);
                }}
                className={`fixed bottom-6 right-3 z-[60] w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all duration-500 transform hover:scale-110 group overflow-hidden ${isOpen
                        ? "bg-slate-700"
                        : "ring-2 ring-indigo-400/60 ring-offset-2"
                    }`}
                aria-label="Open Chatbot"
                id="chatbot-toggle"
            >
                {/* Pulse ring */}
                {pulse && !isOpen && (
                    <span className="absolute inset-0 rounded-full animate-ping-slow bg-indigo-400/40" />
                )}
                {isOpen ? (
                    <X className="w-6 h-6 text-white transition-transform duration-300" />
                ) : (
                    <img
                        src={NEHA_AVATAR}
                        alt="Neha - Admission Assistant"
                        className="w-full h-full object-cover rounded-full"
                    />
                )}
            </button>

            {/* ── Chat Window ────────────────────────────────────── */}
            <div
                className={`fixed bottom-[88px] right-3 z-[60] w-[370px] max-w-[calc(100vw-24px)] transition-all duration-500 ease-out origin-bottom-right ${isOpen
                    ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
                    : "opacity-0 scale-90 translate-y-4 pointer-events-none"
                    }`}
            >
                <div className="rounded-2xl overflow-hidden shadow-2xl shadow-indigo-500/10 border border-white/20 backdrop-blur-xl flex flex-col"
                    style={{ height: "520px" }}>

                    {/* ── Header ──────────────────────────────── */}
                    <div className="relative px-5 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 text-white flex-shrink-0">
                        {/* Decorative circles */}
                        <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -translate-y-8 translate-x-8" />
                        <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full translate-y-6 -translate-x-6" />

                        <div className="relative flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full overflow-hidden ring-2 ring-white/30 flex-shrink-0">
                                <img src={NEHA_AVATAR} alt="Neha" className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-sm leading-tight">
                                    Neha — Admission Assistant
                                </h3>
                                <p className="text-[11px] text-indigo-200 flex items-center gap-1">
                                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                                    Online — Typically replies instantly
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* ── Messages Area ───────────────────────── */}
                    <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-gradient-to-b from-slate-50 to-white chatbot-scrollbar">
                        {messages.map((msg, i) => (
                            <div
                                key={i}
                                className={`flex items-end gap-2 animate-fadeInMsg ${msg.sender === "bot" ? "justify-start" : "justify-end"
                                    }`}
                            >
                                {msg.sender === "bot" && (
                                    <div className="w-7 h-7 rounded-full overflow-hidden flex-shrink-0 mb-0.5 ring-1 ring-indigo-200">
                                        <img src={NEHA_AVATAR} alt="Neha" className="w-full h-full object-cover" />
                                    </div>
                                )}
                                <div
                                    className={`px-3.5 py-2.5 rounded-2xl text-[13px] leading-relaxed max-w-[75%] ${msg.sender === "bot"
                                        ? "bg-white text-slate-700 shadow-sm border border-slate-100 rounded-bl-md"
                                        : "bg-gradient-to-br from-indigo-500 to-purple-600 text-white rounded-br-md shadow-md shadow-indigo-200/40"
                                        }`}
                                >
                                    {msg.text}
                                </div>
                                {msg.sender === "user" && (
                                    <div className="w-7 h-7 rounded-full bg-indigo-500 flex items-center justify-center flex-shrink-0 mb-0.5">
                                        <User className="w-3.5 h-3.5 text-white" />
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* Typing Indicator */}
                        {isTyping && (
                            <div className="flex items-end gap-2 justify-start">
                                <div className="w-7 h-7 rounded-full overflow-hidden flex-shrink-0 ring-1 ring-indigo-200">
                                    <img src={NEHA_AVATAR} alt="Neha" className="w-full h-full object-cover" />
                                </div>
                                <div className="bg-white px-4 py-3 rounded-2xl rounded-bl-md shadow-sm border border-slate-100">
                                    <div className="flex gap-1">
                                        <span className="w-2 h-2 rounded-full bg-slate-300 animate-bounce" style={{ animationDelay: "0ms" }} />
                                        <span className="w-2 h-2 rounded-full bg-slate-300 animate-bounce" style={{ animationDelay: "150ms" }} />
                                        <span className="w-2 h-2 rounded-full bg-slate-300 animate-bounce" style={{ animationDelay: "300ms" }} />
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Quick Picks — Courses */}
                        {showQuickPicks === "course" && !isTyping && (
                            <div className="flex flex-wrap gap-1.5 pt-1 animate-fadeInMsg">
                                {COURSE_OPTIONS.map((course) => (
                                    <button
                                        key={course}
                                        onClick={() => handleSend(course)}
                                        className="px-3 py-1.5 text-xs font-medium rounded-full bg-indigo-50 text-indigo-700 border border-indigo-100 hover:bg-indigo-100 hover:border-indigo-300 transition-all duration-200 hover:scale-105"
                                    >
                                        {course}
                                    </button>
                                ))}
                            </div>
                        )}

                        {/* Quick Picks — Colleges */}
                        {showQuickPicks === "college" && !isTyping && (
                            <div className="flex flex-wrap gap-1.5 pt-1 animate-fadeInMsg">
                                {collegeNames.map((name) => (
                                    <button
                                        key={name}
                                        onClick={() => handleSend(name)}
                                        className="px-3 py-1.5 text-xs font-medium rounded-full bg-purple-50 text-purple-700 border border-purple-100 hover:bg-purple-100 hover:border-purple-300 transition-all duration-200 hover:scale-105"
                                    >
                                        {name}
                                    </button>
                                ))}
                                <button
                                    onClick={() => handleSend("Not decided yet")}
                                    className="px-3 py-1.5 text-xs font-medium rounded-full bg-slate-100 text-slate-600 border border-slate-200 hover:bg-slate-200 transition-all duration-200"
                                >
                                    Not decided yet
                                </button>
                            </div>
                        )}

                        <div ref={messagesEndRef} />
                    </div>

                    {/* ── Input Area ──────────────────────────── */}
                    <div className="px-4 py-3 bg-white border-t border-slate-100 flex-shrink-0">
                        {isDone ? (
                            <button
                                onClick={resetChat}
                                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-semibold hover:shadow-lg hover:shadow-indigo-200/50 transition-all duration-300 transform hover:scale-[1.02]"
                            >
                                Start New Conversation
                            </button>
                        ) : (
                            <div className="flex items-center gap-2">
                                <input
                                    ref={inputRef}
                                    type="text"
                                    value={inputValue}
                                    onChange={(e) => setInputValue(e.target.value)}
                                    onKeyDown={handleKeyDown}
                                    placeholder={
                                        currentStep === STEPS.ASK_NAME
                                            ? "Type your name…"
                                            : currentStep === STEPS.ASK_COURSE
                                                ? "e.g. B.Tech CSE, MBA…"
                                                : currentStep === STEPS.ASK_COLLEGE
                                                    ? "e.g. Graphic Era University…"
                                                    : currentStep === STEPS.ASK_PERCENTAGE
                                                        ? "e.g. 85%"
                                                        : currentStep === STEPS.ASK_EMAIL
                                                            ? "you@example.com"
                                                            : currentStep === STEPS.ASK_PHONE
                                                                ? "10-digit mobile number"
                                                                : "Type a message…"
                                    }
                                    disabled={isTyping || currentStep === STEPS.GREETING}
                                    className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-400/40 focus:border-indigo-300 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                                />
                                <button
                                    onClick={() => handleSend()}
                                    disabled={isTyping || !inputValue.trim() || currentStep === STEPS.GREETING}
                                    className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex items-center justify-center hover:shadow-lg hover:shadow-indigo-300/40 transition-all duration-300 disabled:opacity-40 disabled:cursor-not-allowed hover:scale-105"
                                >
                                    <Send className="w-4 h-4" />
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* ── Scoped CSS ─────────────────────────────────────── */}
            <style jsx>{`
                .chatbot-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .chatbot-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .chatbot-scrollbar::-webkit-scrollbar-thumb {
                    background: #cbd5e1;
                    border-radius: 10px;
                }
                @keyframes fadeInMsg {
                    from {
                        opacity: 0;
                        transform: translateY(8px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fadeInMsg {
                    animation: fadeInMsg 0.35s ease-out;
                }
                @keyframes pingSlow {
                    0% {
                        transform: scale(1);
                        opacity: 0.6;
                    }
                    75%, 100% {
                        transform: scale(1.6);
                        opacity: 0;
                    }
                }
                .animate-ping-slow {
                    animation: pingSlow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
                }
                @keyframes greetSlideIn {
                    0% {
                        opacity: 0;
                        transform: translateX(20px) scale(0.9);
                    }
                    100% {
                        opacity: 1;
                        transform: translateX(0) scale(1);
                    }
                }
                .animate-greetSlideIn {
                    animation: greetSlideIn 0.4s ease-out forwards;
                }
            `}</style>
        </>
    );
}
