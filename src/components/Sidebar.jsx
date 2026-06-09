import React from 'react';

export default function Sidebar() {
  const skills = ['React', 'PHP', 'CSS', 'Bootstrap', 'JavaScript', 'Soporte Técnico', 'Mantenimiento Industrial'];

  return (
    <aside className="md:w-1/3 flex flex-col gap-6">
      {/* Tarjeta de Perfil */}
      <section className="bg-slate-800 p-8 rounded-2xl flex flex-col items-center text-center shadow-lg border border-slate-700/50">
        <div className="w-32 h-32 bg-slate-700 rounded-full mb-6 border-4 border-sky-500/30 flex items-center justify-center text-4xl text-slate-400 font-bold">
          AR
        </div>
        <h1 className="text-2xl font-bold text-white mb-2 tracking-tight">Antonio R. Hernández P.</h1>
        <p className="text-sky-400 font-medium">Soporte Técnico IT / Help Desk & Desarrollador Web</p>
      </section>

      {/* Tarjeta de Contacto */}
      <section className="bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-700/50">
        <h2 className="text-sky-400 text-sm font-semibold mb-4 tracking-wider uppercase">Contacto</h2>
        <div className="space-y-3 text-sm text-slate-300">
          <p>📍 Valencia, Carabobo, Venezuela</p>
          <p>📧 Antonio0416511@gmail.com</p>
        </div>
      </section>

      {/* Tarjeta de Habilidades */}
      <section className="bg-slate-800 p-6 rounded-2xl shadow-lg border border-slate-700/50">
        <h2 className="text-sky-400 text-sm font-semibold mb-4 tracking-wider uppercase">Habilidades</h2>
        <div className="flex flex-wrap gap-2">
          {skills.map(skill => (
            <span key={skill} className="bg-slate-700/60 text-slate-200 px-3 py-1.5 rounded-xl text-xs font-medium border border-slate-600/40">
              {skill}
            </span>
          ))}
        </div>
      </section>
    </aside>
  );
}