"use client";

import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/data";
import CinematicEnvironment from "@/components/visuals/CinematicEnvironment";
import  GlassCard  from "@/components/visuals/GlassCard";

export default function ProjectsScene() {
  return (
    <div className="relative w-full min-h-screen overflow-auto">
      <CinematicEnvironment scene="projects" />

      <div className="relative z-10 py-20 px-8">
        <div className="w-full max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-16 text-center"
          >
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-200 via-pink-200 to-blue-200 bg-clip-text text-transparent">
              Projects
            </h1>
            <p className="text-purple-200/70 text-lg">Building systems that solve real problems</p>
          </motion.div>

          <div className="space-y-12">
            {PROJECTS.map((project, index) => {
              const isMedical = project.theme === "medical";
              const isDashboard = project.theme === "dashboard";

              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.2 + index * 0.2, ease: "easeOut" }}
                >
                  <GlassCard depth="near" className="relative overflow-hidden">
                    {/* Medical theme (MyHealthQR, MediLight) */}
                    {isMedical && (
                      <>
                        {/* Medical cross icon */}
                        <div className="absolute top-8 right-8 w-24 h-24 opacity-10 pointer-events-none">
                          <svg viewBox="0 0 100 100" className="w-full h-full">
                            <rect x="35" y="10" width="30" height="80" fill="rgba(100, 200, 200, 0.6)" rx="5" />
                            <rect x="10" y="35" width="80" height="30" fill="rgba(100, 200, 200, 0.6)" rx="5" />
                          </svg>
                        </div>

                        {/* Floating medical icons */}
                        {[0, 1, 2].map((i) => (
                          <motion.div
                            key={`med-${i}`}
                            className="absolute w-8 h-8"
                            animate={{
                              opacity: [0.15, 0.35, 0.15],
                              y: [0, -25, 0],
                              x: [0, i % 2 === 0 ? 10 : -10, 0],
                            }}
                            transition={{ duration: 5 + i * 1.5, repeat: Infinity, delay: i * 0.7 }}
                            style={{
                              right: `${15 + i * 20}%`,
                              top: `${25 + i * 15}%`,
                            }}
                          >
                            <svg viewBox="0 0 24 24" fill="rgba(100, 200, 200, 0.4)">
                              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                            </svg>
                          </motion.div>
                        ))}

                        {/* QR code pattern (for MyHealthQR specifically) */}
                        {project.title === "MyHealthQR" && (
                          <div className="absolute bottom-8 left-8 w-20 h-20 opacity-10 pointer-events-none">
                            <svg viewBox="0 0 100 100" className="w-full h-full">
                              {Array.from({ length: 5 }).map((_, row) =>
                                Array.from({ length: 5 }).map((_, col) => (
                                  <rect
                                    key={`qr-${row}-${col}`}
                                    x={col * 20 + 2}
                                    y={row * 20 + 2}
                                    width="16"
                                    height="16"
                                    fill={Math.random() > 0.5 ? "rgba(100, 200, 200, 0.6)" : "transparent"}
                                  />
                                ))
                              )}
                            </svg>
                          </div>
                        )}
                      </>
                    )}

                    {/* Dashboard theme (InsightOps) */}
                    {isDashboard && (
                      <>
                        {/* Dashboard grid */}
                        <div className="absolute top-8 right-8 w-32 h-24 opacity-10 pointer-events-none">
                          <svg viewBox="0 0 120 80" className="w-full h-full">
                            <rect x="5" y="5" width="50" height="30" fill="rgba(180, 150, 220, 0.6)" rx="3" />
                            <rect x="65" y="5" width="50" height="30" fill="rgba(180, 150, 220, 0.5)" rx="3" />
                            <rect x="5" y="45" width="110" height="30" fill="rgba(180, 150, 220, 0.4)" rx="3" />
                          </svg>
                        </div>

                        {/* Floating data charts */}
                        {[0, 1].map((i) => (
                          <motion.div
                            key={`chart-${i}`}
                            className="absolute w-16 h-12"
                            animate={{
                              opacity: [0.15, 0.3, 0.15],
                              y: [0, -20, 0],
                            }}
                            transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.8 }}
                            style={{
                              right: `${10 + i * 25}%`,
                              bottom: `${20 + i * 15}%`,
                            }}
                          >
                            <svg viewBox="0 0 50 40" fill="rgba(180, 150, 220, 0.4)">
                              <rect x="5" y="25" width="8" height="15" />
                              <rect x="18" y="15" width="8" height="25" />
                              <rect x="31" y="20" width="8" height="20" />
                            </svg>
                          </motion.div>
                        ))}
                      </>
                    )}

                    <div className="relative p-8 z-10">
                      {/* Project header */}
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 + index * 0.2 }}
                            className="text-3xl font-bold text-purple-100 mb-2"
                          >
                            {project.title}
                          </motion.h2>
                          {project.award && (
                            <motion.div
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.5 + index * 0.2, type: "spring" }}
                              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-300/30"
                            >
                              <span className="text-amber-200 text-2xl">🏆</span>
                              <span className="text-amber-200 text-sm font-medium">{project.award}</span>
                            </motion.div>
                          )}
                        </div>
                        {project.github && (
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ delay: 0.6 + index * 0.2 }}
                            className="p-3 rounded-full bg-purple-500/20 border border-purple-300/20 text-purple-200 hover:bg-purple-500/30 transition-colors"
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                            </svg>
                          </motion.a>
                        )}
                      </div>

                      {/* Description */}
                      <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 + index * 0.2 }}
                        className="text-purple-200/80 mb-6 leading-relaxed"
                      >
                        {project.description}
                      </motion.p>

                      {/* Highlights */}
                      <div className="space-y-3 mb-6">
                        {project.highlights.map((highlight, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.7 + index * 0.2 + i * 0.1 }}
                            className="flex items-start gap-3"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                            <p className="text-purple-200/70 text-sm leading-relaxed">{highlight}</p>
                          </motion.div>
                        ))}
                      </div>

                      {/* Tech stack */}
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map((tech, i) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            transition={{ delay: 0.9 + index * 0.2 + i * 0.05 }}
                            className="px-3 py-1 rounded-full bg-purple-500/20 border border-purple-300/20 text-xs text-purple-200/90 cursor-default"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}