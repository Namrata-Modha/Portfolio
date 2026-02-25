// All portfolio content lives here. Edit once, updates everywhere.

export const PERSONAL = {
  name: "Namrata Modha",
  tagline: "Developer | Builder | Dreamer",
  subtitle: "a journey through code and wonder",
  email: "namratamodha3@gmail.com",
  phone: "548-881-3098",
  github: "https://github.com/Namrata-Modha",
  linkedin: "https://linkedin.com/in/namrata-modha",
  location: "London, Ontario",
};

export const ABOUT = {
  greeting: "Hey, I'm Namrata.",
  bio: 'Software engineer who builds things that work, and occasionally things that make people go "wait, that\'s cool." Fueled by K-drama marathons and too many cups of lattè. Built across India and Canada: systems, teams, and time zones.',
  highlights: [
    {
      icon: "⚡",
      title: "Full-Stack Builder",
      desc: "3+ years shipping scalable web apps: Laravel, React, Vue.js, Node.js. REST APIs and microservices handling 200k+ daily records.",
    },
    {
      icon: "☁️",
      title: "Cloud & DevOps",
      desc: "AWS Certified Cloud Practitioner. CI/CD pipelines, Docker deployments, 99.9% uptime production environments.",
    },
    {
      icon: "✦",
      title: "India → Canada",
      desc: "B.Eng in Computer Engineering from Gujarat. Postgrad at Fanshawe with a 3.97 GPA, Dean's Honor Roll. Built across continents.",
    },
  ],
  techStack: [
    "Laravel",
    "React",
    "Vue.js",
    "Node.js",
    "Next.js",
    "TypeScript",
    "Python",
    "AWS",
    "Docker",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "REST APIs",
    "Redis",
  ],
  flourish: "k-drama nights ✦ lattè mornings ✦ borahae code",
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
      gpa: null,
      note: "Foundation in systems and programming",
    },
  ],
  canada: {
    degree: "Ontario College Graduate Certificate",
    field: "Business & Information Systems Architecture",
    school: "Fanshawe College",
    location: "London, Ontario",
    years: "Sept 2023 - Apr 2025",
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
  },
];
