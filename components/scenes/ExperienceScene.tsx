"use client";

import { motion } from "framer-motion";
import { EXPERIENCE } from "@/lib/data";
import CinematicEnvironment from "@/components/visuals/CinematicEnvironment";
import GlassCard from "@/components/visuals/GlassCard";

export default function ExperienceScene() {
  return (
    <div className="relative w-full min-h-screen overflow-auto">
      <CinematicEnvironment scene="experience" />

      <div className="relative z-10 py-20 px-8">
        <div className="w-full max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-16 text-center"
          >
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-200 via-pink-200 to-blue-200 bg-clip-text text-transparent">
              Experience
            </h1>
            <p className="text-purple-200/70 text-lg">3+ years bridging strategy and engineering</p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5">
              <div className="absolute inset-0 bg-gradient-to-b from-purple-500/40 via-pink-500/40 to-blue-500/40" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-purple-400/60 via-pink-400/60 to-transparent"
                animate={{ scaleY: [0, 1] }}
                transition={{ duration: 2, ease: "easeOut", delay: 0.5 }}
                style={{ transformOrigin: "top" }}
              />
            </div>

            <div className="space-y-16">
              {EXPERIENCE.map((job, index) => {
                const isLeft = index % 2 === 0;
                const isHotel = job.theme === "hotel";
                const isConstellation = job.theme === "constellation";

                return (
                  <motion.div
                    key={job.company}
                    initial={{ opacity: 0, x: isLeft ? -60 : 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.9, delay: 0.2 + index * 0.3, ease: "easeOut" }}
                    className={`relative ${
                      isLeft ? "md:pr-[calc(50%+2rem)]" : "md:pl-[calc(50%+2rem)]"
                    }`}
                  >
                    <div className="absolute left-0 md:left-1/2 top-8 w-4 h-4 rounded-full bg-purple-400 -translate-x-[7px] md:-translate-x-1/2 z-20">
                      <motion.div
                        className="absolute inset-0 rounded-full bg-purple-300"
                        animate={{ scale: [1, 1.5, 1], opacity: [0.75, 0, 0.75] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </div>

                    <GlassCard depth="mid" className="relative overflow-hidden">
                      {isHotel && (
                        <>
                          <div className="absolute bottom-0 right-0 w-48 h-64 opacity-10 pointer-events-none">
                            <svg viewBox="0 0 100 150" className="w-full h-full">
                              <rect x="10" y="40" width="80" height="110" fill="rgba(200, 180, 220, 0.6)" />
                              {Array.from({ length: 6 }).map((_, row) =>
                                Array.from({ length: 4 }).map((_, col) => (
                                  <rect
                                    key={`${row}-${col}`}
                                    x={20 + col * 15}
                                    y={50 + row * 15}
                                    width="8"
                                    height="10"
                                    fill="rgba(255, 220, 150, 0.4)"
                                  />
                                ))
                              )}
                              <rect x="40" y="130" width="20" height="20" fill="rgba(255, 220, 150, 0.5)" />
                            </svg>
                          </div>
                          {[0, 1, 2].map((i) => (
                            <motion.div
                              key={`ui-${i}`}
                              className="absolute w-16 h-12 rounded border border-purple-300/20 bg-purple-500/10"
                              animate={{
                                opacity: [0.2, 0.4, 0.2],
                                y: [0, -15, 0],
                                x: [0, i % 2 === 0 ? 5 : -5, 0],
                              }}
                              transition={{ duration: 4 + i, repeat: Infinity, delay: i * 0.6 }}
                              style={{ right: `${10 + i * 15}%`, top: `${20 + i * 20}%` }}
                            >
                              <div className="p-2 space-y-1">
                                <div className="h-1 bg-purple-300/30 rounded w-3/4" />
                                <div className="h-1 bg-purple-300/20 rounded w-1/2" />
                              </div>
                            </motion.div>
                          ))}
                        </>
                      )}

                      {isConstellation && (
                        <>
                          <svg className="absolute inset-0 w-full h-full opacity-15 pointer-events-none" viewBox="0 0 200 200">
                            {[[30, 40], [60, 30], [90, 50], [120, 35], [150, 55], [50, 90], [100, 100], [140, 110], [70, 140], [130, 150]].map(([x, y], i) => (
                              <motion.circle
                                key={i}
                                cx={x}
                                cy={y}
                                r="2"
                                fill="rgba(200, 180, 240, 0.8)"
                                animate={{ opacity: [0.3, 0.9, 0.3] }}
                                transition={{ duration: 2 + i * 0.3, repeat: Infinity, delay: i * 0.2 }}
                              />
                            ))}
                            <motion.path
                              d="M 30 40 L 60 30 L 90 50 L 120 35 L 150 55"
                              stroke="rgba(200, 180, 240, 0.4)"
                              strokeWidth="1"
                              fill="none"
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ duration: 3, delay: 0.5 + index * 0.3 }}
                            />
                            <motion.path
                              d="M 50 90 L 100 100 L 140 110"
                              stroke="rgba(200, 180, 240, 0.4)"
                              strokeWidth="1"
                              fill="none"
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ duration: 3, delay: 0.8 + index * 0.3 }}
                            />
                          </svg>
                          {["♈", "♉", "♊"].map((symbol, i) => (
                            <motion.div
                              key={`zodiac-${i}`}
                              className="absolute text-2xl text-purple-300/30"
                              animate={{
                                opacity: [0.2, 0.5, 0.2],
                                y: [0, -20, 0],
                                rotate: [0, 360],
                              }}
                              transition={{ duration: 8 + i * 2, repeat: Infinity, delay: i * 0.8 }}
                              style={{ left: `${15 + i * 25}%`, top: `${15 + i * 20}%` }}
                            >
                              {symbol}
                            </motion.div>
                          ))}
                        </>
                      )}

                      <div className="relative p-8 z-10">
                        <div className={`flex items-center gap-4 mb-6 ${isLeft ? "md:flex-row-reverse" : ""}`}>
                          <motion.div
                            className={`flex-1 h-0.5 bg-gradient-to-${isLeft ? "l" : "r"} from-purple-500/50 to-transparent`}
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 + index * 0.3 }}
                            style={{ transformOrigin: isLeft ? "right" : "left" }}
                          />
                          <h2 className="text-2xl font-bold text-purple-100 whitespace-nowrap">
                            {job.company}
                          </h2>
                        </div>

                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 + index * 0.3 }}
                          className="mb-6"
                        >
                          <h3 className="text-xl font-semibold text-purple-200 mb-2">{job.role}</h3>
                          <div className="flex items-center gap-4 text-sm text-purple-300/70 flex-wrap">
                            <span>{job.location}</span>
                            <span>•</span>
                            <span>{job.period}</span>
                          </div>
                        </motion.div>

                        <div className="space-y-3 mb-6">
                          {job.highlights.map((highlight, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.5, delay: 0.6 + index * 0.3 + i * 0.1 }}
                              className="flex items-start gap-3"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0" />
                              <p className="text-purple-200/80 text-sm leading-relaxed">{highlight}</p>
                            </motion.div>
                          ))}
                        </div>

                        <div className="flex flex-wrap gap-2 mb-6">
                          {job.techUsed.map((tech, i) => (
                            <motion.span
                              key={tech}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              whileHover={{ scale: 1.05, y: -2 }}
                              transition={{ duration: 0.3, delay: 0.8 + index * 0.3 + i * 0.05 }}
                              className="px-3 py-1 rounded-full bg-purple-500/20 border border-purple-300/20 text-xs text-purple-200/90 cursor-default"
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>

                        {job.notableProject && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 1 + index * 0.3 }}
                            className="pt-6 border-t border-purple-300/10"
                          >
                            <div className="flex items-center gap-2 mb-2">
                              <div className="w-1 h-4 rounded-full bg-gradient-to-b from-pink-400 to-purple-400" />
                              <h4 className="text-sm font-semibold text-pink-200">
                                Notable: {job.notableProject.name}
                              </h4>
                            </div>
                            <p className="text-purple-200/70 text-xs">{job.notableProject.desc}</p>
                          </motion.div>
                        )}
                      </div>
                    </GlassCard>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}