// src/data/projects.js
import jetDevsImg from '../assets/projects/JetDevs__thumbnail.png';
import medicoConSentidoImg from '../assets/projects/MedicoConSentido__thumbnail.png';
import barcolanaImg from '../assets/projects/Barcolana__thumbnail.png';
import orchidHouseImg from '../assets/projects/OrchidHouse__thumbnail.png';
import autoCuidadoImg from '../assets/projects/AutoCuidado__thumbnail.png';
import hammerStrenghtImg from '../assets/projects/HammerStrength__thumbnail.png';
import gacetaUNAMWireframesImg from '../assets/projects/GacetaUNAM__Wireframes_thumbnail.png';
import gacetaUNAMResearchImg from '../assets/projects/GacetaUNAM__Research_thumbnail.png';
import buttonGeneratorCodeImg from '../assets/projects/buttonGenerator_thumbnail.png';
import libroInteractivo1Img from '../assets/projects/FlipBookTableofContents_thumbnail.png';
import libroInteractivo2Img from '../assets/projects/FlipBookAnimation_thumbnail.png';

// Import your video asset here
// import buttonGeneratorVid from '../assets/projects/buttonGenerator_demo.mp4';

export const projects = [
{
    id: 1,
    title: "Button Generator Code",
    category: "React/JS",
    description: "Single Page Application (SPA) que ayuda a personas a crear código HTML para generar botones accesibles.",
    details: {
      analysis: "Este proyecto nació para eliminar un cuello de botella crítico y mitigar riesgos legales significativos. El equipo de diseño y los editores perdían horas en ajustes manuales que resultaban en componentes rotos o ilegibles, vulnerando las normativas WCAG 2.1 y las leyes ADA de EE.UU. Mi objetivo fue crear una herramienta que garantizara componentes 'accesibles por diseño', protegiendo la integridad legal de la plataforma y asegurando una experiencia inclusiva.",
      
      process: [
        "Auditoría de UX y Accesibilidad: Analicé los errores comunes en la intranet y establecí una lógica de contraste dinámico (WCAG) para asegurar la legibilidad automática del texto.",
        "Arquitectura React: Desarrollé una interfaz reactiva con previsualización en tiempo real y un sistema de 'copiado limpio' que entrega HTML y CSS modular listo para usar.",
        "Validación y Resiliencia: Implementé pruebas de navegación por teclado y una arquitectura de 'Mock Data Fallback' para garantizar la operatividad incluso ante fallos de red o errores de CORS."
      ],
      
      conclusion: "Se logró una plataforma robusta que ahorra de 4 a 8 horas semanales de trabajo manual. Transformamos un proceso frustrante en una experiencia 'pixel-perfect' de un solo clic, priorizando la autonomía del usuario y manteniendo la fidelidad visual en toda la intranet."
    },
    tech: ["React", "CSS Modules", "WCAG 2.1", "ADA Compliance"],
    links: { 
      demo: "AQUÍ VA EL LINK A BEHANCE", 
      code: "#" 
    },
    image: buttonGeneratorCodeImg,
    gallery: [
      { 
        type: "video", 
        src: "URL_DE_TU_VIDEO", // O la variable importada
        alt: "Demostración funcional del generador de botones" 
      },
      { 
        type: "image", 
        src: buttonGeneratorCodeImg, 
        alt: "Interfaz principal del proyecto" 
      }
    ]
  },
  {
    id: 2,
    title: "Libro Interactivo: Onboarding Experience",
    category: "UX/UI & Prototyping",
    description: "Prototipo de alta fidelidad diseñado para transformar la experiencia de bienvenida (onboarding) de nuevos colaboradores.",
    details: {
      analysis: "El desafío era modernizar un proceso de integración técnica que dependía exclusivamente de un sitio web con pasos estáticos. Este proyecto nació para transformar esa experiencia lineal en un acompañamiento interactivo que facilitara el aterrizaje de los nuevos colegas en la empresa. El objetivo fue sustituir el contenido plano por una experiencia que generara un 'wow effect' desde el primer día, asegurando que la información crítica fuera dinámica, accesible y memorable.",
      
      process: [
        "Conceptualización Visual: Diseñé la identidad gráfica en Canva, estableciendo un sistema de componentes visuales que facilitara la digestión de contenidos complejos.",
        "Arquitectura de Interacción: Importé los assets en Figma para construir un prototipo funcional, definiendo flujos de navegación intuitivos y microinteracciones.",
        "Motion Design: Desarrollé animaciones clave para elevar la percepción de calidad del producto y guiar la atención del usuario hacia puntos de contacto importantes.",
        "Validación y Pitch: Presenté el prototipo funcional a nivel gerencial, utilizando la interactividad para demostrar el valor del concepto en una sesión de pitch real."
      ],
      
      conclusion: "En solo 48 horas, entregamos un MVP (Producto Mínimo Viable) que no solo logró la aprobación del concepto por la dirección, sino que estableció el uso de prototipos animados como el nuevo estándar de entrega para todo el equipo de diseño. Pasamos de ideas estáticas a experiencias tangibles que aceleran la toma de decisiones."
    },
    tech: ["Figma", "Canva", "Interaction Design", "Prototyping"],
    links: { 
      demo: "AQUÍ VA EL LINK A BEHANCE", 
      code: "#" 
    },
    image: libroInteractivo1Img,
    gallery: [
      { 
        type: "video", 
        src: "URL_DE_TU_VIDEO", // O la variable importada
        alt: "Recorrido por la experiencia interactiva del libro de onboarding" 
      },
      { 
        type: "image", 
        src: libroInteractivo2Img, 
        alt: "Vista de las capas y flujo de interacción en Figma" 
      }
    ]
  },
{
    id: 3,
    title: "Email Marketing Campaigns",
    category: "Design & HTML Development",
    description: "Diseño y desarrollo de newsletters optimizadas para conversión y compatibilidad multiplataforma.",
    details: {
      analysis: "El objetivo fue profesionalizar la comunicación vía email, creando piezas que equilibran la estética visual con la viabilidad técnica. Me enfoqué en resolver problemas comunes de visualización en clientes de correo mediante código HTML especializado, asegurando que cada campaña llegara al usuario de forma impecable y accesible.",
      
      process: [
        "Estrategia Visual: Diseñé layouts optimizados para clics (CTR), utilizando jerarquías visuales que destacan el mensaje clave y los puntos de conversión.",
        "Desarrollo HTML/CSS: Maqueté newsletters utilizando código robusto (tablas y CSS inline) para garantizar consistencia en clientes difíciles como Outlook y dispositivos móviles.",
        "Control de Calidad: Implementé flujos de testing para validar la entregabilidad y la correcta visualización de assets, optimizando el peso y la carga de cada pieza."
      ],
      
      conclusion: "El resultado fue una mejora en la métrica de interacción de las campañas. Pasamos de envíos genéricos a experiencias de usuario consistentes, donde el diseño y el código trabajan juntos para capturar la atención en bandejas de entrada saturadas."
    },
    tech: ["HTML for Email", "CSS Inline", "Figma", "Email Marketing Platforms"],
    links: { 
      demo: "LINK_A_BEHANCE", 
      code: "#" 
    },
    image: medicoConSentidoImg, // Aquí puedes cambiar el nombre de la imagen a uno más acorde si lo tienes
    gallery: [
      { 
        type: "image", 
        src: medicoConSentidoImg, 
        alt: "Muestra de diseño de Newsletter responsiva" 
      }
    ]
  },  
{
    id: 4,
    title: "Barcolana Coffee Shop",
    category: "Front-End Development",
    description: "Desarrollo del primer eCommerce para una marca de café, priorizando la fidelidad visual y una arquitectura responsiva extrema.",
    details: {
      analysis: "El desafío fue digitalizar una marca de café premium a través de su primer sitio de comercio electrónico. Trabajando en conjunto con el equipo de marketing, mi rol fue asegurar que la visión estética se tradujera en un sitio web funcional, rápido y capaz de convertir visitantes en clientes.",
      
      process: [
        "Gestión de Datos: Utilicé archivos JSON para organizar el catálogo de productos, permitiendo una carga dinámica y una estructura de código más eficiente.",
        "Artesanía en CSS: Implementé técnicas avanzadas con pseudo-elementos (:before) para recrear elementos gráficos complejos del diseño original, eliminando la dependencia de imágenes pesadas.",
        "Optimización Multi-dispositivo: Desarrollé una estrategia de Media Queries que garantizó la compatibilidad estética y funcional en más del 90% de los dispositivos móviles y de escritorio."
      ],
      
      conclusion: "Logramos lanzar el primer canal de ventas digital de Barcolana con un éxito visual rotundo y una adaptabilidad técnica superior. El proyecto no solo cumplió con los objetivos comerciales, sino que recibimos una felicitación especial por parte de la Dirección del proyecto, destacando la sinergia lograda con el equipo de diseño y la excelencia en la ejecución. Este proyecto marcó un hito en mi carrera al perfeccionar mis habilidades en CSS avanzado y diseño responsivo, entregando una herramienta robusta que superó todas las expectativas del cliente."
    },
    tech: ["HTML5", "CSS3", "JavaScript", "JSON", "Responsive Design"],
    links: { 
      demo: "LINK_A_BEHANCE", 
      code: "#" 
    },
    image: barcolanaImg,
    gallery: [
      { 
        type: "image", 
        src: barcolanaImg, 
        alt: "Interfaz del eCommerce de Barcolana" 
      }
    ]
  },
{
    id: 5,
    title: "Orchid House Polanco",
    category: "Web Design & CMS Development",
    description: "Desarrollo integral y diseño 'desde cero' de un sitio multilingüe para hotelería de lujo.",
    details: {
      analysis: "Para este hotel boutique en Polanco, el desafío fue la autonomía total. Sin un diseño previo ni plantillas, asumí la dirección creativa y técnica para construir una experiencia de lujo, optimizando recursos visuales limitados para proyectar una imagen premium y profesional.",
      
      process: [
        "Dirección de Arte: Diseñé la identidad visual y procesé material fotográfico de baja resolución (WhatsApp) mediante Photoshop para elevar su calidad estética.",
        "Desarrollo Custom: Utilicé WordPress y Elementor para maquetar un sitio 100% personalizado, evitando el uso de plantillas genéricas y priorizando la velocidad y el diseño.",
        "Estrategia Multilingüe: Gestioné la arquitectura de información en español e inglés de forma manual, garantizando una localización precisa para el público extranjero."
      ],
      
      conclusion: "Entregué un ecosistema digital funcional y elegante que permitió al hotel profesionalizar su presencia online. Este proyecto demostró mi capacidad para liderar todas las etapas de un producto digital, desde la hoja en blanco hasta el despliegue final en producción."
    },
    tech: ["WordPress", "Elementor", "Photoshop", "Multilingual SEO"],
    links: { 
      demo: "LINK_A_BEHANCE", 
      code: "#" 
    },
    image: orchidHouseImg,
    gallery: [
      { 
        type: "image", 
        src: orchidHouseImg, 
        alt: "Home page de Orchid House Hotel" 
      }
    ]
  },
{
  id: 6,
  title: "Sanofi: Guía de Autocuidado",
  category: "Web Development / UI Design",
  description: "Plataforma educativa interactiva diseñada para centralizar y facilitar el acceso a recursos de salud y bienestar.",
  details: {
    analysis: "Este proyecto nació de la necesidad de Sanofi de ofrecer una herramienta digital intuitiva que permitiera a los usuarios navegar por contenidos complejos de salud de forma sencilla. El reto principal fue transformar una gran cantidad de información técnica y legal en una experiencia de usuario fluida, atractiva y funcional bajo tiempos de entrega sumamente ajustados.",
    
    process: [
      "Arquitectura de Información: Diseñé una estructura de navegación clara que desglosa contenidos médicos y legales complejos en secciones digeribles para el usuario final.",
      "Interfaz de Confianza: Implementé una estética limpia y profesional, alineada con los estándares globales de Sanofi, utilizando una paleta de colores que transmite bienestar y seguridad.",
      "Resolución de Crisis Operativa: Optimicé el flujo de trabajo para entregar el proyecto de forma anticipada, eliminando el cuello de botella logístico provocado por la diferencia de horario con los equipos en Europa.",
      "Interactividad Educativa: Desarrollé componentes interactivos que guían al usuario paso a paso, asegurando que la información clave de autocuidado sea fácil de encontrar y comprender."
    ],

    conclusion: "La entrega anticipada permitió que la campaña de Sanofi se lanzara sin contratiempos, eliminando el cuello de botella que representaba la diferencia de horario con Europa. Este proyecto demostró mi capacidad para resolver crisis operativas mediante el diseño técnico, entregando un producto final optimizado que cumplió con los rigurosos estándares de la marca."
  },
  tech: ["React", "Tailwind CSS", "UI Design", "Information Architecture"],
  links: { 
    demo: "#", // Agrega el link si está disponible
    code: "#" 
  },
  image: autoCuidadoImg,
  gallery: [
    { 
      type: "image", 
      src: autoCuidadoImg, 
      alt: "Interfaz de la plataforma Sanofi Autocuidado" 
    }
  ]
},
{
  id: 7,
  title: "Hammer Strength",
  category: "Web Development / UI Design",
  tech: ["HTML", "CSS", "UI/UX"],
  description: "Interfaz de alto rendimiento para una de las marcas más robustas en el mundo del fitness profesional.",
  details: {
    analysis: "El desafío principal fue proyectar la 'fuerza' de la marca Hammer Strength en una experiencia digital. No se trataba solo de mostrar equipos de gimnasio, o personas haciendo ejercicio, sino de transmitir una sensación de durabilidad, ingeniería de precisión y alto rendimiento a través de una interfaz limpia pero visualmente imponente.",
    process: [
      "Moodboarding industrial: Definición de una paleta de colores y tipografías que evocaran la rudeza del acero y la precisión del entrenamiento profesional.",
      "Arquitectura de Información: Estructuración del sitio web para facilitar la navegación técnica entre diferentes líneas de entrenamientos disponibles.",
      "Desarrollo de Interfaz: Implementación de componentes en HTML utilizando CSS para asegurar un diseño responsivo y moderno."
    ],
    conclusion: "Se entregó una plataforma visualmente coherente con la identidad física de la marca, mejorando la percepción digital del usuario y facilitando la consulta de los servicios disponibles."
  },
  gallery: [
    {
      type: "image",
      src: hammerStrenghtImg,
      alt: "Vista principal de la interfaz de Hammer Strength"
    }
  ]
},
{
  id: 8,
  title: "Gaceta UNAM: Rediseño Digital",
  category: "UX Research / UI Design",
  description: "Estrategia de rediseño basada en datos para modernizar la experiencia de lectura del órgano informativo oficial de la UNAM.",
  details: {
    analysis: "El objetivo principal fue transformar un sitio de noticias institucional con una arquitectura de información saturada en una plataforma de lectura moderna y ágil. El reto no era solo visual, sino de usabilidad: ¿cómo organizar décadas de archivos informativos de manera que el estudiante actual y el académico encuentren valor rápidamente?",
    
    process: [
      "Fase de Research: Realicé una auditoría de contenido y análisis de flujo de usuarios para detectar los puntos de mayor fricción en la navegación actual.",
      "Wireframing de Baja y Alta Fidelidad: Creé estructuras esqueléticas enfocadas en la legibilidad y la jerarquía tipográfica antes de pasar a la interfaz final.",
      "Arquitectura de Información: Reestructuré las categorías y el sistema de búsqueda para permitir un acceso más intuitivo a las ediciones históricas.",
      "Diseño Centrado en el Usuario: Implementé un sistema visual limpio que respeta la identidad institucional pero con un enfoque editorial contemporáneo."
    ],

    conclusion: "Este proyecto consolidó mi metodología de diseño basada en la investigación. Logramos una propuesta que balancea el peso histórico de la Gaceta con las necesidades de consumo digital rápido, resultando en una interfaz que mejora la retención de lectura y dignifica el contenido periodístico de la universidad."
  },
  tech: ["UX Research", "Figma", "Wireframing", "Information Architecture"],
  links: { 
    demo: "#", 
    code: "#" 
  },
  image: gacetaUNAMWireframesImg,
  gallery: [
    { 
      type: "image", 
      src: gacetaUNAMResearchImg, 
      alt: "Fase de investigación y análisis de usuario" 
    },
    { 
      type: "image", 
      src: gacetaUNAMWireframesImg, 
      alt: "Prototipos y wireframes del rediseño" 
    }
  ]
},
{
    id: 9,
    title: "Libro Interactivo: Onboarding",
    category: "UI Design / UX Strategy",
    description: "Sistema de navegación animado diseñado para guiar a nuevos colaboradores a través de los procesos internos de la empresa.",
    details: {
      analysis: "El desafío era transformar manuales estáticos en una experiencia dinámica que no abrumara al usuario. La estrategia se centró en utilizar el movimiento no como adorno, sino como una herramienta de navegación: los elementos de la página cobran vida para convertirse en los puntos de acceso a las siguientes secciones, manteniendo el flujo de atención del usuario siempre activo.",
      
      process: [
        "Core de Interactividad: Diseñé animaciones de entrada y movimiento de elementos en Figma que actúan como disparadores lógicos para la navegación entre secciones.",
        "Prototipado Funcional: Utilicé las capacidades avanzadas de Figma para validar que el movimiento de los componentes fuera intuitivo antes de su exportación.",
        "Accesibilidad y Marca: Implementé una paleta de colores corporativa bajo estándares WCAG, asegurando que la interactividad fuera legible para todos los usuarios.",
        "Optimización de Entrega: Una vez validada la experiencia, repliqué la lógica visual en Canva para entregar una herramienta auto-gestionable por el equipo de RH."
      ],
      
      conclusion: "Este proyecto me permitió explorar el uso de la animación como lenguaje de navegación. Al convertir el movimiento de los elementos en botones de transición, logramos un onboarding mucho más orgánico y fluido. La resolución exitosa de este flujo demostró que se pueden crear herramientas de aprendizaje potentes y accesibles combinando diseño estratégico y herramientas versátiles."
    },
    tech: ["Figma", "Canva", "UI Design", "UX Motion", "WCAG"],
    links: { 
      demo: "#", 
      code: "#" 
    },
    image: libroInteractivo1Img,
    gallery: [
      { 
        type: "image", 
        src: libroInteractivo1Img, 
        alt: "Sistema de navegación animado y tabla de contenidos" 
      },
      { 
        type: "image", 
        src: libroInteractivo2Img, 
        alt: "Elementos dinámicos que actúan como puntos de navegación" 
      }
    ]
  }


];