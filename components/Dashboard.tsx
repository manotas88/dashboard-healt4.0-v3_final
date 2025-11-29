import React from 'react';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  AreaChart, Area 
} from 'recharts';
import { Activity, Zap, Heart, Brain, Clock, ShieldCheck, UserCheck } from 'lucide-react';

const bioData = [
  { time: '00:00', hr: 72, hrv: 45, stress: 20 },
  { time: '05:00', hr: 75, hrv: 42, stress: 35 },
  { time: '10:00', hr: 85, hrv: 30, stress: 65 }, // Stress event
  { time: '15:00', hr: 92, hrv: 25, stress: 80 }, // Peak stress
  { time: '20:00', hr: 78, hrv: 38, stress: 40 }, // Recovery start
  { time: '25:00', hr: 70, hrv: 50, stress: 25 }, // Post-SG effect
  { time: '30:00', hr: 68, hrv: 55, stress: 15 },
];

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      
      {/* Introduction */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Análisis Científico Unificado: BIOSENSE</h2>
        <p className="text-slate-600">
          Este informe técnico consolida la arquitectura de <strong>BIOBET</strong> para la plataforma <strong>BIOSENSE</strong>.
          Se integra el rendimiento del sistema de autenticación con una estrategia avanzada de biomarcadores fisiológicos para Serious Games (SG), asegurando el cumplimiento regulatorio y la eficiencia terapéutica.
        </p>
      </div>

      {/* Part 1: Login & Architecture */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <ShieldCheck className="w-6 h-6 text-pbsv-green" />
          <h3 className="text-xl font-bold text-slate-800">I. Autenticación Óptima y UX (Prevención de Fatiga Digital)</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-pbsv-green">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-slate-500 font-semibold">Rendimiento (PageSpeed)</p>
                <p className="text-3xl font-bold text-slate-900">100/100</p>
              </div>
              <Zap className="text-yellow-500 w-5 h-5" />
            </div>
            <p className="text-xs text-slate-500 mt-2">FCP 0.4s • Speed Index 0.8s</p>
            <p className="text-xs text-slate-400 mt-1">Minimiza carga cognitiva del terapeuta.</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-blue-500">
             <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-slate-500 font-semibold">Accesibilidad</p>
                <p className="text-3xl font-bold text-slate-900">95/100</p>
              </div>
              <UserCheck className="text-blue-500 w-5 h-5" />
            </div>
             <p className="text-xs text-slate-500 mt-2">WCAG 2.1 Compliant</p>
             <p className="text-xs text-slate-400 mt-1">Previene errores operativos.</p>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-purple-500">
             <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-slate-500 font-semibold">Estabilidad Visual</p>
                <p className="text-3xl font-bold text-slate-900">Óptimo</p>
              </div>
              <Activity className="text-purple-500 w-5 h-5" />
            </div>
             <p className="text-xs text-slate-500 mt-2">Responsive: Tablet, Laptop, HD</p>
             <p className="text-xs text-slate-400 mt-1">Consistencia en entorno clínico.</p>
          </div>
        </div>
      </section>

      {/* Part 2: Serious Games Solution */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <Brain className="w-6 h-6 text-pbsv-blue" />
          <h3 className="text-xl font-bold text-slate-800">II. Solución BIOSENSE: Regulación Emocional</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Chart Panel */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
            <h4 className="font-semibold text-slate-700 mb-4 flex items-center gap-2">
              <Heart className="w-4 h-4 text-red-500" />
              Simulación BIOSENSE: Respuesta Fisiológica
            </h4>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={bioData}>
                  <defs>
                    <linearGradient id="colorHr" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#ef4444" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                    </linearGradient>
                    <linearGradient id="colorHrv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1}/>
                      <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="time" stroke="#94a3b8" fontSize={12} />
                  <YAxis stroke="#94a3b8" fontSize={12} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0' }}
                  />
                  <Area type="monotone" dataKey="hr" stroke="#ef4444" fillOpacity={1} fill="url(#colorHr)" name="FC (bpm)" strokeWidth={2} />
                  <Area type="monotone" dataKey="hrv" stroke="#3b82f6" fillOpacity={1} fill="url(#colorHrv)" name="HRV (ms)" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
            <p className="text-xs text-slate-500 mt-2 text-center italic">
              Fig 1. Efectividad de BIOSENSE: Disminución sostenida de FC y aumento de HRV (Regulación Vagal) tras 20 min de sesión.
            </p>
          </div>

          {/* Metrics Table */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100 flex flex-col justify-between">
            <div>
              <h4 className="font-semibold text-slate-700 mb-4">Biomarcadores & Mecánicas BIOSENSE</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs text-slate-500 uppercase bg-slate-50">
                    <tr>
                      <th className="px-3 py-2">Biomarcador</th>
                      <th className="px-3 py-2">Respuesta Estrés</th>
                      <th className="px-3 py-2">Mecánica de Juego</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <tr>
                      <td className="px-3 py-3 font-medium text-slate-900">Frecuencia Cardíaca (FC)</td>
                      <td className="px-3 py-3 text-red-600">Aumento abrupto (SNS)</td>
                      <td className="px-3 py-3 text-slate-600">Penalización/Reto si no hay recuperación.</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 font-medium text-slate-900">Ratio LF/HF</td>
                      <td className="px-3 py-3 text-red-600">Aumento (Dominancia Simpática)</td>
                      <td className="px-3 py-3 text-slate-600">Recompensa por respiración diafragmática.</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-3 font-medium text-slate-900">SDNN / RMSSD</td>
                      <td className="px-3 py-3 text-red-600">Reducción (Baja adaptabilidad)</td>
                      <td className="px-3 py-3 text-slate-600">Desbloqueo de niveles 'Flow'.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <div className="mt-4 bg-blue-50 p-3 rounded-lg border border-blue-100">
               <div className="flex items-start gap-2">
                 <Clock className="w-4 h-4 text-blue-600 mt-1" />
                 <p className="text-xs text-blue-800">
                   <strong>Protocolo Clínico:</strong> Sesiones de 30 minutos. El motor de IA de BIOSENSE detecta picos de ansiedad (↑ HR, ↑ BR) ajustando el entorno virtual en tiempo real.
                 </p>
               </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Dashboard;