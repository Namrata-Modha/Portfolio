"use client";

import { motion } from "framer-motion";
import { EXPERIENCE } from "@/lib/data";
import CinematicEnvironment from "@/components/visuals/CinematicEnvironment";
import GlassCard from "@/components/visuals/GlassCard";
import NavigationButtons from "@/components/ui/NavigationButtons";

interface ExperienceSceneProps {
  onBack: () => void;
  onContinue: () => void;
}

export default function ExperienceScene({ onBack, onContinue }: ExperienceSceneProps) {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <CinematicEnvironment scene="experience" />

      {/* EXPLOSIVE entrance burst */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ scale: 0, opacity: 1 }}
        animate={{ scale: 5, opacity: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        style={{
          background: "radial-gradient(circle, rgba(255, 100, 200, 0.7) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 h-screen overflow-y-auto py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 pb-32">
        <div className="w-full max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.3, y: -150 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.34, 1.56, 0.64, 1], delay: 0.2 }}
            className="mb-8 sm:mb-12 lg:mb-16 text-center"
          >
            <motion.h1
              className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-purple-200 via-pink-200 to-blue-200 bg-clip-text text-transparent"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Experience
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-purple-200/80 text-base sm:text-lg lg:text-xl"
            >
              3+ years bridging strategy and engineering
            </motion.p>
          </motion.div>

          <div className="relative">
            {/* ANIMATED timeline spine */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1">
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-purple-500/60 via-pink-500/60 to-blue-500/60"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 2.5, delay: 0.8, ease: "easeOut" }}
                style={{ transformOrigin: "top" }}
              />
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-purple-400 via-pink-400 to-transparent"
                animate={{ 
                  boxShadow: [
                    "0 0 20px rgba(200, 100, 255, 0.6)",
                    "0 0 40px rgba(255, 100, 200, 0.8)",
                    "0 0 20px rgba(200, 100, 255, 0.6)",
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
            </div>

            <div className="space-y-20">
              {EXPERIENCE.map((job, index) => {
                const isLeft = index % 2 === 0;
                const isHotel = job.theme === "hotel";
                const isConstellation = job.theme === "constellation";

                return (
                  <motion.div
                    key={job.company}
                    initial={{ opacity: 0, x: isLeft ? -400 : 400, scale: 0.6 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ 
                      duration: 1.3, 
                      delay: 0.5 + index * 0.4, 
                      type: "spring",
                      bounce: 0.6
                    }}
                    className={`relative ${isLeft ? "md:pr-[calc(50%+3rem)]" : "md:pl-[calc(50%+3rem)]"}`}
                  >
                    {/* EXPLOSIVE timeline dot */}
                    <motion.div
                      className="absolute left-0 md:left-1/2 top-8 w-6 h-6 rounded-full bg-purple-400 -translate-x-[11px] md:-translate-x-1/2 z-20"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.7 + index * 0.4, type: "spring", stiffness: 400 }}
                    >
                      <motion.div
                        className="absolute inset-0 rounded-full bg-purple-300"
                        animate={{ 
                          scale: [1, 2.5, 1], 
                          opacity: [1, 0, 1],
                          boxShadow: [
                            "0 0 20px rgba(200, 100, 255, 0.8)",
                            "0 0 60px rgba(255, 100, 200, 1)",
                            "0 0 20px rgba(200, 100, 255, 0.8)",
                          ]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.08, y: -15 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <GlassCard depth="mid" className="relative overflow-hidden">
                        {/* HOTEL THEME - MASSIVE building */}
                        {isHotel && (
                          <>
                            <motion.div
                              className="absolute bottom-0 right-0 w-72 h-96 opacity-40 pointer-events-none"
                              initial={{ opacity: 0, y: 100, scale: 0.7 }}
                              animate={{ opacity: 0.5, y: 0, scale: 1 }}
                              transition={{ duration: 1.5, delay: 0.9 + index * 0.4 }}
                              whileHover={{ opacity: 0.7, scale: 1.1 }}
                            >
                              <svg viewBox="0 0 120 180" className="w-full h-full drop-shadow-2xl">
                                <defs>
                                  <filter id="hotelGlow">
                                    <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                                    <feMerge>
                                      <feMergeNode in="coloredBlur"/>
                                      <feMergeNode in="SourceGraphic"/>
                                    </feMerge>
                                  </filter>
                                </defs>

                                <motion.rect
                                  x="15"
                                  y="50"
                                  width="90"
                                  height="130"
                                  fill="rgba(220, 200, 240, 0.8)"
                                  filter="url(#hotelGlow)"
                                  initial={{ scaleY: 0 }}
                                  animate={{ scaleY: 1 }}
                                  transition={{ duration: 1.2, delay: 1.1 + index * 0.4 }}
                                  style={{ transformOrigin: "bottom" }}
                                />

                                {Array.from({ length: 8 }).map((_, row) =>
                                  Array.from({ length: 5 }).map((_, col) => (
                                    <motion.rect
                                      key={`${row}-${col}`}
                                      x={25 + col * 16}
                                      y={60 + row * 14}
                                      width="11"
                                      height="9"
                                      fill="rgba(255, 240, 180, 0.9)"
                                      filter="url(#hotelGlow)"
                                      initial={{ opacity: 0 }}
                                      animate={{ opacity: [0.6, 1, 0.6] }}
                                      transition={{ 
                                        duration: 2 + Math.random(),
                                        repeat: Infinity,
                                        delay: 1.3 + index * 0.4 + (row * 0.1) + (col * 0.05)
                                      }}
                                    />
                                  ))
                                )}

                                <motion.rect
                                  x="50"
                                  y="160"
                                  width="20"
                                  height="20"
                                  fill="rgba(255, 240, 180, 1)"
                                  filter="url(#hotelGlow)"
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  transition={{ delay: 2 + index * 0.4 }}
                                />
                              </svg>
                            </motion.div>

                            {/* ANIMATED UI cards */}
                            {[0, 1, 2, 3].map((i) => (
                              <motion.div
                                key={`ui-${i}`}
                                className="absolute w-24 h-20 rounded-xl border-2 border-purple-300/40 bg-purple-500/20 backdrop-blur-sm"
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{
                                  opacity: [0.4, 0.8, 0.4],
                                  scale: [1, 1.1, 1],
                                  y: [0, -30, 0],
                                  x: [0, i % 2 === 0 ? 10 : -10, 0],
                                }}
                                transition={{
                                  duration: 5 + i,
                                  repeat: Infinity,
                                  delay: 1.5 + index * 0.4 + i * 0.3,
                                }}
                                style={{
                                  right: `${8 + i * 16}%`,
                                  top: `${15 + i * 18}%`,
                                }}
                              >
                                <div className="p-3 space-y-2">
                                  <motion.div 
                                    className="h-2 bg-purple-300/50 rounded w-3/4"
                                    animate={{ opacity: [0.5, 1, 0.5] }}
                                    transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                                  />
                                  <motion.div 
                                    className="h-2 bg-purple-300/40 rounded w-1/2"
                                    animate={{ opacity: [0.5, 1, 0.5] }}
                                    transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 + 0.3 }}
                                  />
                                </div>
                              </motion.div>
                            ))}
                          </>
                        )}

                        {/* CONSTELLATION THEME - DRAMATIC stars */}
                        {isConstellation && (
                          <>
                            <svg className="absolute inset-0 w-full h-full opacity-50 pointer-events-none" viewBox="0 0 200 200">
                              {[[30, 40], [65, 25], [95, 45], [130, 30], [160, 50], [45, 85], [105, 95], [145, 105], [60, 140], [125, 155], [180, 135], [25, 165]].map(([x, y], i) => (
                                <g key={i}>
                                  <motion.circle
                                    cx={x}
                                    cy={y}
                                    r="0"
                                    fill="rgba(220, 200, 255, 1)"
                                    initial={{ r: 0, opacity: 0 }}
                                    animate={{ 
                                      r: [0, 4, 3],
                                      opacity: [0, 1, 0.7, 1],
                                    }}
                                    transition={{ 
                                      duration: 0.8,
                                      delay: 1 + index * 0.4 + i * 0.1
                                    }}
                                  />
                                  <motion.circle
                                    cx={x}
                                    cy={y}
                                    r="8"
                                    fill="none"
                                    stroke="rgba(220, 200, 255, 0.6)"
                                    strokeWidth="1"
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ 
                                      scale: [0, 2, 1.5],
                                      opacity: [0, 0.8, 0],
                                    }}
                                    transition={{ 
                                      duration: 2,
                                      repeat: Infinity,
                                      delay: 1.2 + index * 0.4 + i * 0.15
                                    }}
                                  />
                                </g>
                              ))}

                              <motion.path
                                d="M 30 40 L 65 25 L 95 45 L 130 30 L 160 50"
                                stroke="rgba(220, 200, 255, 0.7)"
                                strokeWidth="2"
                                fill="none"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 1 }}
                                transition={{ duration: 2, delay: 1.5 + index * 0.4 }}
                              />
                              <motion.path
                                d="M 45 85 L 105 95 L 145 105"
                                stroke="rgba(220, 200, 255, 0.7)"
                                strokeWidth="2"
                                fill="none"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 1 }}
                                transition={{ duration: 2, delay: 1.8 + index * 0.4 }}
                              />
                              <motion.path
                                d="M 60 140 L 125 155 L 180 135"
                                stroke="rgba(220, 200, 255, 0.7)"
                                strokeWidth="2"
                                fill="none"
                                initial={{ pathLength: 0, opacity: 0 }}
                                animate={{ pathLength: 1, opacity: 1 }}
                                transition={{ duration: 2, delay: 2.1 + index * 0.4 }}
                              />
                            </svg>

                            {["♈", "♉", "♊", "♋"].map((symbol, i) => (
                              <motion.div
                                key={`zodiac-${i}`}
                                className="absolute text-4xl text-purple-300/60 font-bold"
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{
                                  opacity: [0.4, 0.8, 0.4],
                                  scale: [1, 1.3, 1],
                                  y: [0, -40, 0],
                                  rotate: [0, 360],
                                }}
                                transition={{
                                  duration: 10 + i * 2,
                                  repeat: Infinity,
                                  delay: 1.5 + index * 0.4 + i * 0.4,
                                }}
                                style={{
                                  left: `${10 + i * 22}%`,
                                  top: `${12 + i * 18}%`,
                                  textShadow: "0 0 30px rgba(220, 200, 255, 0.8)",
                                }}
                              >
                                {symbol}
                              </motion.div>
                            ))}
                          </>
                        )}

                        <div className="relative p-8 z-10">
                          <div className={`flex items-center gap-4 mb-6 ${isLeft ? "md:flex-row-reverse" : ""}`}>
                            <motion.div
                              className={`flex-1 h-1 bg-gradient-to-${isLeft ? "l" : "r"} from-purple-500/70 to-transparent`}
                              initial={{ scaleX: 0 }}
                              animate={{ scaleX: 1 }}
                              transition={{ duration: 1, delay: 0.8 + index * 0.4 }}
                              style={{ transformOrigin: isLeft ? "right" : "left" }}
                            />
                            <motion.h2
                              className="text-2xl sm:text-3xl font-bold text-purple-100"
                              whileHover={{ scale: 1.15, x: isLeft ? -10 : 10 }}
                            >
                              {job.company}
                            </motion.h2>
                          </div>

                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 + index * 0.4 }}
                            className="mb-6"
                          >
                            <h3 className="text-xl sm:text-2xl font-semibold text-purple-200 mb-2">{job.role}</h3>
                            <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-purple-300/80 flex-wrap">
                              <span>{job.location}</span>
                              <span>•</span>
                              <span>{job.period}</span>
                            </div>
                          </motion.div>

                          <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                            {job.highlights.map((highlight, i) => (
                              <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -40 }}
                                animate={{ opacity: 1, x: 0 }}
                                whileHover={{ x: 10, scale: 1.02 }}
                                transition={{ delay: 1.2 + index * 0.4 + i * 0.15 }}
                                className="flex items-start gap-2 sm:gap-3"
                              >
                                <motion.div
                                  className="w-2 h-2 rounded-full bg-purple-400 mt-2"
                                  animate={{
                                    boxShadow: [
                                      "0 0 5px rgba(200, 100, 255, 0.6)",
                                      "0 0 15px rgba(200, 100, 255, 1)",
                                      "0 0 5px rgba(200, 100, 255, 0.6)",
                                    ]
                                  }}
                                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                                />
                                <p className="text-purple-200/90 leading-relaxed text-sm sm:text-base">{highlight}</p>
                              </motion.div>
                            ))}
                          </div>

                          <div className="flex flex-wrap gap-3 mb-6">
                            {job.techUsed.map((tech, i) => (
                              <motion.span
                                key={tech}
                                initial={{ opacity: 0, scale: 0.6 }}
                                animate={{ opacity: 1, scale: 1 }}
                                whileHover={{ 
                                  scale: 1.2, 
                                  y: -8,
                                  boxShadow: "0 10px 30px rgba(200, 100, 255, 0.5)"
                                }}
                                transition={{ delay: 1.5 + index * 0.4 + i * 0.08 }}
                                className="px-4 py-2 rounded-full bg-purple-500/30 border-2 border-purple-300/30 text-sm text-purple-100 font-semibold cursor-default"
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>

                          {job.notableProject && (
                            <motion.div
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              whileHover={{ scale: 1.03 }}
                              transition={{ delay: 1.8 + index * 0.4 }}
                              className="pt-6 border-t-2 border-purple-300/20"
                            >
                              <div className="flex items-center gap-3 mb-2">
                                <motion.div
                                  className="w-2 h-6 rounded-full bg-gradient-to-b from-pink-400 to-purple-400"
                                  animate={{
                                    boxShadow: [
                                      "0 0 10px rgba(236, 72, 153, 0.6)",
                                      "0 0 20px rgba(236, 72, 153, 1)",
                                      "0 0 10px rgba(236, 72, 153, 0.6)",
                                    ]
                                  }}
                                  transition={{ duration: 2, repeat: Infinity }}
                                />
                                <h4 className="text-lg font-bold text-pink-200">
                                  Notable: {job.notableProject.name}
                                </h4>
                              </div>
                              <p className="text-purple-200/80 text-sm">{job.notableProject.desc}</p>
                            </motion.div>
                          )}
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

      <NavigationButtons onBack={onBack} onContinue={onContinue} />
    </div>
  );
}