import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Download, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from './data/projects';
import patriciaImg from './assets/PatriciaHiguera.png';
import myCV_ES from './assets/Patricia_Higuera_CV_ES.pdf';
import myCV_EN from './assets/Patricia_Higuera_CV_EN.pdf';

// Diccionario de traducciones para la interfaz
const translations = {
  es: {
    heroTitle: "Full Stack Developer & Accessibility Specialist",
    heroDesc: "Especialista en Frontend con enfoque en UX/UI y cumplimiento de normativas WCAG/ADA. Transformo problemas de negocio en experiencias digitales inclusivas y escalables.",
    filterAll: "Todos",
    btnCV: "Descargar CV",
    viewProject: "Ver Detalles",
    modalHeaders: {
      analysis: "Planteamiento del Problema y Alineación Estratégica",
      process: "Implementación Técnica y Flujo de Trabajo",
      conclusion: "Impacto y Entregables Clave"
    },
    links: { demo: "Ver Demo", code: "Repositorio" }
  },
  en: {
    heroTitle: "Full Stack Developer & Accessibility Specialist",
    heroDesc: "Frontend specialist focused on UX/UI and WCAG/ADA compliance. I transform business problems into inclusive, scalable digital experiences.",
    filterAll: "All",
    btnCV: "Download CV",
    viewProject: "View Details",
    modalHeaders: {
      analysis: "Problem Statement & Strategic Alignment",
      process: "Technical Implementation & Workflow",
      conclusion: "Impact & Key Deliverables"
    },
    links: { demo: "Visit Demo", code: "GitHub Repository" }
  }
};

const App = () => {
  const [lang, setLang] = useState('es'); // Estado de idioma
  const [filter, setFilter] = useState('Todos');
  const [selectedProject, setSelectedProject] = useState(null);
  const t = translations[lang];

  // Filtrado de proyectos basado en categoría senior
  const filteredProjects = projects.filter(p => 
    filter === 'Todos' || filter === 'All' || p.category === filter
  );

  return (
    <div className="bg-brand-cream text-brand-plum font-sans selection:bg-brand-coral selection:text-white min-h-screen">
      
      {/* Selector de Idioma Flotante */}
      <nav className="fixed top-6 right-6 z-50 flex gap-2">
        <button 
          onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
          className="bg-brand-plum text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-brand-coral transition-colors shadow-lg"
        >
          <Globe size={18} />
          {lang === 'es' ? 'EN' : 'ES'}
        </button>
      </nav>

      {/* Hero Section */}
      <header className="container mx-auto px-6 pt-24 pb-12 text-center">
        <motion.img 
          src={patriciaImg} 
          className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-brand-coral"
          initial={{ scale: 0 }} animate={{ scale: 1 }}
        />
        <h1 className="text-4xl md:text-6xl font-bold mb-4">{t.heroTitle}</h1>
        <p className="max-w-2xl mx-auto text-lg mb-8 opacity-80">{t.heroDesc}</p>
        <a 
          href={lang === 'es' ? myCV_ES : myCV_EN} 
          download 
          className="inline-flex items-center gap-2 bg-brand-plum text-white px-8 py-3 rounded-lg hover:bg-brand-coral transition-all"
        >
          <Download size={20} /> {t.btnCV}
        </a>
      </header>

      {/* Grid de Proyectos */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div 
              key={project.id}
              layout
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow cursor-pointer border border-brand-plum/10"
              onClick={() => setSelectedProject(project)}
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <span className="text-xs font-bold uppercase tracking-widest text-brand-coral">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold mt-2">{project.title}</h3>
                <p className="mt-2 opacity-70 line-clamp-2">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modal Detallado con Lógica de Galería y Traducción */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[4] bg-brand-plum/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
              initial={{ y: 50 }} animate={{ y: 0 }}
            >
              <div className="sticky top-0 bg-white p-6 border-b flex justify-between items-center">
                <h2 className="text-3xl font-bold">{selectedProject.title}</h2>
                <button onClick={() => setSelectedProject(null)}><X /></button>
              </div>

              <div className="p-8 space-y-8">
                {/* Análisis (The Why) */}
                <div>
                  <h4 className="text-brand-coral font-bold uppercase text-sm tracking-widest mb-2">{t.modalHeaders.analysis}</h4>
                  <p className="text-lg leading-relaxed">{selectedProject.details.analysis}</p>
                </div>

                {/* Proceso y Galería Multiformato */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-brand-coral font-bold uppercase text-sm tracking-widest mb-4">{t.modalHeaders.process}</h4>
                    <ul className="space-y-4">
                      {selectedProject.details.process.map((step, i) => (
                        <li key={i} className="flex gap-3 text-sm opacity-90 italic">
                          <span className="text-brand-coral font-bold">•</span> {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Galería con Soporte YouTube y BEM Names */}
                  <div className="grid grid-cols-1 gap-4">
                    {selectedProject.gallery.map((item, i) => (
                      <div key={i} className="rounded-lg overflow-hidden border">
                        {item.type === 'video' ? (
                          <iframe 
                            src={item.src} 
                            className="w-full aspect-video" 
                            title={item.alt}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                          />
                        ) : (
                          <img src={item.src} alt={item.alt} className="w-full h-auto" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Conclusión (The Result) */}
                <div className="bg-brand-cream p-6 rounded-xl border-l-4 border-brand-coral">
                  <h4 className="text-brand-coral font-bold uppercase text-sm tracking-widest mb-2">{t.modalHeaders.conclusion}</h4>
                  <p className="font-medium">{selectedProject.details.conclusion}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;