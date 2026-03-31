"use client";

import { useEffect, useState } from "react";

interface CinematicEnvironmentProps {
  scene: "about" | "education" | "experience" | "projects" | "contact";
}

export default function CinematicEnvironment({ scene }: CinematicEnvironmentProps) {
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Dramatic parallax for cinematic feel
  const parallax = {
    far: {
      x: (mousePos.x - 0.5) * -25,
      y: (mousePos.y - 0.5) * -25,
    },
    mid: {
      x: (mousePos.x - 0.5) * -40,
      y: (mousePos.x - 0.5) * -40,
    },
    near: {
      x: (mousePos.x - 0.5) * -60,
      y: (mousePos.y - 0.5) * -60,
    },
  };

  return (
    <>
      <style jsx global>{`
        @keyframes dramaticFloat {
          0%, 100% {
            transform: translateY(0) translateX(0) scale(1);
          }
          25% {
            transform: translateY(-30px) translateX(10px) scale(1.05);
          }
          50% {
            transform: translateY(-15px) translateX(-10px) scale(1.02);
          }
          75% {
            transform: translateY(-40px) translateX(5px) scale(1.08);
          }
        }

        @keyframes lightPulse {
          0%, 100% {
            opacity: 0.6;
          }
          50% {
            opacity: 1;
          }
        }

        @keyframes lightRayShimmer {
          0%, 100% {
            opacity: 0.4;
            transform: rotate(var(--ray-angle)) scaleY(1);
          }
          50% {
            opacity: 0.7;
            transform: rotate(var(--ray-angle)) scaleY(1.15);
          }
        }

        @keyframes atmosphericDrift {
          0% {
            transform: translateX(0) translateY(0);
          }
          100% {
            transform: translateX(30px) translateY(-50px);
          }
        }
      `}</style>

      {/* LAYER 1: Deep cinematic sky with realistic gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse at 30% 20%, rgba(45, 20, 80, 0.8) 0%, transparent 50%),
            radial-gradient(ellipse at 70% 80%, rgba(20, 10, 50, 0.6) 0%, transparent 50%),
            linear-gradient(to bottom, 
              #1a0f3e 0%, 
              #140a2e 30%, 
              #0d0625 60%, 
              #060318 100%)
          `,
          transform: `translate(${parallax.far.x}px, ${parallax.far.y}px) scale(1.1)`,
          transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      />

      {/* LAYER 2: Distant stars with twinkle */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          transform: `translate(${parallax.far.x * 1.3}px, ${parallax.far.y * 1.3}px)`,
          transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        {Array.from({ length: 100 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: Math.random() * 2 + 1,
              height: Math.random() * 2 + 1,
              background: `rgba(${200 + Math.random() * 55}, ${200 + Math.random() * 55}, 255, ${0.3 + Math.random() * 0.7})`,
              boxShadow: `0 0 ${Math.random() * 4 + 2}px rgba(200, 200, 255, 0.8)`,
              animation: `lightPulse ${2 + Math.random() * 4}s ease-in-out ${Math.random() * 3}s infinite`,
            }}
          />
        ))}
      </div>

      {/* LAYER 3: Floating luminous orbs (dramatic, larger) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          transform: `translate(${parallax.mid.x * 0.7}px, ${parallax.mid.y * 0.7}px)`,
          transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        {/* Primary light source - large dramatic orb */}
        <div
          className="absolute"
          style={{
            top: "15%",
            left: "15%",
            width: 120,
            height: 120,
            animation: "dramaticFloat 12s ease-in-out infinite",
          }}
        >
          {/* Volumetric outer glow */}
          <div 
            className="absolute inset-0 rounded-full opacity-40"
            style={{
              background: "radial-gradient(circle, rgba(220, 180, 255, 0.6) 0%, rgba(180, 140, 240, 0.3) 40%, transparent 70%)",
              filter: "blur(50px)",
              transform: "scale(2.5)",
              animation: "lightPulse 4s ease-in-out infinite",
            }}
          />
          {/* Middle glow with realistic falloff */}
          <div 
            className="absolute inset-0 rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(240, 200, 255, 0.8) 0%, rgba(200, 160, 240, 0.4) 50%, transparent 100%)",
              filter: "blur(30px)",
              transform: "scale(1.8)",
            }}
          />
          {/* Core light */}
          <div 
            className="absolute inset-0 rounded-full"
            style={{
              background: "radial-gradient(circle at 35% 35%, rgba(255, 240, 255, 0.95) 0%, rgba(240, 200, 255, 0.7) 50%, rgba(200, 160, 240, 0.3) 100%)",
              boxShadow: "0 0 60px rgba(240, 200, 255, 0.8), inset -20px -20px 40px rgba(180, 140, 240, 0.4)",
            }}
          />
        </div>

        {/* Secondary orbs */}
        <div
          className="absolute"
          style={{
            top: "10%",
            right: "25%",
            width: 70,
            height: 70,
            animation: "dramaticFloat 15s ease-in-out 2s infinite",
          }}
        >
          <div className="absolute inset-0 rounded-full bg-blue-300/20 blur-3xl scale-150 opacity-60" />
          <div className="absolute inset-0 rounded-full bg-blue-200/40 blur-2xl" />
          <div 
            className="absolute inset-0 rounded-full"
            style={{
              background: "radial-gradient(circle at 40% 40%, rgba(200, 220, 255, 0.9) 0%, rgba(160, 180, 240, 0.5) 100%)",
              boxShadow: "0 0 40px rgba(180, 200, 255, 0.6)",
            }}
          />
        </div>

        <div
          className="absolute"
          style={{
            top: "60%",
            left: "70%",
            width: 50,
            height: 50,
            animation: "dramaticFloat 10s ease-in-out 4s infinite",
          }}
        >
          <div className="absolute inset-0 rounded-full bg-pink-300/20 blur-2xl scale-150 opacity-50" />
          <div className="absolute inset-0 rounded-full bg-pink-200/30 blur-xl" />
          <div 
            className="absolute inset-0 rounded-full"
            style={{
              background: "radial-gradient(circle at 40% 40%, rgba(255, 220, 240, 0.85) 0%, rgba(240, 180, 220, 0.4) 100%)",
              boxShadow: "0 0 30px rgba(255, 200, 240, 0.5)",
            }}
          />
        </div>
      </div>

      {/* LAYER 4: Volumetric light rays (dramatic, realistic) */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{
          transform: `translate(${parallax.mid.x * 0.5}px, ${parallax.mid.y * 0.5}px)`,
          transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="absolute"
            style={{
              top: "15%",
              left: "15%",
              width: 4,
              height: "140%",
              background: `linear-gradient(to bottom, 
                rgba(220, 180, 255, ${0.15 - i * 0.02}) 0%, 
                rgba(200, 160, 240, ${0.25 - i * 0.03}) 20%, 
                rgba(180, 140, 220, ${0.18 - i * 0.025}) 40%,
                rgba(160, 120, 200, ${0.1 - i * 0.015}) 70%,
                transparent 100%)`,
              transform: `rotate(var(--ray-angle)) translateX(${-80 + i * 40}px)`,
              transformOrigin: "top center",
              filter: "blur(20px)",
              animation: `lightRayShimmer ${10 + i * 2}s ease-in-out ${i * 1.2}s infinite`,
              "--ray-angle": `${-20 + i * 15}deg`,
            } as React.CSSProperties & Record<string, any>}
          />
        ))}
      </div>

      {/* LAYER 5: Atmospheric fog/haze with depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          transform: `translate(${parallax.mid.x * 0.4}px, ${parallax.mid.y * 0.4}px)`,
          transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${400 + Math.random() * 600}px`,
              height: `${200 + Math.random() * 300}px`,
              background: `radial-gradient(ellipse, rgba(${160 + Math.random() * 60}, ${120 + Math.random() * 80}, ${200 + Math.random() * 55}, 0.15) 0%, transparent 70%)`,
              filter: `blur(${60 + Math.random() * 40}px)`,
              animation: `atmosphericDrift ${30 + Math.random() * 20}s linear ${Math.random() * 10}s infinite`,
            }}
          />
        ))}
      </div>

      {/* LAYER 6: Depth fog gradient (atmospheric perspective) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            linear-gradient(to bottom, 
              transparent 0%, 
              rgba(6, 3, 26, 0.15) 50%,
              rgba(6, 3, 26, 0.4) 85%,
              rgba(6, 3, 26, 0.7) 100%)
          `,
        }}
      />

      {/* LAYER 7: Dynamic floating particles (depth-sorted, cinematic) */}
      <CinematicParticles parallax={parallax} />
    </>
  );
}

function CinematicParticles({ parallax }: { parallax: any }) {
  return (
    <>
      {/* Far particles - small, slow, ambient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          transform: `translate(${parallax.far.x * 0.8}px, ${parallax.far.y * 0.8}px)`,
          transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`far-${i}`}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: Math.random() * 4 + 2,
              height: Math.random() * 4 + 2,
              background: `radial-gradient(circle, rgba(200, 170, 240, 0.3) 0%, transparent 70%)`,
              filter: "blur(1px)",
              animation: `atmosphericDrift ${25 + Math.random() * 15}s linear ${Math.random() * 8}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Mid particles - medium, visible */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          transform: `translate(${parallax.mid.x * 0.6}px, ${parallax.mid.y * 0.6}px)`,
          transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={`mid-${i}`}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: Math.random() * 8 + 5,
              height: Math.random() * 8 + 5,
              background: `radial-gradient(circle, rgba(220, 190, 250, 0.5) 0%, rgba(200, 170, 240, 0.2) 50%, transparent 100%)`,
              filter: "blur(3px)",
              animation: `dramaticFloat ${15 + Math.random() * 10}s ease-in-out ${Math.random() * 5}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Near particles - large, bokeh effect, cinematic */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          transform: `translate(${parallax.near.x * 0.4}px, ${parallax.near.y * 0.4}px)`,
          transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={`near-${i}`}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: Math.random() * 16 + 10,
              height: Math.random() * 16 + 10,
              background: `radial-gradient(circle, rgba(240, 210, 255, 0.6) 0%, rgba(220, 190, 250, 0.3) 40%, transparent 100%)`,
              boxShadow: `0 0 ${Math.random() * 20 + 10}px rgba(240, 210, 255, 0.4)`,
              filter: "blur(8px)",
              animation: `dramaticFloat ${10 + Math.random() * 8}s ease-in-out ${Math.random() * 4}s infinite`,
            }}
          />
        ))}
      </div>
    </>
  );
}