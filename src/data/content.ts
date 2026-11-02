import { WORK_PROJECTS, WorkItem } from "./projects";

export interface ProjectItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description?: string;
}

export interface ServiceItem {
  id: string;
  iconName: 'ShieldAlert' | 'Paintbrush' | 'Wrench' | 'Building2' | 'Layers' | 'Flame';
  title: string;
  description: string;
  image: string;
  details: string[];
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export interface HeroSlide {
  id: number;
  image: string;
  tag: string;
  title: string;
  subtitle: string;
  ctaPrimary: string;
  ctaPrimaryHref: string;
  ctaSecondary?: string;
  ctaSecondaryHref?: string;
}

export const SITE_DATA = {
  company: {
    name: "Kaizen Ingeniería",
    legalName: "KAIZEN INGENIERIA LTDA. / SpA",
    tagline: "Especialistas en HDPE, Fibra de Vidrio y Revestimientos en Antofagasta.",
    shortDescription: "Líderes en servicios de HDPE y Fibra de Vidrio en Antofagasta. Termofusión, geomembranas y revestimientos FRP para minería.",
    fullDescription: "En Kaizen Ingeniería desarrollamos soluciones de ingeniería especializada en HDPE en Antofagasta (termofusión, piping y geomembranas), revestimientos y estanques en fibra de vidrio (FRP), protección anticorrosiva, obras civiles y mantención de infraestructura crítica en la Región de Antofagasta.",
    phone: "+56 9 8583 5695",
    phoneSecondary: "+56 9 7573 3079",
    phoneFormatted: "+56 9 8583 5695",
    phoneSecondaryFormatted: "+56 9 7573 3079",
    email: "contacto@kaizeningenieria.cl",
    address: "Antofagasta, Chile",
    city: "Antofagasta",
    country: "Chile",
    yearsExperience: "Desde 2013",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117088.38072049615!2d-70.43574513697992!3d-23.633842603848784!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96afd53e0050cfd1%3A0x6e2468305f63901b!2sAntofagasta%2C%20Chile!5e0!3m2!1ses!2scl!4v1700000000000!5m2!1ses!2scl"
  },
  
  navLinks: [
    { label: "Inicio", href: "/" },
    { label: "Nosotros", href: "/nosotros" },
    { label: "Servicios", href: "/servicios" },
    { label: "Proyectos", href: "/proyectos" },
    { label: "Novedades", href: "/novedades" },
    { label: "Contacto", href: "/contacto" },
  ],

  heroSlides: [
    {
      id: 1,
      image: "/images/hero/hero-slide-1.jpg",
      tag: "HDPE Y FIBRA DE VIDRIO EN ANTOFAGASTA",
      title: "Líderes en HDPE y Fibra de Vidrio en Antofagasta.",
      subtitle: "Especialistas en termofusión de tuberías HDPE, geomembranas y revestimientos de estanques en fibra de vidrio (FRP) para la minería e industria.",
      ctaPrimary: "VER SERVICIOS",
      ctaPrimaryHref: "/servicios",
      ctaSecondary: "COTIZAR PROYECTO",
      ctaSecondaryHref: "/contacto",
    },
    {
      id: 2,
      image: "/images/hero/hero-slide-2.jpg",
      tag: "SERVICIOS DE HDPE EN ANTOFAGASTA",
      title: "Termofusión de HDPE y piping minero de alta presión.",
      subtitle: "Personal técnico certificado en soldadura a tope, electrofusión e instalación de tuberías HDPE en faenas de Antofagasta, Calama y Mejillones.",
      ctaPrimary: "SERVICIOS HDPE",
      ctaPrimaryHref: "/servicios#hdpe",
      ctaSecondary: "VER PROYECTOS",
      ctaSecondaryHref: "/proyectos",
    },
    {
      id: 3,
      image: "/images/hero/hero-slide-3.jpg",
      tag: "FIBRA DE VIDRIO EN ANTOFAGASTA",
      title: "Revestimientos en fibra de vidrio y estanques FRP.",
      subtitle: "Linings antiácidos en viniléster, fabricación, reparación in situ y laminado estructural en fibra de vidrio para condiciones químicas extremas.",
      ctaPrimary: "FIBRA DE VIDRIO",
      ctaPrimaryHref: "/servicios#fibra-de-vidrio",
      ctaSecondary: "CONTACTAR AHORA",
      ctaSecondaryHref: "/contacto",
    }
  ] as HeroSlide[],

  hero: {
    tag: "HDPE Y FIBRA DE VIDRIO EN ANTOFAGASTA",
    title: "Servicios de HDPE y Fibra de Vidrio en Antofagasta",
    subtitle: "Termofusión de tuberías HDPE, geomembranas, revestimientos en fibra de vidrio (FRP) y mantenimiento industrial de alto desempeño.",
    ctaPrimary: "VER SERVICIOS",
    ctaPrimaryHref: "/servicios",
  },

  features: [
    {
      icon: "ShieldCheck",
      title: "Enfoque en seguridad",
      description: "Implementamos prácticas que garantizan entornos de trabajo seguros y cumplimiento normativo en cada proyecto."
    },
    {
      icon: "Award",
      title: "Profesionalismo y experiencia",
      description: "Contamos con un equipo de ingenieros y técnicos altamente calificados con amplia trayectoria en la industria."
    },
    {
      icon: "BadgeCheck",
      title: "Calidad garantizada",
      description: "Usamos materiales de primera calidad y procesos certificados para asegurar resultados duraderos y confiables."
    },
    {
      isHighlight: true,
      icon: "FileSpreadsheet",
      title: "Soluciones a la medida para cada desafío",
      description: "Evaluamos cada necesidad y diseñamos soluciones personalizadas que optimizan recursos, extienden la vida útil de activos y maximizan la productividad.",
      cta: "COTIZAR PROYECTO",
      ctaHref: "/contacto"
    }
  ],

  about: {
    tag: "INGENIERÍA CON PROPÓSITO",
    title: "Protegemos tus activos. Optimizamos tu operación.",
    paragraphs: [
      "En Kaizen Ingeniería desarrollamos proyectos de fabricación y montaje de piping en HDPE, fabricación de estanques y piezas especiales en fibra de vidrio (FRP), revestimientos anticorrosivos de estanques de acero mediante sistemas FRP y fabricación de componentes especiales en HDPE en Antofagasta.",
      "Ofrecemos soluciones a medida para la industria minera e industrial, de acuerdo con los requerimientos técnicos de cada proyecto, priorizando la seguridad, calidad y confiabilidad de nuestros trabajos."
    ],
    cta: "CONOCE MÁS",
    ctaHref: "/nosotros",
    image: "/images/experience-team.jpg"
  },

  projects: WORK_PROJECTS as ProjectItem[],

  clients: [
    { name: "TierraU", logo: "/images/clients/tierrau.jpg" },
    { name: "Emaresa", logo: "/images/clients/emaresa.png" },
    { name: "Beka", logo: "/images/clients/beka.png" },
    { name: "Molynor", logo: "/images/clients/molynor.png" },
    { name: "BHP Billiton", logo: "/images/clients/bhp.jpg" },
    { name: "Sawu", logo: "/images/clients/sawu.png" },
    { name: "Hidronor", logo: "/images/clients/hidronor.png" },
    { name: "Cosemar", logo: "/images/clients/cosemar.jpg" },
    { name: "Puffer", logo: "/images/clients/puffer.png" },
    { name: "Enerfrost", logo: "/images/clients/enerfrost.png" },
    { name: "Westfire", logo: "/images/clients/westfire.jpg" },
    { name: "Mas Errázuriz", logo: "/images/clients/mas-errazuriz.png" },
    { name: "Molyb", logo: "/images/clients/molyb.jpg" },
    { name: "JMAQ", logo: "/images/clients/jmaq.png" },
    { name: "Interacid", logo: "/images/clients/interacid.png" },
    { name: "Paranal", logo: "/images/clients/paranal.jpg" },
  ],

  services: [
    {
      id: "hdpe",
      iconName: "Flame" as const,
      title: "Servicios de HDPE en Antofagasta",
      description: "Especialistas en termofusión de tuberías HDPE, electrofusión, montaje de piping minero y sellado de geomembranas para la industria y minería.",
      image: "/images/hero/hero-slide-2.jpg",
      details: [
        "Termofusión a tope de cañerías HDPE en diámetros de alta presión",
        "Instalación y sellado de geomembranas HDPE por cuña caliente",
        "Fabricación de manifolds, spools y fitting HDPE en terreno y taller"
      ]
    },
    {
      id: "fibra-de-vidrio",
      iconName: "Layers" as const,
      title: "Fibra de Vidrio en Antofagasta (FRP)",
      description: "Revestimiento de estanques en fibra de vidrio, linings antiácidos en resina viniléster y reparación in situ de ductos, celdas y canaletas.",
      image: "/images/services/linings-workers.jpg",
      details: [
        "Revestimientos de estanques en fibra de vidrio y viniléster (FRP)",
        "Reparación estructural in situ y laminado en faenas mineras 24/7",
        "Protección química extrema ante ácido sulfúrico y fluidos agresivos"
      ]
    },
    {
      id: "anticorrosiva",
      iconName: "ShieldAlert" as const,
      title: "Protección anticorrosiva",
      description: "Sistemas de recubrimientos industriales de alto desempeño para tanques, estructuras y tuberías.",
      image: "/images/services/anticorrosion-workers.jpg",
      details: ["Granallado y limpieza SSPC/NACE", "Esquemas epóxicos y poliuretanos", "Control de espesores y porosidad"]
    },
    {
      id: "revestimientos",
      iconName: "Paintbrush" as const,
      title: "Revestimientos industriales",
      description: "Aplicación de linings y recubrimientos especiales para ambientes agresivos y condiciones extremas.",
      image: "/images/hero/hero-slide-1.jpg",
      details: ["Linings de viniléster y fibra de vidrio", "Poliureas y elastómeros", "Pisos industriales de alto tráfico"]
    },
    {
      id: "mantencion",
      iconName: "Wrench" as const,
      title: "Mantención industrial",
      description: "Servicios de mantención preventiva y correctiva para asegurar la continuidad operacional.",
      image: "/images/services/maintenance-workers.jpg",
      details: ["Inspección técnica NDT", "Reparación estructural de tanques", "Paradas de planta y brigadas 24/7"]
    },
    {
      id: "obras-civiles",
      iconName: "Building2" as const,
      title: "Obras civiles e ingeniería",
      description: "Diseño y ejecución de obras civiles, modificaciones y proyectos de ingeniería a medida.",
      image: "/images/services/civil-workers.jpg",
      details: ["Fundaciones y losas industriales", "Montaje de piping y estructuras", "Proyectos de ingeniería de detalle"]
    }
  ],

  portfolioSection: {
    tag: "PORTAFOLIO",
    title: "Soluciones que construyen confianza",
    subtitle: "Desarrollamos proyectos en diversos sectores industriales, con resultados que hablan por sí mismos.",
    image: "/images/portfolio-equipment.jpg",
    sectors: [
      "Minería",
      "Energía",
      "Hidrocarburos",
      "Agroindustria",
      "Infraestructura"
    ],
    cta: "VER PORTAFOLIO COMPLETO",
    ctaHref: "/proyectos"
  },

  faqs: [
    {
      id: 1,
      question: "¿Cuáles son nuestros principales servicios y especialidades?",
      answer: "En Kaizen Ingeniería desarrollamos proyectos de fabricación y montaje de piping en HDPE, fabricación de estanques y piezas especiales en fibra de vidrio (FRP), revestimientos anticorrosivos de estanques de acero mediante sistemas FRP y fabricación de componentes especiales en HDPE. Ofrecemos soluciones a medida para la industria minera e industrial, de acuerdo con los requerimientos técnicos de cada proyecto, priorizando la seguridad, calidad y confiabilidad de nuestros trabajos."
    },
    {
      id: 2,
      question: "¿Qué servicios de HDPE realizan en Antofagasta?",
      answer: "En Kaizen Ingeniería somos especialistas en servicios de HDPE en Antofagasta y faenas mineras de la II Región. Ejecutamos termofusión a tope y electrofusión de tuberías HDPE de alta presión para líneas de impulsión de agua de mar, salmueras, concentrados y pulpas mineras. Además, proveemos montaje de spools, manifolds y soldadura certificada de geomembranas HDPE para piscinas de lixiviación y tranques de relaves con control de calidad mediante caja de vacío y pruebas destructivas/no destructivas."
    },
    {
      id: 3,
      question: "¿Realizan revestimientos y reparación en fibra de vidrio (FRP) en Antofagasta?",
      answer: "Sí, somos empresa referente en aplicaciones de fibra de vidrio en Antofagasta. Desarrollamos revestimientos monolíticos en fibra de vidrio (FRP) con resinas viniléster y epóxicas de alta resistencia química para proteger estanques de ácido sulfúrico, celdas electrolíticas, tinas EW, canaletas y ductos. Ofrecemos también servicio de emergencia para laminado estructural y reparación de estanques en fibra de vidrio in situ en faenas mineras."
    },
    {
      id: 4,
      question: "¿En qué zonas y faenas mineras prestan servicios?",
      answer: "Nuestra base de operaciones está en Antofagasta, con cobertura inmediata en toda la II Región (Antofagasta, Calama, Mejillones, Tocopilla, Sierra Gorda) y capacidad técnica para desplegar cuadrillas especializadas con equipamiento autónomo a lo largo de todo Chile."
    },
    {
      id: 5,
      question: "¿Cómo aseguran la calidad y seguridad de sus trabajos?",
      answer: "Aplicamos rigurosos protocolos de calidad bajo normativas internacionales (SSPC, NACE/AMPP, ASTM, ASME RTP-1, ISO). Cada servicio cuenta con operadores calificados, dossier de calidad, certificados de calibración, pruebas de adherencia, control de rugosidad, espesores de película seca y detección de discontinuidades (holiday detector)."
    },
    {
      id: 6,
      question: "¿Cuáles son sus tiempos de respuesta para cotizaciones y emergencias?",
      answer: "Contamos con brigadas móviles preparadas para rápida movilización ante emergencias operacionales 24/7 y entregamos propuestas técnico-económicas detalladas en un plazo promedio de 24 a 48 horas tras el levantamiento en terreno o recepción de bases técnicas."
    }
  ]
};
