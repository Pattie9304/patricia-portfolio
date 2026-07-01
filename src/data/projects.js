// --- SANOFI PROJECTS ---
import sanofi__medicoConSentidoImg from '../assets/projects/sanofi-medico-con-sentido/medico-con-sentido__thumbnail.png';
import sanofi__autocuidadoImg from '../assets/projects/sanofi-autocuidado/autoCuidado__thumbnail.png';
import barcolana__thumbnailImg from '../assets/projects/barcolana/barcolana__thumbnail.png';
import orchidHouse__thumbnailImg from '../assets/projects/orchid-house/orchidHouse__thumbnail.png';
import hammerStrength__thumbnailImg from '../assets/projects/hammer-strength/hammerStrength__thumbnail.png';

// --- INSTITUTIONAL / GACETA ---
import gacetaUnam__wireframesImg from '../assets/projects/gaceta-unam/gaceta-unam__wireframes--thumbnail.png';
import gacetaUnam__researchImg from '../assets/projects/gaceta-unam/gaceta-unam__research--thumbnail.png';

// --- DEVELOPMENT ---
import buttonGenerator__thumbnailImg from '../assets/projects/button-generator/buttonGenerator__thumbnail.png';

// --- ONBOARDING BOOK ---
import onboardingBook__prototypeThumb from '../assets/projects/onboarding-book/onboardingBook__interactive-prototype--thumbnail.png';
import onboardingBook__frame1 from '../assets/projects/onboarding-book/onboardingBook__menu-animation--frame-1.png';
import onboardingBook__frame2 from '../assets/projects/onboarding-book/onboardingBook__menu-animation--frame-2.png';
import onboardingBook__frame3 from '../assets/projects/onboarding-book/onboardingBook__menu-animation--frame-3.png';
import onboardingBook__frame4 from '../assets/projects/onboarding-book/onboardingBook__menu-animation--frame-4.png';
import onboardingBook__frame5 from '../assets/projects/onboarding-book/onboardingBook__menu-animation--frame-5.png';
import onboardingBook__frame6 from '../assets/projects/onboarding-book/onboardingBook__menu-animation--frame-6.png';

// --- JET DEVS ---
import jetDevs__thumbnail from '../assets/projects/jet-devs/jetDevs__thumbnail.png';
import jetDevs__homeDesktop from '../assets/projects/jet-devs/jetDevs__home-desktop.png';
import jetDevs__flightsDesktop from '../assets/projects/jet-devs/jetDevs__flights-list--desktop.png';
import jetDevs__aboutDesktop from '../assets/projects/jet-devs/jetDevs__about-me-desktop.png';

export const projects = [
  {
    id: 1,
    title: "JetDevs: Aviation Monitoring Dashboard",
    category: "Full-Stack Development",
    description: "Plataforma en tiempo real para el seguimiento de estados de vuelo internacionales.",
    details: {
      problemStatement: "Optimización de la latencia en la visualización de datos de aviación críticos para la toma de decisiones operativas [1].",
      technicalImplementation: "Integración de AviationStack API mediante una arquitectura React/Vite con manejo de estados asíncronos y Mock Data Fallbacks [1, 2].",
      impactDeliverables: "Interfaz de alto rendimiento con renderizado optimizado y resiliencia ante fallos de API externa [1]."
    },
    tech: ["React.js", "Vite", "AviationStack API", "RESTful API", "React Router"],
    links: { demo: "https://pattie9304.github.io/flight-status-frontend/", code: "https://github.com/Pattie9304/flight-status-frontend" },
    image: jetDevs__thumbnail,
    gallery: [
      { type: "image", src: jetDevs__homeDesktop, alt: "Dashboard View" },
      { type: "image", src: jetDevs__flightsDesktop, alt: "Flight List Logic" }
    ]
  },
  {
    id: 2,
    title: "Around the US: Scalable Social Platform",
    category: "Full-Stack Development",
    description: "Aplicación Full-Stack con arquitectura RESTful y gestión segura de medios compartidos.",
    details: {
      problemStatement: "Necesidad de una infraestructura robusta para la persistencia de datos de usuario y escalabilidad en el intercambio de contenido multimedia [3].",
      technicalImplementation: "Desarrollo de Backend en Node.js/Express con MongoDB. Implementación de API RESTful con seguridad en la capa de datos [4-6].",
      impactDeliverables: "Plataforma interactiva con despliegue CI/CD, garantizando integridad de datos y cumplimiento de estándares de privacidad [5, 6]."
    },
    tech: ["Node.js", "Express.js", "MongoDB", "React", "REST API"],
    links: { demo: "https://github.com/Pattie9304/web_project_around_auth", code: "https://github.com/Pattie9304/web_project_around_auth" },
    image: jetDevs__aboutDesktop, 
    gallery: [{ type: "image", src: jetDevs__aboutDesktop, alt: "Social Network Interface" }]
  },
  {
    id: 3,
    title: "Button Generator Code",
    category: "Frontend & Accessibility Engineering",
    description: "Herramienta de eficiencia operativa para la generación de código accesible WCAG 2.1.",
    details: {
      problemStatement: "Mitigación de riesgos legales por incumplimiento de normativas ADA y eliminación de cuellos de botella en la edición de contenido UI [7].",
      technicalImplementation: "Lógica de contraste dinámico en React para cálculo de legibilidad en tiempo real y arquitectura de copiado limpio de CSS modular [7].",
      impactDeliverables: "Reducción de 4-8 horas semanales en mantenimiento de UI y cumplimiento total de accesibilidad 'by design' [8]."
    },
    tech: ["React", "CSS Modules", "WCAG 2.1", "ADA Compliance"],
    links: { demo: "https://youtu.be/rZycU5tuV0c", code: "https://github.com/Pattie9304" },
    image: buttonGenerator__thumbnailImg,
    gallery: [
      { type: "video", src: "https://www.youtube.com/embed/rZycU5tuV0c", alt: "Accessibility Demo" },
      { type: "image", src: buttonGenerator__thumbnailImg, alt: "Interface Preview" }
    ]
  },
  {
    id: 4,
    title: "Libro Interactivo: Onboarding Experience",
    category: "Frontend & Accessibility Engineering",
    description: "MVP interactivo diseñado para optimizar la retención de información en procesos de integración corporativa.",
    details: {
      problemStatement: "Sustitución de manuales estáticos ineficientes por una experiencia de aprendizaje dinámica que acelere el tiempo de rampa del empleado [9].",
      technicalImplementation: "Definición de flujos de navegación complejos en Figma y prototipado rápido para validación de concepto (MVP) en 48 horas [9].",
      impactDeliverables: "Establecimiento de estándares de prototipado animado para el equipo de diseño y aprobación inmediata de estrategia por la dirección (CPO) [10, 11]."
    },
    tech: ["Figma", "Canva", "UX Strategy", "Prototyping"],
    links: { demo: "https://www.behance.net/gallery/199491891/Gaceta-UNAM-Wireframe", code: "#" },
    image: onboardingBook__prototypeThumb,
    gallery: [
      { type: "image", src: onboardingBook__frame1, alt: "Animation Frame 1" },
      { type: "image", src: onboardingBook__frame6, alt: "Final State" }
    ]
  },
  {
    id: 5,
    title: "Email Marketing Engineering: CRM Solutions",
    category: "CRM & Email Marketing Engineering",
    description: "Ingeniería de newsletters de alta complejidad para marcas globales con enfoque en conversión.",
    details: {
      problemStatement: "Fragmentación de la visualización de marca en clientes de correo críticos y baja tasa de interacción [12].",
      technicalImplementation: "Maquetación modular con HTML5/CSS Inline y Salesforce. Implementación de sistemas de QA para renderizado consistente [12, 13].",
      impactDeliverables: "Aumento en métricas de CTR y consolidación de gobernanza visual bajo estándares WCAG [12]."
    },
    tech: ["HTML5", "Salesforce", "Email Architecture", "QA Testing"],
    links: { demo: "https://www.behance.net/gallery/199490947/Mdico-conSentido-Email-Redesign", code: "#" },
    image: sanofi__medicoConSentidoImg,
    gallery: [{ type: "image", src: sanofi__medicoConSentidoImg, alt: "CRM Campaign" }]
  },
  {
    id: 6,
    title: "Barcolana Coffee Shop eCommerce",
    category: "Frontend & Accessibility Engineering",
    description: "Desarrollo de canal de venta digital con arquitectura de datos dinámica.",
    details: {
      problemStatement: "Transformación de una marca física en un ecosistema eCommerce funcional con alta fidelidad visual [14].",
      technicalImplementation: "Gestión de catálogo mediante JSON dinámico y técnicas de CSS avanzado para optimización de performance [15].",
      impactDeliverables: "Sitio responsivo con cobertura del 90% de dispositivos y reconocimiento por excelencia ejecutiva internacional [15, 16]."
    },
    tech: ["JavaScript", "JSON", "CSS3", "Responsive Design"],
    links: { demo: "https://www.behance.net/gallery/107557151/Barcolana-Web-Design", code: "#" },
    image: barcolana__thumbnailImg,
    gallery: [{ type: "image", src: barcolana__thumbnailImg, alt: "eCommerce UI" }]
  },
  {
    id: 7,
    title: "Orchid House Polanco: Luxury Hospitality Site",
    category: "Frontend & Accessibility Engineering",
    description: "Desarrollo integral y localización multilingüe para el sector hotelero de lujo.",
    details: {
      problemStatement: "Liderazgo técnico para crear una presencia digital premium sin activos de diseño previos, optimizando recursos [17].",
      technicalImplementation: "Dirección de arte y desarrollo custom en WordPress. Gestión manual de localización bilingüe para mercado internacional [17].",
      impactDeliverables: "Plataforma 'Pixel-Perfect' autoadministrable que posicionó la marca en el mercado digital de lujo [18]."
    },
    tech: ["WordPress", "Elementor", "Photoshop", "Localización"],
    links: { demo: "https://www.behance.net/gallery/107559393/Orchid-House-Hotels-Web-Design", code: "#" },
    image: orchidHouse__thumbnailImg,
    gallery: [{ type: "image", src: orchidHouse__thumbnailImg, alt: "Luxury Interface" }]
  },
  {
    id: 8,
    title: "Sanofi: Autocuidado Crisis Management",
    category: "Frontend & Accessibility Engineering",
    description: "Optimización de activos digitales críticos bajo plazos de entrega extremos para farmacéutica global.",
    details: {
      problemStatement: "Necesidad de actualización inmediata de activos informativos debido a diferencias horarias con equipos internacionales [19].",
      technicalImplementation: "Resolución de crisis técnica en 4 horas y optimización de arquitectura de información para despliegue rápido [19].",
      impactDeliverables: "Lanzamiento de campaña sin retrasos y cumplimiento de rigurosos estándares de marca corporativa [19]."
    },
    tech: ["Illustrator", "Digital Design", "Crisis Management"],
    links: { demo: "https://www.behance.net/gallery/107799015/Infografia-Mdico-ConSentido-Sanofi", code: "#" },
    image: sanofi__autocuidadoImg,
    gallery: [{ type: "image", src: sanofi__autocuidadoImg, alt: "Crisis Assets" }]
  },
  {
    id: 9,
    title: "Hammer Strength: Performance UI",
    category: "Frontend & Accessibility Engineering",
    description: "Interfaz industrial de alto impacto para equipamiento de fitness profesional.",
    details: {
      problemStatement: "Traducción de la identidad de marca física robusta a una experiencia digital de ingeniería de precisión [20].",
      technicalImplementation: "Estructuración de navegación técnica para catálogos extensos utilizando arquitecturas de información modernas [20].",
      impactDeliverables: "Plataforma visualmente coherente que mejoró la percepción digital y la generación de leads técnicos [21]."
    },
    tech: ["HTML5", "CSS3", "UI/UX Architecture"],
    links: { demo: "https://www.behance.net/gallery/107558735/Hammer-Strength-Web-Design", code: "#" },
    image: hammerStrength__thumbnailImg,
    gallery: [{ type: "image", src: hammerStrength__thumbnailImg, alt: "Industrial UI" }]
  }
];