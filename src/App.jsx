import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Download, X, PlayCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from './data/projects';
import patriciaImg from './assets/PatriciaHiguera.png';
import myCV from './assets/Patricia_Higuera_CV.pdf';

const FadeIn = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay }}
  >
    {children}
  </motion.div>
);

const App = () => {
  const [filter, setFilter] = useState('Todos');
  const [selectedProject, setSelectedProject] = useState(null);
  const modalRef = useRef(null);

  const filteredProjects = projects.filter(p => 
    filter === 'Todos' || p.category === filter
  );

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setSelectedProject(null);
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <div className="bg-brand-cream text-brand-plum font-sans selection:bg-brand-coral selection:text-white">
      
      {/* 1. HERO SECTION */}
      <header className="pt-16 pb-24 md:pt-24 md:pb-32 flex flex-col justify-center items-center text-center p-6 bg-white">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl">
          
          {/* Títulos Principales */}
          <h1 className="text-6xl md:text-8xl font-black mb-4 text-brand-plum tracking-tighter">Patricia Higuera</h1>
          <h2 className="text-xl md:text-2xl text-brand-coral font-bold mb-10 tracking-widest uppercase">Front-End Engineer & Design Lead</h2>
          
          {/* Contenedor de Texto (Narrativa) */}
          <div className="flex flex-col gap-6 mb-12">
            <p className="text-2xl md:text-3xl leading-tight text-brand-plum italic">
              "I don't just design interfaces; I <span className="font-bold not-italic">architect scalable systems.</span>"
            </p>
            <p className="text-xl leading-relaxed text-brand-plum/80 max-w-2xl mx-auto">
              Transformo problemas de negocio complejos en productos digitales intuitivos, 
              uniendo la <span className="font-bold text-brand-plum">estética visual</span> con la <span className="font-bold text-brand-plum">viabilidad técnica</span>.
            </p>
          </div>
          
          {/* Contenedor del Video */}
          <div className="w-full max-w-3xl mx-auto mt-12 mb-4">
            <div className="relative pt-[56.25%] overflow-hidden rounded-2xl shadow-2xl border-4 border-white">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/bxZnYaKDEtc?si=-r3V9yLS2vWfzPWO?rel=0&modestbranding=1"
                title="Patricia Higuera | Design & Engineering Vision"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            
            <p className="text-xs text-brand-plum/60 mt-4 uppercase tracking-widest font-bold">
              Frontend Engineer & Design Lead: Descubre quién soy en 120 segundos.
            </p>
          </div>

          {/* Contenedor de Botones (Acciones) - Separado para forzar el salto de línea */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="#proyectos" className="w-full sm:w-auto bg-brand-plum text-brand-cream px-10 py-4 rounded-full font-bold hover:scale-105 transition-all shadow-lg active:scale-95 text-center">
              Ver Proyectos
            </a>
            <a href={myCV} download className="w-full sm:w-auto border-2 border-brand-plum text-brand-plum px-10 py-4 rounded-full font-bold hover:bg-brand-plum hover:text-brand-cream transition-all flex items-center justify-center gap-2">
              <Download size={20} /> Descargar CV en Español
            </a>
          </div>

        </motion.div>
      </header>

      {/* 2. ACERCA DE */}
      <section id="sobre-mi" className="py-24 px-6 bg-brand-blue">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <FadeIn>
            <div className="relative group">
              <div className="absolute -inset-4 border-4 border-brand-coral rounded-2xl -rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
              <div className="relative overflow-hidden rounded-xl bg-brand-plum shadow-elevated">
                <img src={patriciaImg} alt="Patricia" className="w-full grayscale hover:grayscale-0 transition duration-700 transform hover:scale-105" />
              </div>
            </div>
          </FadeIn>
          
          <div className="flex flex-col gap-6">
            <h2 className="text-5xl font-black text-brand-plum italic tracking-tight">Engineering meets Design</h2>
            
            <p className="text-xl leading-relaxed text-brand-plum">
              Con <span className="font-bold border-b-2 border-brand-coral/40">10 años de trayectoria híbrida</span>, me he especializado en cerrar la brecha entre la visión creativa y la implementación real. Mi enfoque como <span className="font-black text-brand-plum uppercase text-lg">UX Engineer</span> se centra en:
            </p>
            
            {/* Listas con bullets en Plum (contraste alto) */}
            <ul className="list-disc list-outside ml-6 space-y-4 text-lg text-brand-plum">
              <li><span className="font-bold">Sistemas Escalables:</span> Diseño y desarrollo con metodologías como BEM y Atomic Design.</li>
              <li><span className="font-bold">Accesibilidad (A11y):</span> Interfaces inclusivas bajo estándares WCAG.</li>
              <li><span className="font-bold">Eficiencia Operativa:</span> Optimización de flujos y mitigación de fricciones.</li>
            </ul>

            {/* Stack con títulos accesibles */}
            <div className="mt-10 pt-10 border-t border-brand-plum/20">
              <div className="flex flex-col gap-8">
                
                {/* Fila 1 */}
                <div className="space-y-4">
                  <h4 className="text-xs font-black uppercase tracking-widest text-brand-plum opacity-70">
                    Technical Specialization
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['React', 'JavaScript ES6+', 'Tailwind CSS', 'Git', 'CSS Architecture'].map((skill) => (
                      <span key={skill} className="bg-brand-plum text-white px-4 py-2 rounded-lg text-xs font-bold shadow-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Fila 2 - Usamos el rosa solo como un detalle visual pequeño o borde */}
                <div className="space-y-4">
                  <h4 className="text-xs font-black uppercase tracking-widest text-brand-plum opacity-70">
                    Design & Strategy
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['Figma', 'UX Research', 'Design Systems', 'Accessibility (WCAG)', 'Mentoring'].map((skill) => (
                      <span key={skill} className="border-2 border-brand-plum text-brand-plum px-4 py-2 rounded-lg text-xs font-bold">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROYECTOS (Accesibilidad Mejorada) */}
      <section id="proyectos" className="py-24 px-6 bg-brand-coral">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            {/* Título en Crema para contraste máximo sobre Coral */}
            <h2 className="text-5xl md:text-6xl font-black text-brand-cream mb-8 italic tracking-tighter">
              Proyectos Seleccionados
            </h2>
            
            {/* Contenedor de Filtros */}
            {/* Filtros Inteligentes y Accesibles */}
            <div className="flex flex-wrap gap-3 justify-center" role="tablist">
              {/* Generamos los botones basados en las categorías reales de tus datos */}
              {['Todos', ...new Set(projects.map(p => p.category))].map(cat => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-3 rounded-full border-2 font-bold transition-all shadow-md ${
                    filter === cat 
                      ? 'bg-brand-plum text-brand-cream border-brand-plum' 
                      : 'border-brand-cream text-brand-cream hover:bg-white/20'
                  }`}
                  aria-pressed={filter === cat}
                >
                  {cat}
                </button>
              ))}
            </div>

          </div>

          {/* Grilla de Tarjetas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <AnimatePresence mode='popLayout'>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  onClick={() => setSelectedProject(project)}
                  // Tarjetas blancas con texto Ciruela (Contraste perfecto)
                  className="bg-white rounded-3xl overflow-hidden shadow-elevated cursor-pointer hover:-translate-y-3 transition-all group border-b-8 border-brand-plum"
                  role="button"
                  tabIndex="0"
                  aria-label={`Ver detalles del proyecto: ${project.title}`}
                  onKeyDown={(e) => e.key === 'Enter' && setSelectedProject(project)}
                >
                  <div className="h-56 overflow-hidden relative">
                    <img src={project.image} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-brand-plum/5 group-hover:bg-transparent transition-colors"></div>
                  </div>
                  <div className="p-8">
                    {/* El Coral sobre Blanco sí pasa la prueba de contraste para textos cortos/etiquetas */}
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-coral">{project.category}</span>
                    <h3 className="text-2xl font-bold text-brand-plum mt-1 mb-3">{project.title}</h3>
                    <p className="text-sm text-slate-700 line-clamp-2 mb-6 leading-relaxed">{project.shortDescription || project.description}</p>
                    <div className="flex items-center text-brand-plum font-black text-xs uppercase tracking-widest border-b-2 border-transparent group-hover:border-brand-coral transition-all">
                      Explorar Caso <ExternalLink size={14} className="ml-2" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* 4. MODAL DETALLE */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-plum/95 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ y: 100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 100, opacity: 0 }}
              className="bg-brand-cream w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-[2.5rem] shadow-2xl relative"
              onClick={(e) => e.stopPropagation()}
              ref={modalRef}
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="fixed md:absolute top-6 right-6 p-3 bg-brand-coral text-white rounded-full hover:rotate-90 transition-transform z-50 shadow-lg"
              >
                <X size={24} />
              </button>

              <div className="p-8 md:p-16">
                <span className="text-xs font-black text-brand-coral uppercase tracking-widest">{selectedProject.category}</span>
                <h2 className="text-5xl font-black text-brand-plum mt-2 mb-8 tracking-tight">{selectedProject.title}</h2>
                
                <div className="grid md:grid-cols-2 gap-12 mb-12">
                  <div className="space-y-8">
                    <section>
                      <h4 className="font-black text-brand-coral uppercase text-xs tracking-widest mb-3">Análisis del Reto</h4>
                      <p className="text-brand-plum text-lg leading-relaxed">{selectedProject.details.analysis}</p>
                    </section>
                    
                    <section>
                      <h4 className="font-black text-brand-coral uppercase text-xs tracking-widest mb-3">El Proceso</h4>
                      <ul className="grid gap-3">
                        {selectedProject.details.process.map((step, i) => (
                          <li key={i} className="flex items-start gap-3 text-brand-plum">
                            <span className="text-brand-coral font-bold mt-1">✦</span> {step}
                          </li>
                        ))}
                      </ul>
                    </section>
                  </div>

                  <div className="space-y-8">
                    <section className="bg-brand-blue/30 p-8 rounded-4xl border border-brand-blue">
                    <h4 className="font-black text-brand-plum uppercase text-xs tracking-widest mb-3">Conclusión</h4>
                    <p className="text-brand-plum italic leading-relaxed">{selectedProject.details.conclusion}</p>
                    </section>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      {/* BOTÓN DEMO: Se muestra si existe y no es # */}
                      {selectedProject.links?.demo && selectedProject.links.demo !== "#" && (
                        <a 
                        href={selectedProject.links.demo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 bg-brand-plum text-white text-center py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-brand-coral transition-colors"
                        >
                          <ExternalLink size={18} /> Demo Live
                        </a>
                      )}
                      
                      {/* BOTÓN CÓDIGO (GITHUB): Se muestra si existe y no es # */}
                      {selectedProject.links?.code && selectedProject.links.code !== "#" && (
                        <a 
                        href={selectedProject.links.code} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 border-2 border-brand-plum text-brand-plum text-center py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-brand-plum hover:text-white transition-all"
                        >
                          <Github size={18} /> Ver Código
                        </a>
                      )}
                      
                      {/* BOTÓN BEHANCE: Se muestra si existe y no es # */}
                      {selectedProject.links?.behance && selectedProject.links.behance !== "#" && (
                        <a 
                        href={selectedProject.links.behance} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 bg-[#1769ff] text-white text-center py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-[#003fba] transition-colors"
                        >
                        {/* Si no tienes el icono de Behance en Lucide, puedes usar una letra B o un Icono genérico */}
                        <ExternalLink size={18} /> Ver Behance
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Galería con soporte de Video */}
                <div className={`grid grid-cols-1 ${selectedProject.gallery?.length > 4 ? 'md:grid-cols-3' : 'md:grid-cols-2'} gap-6 mt-12`}>
                  {selectedProject.gallery?.map((item, index) => (
                    <div key={index} className="rounded-2xl overflow-hidden shadow-md bg-white border border-brand-plum/10 aspect-video flex items-center justify-center">
                      {item.type === "video" ? (
                        <iframe
                        src={item.src}
                        title={item.alt}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        ></iframe>
                        ) : (
                          <img
                          src={item.src}
                          alt={item.alt}
                          className="w-full h-full object-contain p-2" // 'object-contain' evita que se corten los bordes del frame
                          />
                          )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* FOOTER */}
      <footer className="py-24 bg-brand-plum text-brand-cream text-center relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex justify-center gap-10 mb-10">
            <a href="#" className="hover:text-brand-coral transition-transform hover:-translate-y-2"><Linkedin size={36}/></a>
            <a href="#" className="hover:text-brand-coral transition-transform hover:-translate-y-2"><Github size={36}/></a>
            <a href="#" className="hover:text-brand-coral transition-transform hover:-translate-y-2"><Mail size={36}/></a>
          </div>
          <p className="text-2xl font-light italic opacity-80 px-6 max-w-2xl mx-auto">
            "Construyendo el futuro digital con accesibilidad, diseño y mucho café."
          </p>
          <div className="text-5xl mt-8 animate-bounce">🧦</div>
        </div>
        {/* Decoración sutil de fondo */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none flex items-center justify-center">
            <span className="text-[20rem] font-black uppercase">PH</span>
        </div>
      </footer>
    </div>
  );
};

export default App;