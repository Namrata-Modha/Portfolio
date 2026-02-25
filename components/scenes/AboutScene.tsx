"use client";

import { useState, useEffect } from "react";
import { usePhase } from "@/lib/usePhase";
import { ABOUT } from "@/lib/data";
import { SectionLabel, NavigateButton } from "@/components/ui";
import SceneBackground from "@/components/visuals/SceneBackground";

interface AboutSceneProps {
  onBack: () => void;
  onContinue: () => void;
}

export default function AboutScene({ onBack, onContinue }: AboutSceneProps) {
  const [entered, setEntered] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const phase = usePhase([600, 1100, 1600, 2100]);

  useEffect(() => {
    const t = setTimeout(() => setEntered(true), 150);
    return () => clearTimeout(t);
  }, []);

  const handleContinue = () => {
    setLeaving(true);
    setTimeout(onContinue, 1200);
  };

  return (
    <div
      className="relative min-h-screen overflow-hidden flex items-center"
      style={{
        opacity: entered && !leaving ? 1 : 0,
        transition: "opacity 1.2s ease-out",
      }}
    >
      <SceneBackground
        gradient="linear-gradient(170deg,#100a28 0%,#1c1450 22%,#241858 40%,#201448 58%,#18103e 75%,#0e0a28 90%,#060418 100%)"
        bokehCount={22}
        dustCount={45}
        petalCount={14}
        sparkleCount={12}
        glows={[
          { size: 400, x: "8%", y: "25%", intensity: 0.8 },
          { size: 300, x: "90%", y: "60%", intensity: 0.6 },
        ]}
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-12 py-16 md:pt-24 md:pb-12">
        <SectionLabel index="01" label="About" visible={phase >= 1} />

        {/* Heading */}
        <div
          className="mt-7"
          style={{
            opacity: phase >= 1 ? 1 : 0,
            transform: phase >= 1 ? "translateY(0)" : "translateY(22px)",
            transition: "all 1.1s cubic-bezier(0.16,1,0.3,1) 0.15s",
          }}
        >
          <h2
            style={{
              fontFamily: "'Cormorant Garamond', Garamond, serif",
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              fontWeight: 400,
              lineHeight: 1.1,
              background:
                "linear-gradient(150deg, rgba(255,248,255,0.94) 0%, rgba(220,195,248,0.87) 40%, rgba(190,155,230,0.78) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Hey, I&apos;m Namrata.
          </h2>
          <p
            className="mt-4"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(1rem, 1.9vw, 1.2rem)",
              lineHeight: 1.85,
              color: "rgba(220,210,242,0.72)",
              maxWidth: 580,
              fontWeight: 300,
            }}
          >
            Software engineer who builds things that work, and occasionally things that make
            people go{" "}
            <span
              style={{
                color: "rgba(200,160,240,0.82)",
                fontStyle: "italic",
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "1.05em",
              }}
            >
              &ldquo;wait, that&apos;s cool.&rdquo;
            </span>{" "}
            Fueled by K-drama marathons and too many cups of lattè. Built across India and Canada:
            systems, teams, and time zones.
          </p>
        </div>

        {/* Highlight cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          {ABOUT.highlights.map((h, i) => (
            <div
              key={i}
              className="relative p-6 rounded-2xl overflow-hidden transition-all duration-700 cursor-default"
              style={{
                background: "rgba(150,80,220,0.02)",
                border: "1px solid rgba(155,90,215,0.08)",
                backdropFilter: "blur(6px)",
                opacity: phase >= 2 ? 1 : 0,
                transform: phase >= 2 ? "translateY(0)" : "translateY(25px)",
                transition: `all 1s cubic-bezier(0.16,1,0.3,1) ${0.1 + i * 0.15}s`,
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.background = "rgba(150,80,220,0.07)";
                el.style.borderColor = "rgba(175,115,235,0.2)";
                el.style.transform = "translateY(-5px)";
                el.style.boxShadow = "0 18px 55px rgba(150,80,220,0.08)";
                const accent = el.querySelector<HTMLElement>(".card-accent");
                if (accent) accent.style.opacity = "1";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.background = "rgba(150,80,220,0.02)";
                el.style.borderColor = "rgba(155,90,215,0.08)";
                el.style.transform = "translateY(0)";
                el.style.boxShadow = "none";
                const accent = el.querySelector<HTMLElement>(".card-accent");
                if (accent) accent.style.opacity = "0";
              }}
            >
              <div
                className="card-accent absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 0%, rgba(160,95,225,0.06) 0%, transparent 65%)",
                  opacity: 0,
                  transition: "opacity 0.6s ease",
                }}
              />
              <span style={{ fontSize: "1.5rem" }}>{h.icon}</span>
              <h3
                className="mt-3 relative z-10"
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "1rem",
                  letterSpacing: "0.05em",
                  color: "rgba(225,205,250,0.88)",
                  fontWeight: 400,
                }}
              >
                {h.title}
              </h3>
              <p
                className="mt-2.5 relative z-10"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.9rem",
                  lineHeight: 1.7,
                  color: "rgba(200,185,228,0.65)",
                  fontWeight: 300,
                }}
              >
                {h.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Tech stack chips */}
        <div
          className="mt-9 flex flex-wrap gap-2"
          style={{
            opacity: phase >= 3 ? 1 : 0,
            transform: phase >= 3 ? "translateY(0)" : "translateY(10px)",
            transition: "all 0.9s cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          {ABOUT.techStack.map((tech, i) => (
            <span
              key={tech}
              className="px-3 py-1.5 rounded-full transition-all duration-500 cursor-default"
              style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: "0.9rem",
                letterSpacing: "0.05em",
                color: "rgba(190,162,232,0.58)",
                background: "rgba(150,80,220,0.03)",
                border: "1px solid rgba(155,90,215,0.07)",
                opacity: phase >= 3 ? 1 : 0,
                animation: phase >= 3 ? `tagFloat 0.6s ease-out ${i * 0.05}s both` : "none",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = "rgba(180,125,240,0.28)";
                el.style.color = "rgba(225,210,250,0.78)";
                el.style.background = "rgba(150,80,220,0.1)";
                el.style.boxShadow = "0 0 16px rgba(150,80,220,0.08)";
                el.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = "rgba(155,90,215,0.07)";
                el.style.color = "rgba(190,162,232,0.58)";
                el.style.background = "rgba(150,80,220,0.03)";
                el.style.boxShadow = "none";
                el.style.transform = "translateY(0)";
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Flourish divider */}
        <div
          className="mt-10 flex items-center gap-4"
          style={{
            opacity: phase >= 4 ? 1 : 0,
            transition: "all 1.2s ease-out 0.3s",
          }}
        >
          <div
            className="h-px flex-1"
            style={{
              background: "linear-gradient(to right, transparent, rgba(155,90,215,0.12), transparent)",
            }}
          />
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1rem",
              fontStyle: "italic",
              letterSpacing: "0.15em",
              color: "rgba(195,162,235,0.38)",
            }}
          >
            {ABOUT.flourish}
          </span>
          <div
            className="h-px flex-1"
            style={{
              background: "linear-gradient(to right, transparent, rgba(155,90,215,0.12), transparent)",
            }}
          />
        </div>

        {/* Navigate */}
        <div className="mt-10 flex items-center gap-4">
          <NavigateButton
            label="Back"
            onClick={onBack}
            direction="back"
            visible={phase >= 4}
          />
          <NavigateButton
            label="Continue to Education"
            onClick={handleContinue}
            visible={phase >= 4}
          />
        </div>
      </div>
    </div>
  );
}
