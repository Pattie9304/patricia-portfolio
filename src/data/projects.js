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
      problemStatement: "Optimización de la latencia en la visualización de datos de aviación críticos para la toma de decisiones operativas.",
      technicalImplementation: "Integración de AviationStack API mediante una arquitectura React/Vite con manejo de estados asíncronos y Mock Data Fallbacks.",
      impactDeliverables: "Interfaz de alto rendimiento con renderizado optimizado y resiliencia ante fallos de API externa."
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
      problemStatement: "Necesidad de una infraestructura robusta para la persistencia de datos de usuario y escalabilidad en el intercambio de contenido multimedia.",
      technicalImplementation: "Desarrollo de Backend en Node.js/Express con MongoDB. Implementación de API RESTful con seguridad en la capa de datos.",
      impactDeliverables: "Plataforma interactiva con despliegue CI/CD, garantizando integridad de datos y cumplimiento de estándares de privacidad."
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
      problemStatement: "Mitigación de riesgos legales por incumplimiento de normativas ADA y eliminación de cuellos de botella en la edición de contenido UI.",
      technicalImplementation: "Lógica de contraste dinámico en React para cálculo de legibilidad en tiempo real y arquitectura de copiado limpio de CSS modular.",
      impactDeliverables: "Reducción de 4-8 horas semanales en mantenimiento de UI y cumplimiento total de accesibilidad 'by design'."
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
      problemStatement: "Sustitución de manuales estáticos ineficientes por una experiencia de aprendizaje dinámica que acelere el tiempo de rampa del empleado.",
      technicalImplementation: "Definición de flujos de navegación complejos en Figma y prototipado rápido para validación de concepto (MVP) en 48 horas.",
      impactDeliverables: "Establecimiento de estándares de prototipado animado para el equipo de diseño y aprobación inmediata de estrategia por la dirección (CPO)."
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
      problemStatement: "Fragmentación de la visualización de marca en clientes de correo críticos y baja tasa de interacción.",
      technicalImplementation: "Maquetación modular con HTML5/CSS Inline y Salesforce. Implementación de sistemas de QA para renderizado consistente.",
      impactDeliverables: "Aumento en métricas de CTR y consolidación de gobernanza visual bajo estándares WCAG."
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
      problemStatement: "Transformación de una marca física en un ecosistema eCommerce funcional con alta fidelidad visual.",
      technicalImplementation: "Gestión de catálogo mediante JSON dinámico y técnicas de CSS avanzado para optimización de performance.",
      impactDeliverables: "Sitio responsivo con cobertura del 90% de dispositivos y reconocimiento por excelencia ejecutiva internacional."
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
      problemStatement: "Liderazgo técnico para crear una presencia digital premium sin activos de diseño previos, optimizando recursos.",
      technicalImplementation: "Dirección de arte y desarrollo custom en WordPress. Gestión manual de localización bilingüe para mercado internacional.",
      impactDeliverables: "Plataforma 'Pixel-Perfect' autoadministrable que posicionó la marca en el mercado digital de lujo."
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
      problemStatement: "Necesidad de actualización inmediata de activos informativos debido a diferencias horarias con equipos internacionales.",
      technicalImplementation: "Resolución de crisis técnica en 4 horas y optimización de arquitectura de información para despliegue rápido.",
      impactDeliverables: "Lanzamiento de campaña sin retrasos y cumplimiento de rigurosos estándares de marca corporativa."
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
      problemStatement: "Traducción de la identidad de marca física robusta a una experiencia digital de ingeniería de precisión.",
      technicalImplementation: "Estructuración de navegación técnica para catálogos extensos utilizando arquitecturas de información modernas.",
      impactDeliverables: "Plataforma visualmente coherente que mejoró la percepción digital y la generación de leads técnicos."
    },
    tech: ["HTML5", "CSS3", "UI/UX Architecture"],
    links: { demo: "https://www.behance.net/gallery/107558735/Hammer-Strength-Web-Design", code: "#" },
    image: hammerStrength__thumbnailImg,
    gallery: [{ type: "image", src: hammerStrength__thumbnailImg, alt: "Industrial UI" }]
  }
];

export const projectsEN = [
  {
    id: 1,
    title: "JetDevs: Aviation Monitoring Dashboard",
    category: "Full-Stack Development",
    description: "Real-time global flight tracking platform engineered for high-availability and resilient data rendering.",
    details: {
      problemStatement: "Optimizing latency in critical aviation data visualization to support real-time operational decision-making.",
      technicalImplementation: "Integrated AviationStack API using a React/Vite architecture with asynchronous state management and Mock Data Fallbacks to ensure 100% uptime.",
      impactDeliverables: "High-performance interface with optimized rendering and API failure resilience, eliminating data visualization bottlenecks."
    },
    tech: ["React.js", "Vite", "RESTful API", "React Router"],
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
    description: "Full-Stack interactive platform featuring secure media management and a RESTful architecture.",
    details: {
      problemStatement: "Architecting a robust infrastructure for user data persistence and scalable multimedia content sharing.",
      technicalImplementation: "Developed a Node.js/Express backend with MongoDB. Implemented a secure RESTful API layer with rigorous data validation.",
      impactDeliverables: "Deployed a CI/CD-ready platform ensuring data integrity and strict adherence to user privacy standards."
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
    description: "Operational efficiency tool for generating WCAG 2.1 compliant accessible code.",
    details: {
      problemStatement: "Mitigating significant legal risks (ADA Compliance) and removing UI content editing bottlenecks.",
      technicalImplementation: "Engineered dynamic contrast logic in React for real-time readability calculations and a clean-code CSS modular architecture.",
      impactDeliverables: "Achieved 4-8 hours of weekly manual UI maintenance savings and ensured 'accessibility by design' across the organization."
    },
    tech: ["React", "WCAG 2.1", "ADA Compliance", "CSS Modules"],
    links: { demo: "https://youtu.be/rZycU5tuV0c", code: "https://github.com/Pattie9304" },
    image: buttonGenerator__thumbnailImg,
    gallery: [
      { type: "video", src: "https://www.youtube.com/embed/rZycU5tuV0c", alt: "Accessibility Demo" },
      { type: "image", src: buttonGenerator__thumbnailImg, alt: "Interface Preview" }
    ]
  },
  {
    id: 4,
    title: "Interactive Book: Onboarding Experience",
    category: "Frontend & Accessibility Engineering",
    description: "Interactive MVP designed to optimize employee knowledge retention during corporate integration.",
    details: {
      problemStatement: "Replacing inefficient static manuals with a dynamic learning experience to accelerate employee ramp-up time.",
      technicalImplementation: "Defined complex navigation flows and rapid prototyping to validate the innovation strategy before the CPO in 48 hours.",
      impactDeliverables: "Established animated prototyping as the team's new standard, securing immediate executive approval for the product roadmap."
    },
    tech: ["Figma", "UX Strategy", "Prototyping", "Motion Design"],
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
    description: "High-complexity responsive newsletter engineering for global brands focused on conversion.",
    details: {
      problemStatement: "Solving brand visualization fragmentation across critical email clients (Outlook/Gmail) and improving low engagement rates.",
      technicalImplementation: "Modular coding using HTML5/CSS Inline and Salesforce. Implemented Design QA systems to ensure consistent rendering.",
      impactDeliverables: "Significant CTR increase and consolidated visual governance under WCAG accessibility standards."
    },
    tech: ["HTML5", "Salesforce", "Email Architecture", "Design QA"],
    links: { demo: "https://www.behance.net/gallery/199490947/Mdico-conSentido-Email-Redesign", code: "#" },
    image: sanofi__medicoConSentidoImg,
    gallery: [{ type: "image", src: sanofi__medicoConSentidoImg, alt: "CRM Campaign" }]
  },
  {
    id: 6,
    title: "Barcolana Coffee Shop eCommerce",
    category: "Frontend & Accessibility Engineering",
    description: "Development of a digital sales channel with dynamic data architecture.",
    details: {
      problemStatement: "Transforming a physical brand into a functional, high-fidelity eCommerce ecosystem.",
      technicalImplementation: "Catalog management via dynamic JSON and advanced CSS performance optimization techniques.",
      impactDeliverables: "Responsive site with 90% device coverage; received international recognition from the Directorate for execution excellence."
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
    description: "End-to-end development and multilingual localization for the luxury hospitality sector.",
    details: {
      problemStatement: "Technical leadership to create a premium digital presence without prior design assets, optimizing limited resources.",
      technicalImplementation: "Art direction and custom WordPress development. Managed manual bilingual localization for the international market.",
      impactDeliverables: "Pixel-perfect, self-managed platform that successfully positioned the brand in the digital luxury market."
    },
    tech: ["WordPress", "Elementor", "Localization", "UI/UX"],
    links: { demo: "https://www.behance.net/gallery/107559393/Orchid-House-Hotels-Web-Design", code: "#" },
    image: orchidHouse__thumbnailImg,
    gallery: [{ type: "image", src: orchidHouse__thumbnailImg, alt: "Luxury Interface" }]
  },
  {
    id: 8,
    title: "Sanofi: Autocuidado Crisis Management",
    category: "Frontend & Accessibility Engineering",
    description: "Optimization of critical digital assets under extreme deadlines for a global pharmaceutical leader.",
    details: {
      problemStatement: "Immediate update of informative assets required due to time-zone differences with European global teams.",
      technicalImplementation: "Technical crisis resolution within 4 hours (vs. 24h deadline). Optimized information architecture for rapid deployment.",
      impactDeliverables: "Campaign launch with zero delays, strictly adhering to rigorous corporate brand and compliance standards."
    },
    tech: ["Illustrator", "Information Architecture", "Crisis Management"],
    links: { demo: "https://www.behance.net/gallery/107799015/Infografia-Mdico-ConSentido-Sanofi", code: "#" },
    image: sanofi__autocuidadoImg,
    gallery: [{ type: "image", src: sanofi__autocuidadoImg, alt: "Crisis Assets" }]
  },
  {
    id: 9,
    title: "Hammer Strength: Performance UI",
    category: "Frontend & Accessibility Engineering",
    description: "High-impact industrial interface for professional fitness engineering.",
    details: {
      problemStatement: "Translating a robust physical brand identity into a digital experience that projects precision engineering.",
      technicalImplementation: "Structured technical navigation for extensive catalogs using modern information architectures.",
      impactDeliverables: "Visually coherent platform that improved digital brand perception and technical lead generation."
    },
    tech: ["HTML5", "CSS3", "UI/UX Architecture"],
    links: { demo: "https://www.behance.net/gallery/107558735/Hammer-Strength-Web-Design", code: "#" },
    image: hammerStrength__thumbnailImg,
    gallery: [{ type: "image", src: hammerStrength__thumbnailImg, alt: "Industrial UI" }]
  }
];