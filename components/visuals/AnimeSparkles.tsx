"use client";

import { useMemo } from "react";

interface AnimeSparklesProps {
  count?: number;
  warm?: boolean;
}

export default function AnimeSparkles({ count = 16, warm = false }: AnimeSparklesProps) {
  const sparkles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 12 + 5,
        duration: Math.random() * 4 + 2.5,
        delay: Math.random() * 8,
        opacity: Math.random() * 0.5 + 0.2,
        isWarm: warm ? Math.random() > 0.3 : Math.random() > 0.5,
      })),
    [count, warm]
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {sparkles.map((s) => (
        <div
          key={s.id}
          className="absolute"
          style={{
            left: `${s.x}%`,
            top: `${s.y}%`,
            width: s.size,
            height: s.size,
            animation: `sparkleFlash ${s.duration}s ease-in-out ${s.delay}s infinite`,
          }}
        >
          <div
            className="absolute"
            style={{
              left: "50%",
              top: 0,
              width: 1,
              height: "100%",
              transform: "translateX(-50%)",
              background: `linear-gradient(to bottom, transparent, ${s.isWarm ? "rgba(255,225,195,0.8)" : "rgba(210,180,255,0.8)"} 50%, transparent)`,
              opacity: s.opacity,
            }}
          />
          <div
            className="absolute"
            style={{
              top: "50%",
              left: 0,
              height: 1,
              width: "100%",
              transform: "translateY(-50%)",
              background: `linear-gradient(to right, transparent, ${s.isWarm ? "rgba(255,225,195,0.8)" : "rgba(210,180,255,0.8)"} 50%, transparent)`,
              opacity: s.opacity,
            }}
          />
          <div
            className="absolute rounded-full"
            style={{
              width: 3,
              height: 3,
              top: "50%",
              left: "50%",
              transform: "translate(-50%,-50%)",
              background: s.isWarm
                ? "rgba(255,240,220,0.9)"
                : "rgba(220,200,255,0.9)",
              boxShadow: `0 0 ${s.size * 0.6}px ${s.isWarm ? "rgba(255,220,180,0.3)" : "rgba(190,160,240,0.3)"}`,
            }}
          />
        </div>
      ))}
    </div>
  );
}
