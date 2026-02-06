// src/data/projects.js
import jetDevsImg from '../assets/projects/JetDevs__thumbnail.png';
import medicoConSentidoImg from '../assets/projects/MedicoConSentido__thumbnail.png';
import barcolanaImg from '../assets/projects/Barcolana__thumbnail.png';
import orchidHouseImg from '../assets/projects/OrchidHouse__thumbnail.png';
import autoCuidadoImg from '../assets/projects/AutoCuidado__thumbnail.png';
import hammerStrenghtImg from '../assets/projects/HammerStrength__thumbnail.png';
import gacetaUNAMWireframesImg from '../assets/projects/GacetaUNAM__Wireframes_thumbnail.png';
import gacetaUNAMResearchImg from '../assets/projects/GacetaUNAM__Research_thumbnail.png';

export const projects = [
  {
    id: 1,
    title: "JetDevs - TripleTen",
    category: "React/JS",
    description: "Aplicación de monitoreo de vuelos para gestión técnica.",
    // ANÁLISIS MEJORADO:
    longDesc: "Análisis: Desarrollo de una interfaz dinámica que consume datos de una API externa. Implementé un sistema de paginación eficiente para optimizar el rendimiento y una arquitectura de 'Mock Data Fallback' para mitigar errores de red (CORS/Mixed Content), garantizando que la aplicación sea funcional incluso ante fallos del servidor externo. Conclusión: Se logró una plataforma robusta y resiliente que prioriza la experiencia del usuario (UX), asegurando la visualización constante de datos críticos y manteniendo una alta fidelidad visual (Pixel-Perfect) en entornos de producción.",
    tech: ["React", "CSS Modules", "API Rest"],
    links: { demo: "https://pattie9304.github.io/flight-status-frontend/", code: "https://github.com/Pattie9304/flight-status-frontend" },
    image: jetDevsImg
  },
  {
    id: 2,
    title: "Newsletters - Médico ConSentido",
    category: "Accesibilidad",
    description: "Comunicación médica inclusiva (F2F y Conecta).",
    longDesc: "Análisis: Implementación de diseño modular con HTML nativo para asegurar la consistencia visual en diversos clientes de correo (Outlook, Gmail, Apple Mail). Se aplicaron técnicas de código semántico y contraste de color para cumplir con las pautas WCAG. Conclusión: Se incrementó la tasa de legibilidad y accesibilidad de la comunicación médica, permitiendo que la información crítica llegue sin barreras a todos los profesionales de la salud.",
    tech: ["HTML", "CSS", "QA Testing"],
    links: { demo: "https://www.behance.net/gallery/199490947/Mdico-conSentido-Email-Redesign", code: "#" },
    image: medicoConSentidoImg
  },
  {
    id: 3,
    title: "Infografía Autocuidado",
    category: "UX/UI",
    description: "Diseño visual para Médico ConSentido.",
    longDesc: "Análisis: Traducción de conceptos médicos complejos a un lenguaje visual digerible. El análisis se centró en la jerarquía de la información y el uso de un sistema de diseño (Design System) para mantener la coherencia de marca. Conclusión: El material visual resultante facilitó la comprensión del paciente sobre temas de salud preventiva, demostrando el impacto del diseño UI en la educación médica.",
    tech: ["Figma", "Design System"],
    links: { demo: "https://www.behance.net/gallery/107799015/Infografia-Mdico-ConSentido-Sanofi", code: "" },
    image: autoCuidadoImg
  },
  {
    id: 4,
    title: "Barcolana",
    category: "React/JS",
    description: "Transformación de diseño gráfico a código Pixel-Perfect.",
    longDesc: "Análisis: Proceso de maquetación Pixel-Perfect utilizando técnicas modernas de CSS (Flexbox/Grid). El reto principal fue adaptar una composición visual de estilo editorial a un entorno web totalmente responsivo. Conclusión: Se logró una transición fluida del diseño gráfico al código, manteniendo la integridad estética original y optimizando los tiempos de carga de los recursos visuales.",
    tech: ["HTML5", "CSS3", "Responsive"],
    links: { demo: "https://www.behance.net/gallery/107557151/Barcolana-Web-Design", code: "" },
    image: barcolanaImg
  },
  {
    id: 5,
    title: "Hammer Strength",
    category: "React/JS",
    description: "Desarrollo web con lógica de interacción.",
    longDesc: "Análisis: Desarrollo de la capa de interacción mediante JavaScript Vanilla. Se editaron algoritmos de validación de formularios en tiempo real para mejorar la captura de leads y la experiencia del usuario. Conclusión: La integración de lógica frontend permitió transformar una landing page estática en una herramienta de conversión funcional y centrada en el usuario.",
    tech: ["HTML5", "JavaScript", "CSS3"],
    links: { demo: "https://www.behance.net/gallery/107558735/Hammer-Strength-Web-Design", code: "" },
    image: hammerStrenghtImg
  },
  {
    id: 6,
    title: "Orchid House",
    category: "UX/UI",
    description: "Web Design & Development.",
    longDesc: "Análisis: Fusión de diseño de interfaz de lujo con estándares de desarrollo web. Se priorizó la optimización de imágenes y la fluidez de la navegación para reflejar la exclusividad del sector hotelero. Conclusión: Se entregó una solución digital que equilibra la elegancia estética con un rendimiento técnico sólido, mejorando el posicionamiento digital de la marca.",
    tech: ["Figma", "Development", "UI Design"],
    links: { demo: "https://www.behance.net/gallery/107559393/Orchid-House-Hotels-Web-Design", code: "" },
    image: orchidHouseImg
  },
  {
    id: 7,
    title: "Gaceta UNAM - Wireframes",
    category: "UX/UI",
    description: "Arquitectura de información.",
    longDesc: "Análisis: Definición de la arquitectura de información mediante el diseño de wireframes de baja fidelidad. El enfoque se centró en la usabilidad y el flujo de navegación para organizar un volumen masivo de contenido editorial. Conclusión: La estructura propuesta simplificó la navegación del usuario, sentando las bases para una interfaz intuitiva que prioriza la jerarquía de las noticias y artículos.",
    tech: ["Figma", "UI Design", "Prototyping"],
    links: { demo: "https://www.behance.net/gallery/199491891/Gaceta-UNAM-Wireframe", code: "" },
    image: gacetaUNAMWireframesImg
  },
  {
    id: 8,
    title: "Gaceta UNAM - Research",
    category: "UX/UI",
    description: "Investigación",
    longDesc: "Análisis: Aplicación de metodologías de investigación cualitativa, incluyendo entrevistas a profundidad y pruebas de usabilidad. Se identificaron puntos de dolor clave en la audiencia universitaria mediante mapas de empatía. Conclusión: Los hallazgos del research permitieron tomar decisiones de diseño basadas en datos reales de usuario, minimizando la incertidumbre y alineando el producto digital con las necesidades de la comunidad UNAM.",
    tech: ["UX Research", "Wireframing", "User Testing"],
    links: { demo: "https://www.behance.net/gallery/114889859/Gaceta-UNAM-Research", code: "" },
    image: gacetaUNAMResearchImg
  }
];