"use client";

import {
  BokehLights,
  FloatingPetals,
  AnimeSparkles,
  MagicDust,
  LightRays,
  PurpleGlow,
} from "@/components/visuals";

interface SceneBackgroundProps {
  gradient: string;
  palette?: "purple" | "indiaWarm" | "cool";
  hue?: number;
  glows?: Array<{
    size: number;
    x: string;
    y: string;
    intensity: number;
    hue?: number;
  }>;
  bokehCount?: number;
  dustCount?: number;
  petalCount?: number;
  sparkleCount?: number;
  warmSparkles?: boolean;
  children?: React.ReactNode;
}

export default function SceneBackground({
  gradient,
  palette = "purple",
  hue = 270,
  glows = [],
  bokehCount = 22,
  dustCount = 40,
  petalCount = 14,
  sparkleCount = 12,
  warmSparkles = false,
  children,
}: SceneBackgroundProps) {
  return (
    <>
      {/* Base gradient */}
      <div className="absolute inset-0" style={{ background: gradient }} />

      {/* Ambient waves */}
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at 35% 40%, hsla(${hue},60%,40%,0.1) 0%, transparent 50%)`,
          animation: "purpleWave1 20s ease-in-out infinite alternate",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: `radial-gradient(ellipse at 70% 55%, hsla(${hue},55%,35%,0.06) 0%, transparent 45%)`,
          animation: "purpleWave2 26s ease-in-out 4s infinite alternate",
        }}
      />

      {/* Bottom glow */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: "30%",
          background: `linear-gradient(to top, hsla(${hue},55%,40%,0.06) 0%, transparent 100%)`,
        }}
      />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 50%, transparent 40%, rgba(6,3,20,0.4) 100%)",
        }}
      />

      {/* Particle systems */}
      <LightRays hue={hue} />
      <BokehLights count={bokehCount} palette={palette} />
      <MagicDust count={dustCount} palette={palette} />
      <FloatingPetals count={petalCount} palette={palette} />
      <AnimeSparkles count={sparkleCount} warm={warmSparkles} />

      {/* Glow orbs */}
      {glows.map((g, i) => (
        <PurpleGlow
          key={i}
          size={g.size}
          x={g.x}
          y={g.y}
          intensity={g.intensity}
          hue={g.hue ?? hue}
        />
      ))}

      {/* Scene-specific overlays */}
      {children}
    </>
  );
}
