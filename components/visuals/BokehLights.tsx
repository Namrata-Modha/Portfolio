"use client";

import { useMemo } from "react";

interface BokehLightsProps {
  count?: number;
  palette?: "purple" | "indiaWarm" | "cool";
}

export default function BokehLights({ count = 28, palette = "purple" }: BokehLightsProps) {
  const lights = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 50 + 15,
        duration: Math.random() * 16 + 12,
        delay: Math.random() * 10,
        opacity: Math.random() * 0.18 + 0.05,
        hue:
          palette === "indiaWarm"
            ? 275 + Math.random() * 30
            : palette === "cool"
              ? 200 + Math.random() * 40
              : 255 + Math.random() * 35,
        sat:
          palette === "indiaWarm"
            ? 45 + Math.random() * 25
            : 50 + Math.random() * 25,
        drift: i % 4,
        blur: Math.random() * 10 + 5,
      })),
    [count, palette]
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {lights.map((l) => (
        <div
          key={l.id}
          className="absolute rounded-full"
          style={{
            left: `${l.x}%`,
            top: `${l.y}%`,
            width: l.size,
            height: l.size,
            background: `radial-gradient(circle, hsla(${l.hue},${l.sat}%,68%,${l.opacity * 2.8}) 0%, hsla(${l.hue},${l.sat - 10}%,50%,${l.opacity}) 40%, transparent 70%)`,
            filter: `blur(${l.blur}px)`,
            animation: `bokehFloat${l.drift} ${l.duration}s ease-in-out ${l.delay}s infinite alternate`,
          }}
        />
      ))}
    </div>
  );
}
