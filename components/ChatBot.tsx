import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI } from "@google/genai";

interface Message {
  role: 'user' | 'model';
  text: string;
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "Welcome to Mergelith. I am the Institutional Assistant. How may I best support your firm's growth objectives today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showQuickActions, setShowQuickActions] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  const quickActions = [
    { id: 'voice', label: 'Install Voice AI Receptionist', prompt: 'I would like to discuss installing the Voice AI Receptionist for 24/7 lead capture.' },
    { id: 'aeo', label: 'Optimize Website for AI Search', prompt: 'I want to optimize our website for AEO (Answer Engine Optimization) and AI citations.' },
    { id: 'analyzer', label: 'Demo: Deal Analyzer', prompt: 'I am interested in a demo of the Deal Analyzer and Intelligence Layer.' }
  ];

  useEffect(() => {
    const handleOpenChat = () => setIsOpen(true);
    window.addEventListener('mergelith-open-chat', handleOpenChat);
    return () => window.removeEventListener('mergelith-open-chat', handleOpenChat);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading, showQuickActions]);

  const handleQuickAction = (prompt: string) => {
    setShowQuickActions(false);
    setInput(prompt);
    setTimeout(() => sendMessage(prompt), 10);
  };

  const sendMessage = async (overrideInput?: string) => {
    const messageToSend = overrideInput || input;
    if (!messageToSend.trim() || isLoading) return;

    const userMessage = messageToSend.trim();
    if (!overrideInput) setInput('');
    
    const newMessages: Message[] = [...messages, { role: 'user', text: userMessage }];
    setMessages(newMessages);
    setIsLoading(true);
    setShowQuickActions(false);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      
      const systemInstruction = `
        You are the Mergelith Institutional Assistant. Mergelith provides AI growth systems for M&A firms.
        Your goal is to be professional, discreet, and efficient.
        
        Our Three Main Service Lines are:
        1. Voice AI Receptionist: 24/7 high-velocity lead capture for M&A firms.
        2. Website Optimization (AEO): Ensuring the firm is cited by Perplexity/Gemini/SGE.
        3. Deal Analyzer: Intelligence layer for CIM parsing and data alpha.

        You must qualify the visitor and book a demo by collecting exactly four pieces of information:
        1. Full Name
        2. Firm/Institution Name
        3. Professional Email
        4. Primary growth objective (confirming which of the 3 services or other goals they have).

        Tone: High-end, institutional, slightly formal, and helpful.
        If the user provides information, acknowledge it professionally.
        Once you have all 4 pieces of information, tell them: "Your credentials have been verified. A Mergelith Partner will contact you at your institutional email within 2 business hours to finalize the demo or installation environment."
        Do not use emojis. Use "M&A" instead of "mergers and acquisitions".
      `;

      const contents = newMessages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: contents,
        config: {
          systemInstruction: systemInstruction,
          temperature: 0.7,
        },
      });

      const modelText = response.text || "I apologize, my secure link was momentarily interrupted. Could you repeat your last point?";
      setMessages([...newMessages, { role: 'model', text: modelText }]);
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages([...newMessages, { role: 'model', text: "Discretionary Protocol Error: Connection interrupted. Please use our Priority Advisory Line if the issue persists." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-10 right-10 z-[60] w-16 h-16 bg-[#E6B65C] rounded-sm shadow-[0_10px_30px_rgba(230,182,92,0.4)] flex items-center justify-center transition-all duration-500 hover:scale-110 active:scale-95 group"
        aria-label="Open Assistant"
      >
        {isOpen ? (
          <svg className="w-8 h-8 text-[#2F4F68]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <div className="relative">
            <svg className="w-8 h-8 text-[#2F4F68]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full animate-ping"></span>
          </div>
        )}
      </button>

      <div className={`fixed bottom-32 right-10 z-[60] w-[420px] h-[600px] bg-[#1e3547] border border-[#E6B65C]/30 shadow-2xl rounded-sm flex flex-col transition-all duration-500 origin-bottom-right ${isOpen ? 'scale-100 opacity-100' : 'scale-90 opacity-0 pointer-events-none'}`}>
        <div className="p-6 border-b border-[#E6B65C]/20 bg-[#2F4F68] flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-[#E6B65C] flex items-center justify-center rounded-sm">
              <span className="text-[#2F4F68] font-cinzel font-black text-sm">M</span>
            </div>
            <div>
              <h4 className="text-[11px] font-cinzel uppercase tracking-[0.3em] text-[#F4F3EF] leading-none font-black">Institutional Assistant</h4>
              <p className="text-[9px] uppercase tracking-widest text-[#E6B65C] mt-1.5 font-black">Secure Channel Active</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
             <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
             <span className="text-[9px] text-[#F4F3EF]/40 font-mono uppercase font-black">Online</span>
          </div>
        </div>

        <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 scrollbar-thin scrollbar-thumb-[#E6B65C]/20">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] p-4 text-[13px] leading-relaxed rounded-sm ${
                msg.role === 'user' 
                ? 'bg-[#E6B65C]/15 border border-[#E6B65C]/40 text-[#F4F3EF]' 
                : 'bg-[#2F4F68] border border-[#F4F3EF]/10 text-[#F4F3EF]/90 shadow-lg'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          
          {showQuickActions && (
            <div className="space-y-3 pt-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#F4F3EF]/30 mb-3 font-black ml-1">Priority Service Paths:</p>
              {quickActions.map((action) => (
                <button
                  key={action.id}
                  onClick={() => handleQuickAction(action.prompt)}
                  className="w-full text-left p-4 text-[11px] uppercase tracking-[0.2em] border border-[#E6B65C]/30 bg-[#E6B65C]/5 text-[#F4F3EF]/80 hover:bg-[#E6B65C]/15 hover:border-[#E6B65C] transition-all rounded-sm font-black group shadow-sm"
                >
                  <span className="group-hover:text-[#E6B65C] transition-colors">{action.label}</span>
                </button>
              ))}
            </div>
          )}

          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-[#2F4F68] border border-[#F4F3EF]/10 p-4 rounded-sm">
                <div className="flex gap-1.5">
                  <span className="w-1.5 h-1.5 bg-[#E6B65C] rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-[#E6B65C] rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 bg-[#E6B65C] rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="p-6 border-t border-[#F4F3EF]/10 bg-[#2F4F68]/40">
          <form 
            onSubmit={(e) => { e.preventDefault(); sendMessage(); }}
            className="flex gap-3"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                if (showQuickActions && e.target.value.length > 0) setShowQuickActions(false);
              }}
              placeholder="Enter secure inquiry..."
              className="flex-1 bg-[#2F4F68] border border-[#F4F3EF]/20 rounded-sm px-4 py-3 text-sm text-[#F4F3EF] placeholder-[#F4F3EF]/20 focus:border-[#E6B65C]/60 outline-none transition-all shadow-inner"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="px-4 py-3 bg-[#E6B65C] text-[#2F4F68] rounded-sm hover:bg-[#F4F3EF] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
            >
              <svg className="w-5 h-5 font-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </form>
          <div className="flex items-center justify-between mt-4 px-1">
            <p className="text-[8px] text-[#F4F3EF]/20 uppercase tracking-[0.4em] font-black">
              AES-256 Encrypted Session
            </p>
            <button 
              onClick={() => {
                setMessages([{ role: 'model', text: "Session reset. How may I best support your firm's growth objectives today?" }]);
                setShowQuickActions(true);
              }}
              className="text-[8px] text-[#E6B65C] uppercase tracking-[0.4em] hover:text-[#F4F3EF] transition-colors font-black"
            >
              Reset Protocol
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatBot;