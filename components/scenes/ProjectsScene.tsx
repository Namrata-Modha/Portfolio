"use client";

import { motion } from "framer-motion";
import CinematicEnvironment from "@/components/visuals/CinematicEnvironment";
import GlassCard from "@/components/visuals/GlassCard";
import NavigationButtons from "@/components/ui/NavigationButtons";

type ProjectView = "rubin-scout" | "myhealthqr" | "medilight";

interface ProjectsSceneProps {
  onBack: () => void;
  onContinue: () => void;
  onSelectProject: (project: ProjectView) => void;
}

const PROJECT_CARDS = [
  {
    id: "rubin-scout" as ProjectView,
    title: "Rubin Scout",
    tagline: "Astronomical Alert Dashboard",
    date: "Mar – Apr 2026",
    description: "First public tool with gravitational wave cross-matching. Real-time pipeline from 4 live astronomy sources.",
    tech: ["React", "FastAPI", "PostGIS", "LIGO"],
    accentColor: "rgba(167, 139, 250, 0.8)",
    accentBg: "rgba(124, 58, 237, 0.12)",
    accentBorder: "rgba(167, 139, 250, 0.25)",
    textColor: "rgba(196, 181, 253, 0.9)",
    badge: "✦ Gravitational Waves",
    badgeStyle: {
      background: "rgba(124, 58, 237, 0.15)",
      border: "1px solid rgba(167, 139, 250, 0.3)",
      color: "rgba(196, 181, 253, 0.9)",
    },
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="3" fill="rgba(196, 181, 253, 0.9)" />
        <circle cx="16" cy="16" r="8" stroke="rgba(167, 139, 250, 0.4)" strokeWidth="1" fill="none" strokeDasharray="3 3" />
        <circle cx="16" cy="16" r="13" stroke="rgba(167, 139, 250, 0.2)" strokeWidth="1" fill="none" strokeDasharray="2 4" />
        <circle cx="29" cy="16" r="2" fill="rgba(196, 181, 253, 0.8)" />
      </svg>
    ),
  },
  {
    id: "myhealthqr" as ProjectView,
    title: "MyHealthQR",
    tagline: "Healthcare Data Platform",
    date: "Dec 2024 – Apr 2025",
    description: "PIPEDA-compliant healthcare platform with role-based access control. Won 1st Place at Capstone.",
    tech: ["Laravel", "PostgreSQL", "Docker", "RBAC"],
    accentColor: "rgba(103, 232, 249, 0.8)",
    accentBg: "rgba(34, 211, 238, 0.08)",
    accentBorder: "rgba(103, 232, 249, 0.2)",
    textColor: "rgba(150, 240, 240, 0.9)",
    badge: "🏆 First Place",
    badgeStyle: {
      background: "rgba(251, 191, 36, 0.12)",
      border: "1px solid rgba(251, 191, 36, 0.3)",
      color: "rgba(251, 191, 36, 0.95)",
    },
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="4" width="11" height="11" rx="1.5" stroke="rgba(103, 232, 249, 0.7)" strokeWidth="1.5" fill="none" />
        <rect x="6" y="6" width="7" height="7" fill="rgba(103, 232, 249, 0.3)" rx="0.5" />
        <rect x="17" y="4" width="11" height="11" rx="1.5" stroke="rgba(103, 232, 249, 0.7)" strokeWidth="1.5" fill="none" />
        <rect x="19" y="6" width="7" height="7" fill="rgba(103, 232, 249, 0.3)" rx="0.5" />
        <rect x="4" y="17" width="11" height="11" rx="1.5" stroke="rgba(103, 232, 249, 0.7)" strokeWidth="1.5" fill="none" />
        <rect x="6" y="19" width="7" height="7" fill="rgba(103, 232, 249, 0.3)" rx="0.5" />
        <rect x="17" y="17" width="5" height="5" fill="rgba(103, 232, 249, 0.5)" rx="0.5" />
        <rect x="24" y="17" width="4" height="4" fill="rgba(103, 232, 249, 0.3)" rx="0.5" />
        <rect x="17" y="23" width="4" height="5" fill="rgba(103, 232, 249, 0.3)" rx="0.5" />
        <rect x="23" y="23" width="5" height="5" fill="rgba(103, 232, 249, 0.5)" rx="0.5" />
      </svg>
    ),
  },
  {
    id: "medilight" as ProjectView,
    title: "MediLight",
    tagline: "AI Prescription Scanner",
    date: "Smart Pharmacy",
    description: "AI-powered prescription scanning for pharmacy dispensing. Gemini Vision + LED shelf hardware control.",
    tech: ["Gemini AI", "React", "WebSocket", "Express"],
    accentColor: "rgba(124, 58, 237, 0.8)",
    accentBg: "rgba(124, 58, 237, 0.1)",
    accentBorder: "rgba(124, 58, 237, 0.2)",
    textColor: "rgba(167, 139, 250, 0.9)",
    badge: "✦ PHI auto-redacted",
    badgeStyle: {
      background: "rgba(134, 239, 172, 0.12)",
      border: "1px solid rgba(134, 239, 172, 0.3)",
      color: "rgba(20, 130, 80, 0.9)",
    },
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="4" y="8" width="24" height="16" rx="3" stroke="rgba(124, 58, 237, 0.6)" strokeWidth="1.5" fill="rgba(124, 58, 237, 0.08)" />
        <rect x="8" y="12" width="10" height="1.5" rx="0.75" fill="rgba(124, 58, 237, 0.5)" />
        <rect x="8" y="15" width="14" height="1.5" rx="0.75" fill="rgba(124, 58, 237, 0.4)" />
        <rect x="8" y="18" width="8" height="1.5" rx="0.75" fill="rgba(124, 58, 237, 0.3)" />
        <circle cx="25" cy="12" r="3" fill="rgba(134, 239, 172, 0.7)" />
      </svg>
    ),
  },
];

export default function ProjectsScene({ onBack, onContinue, onSelectProject }: ProjectsSceneProps) {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <CinematicEnvironment scene="projects" />

      {/* Entrance flash */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ scale: 0, opacity: 0.5 }}
        animate={{ scale: 2, opacity: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{
          background: "radial-gradient(circle, rgba(100, 220, 255, 0.4) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 h-screen overflow-y-auto py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 pb-32">
        <div className="w-full max-w-6xl mx-auto">

          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="mb-10 sm:mb-14 text-center"
          >
            <motion.h1
              className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-purple-200 via-pink-200 to-blue-200 bg-clip-text text-transparent"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Projects
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-purple-200/80 text-base sm:text-lg lg:text-xl"
            >
              Building systems that solve real problems
            </motion.p>
          </motion.div>

          {/* Project cards — 3 columns desktop, 1 column mobile */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {PROJECT_CARDS.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 60, scale: 0.85 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.3 + index * 0.15,
                  type: "spring",
                  bounce: 0.4,
                }}
              >
                <motion.div
                  className="h-full cursor-pointer"
                  whileHover={{ y: -8, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  onClick={() => onSelectProject(project.id)}
                >
                  <GlassCard depth="near" className="h-full flex flex-col p-5 sm:p-6">
                    {/* Icon + badge row */}
                    <div className="flex items-start justify-between mb-4">
                      <motion.div
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 6, repeat: Infinity, delay: index * 0.5 }}
                      >
                        {project.icon}
                      </motion.div>
                      <span
                        className="text-xs px-2 py-0.5 rounded-full font-medium"
                        style={project.badgeStyle}
                      >
                        {project.badge}
                      </span>
                    </div>

                    {/* Title & tagline */}
                    <div className="mb-3">
                      <h2
                        className="text-xl sm:text-2xl font-bold mb-1"
                        style={{ color: project.textColor }}
                      >
                        {project.title}
                      </h2>
                      <p
                        className="text-xs font-mono"
                        style={{ color: project.accentColor, opacity: 0.7 }}
                      >
                        {project.date}
                      </p>
                    </div>

                    {/* Description */}
                    <p
                      className="text-sm leading-relaxed mb-5 flex-1"
                      style={{ color: "rgba(210, 200, 255, 0.75)" }}
                    >
                      {project.description}
                    </p>

                    {/* Tech chips */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-2.5 py-0.5 rounded-full"
                          style={{
                            background: project.accentBg,
                            border: `1px solid ${project.accentBorder}`,
                            color: project.textColor,
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* View Project button */}
                    <motion.button
                      className="w-full py-2.5 rounded-xl text-sm font-medium transition-all"
                      style={{
                        background: project.accentBg,
                        border: `1px solid ${project.accentBorder}`,
                        color: project.textColor,
                      }}
                      whileHover={{
                        background: `rgba(${project.accentColor.match(/[\d.]+/g)?.slice(0, 3).join(",") ?? "167,139,250"}, 0.25)`,
                      }}
                    >
                      View Project →
                    </motion.button>
                  </GlassCard>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <NavigationButtons
        onBack={onBack}
        onContinue={onContinue}
        backLabel="Experience"
        continueLabel="Contact"
      />
    </div>
  );
}
