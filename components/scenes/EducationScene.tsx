"use client";

import { motion } from "framer-motion";
import { EDUCATION } from "@/lib/data";
import CinematicEnvironment from "@/components/visuals/CinematicEnvironment";
import GlassCard from "@/components/visuals/GlassCard";

export default function EducationScene() {
  const { india, canada } = EDUCATION;
  const [bachelor, diploma] = india; // india is an array with [bachelor, diploma]

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      <CinematicEnvironment scene="education" />

      {/* EXPLOSIVE entrance burst */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ scale: 0, opacity: 1 }}
        animate={{ scale: 4, opacity: 0 }}
        transition={{ duration: 1.5, ease: [0.34, 1.56, 0.64, 1] }}
        style={{
          background: "radial-gradient(circle, rgba(255, 200, 100, 0.8) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 h-full flex items-center justify-center px-8 py-20">
        <div className="w-full max-w-7xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.3, y: -200 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.34, 1.56, 0.64, 1], delay: 0.2 }}
            className="mb-20 text-center"
          >
            <motion.h1
              className="text-8xl font-bold mb-6 bg-gradient-to-r from-orange-200 via-pink-200 to-cyan-200 bg-clip-text text-transparent"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Education
            </motion.h1>
            <motion.p
              className="text-2xl text-purple-200/80 font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Built across continents
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* INDIA CARD */}
            <motion.div
              initial={{ opacity: 0, x: -300, rotateY: -25 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{
                duration: 1.3,
                delay: 0.6,
                ease: [0.34, 1.56, 0.64, 1],
                type: "spring",
                bounce: 0.5,
              }}
              whileHover={{ 
                scale: 1.08, 
                rotateY: 8,
                z: 80,
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* MASSIVE diyas with trails */}
              {[0, 1, 2, 3, 4].map((i) => (
                <motion.div
                  key={`diya-${i}`}
                  className="absolute w-16 h-16 rounded-full pointer-events-none"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: [0.7, 1, 0.7],
                    scale: [1, 1.5, 1],
                    y: [0, -80, -160, -80, 0],
                    x: [0, (i % 2 === 0 ? 40 : -40), 0, (i % 2 === 0 ? -40 : 40), 0],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 7 + i,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                  style={{
                    left: `${10 + i * 18}%`,
                    top: `${-10 + i * 8}%`,
                    background: "radial-gradient(circle, rgba(255, 200, 100, 1) 0%, rgba(255, 150, 50, 0.8) 40%, transparent 100%)",
                    boxShadow: "0 0 60px rgba(255, 180, 80, 1), 0 0 120px rgba(255, 200, 100, 0.6)",
                    filter: "blur(2px)",
                  }}
                >
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{
                      background: "radial-gradient(circle, rgba(255, 200, 100, 0.8) 0%, transparent 70%)",
                      filter: "blur(30px)",
                    }}
                    animate={{
                      scale: [1, 1.8, 1],
                      opacity: [0.4, 0.9, 0.4],
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                  />
                </motion.div>
              ))}

              <GlassCard depth="near" className="h-full overflow-hidden relative">
                {/* STATUE OF UNITY - Gujarat's pride */}
                <motion.div
                  className="absolute bottom-8 left-1/2 -translate-x-1/2 h-72 w-24 pointer-events-none"
                  initial={{ opacity: 0, y: 200, scale: 0.5 }}
                  animate={{ opacity: 0.6, y: 0, scale: 1 }}
                  transition={{ duration: 2, delay: 0.9, type: "spring" }}
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
                      animate={{ opacity: [0.5, 0.9, 0.5] }}
                      transition={{ duration: 4, repeat: Infinity }}
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
                      transition={{ duration: 0.8, delay: 1.2 }}
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
                      transition={{ duration: 1, delay: 1.4 }}
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
                      transition={{ duration: 1, delay: 1.4 }}
                      style={{ transformOrigin: "bottom" }}
                    />

                    {/* Traditional dhoti (lower body) */}
                    <motion.path
                      d="M 12 130 L 18 110 L 42 110 L 48 130 Z"
                      fill="rgba(255, 220, 180, 0.95)"
                      filter="url(#statueFilter)"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.5 }}
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
                      transition={{ duration: 1, delay: 1.6 }}
                      style={{ transformOrigin: "bottom" }}
                    />

                    {/* Traditional shawl/drape */}
                    <motion.path
                      d="M 12 80 Q 8 70 10 60 L 18 60 L 18 90 Z"
                      fill="rgba(255, 200, 150, 0.9)"
                      filter="url(#statueFilter)"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.7 }}
                    />
                    <motion.path
                      d="M 48 80 Q 52 70 50 60 L 42 60 L 42 90 Z"
                      fill="rgba(255, 200, 150, 0.9)"
                      filter="url(#statueFilter)"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.7 }}
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
                      transition={{ duration: 0.8, delay: 1.8 }}
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
                      transition={{ duration: 0.8, delay: 1.8 }}
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
                      transition={{ duration: 0.6, delay: 1.9 }}
                    />

                    {/* Head */}
                    <motion.ellipse
                      cx="30"
                      cy="45"
                      rx="12"
                      ry="15"
                      fill="rgba(255, 210, 170, 1)"
                      filter="url(#statueFilter)"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.6, delay: 2, type: "spring" }}
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
                      transition={{ delay: 2.1 }}
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
                      transition={{ duration: 0.8, delay: 2.2 }}
                    />
                  </svg>
                </motion.div>

                <div className="relative z-10 p-10 h-full flex flex-col">
                  <motion.div
                    className="flex items-center gap-4 mb-6"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <div className="h-16 w-2 bg-gradient-to-b from-orange-400 via-pink-400 to-orange-300 rounded-full" />
                    <h2 className="text-5xl font-bold text-orange-100">India</h2>
                  </motion.div>

                  <motion.div
                    className="space-y-6 flex-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                  >
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">
                        {bachelor.degree}
                      </h3>
                      <p className="text-xl text-orange-200/90">{bachelor.field}</p>
                    </div>

                    <div className="space-y-2">
                      <p className="text-lg text-purple-200/80">{bachelor.school}</p>
                      <p className="text-lg text-purple-200/70">{bachelor.location}</p>
                    </div>

                    <div className="flex items-center gap-6 pt-4">
                      <div>
                        <p className="text-sm text-purple-300/70 mb-1">GPA</p>
                        <p className="text-2xl font-bold text-orange-200">{bachelor.gpa}</p>
                      </div>
                      <div className="h-12 w-px bg-purple-300/20" />
                      <div>
                        <p className="text-sm text-purple-300/70 mb-1">Years</p>
                        <p className="text-xl text-purple-200/90">{bachelor.years}</p>
                      </div>
                    </div>

                    <p className="text-sm text-purple-300/60 italic pt-2">
                      {bachelor.note}
                    </p>
                  </motion.div>

                  {diploma && (
                    <motion.div
                      className="mt-8 pt-6 border-t border-purple-300/20"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.2 }}
                    >
                      <div>
                        <h4 className="text-3xl font-bold text-white mb-2">
                          {diploma.degree}
                        </h4>
                        <p className="text-xl text-orange-200/90">{diploma.field}</p>
                      </div>

                      <div className="space-y-2 mt-4">
                        <p className="text-lg text-purple-200/80">{diploma.school}</p>
                        <p className="text-lg text-purple-200/70">{diploma.location}</p>
                      </div>

                      <div className="flex items-center gap-6 pt-4">
                        <div>
                          <p className="text-sm text-purple-300/70 mb-1">GPA</p>
                          <p className="text-2xl font-bold text-orange-200">{diploma.gpa}</p>
                        </div>
                        <div className="h-12 w-px bg-purple-300/20" />
                        <div>
                          <p className="text-sm text-purple-300/70 mb-1">Years</p>
                          <p className="text-xl text-purple-200/90">{diploma.years}</p>
                        </div>
                      </div>

                      <p className="text-sm text-purple-300/60 italic pt-4">
                        {diploma.note}
                      </p>
                    </motion.div>
                  )}
                </div>
              </GlassCard>
            </motion.div>

            {/* CANADA CARD */}
            <motion.div
              initial={{ opacity: 0, x: 300, rotateY: 25 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{
                duration: 1.3,
                delay: 0.8,
                ease: [0.34, 1.56, 0.64, 1],
                type: "spring",
                bounce: 0.5,
              }}
              whileHover={{ 
                scale: 1.08, 
                rotateY: -8,
                z: 80,
              }}
              style={{ transformStyle: "preserve-3d" }}
            >
              {/* MASSIVE floating maple leaves */}
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <motion.div
                  key={`leaf-${i}`}
                  className="absolute w-12 h-12 pointer-events-none"
                  initial={{ opacity: 0, scale: 0, rotate: 0 }}
                  animate={{
                    opacity: [0.7, 1, 0.7],
                    scale: [1, 1.3, 1],
                    rotate: [0, 360],
                    y: [0, -60, -120, -180, -240],
                    x: [0, (i % 2 === 0 ? -30 : 30), (i % 2 === 0 ? 30 : -30), 0],
                  }}
                  transition={{
                    duration: 9 + i,
                    repeat: Infinity,
                    delay: i * 0.4,
                  }}
                  style={{
                    right: `${8 + i * 15}%`,
                    top: `${100 + i * 5}%`,
                  }}
                >
                  <svg viewBox="0 0 24 24" className="w-full h-full drop-shadow-lg">
                    <path
                      d="M12 2L10 8L4 10L8 12L6 18L12 14L18 18L16 12L20 10L14 8L12 2Z"
                      fill="rgba(100, 220, 180, 0.9)"
                      stroke="rgba(80, 200, 160, 1)"
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
                  transition={{ duration: 2.5, delay: 1.1, type: "spring" }}
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
                      animate={{ opacity: [0.4, 0.8, 0.4], ry: [75, 90, 75] }}
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
                      transition={{ duration: 0.6, delay: 1.4 }}
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
                      transition={{ duration: 1.2, delay: 1.5 }}
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
                      transition={{ duration: 0.6, delay: 1.8 }}
                    />

                    {/* Top pod */}
                    <motion.ellipse
                      cx="20"
                      cy="25"
                      rx="12"
                      ry="10"
                      fill="rgba(120, 230, 210, 1)"
                      filter="url(#canadaGlowFilter)"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 2 }}
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
                      transition={{ duration: 0.6, delay: 2.2 }}
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
                    className="flex items-center gap-4 mb-6"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1 }}
                  >
                    <div className="h-16 w-2 bg-gradient-to-b from-cyan-400 via-green-400 to-cyan-300 rounded-full" />
                    <h2 className="text-5xl font-bold text-cyan-100">Canada</h2>
                  </motion.div>

                  <motion.div
                    className="space-y-6 flex-1"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                  >
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">
                        {canada.degree}
                      </h3>
                      <p className="text-xl text-cyan-200/90">{canada.field}</p>
                    </div>

                    <div className="space-y-2">
                      <p className="text-lg text-purple-200/80">{canada.school}</p>
                      <p className="text-lg text-purple-200/70">{canada.location}</p>
                    </div>

                    <div className="flex items-center gap-6 pt-4">
                      <div>
                        <p className="text-sm text-purple-300/70 mb-1">GPA</p>
                        <p className="text-2xl font-bold text-cyan-200">{canada.gpa}</p>
                      </div>
                      <div className="h-12 w-px bg-purple-300/20" />
                      <div>
                        <p className="text-sm text-purple-300/70 mb-1">Years</p>
                        <p className="text-xl text-purple-200/90">{canada.years}</p>
                      </div>
                    </div>

                    {canada.honors && (
                      <motion.div
                        className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-green-500/20 border border-cyan-400/30"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 1.4 }}
                      >
                        <p className="text-sm font-semibold text-cyan-200">
                          {canada.honors}
                        </p>
                      </motion.div>
                    )}

                    {canada.certs && canada.certs.length > 0 && (
                      <motion.div
                        className="space-y-3 pt-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.6 }}
                      >
                        <h4 className="text-xl font-bold text-cyan-100 mb-3">
                          Certifications
                        </h4>
                        <div className="grid grid-cols-2 gap-3">
                          {canada.certs.map((cert, idx) => (
                            <motion.div
                              key={cert}
                              className="px-3 py-2 rounded-lg bg-cyan-900/20 border border-cyan-400/20"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 1.7 + idx * 0.1 }}
                              whileHover={{ 
                                scale: 1.05,
                                borderColor: "rgba(100, 220, 200, 0.4)",
                              }}
                            >
                              <p className="text-sm text-cyan-200/90">{cert}</p>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
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