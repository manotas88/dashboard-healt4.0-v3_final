import React from 'react';
import { View } from '../types';
import { LayoutDashboard, Network, Scale, BrainCircuit, Workflow } from 'lucide-react';

interface SidebarProps {
  currentView: View;
  setCurrentView: (view: View) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, setCurrentView }) => {
  
  const menuItems = [
    { id: View.DASHBOARD, label: 'Scientific Dashboard', icon: LayoutDashboard },
    { id: View.HEALTH_40, label: 'Health 4.0 Tech', icon: Network },
    { id: View.LIFECYCLE, label: 'Ciclo de Vida & Pipeline', icon: Workflow },
    { id: View.REGULATORY, label: 'Regulatory & Risk', icon: Scale },
    { id: View.AI_ASSISTANT, label: 'AI Thinking Mode', icon: BrainCircuit },
  ];

  return (
    <div className="w-64 bg-white border-r border-slate-200 h-screen flex flex-col fixed left-0 top-0 z-50 no-print">
      
      {/* Brand Logo Area */}
      <div className="p-6 border-b border-slate-100 flex flex-col items-center justify-center relative overflow-hidden">
        {/* Logo Recreation based on Image */}
        <div className="relative w-full h-16 flex items-center justify-center">
          
          {/* Swoosh SVG */}
          <svg className="absolute top-0 left-0 w-full h-full pointer-events-none" viewBox="0 0 200 80">
            <defs>
              <linearGradient id="swooshGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0044cc" stopOpacity="1" />
                <stop offset="100%" stopColor="#00aaff" stopOpacity="0" />
              </linearGradient>
            </defs>
            {/* Arched swoosh starting from behind Bi over to the right */}
            <path 
              d="M 60,45 Q 110,-10 190,45" 
              fill="none" 
              stroke="url(#swooshGradient)" 
              strokeWidth="6" 
              strokeLinecap="round"
              style={{ filter: 'drop-shadow(0px 2px 3px rgba(0,0,0,0.2))' }}
            />
          </svg>

          {/* Text and Star Container */}
          <div className="relative z-10 flex items-center font-sans">
            <span className="text-5xl font-semibold text-black tracking-tight">Bi</span>
            
            {/* Star Icon */}
            <div className="relative mx-1 w-12 h-12 flex items-center justify-center -mt-2">
               {/* Glow */}
               <div className="absolute inset-0 bg-blue-500 blur-lg opacity-30 rounded-full"></div>
               <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-md">
                 <defs>
                   <linearGradient id="starGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                     <stop offset="0%" stopColor="#0044cc" />
                     <stop offset="50%" stopColor="#2563eb" />
                     <stop offset="100%" stopColor="#60a5fa" />
                   </linearGradient>
                 </defs>
                 {/* 4 Point Star */}
                 <path d="M50 0 L65 35 L100 50 L65 65 L50 100 L35 65 L0 50 L35 35 Z" fill="url(#starGrad)" stroke="white" strokeWidth="2" />
                 {/* Inner light */}
                 <path d="M50 20 L55 45 L80 50 L55 55 L50 80 L45 55 L20 50 L45 45 Z" fill="white" opacity="0.4" />
               </svg>
            </div>

            <span className="text-5xl font-semibold text-black tracking-tight">Bet</span>
          </div>
        </div>
        
        <p className="text-[10px] text-slate-400 uppercase tracking-widest font-semibold mt-2">Corporate Platform</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-2 mt-4">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => setCurrentView(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                isActive 
                  ? 'bg-blue-700 text-white shadow-md shadow-blue-100' 
                  : 'text-slate-600 hover:bg-slate-50 hover:text-blue-700'
              }`}
            >
              <Icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-slate-400'}`} />
              {item.label}
            </button>
          )
        })}
      </nav>

      {/* Corporate Info */}
      <div className="p-4 border-t border-slate-100">
        <div className="bg-slate-50 p-3 rounded-lg border border-slate-200">
          <p className="text-xs font-bold text-slate-700">BIOBET Corp.</p>
          <p className="text-[10px] text-slate-500">Proyecto BIOSENSE</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;