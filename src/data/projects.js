// src/data/projects.js
import jetDevsThumb from '../assets/projects/jet-devs/jetDevs__thumb.png';
import aroundUSThumb from '../assets/projects/around-the-us/aroundUS__thumb.png';
import buttonGenThumb from '../assets/projects/button-generator/buttonGenerator__thumb.png';
import onboardingThumb from '../assets/projects/onboarding-book/onboardingBook__thumb.png';
import emailThumb from '../assets/projects/email-marketing/emailMarketing__thumb.png';
import barcolanaThumb from '../assets/projects/barcolana/barcolana__thumb.png';
import orchidThumb from '../assets/projects/orchid-house/orchidHouse__thumb.png';
import sanofiThumb from '../assets/projects/sanofi/sanofi__thumb.png';
import hammerThumb from '../assets/projects/hammer-strength/hammerStrength__thumb.png';

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
    image: jetDevsThumb,
    gallery: [{ type: "image", src: jetDevsThumb, alt: "Dashboard de monitoreo de vuelos" }]
  },
  {
    id: 2,
    title: "Around the US: Scalable Social Platform",
    category: "Full-Stack Development",
    description: "Aplicación Full-Stack con arquitectura RESTful y gestión segura de medios.",
    details: {
      problemStatement: "Necesidad de una infraestructura robusta para la persistencia de datos de usuario y escalabilidad en el intercambio de contenido multimedia.",
      technicalImplementation: "Desarrollo de Backend en Node.js/Express con MongoDB. Implementación de API RESTful con seguridad en la capa de datos.",
      impactDeliverables: "Plataforma interactiva con despliegue CI/CD, garantizando integridad de datos y cumplimiento de estándares de privacidad."
    },
    tech: ["Node.js", "Express.js", "MongoDB", "React", "REST API"],
    links: { demo: "https://github.com/Pattie9304/web_project_around_auth", code: "https://github.com/Pattie9304/web_project_around_auth" },
    image: aroundUSThumb,
    gallery: [{ type: "image", src: aroundUSThumb, alt: "Social Network Interface" }]
  },
  {
    id: 3,
    title: "Button Generator Code",
    category: "Frontend & Accessibility Engineering",
    description: "Herramienta de eficiencia operativa para la generación de código accesible WCAG 2.1.",
    details: {
      problemStatement: "Mitigación de riesgos legales por incumplimiento de normativas ADA y eliminación de cuellos de botella en la edición de contenido UI.",
      technicalImplementation: "Lógica de contraste dinámico en React para cálculo de legibilidad en tiempo real y arquitectura de copiado limpio de CSS.",
      impactDeliverables: "Reducción de 4-8 horas semanales en mantenimiento de UI y cumplimiento total de accesibilidad 'by design'."
    },
    tech: ["React", "CSS Modules", "WCAG 2.1", "ADA Compliance"],
    links: { demo: "https://youtu.be/rZycU5tuV0c", code: "https://github.com/Pattie9304" },
    image: buttonGenThumb,
    gallery: [
      { type: "video", src: "https://www.youtube.com/embed/rZycU5tuV0c", alt: "Demo de Accesibilidad" },
      { type: "image", src: buttonGenThumb, alt: "Generador de código accesible" }
    ]
  },
  {
    id: 4,
    title: "Libro Interactivo: Onboarding Experience",
    category: "Frontend & Accessibility Engineering",
    description: "MVP interactivo diseñado para transformar la retención de información en procesos de integración corporativa.",
    details: {
      problemStatement: "Sustitución de manuales estáticos ineficientes por una experiencia de aprendizaje dinámica que acelere el tiempo de rampa del empleado.",
      technicalImplementation: "Definición de flujos de navegación complejos en Figma y prototipado rápido en Canva para validación de concepto (MVP) en 48 horas.",
      impactDeliverables: "Establecimiento de estándares de prototipado animado para el equipo de diseño y aprobación inmediata de estrategia por dirección."
    },
    tech: ["Figma", "Canva", "UX Strategy", "Prototyping"],
    links: { demo: "https://www.behance.net/gallery/199491891/Gaceta-UNAM-Wireframe", code: "#" },
    image: onboardingThumb,
    gallery: [{ type: "image", src: onboardingThumb, alt: "Interactive Onboarding Prototype" }]
  },
  {
    id: 5,
    title: "Email Marketing Engineering: CRM Solutions",
    category: "CRM & Email Marketing Engineering",
    description: "Ingeniería de newsletters de alta complejidad para marcas globales con enfoque en conversión.",
    details: {
      problemStatement: "Fragmentación de la visualización de marca en clientes de correo críticos (Outlook/Gmail) y baja tasa de interacción.",
      technicalImplementation: "Maquetación modular con HTML5/CSS Inline y Salesforce. Implementación de sistemas de QA para asegurar renderizado consistente.",
      impactDeliverables: "Aumento en métricas de CTR y consolidación de gobernanza visual bajo estándares de accesibilidad WCAG."
    },
    tech: ["HTML5", "Salesforce", "Email Architecture", "QA Testing"],
    links: { demo: "https://www.behance.net/gallery/199490947/Mdico-conSentido-Email-Redesign", code: "#" },
    image: emailThumb,
    gallery: [{ type: "image", src: emailThumb, alt: "Email Campaign Design" }]
  },
  {
    id: 6,
    title: "Barcolana Coffee Shop eCommerce",
    category: "Frontend & Accessibility Engineering",
    description: "Desarrollo del primer canal de venta digital con arquitectura de datos dinámica.",
    details: {
      problemStatement: "Transformación de una marca física en un ecosistema eCommerce funcional con alta fidelidad visual.",
      technicalImplementation: "Gestión de catálogo mediante JSON dinámico y técnicas de CSS avanzado (pseudo-elementos) para optimización de performance.",
      impactDeliverables: "Sitio responsivo con cobertura del 90% de dispositivos y felicitación de dirección por excelencia ejecutiva."
    },
    tech: ["JavaScript", "JSON", "CSS3", "Responsive Design"],
    links: { demo: "https://www.behance.net/gallery/107557151/Barcolana-Web-Design", code: "#" },
    image: barcolanaThumb,
    gallery: [{ type: "image", src: barcolanaThumb, alt: "eCommerce Interface" }]
  },
  {
    id: 7,
    title: "Orchid House Polanco: Luxury Hospitality Site",
    category: "Frontend & Accessibility Engineering",
    description: "Desarrollo integral y localización multilingüe para el sector hotelero de lujo.",
    details: {
      problemStatement: "Liderazgo técnico para crear una presencia digital premium sin activos de diseño previos, optimizando recursos limitados.",
      technicalImplementation: "Dirección de arte y desarrollo custom en WordPress/Elementor. Gestión manual de localización bilingüe para mercado internacional.",
      impactDeliverables: "Plataforma 'Pixel-Perfect' autoadministrable que posicionó la marca en el mercado digital de lujo."
    },
    tech: ["WordPress", "Elementor", "Photoshop", "Localización"],
    links: { demo: "https://www.behance.net/gallery/107559393/Orchid-House-Hotels-Web-Design", code: "#" },
    image: orchidThumb,
    gallery: [{ type: "image", src: orchidThumb, alt: "Luxury Web Interface" }]
  },
  {
    id: 8,
    title: "Sanofi: Autocuidado Crisis Management",
    category: "Frontend & Accessibility Engineering",
    description: "Optimización de activos digitales críticos bajo plazos de entrega extremos para farmacéutica global.",
    details: {
      problemStatement: "Necesidad de actualización inmediata de activos informativos debido a diferencias horarias con equipos europeos.",
      technicalImplementation: "Resolución de crisis técnica en 4 horas (frente a 24h de plazo). Optimización de arquitectura de información en Illustrator.",
      impactDeliverables: "Lanzamiento de campaña sin retrasos y cumplimiento de rigurosos estándares de marca corporativa."
    },
    tech: ["Illustrator", "Digital Design", "Crisis Management"],
    links: { demo: "https://www.behance.net/gallery/107799015/Infografia-Mdico-ConSentido-Sanofi", code: "#" },
    image: sanofiThumb,
    gallery: [{ type: "image", src: sanofiThumb, alt: "Sanofi Digital Assets" }]
  },
  {
    id: 9,
    title: "Hammer Strength: Performance UI",
    category: "Frontend & Accessibility Engineering",
    description: "Interfaz industrial de alto impacto para equipamiento de fitness profesional.",
    details: {
      problemStatement: "Traducción de la identidad de marca física robusta a una experiencia digital que proyecte ingeniería de precisión.",
      technicalImplementation: "Estructuración de navegación técnica para catálogos extensos utilizando arquitecturas de información modernas.",
      impactDeliverables: "Plataforma visualmente coherente que mejoró la percepción digital y la generación de leads técnicos."
    },
    tech: ["HTML5", "CSS3", "UI/UX Architecture"],
    links: { demo: "https://www.behance.net/gallery/107558735/Hammer-Strength-Web-Design", code: "#" },
    image: hammerThumb,
    gallery: [{ type: "image", src: hammerThumb, alt: "Industrial UI Design" }]
  }
];