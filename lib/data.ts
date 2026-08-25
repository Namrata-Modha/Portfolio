// All portfolio content lives here. Edit once, updates everywhere.

export const PERSONAL = {
  name: "Namrata Modha",
  tagline: "Full-Stack Developer",
  email: "namratamodha3@gmail.com",
  phone: "548-881-3098",
  github: "https://github.com/Namrata-Modha",
  linkedin: "https://linkedin.com/in/namrata-modha",
  location: "London, Ontario",
};

export const ABOUT = {
  greeting: "Hey, I'm Namrata.",
  bio: 'Technical Business Analyst who translates business strategy into engineered solutions. I bridge the gap between "what stakeholders need" and "what engineering builds" - requirements analysis, system architecture, and hands-on development. Built across India and Canada, fueled by latte and K-drama marathons.',
  highlights: [
    {
      icon: "⚡",
      title: "Full-Stack Developer",
      desc: "3+ years shipping production systems: Laravel, React, Vue.js, Node.js, REST APIs. Backed by requirements translation, gap analysis, NFRs, and system design, so what I build is what the business actually needed.",
    },
    {
      icon: "📊",
      title: "Systems Architecture",
      desc: "Design decisions that scale. API standards, data flow diagrams, PIPEDA compliance. AWS/Azure cloud architecture. Release planning and dependency tracking.",
    },
    {
      icon: "🎯",
      title: "Agile Delivery",
      desc: "Risk mitigation, cross-functional coordination, sprint facilitation. Partnered with Product Owners on 10+ client projects. Dean's Honor Roll in Business & IS Architecture (3.97 GPA).",
    },
  ],
  techStack: [
    "React",
    "TypeScript",
    "Node.js",
    "Laravel",
    "Vue.js",
    "Python",
    "PostgreSQL",
    "REST APIs",
    "AWS",
    "Docker",
    "System Architecture",
    "Requirements Analysis",
    "Agile/JIRA",
  ],
  flourish: "code ✦ systems ✦ strategy ✦ latte",
};

export const EDUCATION = {
  india: [
    {
      degree: "Bachelor of Engineering",
      field: "Computer Engineering",
      school: "Gujarat Technological University",
      location: "Ahmedabad",
      years: "2017 - 2020",
      gpa: "8.35 / 10",
      note: "WES evaluated as 4-year Canadian equivalent",
    },
    {
      degree: "Diploma",
      field: "Computer Engineering",
      school: "Government Polytechnic",
      location: "Porbandar",
      years: "2014 - 2017",
      gpa: "8.80 / 10",
      note: "Foundation in systems and programming",
    },
  ],
  canada: {
    degree: "Ontario College Graduate Certificate",
    field: "Business & Information Systems Architecture",
    school: "Fanshawe College",
    location: "London, Ontario",
    years: "2023 - 2025",
    gpa: "3.97 / 4.0",
    honors: "Dean's Honor Roll (Sem 2, 3, 4)",
    certs: [
      "AWS Cloud Practitioner",
      "AWS Generative AI",
      "Project Management for Leaders",
      "Rising Leaders Program",
    ],
  },
};

export interface ExperienceEntry {
  company: string;
  role: string;
  location: string;
  period: string;
  highlights: string[];
  techUsed: string[];
  theme: "tech" | "backend" | "constellation" | "hotel";
  notableProject?: {
    name: string;
    desc: string;
  };
}

export const EXPERIENCE: ExperienceEntry[] = [
  {
    company: "Dev Information Technology Ltd",
    role: "Software Developer",
    location: "Ahmedabad, India",
    period: "July 2020 - June 2022",
    highlights: [
      "Built and maintained Node.js microservices and REST APIs for a platform processing 100K+ daily records; designed backend service components, wrote technical specifications, and maintained Jira and Confluence documentation to align QA and stakeholders with implementation decisions across Agile delivery.",
      "Diagnosed API performance degradation through profiling and query analysis; implemented database indexing, query optimization, and Redis caching to reduce response times, then delivered the critical business feature on the optimized foundation without regression and bringing back the uptime to around 99%.",
      "Developed Vue.js frontend components and validated technical requirements with a German client through structured sessions, confirming delivered functionality matched specifications before each sprint sign-off.",
    ],
    techUsed: ["PHP", "Laravel", "Python", "MySQL", "AWS", "Docker"],
    theme: "hotel",
    notableProject: {
      name: "Preidlhof",
      desc: "Hotel management platform with real-time booking and data ingestion pipelines.",
    },
  },
  {
    company: "Peanut Square LLP",
    role: "Laravel Developer",
    location: "Ahmedabad, India",
    period: "July 2022 - July 2023",
    highlights: [
      "Built the PayPal and Stripe integration for a PHP/Laravel platform handling 200K+ daily transactions as a systems design challenge: defined the API integration architecture, implemented error recovery and timeout-handling logic, and applied security-aware coding practices to protect payment data at every layer of the transaction flow.",
      "Led a migration of 1M+ records from MySQL to MongoDB, redesigning the relational schema into document-based collections and validating data integrity throughout the cutover, achieving a 40% reduction in query latency.",
      "Built a Python OCR pipeline to convert document images into structured text data, implementing image preprocessing and text extraction logic, then integrated the output into the platform's backend data pipeline to process unstructured document inputs automatically.",
    ],
    techUsed: ["React", "Node.js", "MongoDB", "Laravel", "AWS", "Postman"],
    theme: "constellation",
    notableProject: {
      name: "Spirito",
      desc: "Horoscope and astrology platform with constellation-themed UI and personalized readings.",
    },
  },
];

export interface ProjectEntry {
  title: string;
  award?: string;
  date: string;
  description: string;
  highlights: string[];
  techStack: string[];
  theme: "space" | "medical" | "pharmacy" | "microservice";
  github?: string;
  liveDemo?: string;
}

export const PROJECTS: ProjectEntry[] = [
  {
    title: "Rubin Scout",
    award: "First public gravitational wave cross-matching tool",
    date: "Mar 2026 – Apr 2026",
    description:
      "Full-stack astronomical data pipeline processing real transient discoveries from international observatories. Ingests data from IAU Transient Name Server, enriches with ALeRCE ML classifications, cross-matches SIMBAD catalog, and searches LIGO gravitational wave counterparts.",
    highlights: [
      "Real-time pipeline pulling from 4 live sources (TNS, ALeRCE, SIMBAD, LIGO)",
      "Interactive Mollweide sky map with spatial PostGIS queries",
      "Gravitational wave cross-matching for optical counterpart search",
      "RESTful API with Swagger docs + admin security controls",
      "Ask Rubin Scout: conversational RAG assistant built with a LangChain LCEL chain over a pgvector store inside the existing Postgres database, with Gemini handling embeddings and generation; verified resistance to prompt-injection attacks",
    ],
    techStack: ["React", "FastAPI", "PostgreSQL", "PostGIS", "Recharts", "Tailwind", "Vercel", "Render", "Supabase", "LangChain", "pgvector", "Gemini"],
    theme: "space",
    liveDemo: "https://rubin-scout.vercel.app",
    github: "https://github.com/Namrata-Modha/rubin-scout",
  },
  {
    title: "MyHealthQR",
    award: "First Place Capstone Award",
    date: "Dec 2024 – Apr 2025",
    description:
      "PIPEDA-compliant healthcare platform with role-based access control and API gateway strategy.",
    highlights: [
      "Won 1st Place for Technical Excellence among 10+ capstone teams.",
      "Served as Technical Lead, architecting the entire backend including authentication, QR-code generation, and role-based access control end to end.",
      "Optimized database queries by 40% through strategic indexing and schema design.",
      "Implemented rigorous integration testing ensuring zero unauthorized access.",
    ],
    techStack: ["PHP", "Laravel", "PostgreSQL", "REST APIs", "Docker"],
    theme: "medical",
    github: "https://github.com/Namrata-Modha/MyHealthQR",
  },
  {
    title: "Order Service Microservice",
    date: "Learning Project",
    description:
      "Spring Boot microservice for order management, structured as a deliberate exercise in building real Java/Spring depth. Modelled after a single extracted service in a Strangler Fig migration pattern out of a legacy monolith.",
    highlights: [
      "Full CRUD REST API with layered architecture: Controller → Service → Repository → Entity",
      "PostgreSQL persistence via Spring Data JPA and Hibernate",
      "Global exception handling with a custom not-found exception",
      "Built to develop hands-on Spring Boot 3 and Java 17 depth — not a production system, but a focused, honest learning project",
    ],
    techStack: ["Java 17", "Spring Boot 3.5", "Spring Data JPA", "Hibernate", "PostgreSQL", "Maven"],
    theme: "microservice",
    github: "https://github.com/Namrata-Modha/order-service-microservice",
  },
  {
    title: "MediLight",
    date: "Smart Pharmacy System",
    description:
      "AI-powered smart pharmacy dispensing system. Upload a prescription, Gemini AI reads it, medications match to inventory, and LED shelf lights guide the pharmacist to the right product.",
    highlights: [
      "Google Gemini AI Vision reads prescriptions with typo/abbreviation handling",
      "PostgreSQL tracks inventory, orders, compliance audit trails",
      "WebSocket broadcasts LED signals to shelf hardware in real-time",
      "Controlled substances trigger age 18+ ID verification",
    ],
    techStack: ["React", "Express", "PostgreSQL", "Gemini AI", "WebSocket", "Tesseract", "Vercel", "Render"],
    theme: "pharmacy",
    liveDemo: "https://medilight-dashboard.vercel.app/",
    github: "https://github.com/Namrata-Modha/medilight-guide",
  },
];