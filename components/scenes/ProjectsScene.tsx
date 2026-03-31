"use client";

import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/data";
import CinematicEnvironment from "@/components/visuals/CinematicEnvironment";
import GlassCard from "@/components/visuals/GlassCard";

export default function ProjectsScene() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <CinematicEnvironment scene="projects" />

      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ scale: 0, opacity: 1 }}
        animate={{ scale: 5, opacity: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        style={{
          background: "radial-gradient(circle, rgba(100, 220, 255, 0.7) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 h-screen overflow-y-auto py-20 px-8">
        <div className="w-full max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.3, y: -150 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.34, 1.56, 0.64, 1], delay: 0.2 }}
            className="mb-16 text-center"
          >
            <motion.h1
              className="text-7xl font-bold mb-4 bg-gradient-to-r from-purple-200 via-pink-200 to-blue-200 bg-clip-text text-transparent"
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
              className="text-purple-200/80 text-xl"
            >
              Building systems that solve real problems
            </motion.p>
          </motion.div>

          <div className="space-y-16">
            {PROJECTS.map((project, index) => {
              const isMedical = project.theme === "medical";

              return (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 150, scale: 0.7 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ 
                    duration: 1.2, 
                    delay: 0.4 + index * 0.3,
                    type: "spring",
                    bounce: 0.5
                  }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05, y: -15 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <GlassCard depth="near" className="relative overflow-hidden">
                      {isMedical && (
                        <>
                          {/* MASSIVE medical cross */}
                          <motion.div
                            className="absolute top-8 right-8 w-40 h-40 opacity-40 pointer-events-none"
                            initial={{ opacity: 0, scale: 0, rotate: -180 }}
                            animate={{ opacity: 0.5, scale: 1, rotate: 0 }}
                            transition={{ duration: 1.5, delay: 0.7 + index * 0.3, type: "spring" }}
                            whileHover={{ opacity: 0.7, scale: 1.2, rotate: 10 }}
                          >
                            <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-2xl">
                              <defs>
                                <filter id={`medGlow-${index}`}>
                                  <feGaussianBlur stdDeviation="5" result="coloredBlur"/>
                                  <feMerge>
                                    <feMergeNode in="coloredBlur"/>
                                    <feMergeNode in="SourceGraphic"/>
                                  </feMerge>
                                </filter>
                              </defs>
                              <motion.rect
                                x="38"
                                y="8"
                                width="24"
                                height="84"
                                fill="rgba(100, 230, 230, 0.9)"
                                filter={`url(#medGlow-${index})`}
                                rx="6"
                                animate={{
                                  fill: [
                                    "rgba(100, 230, 230, 0.9)",
                                    "rgba(150, 250, 250, 1)",
                                    "rgba(100, 230, 230, 0.9)",
                                  ]
                                }}
                                transition={{ duration: 2, repeat: Infinity }}
                              />
                              <motion.rect
                                x="8"
                                y="38"
                                width="84"
                                height="24"
                                fill="rgba(100, 230, 230, 0.9)"
                                filter={`url(#medGlow-${index})`}
                                rx="6"
                                animate={{
                                  fill: [
                                    "rgba(100, 230, 230, 0.9)",
                                    "rgba(150, 250, 250, 1)",
                                    "rgba(100, 230, 230, 0.9)",
                                  ]
                                }}
                                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                              />
                            </svg>
                          </motion.div>

                          {/* FLOATING medical icons - MUCH LARGER */}
                          {[0, 1, 2, 3].map((i) => (
                            <motion.div
                              key={`med-${i}`}
                              className="absolute w-16 h-16"
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{
                                opacity: [0.4, 0.8, 0.4],
                                scale: [1, 1.4, 1],
                                y: [0, -50, 0],
                                x: [0, i % 2 === 0 ? 20 : -20, 0],
                                rotate: [0, 180, 360],
                              }}
                              transition={{
                                duration: 6 + i * 1.5,
                                repeat: Infinity,
                                delay: 1 + index * 0.3 + i * 0.4,
                              }}
                              style={{
                                right: `${12 + i * 18}%`,
                                top: `${20 + i * 15}%`,
                                filter: "drop-shadow(0 0 20px rgba(100, 230, 230, 0.8))",
                              }}
                            >
                              <svg viewBox="0 0 24 24" fill="rgba(100, 230, 230, 0.9)">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                              </svg>
                            </motion.div>
                          ))}

                          {/* QR code for MyHealthQR */}
                          {project.title === "MyHealthQR" && (
                            <motion.div
                              className="absolute bottom-8 left-8 w-32 h-32 opacity-30 pointer-events-none"
                              initial={{ opacity: 0, scale: 0, rotate: -90 }}
                              animate={{ opacity: 0.4, scale: 1, rotate: 0 }}
                              transition={{ duration: 1.5, delay: 1.2 + index * 0.3 }}
                              whileHover={{ opacity: 0.6, scale: 1.15 }}
                            >
                              <svg viewBox="0 0 100 100" className="w-full h-full">
                                {Array.from({ length: 6 }).map((_, row) =>
                                  Array.from({ length: 6 }).map((_, col) => (
                                    <motion.rect
                                      key={`qr-${row}-${col}`}
                                      x={col * 16 + 2}
                                      y={row * 16 + 2}
                                      width="14"
                                      height="14"
                                      fill={Math.random() > 0.5 ? "rgba(100, 230, 230, 0.9)" : "transparent"}
                                      initial={{ opacity: 0 }}
                                      animate={{ opacity: [0.6, 1, 0.6] }}
                                      transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        delay: (row + col) * 0.1,
                                      }}
                                    />
                                  ))
                                )}
                              </svg>
                            </motion.div>
                          )}
                        </>
                      )}

                      {!isMedical && (
                        <>
                          {/* Dashboard theme - MASSIVE grid */}
                          <motion.div
                            className="absolute top-8 right-8 w-48 h-36 opacity-40 pointer-events-none"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 0.5, scale: 1 }}
                            transition={{ duration: 1.5, delay: 0.7 + index * 0.3 }}
                            whileHover={{ opacity: 0.7, scale: 1.1 }}
                          >
                            <svg viewBox="0 0 140 90" className="w-full h-full">
                              <defs>
                                <filter id={`dashGlow-${index}`}>
                                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                                  <feMerge>
                                    <feMergeNode in="coloredBlur"/>
                                    <feMergeNode in="SourceGraphic"/>
                                  </feMerge>
                                </filter>
                              </defs>
                              <motion.rect
                                x="5"
                                y="5"
                                width="60"
                                height="35"
                                fill="rgba(200, 170, 240, 0.8)"
                                filter={`url(#dashGlow-${index})`}
                                rx="4"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 0.8, delay: 0.9 + index * 0.3 }}
                              />
                              <motion.rect
                                x="75"
                                y="5"
                                width="60"
                                height="35"
                                fill="rgba(200, 170, 240, 0.7)"
                                filter={`url(#dashGlow-${index})`}
                                rx="4"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 0.8, delay: 1.1 + index * 0.3 }}
                              />
                              <motion.rect
                                x="5"
                                y="50"
                                width="130"
                                height="35"
                                fill="rgba(200, 170, 240, 0.6)"
                                filter={`url(#dashGlow-${index})`}
                                rx="4"
                                initial={{ scaleY: 0 }}
                                animate={{ scaleY: 1 }}
                                transition={{ duration: 0.8, delay: 1.3 + index * 0.3 }}
                              />
                            </svg>
                          </motion.div>

                          {/* Floating charts */}
                          {[0, 1].map((i) => (
                            <motion.div
                              key={`chart-${i}`}
                              className="absolute w-24 h-20"
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{
                                opacity: [0.3, 0.6, 0.3],
                                scale: [1, 1.3, 1],
                                y: [0, -40, 0],
                              }}
                              transition={{
                                duration: 5 + i * 1.5,
                                repeat: Infinity,
                                delay: 1.2 + index * 0.3 + i * 0.5,
                              }}
                              style={{
                                right: `${10 + i * 25}%`,
                                bottom: `${20 + i * 15}%`,
                              }}
                            >
                              <svg viewBox="0 0 60 50" fill="rgba(200, 170, 240, 0.8)">
                                <motion.rect
                                  x="5"
                                  y="30"
                                  width="12"
                                  height="20"
                                  animate={{ height: [20, 30, 20] }}
                                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                                />
                                <motion.rect
                                  x="24"
                                  y="15"
                                  width="12"
                                  height="35"
                                  animate={{ height: [35, 40, 35] }}
                                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 + 0.3 }}
                                />
                                <motion.rect
                                  x="43"
                                  y="20"
                                  width="12"
                                  height="30"
                                  animate={{ height: [30, 38, 30] }}
                                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 + 0.6 }}
                                />
                              </svg>
                            </motion.div>
                          ))}
                        </>
                      )}

                      <div className="relative p-10 z-10">
                        <div className="flex items-start justify-between mb-8">
                          <div className="flex-1">
                            <motion.h2
                              initial={{ opacity: 0, x: -50 }}
                              animate={{ opacity: 1, x: 0 }}
                              whileHover={{ scale: 1.08, x: 10 }}
                              transition={{ delay: 0.6 + index * 0.3 }}
                              className="text-4xl font-bold text-purple-100 mb-4"
                            >
                              {project.title}
                            </motion.h2>
                            {project.award && (
                              <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                transition={{ delay: 0.8 + index * 0.3, type: "spring", stiffness: 400 }}
                                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-amber-500/30 border-2 border-amber-300/50"
                              >
                                <motion.span
                                  className="text-4xl"
                                  animate={{ rotate: [0, 10, -10, 0] }}
                                  transition={{ duration: 2, repeat: Infinity }}
                                >
                                  🏆
                                </motion.span>
                                <span className="text-amber-200 text-lg font-bold">{project.award}</span>
                              </motion.div>
                            )}
                          </div>
                          {project.github && (
                            <motion.a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              initial={{ opacity: 0, scale: 0.5 }}
                              animate={{ opacity: 1, scale: 1 }}
                              whileHover={{ 
                                scale: 1.3, 
                                rotate: 360,
                                boxShadow: "0 0 40px rgba(200, 100, 255, 0.8)"
                              }}
                              transition={{ delay: 1 + index * 0.3 }}
                              className="p-4 rounded-full bg-purple-500/30 border-2 border-purple-300/40 text-purple-200"
                            >
                              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                              </svg>
                            </motion.a>
                          )}
                        </div>

                        <motion.p
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 1.2 + index * 0.3 }}
                          className="text-purple-200/90 text-lg mb-8 leading-relaxed"
                        >
                          {project.description}
                        </motion.p>

                        <div className="space-y-4 mb-8">
                          {project.highlights.map((highlight, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, x: -50 }}
                              animate={{ opacity: 1, x: 0 }}
                              whileHover={{ x: 15, scale: 1.02 }}
                              transition={{ delay: 1.4 + index * 0.3 + i * 0.15 }}
                              className="flex items-start gap-4"
                            >
                              <motion.div
                                className="w-3 h-3 rounded-full bg-purple-400 mt-2"
                                animate={{
                                  boxShadow: [
                                    "0 0 10px rgba(200, 100, 255, 0.8)",
                                    "0 0 25px rgba(200, 100, 255, 1)",
                                    "0 0 10px rgba(200, 100, 255, 0.8)",
                                  ]
                                }}
                                transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                              />
                              <p className="text-purple-200/90 leading-relaxed text-lg">{highlight}</p>
                            </motion.div>
                          ))}
                        </div>

                        <div className="flex flex-wrap gap-3">
                          {project.techStack.map((tech, i) => (
                            <motion.span
                              key={tech}
                              initial={{ opacity: 0, scale: 0.6 }}
                              animate={{ opacity: 1, scale: 1 }}
                              whileHover={{ 
                                scale: 1.25, 
                                y: -10,
                                boxShadow: "0 15px 40px rgba(200, 100, 255, 0.6)"
                              }}
                              transition={{ delay: 1.8 + index * 0.3 + i * 0.08 }}
                              className="px-5 py-2 rounded-full bg-purple-500/30 border-2 border-purple-300/40 text-sm text-purple-100 font-bold cursor-default"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      </div>
                    </GlassCard>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}