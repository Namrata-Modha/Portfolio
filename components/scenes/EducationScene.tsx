"use client";

import { motion } from "framer-motion";
import { EDUCATION } from "@/lib/data";
import CinematicEnvironment from "@/components/visuals/CinematicEnvironment";
import GlassCard from "@/components/visuals/GlassCard";
import NavigationButtons from "@/components/ui/NavigationButtons";

interface EducationSceneProps {
  onBack: () => void;
  onContinue: () => void;
}

export default function EducationScene({ onBack, onContinue }: EducationSceneProps) {
  const { india, canada } = EDUCATION;
  const [bachelor, diploma] = india; // india is an array with [bachelor, diploma]

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <CinematicEnvironment scene="education" />

      <div className="relative z-10 h-full flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-12 sm:py-16 lg:py-20">
        <div className="w-full max-w-7xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: -12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut", delay: 0.1 }}
            className="mb-8 sm:mb-12 lg:mb-20 text-center"
          >
            <motion.h1
              className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-3 sm:mb-6 bg-gradient-to-r from-orange-200 via-pink-200 to-cyan-200 bg-clip-text text-transparent"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Education
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl lg:text-2xl text-purple-200/80 font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
            >
              Built across continents
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {/* CANADA CARD */}
            <motion.div
              initial={{ opacity: 0, x: 12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.3,
                delay: 0.15,
                ease: "easeOut",
              }}
              whileHover={{ 
                scale: 1.02,
              }}
            >
              {/* Gentle floating maple leaves */}
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <motion.div
                  key={`leaf-${i}`}
                  className="absolute w-8 h-8 pointer-events-none opacity-50"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: [0.4, 0.6, 0.4],
                    y: [0, -60, 0],
                    rotate: [0, 180, 0],
                  }}
                  transition={{
                    duration: 6 + i,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: "easeInOut",
                  }}
                  style={{
                    right: `${8 + i * 15}%`,
                    top: `${100 + i * 5}%`,
                  }}
                >
                  <svg viewBox="0 0 24 24" className="w-full h-full">
                    <path
                      d="M12 2L10 8L4 10L8 12L6 18L12 14L18 18L16 12L20 10L14 8L12 2Z"
                      fill="rgba(100, 220, 180, 0.6)"
                      stroke="rgba(80, 200, 160, 0.6)"
                      strokeWidth="0.5"
                    />
                  </svg>
                </motion.div>
              ))}

              <GlassCard depth="near" className="h-full overflow-hidden relative">
                {/* MASSIVE CN Tower */}
                <motion.div
                  className="absolute bottom-8 right-8 h-72 w-32 pointer-events-none"
                  initial={{ opacity: 0, scaleY: 0 }}
                  animate={{ opacity: 0.6, scaleY: 1 }}
                  transition={{ duration: 0.3, delay: 0.15, type: "spring" }}
                  whileHover={{ 
                    opacity: 0.9, 
                    scaleY: 1.2,
                    y: -40,
                  }}
                  style={{ transformOrigin: "bottom" }}
                >
                  <svg viewBox="0 0 40 150" className="w-full h-full drop-shadow-2xl">
                    <defs>
                      <linearGradient id="towerGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="rgba(120, 220, 200, 1)" />
                        <stop offset="50%" stopColor="rgba(100, 200, 180, 0.95)" />
                        <stop offset="100%" stopColor="rgba(80, 180, 160, 0.9)" />
                      </linearGradient>
                      <radialGradient id="canadaGlow">
                        <stop offset="0%" stopColor="rgba(100, 220, 200, 1)" />
                        <stop offset="100%" stopColor="transparent" />
                      </radialGradient>
                      <filter id="canadaGlowFilter">
                        <feGaussianBlur stdDeviation="6" result="coloredBlur"/>
                        <feMerge>
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>

                    <motion.ellipse
                      cx="20"
                      cy="75"
                      rx="35"
                      ry="80"
                      fill="url(#canadaGlow)"
                      initial={{ opacity: 0.4 }}
                      animate={{ opacity: [0.4, 0.8, 0.4] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />

                    {/* Base */}
                    <motion.rect
                      x="10"
                      y="130"
                      width="20"
                      height="20"
                      fill="url(#towerGradient)"
                      filter="url(#canadaGlowFilter)"
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ duration: 0.3, delay: 0.15 }}
                      style={{ transformOrigin: "bottom" }}
                    />

                    {/* Main shaft */}
                    <motion.rect
                      x="16"
                      y="40"
                      width="8"
                      height="90"
                      fill="url(#towerGradient)"
                      filter="url(#canadaGlowFilter)"
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ duration: 0.3, delay: 0.15 }}
                      style={{ transformOrigin: "bottom" }}
                    />

                    {/* Observation deck */}
                    <motion.ellipse
                      cx="20"
                      cy="50"
                      rx="15"
                      ry="8"
                      fill="rgba(100, 220, 200, 0.95)"
                      filter="url(#canadaGlowFilter)"
                      initial={{ opacity: 0, scaleX: 0 }}
                      animate={{ opacity: 1, scaleX: 1 }}
                      transition={{ duration: 0.3, delay: 0.15 }}
                    />

                    {/* Top pod */}
                    <motion.ellipse
                      cx="20"
                      cy="25"
                      rx="12"
                      ry="10"
                      fill="rgba(120, 230, 210, 1)"
                      filter="url(#canadaGlowFilter)"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.15 }}
                    />

                    {/* Antenna */}
                    <motion.line
                      x1="20"
                      y1="15"
                      x2="20"
                      y2="5"
                      stroke="rgba(140, 240, 220, 1)"
                      strokeWidth="2"
                      filter="url(#canadaGlowFilter)"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.3, delay: 0.15 }}
                    />

                    {/* Light beams from observation deck */}
                    {[0, 1, 2].map((i) => (
                      <motion.line
                        key={i}
                        x1="20"
                        y1="50"
                        x2={20 + (i - 1) * 20}
                        y2="100"
                        stroke="rgba(100, 220, 200, 0.4)"
                        strokeWidth="1.5"
                        filter="url(#canadaGlowFilter)"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0.3, 0.7, 0.3] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                      />
                    ))}
                  </svg>
                </motion.div>

                <div className="relative z-10 p-10 h-full flex flex-col">
                  <motion.div
                    className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6"
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 }}
                  >
                    <div className="h-12 sm:h-16 w-2 bg-gradient-to-b from-cyan-400 via-green-400 to-cyan-300 rounded-full" />
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-cyan-100">Canada</h2>
                  </motion.div>

                  <motion.div
                    className="space-y-4 sm:space-y-6 flex-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.15 }}
                  >
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                        {canada.degree}
                      </h3>
                      <p className="text-lg sm:text-xl text-cyan-200/90">{canada.field}</p>
                    </div>

                    <div className="space-y-2">
                      <p className="text-base sm:text-lg text-purple-200/80">{canada.school}</p>
                      <p className="text-base sm:text-lg text-purple-200/70">{canada.location}</p>
                    </div>

                    <div className="flex items-center gap-4 sm:gap-6 pt-3 sm:pt-4">
                      <div>
                        <p className="text-xs sm:text-sm text-purple-300/70 mb-1">GPA</p>
                        <p className="text-xl sm:text-2xl font-bold text-cyan-200">{canada.gpa}</p>
                      </div>
                      <div className="h-10 sm:h-12 w-px bg-purple-300/20" />
                      <div>
                        <p className="text-xs sm:text-sm text-purple-300/70 mb-1">Years</p>
                        <p className="text-lg sm:text-xl text-purple-200/90">{canada.years}</p>
                      </div>
                    </div>

                    {canada.honors && (
                      <motion.div
                        className="inline-block px-3 sm:px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-green-500/20 border border-cyan-400/30"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.15 }}
                      >
                        <p className="text-xs sm:text-sm font-semibold text-cyan-200">
                          {canada.honors}
                        </p>
                      </motion.div>
                    )}

                    {canada.certs && canada.certs.length > 0 && (
                      <motion.div
                        className="space-y-2 sm:space-y-3 pt-4 sm:pt-6"
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 }}
                      >
                        <h4 className="text-lg sm:text-xl font-bold text-cyan-100 mb-2 sm:mb-3">
                          Certifications
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                          {canada.certs.map((cert, idx) => (
                            <motion.div
                              key={cert}
                              className="px-3 py-2 rounded-lg bg-cyan-900/20 border border-cyan-400/20"
                              initial={{ opacity: 0, x: -12 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.15 + idx * 0.1 }}
                              whileHover={{ 
                                scale: 1.05,
                                borderColor: "rgba(100, 220, 200, 0.4)",
                              }}
                            >
                              <p className="text-xs sm:text-sm text-cyan-200/90">{cert}</p>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                </div>
              </GlassCard>
            </motion.div>

            {/* INDIA CARD */}
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.3,
                delay: 0.15,
                ease: "easeOut",
              }}
              whileHover={{ 
                scale: 1.02,
              }}
            >
              {/* Gentle diyas - mobile friendly */}
              {[0, 1, 2, 3, 4].map((i) => (
                <motion.div
                  key={`diya-${i}`}
                  className="absolute w-10 h-10 rounded-full pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: [0.3, 0.5, 0.3],
                    scale: [1, 1.1, 1],
                    y: [0, -30, 0],
                  }}
                  transition={{
                    duration: 4 + i,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeInOut",
                  }}
                  style={{
                    left: `${10 + i * 18}%`,
                    top: `${-10 + i * 8}%`,
                    background: "radial-gradient(circle, rgba(255, 200, 100, 0.6) 0%, transparent 70%)",
                    boxShadow: "0 0 20px rgba(255, 180, 80, 0.4)",
                  }}
                />
              ))}

              <GlassCard depth="near" className="h-full overflow-hidden relative">
                {/* STATUE OF UNITY - Gujarat's pride */}
                <motion.div
                  className="absolute bottom-8 left-1/2 -translate-x-1/2 h-72 w-24 pointer-events-none"
                  initial={{ opacity: 0, y: 12, scale: 0.5 }}
                  animate={{ opacity: 0.6, y: 0, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.15, type: "spring" }}
                  whileHover={{ 
                    opacity: 0.9, 
                    scale: 1.15,
                    y: -30,
                  }}
                >
                  <svg viewBox="0 0 60 200" className="w-full h-full drop-shadow-2xl">
                    <defs>
                      <radialGradient id="statueGlow">
                        <stop offset="0%" stopColor="rgba(255, 180, 120, 1)" />
                        <stop offset="100%" stopColor="transparent" />
                      </radialGradient>
                      <filter id="statueFilter">
                        <feGaussianBlur stdDeviation="8" result="coloredBlur"/>
                        <feMerge>
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>

                    {/* Background glow */}
                    <motion.ellipse
                      cx="30"
                      cy="100"
                      rx="50"
                      ry="100"
                      fill="url(#statueGlow)"
                      initial={{ opacity: 0.3 }}
                      animate={{ opacity: [0.3, 0.5, 0.3] }}
                      transition={{ duration: 6, repeat: Infinity }}
                    />

                    {/* Base pedestal */}
                    <motion.rect
                      x="5"
                      y="170"
                      width="50"
                      height="30"
                      fill="rgba(255, 200, 160, 0.9)"
                      filter="url(#statueFilter)"
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ duration: 0.3, delay: 0.15 }}
                      style={{ transformOrigin: "bottom" }}
                    />

                    {/* Legs */}
                    <motion.rect
                      x="15"
                      y="130"
                      width="12"
                      height="40"
                      fill="rgba(255, 210, 170, 0.95)"
                      filter="url(#statueFilter)"
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ duration: 0.3, delay: 0.15 }}
                      style={{ transformOrigin: "bottom" }}
                    />
                    <motion.rect
                      x="33"
                      y="130"
                      width="12"
                      height="40"
                      fill="rgba(255, 210, 170, 0.95)"
                      filter="url(#statueFilter)"
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ duration: 0.3, delay: 0.15 }}
                      style={{ transformOrigin: "bottom" }}
                    />

                    {/* Traditional dhoti (lower body) */}
                    <motion.path
                      d="M 12 130 L 18 110 L 42 110 L 48 130 Z"
                      fill="rgba(255, 220, 180, 0.95)"
                      filter="url(#statueFilter)"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.15 }}
                    />

                    {/* Torso */}
                    <motion.rect
                      x="18"
                      y="60"
                      width="24"
                      height="50"
                      fill="rgba(255, 220, 180, 0.95)"
                      filter="url(#statueFilter)"
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ duration: 0.3, delay: 0.15 }}
                      style={{ transformOrigin: "bottom" }}
                    />

                    {/* Traditional shawl/drape */}
                    <motion.path
                      d="M 12 80 Q 8 70 10 60 L 18 60 L 18 90 Z"
                      fill="rgba(255, 200, 150, 0.9)"
                      filter="url(#statueFilter)"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.15 }}
                    />
                    <motion.path
                      d="M 48 80 Q 52 70 50 60 L 42 60 L 42 90 Z"
                      fill="rgba(255, 200, 150, 0.9)"
                      filter="url(#statueFilter)"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.15 }}
                    />

                    {/* Arms */}
                    <motion.rect
                      x="8"
                      y="65"
                      width="8"
                      height="35"
                      fill="rgba(255, 210, 170, 0.95)"
                      filter="url(#statueFilter)"
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ duration: 0.3, delay: 0.15 }}
                      style={{ transformOrigin: "top" }}
                    />
                    <motion.rect
                      x="44"
                      y="65"
                      width="8"
                      height="35"
                      fill="rgba(255, 210, 170, 0.95)"
                      filter="url(#statueFilter)"
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ duration: 0.3, delay: 0.15 }}
                      style={{ transformOrigin: "top" }}
                    />

                    {/* Shoulders */}
                    <motion.rect
                      x="12"
                      y="58"
                      width="36"
                      height="8"
                      fill="rgba(255, 220, 180, 0.95)"
                      filter="url(#statueFilter)"
                      rx="2"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.3, delay: 0.15 }}
                    />

                    {/* Head */}
                    <motion.ellipse
                      cx="30"
                      cy="45"
                      rx="12"
                      ry="15"
                      fill="rgba(255, 210, 170, 1)"
                      filter="url(#statueFilter)"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.15 }}
                    />

                    {/* Hair/turban detail */}
                    <motion.ellipse
                      cx="30"
                      cy="35"
                      rx="13"
                      ry="8"
                      fill="rgba(255, 190, 140, 0.95)"
                      filter="url(#statueFilter)"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.15 }}
                    />

                    {/* Staff/stick (Sardar Patel's walking stick) */}
                    <motion.line
                      x1="12"
                      y1="100"
                      x2="8"
                      y2="150"
                      stroke="rgba(200, 160, 120, 0.9)"
                      strokeWidth="3"
                      filter="url(#statueFilter)"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.3, delay: 0.15 }}
                    />
                  </svg>
                </motion.div>

                <div className="relative z-10 p-10 h-full flex flex-col">
                  <motion.div
                    className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6"
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 }}
                  >
                    <div className="h-12 sm:h-16 w-2 bg-gradient-to-b from-orange-400 via-pink-400 to-orange-300 rounded-full" />
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-orange-100">India</h2>
                  </motion.div>

                  <motion.div
                    className="space-y-4 sm:space-y-6 flex-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.15 }}
                  >
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                        {bachelor.degree}
                      </h3>
                      <p className="text-lg sm:text-xl text-orange-200/90">{bachelor.field}</p>
                    </div>

                    <div className="space-y-2">
                      <p className="text-base sm:text-lg text-purple-200/80">{bachelor.school}</p>
                      <p className="text-base sm:text-lg text-purple-200/70">{bachelor.location}</p>
                    </div>

                    <div className="flex items-center gap-4 sm:gap-6 pt-3 sm:pt-4">
                      <div>
                        <p className="text-xs sm:text-sm text-purple-300/70 mb-1">GPA</p>
                        <p className="text-xl sm:text-2xl font-bold text-orange-200">{bachelor.gpa}</p>
                      </div>
                      <div className="h-10 sm:h-12 w-px bg-purple-300/20" />
                      <div>
                        <p className="text-xs sm:text-sm text-purple-300/70 mb-1">Years</p>
                        <p className="text-lg sm:text-xl text-purple-200/90">{bachelor.years}</p>
                      </div>
                    </div>

                    <p className="text-xs sm:text-sm text-purple-300/60 italic pt-2">
                      {bachelor.note}
                    </p>
                  </motion.div>

                  {diploma && (
                    <motion.div
                      className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-purple-300/20"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.15 }}
                    >
                      <div>
                        <h4 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                          {diploma.degree}
                        </h4>
                        <p className="text-lg sm:text-xl text-orange-200/90">{diploma.field}</p>
                      </div>

                      <div className="space-y-2 mt-3 sm:mt-4">
                        <p className="text-base sm:text-lg text-purple-200/80">{diploma.school}</p>
                        <p className="text-base sm:text-lg text-purple-200/70">{diploma.location}</p>
                      </div>

                      <div className="flex items-center gap-4 sm:gap-6 pt-3 sm:pt-4">
                        <div>
                          <p className="text-xs sm:text-sm text-purple-300/70 mb-1">GPA</p>
                          <p className="text-xl sm:text-2xl font-bold text-orange-200">{diploma.gpa}</p>
                        </div>
                        <div className="h-10 sm:h-12 w-px bg-purple-300/20" />
                        <div>
                          <p className="text-xs sm:text-sm text-purple-300/70 mb-1">Years</p>
                          <p className="text-lg sm:text-xl text-purple-200/90">{diploma.years}</p>
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm text-purple-300/60 italic pt-3 sm:pt-4">
                        {diploma.note}
                      </p>
                    </motion.div>
                  )}
                </div>
              </GlassCard>
            </motion.div>
          </div>
        </div>
      </div>

      <NavigationButtons onBack={onBack} onContinue={onContinue} />
    </div>
  );
}