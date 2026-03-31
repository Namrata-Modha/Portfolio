"use client";

import { motion } from "framer-motion";
import { EDUCATION } from "@/lib/data";
import CinematicEnvironment from "@/components/visuals/CinematicEnvironment";
import GlassCard from "@/components/visuals/GlassCard";

export default function EducationScene() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <CinematicEnvironment scene="education" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-8">
        <div className="w-full max-w-7xl">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-16 text-center"
          >
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-200 via-pink-200 to-blue-200 bg-clip-text text-transparent">
              Education
            </h1>
            <p className="text-purple-200/70 text-lg">Built across continents</p>
          </motion.div>

          {/* Side-by-side cards WITH monuments */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* INDIA - Left card with Taj Mahal monument */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
              className="relative"
            >
              {/* Floating diyas (Indian lamps) */}
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={`diya-${i}`}
                  className="absolute w-6 h-6 rounded-full"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: [0.4, 0.8, 0.4],
                    y: [0, -20, 0],
                    x: [0, i % 2 === 0 ? 10 : -10, 0],
                  }}
                  transition={{
                    duration: 4 + i,
                    repeat: Infinity,
                    delay: i * 0.8,
                  }}
                  style={{
                    left: `${20 + i * 25}%`,
                    top: `${10 + i * 15}%`,
                    background: "radial-gradient(circle, rgba(255, 200, 100, 0.8) 0%, rgba(255, 150, 50, 0.4) 70%)",
                    boxShadow: "0 0 20px rgba(255, 180, 80, 0.6)",
                    filter: "blur(2px)",
                  }}
                />
              ))}

              <GlassCard depth="near" className="h-full overflow-hidden">
                {/* Monument silhouette - Taj Mahal */}
                <div className="absolute bottom-0 left-0 right-0 h-48 opacity-15 pointer-events-none">
                  <svg viewBox="0 0 200 100" className="w-full h-full">
                    {/* Central dome */}
                    <ellipse cx="100" cy="40" rx="25" ry="30" fill="rgba(255, 200, 180, 0.6)" />
                    {/* Central dome top */}
                    <path d="M 100 10 L 95 20 L 105 20 Z" fill="rgba(255, 180, 150, 0.7)" />
                    {/* Side domes */}
                    <ellipse cx="60" cy="50" rx="15" ry="20" fill="rgba(255, 200, 180, 0.5)" />
                    <ellipse cx="140" cy="50" rx="15" ry="20" fill="rgba(255, 200, 180, 0.5)" />
                    {/* Minarets */}
                    <rect x="30" y="30" width="8" height="60" fill="rgba(255, 200, 180, 0.5)" />
                    <rect x="162" y="30" width="8" height="60" fill="rgba(255, 200, 180, 0.5)" />
                    <ellipse cx="34" cy="28" rx="6" ry="8" fill="rgba(255, 180, 150, 0.6)" />
                    <ellipse cx="166" cy="28" rx="6" ry="8" fill="rgba(255, 180, 150, 0.6)" />
                    {/* Base */}
                    <rect x="50" y="80" width="100" height="20" fill="rgba(255, 200, 180, 0.4)" />
                  </svg>
                </div>

                <div className="relative p-8 z-10">
                  {/* Region header with warm accent */}
                  <div className="flex items-center gap-3 mb-6">
                    <motion.div
                      className="w-2 h-12 rounded-full bg-gradient-to-b from-rose-400 to-amber-400"
                      animate={{ scaleY: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <h2 className="text-3xl font-bold text-rose-200">India</h2>
                  </div>

                  {/* Bachelor's degree */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="mb-8 pb-8 border-b border-rose-300/20"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-semibold text-rose-100">
                          {EDUCATION.india[0].degree}
                        </h3>
                        <p className="text-rose-200/80">{EDUCATION.india[0].field}</p>
                      </div>
                      <span className="text-sm text-rose-300/60 whitespace-nowrap">
                        {EDUCATION.india[0].years}
                      </span>
                    </div>
                    <p className="text-rose-200/70 text-sm mb-2">{EDUCATION.india[0].school}</p>
                    <p className="text-rose-200/70 text-sm mb-3">{EDUCATION.india[0].location}</p>
                    <div className="flex items-center gap-4 text-sm">
                      <span className="text-rose-200/80">
                        GPA: <span className="font-semibold text-rose-100">{EDUCATION.india[0].gpa}</span>
                      </span>
                    </div>
                    <p className="text-rose-300/60 text-xs mt-2 italic">{EDUCATION.india[0].note}</p>
                  </motion.div>

                  {/* Diploma */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-semibold text-rose-100">
                          {EDUCATION.india[1].degree}
                        </h3>
                        <p className="text-rose-200/80">{EDUCATION.india[1].field}</p>
                      </div>
                      <span className="text-sm text-rose-300/60 whitespace-nowrap">
                        {EDUCATION.india[1].years}
                      </span>
                    </div>
                    <p className="text-rose-200/70 text-sm mb-2">{EDUCATION.india[1].school}</p>
                    <p className="text-rose-200/70 text-sm mb-3">{EDUCATION.india[1].location}</p>
                    <p className="text-rose-300/60 text-xs italic">{EDUCATION.india[1].note}</p>
                  </motion.div>
                </div>
              </GlassCard>
            </motion.div>

            {/* CANADA - Right card with CN Tower */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
              className="relative"
            >
              {/* Floating maple leaves */}
              {[0, 1, 2, 3].map((i) => (
                <motion.div
                  key={`maple-${i}`}
                  className="absolute"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: [0.3, 0.7, 0.3],
                    y: [0, 40, 80],
                    x: [0, i % 2 === 0 ? -15 : 15, 0],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 6 + i,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                  style={{
                    left: `${15 + i * 20}%`,
                    top: `${-10 + i * 5}%`,
                  }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="rgba(200, 100, 100, 0.6)">
                    <path d="M12 2L9 9L2 9L7 13L5 20L12 15L19 20L17 13L22 9L15 9L12 2Z" />
                  </svg>
                </motion.div>
              ))}

              <GlassCard depth="near" className="h-full overflow-hidden">
                {/* Monument silhouette - CN Tower */}
                <div className="absolute bottom-0 right-8 h-56 w-24 opacity-15 pointer-events-none">
                  <svg viewBox="0 0 40 120" className="w-full h-full">
                    {/* Tower body */}
                    <rect x="17" y="40" width="6" height="80" fill="rgba(150, 200, 220, 0.6)" />
                    {/* Observation deck */}
                    <ellipse cx="20" cy="45" rx="12" ry="8" fill="rgba(150, 200, 220, 0.7)" />
                    <rect x="8" y="43" width="24" height="4" fill="rgba(150, 200, 220, 0.8)" />
                    {/* Spire */}
                    <rect x="18" y="10" width="4" height="30" fill="rgba(150, 200, 220, 0.5)" />
                    <path d="M 20 10 L 18 15 L 22 15 Z" fill="rgba(150, 200, 220, 0.7)" />
                    {/* Base */}
                    <rect x="10" y="120" width="20" height="8" fill="rgba(150, 200, 220, 0.5)" />
                  </svg>
                </div>

                <div className="relative p-8 z-10">
                  {/* Region header with cool accent */}
                  <div className="flex items-center gap-3 mb-6">
                    <motion.div
                      className="w-2 h-12 rounded-full bg-gradient-to-b from-emerald-400 to-blue-400"
                      animate={{ scaleY: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    />
                    <h2 className="text-3xl font-bold text-emerald-200">Canada</h2>
                  </div>

                  {/* Postgraduate credential */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                    className="mb-6"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-xl font-semibold text-emerald-100">
                          {EDUCATION.canada.degree}
                        </h3>
                        <p className="text-emerald-200/80">{EDUCATION.canada.field}</p>
                      </div>
                      <span className="text-sm text-emerald-300/60 whitespace-nowrap">
                        {EDUCATION.canada.years}
                      </span>
                    </div>
                    <p className="text-emerald-200/70 text-sm mb-2">{EDUCATION.canada.school}</p>
                    <p className="text-emerald-200/70 text-sm mb-3">{EDUCATION.canada.location}</p>
                    <div className="flex items-center gap-4 text-sm mb-3">
                      <span className="text-emerald-200/80">
                        GPA:{" "}
                        <span className="font-semibold text-emerald-100">{EDUCATION.canada.gpa}</span>
                      </span>
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.9, type: "spring" }}
                        className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-200 text-xs font-medium"
                      >
                        {EDUCATION.canada.honors}
                      </motion.span>
                    </div>
                  </motion.div>

                  {/* Certifications */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.9, duration: 0.6 }}
                  >
                    <h4 className="text-sm font-semibold text-emerald-200/80 mb-3">Certifications</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {EDUCATION.canada.certs.map((cert, i) => (
                        <motion.div
                          key={cert}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          whileHover={{ scale: 1.05, y: -2 }}
                          transition={{ duration: 0.4, delay: 1.1 + i * 0.1 }}
                          className="px-3 py-2 rounded-lg bg-emerald-500/10 border border-emerald-300/20 text-xs text-emerald-200/90 text-center cursor-default"
                        >
                          {cert}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}