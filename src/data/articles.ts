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
    slug: "hdpe-antofagasta-termofusion-tuberias-geomembranas",
    title: "HDPE en Antofagasta: Guía Integral de Termofusión, Tuberías y Geomembranas Mineras",
    seoTitle: "HDPE Antofagasta | Termofusión, Tuberías y Geomembranas Kaizen",
    metaDescription: "Servicios líderes de HDPE en Antofagasta. Especialistas en termofusión de tuberías de alta presión, montaje de spools y soldadura de geomembranas HDPE para faenas mineras.",
    excerpt: "Conoce los estándares técnicos de soldadura por termofusión y montaje de cañerías HDPE en Antofagasta para líneas de agua desalada, pulpas y salmueras mineras.",
    category: "HDPE & Termofusión",
    date: "14 de Octubre, 2024",
    readTime: "7 min de lectura",
    image: "/images/hero/hero-slide-2.jpg",
    author: "Ingeniería de Piping y HDPE Kaizen",
    keywords: [
      "HDPE Antofagasta",
      "HDPE en Antofagasta",
      "hdpe antofagasta",
      "hdpe en antofagasta",
      "Termofusión HDPE Antofagasta",
      "Tuberías HDPE Antofagasta",
      "Geomembranas HDPE en Antofagasta",
      "Soldadura HDPE Antofagasta",
      "Piping HDPE minería Chile"
    ],
    content: {
      intro: "El polietileno de alta densidad (HDPE o PE100) se ha consolidado como el material estructural por excelencia en la Región de Antofagasta. Su excepcional resistencia a la corrosión por agua de mar, salmueras, fluidos ácidos y la abrasión provocada por el transporte de pulpas mineras lo convierten en la alternativa indiscutible para la infraestructura hídrica y de relaves en el norte de Chile.",
      sections: [
        {
          heading: "Termofusión de Tuberías HDPE en Antofagasta: Estándares y Procesos",
          body: "En Kaizen Ingeniería ejecutamos soldadura a tope por termofusión (butt fusion) y electrofusión de acuerdo con la norma internacional ISO 21307 y ASTM F2620, garantizando uniones monolíticas cuya resistencia mecánica supera a la del propio tubo.",
          bullets: [
            "Equipos hidráulicos de termofusión automáticos con registro datalogger para trazabilidad completa de ciclo (presión, temperatura y tiempo de enfriamiento).",
            "Soldadura de tuberías HDPE en rangos desde 63 mm hasta más de 1200 mm en diversas clases de presión (PN10, PN16, PN25 / SDR 11, SDR 17).",
            "Electrofusión técnica para intervenciones de precisión en espacios confinados, desvíos y ramales de distribución.",
            "Ensayos no destructivos (NDT) y curvas de enfriamiento certificadas para dossiers de calidad en faenas mineras."
          ]
        },
        {
          heading: "Instalación y Soldadura de Geomembranas HDPE en Tranques y Piscinas",
          body: "Las plantas de lixiviación, piscinas de impulsión y tranques de relaves en Antofagasta, Calama y Mejillones requieren un blindaje impermeable absoluto para cumplir con las exigencias medioambientales y operacionales.",
          bullets: [
            "Soldadura automática con cuña caliente de doble canal para comprobación de estanqueidad por prueba de presión de aire.",
            "Soldadura por extrusión con aporte de cordón HDPE virgen en parches, pasamuros, esquinas y uniones complejas.",
            "Control riguroso con campana de vacío (vacuum box) y chispero de alta tensión (spark test) para cero porosidad.",
            "Despliegue y anclaje seguro de láminas lisas y texturadas con geotextil de protección antipunzonamiento."
          ]
        },
        {
          heading: "Fabricación de Spools, Manifolds y Montaje en Terreno",
          body: "Disponemos de taller propio y cuadrillas móviles para la prefabricación y ensamble de piezas especiales en HDPE: codos segmentados, tees reducidas, brisas y manifolds de distribución a medida con bridas stub-end y anillos de respaldo en acero al carbono o inoxidable."
        },
        {
          heading: "Cuadrillas Móviles 24/7 en la Región de Antofagasta",
          body: "Nuestras brigadas de termofusión y montaje de HDPE operan con camionetas taller y generadores autónomos listas para actuar en paradas de planta programadas y atenciones de emergencia en Minera Escondida, Centinela, Spence, Michilla, Sierra Gorda y puertos de la II Región."
        }
      ],
      conclusion: "Si buscas una empresa líder y confiable para proyectos de HDPE en Antofagasta, Kaizen Ingeniería te garantiza ejecución certificada, estanqueidad permanente y tiempos récord de entrega."
    }
  },
  {
    slug: "fibra-de-vidrio-antofagasta-estanques-revestimientos-frp",
    title: "Fibra de Vidrio en Antofagasta: Revestimientos FRP, Estanques y Reparaciones Industriales",
    seoTitle: "Fibra de Vidrio Antofagasta | Revestimientos FRP y Estanques Kaizen",
    metaDescription: "Especialistas en Fibra de Vidrio en Antofagasta. Revestimientos FRP y viniléster de estanques químicos, tinas electrolíticas, ductos y reparación in situ para la minería.",
    excerpt: "Descubre cómo los revestimientos en fibra de vidrio (FRP) y resinas viniléster protegen estanques y canaletas ante el ataque químico severo en Antofagasta.",
    category: "Fibra de Vidrio (FRP)",
    date: "22 de Octubre, 2024",
    readTime: "6 min de lectura",
    image: "/images/services/linings-workers.jpg",
    author: "División de Materiales Compuestos & FRP Kaizen",
    keywords: [
      "Fibra de vidrio Antofagasta",
      "Fibra de vidrio en Antofagasta",
      "fibra de vidrio antofagasta",
      "fibra de vidrio en antofagasta",
      "Revestimientos fibra de vidrio Antofagasta",
      "Estanques fibra de vidrio Antofagasta",
      "Laminado FRP Antofagasta",
      "Reparación fibra de vidrio terreno Antofagasta",
      "Resinas viniléster minería Chile"
    ],
    content: {
      intro: "La industria hidrometalúrgica del cobre y litio en la Región de Antofagasta opera bajo condiciones químicas extremas: ácido sulfúrico concentrado, electrólitos a temperaturas elevadas, salmueras hipersalinas y gases corrosivos. Ante este entorno destructivo, las soluciones en Fibra de Vidrio (FRP - Fiber Reinforced Polymer) constituyen la barrera definitiva para garantizar la integridad estructural y la longevidad de estanques, tinas y ductos.",
      sections: [
        {
          heading: "Revestimientos Monolíticos de Estanques en Fibra de Vidrio (FRP)",
          body: "En Kaizen Ingeniería diseñamos y aplicamos revestimientos continuos sin juntas en estanques de hormigón y acero al carbono, combinando tejidos técnicos de fibra de vidrio con resinas de alta ingeniería:",
          bullets: [
            "Resinas Viniléster Epoxi-Novolac: Resistencia incomparable frente a ácido sulfúrico concentrado al 98%, ácido clorhídrico y solventes orgánicos.",
            "Estructura multicapa: Velo sintético o velo C para la barrera química anticorrosiva, seguido de múltiples capas de chopped strand mat (CSM) y woven roving para máxima solidez mecánica.",
            "Acabado topcoat con parafina para inhibir el oxígeno del aire y lograr una polimerización completa y superficie lisa autolimpiante.",
            "Control de espesores, dureza Barcol y ensayo de chispero (holiday detector) a alto voltaje para certificar cero microfisuras."
          ]
        },
        {
          heading: "Reparación In Situ y Laminado Estructural en Faena",
          body: "Las fallas imprevistas por fisuras, filtraciones o delaminación en estanques espesadores, celdas de electroobtención (EW) o canaletas requieren intervención inmediata sin necesidad de desmantelar equipos de gran envergadura.",
          bullets: [
            "Saneamiento mecánico por desbaste de fibra dañada hasta alcanzar material sano.",
            "Aplicación de primers promotores de adherencia sobre sustratos húmedos o contaminados.",
            "Relaminado estructural con resina viniléster de curado rápido adaptada al gradiente térmico de la puna y el desierto de Atacama.",
            "Pruebas hidrostáticas y de hermeticidad antes de la puesta en marcha operacional."
          ]
        },
        {
          heading: "Ductos, Lavadores de Gases y Piezas Especiales FRP",
          body: "Fabricamos y reparamos tramos de cañerías, campanas de extracción, manifolds y ductos para gases ácidos conforme a normativas ASTM D3299, ASTM D4097 y ASME RTP-1, entregando componentes livianos, inmunes a la corrosión y con vida útil proyectada superior a 25 años."
        },
        {
          heading: "Cobertura Integral en Antofagasta y Segunda Región",
          body: "Contamos con brigadas especializadas en trabajos en espacios confinados, personal calificado en laminado compuesto y planes de aseguramiento de calidad (QA/QC) desplegables en plantas de Antofagasta, Calama, Tocopilla y Mejillones."
        }
      ],
      conclusion: "Para proyectos de fabricación, revestimiento o reparación en fibra de vidrio en Antofagasta, confía en la trayectoria, seguridad y respaldo técnico de Kaizen Ingeniería."
    }
  },
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
      "Fibra de vidrio Antofagasta",
      "Fibra de vidrio en Antofagasta",
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
      "HDPE Antofagasta",
      "HDPE en Antofagasta",
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
  }
];
