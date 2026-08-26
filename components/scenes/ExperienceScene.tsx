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

      <div className="relative z-10 h-screen overflow-y-auto pt-20 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 pb-32">
        <div className="w-full max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
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
              transition={{ delay: 0.15 }}
              className="text-purple-200/80 text-base sm:text-lg lg:text-xl"
            >
              3+ years building full-stack applications
            </motion.p>
          </motion.div>

          <div className="relative">
            {/* ANIMATED timeline spine */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1">
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-purple-500/60 via-pink-500/60 to-blue-500/60"
                initial={{ scaleY: 0 }}
                animate={{ scaleY: 1 }}
                transition={{ duration: 0.3, delay: 0.15, ease: "easeOut" }}
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

                return (
                  <motion.div
                    key={job.company}
                    initial={{ opacity: 0, x: isLeft ? -400 : 400, scale: 0.6 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ 
                      duration: 0.3, 
                      delay: 0.15 + index * 0.4, 
                      type: "spring",
                      bounce: 0.6
                    }}
                    className={`relative ${isLeft ? "md:pr-[calc(50%+3rem)]" : "md:pl-[calc(50%+3rem)]"}`}
                  >
                    {/* Timeline dot */}
                    <motion.div
                      className="absolute left-0 md:left-1/2 top-8 w-6 h-6 rounded-full bg-purple-400 -translate-x-[11px] md:-translate-x-1/2 z-20"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.15 + index * 0.4, type: "spring", stiffness: 400 }}
                    />

                    <motion.div
                      whileHover={{ scale: 1.08, y: -15 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <GlassCard depth="mid" className="relative overflow-hidden">
                        <div className="relative p-8 z-10">
                          <div className={`flex items-center gap-4 mb-6 ${isLeft ? "md:flex-row-reverse" : ""}`}>
                            <motion.div
                              className={`flex-1 h-1 bg-gradient-to-${isLeft ? "l" : "r"} from-purple-500/70 to-transparent`}
                              initial={{ scaleX: 0 }}
                              animate={{ scaleX: 1 }}
                              transition={{ duration: 0.3, delay: 0.15 + index * 0.4 }}
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
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.15 + index * 0.4 }}
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
                                initial={{ opacity: 0, x: -12 }}
                                animate={{ opacity: 1, x: 0 }}
                                whileHover={{ x: 10, scale: 1.02 }}
                                transition={{ delay: 0.15 + index * 0.4 + i * 0.15 }}
                                className="flex items-start gap-2 sm:gap-3"
                              >
                                <div
                                  className="w-2 h-2 rounded-full bg-purple-400 mt-2"
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
                                transition={{ delay: 0.15 + index * 0.4 + i * 0.08 }}
                                className="px-4 py-2 rounded-full bg-purple-500/30 border-2 border-purple-300/30 text-sm text-purple-100 font-semibold cursor-default"
                              >
                                {tech}
                              </motion.span>
                            ))}
                          </div>

                          {job.notableProject && (
                            <motion.div
                              initial={{ opacity: 0, y: 12 }}
                              animate={{ opacity: 1, y: 0 }}
                              whileHover={{ scale: 1.03 }}
                              transition={{ delay: 0.15 + index * 0.4 }}
                              className="pt-6 border-t-2 border-purple-300/20"
                            >
                              <div className="flex items-center gap-3 mb-2">
                                <div
                                  className="w-2 h-6 rounded-full bg-gradient-to-b from-pink-400 to-purple-400"
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