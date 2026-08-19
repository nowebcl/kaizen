export interface Article {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  author: string;
  keywords: string[];
  content: {
    intro: string;
    sections: {
      heading: string;
      body: string;
      bullets?: string[];
    }[];
    conclusion: string;
  };
}

export const ARTICLES_DATA: Article[] = [
  {
    slug: "proteccion-anticorrosiva-en-antofagasta",
    title: "Protección Anticorrosiva en Antofagasta: Guía Integral para la Gran Minería e Industria",
    seoTitle: "Protección Anticorrosiva en Antofagasta | Servicios Mineros Kaizen",
    metaDescription: "Servicios expertos de protección anticorrosiva en Antofagasta, Calama y Mejillones. Esquemas epóxicos certificados bajo normas SSPC y NACE para faenas mineras.",
    excerpt: "Descubre cómo combatir la agresiva corrosión marina y química en faenas del norte de Chile mediante granallado técnico y recubrimientos de alto desempeño.",
    category: "Anticorrosión",
    date: "18 de Agosto, 2024",
    readTime: "5 min de lectura",
    image: "/images/galeria/galeria-1.jpg",
    author: "Ingeniería Kaizen SpA",
    keywords: [
      "Protección anticorrosiva en Antofagasta",
      "Pintura industrial Antofagasta",
      "Granallado SSPC Mejillones",
      "Esquemas epóxicos minería Chile",
      "Control de corrosión en tanques Antofagasta"
    ],
    content: {
      intro: "La Región de Antofagasta presenta uno de los desafíos ambientales más exigentes del mundo para la infraestructura metálica e industrial. La combinación de alta salinidad costera en puertos como Mejillones y Antofagasta, sumada a la radiación solar extrema y los fluidos ácidos propios de los procesos hidrometalúrgicos de la gran minería, acelera drásticamente los fenómenos de oxidación y corrosión.",
      sections: [
        {
          heading: "¿Por qué es crítica la protección anticorrosiva en la zona norte?",
          body: "En faenas mineras y plantas de procesos, la falta de un recubrimiento adecuado no solo genera pérdidas económicas millonarias por detenciones no programadas, sino que compromete la integridad estructural y la seguridad de los trabajadores.",
          bullets: [
            "Resistencia a niebla salina y agentes químicos altamente corrosivos (ácido sulfúrico, agua de mar, salmueras).",
            "Protección contra abrasión mecánica por transporte de pulpas minerales.",
            "Extensión demostrada de la vida útil de tanques, tuberías y estructuras en más de un 300%."
          ]
        },
        {
          heading: "Tecnologías y Estándares Aplicados por Kaizen Ingeniería",
          body: "En Kaizen Ingeniería implementamos procesos rigurosamente certificados conforme a las normativas internacionales de la SSPC (Society for Protective Coatings) y NACE International (ahora AMPP).",
          bullets: [
            "Preparación de superficie mediante granallado abrasivo a metal casi blanco (SSPC-SP10 / NACE No. 2).",
            "Aplicación de primers ricos en zinc inorgánico y epóxicos de alta barrera.",
            "Acabados en poliuretano alifático con alta reflectancia y resistencia UV para resistir el desierto de Atacama.",
            "Inspección de espesor de película seca (DFT) y ensayos de holiday detector (cero porosidad)."
          ]
        },
        {
          heading: "Cobertura y Servicios en Terreno en Antofagasta",
          body: "Contamos con cuadrillas móviles especializadas capaces de desplegarse en faenas mineras en Antofagasta, Sierra Gorda, Calama, Tocopilla y Mejillones, realizando mantenciones programadas y atenciones de emergencia 24/7."
        }
      ],
      conclusion: "Invertir en una adecuada protección anticorrosiva en Antofagasta es la decisión más rentable para proteger sus activos industriales. En Kaizen Ingeniería combinamos experiencia desde 2013 con los más altos estándares de calidad."
    }
  },
  {
    slug: "revestimientos-industriales-y-linings-antofagasta",
    title: "Revestimientos Industriales y Linings en Antofagasta: Resistencia Química Extrema",
    seoTitle: "Revestimientos Industriales y Linings en Antofagasta | Kaizen",
    metaDescription: "Aplicación de revestimientos de fibra de vidrio (FRP), viniléster y poliureas en Antofagasta. Linings de alta resistencia química para estanques y canaletas mineras.",
    excerpt: "Aprende cómo los revestimientos de viniléster y fibra de vidrio protegen estanques espesadores, piscinas y canaletas ante ácidos agresivos en la Región de Antofagasta.",
    category: "Revestimientos",
    date: "12 de Agosto, 2024",
    readTime: "6 min de lectura",
    image: "/images/hero/hero-slide-1.jpg",
    author: "Equipo Técnico Kaizen",
    keywords: [
      "Revestimientos industriales en Antofagasta",
      "Linings de fibra de vidrio Antofagasta",
      "Revestimiento de viniléster Chile",
      "Poliurea proyectada Antofagasta",
      "Revestimiento estanques ácido sulfúrico"
    ],
    content: {
      intro: "Los procesos de lixiviación, electroobtención (EW) y flotación en la industria minera de Antofagasta someten a los estanques, canaletas y pisos a soluciones químicas sumamente corrosivas a temperaturas variables. Los recubrimientos convencionales fallan rápidamente bajo estas condiciones, requiriendo soluciones de lining compuesto de alta ingeniería.",
      sections: [
        {
          heading: "Tipos de Revestimientos Especializados",
          body: "En Kaizen Ingeniería evaluamos los parámetros termoquímicos y mecánicos de cada instalación para especificar el material ideal:",
          bullets: [
            "Linings de Resina Viniléster con Fibra de Vidrio (FRP): Excelente resistencia contra ácido sulfúrico concentrado y soluciones cloruradas.",
            "Poliureas Puras Proyectadas en Caliente: Membrana elastomérica continua de curado ultrarrápido con elongación superior al 400% y resistencia a abrasión.",
            "Morteros Epóxicos y Pisos Industriales de Alto Tráfico: Formulados para soportar tránsito pesado de grúas y derrames químicos severos."
          ]
        },
        {
          heading: "Protocolo de Calidad y Control en Obra",
          body: "Cada aplicación se ejecuta bajo estrictos parámetros ambientales (control de temperatura de sustrato, punto de rocío y humedad relativa), asegurando una adherencia monolítica y durabilidad garantizada por escrito."
        }
      ],
      conclusion: "Si buscas una empresa líder en revestimientos industriales en Antofagasta, Kaizen Ingeniería te brinda asesoría técnica especializada y ejecución con brigadas certificadas."
    }
  },
  {
    slug: "mantenimiento-industrial-y-paradas-de-planta-antofagasta",
    title: "Mantenimiento Industrial y Paradas de Planta en Antofagasta: Continuidad y Seguridad",
    seoTitle: "Mantenimiento Industrial en Antofagasta | Paradas de Planta Kaizen",
    metaDescription: "Servicios de mantenimiento industrial preventivo y correctivo en Antofagasta. Especialistas en paradas de planta, tanques, piping y obras civiles para minería.",
    excerpt: "Estrategias de mantención mayor para asegurar la máxima disponibilidad mecánica y operacional de plantas de procesos mineros en el norte de Chile.",
    category: "Mantenimiento",
    date: "5 de Agosto, 2024",
    readTime: "4 min de lectura",
    image: "/images/hero/hero-slide-2.jpg",
    author: "Ingeniería de Mantenimiento Kaizen",
    keywords: [
      "Mantenimiento industrial en Antofagasta",
      "Paradas de planta minera Antofagasta",
      "Mantención de estanques espesadores",
      "Inspección técnica NDT Antofagasta",
      "Reparación piping minero Chile"
    ],
    content: {
      intro: "Las paradas de planta representan ventanas operacionales críticas donde cada hora cuenta. La ejecución impecable de los trabajos de mantenimiento mecánico, inspección no destructiva (NDT) y reacondicionamiento de superficies es vital para evitar demoras y sobrecostos.",
      sections: [
        {
          heading: "Capacidades en Paradas de Planta en la II Región",
          body: "Kaizen Ingeniería dispone de cuadrillas multidisciplinarias con equipamiento autónomo propio (torres de iluminación, generadores, equipos de granallado y proyección de pintura) preparadas para turnos continuos 24/7.",
          bullets: [
            "Mantenimiento estructural de estanques de relaves, celdas de flotación y espesadores.",
            "Reemplazo y revestimiento de spools y cañerías de transporte de pulpa.",
            "Reparación de manholes, juntas de expansión y elementos de sellado hermético.",
            "Inspección mediante ultrasonido y ensayos no destructivos certificados."
          ]
        }
      ],
      conclusion: "Confía el mantenimiento de tu planta a especialistas en Antofagasta con trayectoria probada y compromiso cero accidentes."
    }
  },
  {
    slug: "obras-civiles-e-ingenieria-antofagasta",
    title: "Obras Civiles e Ingeniería en la Región de Antofagasta: Estándares Mineros",
    seoTitle: "Obras Civiles e Ingeniería en Antofagasta | Kaizen Minería",
    metaDescription: "Diseño y ejecución de obras civiles e ingeniería en Antofagasta. Losas industriales, fundaciones de maquinaria pesada y obras estructurales para faenas mineras.",
    excerpt: "Conoce los requisitos clave para la ejecución exitosa de obras civiles y montajes industriales en el riguroso entorno geográfico y normativo de Antofagasta.",
    category: "Obras Civiles",
    date: "28 de Julio, 2024",
    readTime: "5 min de lectura",
    image: "/images/portfolio-equipment.jpg",
    author: "Departamento de Obras Civiles Kaizen",
    keywords: [
      "Obras civiles en Antofagasta",
      "Ingeniería civil minera Antofagasta",
      "Fundaciones pesadas minería Chile",
      "Montaje de estructuras metálicas Antofagasta",
      "Construcción industrial Calama y Mejillones"
    ],
    content: {
      intro: "La construcción y modificación de infraestructura en faenas mineras de la Región de Antofagasta exige conocimientos avanzados sobre suelos salinos, sismicidad y condiciones climáticas extremas.",
      sections: [
        {
          heading: "Alcances de Nuestros Proyectos Civiles",
          body: "Desarrollamos soluciones desde la ingeniería conceptual y de detalle hasta la ejecución llave en mano:",
          bullets: [
            "Fundaciones para chancadores, molinos, bombas y generadores de gran tonelaje.",
            "Muros de contención, pretiles de seguridad y losas de hormigón reforzado con aditivos impermeabilizantes.",
            "Modificaciones de piping y montaje estructural en altura.",
            "Sistemas de drenaje técnico y canalizaciones industriales."
          ]
        }
      ],
      conclusion: "Kaizen Ingeniería es tu socio estratégico para proyectos civiles e industriales en toda la Región de Antofagasta."
    }
  },
  {
    slug: "impermeabilizacion-tecnica-y-geomembranas-antofagasta",
    title: "Impermeabilización Técnica y Geomembranas en Antofagasta: Cero Filtraciones",
    seoTitle: "Impermeabilización y Geomembranas en Antofagasta | Kaizen",
    metaDescription: "Instalación y sellado de geomembranas HDPE en Antofagasta. Impermeabilización de tranques de relaves, piscinas de acumulación y zanjas en minería.",
    excerpt: "Control integral de pérdidas y prevención de contaminación en piscinas de procesos y tranques mediante geomembranas de polietileno de alta densidad.",
    category: "Impermeabilización",
    date: "20 de Julio, 2024",
    readTime: "6 min de lectura",
    image: "/images/hero/hero-slide-3.jpg",
    author: "Especialistas en Geosintéticos Kaizen",
    keywords: [
      "Impermeabilización técnica Antofagasta",
      "Geomembranas HDPE en Antofagasta",
      "Sellado termofusión tranques mineros",
      "Piscinas de acumulación de agua salada",
      "Revestimiento de piscinas industriales Chile"
    ],
    content: {
      intro: "La escasez hídrica en el desierto de Atacama hace que la gestión y conservación del agua sea una prioridad estratégica. Las piscinas de almacenamiento de agua desalada, tranques y zanjas de lixiviación requieren sistemas de impermeabilización con geomembranas HDPE que garanticen estanqueidad total durante décadas.",
      sections: [
        {
          heading: "Servicios de Instalación y Soldadura por Termofusión",
          body: "En Kaizen Ingeniería contamos con equipos automáticos de cuña caliente y extrusoras manuales con registro digital de parámetros para asegurar costuras homogéneas e indestructibles.",
          bullets: [
            "Ensayos de presión de aire en doble canal de soldadura y ensayos con caja de vacío (vacuum box).",
            "Instalación de geotextiles no tejidos de protección mecánica antipunzonamiento.",
            "Reparación de roturas y mantenimiento preventivo en geomembranas existentes."
          ]
        }
      ],
      conclusion: "Garantiza la estanqueidad de tus piscinas y tranques con el servicio de impermeabilización técnica de Kaizen Ingeniería en Antofagasta."
    }
  }
];
