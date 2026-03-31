"use client";

import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  depth?: "near" | "mid" | "far";
  variant?: "default" | "elevated" | "subtle";
}

export default function GlassCard({
  children,
  className = "",
  depth = "mid",
  variant = "default",
}: GlassCardProps) {
  const depthStyles = {
    near: {
      blur: "blur(20px)",
      shadow: "0 20px 60px rgba(0, 0, 0, 0.3), 0 8px 20px rgba(150, 80, 220, 0.2)",
      border: "rgba(200, 170, 240, 0.25)",
      bg: "rgba(25, 15, 50, 0.6)",
    },
    mid: {
      blur: "blur(16px)",
      shadow: "0 12px 40px rgba(0, 0, 0, 0.2), 0 4px 12px rgba(150, 80, 220, 0.15)",
      border: "rgba(180, 150, 230, 0.2)",
      bg: "rgba(20, 12, 45, 0.5)",
    },
    far: {
      blur: "blur(12px)",
      shadow: "0 8px 30px rgba(0, 0, 0, 0.15), 0 2px 8px rgba(150, 80, 220, 0.1)",
      border: "rgba(160, 130, 220, 0.15)",
      bg: "rgba(18, 10, 40, 0.4)",
    },
  };

  const variantStyles = {
    default: {
      bgOverlay: "linear-gradient(135deg, rgba(200, 170, 240, 0.1) 0%, rgba(150, 100, 220, 0.05) 100%)",
    },
    elevated: {
      bgOverlay: "linear-gradient(135deg, rgba(220, 190, 250, 0.15) 0%, rgba(170, 120, 240, 0.08) 100%)",
    },
    subtle: {
      bgOverlay: "linear-gradient(135deg, rgba(180, 150, 230, 0.08) 0%, rgba(140, 90, 210, 0.04) 100%)",
    },
  };

  const style = depthStyles[depth];
  const varStyle = variantStyles[variant];

  return (
    <div
      className={`relative ${className}`}
      style={{
        background: style.bg,
        backdropFilter: style.blur,
        WebkitBackdropFilter: style.blur,
        border: `1px solid ${style.border}`,
        boxShadow: style.shadow,
        borderRadius: "1.5rem",
        overflow: "hidden",
      }}
    >
      {/* Gradient overlay for depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: varStyle.bgOverlay,
          mixBlendMode: "screen",
        }}
      />

      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' /%3E%3C/svg%3E")`,
          backgroundSize: "100px 100px",
        }}
      />

      {/* Light refraction edge */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom right, rgba(255, 255, 255, 0.1) 0%, transparent 50%)",
          borderRadius: "1.5rem",
        }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

// Variation for smaller chip-style glass elements
export function GlassChip({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`relative ${className}`}
      style={{
        background: "rgba(150, 80, 220, 0.08)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        border: "1px solid rgba(180, 140, 230, 0.15)",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1), 0 1px 4px rgba(150, 80, 220, 0.1)",
        borderRadius: "9999px",
        overflow: "hidden",
      }}
    >
      {/* Subtle shimmer */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, transparent 50%)",
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}