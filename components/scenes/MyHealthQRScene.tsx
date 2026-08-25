"use client";

import { motion } from "framer-motion";
import GlassCard, { GlassChip } from "@/components/visuals/GlassCard";
import { GitFork, ArrowLeft, Award } from "lucide-react";

interface MyHealthQRSceneProps {
  onBack: () => void;
}

const TECH_STACK = [
  "PHP", "Laravel", "PostgreSQL", "REST APIs",
  "Docker", "PIPEDA", "RBAC",
];

const FEATURES = [
  "Won 1st Place for Technical Excellence among 10+ capstone teams",
  "Served as Technical Lead, architecting the entire backend including authentication, QR-code generation, and role-based access control end to end",
  "Optimized database queries by 40% through strategic indexing and schema design",
  "Implemented rigorous integration testing ensuring zero unauthorized access",
];

// Stable QR cell grid
const QR_CELLS: Array<{ row: number; col: number; filled: boolean }> = [];
const QR_PATTERN = [
  [1,1,1,1,1,1,1, 0, 1,1,0,1,0, 0, 1,1,1,1,1,1,1],
  [1,0,0,0,0,0,1, 0, 0,1,1,0,1, 0, 1,0,0,0,0,0,1],
  [1,0,1,1,1,0,1, 0, 1,0,1,1,0, 0, 1,0,1,1,1,0,1],
  [1,0,1,1,1,0,1, 0, 0,1,0,1,1, 0, 1,0,1,1,1,0,1],
  [1,0,0,0,0,0,1, 0, 1,1,0,0,1, 0, 1,0,0,0,0,0,1],
  [1,1,1,1,1,1,1, 0, 1,0,1,0,1, 0, 1,1,1,1,1,1,1],
];
QR_PATTERN.forEach((row, r) =>
  row.forEach((cell, c) => QR_CELLS.push({ row: r, col: c, filled: cell === 1 }))
);

// Cross decoration positions
const CROSS_POSITIONS = [
  { x: 5, y: 15, size: 20, opacity: 0.06 },
  { x: 88, y: 10, size: 16, opacity: 0.05 },
  { x: 92, y: 75, size: 22, opacity: 0.07 },
  { x: 3, y: 82, size: 18, opacity: 0.05 },
];

export default function MyHealthQRScene({ onBack }: MyHealthQRSceneProps) {
  return (
    <div
      className="relative w-full min-h-screen overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #0a1628 0%, #0d1f3c 40%, #091525 70%, #0a1628 100%)",
      }}
    >
      {/* ── BACKGROUND ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Medical cross decorations */}
        {CROSS_POSITIONS.map((pos, i) => (
          <motion.div
            key={`cross-${i}`}
            className="absolute"
            style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
            animate={{ opacity: [pos.opacity, pos.opacity * 1.5, pos.opacity] }}
            transition={{ duration: 5 + i, repeat: Infinity }}
          >
            <svg width={pos.size} height={pos.size} viewBox="0 0 24 24">
              <rect x="9" y="2" width="6" height="20" rx="2" fill="rgba(100, 220, 220, 0.9)" />
              <rect x="2" y="9" width="20" height="6" rx="2" fill="rgba(100, 220, 220, 0.9)" />
            </svg>
          </motion.div>
        ))}

        {/* Cyan glow */}
        <motion.div
          className="absolute rounded-full"
          style={{
            width: "450px", height: "300px",
            background: "radial-gradient(ellipse, rgba(100, 220, 220, 0.1) 0%, transparent 70%)",
            top: "15%", right: "5%",
            filter: "blur(50px)",
          }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 9, repeat: Infinity }}
        />
        <motion.div
          className="absolute rounded-full"
          style={{
            width: "350px", height: "350px",
            background: "radial-gradient(ellipse, rgba(124, 58, 237, 0.08) 0%, transparent 70%)",
            bottom: "10%", left: "5%",
            filter: "blur(40px)",
          }}
          animate={{ scale: [1.1, 1, 1.1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 11, repeat: Infinity, delay: 3 }}
        />

        {/* QR code silhouette bottom-left */}
        <motion.div
          className="absolute bottom-10 left-8 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.15 }}
        >
          <svg width="90" height="55" viewBox={`0 0 ${21 * 4} ${6 * 4}`}>
            {QR_CELLS.filter(c => c.filled).map((cell, i) => (
              <motion.rect
                key={i}
                x={cell.col * 4} y={cell.row * 4}
                width="3.5" height="3.5"
                fill="rgba(100, 220, 220, 0.15)"
                rx="0.5"
                animate={{ opacity: [0.1, 0.25, 0.1] }}
                transition={{ duration: 3, repeat: Infinity, delay: (cell.row + cell.col) * 0.05 }}
              />
            ))}
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
              background: "rgba(100, 220, 220, 0.1)",
              border: "1px solid rgba(100, 220, 220, 0.25)",
              color: "rgba(150, 240, 240, 0.9)",
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
                  background: "rgba(100, 220, 220, 0.12)",
                  border: "1px solid rgba(100, 220, 220, 0.3)",
                  color: "rgba(150, 240, 240, 0.9)",
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.15 }}
              >
                Dec 2024 – Apr 2025
              </motion.span>

              <motion.span
                className="flex items-center gap-1.5 text-xs px-3 py-1 rounded-full"
                style={{
                  background: "rgba(251, 191, 36, 0.15)",
                  border: "1px solid rgba(251, 191, 36, 0.35)",
                  color: "rgba(251, 191, 36, 0.95)",
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.15 }}
              >
                <Award size={12} />
                First Place Capstone Award
              </motion.span>
            </div>

            <motion.h1
              className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-3"
              style={{
                background: "linear-gradient(135deg, #67e8f9 0%, #22d3ee 40%, #a78bfa 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.15 }}
            >
              MyHealthQR
            </motion.h1>
            <motion.p
              className="text-base sm:text-lg"
              style={{ color: "rgba(103, 232, 249, 0.65)", fontStyle: "italic" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
            >
              PIPEDA-compliant healthcare platform with role-based access control
            </motion.p>
          </motion.div>

          {/* Main card */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.15, type: "spring", bounce: 0.3 }}
          >
            <GlassCard depth="near" className="p-6 sm:p-8 lg:p-10 mb-6">
              {/* Award badge decoration */}
              <motion.div
                className="absolute top-6 right-6 pointer-events-none"
                initial={{ opacity: 0, rotate: -20, scale: 0 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.15, type: "spring" }}
              >
                <div
                  className="flex flex-col items-center justify-center w-16 h-16 rounded-full text-center"
                  style={{
                    background: "radial-gradient(circle, rgba(251, 191, 36, 0.2) 0%, rgba(251, 191, 36, 0.05) 100%)",
                    border: "1px solid rgba(251, 191, 36, 0.4)",
                  }}
                >
                  <span style={{ fontSize: "22px" }}>🏆</span>
                </div>
              </motion.div>

              {/* Description */}
              <motion.p
                className="text-sm sm:text-base leading-relaxed mb-6"
                style={{ color: "rgba(200, 230, 240, 0.85)", maxWidth: "700px" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15 }}
              >
                PIPEDA-compliant healthcare platform with role-based access control and API gateway
                strategy. Built to give patients control of their health data via QR code — secure,
                portable, and standards-compliant.
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
                  style={{ color: "rgba(103, 232, 249, 0.6)" }}
                >
                  Key Features
                </h3>
                <ul className="space-y-3">
                  {FEATURES.map((feature, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-3 text-sm"
                      style={{ color: "rgba(200, 230, 240, 0.85)" }}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 + i * 0.1 }}
                    >
                      <span
                        className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full"
                        style={{ background: "rgba(103, 232, 249, 0.9)", boxShadow: "0 0 6px rgba(103, 232, 249, 0.5)" }}
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
                  style={{ color: "rgba(103, 232, 249, 0.6)" }}
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
                          style={{ color: "rgba(150, 240, 240, 0.9)" }}
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
              href="https://github.com/Namrata-Modha/MyHealthQR"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium"
              style={{
                background: "linear-gradient(135deg, rgba(34, 211, 238, 0.4) 0%, rgba(103, 232, 249, 0.2) 100%)",
                border: "1px solid rgba(103, 232, 249, 0.4)",
                color: "rgba(150, 240, 240, 0.95)",
                backdropFilter: "blur(10px)",
              }}
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(103, 232, 249, 0.3)" }}
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
