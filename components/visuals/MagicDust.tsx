"use client";

import { useMemo } from "react";

interface MagicDustProps {
  count?: number;
  palette?: "purple" | "indiaWarm" | "cool";
}

export default function MagicDust({ count = 40, palette = "purple" }: MagicDustProps) {
  const motes = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        duration: Math.random() * 18 + 12,
        delay: Math.random() * 10,
        opacity: Math.random() * 0.45 + 0.12,
        warm:
          palette === "indiaWarm"
            ? Math.random() > 0.4
            : palette === "cool"
              ? Math.random() > 0.85
              : Math.random() > 0.45,
        drift: i % 3,
        glow: Math.random() > 0.6,
      })),
    [count, palette]
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {motes.map((m) => (
        <div
          key={m.id}
          className="absolute"
          style={{
            left: `${m.x}%`,
            top: `${m.y}%`,
            animation: `dustDrift${m.drift} ${m.duration}s ease-in-out ${m.delay}s infinite alternate`,
          }}
        >
          <div
            className="rounded-full"
            style={{
              width: m.size,
              height: m.size,
              background: m.warm
                ? `rgba(250,220,180,${m.opacity})`
                : `rgba(200,175,240,${m.opacity})`,
              boxShadow: m.glow
                ? `0 0 ${m.size * 4}px ${m.warm ? "rgba(250,220,180,0.1)" : "rgba(190,160,235,0.08)"}`
                : "none",
            }}
          />
        </div>
      ))}
    </div>
  );
}
