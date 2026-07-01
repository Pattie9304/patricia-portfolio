import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Download, X, Globe } from 'lucide-center';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from './data/projects'; // Importa tus 9 proyectos con BEM [2]
import patriciaImg from './assets/PatriciaHiguera.png';
import myCV_ES from './assets/Patricia_Higuera_CV_ES.pdf';
import myCV_EN from './assets/Patricia_Higuera_CV_EN.pdf';

const translations = {
  es: {
    heroTitle: "Full Stack Web Developer | Accessibility Specialist",
    heroDesc: "Especialista en Frontend con enfoque en UX/UI y cumplimiento de normativas WCAG/ADA. Transformo problemas de negocio en experiencias digitales inclusivas [5, 6].",
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
    heroDesc: "Frontend specialist focused on UX/UI and WCAG/ADA compliance. I build inclusive, high-performance digital experiences for business needs [4-6].",
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
  const [lang, setLang] = useState('es'); // Estado para el idioma
  const [filter, setFilter] = useState('Todos');
  const [selectedProject, setSelectedProject] = useState(null);
  const t = translations[lang];

  // Filtrado de proyectos [7]
  const filteredProjects = projects.filter(p => 
    filter === 'Todos' || filter === 'All' || p.category === filter
  );

  return (
    <div className="bg-brand-cream text-brand-plum font-sans selection:bg-brand-coral min-h-screen">
      
      {/* Botón de Idioma Estratégico */}
      <nav className="fixed top-6 right-6 z-50">
        <button 
          onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
          className="bg-brand-plum text-white px-5 py-2 rounded-full flex items-center gap-2 hover:bg-brand-coral transition-all shadow-lg"
        >
          <Globe size={18} />
          {lang === 'es' ? 'Switch to English' : 'Cambiar a Español'}
        </button>
      </nav>

      {/* Hero Section alineada a tu perfil profesional [5, 8] */}
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
          <Download size={20} /> {t.btnCV} (C1 {lang === 'en' ? 'Certified' : 'Certificado'})
        </a>
      </header>

      {/* Grid de Proyectos con tus 9 elementos [2, 3] */}
      <section className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div 
              key={project.id}
              layout
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer border border-brand-plum/10"
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

      {/* Modal con las nuevas llaves Senior [9-11] */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            className="fixed inset-0 z-50 bg-brand-plum/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              <div className="p-8 space-y-8">
                <div className="flex justify-between items-center border-b pb-4">
                  <h2 className="text-3xl font-bold">{selectedProject.title}</h2>
                  <button onClick={() => setSelectedProject(null)}><X /></button>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-brand-coral font-bold uppercase text-sm tracking-widest mb-2">{t.modalHeaders.problem}</h4>
                      <p className="text-lg opacity-90">{selectedProject.details.problemStatement}</p>
                    </div>
                    <div>
                      <h4 className="text-brand-coral font-bold uppercase text-sm tracking-widest mb-2">{t.modalHeaders.tech}</h4>
                      <p className="opacity-90">{selectedProject.details.technicalImplementation}</p>
                    </div>
                  </div>

                  {/* Galería con BEM naming [12, 13] */}
                  <div className="space-y-4">
                    {selectedProject.gallery.map((item, i) => (
                      <div key={i} className="rounded-lg overflow-hidden border">
                        {item.type === 'video' ? (
                          <iframe src={item.src} className="w-full aspect-video" allowFullScreen title={item.alt} />
                        ) : (
                          <img src={item.src} alt={item.alt} className="w-full h-auto" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-brand-cream p-6 rounded-xl border-l-4 border-brand-coral">
                  <h4 className="text-brand-coral font-bold uppercase text-sm tracking-widest mb-2">{t.modalHeaders.impact}</h4>
                  <p className="font-medium">{selectedProject.details.impactDeliverables}</p>
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