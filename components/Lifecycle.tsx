import React from 'react';
import { Rocket, RefreshCw, BarChart, FlaskConical, Factory, Truck, CheckCircle2 } from 'lucide-react';

const Lifecycle: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      
      {/* 1. PBSV Product Pipeline */}
      <section>
        <div className="flex items-center gap-2 mb-6">
          <RefreshCw className="w-6 h-6 text-pbsv-blue" />
          <h2 className="text-xl font-bold text-slate-800">BIOBET Product Pipeline</h2>
        </div>
        
        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
          <p className="text-sm text-slate-500 mb-8 text-center max-w-2xl mx-auto">
            Modelo circular integrado para el ciclo de vida de BIOSENSE, cubriendo desde el desarrollo hasta la vigilancia post-mercado.
          </p>

          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-pbsv-green/20 via-pbsv-blue/20 to-pbsv-green/20 -translate-y-1/2 rounded-full hidden md:block"></div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative z-10">
              {[
                { title: 'R & D', icon: FlaskConical, color: 'text-pbsv-green', border: 'border-pbsv-green' },
                { title: 'Pre-Approval', icon: CheckCircle2, color: 'text-pbsv-green', border: 'border-pbsv-green' },
                { title: 'Scale-Up', icon: BarChart, color: 'text-pbsv-green', border: 'border-pbsv-green' },
                { title: 'Commercial', icon: Factory, color: 'text-pbsv-blue', border: 'border-pbsv-blue' },
                { title: 'Post-Market', icon: Truck, color: 'text-pbsv-blue', border: 'border-pbsv-blue' },
              ].map((step, idx) => (
                <div key={idx} className="flex flex-col items-center group">
                  <div className={`w-16 h-16 rounded-full bg-white border-4 ${step.border} flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                    <step.icon className={`w-8 h-8 ${step.color}`} />
                  </div>
                  <h3 className="mt-4 font-bold text-slate-700 text-center">{step.title}</h3>
                  <div className="mt-2 text-xs text-slate-400 text-center px-2">
                    {idx === 0 && "Investigación BIOSENSE."}
                    {idx === 1 && "Validación regulatoria (MDR)."}
                    {idx === 2 && "Despliegue Técnico."}
                    {idx === 3 && "Lanzamiento Clínico."}
                    {idx === 4 && "Actualizaciones & Soporte."}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2. Lifecycle Phase Definition (Incremental/Iterative) */}
      <section>
        <div className="flex items-center gap-2 mb-6">
          <Rocket className="w-6 h-6 text-purple-600" />
          <h2 className="text-xl font-bold text-slate-800">Ciclo de Vida: Enfoque Incremental</h2>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200">
           <div className="mb-6">
             <h3 className="font-semibold text-slate-700">Definiciones de Fase (Ejemplo Incremental)</h3>
             <p className="text-sm text-slate-500">
               Contraste con enfoque tradicional (Predictivo). El enfoque incremental permite entregas parciales funcionales de BIOSENSE.
             </p>
           </div>

           {/* Flowchart visualization mimicking the PDF slide */}
           <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-8">
              <div className="bg-purple-600 text-white px-6 py-3 rounded-lg font-bold shadow-md">Concepto</div>
              <div className="text-slate-300">➜</div>
              
              <div className="flex flex-col gap-2">
                <div className="bg-purple-500 text-white px-6 py-2 rounded-lg font-semibold text-sm shadow text-center">Plan</div>
                <div className="text-slate-300 text-center">↓</div>
                <div className="bg-purple-500 text-white px-6 py-2 rounded-lg font-semibold text-sm shadow text-center">Diseño</div>
                <div className="text-slate-300 text-center">↓</div>
                <div className="bg-purple-500 text-white px-6 py-2 rounded-lg font-semibold text-sm shadow text-center">Construcción</div>
              </div>

              <div className="text-slate-300 h-24 border-l-2 border-dashed border-slate-200 mx-4"></div>

              <div className="flex flex-col gap-2 mt-8">
                 <div className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold text-sm shadow text-center">Plan</div>
                 <div className="text-slate-300 text-center">↓</div>
                 <div className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold text-sm shadow text-center">Diseño</div>
                 <div className="text-slate-300 text-center">↓</div>
                 <div className="bg-blue-500 text-white px-6 py-2 rounded-lg font-semibold text-sm shadow text-center">Construcción</div>
              </div>

              <div className="text-slate-300 h-24 border-l-2 border-dashed border-slate-200 mx-4"></div>

              <div className="flex flex-col gap-2 mt-16">
                 <div className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold text-sm shadow text-center">Plan</div>
                 <div className="text-slate-300 text-center">↓</div>
                 <div className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold text-sm shadow text-center">Diseño</div>
                 <div className="text-slate-300 text-center">↓</div>
                 <div className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold text-sm shadow text-center">Construcción</div>
                 <div className="text-slate-300 text-center">↓</div>
                 <div className="bg-green-800 text-white px-6 py-3 rounded-lg font-bold shadow-md text-center">CIERRE</div>
              </div>
           </div>
        </div>
      </section>

      {/* 3. TRL Maturity */}
      <section>
        <div className="flex items-center gap-2 mb-6">
          <BarChart className="w-6 h-6 text-orange-500" />
          <h2 className="text-xl font-bold text-slate-800">Madurez Tecnológica (TRL Scale)</h2>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
          <div className="space-y-1">
            {[9, 8, 7, 6, 5, 4, 3, 2, 1].map((lvl) => {
              // Highlight levels 4-6 as per Context ("Development in relevant env")
              const isHighlight = lvl >= 4 && lvl <= 6;
              const widthClass = `w-[${20 + (lvl * 8)}%]`; // Dynamic width visual
              
              return (
                <div key={lvl} className="flex items-center gap-4">
                  <div className="w-12 font-bold text-slate-400 text-right">TRL {lvl}</div>
                  <div 
                    className={`h-10 rounded-r-md flex items-center px-4 text-sm font-medium transition-all hover:pl-6
                      ${isHighlight ? 'bg-orange-500 text-white shadow-lg scale-[1.01]' : 'bg-slate-100 text-slate-600'}
                    `}
                    style={{ width: `${30 + (lvl * 7)}%` }}
                  >
                    {lvl === 9 && "Sistema real probado con éxito (Despliegue)"}
                    {lvl === 8 && "Sistema completo certificado"}
                    {lvl === 7 && "Demostración de prototipo en entorno operativo"}
                    {lvl === 6 && "Tecnología validada en entorno relevante (OBJETIVO ACTUAL)"}
                    {lvl === 5 && "Validación de componentes en entorno relevante"}
                    {lvl === 4 && "Validación en laboratorio"}
                    {lvl === 3 && "Prueba de concepto experimental"}
                    {lvl === 2 && "Formulación tecnológica"}
                    {lvl === 1 && "Principios básicos observados"}
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-6 p-4 bg-orange-50 border border-orange-100 rounded-lg text-sm text-orange-800">
            <strong>Estado BIOSENSE:</strong> El proyecto actual se sitúa en transición de <strong>TRL 4 a TRL 6</strong>. Se están validando los biomarcadores (FC/HRV) y el algoritmo de ML en un entorno relevante (simulación) antes del despliegue clínico real.
          </div>
        </div>
      </section>

    </div>
  );
};

export default Lifecycle;