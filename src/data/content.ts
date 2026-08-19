export interface ProjectItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface ServiceItem {
  id: string;
  iconName: 'ShieldAlert' | 'Paintbrush' | 'Wrench' | 'Building2';
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
    tagline: "Soluciones de ingeniería que impulsan tu operación.",
    shortDescription: "Expertos en anticorrosión, revestimientos y mantenimiento industrial de alto desempeño.",
    fullDescription: "En Kaizen Ingeniería desarrollamos soluciones de ingeniería especializada en protección anticorrosiva, revestimientos industriales, obras civiles y mantención de infraestructura crítica. Nos enfocamos en entregar resultados medibles, cumpliendo los más altos estándares de calidad y seguridad.",
    phone: "+56 9 5753 0139",
    phoneSecondary: "+56 9 7573 3079",
    phoneTertiary: "+56 9 8583 5695",
    phoneFormatted: "+56 9 5753 0139",
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
      tag: "INGENIERÍA ESPECIALIZADA",
      title: "Soluciones de ingeniería que impulsan tu operación.",
      subtitle: "Expertos en anticorrosión, revestimientos de estanques en fibra de vidrio y mantenimiento industrial de alto desempeño.",
      ctaPrimary: "VER SERVICIOS",
      ctaPrimaryHref: "/servicios",
      ctaSecondary: "COTIZAR PROYECTO",
      ctaSecondaryHref: "/contacto",
    },
    {
      id: 2,
      image: "/images/hero/hero-slide-2.jpg",
      tag: "CAPITAL HUMANO & SEGURIDAD",
      title: "Ingeniería en terreno con los más altos estándares.",
      subtitle: "Personal técnico certificado y protocolos rigurosos para garantizar entornos seguros y continuidad operacional en cada faena.",
      ctaPrimary: "CONOCE MÁS",
      ctaPrimaryHref: "/nosotros",
      ctaSecondary: "VER SERVICIOS",
      ctaSecondaryHref: "/servicios",
    },
    {
      id: 3,
      image: "/images/hero/hero-slide-3.jpg",
      tag: "INFRAESTRUCTURA CRÍTICA",
      title: "Protegemos tus activos. Optimizamos tu operación.",
      subtitle: "Impermeabilización técnica, revestimientos de geomembranas y protección de infraestructura para minería e industria.",
      ctaPrimary: "VER PROYECTOS",
      ctaPrimaryHref: "/proyectos",
      ctaSecondary: "CONTACTAR AHORA",
      ctaSecondaryHref: "/contacto",
    }
  ] as HeroSlide[],

  hero: {
    tag: "INGENIERÍA ESPECIALIZADA",
    title: "Soluciones de ingeniería que impulsan tu operación.",
    subtitle: "Expertos en anticorrosión, revestimientos y mantenimiento industrial de alto desempeño.",
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
      "En Kaizen Ingeniería desarrollamos soluciones de ingeniería especializada en protección anticorrosiva, revestimientos industriales, obras civiles y mantención de infraestructura crítica.",
      "Nos enfocamos en entregar resultados medibles, cumpliendo los más altos estándares de calidad y seguridad."
    ],
    cta: "CONOCE MÁS",
    ctaHref: "/nosotros",
    image: "/images/experience-team.jpg"
  },

  projects: Array.from({ length: 18 }, (_, index) => {
    const id = index + 1;
    return {
      id,
      title: `Galería ${id}`,
      category: `Galería`,
      image: `/images/galeria/galeria-${id}.jpg`,
      description: `Registro fotográfico de obra y servicios especializados Kaizen Ingeniería - Proyecto ${id}.`
    };
  }) as ProjectItem[],

  clients: [
    { name: "Garreau Ingeniería y Construcción", logo: "/images/clients/garreau.svg", width: 180, height: 50 },
    { name: "Empresa Portuaria Austral", logo: "/images/clients/austral.svg", width: 180, height: 50 },
    { name: "Minera Michilla - Antofagasta Minerals", logo: "/images/clients/michilla.svg", width: 180, height: 50 },
    { name: "BHP Billiton", logo: "/images/clients/bhp.svg", width: 180, height: 50 },
  ],

  services: [
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
      image: "/images/services/linings-workers.jpg",
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
      question: "¿Qué tipo de proyectos realizan?",
      answer: "Nos especializamos en proyectos de protección anticorrosiva integral, aplicación de revestimientos técnicos (linings epóxicos, viniléster, poliureas), obras civiles, mantención de tanques, tuberías y paradas de planta para la industria minera, energética e industrial."
    },
    {
      id: 2,
      question: "¿En qué zonas trabajan?",
      answer: "Nuestra base central se encuentra en Antofagasta, prestando cobertura integral en toda la II Región (Antofagasta, Calama, Mejillones, Tocopilla) y desplegando cuadrillas especializadas a lo largo de todo Chile según los requerimientos del cliente."
    },
    {
      id: 3,
      question: "¿Cómo aseguran la calidad de sus trabajos?",
      answer: "Aplicamos rigurosos controles de calidad bajo normativas internacionales (SSPC, NACE, ASTM, ISO). Cada proyecto cuenta con dossier de calidad, certificados de calibración, pruebas de adherencia, medición de rugosidad, espesores de película seca y ensayos de detección de discontinuidades (holiday detector)."
    },
    {
      id: 4,
      question: "¿Cuáles son sus tiempos de respuesta?",
      answer: "Contamos con cuadrillas de rápida movilización para atenciones de emergencia operacional y entregamos propuestas técnico-económicas detalladas en un plazo promedio de 24 a 48 horas tras la visita técnica o recepción de especificaciones."
    }
  ]
};
