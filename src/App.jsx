import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Download, Code, Layout, Users, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from './data/projects';

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

  const filteredProjects = projects.filter(p => 
    filter === 'Todos' || p.category === filter
  );

  return (
    <div className="bg-slate-50 text-slate-900 font-sans">
      {/* 1. HERO SECTION */}
      <header className="min-h-screen flex flex-col justify-center items-center text-center p-6 bg-white">
        <motion.div 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <h1 className="text-6xl font-bold mb-2 text-brand-main">Patricia Higuera</h1>
          <h2 className="text-2xl text-brand-accent font-semibold mb-4">Front-End Engineer & Design Lead</h2>
          <p className="text-xl text-brand-accent mb-8 italic">
            "Construyendo interfaces accesibles y código robusto con un toque de color".
          </p>
          <div className="flex gap-4 justify-center">
            <a href="#proyectos" className="bg-brand-main text-white px-8 py-3 rounded-full font-bold hover:opacity-90 transition">
              Ver Proyectos
            </a>
            <a
            href="/Patricia_Higuera_CV.pdf" // Nombre exacto de tu archivo en la carpeta public
            download="Patricia_Higuera_CV.pdf"
            className="border-2 border-brand-main text-brand-main px-8 py-3 rounded-full font-bold hover:bg-brand-main hover:text-white transition flex items-center gap-2"
            >
              <Download size={20} /> Descargar CV
              </a>
            </div>
        </motion.div>
      </header>

      {/* 2. PROYECTOS CON FILTROS */}
      <section id="proyectos" className="py-20 px-6 max-w-7xl mx-auto">
        <FadeIn>
        {/* Filtros con tu paleta */}
        <div className="flex flex-wrap gap-4 justify-center mb-16">
          {['Todos', 'React/JS', 'UX/UI', 'Accesibilidad'].map(cat => (
            <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full border-2 transition-all font-bold ${
              filter === cat 
              ? 'bg-brand-main text-page-bg border-brand-main' 
              : 'bg-transparent text-brand-accent border-brand-accent hover:bg-brand-accent hover:text-white'
            }`}
            >
              {cat}
            </button>
          ))}
        </div>
        </FadeIn>

        {/* Grilla de Proyectos */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-3xl overflow-hidden shadow-lg border border-white/20 flex flex-col h-full"
              >
                {/* Contenedor de Imagen */}
                <div className="relative group overflow-hidden h-52">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-brand-main/20 group-hover:bg-transparent transition-colors"></div>
                </div>
                
                <div className="p-8 flex flex-col flex-grow">
                  {/* Categoría en Coral */}
                  <span className="text-xs font-black uppercase tracking-[0.2em] text-brand-accent mb-2">
                    {project.category}
                  </span>
                  
                  {/* Título en Ciruela */}
                  <h3 className="text-2xl font-bold mb-3 text-brand-main leading-tight">
                    {project.title}
                  </h3>
                  
                  {/* Descripción técnica corta */}
                  <p className="text-brand-accent/90 text-sm leading-relaxed mb-6">
                  {project.longDesc}
                  </p>
                  
                  {/* Tags de Tecnología */}
                  <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                    {project.tech.map(t => (
                      <span key={t} className="bg-brand-main/5 text-brand-main border border-brand-main/10 px-3 py-1 rounded-lg text-xs font-bold">
                        {t}
                      </span>
                      ))}
                  </div>
                  
                  {/* Enlaces con iconos */}
                  <div className="flex justify-between items-center border-t border-brand-main/10 pt-5">
                  <a href={project.links.demo} className="flex items-center gap-2 text-brand-main font-black text-sm hover:underline">
                    <ExternalLink size={18} /> DEMO
                  </a>
                  <a href={project.links.code} className="flex items-center gap-2 text-brand-accent font-black text-sm hover:underline">
                    <Github size={18} /> CÓDIGO
                  </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
      
      {/* 3. MI PROCESO */}
      <section id="proceso" className="py-24 bg-brand-main text-white px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-black italic mb-4">
                ¿Cómo lo hago?
              </h2>
              <div className="h-1 w-24 bg-brand-accent mx-auto rounded-full"></div>
              <p className="mt-6 text-page-bg/80 max-w-xl mx-auto text-lg">
                No solo escribo código; diseño soluciones escalables pensando en el usuario y el negocio.
              </p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 relative">
            {/* Línea decorativa conectora (solo visible en desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-brand-accent/20 -translate-y-12"></div>
            {[
              {
                num: "01",
                icon: <Users size={32} />,
                title: "Descubrimiento",
                desc: "Análisis de requisitos y necesidades empresariales. Entender el 'por qué' antes del 'cómo'."
              },
              {
                num: "02",
                icon: <Layout size={32} />,
                title: "Arquitectura & UX",
                desc: "Wireframing y accesibilidad desde el día uno. Estructuras sólidas para interfaces fluidas."
              },
              {
                num: "03",
                icon: <Code size={32} />,
                title: "Desarrollo",
                desc: "React, BEM y código limpio. Soluciones escalables con un rendimiento optimizado."
              },
              {
                num: "04",
                icon: <Zap size={32} />,
                title: "Iteración",
                desc: "Pruebas, QA y refinamiento constante. El código nunca deja de evolucionar."
              }
            ].map((step, idx) => (
              <FadeIn key={idx} delay={idx * 0.2}>
                <div className="relative z-10 flex flex-col items-center text-center group">
                  {/* Círculo con Icono */}
                  <div className="w-20 h-20 bg-brand-accent rounded-2xl flex items-center justify-center mb-6 transform transition-transform group-hover:rotate-12 group-hover:scale-110 shadow-xl">
                    <div className="text-brand-main">
                      {step.icon}
                    </div>
                  </div>
                  
                  {/* Número Flotante */}
                  <span className="text-5xl font-black text-white/10 absolute -top-4 left-1/2 -translate-x-1/2 group-hover:text-brand-accent/20 transition-colors">
                      {step.num}
                  </span>
                  
                  <h4 className="text-xl font-bold mb-3 text-page-bg uppercase tracking-tight">
                    {step.title}
                  </h4>
                  <p className="text-sm text-page-bg/70 leading-relaxed px-4">
                    {step.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 4. ACERCA DE */}
      <section id="sobre-mi" className="py-24 px-6 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          
          {/* Columna de Imagen */}
          <FadeIn>
            <div className="relative group">
              {/* Marcos decorativos con tus colores */}
              <div className="absolute -inset-4 border-2 border-brand-accent rounded-2xl -rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
              <div className="absolute -inset-4 bg-brand-main/10 rounded-2xl rotate-3 group-hover:rotate-0 transition-transform duration-500 -z-10"></div>
              
              <div className="relative overflow-hidden rounded-xl bg-brand-main">
                <img 
                  src="/tu-foto-profesional.jpg" 
                  alt="Patricia Higuera" 
                  className="w-full h-auto object-cover grayscale hover:grayscale-0 transition duration-700 ease-in-out transform hover:scale-105"
                />
              </div>
            </div>
          </FadeIn>

          {/* Columna de Texto */}
          <div className="flex flex-col gap-6">
            <FadeIn delay={0.2}>
              <h2 className="text-4xl font-black text-brand-main italic">
                Detrás del código...
              </h2>
            </FadeIn>

            <FadeIn delay={0.4}>
              <div className="space-y-4 text-brand-main text-lg leading-relaxed">
                <p>
                  Soy **Front-End Engineer y Design Lead** con 8 años de trayectoria creando soluciones web escalables en entornos globales como Amex GBT.
                </p>
                <p>
                  Me especializo en **React, accesibilidad** y en unir la visión de negocio con código impecable. Mi enfoque es crear interfaces que no solo se vean bien, sino que funcionen para todos.
                </p>
                <p className="text-brand-accent font-medium italic">
                  Fuera del modo dark, soy quien probablemente traiga los calcetines más coloridos a la oficina y el chiste preciso para que el equipo trabaje con la mejor energía. 🧦
                </p>
              </div>
            </FadeIn>

            {/* Skills Visuales */}
            <FadeIn delay={0.6}>
              <div className="mt-8">
                <h4 className="text-xs font-black uppercase tracking-widest text-brand-accent mb-6">
                  Stack Tecnológico & Herramientas
                </h4>
                <div className="flex flex-wrap gap-6 items-center grayscale opacity-70 hover:opacity-100 transition-opacity">
                  {/* Aquí puedes usar iconos de Lucide o simplemente etiquetas estilizadas */}
                  {['JavaScript', 'React', 'Figma', 'Node.js', 'Tailwind', 'Git'].map((skill) => (
                    <span 
                      key={skill} 
                      className="text-sm font-bold border-b-2 border-brand-accent/30 py-1 hover:border-brand-accent transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 bg-white border-t border-brand-accent/20 text-center">
      <div className="flex justify-center gap-8 mb-10">
        <a href="https://linkedin.com/in/tu-usuario" target="_blank" rel="noreferrer" 
        className="text-brand-main hover:text-brand-accent transition-colors scale-125">
          <Linkedin size={28}/>
        </a>
        <a href="https://github.com/tu-usuario" target="_blank" rel="noreferrer"
        className="text-brand-main hover:text-brand-accent transition-colors scale-125">
          <Github size={28}/>
        </a>
        <a href="mailto:tu-correo@ejemplo.com" 
        className="text-brand-main hover:text-brand-accent transition-colors scale-125">
          <Mail size={28}/>
        </a>
      </div>
      
      <div className="max-w-2xl mx-auto px-6">
        <p className="text-2xl font-medium mb-4 text-brand-main italic leading-relaxed">
          "¿Lista para llevar tu proyecto al siguiente nivel <br/>
          (o para escuchar un buen chiste)? Hablemos."
        </p>
        
        {/* El detalle de los calcetines coloridos */}
        <motion.div
        whileHover={{ rotate: [0, -10, 10, -10, 0], scale: 1.2 }}
        className="inline-block cursor-help text-4xl mt-4"
        title="¡Sí, traigo calcetines de colores hoy!"
        >
          🧦
        </motion.div>
        
        <p className="text-xs text-brand-accent mt-8 font-bold tracking-widest uppercase opacity-50">
          Hecho con React & mucho color • 2026
        </p>
      </div>
    </footer>
    </div>
  );
};

export default App;