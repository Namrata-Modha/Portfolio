"use client";

import { useEffect, useState } from "react";

interface DepthEnvironmentProps {
  scene: "about" | "education" | "experience" | "projects" | "contact";
}

export default function DepthEnvironment({ scene }: DepthEnvironmentProps) {
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

  // Parallax offsets based on mouse position
  const parallax = {
    far: {
      x: (mousePos.x - 0.5) * -15,
      y: (mousePos.y - 0.5) * -15,
    },
    mid: {
      x: (mousePos.x - 0.5) * -30,
      y: (mousePos.y - 0.5) * -30,
    },
    near: {
      x: (mousePos.x - 0.5) * -50,
      y: (mousePos.y - 0.5) * -50,
    },
  };

  return (
    <>
      <style jsx global>{`
        @keyframes orbFloat {
          0%, 100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-20px) scale(1.05);
          }
        }
      `}</style>

      {/* LAYER 1: Deep Sky */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 40%, #1a0f3e 0%, #0d0625 50%, #060318 100%)",
          transform: `translate(${parallax.far.x}px, ${parallax.far.y}px) scale(1.1)`,
          transition: "transform 0.3s ease-out",
        }}
      />

      {/* LAYER 2: Stars / Distant Elements */}
      <div
        className="absolute inset-0"
        style={{
          transform: `translate(${parallax.far.x * 1.2}px, ${parallax.far.y * 1.2}px)`,
          transition: "transform 0.3s ease-out",
        }}
      >
        {/* Distant stars */}
        {Array.from({ length: 80 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: Math.random() * 2 + 0.5,
              height: Math.random() * 2 + 0.5,
              background: "rgba(255, 255, 255, 0.4)",
              boxShadow: "0 0 3px rgba(255, 255, 255, 0.3)",
              animation: `starTwinkle ${Math.random() * 3 + 2}s ease-in-out ${Math.random() * 2}s infinite`,
            }}
          />
        ))}
      </div>

      {/* LAYER 3: Atmospheric haze / Distance fog */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse at 30% 20%, rgba(140, 80, 200, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse at 70% 60%, rgba(100, 60, 180, 0.08) 0%, transparent 45%)
          `,
          transform: `translate(${parallax.mid.x * 0.8}px, ${parallax.mid.y * 0.8}px)`,
          transition: "transform 0.3s ease-out",
          animation: "purpleWave1 25s ease-in-out infinite alternate",
        }}
      />

      {/* LAYER 4: Mid-distance atmospheric layer */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse at 50% 70%, rgba(120, 60, 190, 0.06) 0%, transparent 60%)
          `,
          transform: `translate(${parallax.mid.x}px, ${parallax.mid.y}px)`,
          transition: "transform 0.3s ease-out",
          animation: "purpleWave2 30s ease-in-out 3s infinite alternate",
        }}
      />

      {/* LAYER 5: Floating Luminous Orbs (Ghibli-style) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          transform: `translate(${parallax.far.x * 0.5}px, ${parallax.far.y * 0.5}px)`,
          transition: "transform 0.3s ease-out",
        }}
      >
        {/* Large primary orb - top left */}
        <div
          className="absolute"
          style={{
            top: "15%",
            left: "12%",
            width: 80,
            height: 80,
            animation: "orbFloat 8s ease-in-out infinite",
          }}
        >
          {/* Outer glow */}
          <div className="absolute inset-0 rounded-full bg-purple-300/20 blur-3xl scale-150" />
          {/* Middle glow */}
          <div className="absolute inset-2 rounded-full bg-purple-200/30 blur-2xl" />
          {/* Core light */}
          <div className="absolute inset-4 rounded-full bg-gradient-to-br from-purple-100/60 to-pink-200/40" />
        </div>

        {/* Medium orb - upper center */}
        <div
          className="absolute"
          style={{
            top: "8%",
            left: "45%",
            width: 50,
            height: 50,
            animation: "orbFloat 10s ease-in-out 2s infinite",
          }}
        >
          <div className="absolute inset-0 rounded-full bg-blue-200/20 blur-2xl scale-150" />
          <div className="absolute inset-2 rounded-full bg-purple-200/25 blur-xl" />
          <div className="absolute inset-3 rounded-full bg-gradient-to-br from-blue-100/50 to-purple-200/40" />
        </div>

        {/* Small orb - top right */}
        <div
          className="absolute"
          style={{
            top: "20%",
            right: "18%",
            width: 35,
            height: 35,
            animation: "orbFloat 12s ease-in-out 4s infinite",
          }}
        >
          <div className="absolute inset-0 rounded-full bg-pink-200/15 blur-xl scale-150" />
          <div className="absolute inset-1 rounded-full bg-purple-200/20 blur-lg" />
          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-pink-100/45 to-purple-200/35" />
        </div>

        {/* Tiny accent orbs */}
        <div
          className="absolute"
          style={{
            top: "25%",
            left: "30%",
            width: 20,
            height: 20,
            animation: "orbFloat 9s ease-in-out 1s infinite",
          }}
        >
          <div className="absolute inset-0 rounded-full bg-purple-300/15 blur-lg scale-125" />
          <div className="absolute inset-1 rounded-full bg-gradient-to-br from-purple-100/40 to-blue-200/30" />
        </div>

        <div
          className="absolute"
          style={{
            top: "12%",
            right: "35%",
            width: 25,
            height: 25,
            animation: "orbFloat 11s ease-in-out 3s infinite",
          }}
        >
          <div className="absolute inset-0 rounded-full bg-blue-200/15 blur-lg scale-125" />
          <div className="absolute inset-1 rounded-full bg-gradient-to-br from-blue-100/40 to-purple-200/30" />
        </div>
      </div>

      {/* LAYER 6: Volumetric light rays from orbs */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        style={{
          transform: `translate(${parallax.mid.x * 0.3}px, ${parallax.mid.y * 0.3}px)`,
          transition: "transform 0.3s ease-out",
        }}
      >
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="absolute"
            style={{
              top: "12%",
              left: "15%",
              width: 3,
              height: "120%",
              background: `linear-gradient(to bottom, 
                rgba(200, 160, 240, ${0.08 - i * 0.015}) 0%, 
                rgba(180, 140, 220, ${0.12 - i * 0.02}) 30%, 
                rgba(200, 160, 240, ${0.06 - i * 0.01}) 60%,
                transparent 100%)`,
              transform: `rotate(${-15 + i * 12}deg) translateX(${-60 + i * 40}px)`,
              transformOrigin: "top center",
              filter: "blur(15px)",
              animation: `lightRayShimmer ${12 + i * 3}s ease-in-out ${i * 1.5}s infinite alternate`,
            }}
          />
        ))}
      </div>

      {/* LAYER 7: Ground plane with perspective */}
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: "50%",
          background: `
            linear-gradient(to bottom, 
              transparent 0%, 
              rgba(20, 10, 40, 0.3) 40%,
              rgba(16, 8, 35, 0.6) 70%,
              rgba(12, 6, 28, 0.8) 100%)
          `,
          transform: `translate(${parallax.near.x * 0.5}px, ${parallax.near.y * 0.5}px) perspective(1000px) rotateX(1deg)`,
          transition: "transform 0.3s ease-out",
        }}
      >
        {/* Ground grid for depth cue */}
        <div className="absolute inset-0">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute left-0 right-0"
              style={{
                bottom: `${i * 12}%`,
                height: 1,
                background: `linear-gradient(to right, transparent, rgba(150, 90, 220, ${0.05 - i * 0.005}) 50%, transparent)`,
                opacity: 1 - i * 0.12,
              }}
            />
          ))}
        </div>
      </div>

      {/* LAYER 8: Atmospheric fog (distance fade) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `
            linear-gradient(to bottom, 
              transparent 0%, 
              transparent 40%,
              rgba(6, 3, 26, 0.2) 60%,
              rgba(6, 3, 26, 0.5) 100%)
          `,
        }}
      />

      {/* LAYER 9: Depth particles (front, mid, back) */}
      <DepthParticles parallax={parallax} />
    </>
  );
}

function DepthParticles({ parallax }: { parallax: any }) {
  return (
    <>
      {/* Far particles (small, slow) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          transform: `translate(${parallax.far.x * 0.6}px, ${parallax.far.y * 0.6}px)`,
          transition: "transform 0.3s ease-out",
        }}
      >
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={`far-${i}`}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: Math.random() * 3 + 2,
              height: Math.random() * 3 + 2,
              background: "rgba(200, 170, 240, 0.15)",
              filter: "blur(1px)",
              animation: `dustDrift${i % 3} ${20 + Math.random() * 10}s ease-in-out ${Math.random() * 5}s infinite alternate`,
            }}
          />
        ))}
      </div>

      {/* Mid particles (medium) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          transform: `translate(${parallax.mid.x}px, ${parallax.mid.y}px)`,
          transition: "transform 0.3s ease-out",
        }}
      >
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`mid-${i}`}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: Math.random() * 6 + 3,
              height: Math.random() * 6 + 3,
              background: "rgba(220, 190, 250, 0.25)",
              filter: "blur(2px)",
              animation: `dustDrift${i % 3} ${15 + Math.random() * 8}s ease-in-out ${Math.random() * 4}s infinite alternate`,
            }}
          />
        ))}
      </div>

      {/* Near particles (large, fast) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          transform: `translate(${parallax.near.x}px, ${parallax.near.y}px)`,
          transition: "transform 0.3s ease-out",
        }}
      >
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={`near-${i}`}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: Math.random() * 12 + 8,
              height: Math.random() * 12 + 8,
              background: `radial-gradient(circle, rgba(240, 210, 255, 0.4) 0%, rgba(220, 190, 250, 0.1) 70%, transparent 100%)`,
              filter: "blur(4px)",
              animation: `bokehFloat${i % 4} ${12 + Math.random() * 6}s ease-in-out ${Math.random() * 3}s infinite alternate`,
            }}
          />
        ))}
      </div>
    </>
  );
}