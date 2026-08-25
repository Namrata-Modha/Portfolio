"use client";

import { motion } from "framer-motion";
import GlassCard, { GlassChip } from "@/components/visuals/GlassCard";
import { GitFork, ArrowLeft } from "lucide-react";

interface OrderServiceSceneProps {
  onBack: () => void;
}

const TECH_STACK = [
  "Java 17", "Spring Boot 3.5", "Spring Data JPA",
  "Hibernate", "PostgreSQL", "Maven",
];

const FEATURES = [
  "Full CRUD REST API with layered architecture: Controller → Service → Repository → Entity",
  "PostgreSQL persistence via Spring Data JPA and Hibernate",
  "Global exception handling with a custom not-found exception",
  "Built to develop hands-on Spring Boot 3 and Java 17 depth — not a production system, but a focused, honest learning project",
];

// Grid decoration — simple circuit-board-style dots
const GRID_DOTS = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  x: (i * 7.3) % 100,
  y: (i * 11.7) % 100,
  size: i % 4 === 0 ? 3 : 1.5,
  delay: (i * 0.13) % 3,
}));

export default function OrderServiceScene({ onBack }: OrderServiceSceneProps) {
  return (
    <div
      className="relative w-full min-h-screen overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #0d1a0d 0%, #0f2010 40%, #0a1a0a 70%, #0d1a0d 100%)",
      }}
    >
      {/* ── BACKGROUND ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Grid dots */}
        <svg className="w-full h-full" style={{ position: "absolute", inset: 0 }}>
          {GRID_DOTS.map((dot) => (
            <motion.circle
              key={dot.id}
              cx={`${dot.x}%`}
              cy={`${dot.y}%`}
              r={dot.size}
              fill="rgba(134, 239, 172, 0.18)"
              animate={{ opacity: [0.2, 0.6, 0.2] }}
              transition={{ duration: 3 + (dot.id % 3), repeat: Infinity, delay: dot.delay }}
            />
          ))}
        </svg>

        {/* Green glow */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: "400px", height: "300px",
            background: "radial-gradient(ellipse, rgba(134, 239, 172, 0.1) 0%, transparent 70%)",
            top: "10%", right: "8%",
            filter: "blur(50px)",
          }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 9, repeat: Infinity }}
        />
        <motion.div
          className="absolute rounded-full"
          style={{
            width: "300px", height: "300px",
            background: "radial-gradient(ellipse, rgba(74, 222, 128, 0.07) 0%, transparent 70%)",
            bottom: "15%", left: "5%",
            filter: "blur(40px)",
          }}
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 11, repeat: Infinity, delay: 3 }}
        />
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="relative z-10 min-h-screen overflow-y-auto pt-20 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 pb-32">
        <div className="w-full max-w-5xl mx-auto">

          {/* Back button */}
          <motion.button
            onClick={onBack}
            className="flex items-center gap-2 mb-6 px-4 py-2 rounded-full transition-colors"
            style={{
              background: "rgba(134, 239, 172, 0.1)",
              border: "1px solid rgba(134, 239, 172, 0.25)",
              color: "rgba(167, 243, 208, 0.9)",
              backdropFilter: "blur(10px)",
            }}
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.05, x: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowLeft size={16} />
            <span className="text-sm">Back to Projects</span>
          </motion.button>

          {/* Header */}
          <motion.div
            className="mb-8 sm:mb-10"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <motion.span
                className="text-xs font-mono px-3 py-1 rounded-full"
                style={{
                  background: "rgba(134, 239, 172, 0.12)",
                  border: "1px solid rgba(134, 239, 172, 0.3)",
                  color: "rgba(167, 243, 208, 0.9)",
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.15 }}
              >
                Learning Project
              </motion.span>
              <motion.span
                className="text-xs px-3 py-1 rounded-full"
                style={{
                  background: "rgba(134, 239, 172, 0.1)",
                  border: "1px solid rgba(134, 239, 172, 0.25)",
                  color: "rgba(167, 243, 208, 0.85)",
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.15 }}
              >
                ◈ Strangler Fig Pattern
              </motion.span>
            </div>

            <motion.h1
              className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-3"
              style={{
                background: "linear-gradient(135deg, #86efac 0%, #4ade80 40%, #16a34a 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.15 }}
            >
              Order Service
            </motion.h1>
            <motion.p
              className="text-base sm:text-lg"
              style={{ color: "rgba(134, 239, 172, 0.65)", fontStyle: "italic" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
            >
              Spring Boot microservice for order management
            </motion.p>
          </motion.div>

          {/* Main card */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.15, type: "spring", bounce: 0.3 }}
          >
            <GlassCard depth="near" className="p-6 sm:p-8 lg:p-10 mb-6">
              {/* Description */}
              <motion.p
                className="text-sm sm:text-base leading-relaxed mb-6"
                style={{ color: "rgba(200, 240, 215, 0.85)", maxWidth: "700px" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15 }}
              >
                Spring Boot microservice for order management, built deliberately to develop real
                hands-on Java and Spring depth. Structured as a single extracted service that
                simulates a Strangler Fig migration pattern out of a legacy monolith — full CRUD
                API, layered architecture, PostgreSQL via JPA/Hibernate, and proper exception
                handling throughout.
              </motion.p>

              {/* Key Features */}
              <motion.div
                className="mb-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
              >
                <h3
                  className="text-xs font-semibold uppercase tracking-widest mb-4"
                  style={{ color: "rgba(134, 239, 172, 0.6)" }}
                >
                  What&apos;s Inside
                </h3>
                <ul className="space-y-3">
                  {FEATURES.map((feature, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-3 text-sm"
                      style={{ color: "rgba(200, 240, 215, 0.85)" }}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 + i * 0.1 }}
                    >
                      <span
                        className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full"
                        style={{ background: "rgba(134, 239, 172, 0.9)", boxShadow: "0 0 6px rgba(134, 239, 172, 0.5)" }}
                      />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Tech Stack */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
              >
                <h3
                  className="text-xs font-semibold uppercase tracking-widest mb-3"
                  style={{ color: "rgba(134, 239, 172, 0.6)" }}
                >
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {TECH_STACK.map((tech, i) => (
                    <motion.div
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.15 + i * 0.07 }}
                    >
                      <GlassChip>
                        <span
                          className="px-3 py-1 text-xs font-medium block"
                          style={{ color: "rgba(167, 243, 208, 0.9)" }}
                        >
                          {tech}
                        </span>
                      </GlassChip>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </GlassCard>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            <motion.a
              href="https://github.com/Namrata-Modha/order-service-microservice"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium"
              style={{
                background: "linear-gradient(135deg, rgba(134, 239, 172, 0.35) 0%, rgba(74, 222, 128, 0.2) 100%)",
                border: "1px solid rgba(134, 239, 172, 0.4)",
                color: "rgba(167, 243, 208, 0.95)",
                backdropFilter: "blur(10px)",
              }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(134, 239, 172, 0.3)" }}
              whileTap={{ scale: 0.97 }}
            >
              <GitFork size={15} />
              GitHub
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
