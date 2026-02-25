"use client";

interface PurpleGlowProps {
  size?: number;
  x?: string;
  y?: string;
  intensity?: number;
  hue?: number;
}

export default function PurpleGlow({
  size = 200,
  x = "50%",
  y = "45%",
  intensity = 1,
  hue = 270,
}: PurpleGlowProps) {
  return (
    <div
      className="absolute pointer-events-none"
      style={{
        left: x,
        top: y,
        transform: "translate(-50%,-50%)",
        width: size,
        height: size,
      }}
    >
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: `radial-gradient(circle, hsla(${hue},60%,50%,${0.1 * intensity}) 0%, hsla(${hue},55%,40%,${0.04 * intensity}) 40%, transparent 65%)`,
          animation: "glowPulse 7s ease-in-out infinite",
        }}
      />
      <div
        className="absolute rounded-full"
        style={{
          inset: "25%",
          background: `radial-gradient(circle, hsla(${hue},55%,65%,${0.12 * intensity}) 0%, transparent 65%)`,
          animation: "glowPulseInner 5s ease-in-out 1s infinite",
          filter: "blur(5px)",
        }}
      />
    </div>
  );
}
