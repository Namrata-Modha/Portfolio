"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import GlassCard, { GlassChip } from "@/components/visuals/GlassCard";
import NavigationButtons from "@/components/ui/NavigationButtons";
import { ExternalLink, GitFork, BookOpen, ArrowLeft } from "lucide-react";

interface RubinScoutSceneProps {
  onBack: () => void;
}

const TECH_STACK = [
  "React", "FastAPI", "PostgreSQL", "PostGIS",
  "Recharts", "Tailwind", "Vercel", "Render", "Supabase",
  "LangChain", "pgvector", "Gemini",
];

const FEATURES = [
  "Real-time pipeline pulling from 4 live sources (TNS, ALeRCE, SIMBAD, LIGO)",
  "Interactive Mollweide sky map with spatial PostGIS queries",
  "Gravitational wave cross-matching for optical counterpart search",
  "RESTful API with Swagger docs + admin security controls",
  "Ask Rubin Scout: conversational RAG assistant built with a LangChain LCEL chain over a pgvector store inside the existing Postgres database, with Gemini handling embeddings and generation; verified resistance to prompt-injection attacks",
];

// Star field data (stable, no Math.random in render)
const STARS = Array.from({ length: 120 }, (_, i) => ({
  id: i,
  x: (i * 137.508) % 100,
  y: (i * 97.3) % 100,
  size: i % 3 === 0 ? 2.5 : i % 5 === 0 ? 1.8 : 1.2,
  delay: (i * 0.07) % 4,
  duration: 2 + (i % 5) * 0.6,
}));

// Constellation lines
const CONSTELLATION_LINES = [
  { x1: 15, y1: 20, x2: 25, y2: 35 },
  { x1: 25, y1: 35, x2: 40, y2: 28 },
  { x1: 40, y1: 28, x2: 55, y2: 40 },
  { x1: 70, y1: 15, x2: 80, y2: 30 },
  { x1: 80, y1: 30, x2: 88, y2: 20 },
  { x1: 10, y1: 70, x2: 20, y2: 60 },
  { x1: 20, y1: 60, x2: 35, y2: 75 },
];

export default function RubinScoutScene({ onBack }: RubinScoutSceneProps) {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setEntered(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className="relative w-full min-h-screen overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #0a0e27 0%, #0d1235 40%, #0f0a2e 70%, #0a0e27 100%)",
        opacity: entered ? 1 : 0,
        transition: "opacity 0.8s ease-out",
      }}
    >
      {/* ── STAR FIELD ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <svg className="w-full h-full" style={{ position: "absolute", inset: 0 }}>
          {/* Constellation lines */}
          {CONSTELLATION_LINES.map((line, i) => (
            <motion.line
              key={`line-${i}`}
              x1={`${line.x1}%`} y1={`${line.y1}%`}
              x2={`${line.x2}%`} y2={`${line.y2}%`}
              stroke="rgba(167, 139, 250, 0.25)"
              strokeWidth="0.8"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, delay: 0.5 + i * 0.15, ease: "easeInOut" }}
            />
          ))}

          {/* Stars */}
          {STARS.map((star) => (
            <motion.circle
              key={star.id}
              cx={`${star.x}%`}
              cy={`${star.y}%`}
              r={star.size}
              fill={star.id % 7 === 0 ? "rgba(196, 181, 253, 0.9)" : "rgba(255, 255, 255, 0.85)"}
              animate={{
                opacity: [0.3, 1, 0.3],
                r: [star.size, star.size * 1.4, star.size],
              }}
              transition={{
                duration: star.duration,
                repeat: Infinity,
                delay: star.delay,
                ease: "easeInOut",
              }}
            />
          ))}
        </svg>

        {/* Nebula glow layers */}
        <motion.div
          className="absolute w-96 h-96 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(124, 58, 237, 0.15) 0%, transparent 70%)",
            top: "10%", left: "10%",
            filter: "blur(60px)",
          }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute w-80 h-80 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(167, 139, 250, 0.12) 0%, transparent 70%)",
            bottom: "20%", right: "15%",
            filter: "blur(50px)",
          }}
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
        <motion.div
          className="absolute w-64 h-64 rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, rgba(196, 181, 253, 0.1) 0%, transparent 70%)",
            top: "50%", right: "30%",
            filter: "blur(40px)",
          }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        />

        {/* Telescope silhouette */}
        <motion.div
          className="absolute bottom-8 right-8 opacity-10 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2, delay: 1 }}
        >
          <svg width="120" height="160" viewBox="0 0 120 160" fill="rgba(167,139,250,0.8)">
            <ellipse cx="60" cy="30" rx="50" ry="15" />
            <rect x="52" y="30" width="16" height="80" />
            <rect x="30" y="105" width="60" height="10" rx="5" />
            <rect x="50" y="115" width="20" height="30" />
            <rect x="35" y="145" width="50" height="8" rx="4" />
          </svg>
        </motion.div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="relative z-10 min-h-screen overflow-y-auto py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 pb-32">
        <div className="w-full max-w-5xl mx-auto">

          {/* Back button */}
          <motion.button
            onClick={onBack}
            className="flex items-center gap-2 mb-6 px-4 py-2 rounded-full text-purple-300 hover:text-purple-100 transition-colors"
            style={{
              background: "rgba(124, 58, 237, 0.15)",
              border: "1px solid rgba(167, 139, 250, 0.3)",
              backdropFilter: "blur(10px)",
            }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05, x: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft size={16} />
            <span className="text-sm">Back to Projects</span>
          </motion.button>

          {/* Header */}
          <motion.div
            className="mb-8 sm:mb-10"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <motion.span
                className="text-xs font-mono px-3 py-1 rounded-full"
                style={{
                  background: "rgba(124, 58, 237, 0.2)",
                  border: "1px solid rgba(167, 139, 250, 0.4)",
                  color: "rgba(196, 181, 253, 0.9)",
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                Mar 2026 – Apr 2026
              </motion.span>
              <motion.span
                className="text-xs px-3 py-1 rounded-full"
                style={{
                  background: "rgba(167, 139, 250, 0.15)",
                  border: "1px solid rgba(196, 181, 253, 0.3)",
                  color: "rgba(196, 181, 253, 0.9)",
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 }}
              >
                ✦ First public gravitational wave cross-matching tool
              </motion.span>
            </div>

            <motion.h1
              className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-3"
              style={{
                background: "linear-gradient(135deg, #c4b5fd 0%, #a78bfa 40%, #7c3aed 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 0 60px rgba(167, 139, 250, 0.3)",
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Rubin Scout
            </motion.h1>
            <motion.p
              className="text-base sm:text-lg"
              style={{ color: "rgba(196, 181, 253, 0.75)", fontStyle: "italic" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Astronomical Alert Dashboard
            </motion.p>
          </motion.div>

          {/* Main card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, type: "spring", bounce: 0.3 }}
          >
            <GlassCard depth="near" className="p-6 sm:p-8 lg:p-10 mb-6">
              {/* Decorative orbit ring */}
              <motion.div
                className="absolute top-6 right-6 pointer-events-none opacity-20"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              >
                <svg width="100" height="100" viewBox="0 0 100 100">
                  <ellipse cx="50" cy="50" rx="45" ry="20"
                    stroke="rgba(167, 139, 250, 0.8)" strokeWidth="1" fill="none"
                    strokeDasharray="4 4" />
                  <circle cx="95" cy="50" r="4" fill="rgba(196, 181, 253, 0.9)" />
                </svg>
              </motion.div>

              {/* Description */}
              <motion.p
                className="text-sm sm:text-base leading-relaxed mb-6"
                style={{ color: "rgba(220, 210, 255, 0.85)", maxWidth: "700px" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Full-stack astronomical data pipeline processing real transient discoveries from
                international observatories. Ingests data from IAU Transient Name Server, enriches
                with ALeRCE ML classifications, cross-matches SIMBAD catalog, and searches LIGO
                gravitational wave counterparts.
              </motion.p>

              {/* Key Features */}
              <motion.div
                className="mb-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <h3
                  className="text-xs font-semibold uppercase tracking-widest mb-4"
                  style={{ color: "rgba(167, 139, 250, 0.7)" }}
                >
                  Key Features
                </h3>
                <ul className="space-y-3">
                  {FEATURES.map((feature, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-3 text-sm"
                      style={{ color: "rgba(210, 200, 255, 0.85)" }}
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.7 + i * 0.1 }}
                    >
                      <span
                        className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full"
                        style={{ background: "rgba(167, 139, 250, 0.9)", boxShadow: "0 0 6px rgba(167, 139, 250, 0.6)" }}
                      />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Tech Stack */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                <h3
                  className="text-xs font-semibold uppercase tracking-widest mb-3"
                  style={{ color: "rgba(167, 139, 250, 0.7)" }}
                >
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {TECH_STACK.map((tech, i) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1 + i * 0.06 }}
                    >
                      <GlassChip>
                        <span
                          className="px-3 py-1 text-xs font-medium block"
                          style={{ color: "rgba(196, 181, 253, 0.9)" }}
                        >
                          {tech}
                        </span>
                      </GlassChip>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </GlassCard>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
          >
            <motion.a
              href="https://rubin-scout.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all"
              style={{
                background: "linear-gradient(135deg, rgba(124, 58, 237, 0.6) 0%, rgba(109, 40, 217, 0.4) 100%)",
                border: "1px solid rgba(167, 139, 250, 0.5)",
                color: "rgba(220, 210, 255, 0.95)",
                backdropFilter: "blur(10px)",
              }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(124, 58, 237, 0.4)" }}
              whileTap={{ scale: 0.97 }}
            >
              <ExternalLink size={15} />
              View Live Demo
            </motion.a>

            <motion.a
              href="https://github.com/Namrata-Modha/rubin-scout"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all"
              style={{
                background: "rgba(167, 139, 250, 0.1)",
                border: "1px solid rgba(167, 139, 250, 0.3)",
                color: "rgba(196, 181, 253, 0.9)",
                backdropFilter: "blur(10px)",
              }}
              whileHover={{ scale: 1.05, background: "rgba(167, 139, 250, 0.2)" }}
              whileTap={{ scale: 0.97 }}
            >
              <GitFork size={15} />
              GitHub
            </motion.a>

            <motion.a
              href="https://rubin-scout-api.onrender.com/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all"
              style={{
                background: "rgba(167, 139, 250, 0.1)",
                border: "1px solid rgba(167, 139, 250, 0.3)",
                color: "rgba(196, 181, 253, 0.9)",
                backdropFilter: "blur(10px)",
              }}
              whileHover={{ scale: 1.05, background: "rgba(167, 139, 250, 0.2)" }}
              whileTap={{ scale: 0.97 }}
            >
              <BookOpen size={15} />
              API Docs
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
