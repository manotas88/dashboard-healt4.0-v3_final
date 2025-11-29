import React from 'react';
import { 
  Wifi, Cloud, Shield, Database, 
  BarChart3, Binary, HeartPulse, Lock
} from 'lucide-react';

const technologies = [
  {
    title: "Internet of Things (IoT)",
    desc: "Integración fundamental con Smartwatch y Wearables para la captura en tiempo real de Frecuencia Cardíaca (FC) y Tasa Respiratoria (BR).",
    icon: <Wifi className="w-8 h-8 text-green-500" />,
    bg: "bg-green-50",
    border: "border-green-200",
    relevance: "Alta: Fuente de datos primaria"
  },
  {
    title: "Signal Processing",
    desc: "Análisis de bioseñales 1D. Transformación de datos crudos (PPG) en métricas de Variabilidad Cardíaca (HRV) y Ratio LF/HF para el Biofeedback.",
    icon: <BarChart3 className="w-8 h-8 text-indigo-500" />,
    bg: "bg-indigo-50",
    border: "border-indigo-200",
    relevance: "Alta: Motor del Biofeedback"
  },
  {
    title: "Artificial Intelligence (AI)",
    desc: "Algoritmos de Machine Learning que detectan picos de estrés (SNS activo) y ajustan dinámicamente la dificultad del juego para mantener el estado de 'Flow'.",
    icon: <Binary className="w-8 h-8 text-blue-500" />,
    bg: "bg-blue-50",
    border: "border-blue-200",
    relevance: "Media-Alta: Personalización"
  },
  {
    title: "Cyber Security",
    desc: "Protección de datos biométricos sensibles y cumplimiento de normativas (GDPR/HIPAA) en la transmisión Smartwatch → App → Nube.",
    icon: <Shield className="w-8 h-8 text-red-500" />,
    bg: "bg-red-50",
    border: "border-red-200",
    relevance: "Crítica: Privacidad del Paciente"
  },
  {
    title: "Cloud Computing",
    desc: "Infraestructura escalable (Backend Node.js) para almacenar historiales de sesiones terapéuticas y permitir el acceso remoto al terapeuta.",
    icon: <Cloud className="w-8 h-8 text-sky-500" />,
    bg: "bg-sky-50",
    border: "border-sky-200",
    relevance: "Media: Persistencia de datos"
  },
  {
    title: "Big Data Analytics",
    desc: "Análisis de tendencias a largo plazo de la eficacia de la regulación emocional en la población de pacientes para mejorar los protocolos clínicos.",
    icon: <Database className="w-8 h-8 text-teal-500" />,
    bg: "bg-teal-50",
    border: "border-teal-200",
    relevance: "Media: Mejora continua"
  }
];

const Health40: React.FC = () => {
  return (
    <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      
      {/* Header based on PDF "Health 4.0 as a combination of..." */}
      <div className="bg-gradient-to-r from-pbsv-blue to-blue-600 rounded-xl p-8 text-white relative overflow-hidden">
        <div className="relative z-10">
          <h2 className="text-3xl font-bold mb-2">Health 4.0: Arquitectura BIOSENSE</h2>
          <p className="text-blue-100 max-w-3xl text-lg">
            Tecnologías habilitadoras seleccionadas específicamente para el <strong>Serious Game de Regulación Emocional (BIOSENSE)</strong>.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/30">
            <HeartPulse className="w-5 h-5 text-green-300" />
            <span className="font-mono text-sm">Enfoque: Biofeedback & Regulación Vagal</span>
          </div>
        </div>
        {/* Abstract background decorative circles */}
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 bg-white opacity-10 rounded-full blur-2xl"></div>
      </div>

      {/* The Relevant Technologies Grid */}
      <div>
        <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
          <span className="bg-pbsv-green text-white text-xs px-2 py-1 rounded">Stack BIOSENSE</span>
          Tecnologías Habilitadoras
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, idx) => (
            <div 
              key={idx} 
              className={`p-6 rounded-xl border ${tech.border} ${tech.bg} hover:shadow-lg transition-all duration-300 cursor-default group flex flex-col`}
            >
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold text-slate-800 text-lg group-hover:text-pbsv-blue transition-colors">{tech.title}</h4>
                <div className="bg-white p-2 rounded-full shadow-sm group-hover:scale-110 transition-transform">
                  {tech.icon}
                </div>
              </div>
              
              <div className="mb-4 flex-grow">
                <p className="text-sm text-slate-600 leading-relaxed">
                  {tech.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/50">
                <span className="text-xs font-semibold text-slate-500 bg-white/50 px-2 py-1 rounded border border-slate-200/50">
                  {tech.relevance}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Integration Flow Detail */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm mt-8">
        <h3 className="font-bold text-lg mb-6 text-slate-800 flex items-center gap-2">
          <Lock className="w-5 h-5 text-slate-400" />
          Flujo de Datos Seguro (Privacy by Design)
        </h3>
        <div className="relative">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-100 -translate-y-1/2 z-0 hidden md:block"></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative z-10">
             
             <div className="bg-white p-4 border border-green-200 rounded-lg shadow-sm text-center">
               <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-2 font-bold">1</div>
               <p className="font-bold text-slate-700 text-sm">Smartwatch</p>
               <p className="text-xs text-slate-500">Captura RAW (FC, Movimiento)</p>
             </div>

             <div className="bg-white p-4 border border-indigo-200 rounded-lg shadow-sm text-center">
               <div className="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-2 font-bold">2</div>
               <p className="font-bold text-slate-700 text-sm">App (Edge)</p>
               <p className="text-xs text-slate-500">Procesamiento de Señal (HRV) & Encriptación</p>
             </div>

             <div className="bg-white p-4 border border-blue-200 rounded-lg shadow-sm text-center">
               <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-2 font-bold">3</div>
               <p className="font-bold text-slate-700 text-sm">AI Engine</p>
               <p className="text-xs text-slate-500">Feedback BIOSENSE (Ajuste Dificultad)</p>
             </div>

             <div className="bg-white p-4 border border-sky-200 rounded-lg shadow-sm text-center">
               <div className="w-8 h-8 bg-sky-100 text-sky-600 rounded-full flex items-center justify-center mx-auto mb-2 font-bold">4</div>
               <p className="font-bold text-slate-700 text-sm">Cloud DB</p>
               <p className="text-xs text-slate-500">Almacenamiento Seguro (Historial)</p>
             </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default Health40;