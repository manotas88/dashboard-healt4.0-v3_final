import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Health40 from './components/Health40';
import Regulatory from './components/Regulatory';
import Lifecycle from './components/Lifecycle';
import AiAssistant from './components/AiAssistant';
import { View } from './types';
import { Download } from 'lucide-react';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.DASHBOARD);

  const handlePrint = () => {
    window.print();
  };

  const renderContent = () => {
    switch (currentView) {
      case View.DASHBOARD:
        return <Dashboard />;
      case View.HEALTH_40:
        return <Health40 />;
      case View.LIFECYCLE:
        return <Lifecycle />;
      case View.REGULATORY:
        return <Regulatory />;
      case View.AI_ASSISTANT:
        return <AiAssistant />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar currentView={currentView} setCurrentView={setCurrentView} />
      
      <main className="pl-64 transition-all duration-300">
        {/* Top Bar */}
        <header className="bg-white/80 backdrop-blur-md sticky top-0 z-40 border-b border-slate-200 px-8 py-4 flex justify-between items-center no-print">
          <div>
            <h1 className="text-xl font-bold text-slate-800">
              {currentView === View.DASHBOARD && "Panel Corporativo: BIOSENSE"}
              {currentView === View.HEALTH_40 && "Tecnologías Health 4.0"}
              {currentView === View.LIFECYCLE && "Ciclo de Vida del Producto"}
              {currentView === View.REGULATORY && "Gestión de Riesgos & Calidad"}
              {currentView === View.AI_ASSISTANT && "Asistente Corporativo"}
            </h1>
            <p className="text-xs text-slate-500">BIOBET Corp • BIOSENSE Platform</p>
          </div>
          <div className="flex items-center gap-3">
             <button 
               onClick={handlePrint}
               className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-white rounded-lg text-sm font-medium hover:bg-slate-700 transition-colors shadow-sm"
             >
               <Download className="w-4 h-4" />
               Descargar Reporte PDF
             </button>
             <div className="h-8 w-8 rounded-full bg-slate-200 overflow-hidden border border-slate-300">
               <img src="https://picsum.photos/100/100" alt="Profile" className="h-full w-full object-cover" />
             </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="p-8 max-w-7xl mx-auto">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default App;