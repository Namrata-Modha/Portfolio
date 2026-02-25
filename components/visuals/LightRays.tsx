"use client";

interface LightRaysProps {
  hue?: number;
}

export default function LightRays({ hue = 270 }: LightRaysProps) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[0, 1, 2].map((i) => (
        <div
          key={i}
          className="absolute"
          style={{
            left: `${30 + i * 18}%`,
            top: 0,
            width: "3px",
            height: "100%",
            background: `linear-gradient(to bottom, transparent 0%, hsla(${hue},50%,45%,${0.03 + i * 0.01}) 30%, hsla(${hue},45%,40%,${0.05 + i * 0.01}) 50%, hsla(${hue},50%,45%,0.02) 70%, transparent 100%)`,
            filter: `blur(${8 + i * 4}px)`,
            transform: `rotate(${-3 + i * 3}deg)`,
            transformOrigin: "top center",
            animation: `lightRayShimmer ${10 + i * 4}s ease-in-out ${i * 2}s infinite alternate`,
            opacity: 0.7,
          }}
        />
      ))}
    </div>
  );
}
