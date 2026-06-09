import React from 'react';

export default function ProjectCard({ title, description, tags, link }) {
  return (
    <div className="bg-slate-700/40 border border-slate-600/30 rounded-xl p-5 flex flex-col justify-between hover:border-sky-500/40 hover:bg-slate-700/60 transition-all duration-300 group shadow-sm">
      <div>
        {/* Título con efecto hover en el texto */}
        <h3 className="text-white font-bold text-lg mb-2 group-hover:text-sky-400 transition-colors">
          {title}
        </h3>
        <p className="text-slate-300 text-sm leading-relaxed mb-4">
          {description}
        </p>
      </div>

      <div>
        {/* Etiquetas de tecnologías */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {tags.map((tag, idx) => (
            <span key={idx} className="bg-slate-800 text-slate-400 px-2.5 py-0.5 rounded-md text-xs font-mono">
              {tag}
            </span>
          ))}
        </div>

        {/* Enlace simulado al proyecto */}
        {link && (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-sky-400 hover:text-sky-300 text-xs font-semibold inline-flex items-center gap-1 transition-colors"
          >
            Ver repositorio o demo →
          </a>
        )}
      </div>
    </div>
  );
}