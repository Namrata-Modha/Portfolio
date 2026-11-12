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
  bio: "Full-stack developer. In India I built hotel booking, payment and data features for live client systems at two companies. Since moving to Canada I've kept shipping: a live astronomy alert platform, a pharmacy dispensing system, and a storefront a small business runs on. Fueled by K-drama marathons and too many cups of latte.",
  highlights: [
    {
      icon: "⚡",
      title: "Full-Stack Developer",
      desc: "Node.js, TypeScript, React, Python, PHP and Java. Booking systems, payment checkout, data pipelines and the APIs between them.",
    },
    {
      icon: "💳",
      title: "Payments and Integrations",
      desc: "Stripe and PayPal hosted checkout, a bank-redirect card flow, and six external science APIs with retries and backoff on Rubin Scout.",
    },
    {
      icon: "🔍",
      title: "Data You Can Trust",
      desc: "Database transactions where order matters, Redis caching for slow pages, and 280+ automated tests in CI. Nothing is done until I've checked the real rows in production.",
    },
  ],
  techStack: [
    "Node.js",
    "TypeScript",
    "React",
    "Next.js",
    "Python",
    "FastAPI",
    "PHP",
    "Laravel",
    "Java",
    "Vue.js",
    "PostgreSQL",
    "MySQL",
    "Redis",
    "Docker",
    "GitHub Actions",
    "AWS",
  ],
  flourish: "code ✦ cosmos ✦ latte",
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
      "AWS Cloud Practitioner (2022)",
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
    role: "Full Stack Developer (Cloud), promoted twice from Trainee",
    location: "Ahmedabad, India",
    period: "July 2020 - July 2022",
    highlights: [
      "Rebuilt core modules of a live legacy PHP 5 hotel booking system, including authentication, room-availability booking and role-based access control.",
      "Traced an intermittent production failure, where identical bookings failed unpredictably, to how incoming data was parsed and stored, and fixed it in both the parsing logic and the queries.",
      "Diagnosed slow production pages by timing their MySQL queries, and cached frequently read data in Redis.",
      "Developed Node.js microservices and Vue.js frontend components, and built Python automation that processed XML data on cron schedules.",
    ],
    techUsed: ["PHP", "Laravel", "MySQL", "Redis", "Node.js", "Vue.js", "Python", "AWS"],
    theme: "hotel",
    notableProject: {
      name: "Preidlhof",
      desc: "Hotel booking platform with room-availability booking, authentication and role-based access control.",
    },
  },
  {
    company: "Peanut Square LLP",
    role: "Laravel Developer",
    location: "Ahmedabad, India",
    period: "July 2022 - August 2023",
    highlights: [
      "Integrated Stripe and PayPal hosted checkout through their APIs, keeping card data off company servers, and built a separate bank-redirect card payment flow for customers in India.",
      "Delivered scheduling, booking and payment features with a React frontend across multiple concurrent client projects, in Agile sprints with GitLab, Jira and Confluence.",
      "Migrated 1M+ records from MySQL to MongoDB, redesigning the relational schema into document collections.",
      "Built a Python OCR step for a jewellery catalog: it read the text in uploaded product images and saved it to the database as catalog names.",
    ],
    techUsed: ["PHP", "Laravel", "React", "MySQL", "MongoDB", "Python", "Stripe", "PayPal"],
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
    date: "Mar 2026 - present",
    description:
      "Live astronomy alert platform. It pulls real transient discoveries from international observatories, enriches them with machine-learning classifications and catalog cross-matches, and searches LIGO gravitational-wave events for possible counterparts.",
    highlights: [
      "Integrates six external APIs, including TNS, ALeRCE, SIMBAD and LIGO, on scheduled jobs with retries and exponential backoff on its high-volume feeds",
      "Interactive Mollweide sky map backed by spatial PostGIS queries",
      "280+ tests, linting and migration checks run on every pull request; main deploys only after CI passes",
      "Ask Rubin Scout: a RAG assistant built with LangChain over a pgvector store in the same Postgres database, with Gemini for embeddings and answers; tested against prompt-injection attempts such as 'ignore your instructions'",
      "Found a feed that had failed silently for weeks by checking production data, not job responses",
    ],
    techStack: ["React", "FastAPI", "PostgreSQL", "PostGIS", "Recharts", "Tailwind", "Vercel", "Render", "Supabase", "LangChain", "pgvector", "Gemini", "TimescaleDB", "Docker", "GitHub Actions"],
    theme: "space",
    liveDemo: "https://rubin-scout.vercel.app",
    github: "https://github.com/Namrata-Modha/rubin-scout",
  },
  {
    title: "MyHealthQR",
    award: "First Place, Fanshawe BISA Capstone Showcase (2025)",
    date: "Dec 2024 – Apr 2025",
    description:
      "QR-based health records platform. Patients choose what medical information to share, and a first responder scans their code to see allergies, conditions, medications and emergency contacts. Built by a six-person team using test data only.",
    highlights: [
      "Technical lead and developer: set up the PostgreSQL database and built the backend for registration, QR scanning and patient profiles",
      "Implemented PIPEDA and guardian consent, privacy settings, and an activity log for auditing",
      "Presented at all four milestone reviews, and kept scope to an MVP the team could ship on time",
    ],
    techStack: ["PHP", "Laravel", "PostgreSQL", "Blade", "Tailwind CSS"],
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
      "Built to develop hands-on Spring Boot 3 and Java 17 depth. Not a production system, but a focused, honest learning project",
    ],
    techStack: ["Java 17", "Spring Boot 3.5", "Spring Data JPA", "Hibernate", "PostgreSQL", "Maven"],
    theme: "microservice",
    github: "https://github.com/Namrata-Modha/order-service-microservice",
  },
  {
    title: "MediLight",
    date: "Smart Pharmacy System",
    description:
      "Pharmacy dispensing system. Upload a prescription, AI reads it, medications are matched to inventory, and a simulated LED shelf lights up to show where to pick.",
    highlights: [
      "Gemini Vision reads prescriptions, with Tesseract.js as a fallback, and patient details are redacted locally before anything is sent",
      "Moved order processing into PostgreSQL transactions after finding the shelf could light up before an order was saved",
      "WebSocket messages light up a simulated LED shelf (a digital twin) in real time",
      "Hardened the API: rate limiting, schema-based input validation, security headers, CORS locked to known origins, and a secret key on destructive admin routes",
      "Controlled substances trigger a simulated 18+ ID check",
    ],
    techStack: ["React", "Express", "PostgreSQL", "Gemini AI", "WebSocket", "Tesseract", "Vercel", "Render"],
    theme: "pharmacy",
    liveDemo: "https://medilight-dashboard.vercel.app/",
    github: "https://github.com/Namrata-Modha/medilight-guide",
  },
];
