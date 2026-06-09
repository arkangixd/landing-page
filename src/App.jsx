import React from 'react';
import Sidebar from './components/Sidebar';
import ExperienceCard from './components/ExperienceCard';
import ProjectCard from './components/ProjectCard'; // 1. Importamos el nuevo componente

function App() {
  const laboralExperience = [
    {
      role: "Desarrollador Web & Soporte IT",
      company: "Proyecto Independiente",
      period: "2025 — Presente",
      tasks: [
        "Desarrollo integral de software CRM para la gestión de reservas, implementando tecnologías web (PHP, JavaScript, React, HTML/CSS) y garantizando la fluidez de la interfaz.",
        "Estructuración de bases de datos (SQL) e integración de validaciones de información mediante APIs REST/JSON.",
        "Creación de scripts para automatizar procesos operativos y análisis de requerimientos técnicos."
      ]
    },
    {
      role: "Técnico de Soporte Electrónico / IT",
      company: "Atosystem",
      period: "Jun 2023 – Jun 2024",
      tasks: [
        "Soporte técnico de primer nivel para la resolución de incidencias y diagnóstico de fallos en hardware de alto rendimientoesarrollo integral de software CRM para la gestión de reservas, implementando tecnologías web (PHP, JavaScript, React, HTML/CSS) y garantizando la fluidez de la interfaz.",
        "Supervisión de estabilidad operativa e ingreso a servidores, minimizando el downtime mediante el monitoreo constante de sistemas críticos.",
        "Elaboración de diagnósticos precisos y seguimiento de incidencias (bugs), asegurando la operatividad de los equipos de clientes"
      ]
    },
    {
      role: "Analista de Inventarios y Control Logístico",
      company: "Manserlimp",
      period: "Oct 2024 – Actualidad",
      tasks: [
        "Gestión y trazabilidad logística de activos físicos, garantizando el cumplimiento de los procesos de negocio y procedimientos internos.",
        "Generación de reportes y estructuración de datos operativos (reporting) para el controldel stock físico y digital.",
        "Interacción constante con proveedores y operarios, aplicando excelentes habilidades de comunicación y atención al detalle."
      ]
    }
  ];

  const education = [
    {
      role: "Ingeniería en Computación",
      company: "Universidad",
      period: "En curso",
      tasks: [
        "Desarrollo de lógica de programación y algoritmos.",
        "Especialización autónoma en desarrollo web frontend (React, CSS) y backend (PHP)."
      ]
    }
  ];

  // 2. Definimos tus proyectos de desarrollo web
  const projects = [
    {
      title: "Portafolio Web Profesional",
      description: "Diseño y desarrollo de este sitio web responsive para la presentación del perfil profesional, CV y proyectos personales.",
      tags: ["React", "Tailwind CSS", "Vite", "JSX"],
      link: "https://github.com/arkangixd?tab=repositories"
    },
    {
      title: "Sistema de Control Interno",
      description: "Aplicación web de práctica enfocada en la gestión de registros, manejo de bases de datos y lógica del lado del servidor.",
      tags: ["PHP", "Bootstrap", "MySQL", "CSS"],
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 antialiased selection:bg-sky-500/30">
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-16 flex flex-col md:flex-row gap-8">
        
        {/* Columna Izquierda */}
        <Sidebar />

        {/* Columna Derecha (Contenido Principal) */}
        <main className="flex-1 flex flex-col gap-8">
          
          {/* Sección de Experiencia */}
          <section className="bg-slate-800 p-6 md:p-8 rounded-2xl shadow-lg border border-slate-700/50">
            <h2 className="text-white text-xl font-bold mb-8 tracking-wide flex items-center gap-2">
              💼 Experiencia Profesional
            </h2>
            <div className="flex flex-col">
              {laboralExperience.map((exp, idx) => (
                <ExperienceCard key={idx} {...exp} />
              ))}
            </div>
          </section>

          {/* Sección de Educación */}
          <section className="bg-slate-800 p-6 md:p-8 rounded-2xl shadow-lg border border-slate-700/50">
            <h2 className="text-white text-xl font-bold mb-8 tracking-wide flex items-center gap-2">
              🎓 Formación Académica
            </h2>
            <div className="flex flex-col">
              {education.map((edu, idx) => (
                <ExperienceCard key={idx} {...edu} />
              ))}
            </div>
          </section>

          {/* 3. NUEVA SECCIÓN: Proyectos */}
          <section className="bg-slate-800 p-6 md:p-8 rounded-2xl shadow-lg border border-slate-700/50">
            <h2 className="text-white text-xl font-bold mb-6 tracking-wide flex items-center gap-2">
              🚀 Proyectos Destacados
            </h2>
            
            {/* Grid responsive de Tailwind: 1 columna en móvil, 2 en pantallas medianas/grandes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {projects.map((project, idx) => (
                <ProjectCard key={idx} {...project} />
              ))}
            </div>
          </section>

        </main>
      </div>
    </div>
  );
}

export default App;