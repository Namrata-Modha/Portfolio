"use client";

import { motion } from "framer-motion";
import GlassCard, { GlassChip } from "@/components/visuals/GlassCard";
import { ExternalLink, GitFork, BookOpen, ArrowLeft } from "lucide-react";

interface MediLightSceneProps {
  onBack: () => void;
}

const TECH_STACK = [
  "React", "Express", "PostgreSQL", "Gemini AI",
  "WebSocket", "Tesseract", "Vercel", "Render",
];

const FEATURES = [
  "Google Gemini AI Vision reads prescriptions with typo/abbreviation handling",
  "PostgreSQL tracks inventory, orders, compliance audit trails",
  "WebSocket broadcasts LED signals to shelf hardware in real-time",
  "Controlled substances trigger age 18+ ID verification",
];

// Stable Rx symbol positions
const RX_SYMBOLS = [
  { x: 5,  y: 8,  size: 28, opacity: 0.12, delay: 0   },
  { x: 85, y: 5,  size: 20, opacity: 0.09, delay: 1.2 },
  { x: 90, y: 70, size: 32, opacity: 0.13, delay: 0.6 },
  { x: 3,  y: 78, size: 22, opacity: 0.10, delay: 1.8 },
  { x: 45, y: 2,  size: 18, opacity: 0.08, delay: 2.1 },
  { x: 70, y: 90, size: 25, opacity: 0.11, delay: 0.9 },
];

// Floating dots
const DOTS = Array.from({ length: 30 }, (_, i) => ({
  id: i,
  x: (i * 137.508) % 100,
  y: (i * 83.1) % 100,
  size: i % 4 === 0 ? 4 : 2.5,
  delay: (i * 0.15) % 5,
  color:
    i % 3 === 0
      ? "rgba(167, 139, 250, 0.35)"
      : i % 3 === 1
      ? "rgba(134, 239, 172, 0.25)"
      : "rgba(124, 58, 237, 0.2)",
}));

export default function MediLightScene({ onBack }: MediLightSceneProps) {
  return (
    <div
      className="relative w-full min-h-screen overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #0d0520 0%, #120a2e 40%, #0a0618 70%, #0d0520 100%)",
      }}
    >
      {/* ── BACKGROUND ELEMENTS ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Rx symbols */}
        {RX_SYMBOLS.map((sym, i) => (
          <motion.div
            key={`rx-${i}`}
            className="absolute font-bold select-none"
            style={{
              left: `${sym.x}%`,
              top: `${sym.y}%`,
              fontSize: `${sym.size}px`,
              color: `rgba(167, 139, 250, ${sym.opacity})`,
              fontFamily: "Georgia, serif",
            }}
            animate={{ opacity: [sym.opacity, sym.opacity * 1.6, sym.opacity] }}
            transition={{ duration: 4 + i, repeat: Infinity, delay: sym.delay }}
          >
            ℞
          </motion.div>
        ))}

        {/* Floating dots */}
        {DOTS.map((dot) => (
          <motion.div
            key={dot.id}
            className="absolute rounded-full"
            style={{
              left: `${dot.x}%`,
              top: `${dot.y}%`,
              width: dot.size,
              height: dot.size,
              background: dot.color,
            }}
            animate={{ y: [0, -20, 0], opacity: [0.4, 0.9, 0.4] }}
            transition={{
              duration: 4 + (dot.id % 3),
              repeat: Infinity,
              delay: dot.delay,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Purple nebula glow */}
        <motion.div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: "420px", height: "320px",
            background:
              "radial-gradient(ellipse, rgba(124, 58, 237, 0.18) 0%, transparent 70%)",
            top: "10%", right: "5%",
            filter: "blur(60px)",
          }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.85, 0.5] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: "350px", height: "350px",
            background:
              "radial-gradient(ellipse, rgba(134, 239, 172, 0.1) 0%, transparent 70%)",
            bottom: "15%", left: "5%",
            filter: "blur(50px)",
          }}
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        />
        <motion.div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: "280px", height: "280px",
            background:
              "radial-gradient(ellipse, rgba(196, 181, 253, 0.1) 0%, transparent 70%)",
            top: "50%", left: "30%",
            filter: "blur(40px)",
          }}
          animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 7, repeat: Infinity, delay: 1.5 }}
        />

        {/* Medicine bottle silhouette */}
        <motion.div
          className="absolute bottom-12 right-10 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.12 }}
          transition={{ duration: 0.3, delay: 0.15 }}
        >
          <svg
            width="80"
            height="120"
            viewBox="0 0 80 120"
            fill="rgba(167, 139, 250, 0.8)"
          >
            <rect x="25" y="0"  width="30" height="15" rx="4" />
            <rect x="15" y="15" width="50" height="85" rx="8" />
            <rect x="22" y="40" width="36" height="3" rx="2" opacity="0.5" />
            <rect x="22" y="50" width="36" height="3" rx="2" opacity="0.5" />
            <rect x="22" y="60" width="36" height="3" rx="2" opacity="0.5" />
          </svg>
        </motion.div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <div className="relative z-10 min-h-screen overflow-y-auto pt-20 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 pb-32">
        <div className="w-full max-w-5xl mx-auto">

          {/* Back button */}
          <motion.button
            onClick={onBack}
            className="flex items-center gap-2 mb-6 px-4 py-2 rounded-full transition-colors"
            style={{
              background: "rgba(124, 58, 237, 0.15)",
              border: "1px solid rgba(167, 139, 250, 0.3)",
              color: "rgba(196, 181, 253, 0.9)",
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
                  background: "rgba(124, 58, 237, 0.2)",
                  border: "1px solid rgba(167, 139, 250, 0.35)",
                  color: "rgba(196, 181, 253, 0.9)",
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.15 }}
              >
                Smart Pharmacy System
              </motion.span>
              <motion.span
                className="text-xs px-3 py-1 rounded-full"
                style={{
                  background: "rgba(134, 239, 172, 0.12)",
                  border: "1px solid rgba(134, 239, 172, 0.3)",
                  color: "rgba(134, 239, 172, 0.9)",
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.15 }}
              >
                ✦ PHI auto-redacted · never leaves device
              </motion.span>
            </div>

            <motion.h1
              className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-3"
              style={{
                background:
                  "linear-gradient(135deg, #c4b5fd 0%, #a78bfa 40%, #86efac 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 0 60px rgba(167, 139, 250, 0.3)",
              }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.15 }}
            >
              MediLight
            </motion.h1>
            <motion.p
              className="text-base sm:text-lg"
              style={{ color: "rgba(196, 181, 253, 0.7)", fontStyle: "italic" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
            >
              AI-powered prescription scanning for pharmacy dispensing
            </motion.p>
          </motion.div>

          {/* Main card */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.15, type: "spring", bounce: 0.3 }}
          >
            <GlassCard depth="near" className="p-6 sm:p-8 lg:p-10 mb-6">
              {/* LED indicator decoration */}
              <div className="absolute top-6 right-6 flex gap-1.5 pointer-events-none">
                {[
                  "rgba(134, 239, 172, 0.9)",
                  "rgba(167, 139, 250, 0.9)",
                  "rgba(124, 58, 237, 0.9)",
                ].map((color, i) => (
                  <motion.div
                    key={i}
                    className="w-2.5 h-2.5 rounded-full"
                    style={{
                      background: color,
                      boxShadow: `0 0 8px ${color}`,
                    }}
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.4 }}
                  />
                ))}
              </div>

              {/* Description */}
              <motion.p
                className="text-sm sm:text-base leading-relaxed mb-6"
                style={{ color: "rgba(220, 210, 255, 0.85)", maxWidth: "700px" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15 }}
              >
                Scans prescription images → Google Gemini AI reads medications
                (including messy handwriting) → matches against live inventory →
                lights up LED shelf hardware showing exactly where to pick. Patient
                data never leaves device (PHI auto-redacted).
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
                  style={{ color: "rgba(167, 139, 250, 0.7)" }}
                >
                  Key Features
                </h3>
                <ul className="space-y-3">
                  {FEATURES.map((feature, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-3 text-sm"
                      style={{ color: "rgba(210, 200, 255, 0.85)" }}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 + i * 0.1 }}
                    >
                      <span
                        className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full"
                        style={{
                          background: "rgba(167, 139, 250, 0.9)",
                          boxShadow: "0 0 6px rgba(167, 139, 250, 0.6)",
                        }}
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
                  style={{ color: "rgba(167, 139, 250, 0.7)" }}
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
                          style={{ color: "rgba(196, 181, 253, 0.9)" }}
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
              href="https://medilight-dashboard.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium"
              style={{
                background:
                  "linear-gradient(135deg, rgba(124, 58, 237, 0.6) 0%, rgba(109, 40, 217, 0.4) 100%)",
                border: "1px solid rgba(167, 139, 250, 0.5)",
                color: "rgba(220, 210, 255, 0.95)",
                backdropFilter: "blur(10px)",
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 20px rgba(124, 58, 237, 0.4)",
              }}
              whileTap={{ scale: 0.97 }}
            >
              <ExternalLink size={15} />
              Dashboard
            </motion.a>

            <motion.a
              href="https://medilight-shelf.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium"
              style={{
                background: "rgba(134, 239, 172, 0.1)",
                border: "1px solid rgba(134, 239, 172, 0.3)",
                color: "rgba(134, 239, 172, 0.9)",
                backdropFilter: "blur(10px)",
              }}
              whileHover={{ scale: 1.05, background: "rgba(134, 239, 172, 0.2)" }}
              whileTap={{ scale: 0.97 }}
            >
              <ExternalLink size={15} />
              Shelf Device
            </motion.a>

            <motion.a
              href="https://medilight-backend.onrender.com/api/docs/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium"
              style={{
                background: "rgba(167, 139, 250, 0.1)",
                border: "1px solid rgba(167, 139, 250, 0.3)",
                color: "rgba(196, 181, 253, 0.9)",
                backdropFilter: "blur(10px)",
              }}
              whileHover={{ scale: 1.05, background: "rgba(167, 139, 250, 0.2)" }}
              whileTap={{ scale: 0.97 }}
            >
              <BookOpen size={15} />
              API Docs
            </motion.a>

            <motion.a
              href="https://github.com/Namrata-Modha/medilight-guide"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium"
              style={{
                background: "rgba(167, 139, 250, 0.1)",
                border: "1px solid rgba(167, 139, 250, 0.3)",
                color: "rgba(196, 181, 253, 0.9)",
                backdropFilter: "blur(10px)",
              }}
              whileHover={{ scale: 1.05, background: "rgba(167, 139, 250, 0.2)" }}
              whileTap={{ scale: 0.97 }}
            >
              <GitFork size={15} />
              GitHub Guide
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
