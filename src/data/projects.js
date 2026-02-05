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
    description: "Plataforma de gestión de equipos técnicos.",
    longDesc: "El proyecto principal de TripleTen. Optimicé la arquitectura de componentes y la gestión de estado para mejorar la escalabilidad y el rendimiento.",
    tech: ["React", "CSS Modules", "API Rest"],
    links: { demo: "#", code: "#" },
    image: jetDevsImg
  },
  {
    id: 2,
    title: "Newsletters - Médico ConSentido",
    category: "Accesibilidad",
    description: "Comunicación médica inclusiva (F2F y Conecta).",
    longDesc: "Desarrollo de newsletters con enfoque en accesibilidad, garantizando legibilidad en todos los clientes de correo y bajo estándares WCAG.",
    tech: ["HTML", "MJML", "QA Testing"],
    links: { demo: "#", code: "#" },
    image: medicoConSentidoImg
  },
  {
    id: 3,
    title: "Infografía Autocuidado",
    category: "UX/UI",
    description: "Diseño visual para Médico ConSentido.",
    longDesc: "Creación de piezas gráficas informativas enfocadas en la experiencia del paciente y la claridad visual.",
    tech: ["Figma", "Design System"],
    links: { demo: "#", code: "#" },
    image: autoCuidadoImg
  },
  {
    id: 4,
    title: "Barcolana",
    category: "React/JS",
    description: "Transformación de diseño gráfico a código Pixel-Perfect.",
    longDesc: "Conversión de diseños complejos a código HTML/CSS responsivo, manteniendo una fidelidad total a la propuesta visual original.",
    tech: ["HTML5", "CSS3", "Responsive"],
    links: { demo: "#", code: "#" },
    image: barcolanaImg
  },
  {
    id: 5,
    title: "Hammer Strength",
    category: "React/JS",
    description: "Desarrollo web con lógica de interacción.",
    longDesc: "Maquetación de diseño y desarrollo de lógica en JavaScript para la gestión de formularios de contacto y validaciones.",
    tech: ["HTML5", "JavaScript", "CSS3"],
    links: { demo: "#", code: "#" },
    image: hammerStrenghtImg
  },
  {
    id: 6,
    title: "Orchid House",
    category: "UX/UI",
    description: "Web Design & Development.",
    longDesc: "Integración de diseño de interfaz con desarrollo web para crear una presencia digital elegante y funcional.",
    tech: ["Figma", "Development", "UI Design"],
    links: { demo: "#", code: "#" },
    image: orchidHouseImg
  },
  {
    id: 7,
    title: "Gaceta UNAM - Wireframes",
    category: "UX/UI",
    description: "Arquitectura de información.",
    longDesc: "Desarrollo de wireframes de baja fidelidad basados en un profundo proceso de UX Research y pruebas con usuarios.",
    tech: ["Figma", "UI Design", "Prototyping"],
    links: { demo: "#", code: "#" },
    image: gacetaUNAMWireframesImg
  },
  {
    id: 8,
    title: "Gaceta UNAM - Research",
    category: "UX/UI",
    description: "Investigación",
    longDesc: "Ejecución del proceso de UX Research y entrevistas con usuarios.",
    tech: ["UX Research", "Wireframing", "User Testing"],
    links: { demo: "#", code: "#" },
    image: gacetaUNAMResearchImg
  }
];