import React, { useState } from 'react';

export default function ExperienceCard({ role, company, period, tasks }) {
  // Creamos un estado interno para saber si esta tarjeta específica está abierta o cerrada
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative pl-6 border-l-2 border-slate-700 last:pb-0 pb-8">
      {/* El puntito decorativo de la línea de tiempo */}
      <div className="absolute -left-[7px] top-1.5 w-3 h-3 bg-sky-500 rounded-full shadow-[0_0_8px_rgba(56,189,248,0.5)]"></div>
      
      {/* Encabezado de la tarjeta: Ahora es un BOTÓN para que sea cliqueable */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-full text-left focus:outline-none group flex flex-col gap-1 dynamic-header"
      >
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline w-full gap-1">
          {/* El título cambia a color azul al pasar el cursor (hover) para indicar que es cliqueable */}
          <h3 className="text-lg font-bold text-white tracking-tight group-hover:text-sky-400 transition-colors flex items-center gap-2">
            {role}
            {/* Un pequeño indicador visual (flecha) que rota según el estado */}
            <span className={`inline-block text-xs text-sky-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </h3>
          <span className="text-sky-400 font-mono text-xs font-semibold bg-sky-500/10 px-2.5 py-1 rounded-md self-start sm:self-auto">
            {period}
          </span>
        </div>
        <p className="text-slate-400 text-sm font-medium">{company}</p>
      </button>

      {/* Contenedor animado de la lista de tareas (tasks) */}
      <div 
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0 pointer-events-none'
        }`}
      >
        <div className="overflow-hidden">
          <ul className="list-disc list-inside text-slate-300 text-sm space-y-1.5 ml-1 leading-relaxed">
            {tasks.map((task, index) => (
              <li key={index} className="transition-all">{task}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}