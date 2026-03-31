"use client";

import { motion } from "framer-motion";
import { PERSONAL } from "@/lib/data";
import CinematicEnvironment from "@/components/visuals/CinematicEnvironment";
import  GlassCard  from "@/components/visuals/GlassCard";

export default function ContactScene() {
  const contactMethods = [
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      ),
      label: "Email",
      value: PERSONAL.email,
      href: `mailto:${PERSONAL.email}`,
      color: "from-purple-400 to-pink-400",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
      label: "LinkedIn",
      value: "namrata-modha",
      href: PERSONAL.linkedin,
      color: "from-blue-400 to-cyan-400",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
        </svg>
      ),
      label: "GitHub",
      value: "Namrata-Modha",
      href: PERSONAL.github,
      color: "from-gray-400 to-purple-400",
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z" />
        </svg>
      ),
      label: "Resume",
      value: "Download PDF",
      href: "/Namrata_Modha_Resume.pdf",
      color: "from-emerald-400 to-teal-400",
    },
  ];

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <CinematicEnvironment scene="contact" />

      {/* Floating envelope icons */}
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={`env-${i}`}
          className="absolute w-12 h-12 opacity-10 pointer-events-none"
          animate={{
            y: [0, -40, 0],
            x: [0, i % 2 === 0 ? 20 : -20, 0],
            rotate: [0, i % 2 === 0 ? 15 : -15, 0],
          }}
          transition={{ duration: 10 + i * 2, repeat: Infinity, delay: i * 0.8 }}
          style={{
            left: `${10 + i * 22}%`,
            top: `${20 + i * 15}%`,
          }}
        >
          <svg viewBox="0 0 24 24" fill="rgba(200, 180, 240, 0.4)">
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
          </svg>
        </motion.div>
      ))}

      <div className="relative z-10 h-full flex items-center justify-center px-8">
        <div className="w-full max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-16 text-center"
          >
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-200 via-pink-200 to-blue-200 bg-clip-text text-transparent">
              Let's Connect
            </h1>
            <p className="text-purple-200/70 text-lg">
              Open to new opportunities and collaborations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.label}
                href={method.href}
                target={method.label !== "Email" ? "_blank" : undefined}
                rel={method.label !== "Email" ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ scale: 1.05, y: -8 }}
                whileTap={{ scale: 0.98 }}
                transition={{
                  duration: 0.6,
                  delay: 0.2 + index * 0.1,
                  ease: "easeOut",
                }}
              >
                <GlassCard depth="near" className="h-full">
                  <div className="p-6 relative overflow-hidden group">
                    {/* Hover glow effect */}
                    <div
                      className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br ${method.color}`}
                    />

                    {/* Icon with gradient background */}
                    <motion.div
                      className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${method.color} mb-4 relative`}
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="text-white relative z-10">{method.icon}</div>
                      {/* Icon glow */}
                      <div
                        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${method.color} blur-xl opacity-50`}
                      />
                    </motion.div>

                    {/* Label */}
                    <h3 className="text-xl font-semibold text-purple-100 mb-2 relative z-10">
                      {method.label}
                    </h3>

                    {/* Value */}
                    <p className="text-purple-200/70 text-sm relative z-10 break-all">
                      {method.value}
                    </p>

                    {/* Arrow indicator */}
                    <motion.div
                      className="absolute bottom-4 right-4 text-purple-300/40 group-hover:text-purple-300/80"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </motion.div>
                  </div>
                </GlassCard>
              </motion.a>
            ))}
          </div>

          {/* Footer message */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-12 text-center"
          >
            <p className="text-purple-200/60 text-sm">
              Based in {PERSONAL.location} 📍 • Always happy to chat over lattè ☕
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}