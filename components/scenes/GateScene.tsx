"use client";

import { useState } from "react";
import { usePhase } from "@/lib/usePhase";
import { PERSONAL } from "@/lib/data";
import SceneBackground from "@/components/visuals/SceneBackground";

interface GateSceneProps {
  onEnter: () => void;
}

export default function GateScene({ onEnter }: GateSceneProps) {
  const [hovered, setHovered] = useState(false);
  const [entering, setEntering] = useState(false);
  const phase = usePhase([500, 1300, 2200]);

  const handleEnter = () => {
    setEntering(true);
    setTimeout(onEnter, 1500);
  };

  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden"
      style={{
        transition: "all 1.5s cubic-bezier(0.4,0,0.2,1)",
        transform: entering ? "scale(1.08)" : "scale(1)",
        opacity: entering ? 0 : 1,
        filter: entering ? "blur(16px) brightness(1.4)" : "none",
      }}
    >
      <SceneBackground
        gradient="linear-gradient(175deg,#0e0825 0%,#1a1248 20%,#241855 38%,#281a5c 50%,#221650 65%,#150e3a 82%,#0a0620 100%)"
        bokehCount={26}
        dustCount={35}
        petalCount={18}
        sparkleCount={14}
        glows={[
          { size: 420, x: "50%", y: "40%", intensity: 1.2 },
          { size: 220, x: "48%", y: "44%", intensity: 1.5 },
        ]}
      />

      <div className="relative z-10 text-center px-6">
        {/* Name */}
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', Garamond, serif",
            fontSize: "clamp(2.8rem, 8vw, 5.8rem)",
            fontWeight: 300,
            letterSpacing: "0.01em",
            lineHeight: 1.05,
            background:
              "linear-gradient(160deg, rgba(255,248,255,0.97) 0%, rgba(225,200,250,0.92) 30%, rgba(195,155,235,0.85) 60%, rgba(170,125,215,0.75) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            opacity: phase >= 1 ? 1 : 0,
            transform: phase >= 1 ? "translateY(0)" : "translateY(35px)",
            transition: "all 1.4s cubic-bezier(0.16,1,0.3,1)",
            filter: "drop-shadow(0 0 60px rgba(150,80,220,0.12))",
          }}
        >
          {PERSONAL.name}
        </h1>

        {/* Subtitle */}
        <p
          style={{
            fontFamily: "'Space Mono', monospace",
            fontSize: "clamp(0.82rem, 1.5vw, 1rem)",
            letterSpacing: "0.4em",
            color: "rgba(205,175,240,0.65)",
            textTransform: "uppercase",
            marginTop: 18,
            opacity: phase >= 2 ? 1 : 0,
            transform: phase >= 2 ? "translateY(0)" : "translateY(12px)",
            transition: "all 1s cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          {PERSONAL.tagline}
        </p>

        {/* Enter button */}
        <div
          className="mt-16 flex justify-center"
          style={{
            opacity: phase >= 3 ? 1 : 0,
            transform: phase >= 3 ? "translateY(0)" : "translateY(15px)",
            transition: "all 1.2s cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          <button
            onClick={handleEnter}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="relative cursor-pointer"
            style={{
              padding: "16px 48px",
              borderRadius: 60,
              background: hovered
                ? "rgba(150,80,220,0.14)"
                : "rgba(140,70,200,0.04)",
              border: `1px solid ${hovered ? "rgba(185,135,240,0.35)" : "rgba(160,100,215,0.12)"}`,
              backdropFilter: "blur(20px)",
              boxShadow: hovered
                ? "0 0 60px rgba(150,80,220,0.15), 0 0 120px rgba(150,80,220,0.06)"
                : "0 0 30px rgba(140,70,200,0.04)",
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.95rem",
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: hovered
                ? "rgba(235,220,255,0.95)"
                : "rgba(210,185,245,0.6)",
              transition: "all 0.6s cubic-bezier(0.4,0,0.2,1)",
              transform: hovered ? "scale(1.04)" : "scale(1)",
            }}
          >
            Enter the World
          </button>
        </div>
      </div>

      {/* Bottom whisper */}
      <p
        className="absolute bottom-8 text-center px-4"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "0.95rem",
          fontStyle: "italic",
          letterSpacing: "0.12em",
          color: "rgba(190,160,230,0.35)",
          animation: "gentleFade 5s ease-in-out 3.5s infinite",
        }}
      >
        {PERSONAL.subtitle}
      </p>
    </div>
  );
}
