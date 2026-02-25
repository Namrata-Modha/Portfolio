"use client";

import { useMemo } from "react";

interface FloatingPetalsProps {
  count?: number;
  palette?: "purple" | "indiaWarm" | "cool";
}

export default function FloatingPetals({ count = 22, palette = "purple" }: FloatingPetalsProps) {
  const petals = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        startX: Math.random() * 130 - 15,
        size: Math.random() * 10 + 5,
        duration: Math.random() * 18 + 14,
        delay: Math.random() * 20,
        opacity: Math.random() * 0.35 + 0.12,
        rotation: Math.random() * 360,
        type: Math.random(),
        drift: i % 4,
      })),
    [count, palette]
  );

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {petals.map((p) => {
        const color =
          palette === "indiaWarm"
            ? p.type > 0.5
              ? `rgba(230,180,200,${p.opacity})`
              : `rgba(200,160,230,${p.opacity})`
            : palette === "cool"
              ? p.type > 0.5
                ? `rgba(150,220,210,${p.opacity})`
                : `rgba(170,190,240,${p.opacity})`
              : p.type > 0.65
                ? `rgba(240,180,210,${p.opacity})`
                : p.type > 0.3
                  ? `rgba(210,170,240,${p.opacity})`
                  : `rgba(180,140,230,${p.opacity})`;
        return (
          <div
            key={p.id}
            className="absolute"
            style={{
              left: `${p.startX}%`,
              top: "-6%",
              width: p.size,
              height: p.size * 0.55,
              borderRadius: "50% 50% 50% 0%",
              background: color,
              transform: `rotate(${p.rotation}deg)`,
              animation: `petalFall${p.drift} ${p.duration}s ease-in-out ${p.delay}s infinite`,
              filter: "blur(0.3px)",
            }}
          />
        );
      })}
    </div>
  );
}
