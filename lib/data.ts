// All portfolio content lives here. Edit once, updates everywhere.

export const PERSONAL = {
  name: "Namrata Modha",
  tagline: "Technical BA | Systems Architect | Developer",
  subtitle: "bridging strategy and engineering",
  email: "namratamodha3@gmail.com",
  phone: "548-881-3098",
  github: "https://github.com/Namrata-Modha",
  linkedin: "https://linkedin.com/in/namrata-modha",
  location: "London, Ontario",
};

export const ABOUT = {
  greeting: "Hey, I'm Namrata.",
  bio: 'Technical Business Analyst who translates business strategy into engineered solutions. I bridge the gap between "what stakeholders need" and "what engineering builds" - requirements analysis, system architecture, and hands-on development. Built across India and Canada, fueled by lattè and K-drama marathons.',
  highlights: [
    {
      icon: "⚡",
      title: "Technical BA + Engineer",
      desc: "3+ years bridging business and tech. Requirements translation, gap analysis, NFRs, system design. Then I build it: Laravel, React, Vue.js, Node.js, REST APIs.",
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
    "Requirements Analysis",
    "System Architecture",
    "Agile/JIRA",
    "Laravel",
    "React",
    "Vue.js",
    "Node.js",
    "TypeScript",
    "Python",
    "AWS",
    "Docker",
    "PostgreSQL",
    "REST APIs",
  ],
  flourish: "strategy ✦ systems ✦ code ✦ lattè",
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
      "Designed data ingestion architectures and microservices for a platform handling 200,000+ daily records with 99.9% uptime.",
      "Automated CRON workflows and Trunk-based branching, reducing manual team effort by 33%.",
      "Debugged production incidents and wrote unit tests for PHP/Laravel modules, cutting error rates by 25%.",
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
      "Led legacy modernization migrating 1M+ records from SQL to MongoDB, reducing query latency by 40%.",
      "Built secure payment gateway integrations using React and Node.js/Express with 100% transaction reliability.",
      "Championed CI/CD pipelines and Gitflow standards across 10+ client projects, reducing post-release bugs by 20%.",
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
  description: string;
  highlights: string[];
  techStack: string[];
  theme: "medical" | "dashboard";
  github?: string;
}

export const PROJECTS: ProjectEntry[] = [
  {
    title: "MyHealthQR",
    award: "First Place Capstone Award",
    description:
      "PIPEDA-compliant healthcare platform with role-based access control and API gateway strategy.",
    highlights: [
      "Won 1st Place for Technical Excellence among 10+ teams.",
      "Optimized database queries by 40% through indexing and schema design.",
      "Implemented rigorous integration testing ensuring zero unauthorized access.",
      "Led architecture decisions for secure health data handling.",
    ],
    techStack: ["PHP", "Laravel", "PostgreSQL", "REST APIs", "Docker"],
    theme: "medical",
    github: "https://github.com/Namrata-Modha/MyHealthQR",
  },
  {
    title: "MediLight",
    award: undefined,
    description:
      "AI-powered smart pharmacy dispensing system. Upload a prescription, Gemini AI reads it, medications match to inventory, and LED shelf lights guide the pharmacist to the right product.",
    highlights: [
      "Built full-stack pipeline: React dashboard, Express API, and PostgreSQL on Neon with real-time WebSocket shelf control.",
      "Integrated Google Gemini 2.5 Flash for prescription OCR handling handwritten, misspelled, and low-quality images.",
      "Designed LED digital twin simulating ESP32 shelf hardware for live demo without physical devices.",
      "Deployed across Vercel and Render with Swagger API docs and 10 automated test endpoints.",
    ],
    techStack: ["React", "Node.js", "Express", "PostgreSQL", "Gemini AI", "WebSocket"],
    theme: "dashboard",
    github: "https://github.com/Namrata-Modha/Medilight-guide",
  },
  {
    title: "InsightOps",
    award: undefined,
    description:
      "Real-time KPI monitoring dashboard enabling non-technical teams to interpret system health.",
    highlights: [
      "Built React-based dashboard with WebSocket APIs and RBAC.",
      "Containerized deployments using Docker with automated CI/CD pipelines.",
      "Designed user flows for real-time system health visualization.",
    ],
    techStack: ["React", "WebSocket", "Docker", "Node.js", "CI/CD"],
    theme: "dashboard",
    github: "https://github.com/Namrata-Modha/InsightOps",
  },
];