import React from 'react';
import { FileText, AlertTriangle, CheckCircle, ShieldCheck, ArrowRight } from 'lucide-react';

const Regulatory: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      
      {/* Header - PBSV Context */}
      <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-pbsv-blue">Marco Regulatorio & Cumplimiento</h2>
          <span className="text-xs font-mono bg-slate-100 px-2 py-1 rounded text-slate-500">BIOBET Corp Standard</span>
        </div>
        <p className="text-slate-600">
          El desarrollo de BIOSENSE como "Medical Device" (SaMD) requiere un cumplimiento estricto de normativas (ISO 13485, ISO 14971) y una clasificación adecuada ante la FDA/EMA.
        </p>
      </div>

      {/* 1. Risk Management Process (ISO 14971) */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <AlertTriangle className="w-6 h-6 text-orange-500" />
          <h3 className="text-xl font-bold text-slate-800">Gestión de Riesgos (ISO 14971)</h3>
        </div>

        {/* Process Flow */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 mb-6">
           <h4 className="text-sm font-semibold text-slate-500 uppercase mb-4">Risk Management Process Overview</h4>
           <div className="flex flex-wrap items-center justify-between gap-2">
             {[
               { id: 1, label: 'Risk Analysis' },
               { id: 2, label: 'Risk Evaluation' },
               { id: 3, label: 'Risk Control' },
               { id: 4, label: 'Risk Acceptability' },
               { id: 5, label: 'Review & Report' },
               { id: 6, label: 'Production Info' },
             ].map((step, idx) => (
               <div key={idx} className="flex items-center flex-1 min-w-[120px]">
                 <div className="flex flex-col items-center w-full">
                    <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold text-sm mb-2 shadow-md">
                      {step.id}
                    </div>
                    <span className="text-xs text-center font-medium text-slate-700">{step.label}</span>
                 </div>
                 {idx < 5 && <div className="h-[2px] w-full bg-slate-200 mx-2 hidden md:block"></div>}
               </div>
             ))}
           </div>
        </div>
        
        {/* The Matrix */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 overflow-x-auto">
          <h4 className="text-sm font-semibold text-slate-500 mb-4">Matriz de Evaluación de Riesgos (5x5)</h4>
          <div className="min-w-[600px]">
            <div className="grid grid-cols-6 gap-1 text-center text-xs font-semibold text-slate-700 mb-1">
              <div className="flex items-end justify-center pb-2 text-slate-400">Probabilidad ↓</div>
              <div className="bg-slate-100 p-2 rounded">Negligible</div>
              <div className="bg-slate-100 p-2 rounded">Minor</div>
              <div className="bg-slate-100 p-2 rounded">Serious</div>
              <div className="bg-slate-100 p-2 rounded">Critical</div>
              <div className="bg-slate-100 p-2 rounded">Catastrophic</div>
            </div>

            {/* Matrix Rows */}
            {[
              { label: 'Frequent', vals: ['Low', 'Medium', 'High', 'High', 'High'] },
              { label: 'Probable', vals: ['Low', 'Medium', 'Medium', 'High', 'High'] },
              { label: 'Occasional', vals: ['Low', 'Low', 'Medium', 'Medium', 'High'] },
              { label: 'Remote', vals: ['Low', 'Low', 'Low', 'Medium', 'High'] },
              { label: 'Improbable', vals: ['Low', 'Low', 'Low', 'Low', 'Medium'] },
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-6 gap-1 text-center text-xs text-white h-12 mb-1">
                <div className="bg-slate-50 text-slate-600 font-semibold flex items-center justify-center border border-slate-100 rounded">
                  {row.label}
                </div>
                {row.vals.map((val, j) => {
                  let colorClass = 'bg-green-400'; // Low
                  if (val === 'Medium') colorClass = 'bg-orange-400';
                  if (val === 'High') colorClass = 'bg-red-600';
                  
                  return (
                    <div key={j} className={`${colorClass} flex items-center justify-center font-bold shadow-sm rounded hover:scale-105 transition-transform cursor-help`}>
                      {val}
                    </div>
                  )
                })}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. CE Classification Pyramid */}
      <section>
        <div className="flex items-center gap-2 mb-4">
          <ShieldCheck className="w-6 h-6 text-pbsv-blue" />
          <h3 className="text-xl font-bold text-slate-800">Clasificación CE (MDR EU 2017/745)</h3>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
           {/* Pyramid Visual */}
           <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 flex flex-col items-center justify-end h-full">
              <div className="w-full max-w-md flex flex-col gap-1">
                 {/* Class III */}
                 <div className="w-2/5 mx-auto bg-red-100 border-2 border-red-500 text-red-800 p-2 text-center rounded-t-lg relative group">
                    <span className="font-bold">Class III</span>
                    <span className="block text-[10px]">High Risk (e.g. Pacemakers)</span>
                    <div className="absolute right-full top-1/2 -translate-y-1/2 mr-2 text-xs text-slate-400 hidden group-hover:block whitespace-nowrap">Highest Scrutiny</div>
                 </div>
                 {/* Class IIb */}
                 <div className="w-3/5 mx-auto bg-orange-100 border-2 border-orange-400 text-orange-800 p-2 text-center relative group">
                    <span className="font-bold">Class IIb</span>
                    <span className="block text-[10px]">Med-High Risk</span>
                 </div>
                 {/* Class IIa */}
                 <div className="w-4/5 mx-auto bg-yellow-100 border-2 border-yellow-400 text-yellow-800 p-2 text-center shadow-lg transform scale-105 ring-4 ring-yellow-50 relative">
                    <div className="absolute -left-12 top-1/2 -translate-y-1/2 bg-pbsv-blue text-white text-xs px-2 py-1 rounded">BIOSENSE</div>
                    <span className="font-bold">Class IIa</span>
                    <span className="block text-[10px]">Moderate Risk (Diagnosis/Monitoring)</span>
                 </div>
                 {/* Class I */}
                 <div className="w-full bg-green-100 border-2 border-green-500 text-green-800 p-2 text-center rounded-b-lg">
                    <span className="font-bold">Class I</span>
                    <span className="block text-[10px]">Low Risk (e.g. Bandages)</span>
                 </div>
              </div>
              <p className="mt-6 text-xs text-center text-slate-500 italic">
                La solución propuesta (Serious Games para monitoreo y terapia) se encuadra típicamente como <strong>Software as a Medical Device (SaMD) Clase IIa</strong> bajo MDR.
              </p>
           </div>

           {/* CE Marking Steps */}
           <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
             <h4 className="font-bold text-slate-700 mb-4">7 Steps to CE Marking</h4>
             <ul className="space-y-3">
               {[
                 "Identificar Directivas/Reglamentos aplicables (MDR).",
                 "Determinar la clasificación del dispositivo (Clase IIa).",
                 "Implementar Sistema de Gestión de Calidad (ISO 13485).",
                 "Preparar documentación técnica (Technical File).",
                 "Designar Representante Autorizado (si fuera de la UE).",
                 "Evaluación de Conformidad por Organismo Notificado.",
                 "Declaración de Conformidad y Marcado CE."
               ].map((step, i) => (
                 <li key={i} className="flex items-start gap-3 text-sm text-slate-600">
                   <div className="min-w-[24px] h-6 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center text-xs font-bold mt-0.5">
                     {i + 1}
                   </div>
                   <span>{step}</span>
                 </li>
               ))}
             </ul>
           </div>
        </div>
      </section>

    </div>
  );
};

export default Regulatory;