export type Content = {
  tagline: string;
  amazonUrl: string;
  navigation: { label: string; href: string }[];
  trustBadges: string[];
  benefits: { title: string; copy: string }[];
  howItWorks: { title: string; copy: string }[];
  pillars: { label: string; content: string }[];
  careSteps: string[];
  faqs: { question: string; answer: string }[];
  reviews: { name: string; quote: string }[];
  heroStory: { title: string; paragraphs: string[] };
  colorVariants: { name: string; image: string }[];
  videos: { src: string; label: string; description: string }[];
  guarantee: { headline: string; points: string[] };
  footer: {
    tagline: string;
    explore: string;
    support: string;
    legal: string;
    rights: string;
    designedIn: string;
  };
  pages: {
    home: {
      heroTag: string;
      heroHeadline: string;
      heroSubheadline: string;
      heroLink: string;
      videoSection: {
        tag: string;
        title: string;
        copy1: string;
        copy2: string;
      };
      benefitsSection: {
        tag: string;
        title: string;
        copy: string;
      };
      howItWorksSection: {
        tag: string;
        title: string;
        copy: string;
      };
      colorsSection: {
        tag: string;
        title: string;
        copy: string;
      };
      scienceSection: {
        tag: string;
        title: string;
        copy: string;
        internalTests: string;
        testsList: string[];
        link: string;
      };
      historySection: {
        tag: string;
        title: string;
        copy1: string;
        copy2: string;
        link: string;
      };
      careSection: {
        tag: string;
        title: string;
        copy: string;
      };
      reviewsSection: {
        tag: string;
        title: string;
        link: string;
      };
      atmosphereSection: {
        tag: string;
        title: string;
        copy: string;
      };
      warrantySection: {
        tag: string;
        link: string;
      };
      cta: string;
    };
    product: {
      tag: string;
      title: string;
      copy: string;
      link: string;
      benefitsTitle: string;
      variantsTag: string;
      variantsTitle: string;
      variantsCopy: string;
      howItWorksTitle: string;
      ctaTitle: string;
      ctaCopy: string;
      ctaButton: string;
    };
    science: {
      tag: string;
      title: string;
      copy: string;
      howItWorksTitle: string;
      pillarsTitle: string;
      testsTitle: string;
      testsList: string[];
      backLink: string;
    };
    history: {
      tag: string;
      title: string;
      copy: string;
      originTitle: string;
      originCopy1: string;
      originCopy2: string;
      originCopy3: string;
    };
    care: {
      tag: string;
      title: string;
      copy: string;
      warningTitle: string;
      warningCopy: string;
    };
    reviews: {
      tag: string;
      title: string;
      copy: string;
    };
    shop: {
      tag: string;
      title: string;
      benefitsList: string[];
      amazonButton: string;
      secureTitle: string;
      secureCopy: string;
    };
    warranty: {
      tag: string;
      title: string;
      copy: string;
      subtitle: string;
      contactTitle: string;
      contactCopy: string;
      faqTitle: string;
    };
    legal: {
      legalNoticeTitle: string;
      legalNoticeCopy: string;
      privacyTitle: string;
      privacyCopy: string;
      cookiesTitle: string;
      cookiesCopy: string;
    };
  };
};

const es: Content = {
  tagline: "Sutil elegancia en tu ritual diario",
  amazonUrl: "https://www.amazon.es/s?k=diatomusa",
  navigation: [
    { label: "Inicio", href: "/" },
    { label: "Producto", href: "/producto" },
    { label: "Ciencia", href: "/ciencia" },
    { label: "Historia", href: "/historia" },
    { label: "Uso y cuidado", href: "/cuidado" },
    { label: "Opiniones", href: "/opiniones" },
    { label: "Comprar", href: "/comprar" },
    { label: "Garantía", href: "/garantia" },
  ],
  trustBadges: ["Prime", "Garantía 12m", "Atención local"],
  benefits: [
    {
      title: "Secado visible en minutos",
      copy: "La microcapilaridad dispersa la humedad de inmediato y deja la superficie lista para el siguiente uso.",
    },
    {
      title: "Higiene que se nota",
      copy: "Menos humedad residual significa menos olor, bacterias y hongos. Solo debes cepillarla suavemente cuando se sature.",
    },
    {
      title: "Seguridad y estabilidad",
      copy: "Base antideslizante y cantos suavizados para acompañar la pisada con firmeza y suavidad.",
    },
    {
      title: "Durabilidad sencilla",
      copy: "Mantenimiento breve con paño o lija suave. La piedra recupera su desempeño tras cada ventilación.",
    },
    {
      title: "Estética que ordena",
      copy: "Tonos serenos y geometrías depuradas que se integran en baños minimalistas o cálidos.",
    },
  ],
  howItWorks: [
    {
      title: "Absorbe al contacto",
      copy: "Miles de microporos capturan las gotas en cuanto el agua toca la superficie.",
    },
    {
      title: "Dispersa y respira",
      copy: "La humedad se distribuye y evapora de forma uniforme gracias a la microcapilaridad.",
    },
    {
      title: "Seca y se regenera",
      copy: "En minutos la pieza vuelve a estar lista, sin sensación húmeda ni olores.",
    },
  ],
  pillars: [
    {
      label: "Material",
      content:
        "Piedra de diatomita tratada térmicamente, con poros calibrados para absorber y liberar humedad de forma uniforme.",
    },
    {
      label: "Diseño",
      content:
        "Geometrías depuradas, transiciones suaves y colores serenos que se integran en baños minimalistas o cálidos.",
    },
    {
      label: "Pruebas",
      content:
        "Ensayos internos de absorción, antideslizamiento, manchas y durabilidad para garantizar una experiencia de uso prolongada.",
    },
  ],
  careSteps: [
    "Coloca la alfombrilla sobre superficie plana y seca.",
    "Después de cada uso, deja que se ventile; la humedad desaparece en minutos.",
    "Cada semana, limpia con un paño húmedo o lija suave para retirar residuos.",
    "Evita golpes o sumergirla en agua de forma continua.",
  ],
  faqs: [
    {
      question: "¿Cómo funciona la piedra de diatomita?",
      answer:
        "Miles de microporos absorben el agua de la superficie y la distribuyen para evaporarla rápidamente sin dejar sensación húmeda.",
    },
    {
      question: "¿La alfombrilla es resbaladiza?",
      answer:
        "No. Integra una base antideslizante y textura de agarre suave que permanece estable incluso en suelos lisos.",
    },
    {
      question: "¿Qué garantía ofrece DIATOMUSA?",
      answer:
        "Garantía de 12 meses y soporte directo desde España. Si tu pieza presenta defectos, gestionamos reemplazo o reembolso.",
    },
    {
      question: "¿Es compatible con baños con poca ventilación?",
      answer:
        "Sí. Recomendamos apoyar la alfombrilla verticalmente de vez en cuando para ayudar a la circulación del aire.",
    },
  ],
  reviews: [
    {
      name: "Laura, Madrid",
      quote:
        "Es el primer accesorio del baño del que mis invitados hablan. Secado visible y tacto agradable en cada uso.",
    },
    {
      name: "Diego, Valencia",
      quote:
        "Nuestro suelo siempre quedaba mojado. Con la piedra de DIATOMUSA se acabó el desorden y el riesgo de resbalar.",
    },
    {
      name: "Beatriz, Bilbao",
      quote:
        "La uso desde hace seis meses, luce impecable y se limpia en segundos. Diseño y utilidad por igual.",
    },
  ],
  heroStory: {
    title: "El Encuentro",
    paragraphs: [
      "El encuentro es una composición de líneas que respiran. Dos trazos que se buscan hasta tocarse, se cruzan y se funden en una misma forma. No representan cuerpos, sino emociones: la calma que llega después del agua, el instante en que el movimiento se detiene y el baño se vuelve refugio. Cada curva sugiere cercanía; cada vacío deja espacio para la imaginación. Así nace El Encuentro: un gesto de arte que transforma lo cotidiano en serenidad.",
      "Hecha con piedra de diatomita natural, un material poroso de origen mineral formado por fósiles microscópicos de diatomeas marinas. Su estructura microporosa absorbe el agua al contacto, seca en minutos y mantiene la superficie libre de humedad, reduciendo bacterias y malos olores. Resistente, ligera y ecológica, la diatomita combina tecnología natural y un diseño sutil y minimalista para cuidar de ti y de tu entorno.",
    ],
  },
  colorVariants: [
    { name: "Rosa", image: "/images/encuentro/encuentro-rosa-packaging.jpg" },
    { name: "Verde", image: "/images/encuentro/encuentro-verde-packaging.jpg" },
    {
      name: "Gris oscuro",
      image: "/images/encuentro/encuentro-gris-oscuro-packaging.jpg",
    },
    {
      name: "Colección",
      image: "/images/encuentro/encuentro-variantes-dimensiones-colores.jpg",
    },
  ],
  videos: [
    {
      src: "/videos/video_1_v1.mp4",
      label: "Diseño y funcionamiento",
      description:
        "La historia principal: diseño, textura y secado visible en uso real.",
    },
    {
      src: "/videos/video_2_v1.mp4",
      label: "Sensación y ambiente",
      description:
        "Complementa la historia con un baño elegante, luz suave y calma visual.",
    },
  ],
  guarantee: {
    headline: "Garantía y soporte local",
    points: [
      "12 meses de cobertura frente a defectos de fabricación.",
      "Atención directa desde España para cualquier consulta.",
      "Reemplazo o reembolso ágil si algo no sale como esperas.",
    ],
  },
  footer: {
    tagline: "Sutil elegancia en tu ritual diario. Alfombrillas de diatomita con ingeniería de materiales y diseño sereno.",
    explore: "Explorar",
    support: "Soporte",
    legal: "Legal",
    rights: "Todos los derechos reservados.",
    designedIn: "Diseñado en España.",
  },
  pages: {
    home: {
      heroTag: "Alfombra en piedra de diatomita",
      heroHeadline: "El Encuentro.",
      heroSubheadline: "Arte que desvanece el mojar de tus pasos",
      heroLink: "Conocer la ciencia",
      videoSection: {
        tag: "El Encuentro en uso real",
        title: "Diseño, textura y secado visible.",
        copy1: "Un vistazo directo a cómo la piedra absorbe y se regenera en minutos, sin perder la calma del diseño.",
        copy2: "Este video abre la historia del producto y muestra su funcionamiento de forma clara y completa.",
      },
      benefitsSection: {
        tag: "Beneficios clave",
        title: "Confort visible, higiene tangible y diseño que ordena el espacio.",
        copy: "Cada detalle responde a pruebas de absorción, adherencia y durabilidad para que el baño quede seco y sereno tras cada uso.",
      },
      howItWorksSection: {
        tag: "Cómo funciona",
        title: "Microcapilaridad que respira y seca en minutos.",
        copy: "Tecnología natural de la diatomita: absorbe al contacto, dispersa la humedad y se regenera con cada ventilación. Una pieza de piedra que ordena visualmente el baño.",
      },
      colorsSection: {
        tag: "Colecciones cromáticas",
        title: "Tonos serenos inspirados en minerales y paisajes acuáticos.",
        copy: "Rosa, verde, gris oscuro y la colección completa para baños minimalistas o cálidos. Consulta las variantes en Amazon y elige la que dialoga mejor con tu espacio.",
      },
      scienceSection: {
        tag: "Material & ciencia",
        title: "Ingeniería de materiales al servicio de la serenidad diaria.",
        copy: "Tratamiento térmico, poros calibrados y control dimensional para lograr absorción homogénea y estabilidad bajo los pies. La microcapilaridad es nuestro lenguaje estético.",
        internalTests: "Pruebas internas",
        testsList: [
          "• Absorción y secado en minutos.",
          "• Estabilidad antideslizante en superficies lisas.",
          "• Resistencia a manchas y limpieza rápida.",
          "• Durabilidad tras ciclos de uso y ventilación.",
        ],
        link: "Ver más sobre la materia",
      },
      historySection: {
        tag: "Historia",
        title: "Ciencia, arte y serenidad en el País Vasco.",
        copy1: "Nacimos en el País Vasco, uniendo investigación en microcapilaridad con una mirada editorial del diseño. La diatomita, formada por diatomeas, nos inspira por su porosidad natural y su capacidad de absorber sin esfuerzo.",
        copy2: "Transformamos ese conocimiento en piezas serenas: secan en minutos, ordenan el espacio y convierten el baño en un ritual silencioso de bienestar.",
        link: "Leer el manifiesto",
      },
      careSection: {
        tag: "Uso y cuidado",
        title: "Rutina sencilla para prolongar su vida útil.",
        copy: "Mantenimiento breve, sin detergentes agresivos. La piedra se regenera con ventilación y limpieza suave.",
      },
      reviewsSection: {
        tag: "Reseñas verificadas",
        title: "Las personas que conviven con DIATOMUSA notan la diferencia.",
        link: "Leer más opiniones",
      },
      atmosphereSection: {
        tag: "Sensación, ambiente y detalle",
        title: "Una atmósfera serena para el ritual diario.",
        copy: "Como continuación del relato, este clip sitúa la pieza en un baño elegante, con luz suave y materiales nobles que realzan su presencia.",
      },
      warrantySection: {
        tag: "Garantía y soporte",
        link: "Detalles de garantía y FAQ",
      },
      cta: "Comprar en Amazon",
    },
    product: {
      tag: "Producto",
      title: "Alfombrilla de diatomita DIATOMUSA:",
      copy: "Secado visible en minutos, base antideslizante y diseño sereno. Ingeniería de materiales aplicada al baño cotidiano.",
      link: "Ver la ciencia",
      benefitsTitle: "Beneficios clave",
      variantsTag: "Variantes",
      variantsTitle: "Colores reales",
      variantsCopy: "Selecciona la variante que mejor dialogue con tu baño. Todas integran la misma microcapilaridad y base antideslizante.",
      howItWorksTitle: "Cómo funciona",
      ctaTitle: "Listo para tu baño",
      ctaCopy: "Prime, devoluciones fáciles y atención desde España. Compra segura.",
      ctaButton: "Comprar en Amazon",
    },
    science: {
      tag: "Ciencia & material",
      title: "Microcapilaridad y diatomita: ciencia que se siente bajo los pies.",
      copy: "Tratamiento térmico, poros calibrados y control dimensional. La piedra absorbe, dispersa y seca en minutos, manteniendo el baño ordenado y seguro.",
      howItWorksTitle: "Cómo funciona",
      pillarsTitle: "Pilares de producto",
      testsTitle: "Datos de ensayo internos",
      testsList: [
        "• Absorción visible: superficie seca en minutos tras el uso.",
        "• Estabilidad: base antideslizante probada en suelos lisos.",
        "• Manchas: resistencia a manchas comunes con limpieza ligera.",
        "• Durabilidad: ciclos de ventilación y lijado fino sin degradar la pieza.",
      ],
      backLink: "Volver al producto",
    },
    history: {
      tag: "Historia",
      title: "DIATOMUSA:",
      copy: "Nacimos en el País Vasco, combinando investigación en microcapilaridad con una mirada editorial. Cada pieza es una escena de calma que ordena el baño.",
      originTitle: "Origen y método",
      originCopy1: "La diatomita nace de algas microscópicas cuyo caparazón silíceo se deposita durante siglos hasta formar un mineral ligero y poroso. Esa microestructura es la que hace posible el secado rápido y la sensación de superficie siempre limpia.",
      originCopy2: "Nuestro método se apoya en una tradición científica que estudia cómo recolectar, limpiar y preservar esas valvas de sílice sin alterar su porosidad. Seleccionamos el material, lo tratamos para eliminar impurezas y verificamos su desempeño en cada pieza.",
      originCopy3: "Equipo con formación en física de nanoestructuras y materiales avanzados. Ensayos internos de absorción, antideslizante y durabilidad. Atención y garantía desde España.",
    },
    care: {
      tag: "Uso y cuidado",
      title: "Rutina breve para mantener el desempeño",
      copy: "Ventilar, limpiar suave y evitar inmersión prolongada. La piedra se regenera con cada ciclo de secado.",
      warningTitle: "Importante",
      warningCopy:
        "No usar lejía, detergentes jabonosos ni suavizantes. Estos productos pueden obstruir los microporos y reducir la capacidad de absorción. Limpiar solo con agua o lijado suave.",
    },
    reviews: {
      tag: "Opiniones",
      title: "Reseñas verificadas",
      copy: "Experiencias reales de hogares que ya conviven con DIATOMUSA.",
    },
    shop: {
      tag: "Tienda oficial",
      title: "Adquirir DIATOMUSA con la garantía de Amazon.",
      benefitsList: [
        "Envío rápido y gratuito para miembros Prime.",
        "Política de devoluciones de 30 días sin preguntas.",
        "Transacción segura y soporte directo.",
      ],
      amazonButton: "Ver precio en Amazon",
      secureTitle: "Compra segura",
      secureCopy:
        "Al hacer clic serás redirigido a la página oficial del producto en Amazon España. Todo el proceso de pago y logística es gestionado por su plataforma.",
    },
    warranty: {
      tag: "Garantía y soporte",
      title: "Cobertura y atención local",
      copy: "Garantía de 12 meses frente a defectos de fabricación. Reemplazo o reembolso ágil si algo no sale como esperas.",
      subtitle: "Cobertura",
      contactTitle: "Contacto directo",
      contactCopy:
        "Si tienes alguna incidencia o consulta específica, escríbenos directamente. Respondemos en menos de 24 horas laborables.",
      faqTitle: "Preguntas frecuentes",
    },
    legal: {
      legalNoticeTitle: "Aviso legal",
      legalNoticeCopy: "Contenido legal pendiente de completar según los datos oficiales de la empresa.",
      privacyTitle: "Política de privacidad",
      privacyCopy: "Texto de privacidad pendiente de completar con el responsable de tratamiento, finalidades y derechos.",
      cookiesTitle: "Política de cookies",
      cookiesCopy: "Añadir detalle de cookies, finalidades y opciones de consentimiento según normativa vigente.",
    },
  },
};

const en: Content = {
  tagline: "Subtle elegance in your daily ritual",
  amazonUrl: "https://www.amazon.es/s?k=diatomusa",
  navigation: [
    { label: "Home", href: "/" },
    { label: "Product", href: "/producto" },
    { label: "Science", href: "/ciencia" },
    { label: "History", href: "/historia" },
    { label: "Care", href: "/cuidado" },
    { label: "Reviews", href: "/opiniones" },
    { label: "Shop", href: "/comprar" },
    { label: "Warranty", href: "/garantia" },
  ],
  trustBadges: ["Prime", "12m Warranty", "Local Support"],
  benefits: [
    {
      title: "Visible drying in minutes",
      copy: "Microcapillarity disperses moisture immediately, leaving the surface ready for the next touch.",
    },
    {
      title: "Noticeable hygiene",
      copy: "Less residual moisture means less odor and bacteria. A gentle brush is all it takes when saturated.",
    },
    {
      title: "Safety and stability",
      copy: "Non-slip base and softened edges to accompany your step with firmness and gentleness.",
    },
    {
      title: "Simple durability",
      copy: "Brief maintenance with a cloth or soft sandpaper. The stone recovers its performance after every breath.",
    },
    {
      title: "Aesthetics that organize",
      copy: "Serene tones and clean geometries that blend into minimalist or warm bathrooms.",
    },
  ],
  howItWorks: [
    {
      title: "Absorbs on contact",
      copy: "Thousands of micropores capture droplets the moment water touches the surface.",
    },
    {
      title: "Disperses and breathes",
      copy: "Moisture is distributed and evaporates evenly thanks to microcapillarity.",
    },
    {
      title: "Dries and regenerates",
      copy: "In minutes, the piece is ready again, free from damp sensations or odors.",
    },
  ],
  pillars: [
    {
      label: "Material",
      content:
        "Thermally treated diatomite stone, with calibrated pores to absorb and release moisture evenly.",
    },
    {
      label: "Design",
      content:
        "Clean geometries, soft transitions, and serene colors that integrate into minimalist or warm bathrooms.",
    },
    {
      label: "Testing",
      content:
        "Internal tests for absorption, anti-slip, stains, and durability to guarantee a prolonged usage experience.",
    },
  ],
  careSteps: [
    "Place the mat on a flat, dry surface.",
    "After each use, let it ventilate; moisture disappears in minutes.",
    "Every week, clean with a damp cloth or soft sandpaper to remove residues.",
    "Avoid impacts or submerging it in water continuously.",
  ],
  faqs: [
    {
      question: "How does diatomite stone work?",
      answer:
        "Thousands of micropores absorb surface water and distribute it to evaporate quickly without leaving a damp feeling.",
    },
    {
      question: "Is the mat slippery?",
      answer:
        "No. It integrates a non-slip base and a soft-grip texture that remains stable even on smooth floors.",
    },
    {
      question: "What warranty does DIATOMUSA offer?",
      answer:
        "12-month warranty and direct support. If your piece shows defects, we manage replacement or refund.",
    },
    {
      question: "Is it compatible with poorly ventilated bathrooms?",
      answer:
        "Yes. We recommend propping the mat vertically occasionally to help air circulation.",
    },
  ],
  reviews: [
    {
      name: "Laura, Madrid",
      quote:
        "It's the first bathroom accessory my guests talk about. Visible drying and a pleasant touch in every use.",
    },
    {
      name: "Diego, Valencia",
      quote:
        "Our floor was always wet. With the DIATOMUSA stone, the mess and slip disk are over.",
    },
    {
      name: "Beatriz, Bilbao",
      quote:
        "I've been using it for six months, looks impeccable and cleans in seconds. Design and utility alike.",
    },
  ],
  heroStory: {
    title: "The Encounter",
    paragraphs: [
      "The Encounter is a composition of lines that breathe. Two strokes that seek each other until they touch, cross, and merge into a single form. They do not represent bodies, but emotions: the calm that arrives after the water, the moment movement stops and the bathroom becomes a refuge. Every curve suggests closeness; every empty space leaves room for imagination. Thus creates The Encounter: a gesture of art that transforms the everyday into serenity.",
      "Made with natural diatomite stone, a porous material of mineral origin formed by microscopic marine diatom fossils. Its microporous structure absorbs water on contact, dries in minutes, and keeps the surface free of moisture, reducing bacteria and bad odors. Resistant, light, and ecological, diatomite combines natural technology with a subtle and minimalist design to care for you and your environment.",
    ],
  },
  colorVariants: [
    { name: "Pink", image: "/images/encuentro/encuentro-rosa-packaging.jpg" },
    { name: "Green", image: "/images/encuentro/encuentro-verde-packaging.jpg" },
    {
      name: "Dark Grey",
      image: "/images/encuentro/encuentro-gris-oscuro-packaging.jpg",
    },
    {
      name: "Collection",
      image: "/images/encuentro/encuentro-variantes-dimensiones-colores.jpg",
    },
  ],
  videos: [
    {
      src: "/videos/video_1_v1.mp4",
      label: "Design and Function",
      description:
        "The main story: design, texture, and visible drying in real use.",
    },
    {
      src: "/videos/video_2_v1.mp4",
      label: "Sensation and Atmosphere",
      description:
        "Complements the story with an elegant bathroom, soft light, and visual calm.",
    },
  ],
  guarantee: {
    headline: "Warranty and Local Support",
    points: [
      "12 months coverage against manufacturing defects.",
      "Direct attention for any inquiries.",
      "Agile replacement or refund if something doesn't go as expected.",
    ],
  },
  footer: {
    tagline: "Subtle elegance in your daily ritual. Diatomite mats with material engineering and serene design.",
    explore: "Explore",
    support: "Support",
    legal: "Legal",
    rights: "All rights reserved.",
    designedIn: "Designed in Spain.",
  },
  pages: {
    home: {
      heroTag: "Diatomite Stone Mat",
      heroHeadline: "The Encounter.",
      heroSubheadline: "Art that fades the wetness of your steps",
      heroLink: "Discover the science",
      videoSection: {
        tag: "The Encounter in real use",
        title: "Design, texture, and visible drying.",
        copy1: "A direct look at how the stone absorbs and regenerates in minutes, without losing the design's calm.",
        copy2: "This video opens the product story and shows its operation clearly and entirely.",
      },
      benefitsSection: {
        tag: "Key Benefits",
        title: "Visible comfort, tangible hygiene, and design that organizes space.",
        copy: "Every detail responds to absorption, adherence, and durability tests so the bathroom remains dry and serene after every use.",
      },
      howItWorksSection: {
        tag: "How it works",
        title: "Microcapillarity that breathes and dries in minutes.",
        copy: "Natural diatomite technology: absorbs on contact, disperses moisture, and regenerates with every breath of fresh air. A stone piece that vertically organizes the bathroom.",
      },
      colorsSection: {
        tag: "Chromatic Collections",
        title: "Serene tones inspired by minerals and aquatic landscapes.",
        copy: "Pink, green, dark grey, and the full collection for minimalist or warm bathrooms. Check variants on Amazon and choose the one that best dialogues with your space.",
      },
      scienceSection: {
        tag: "Material & Science",
        title: "Material engineering at the service of daily serenity.",
        copy: "Thermal treatment, calibrated pores, and dimensional control to achieve homogeneous absorption and stability underfoot. Microcapillarity is our aesthetic language.",
        internalTests: "Internal Tests",
        testsList: [
          "• Absorption and drying in minutes.",
          "• Anti-slip stability on smooth surfaces.",
          "• Stain resistance and quick cleaning.",
          "• Durability after cycles of use and ventilation.",
        ],
        link: "See more about the material",
      },
      historySection: {
        tag: "History",
        title: "Science, art, and serenity in the Basque Country.",
        copy1: "Born in the Basque Country, we unite microcapillarity research with an editorial design perspective. Diatomite, formed by diatoms, inspires us with its natural porosity and effortless absorption capacity.",
        copy2: "We transform that knowledge into serene pieces: they dry in minutes, organize the space, and turn the bathroom into a silent ritual of well-being.",
        link: "Read the manifesto",
      },
      careSection: {
        tag: "Use and Care",
        title: "Simple routine to prolong its lifespan.",
        copy: "Brief maintenance, no harsh detergents. The stone regenerates with ventilation and gentle cleaning.",
      },
      reviewsSection: {
        tag: "Verified Reviews",
        title: "People living with DIATOMUSA notice the difference.",
        link: "Read more reviews",
      },
      atmosphereSection: {
        tag: "Sensation, atmosphere, and detail",
        title: "A serene atmosphere for the daily ritual.",
        copy: "As a continuation of the story, this clip places the piece in an elegant bathroom, with soft light and noble materials that enhance its presence.",
      },
      warrantySection: {
        tag: "Warranty and Support",
        link: "Warranty details and FAQ",
      },
      cta: "Buy on Amazon",
    },
    product: {
      tag: "Product",
      title: "DIATOMUSA Diatomite Mat:",
      copy: "Visible drying in minutes, non-slip base, and serene design. Material engineering applied to the daily bathroom.",
      link: "See the science",
      benefitsTitle: "Key Benefits",
      variantsTag: "Variants",
      variantsTitle: "Real Colors",
      variantsCopy: "Select the variant that best dialogues with your bathroom. All integrate the same microcapillarity and non-slip base.",
      howItWorksTitle: "How it works",
      ctaTitle: "Ready for your bathroom",
      ctaCopy: "Prime, easy returns, and support from Spain. Secure purchase.",
      ctaButton: "Buy on Amazon",
    },
    science: {
      tag: "Science & Material",
      title: "Microcapillarity and diatomite: science felt underfoot.",
      copy: "Thermal treatment, calibrated pores, and dimensional control. The stone absorbs, disperses, and dries in minutes, keeping the bathroom tidy and safe.",
      howItWorksTitle: "How it works",
      pillarsTitle: "Product Pillars",
      testsTitle: "Internal Test Data",
      testsList: [
        "• Visible absorption: dry surface in minutes after use.",
        "• Stability: non-slip base tested on smooth floors.",
        "• Stains: resistance to common stains with light cleaning.",
        "• Durability: ventilation cycles and fine sanding without degrading the piece.",
      ],
      backLink: "Back to product",
    },
    history: {
      tag: "History",
      title: "DIATOMUSA:",
      copy: "Born in the Basque Country, combining microcapillarity research with an editorial look. Each piece is a scene of calm that organizes the bathroom.",
      originTitle: "Origin and Method",
      originCopy1: "Diatomite is born from microscopic algae whose siliceous shell deposits over centuries to form a light and porous mineral. That microstructure makes rapid drying and the feeling of an always clean surface possible.",
      originCopy2: "Our method relies on a scientific tradition that studies how to collect, clean, and preserve those silica valves without altering their porosity. We select the material, treat it to remove impurities, and verify its performance in each piece.",
      originCopy3: "Team with training in nanostructure physics and advanced materials. Internal tests for absorption, anti-slip, and durability. Attention and warranty from Spain.",
    },
    care: {
      tag: "Use and Care",
      title: "Brief routine to maintain performance",
      copy: "Ventilate, clean gently, and avoid prolonged immersion. The stone regenerates with each drying cycle.",
      warningTitle: "Important",
      warningCopy:
        "Do not use bleach, soapy detergents, or fabric softeners. These products can clog micropores and reduce absorption capacity. Clean only with water or gentle sanding.",
    },
    reviews: {
      tag: "Reviews",
      title: "Verified Reviews",
      copy: "Real experiences from homes that already live with DIATOMUSA.",
    },
    shop: {
      tag: "Official Store",
      title: "Purchase DIATOMUSA with Amazon's guarantee.",
      benefitsList: [
        "Fast and free shipping for Prime members.",
        "30-day no-questions-asked return policy.",
        "Secure transaction and direct support.",
      ],
      amazonButton: "Check Price on Amazon",
      secureTitle: "Secure Purchase",
      secureCopy:
        "Clicking will redirect you to the official product page on Amazon Spain. All payment and logistics processes are managed by their platform.",
    },
    warranty: {
      tag: "Warranty and Support",
      title: "Coverage and Local Support",
      copy: "12-month warranty against manufacturing defects. Agile replacement or refund if something doesn't meet your expectations.",
      subtitle: "Coverage",
      contactTitle: "Direct Contact",
      contactCopy:
        "If you have any specific issues or questions, write to us directly. We respond within 24 business hours.",
      faqTitle: "Frequent Questions",
    },
    legal: {
      legalNoticeTitle: "Legal Notice",
      legalNoticeCopy: "Legal content pending completion according to official company data.",
      privacyTitle: "Privacy Policy",
      privacyCopy: "Privacy text pending completion with the data controller, purposes, and rights.",
      cookiesTitle: "Cookies Policy",
      cookiesCopy: "Add details of cookies, purposes, and consent options according to current regulations.",
    },
  },
};

export const dictionaries = { es, en };

