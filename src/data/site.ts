export type Localized = { es: string; en: string };
export type LocalizedList = { es: string[]; en: string[] };

export const profile = {
  name: "Alexandro Espino",
  role: "Fullstack Developer",
  roles: ["Fullstack Developer", "Marketing Strategist", "Brand Positioning"],
  tagline: {
    es: "Construyo productos web completos, desde el frontend a la infraestructura y la seguridad que los sostienen.",
    en: "I build complete web products, from the frontend to the infrastructure and security that keep them running.",
  } satisfies Localized,
  email: "expinole12@gmail.com",
  linkedin: "https://linkedin.com/in/alex-espino",
  github: "http://github.com/Alexandro02/",
};

export const skills: string[] = [
  "Next.js",
  "React",
  "Astro",
  "Supabase",
  "TailwindCSS",
  "SQL",
  "Git/GitHub",
  "Docker",
];

export type ExperienceStat = {
  value: number;
  prefix?: string;
  suffix?: string;
  labelEs: string;
  labelEn: string;
};

export type ExperienceItem = {
  company: string;
  role: Localized;
  location: string;
  period: Localized;
  description: LocalizedList;
  stats?: ExperienceStat[];
};

// Orden: más reciente primero.
export const experience: ExperienceItem[] = [
  {
    company: "Global Supplier MTY",
    role: {
      es: "Web Developer & Digital Growth Strategist",
      en: "Web Developer & Digital Growth Strategist",
    },
    location: "San Nicolás de los Garza, Nuevo León",
    period: { es: "Febrero 2026 > Presente", en: "February 2026 > Present" },
    description: {
      es: [
        "Responsable del desarrollo desde cero y mantenimiento de los sitios web de 3 marcas del grupo (The Fire Spot, Juno Promotional, Got Fresh Breath), consolidando junto con Thunder LED Lights y Thunder Safety Solutions el portafolio web de 5 marcas de la empresa.",
        "Desarrollo y mantenimiento del CRM interno de la empresa (Supply) con stack basado en Supabase y Docker, reemplazando exitosamente Monday.com y reduciendo el gasto en herramientas de gestión en 85% (~$40,800 MXN anuales).",
        "Diseño y desarrollo de módulos funcionales del CRM (gestión de Proyectos, Leads y Actividades), incluyendo flujo de trabajo estructurado entre diseño y desarrollo con control de estatus y bitácora de decisiones.",
      ],
      en: [
        "Responsible for building from scratch and maintaining the websites of 3 brands in the group (The Fire Spot, Juno Promotional, Got Fresh Breath), consolidating together with Thunder LED Lights and Thunder Safety Solutions a web portfolio of 5 company brands.",
        "Development and maintenance of the company's internal CRM (Supply) with a Supabase and Docker-based stack, successfully replacing Monday.com and cutting management-tooling spend by 85% (~$40,800 MXN/year).",
        "Design and development of functional CRM modules (Projects, Leads, and Activities management), including a structured workflow between design and development with status tracking and a decision log.",
      ],
    },
    stats: [
      { value: 5, labelEs: "Marcas operadas", labelEn: "Brands operated" },
      { value: 85, prefix: "-", suffix: "%", labelEs: "Costo herramientas CRM", labelEn: "CRM tooling cost" },
      { value: 3, labelEs: "Sitios desde cero", labelEn: "Sites built from scratch" },
    ],
  },
  {
    company: "Cardleon / ThornSolutions (proyectos propios)",
    role: {
      es: "Fundador y Desarrollador Fullstack - Freelance",
      en: "Founder & Fullstack Developer - Freelance",
    },
    location: "Monterrey, Nuevo León",
    period: { es: "Febrero 2025 > Enero 2026", en: "February 2025 > January 2026" },
    description: {
      es: [
        "Desarrollo de sitios web utilizando Next.js, Astro, Supabase, React y TailwindCSS.",
        "Implementación de SEO técnico y optimización de rendimiento en páginas de clientes industriales.",
        "Automatización de despliegues mediante GitHub Actions y Supabase como CDN.",
        "Prospección y negociación directa con clientes, liderando la definición de proyectos de principio a fin.",
        "Entrega de proyectos para marcas como NuvaTech, MAZ Soluciones, Thunder LED Lights y Thunder Safety Solutions.",
      ],
      en: [
        "Website development using Next.js, Astro, Supabase, React, and TailwindCSS.",
        "Technical SEO implementation and performance optimization on industrial client sites.",
        "Deployment automation via GitHub Actions with Supabase as CDN.",
        "Direct client prospecting and negotiation, leading project scoping from start to finish.",
        "Delivered projects for brands such as NuvaTech, MAZ Soluciones, Thunder LED Lights, and Thunder Safety Solutions.",
      ],
    },
  },
  {
    company: "Epicor",
    role: { es: "Product Developer / QA Analyst", en: "Product Developer / QA Analyst" },
    location: "",
    period: { es: "Mayo 2022 > Agosto 2023", en: "May 2022 > August 2023" },
    description: {
      es: [
        "Desarrollo y mantenimiento de funcionalidades con Angular, SQL Server, Bootstrap, CSS/SCSS, HTML, JavaScript y TypeScript.",
        "Investigación e implementación con Manticore Search usando C# y .NET.",
        "Pruebas de calidad (QA) sobre funcionalidades antes de despliegue.",
      ],
      en: [
        "Development and maintenance of features using Angular, SQL Server, Bootstrap, CSS/SCSS, HTML, JavaScript, and TypeScript.",
        "Research and implementation with Manticore Search using C# and .NET.",
        "Quality assurance (QA) testing on features prior to deployment.",
      ],
    },
  },
];

export type Project = {
  slug: string;
  name: string;
  url: string;
  stack: string[];
  summary: Localized;
  image?: string;
};

export const projects: Project[] = [
  {
    slug: "the-fire-spot",
    name: "The Fire Spot",
    url: "https://thefirespot.mx",
    stack: ["Next.js", "TailwindCSS", "PostgreSQL", "Supabase", "Vercel"],
    summary: {
      es: "E-commerce multimarca para sazonadores y salsas BBQ premium, con catálogo de 8 marcas internacionales, carrito de compras, gestión de cuentas y envíos regionalizados. El reto fue modelar un catálogo donde un mismo producto pertenece a distintas marcas y categorías sin duplicar lógica de inventario ni checkout. Construido con Next.js y Supabase como parte de mi rol en Global Supplier.",
      en: "Multi-brand e-commerce for premium seasonings and BBQ sauces, with a catalog spanning 8 international brands, shopping cart, account management, and regional shipping. The challenge was modeling a catalog where the same product belongs to multiple brands and categories without duplicating inventory or checkout logic. Built with Next.js and Supabase as part of my role at Global Supplier.",
    },
    image: "/projects/TFS.png",
  },
  {
    slug: "thunder-led-lights",
    name: "Thunder LED Lights",
    url: "https://thunderledlights.com",
    stack: ["Next.js", "TailwindCSS", "PostgreSQL", "Supabase", "Hostinger"],
    summary: {
      es: "Sitio para la división de iluminación industrial de un grupo de seguridad física con dos marcas hermanas (Thunder LED Lights y Thunder Safety Solutions). La decisión técnica clave fue diseñar un sistema de componentes compartido entre ambos sitios para mantener consistencia visual y de datos sin duplicar código, ya que ambas marcas comparten catálogo, video assets y estructura de soluciones.",
      en: "Site for the industrial lighting division of a physical-security group with two sister brands (Thunder LED Lights and Thunder Safety Solutions). The key technical decision was designing a component system shared between both sites to keep visual and data consistency without duplicating code, since both brands share catalog, video assets, and solution structure.",
    },
    image: "/projects/TLL.png",
  },
  {
    slug: "juno-promotional",
    name: "Juno Promotional",
    url: "https://junopromotional.com",
    stack: ["Next.js", "TailwindCSS", "PostgreSQL", "Neon", "Vercel", "Payload CMS"],
    summary: {
      es: "Catálogo B2B de más de 10,000 productos promocionales con variantes por color, existencia y disponibilidad en tiempo real. Aquí la decisión técnica interesante fue optar por Neon en vez de Supabase para separar la capa de datos del hosting (Hostinger), lo que me obligó a pensar la arquitectura de forma más desacoplada. Aprendí a manejar catálogos de gran volumen sin sacrificar tiempos de carga.",
      en: "B2B catalog of over 10,000 promotional products with variants by color, real-time stock, and availability. The interesting technical decision here was choosing Neon over Supabase to decouple the data layer from hosting (Hostinger), which forced me to think about the architecture in a more decoupled way. I learned to handle high-volume catalogs without sacrificing load times.",
    },
    image: "/projects/JPM.png",
  },
  {
    slug: "thunder-safety-solutions",
    name: "Thunder Safety Solutions",
    url: "https://thundersafetysolutions.com",
    stack: ["Next.js", "TailwindCSS", "PostgreSQL", "Supabase", "TuSite"],
    summary: {
      es: "Sitio hermano de Thunder LED Lights, enfocado en seguridad física industrial (montacargas, guantes, detección de gas, sistemas ANDON). Reutiliza la misma base de componentes que Thunder LED Lights pero con catálogo y secciones propias, lo que puso a prueba qué tan bien diseñé el sistema compartido para escalar a una segunda marca sin reescribir la mitad del sitio.",
      en: "Sister site to Thunder LED Lights, focused on industrial physical safety (forklifts, gloves, gas detection, ANDON systems). It reuses the same component base as Thunder LED Lights but with its own catalog and sections, which tested how well I'd designed the shared system to scale to a second brand without rewriting half the site.",
    },
    image: "/projects/TSS.png",
  },
];
