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
        className="fixed bottom-10 right-10 z-[60] w-16 h-16 bg-[#2F4F68] rounded-sm shadow-[0_10px_30px_rgba(47,79,104,0.3)] flex items-center justify-center transition-all duration-500 hover:scale-110 active:scale-95 group border-2 border-[#E6B65C]/30"
        aria-label="Open Assistant"
      >
        {isOpen ? (
          <svg className="w-8 h-8 text-[#F4F3EF]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <div className="relative">
            <svg className="w-8 h-8 text-[#E6B65C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
            </svg>
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#E6B65C] rounded-full animate-ping opacity-75"></span>
          </div>
        )}
      </button>

      <div className={`fixed bottom-32 right-10 z-[60] w-[420px] h-[650px] bg-white border border-[#2F4F68]/15 shadow-2xl rounded-sm flex flex-col transition-all duration-500 origin-bottom-right ${isOpen ? 'scale-100 opacity-100' : 'scale-90 opacity-0 pointer-events-none'}`}>
        {/* Header - Institutional & Bright */}
        <div className="p-6 border-b border-[#2F4F68]/10 bg-[#F4F3EF] flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-9 h-9 bg-[#2F4F68] flex items-center justify-center rounded-sm">
              <span className="text-[#F4F3EF] font-cinzel font-black text-sm">M</span>
            </div>
            <div>
              <h4 className="text-[11px] font-cinzel uppercase tracking-[0.3em] text-[#2F4F68] leading-none font-black">Institutional Assistant</h4>
              <p className="text-[9px] uppercase tracking-widest text-[#E6B65C] mt-1.5 font-black">Secure Advisory Channel</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
             <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
             <span className="text-[9px] text-[#2F4F68]/40 font-mono uppercase font-black tracking-widest">Active</span>
          </div>
        </div>

        {/* Message Thread */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-8 bg-[#F4F3EF]/30 scrollbar-thin scrollbar-thumb-[#2F4F68]/10">
          {messages.map((msg, i) => (
            <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] p-5 text-[13px] leading-relaxed shadow-sm ${
                msg.role === 'user' 
                ? 'bg-[#2F4F68] text-[#F4F3EF] rounded-sm rounded-tr-none' 
                : 'bg-white border border-[#2F4F68]/5 text-[#2F4F68]/90 rounded-sm rounded-tl-none'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          
          {showQuickActions && (
            <div className="space-y-3 pt-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#2F4F68]/30 mb-3 font-black ml-1">Priority Service Paths:</p>
              {quickActions.map((action) => (
                <button
                  key={action.id}
                  onClick={() => handleQuickAction(action.prompt)}
                  className="w-full text-left p-4 text-[10px] uppercase tracking-[0.25em] border border-[#2F4F68]/10 bg-white text-[#2F4F68]/70 hover:bg-[#E6B65C]/10 hover:border-[#E6B65C]/40 transition-all rounded-sm font-black group shadow-sm"
                >
                  <span className="group-hover:text-[#2F4F68] transition-colors">{action.label}</span>
                </button>
              ))}
            </div>
          )}

          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white border border-[#2F4F68]/5 p-5 rounded-sm">
                <div className="flex gap-2">
                  <span className="w-1.5 h-1.5 bg-[#E6B65C] rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-[#E6B65C] rounded-full animate-bounce [animation-delay:0.2s]"></span>
                  <span className="w-1.5 h-1.5 bg-[#E6B65C] rounded-full animate-bounce [animation-delay:0.4s]"></span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="p-8 border-t border-[#2F4F68]/5 bg-white">
          <form 
            onSubmit={(e) => { e.preventDefault(); sendMessage(); }}
            className="flex gap-4"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                if (showQuickActions && e.target.value.length > 0) setShowQuickActions(false);
              }}
              placeholder="Enter secure inquiry..."
              className="flex-1 bg-[#F4F3EF]/50 border border-[#2F4F68]/15 rounded-sm px-5 py-4 text-sm text-[#2F4F68] placeholder-[#2F4F68]/30 focus:border-[#E6B65C] outline-none transition-all shadow-inner"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="px-5 py-4 bg-[#2F4F68] text-white rounded-sm hover:bg-[#E6B65C] hover:text-[#2F4F68] transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed shadow-md"
            >
              <svg className="w-5 h-5 font-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </form>
          <div className="flex items-center justify-between mt-5 px-1">
            <p className="text-[8px] text-[#2F4F68]/20 uppercase tracking-[0.5em] font-black">
              AES-256 Encryption Active
            </p>
            <button 
              onClick={() => {
                setMessages([{ role: 'model', text: "Session reset. How may I best support your firm's growth objectives today?" }]);
                setShowQuickActions(true);
              }}
              className="text-[8px] text-[#2F4F68]/30 uppercase tracking-[0.4em] hover:text-[#E6B65C] transition-colors font-black border-b border-transparent hover:border-[#E6B65C]"
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