"use client";

import { motion } from "framer-motion";
import { PERSONAL } from "@/lib/data";
import CinematicEnvironment from "@/components/visuals/CinematicEnvironment";
import GlassCard from "@/components/visuals/GlassCard";

interface ContactSceneProps {
  onBack: () => void;
  onContinue?: () => void;
}

export default function ContactScene({ onBack, onContinue }: ContactSceneProps) {
  const contactMethods = [
    {
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      ),
      label: "Email",
      value: PERSONAL.email,
      href: `mailto:${PERSONAL.email}`,
      color: "from-purple-400 via-pink-400 to-purple-400",
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
      label: "LinkedIn",
      value: "namrata-modha",
      href: PERSONAL.linkedin,
      color: "from-blue-400 via-cyan-400 to-blue-400",
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
        </svg>
      ),
      label: "GitHub",
      value: "Namrata-Modha",
      href: PERSONAL.github,
      color: "from-gray-400 via-purple-400 to-gray-400",
    },
    {
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z" />
        </svg>
      ),
      label: "Resume",
      value: "Download PDF",
      href: "/Namrata_Modha_Resume.pdf",
      color: "from-emerald-400 via-teal-400 to-emerald-400",
    },
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <CinematicEnvironment scene="contact" />

      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ scale: 0, opacity: 1 }}
        animate={{ scale: 5, opacity: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
        style={{
          background: "radial-gradient(circle, rgba(200, 255, 100, 0.7) 0%, transparent 70%)",
        }}
      />

      {/* MASSIVE floating envelopes */}
      {[0, 1, 2, 3, 4].map((i) => (
        <motion.div
          key={`env-${i}`}
          className="absolute w-24 h-24 opacity-20 pointer-events-none"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.2, 0.4, 0.2],
            scale: [1, 1.5, 1],
            y: [0, -80, 0],
            x: [0, i % 2 === 0 ? 50 : -50, 0],
            rotate: [0, i % 2 === 0 ? 30 : -30, 0],
          }}
          transition={{
            duration: 12 + i * 2,
            repeat: Infinity,
            delay: i * 0.5,
          }}
          style={{
            left: `${8 + i * 20}%`,
            top: `${15 + i * 12}%`,
            filter: "drop-shadow(0 0 30px rgba(200, 180, 240, 0.6))",
          }}
        >
          <svg viewBox="0 0 24 24" fill="rgba(200, 180, 240, 0.7)">
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
          </svg>
        </motion.div>
      ))}

      <div className="relative z-10 h-full flex items-center justify-center px-8 pt-20">
        <div className="w-full max-w-5xl">
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
              Let's Connect
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-purple-200/80 text-xl"
            >
              Open to new opportunities and collaborations
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.label}
                href={method.href}
                target={method.label !== "Email" ? "_blank" : undefined}
                rel={method.label !== "Email" ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 100, scale: 0.5, rotateX: 90 }}
                animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }}
                whileHover={{ 
                  scale: 1.15, 
                  y: -25,
                  rotateY: 10,
                }}
                whileTap={{ scale: 0.95 }}
                transition={{
                  duration: 0.8,
                  delay: 0.4 + index * 0.2,
                  type: "spring",
                  bounce: 0.5,
                }}
                style={{
                  perspective: "1500px",
                  transformStyle: "preserve-3d",
                }}
              >
                <GlassCard depth="near" className="h-full">
                  <div className="p-10 relative overflow-hidden group">
                    {/* EXPLOSIVE hover glow */}
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${method.color}`}
                      initial={{ opacity: 0, scale: 0 }}
                      whileHover={{ opacity: 0.4, scale: 1.5 }}
                      transition={{ duration: 0.6 }}
                    />

                    {/* MASSIVE icon with dramatic glow */}
                    <motion.div
                      className={`inline-flex p-6 rounded-3xl bg-gradient-to-br ${method.color} mb-6 relative`}
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      whileHover={{ 
                        rotate: [0, -15, 15, -15, 0],
                        scale: 1.3,
                      }}
                      transition={{ 
                        duration: 0.8,
                        delay: 0.6 + index * 0.2,
                        type: "spring",
                      }}
                    >
                      <div className="text-white relative z-10">{method.icon}</div>
                      <motion.div
                        className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${method.color}`}
                        style={{ filter: "blur(25px)" }}
                        animate={{
                          opacity: [0.6, 1, 0.6],
                          scale: [1, 1.5, 1],
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </motion.div>

                    {/* Label with dramatic entrance */}
                    <motion.h3
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.8 + index * 0.2 }}
                      className="text-3xl font-bold text-purple-100 mb-3 relative z-10"
                    >
                      {method.label}
                    </motion.h3>

                    {/* Value */}
                    <motion.p
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1 + index * 0.2 }}
                      className="text-purple-200/80 text-lg relative z-10 break-all"
                    >
                      {method.value}
                    </motion.p>

                    {/* ANIMATED arrow */}
                    <motion.div
                      className="absolute bottom-6 right-6 text-purple-300/60 group-hover:text-purple-200"
                      animate={{ 
                        x: [0, 10, 0],
                        opacity: [0.6, 1, 0.6],
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <motion.svg
                        className="w-8 h-8"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        whileHover={{ scale: 1.5, rotate: 45 }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </motion.svg>
                    </motion.div>

                    {/* Particle burst on hover */}
                    <div className="absolute inset-0 pointer-events-none">
                      {[...Array(8)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="absolute w-2 h-2 rounded-full bg-purple-300"
                          style={{
                            left: "50%",
                            top: "50%",
                          }}
                          initial={{ opacity: 0, scale: 0 }}
                          whileHover={{
                            opacity: [0, 1, 0],
                            scale: [0, 1, 0],
                            x: Math.cos(i * 45 * Math.PI / 180) * 100,
                            y: Math.sin(i * 45 * Math.PI / 180) * 100,
                          }}
                          transition={{ duration: 0.8, delay: i * 0.05 }}
                        />
                      ))}
                    </div>
                  </div>
                </GlassCard>
              </motion.a>
            ))}
          </div>

          {/* Footer with dramatic entrance */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="mt-16 text-center"
          >
            <motion.p
              className="text-purple-200/70 text-xl"
              animate={{
                opacity: [0.7, 1, 0.7],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Based in {PERSONAL.location} 📍 • Always happy to chat over lattè ☕
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}