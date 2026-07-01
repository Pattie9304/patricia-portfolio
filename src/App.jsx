import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Download, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from './data/projects';
import patriciaImg from './assets/PatriciaHiguera.png';
import myCV_ES from './assets/Patricia_Higuera_CV_ES.pdf';
import myCV_EN from './assets/Patricia_Higuera_CV_EN.pdf';

const translations = {
  es: {
    heroTitle: "Full Stack Web Developer | Accessibility Specialist",
    heroDesc: "Especialista en Frontend con enfoque en UX/UI y cumplimiento de normativas WCAG/ADA. Transformo problemas de negocio en experiencias digitales inclusivas y de alto rendimiento.",
    filterAll: "Todos",
    btnCV: "Descargar CV",
    viewDetails: "Ver Detalles",
    modalHeaders: {
      problem: "Planteamiento del Problema",
      tech: "Implementación Técnica",
      impact: "Impacto y Entregables"
    }
  },
  en: {
    heroTitle: "Full Stack Web Developer | Accessibility Specialist",
    heroDesc: "Frontend specialist focused on UX/UI and WCAG/ADA compliance. I build inclusive, high-performance digital experiences that solve real business needs.",
    filterAll: "All",
    btnCV: "Download CV",
    viewDetails: "View Details",
    modalHeaders: {
      problem: "Problem Statement",
      tech: "Technical Implementation",
      impact: "Impact & Deliverables"
    }
  }
};

const App = () => {
  const [lang, setLang] = useState('es');
  const [filter, setFilter] = useState('Todos');
  const [selectedProject, setSelectedProject] = useState(null);
  const t = translations[lang];

  const filteredProjects = projects.filter(p => 
    filter === 'Todos' || filter === 'All' || p.category === filter
  );

  return (
    <div className="bg-brand-cream text-brand-plum font-sans selection:bg-brand-coral min-h-screen pb-20">
      
      {/* Selector de Idioma */}
      <nav className="fixed top-6 right-6 z-50">
        <button 
          onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
          className="bg-brand-plum text-white px-5 py-2 rounded-full flex items-center gap-2 hover:bg-brand-coral transition-all shadow-lg font-medium"
        >
          <Globe size={18} />
          {lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
        </button>
      </nav>

      {/* Hero Section - Basada en tu CV */}
      <header className="container mx-auto px-6 pt-24 pb-12 text-center">
        <motion.img 
          src={patriciaImg} 
          className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-brand-coral shadow-inner"
          initial={{ scale: 0 }} animate={{ scale: 1 }}
        />
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">{t.heroTitle}</h1>
        <p className="max-w-2xl mx-auto text-lg mb-8 opacity-80 leading-relaxed">{t.heroDesc}</p>
        <div className="flex justify-center gap-4">
          <a 
            href={lang === 'es' ? myCV_ES : myCV_EN} 
            download 
            className="inline-flex items-center gap-2 bg-brand-plum text-white px-8 py-3 rounded-lg hover:bg-brand-coral transition-all font-bold"
          >
            <Download size={20} /> {t.btnCV}
          </a>
        </div>
      </header>

      {/* Grid de Proyectos */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div 
              key={project.id}
              layout
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all cursor-pointer border border-brand-plum/5 group"
              onClick={() => setSelectedProject(project)}
            >
              <div className="overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="p-8">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-coral mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="opacity-70 line-clamp-2 text-sm leading-relaxed">{project.description}</p>
                <div className="mt-6 flex items-center gap-2 text-brand-coral font-bold text-sm">
                  {t.viewDetails} <ExternalLink size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modal Senior con Lógica de Llaves Corregida */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className="fixed inset-0 z-50 bg-brand-plum/95 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              className="bg-white rounded-3xl max-w-5xl w-full my-auto overflow-hidden relative shadow-2xl"
              onClick={e => e.stopPropagation()}
              initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
            >
              <button 
                className="absolute top-6 right-6 p-2 bg-brand-cream rounded-full hover:bg-brand-coral hover:text-white transition-colors"
                onClick={() => setSelectedProject(null)}
              >
                <X size={24} />
              </button>

              <div className="p-8 md:p-12 space-y-10">
                <div className="border-b pb-6">
                  <h2 className="text-4xl font-black text-brand-plum">{selectedProject.title}</h2>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {selectedProject.tech.map((tag, i) => (
                      <span key={i} className="bg-brand-plum/5 text-brand-plum px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid lg:grid-cols-5 gap-12">
                  <div className="lg:col-span-3 space-y-8">
                    <section>
                      <h4 className="text-brand-coral font-black uppercase text-xs tracking-widest mb-3">{t.modalHeaders.problem}</h4>
                      <p className="text-xl font-medium leading-snug">{selectedProject.details.problemStatement}</p>
                    </section>
                    
                    <section>
                      <h4 className="text-brand-coral font-black uppercase text-xs tracking-widest mb-3">{t.modalHeaders.tech}</h4>
                      <p className="text-brand-plum/80 leading-relaxed italic">{selectedProject.details.technicalImplementation}</p>
                    </section>

                    <div className="bg-brand-cream p-8 rounded-2xl border-l-8 border-brand-coral">
                      <h4 className="text-brand-coral font-black uppercase text-xs tracking-widest mb-3">{t.modalHeaders.impact}</h4>
                      <p className="font-bold text-lg text-brand-plum">{selectedProject.details.impactDeliverables}</p>
                    </div>
                  </div>

                  <div className="lg:col-span-2 space-y-4">
                    {selectedProject.gallery.map((item, i) => (
                      <div key={i} className="rounded-xl overflow-hidden border shadow-sm">
                        {item.type === 'video' ? (
                          <iframe 
                            src={item.src} 
                            className="w-full aspect-video" 
                            allowFullScreen 
                            title={item.alt}
                            frameBorder="0"
                          />
                        ) : (
                          <img src={item.src} alt={item.alt} className="w-full h-auto hover:scale-105 transition-transform duration-700" />
                        )}
                      </div>
                    ))}
                  </div>
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