import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Download, X, Globe, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
// Se importan ambas versiones de los datos para el sistema bilingüe [4]
import { projects as projectsES, projectsEN } from './data/projects';
import patriciaImg from './assets/PatriciaHiguera.png';
import myCV_ES from './assets/Patricia_Higuera_CV_ES.pdf';
import myCV_EN from './assets/Patricia_Higuera_CV_EN.pdf';

const translations = {
  es: {
    heroTitle: "Full Stack Web Developer | Accessibility Specialist",
    heroDesc: "Especialista en Frontend con enfoque en UX/UI y cumplimiento de normativas WCAG/ADA. Transformo problemas de negocio en experiencias digitales inclusivas.",
    aboutTitle: "Sobre Mí",
    aboutText: "Desarrolladora Web Full Stack con formación en Animación y Arte Digital. Me especializo en el ecosistema MERN y Figma, creando aplicaciones de alto rendimiento donde la sensibilidad visual se encuentra con el rigor técnico. Mi enfoque principal es la accesibilidad (WCAG) para asegurar que la tecnología sea verdaderamente inclusiva.",
    projectsTitle: "Proyectos Seleccionados",
    filterAll: "Todos",
    btnCV: "Descargar CV",
    viewDetails: "Ver Detalles",
    footerText: "Diseñado y desarrollado por Patricia Higuera — 2026",
    modalHeaders: {
      problem: "Planteamiento del Problema",
      tech: "Implementación Técnica",
      impact: "Impacto y Entregables"
    }
  },
  en: {
    heroTitle: "Full Stack Web Developer | Accessibility Specialist",
    heroDesc: "Frontend specialist focused on UX/UI and WCAG/ADA compliance. I transform business problems into inclusive, high-performance digital experiences.",
    aboutTitle: "About Me",
    aboutText: "Full Stack Web Developer with a background in Animation and Digital Art. Specializing in the MERN stack and Figma, I build high-performance applications where visual sensitivity meets technical rigor. My core focus is Web Accessibility (WCAG) to ensure technology is truly inclusive for everyone.",
    projectsTitle: "Featured Projects",
    filterAll: "All",
    btnCV: "Download CV",
    viewDetails: "View Details",
    footerText: "Designed and developed by Patricia Higuera — 2026",
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
  // Estado basado en ID para mantener la referencia al cambiar de idioma [1]
  const [selectedProjectId, setSelectedProjectId] = useState(null);
  
  const t = translations[lang];

  // Selección dinámica de la fuente de datos [1]
  const projectData = lang === 'es' ? projectsES : projectsEN;

  // Derivamos el proyecto activo buscando el ID en la fuente de datos actual [1]
  const activeProject = projectData.find(p => p.id === selectedProjectId);

  const filteredProjects = projectData.filter(p => 
    filter === 'Todos' || filter === 'All' || p.category === filter
  );

  return (
    <div className="bg-brand-cream text-brand-plum font-sans selection:bg-brand-coral min-h-screen">
      
      {/* Botón de Idioma */}
      <nav className="fixed top-6 right-6 z-50">
        <button 
          onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
          className="bg-brand-plum text-white px-5 py-2 rounded-full flex items-center gap-2 hover:bg-brand-coral transition-all shadow-lg font-bold"
        >
          <Globe size={18} />
          {lang === 'es' ? 'English' : 'Español'}
        </button>
      </nav>

      {/* Hero Section */}
      <header className="container mx-auto px-6 pt-32 pb-12 text-center">
        <motion.img 
          src={patriciaImg} 
          className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-brand-coral shadow-lg"
          initial={{ scale: 0 }} animate={{ scale: 1 }}
        />
        <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">{t.heroTitle}</h1>
        <p className="max-w-2xl mx-auto text-lg mb-8 opacity-80 leading-relaxed">{t.heroDesc}</p>
        <a 
          href={lang === 'es' ? myCV_ES : myCV_EN} 
          download 
          className="inline-flex items-center gap-2 bg-brand-plum text-white px-8 py-3 rounded-lg hover:bg-brand-coral transition-all font-bold uppercase tracking-widest text-sm"
        >
          <Download size={18} /> {t.btnCV} {lang === 'en' && "(IELTS C1 Certified)"}
        </a>
      </header>

      {/* Sección Sobre Mí [3] */}
      <section className="bg-white/50 py-20 border-y border-brand-plum/5">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="grid md:grid-cols-3 gap-12 items-center">
            <h2 className="text-3xl font-black text-brand-plum uppercase tracking-tighter">{t.aboutTitle}</h2>
            <div className="md:col-span-2">
              <p className="text-xl text-brand-plum/90 leading-relaxed font-medium">
                {t.aboutText}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Grid de Proyectos */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-center text-3xl font-black mb-12 uppercase tracking-widest">{t.projectsTitle}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project) => (
            <motion.div 
              key={project.id}
              layout
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all cursor-pointer border border-brand-plum/5 group"
              onClick={() => setSelectedProjectId(project.id)}
            >
              <div className="overflow-hidden h-60">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="p-8">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-coral mb-2 block">{project.category}</span>
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <div className="flex items-center gap-2 text-brand-plum font-bold text-xs group-hover:text-brand-coral transition-colors">
                  {t.viewDetails} <ChevronRight size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer [3] */}
      <footer className="bg-brand-plum text-brand-cream py-12 mt-20">
        <div className="container mx-auto px-6 text-center">
          <div className="flex justify-center gap-8 mb-8">
            <a href="https://github.com/Pattie9304" target="_blank" rel="noreferrer" className="hover:text-brand-coral transition-colors"><Github /></a>
            <a href="https://linkedin.com/in/patriciahiguera" target="_blank" rel="noreferrer" className="hover:text-brand-coral transition-colors"><Linkedin /></a>
            <a href="mailto:pattie9304@gmail.com" className="hover:text-brand-coral transition-colors"><Mail /></a>
          </div>
          <p className="text-sm opacity-60 font-medium tracking-wide">
            {t.footerText}
          </p>
        </div>
      </footer>

      {/* Modal Senior Bilingüe */}
      <AnimatePresence>
        {activeProject && (
          <motion.div 
            className="fixed inset-0 z-50 bg-brand-plum/95 backdrop-blur-md flex items-center justify-center p-4"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setSelectedProjectId(null)}
          >
            <motion.div 
              className="bg-white rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={e => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
            >
              <div className="p-8 md:p-12 space-y-10">
                <div className="flex justify-between items-start border-b pb-6">
                  <h2 className="text-4xl font-black text-brand-plum leading-tight">{activeProject.title}</h2>
                  <button onClick={() => setSelectedProjectId(null)} className="p-2 hover:bg-brand-coral hover:text-white rounded-full transition-colors"><X size={30} /></button>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                  <div className="space-y-8">
                    <section>
                      <h4 className="text-brand-coral font-black uppercase text-xs tracking-widest mb-3">{t.modalHeaders.problem}</h4>
                      <p className="text-xl font-medium leading-relaxed">{activeProject.details.problemStatement}</p>
                    </section>
                    <section>
                      <h4 className="text-brand-coral font-black uppercase text-xs tracking-widest mb-3">{t.modalHeaders.tech}</h4>
                      <p className="text-brand-plum/80 leading-relaxed italic">{activeProject.details.technicalImplementation}</p>
                    </section>
                    <div className="bg-brand-cream p-8 rounded-2xl border-l-8 border-brand-coral shadow-inner">
                      <h4 className="text-brand-coral font-black uppercase text-xs tracking-widest mb-2">{t.modalHeaders.impact}</h4>
                      <p className="font-bold text-lg text-brand-plum">{activeProject.details.impactDeliverables}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {activeProject.gallery.map((item, i) => (
                      <div key={i} className="rounded-xl overflow-hidden border shadow-sm">
                        {item.type === 'video' ? (
                          <iframe src={item.src} className="w-full aspect-video" allowFullScreen title={item.alt} frameBorder="0" />
                        ) : (
                          <img src={item.src} alt={item.alt} className="w-full h-auto" />
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