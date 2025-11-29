import React, { useState, useRef, useEffect } from 'react';
import { generateThinkingResponse } from '../services/geminiService';
import { ChatMessage } from '../types';
import { Send, Bot, User, Sparkles, Loader2 } from 'lucide-react';

const AiAssistant: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hola. Soy tu asistente corporativo especializado en Health 4.0 y Regulación de Dispositivos Médicos para BIOBET. Utilizo el modo "Thinking" para análisis profundos sobre BIOSENSE. ¿En qué puedo ayudarte?' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    // Prepare history for API
    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    // Add prompt context regarding the BIOBET/BIOSENSE persona and provided text
    const contextPrompt = `
      Actúa como un experto senior en Health 4.0 e ingeniería biomédica para la empresa BIOBET.
      Contexto del proyecto: BIOSENSE, un Serious Game (SG) para regulación emocional usando biomarcadores (HRV, HR).
      Marco regulatorio: ISO 13485, ISO 14971, FDA Class II.
      
      Pregunta del usuario: ${input}
    `;

    const responseText = await generateThinkingResponse(contextPrompt, history);

    setMessages(prev => [...prev, { role: 'model', text: responseText, isThinking: true }]);
    setLoading(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-140px)] bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
      
      {/* Header */}
      <div className="bg-slate-50 p-4 border-b border-slate-100 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-purple-600" />
          <h2 className="font-bold text-slate-800">Deep Thinking Assistant (BIOBET)</h2>
        </div>
        <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full border border-purple-200">
          Gemini 3 Pro Preview
        </span>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4" ref={scrollRef}>
        {messages.map((msg, idx) => (
          <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`flex gap-3 max-w-[80%] ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
              
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.role === 'user' ? 'bg-pbsv-blue text-white' : 'bg-green-600 text-white'}`}>
                {msg.role === 'user' ? <User className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
              </div>

              <div className={`p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${
                msg.role === 'user' 
                  ? 'bg-pbsv-blue text-white rounded-tr-none' 
                  : 'bg-slate-100 text-slate-800 rounded-tl-none border border-slate-200'
              }`}>
                {msg.isThinking && (
                  <div className="mb-2 text-xs text-purple-600 font-semibold flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Reasoning Chain Applied
                  </div>
                )}
                <div className="whitespace-pre-wrap">{msg.text}</div>
              </div>
            </div>
          </div>
        ))}
        
        {loading && (
          <div className="flex justify-start">
            <div className="flex gap-3 max-w-[80%]">
              <div className="w-8 h-8 rounded-full bg-green-600 text-white flex items-center justify-center">
                 <Bot className="w-5 h-5" />
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-slate-500 text-sm flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                Thinking (Budget: 32k tokens)...
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input Area */}
      <div className="p-4 border-t border-slate-100 bg-white">
        <div className="relative">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Pregunta sobre BIOSENSE, regulaciones o arquitectura técnica..."
            className="w-full pl-4 pr-12 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-pbsv-blue focus:border-pbsv-blue resize-none outline-none text-sm transition-all"
            rows={2}
          />
          <button 
            onClick={handleSend}
            disabled={loading || !input.trim()}
            className="absolute right-2 bottom-2 p-2 bg-pbsv-blue text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
        <p className="text-xs text-center text-slate-400 mt-2">
          BIOBET Corporate Analysis • AI can make mistakes.
        </p>
      </div>

    </div>
  );
};

export default AiAssistant;