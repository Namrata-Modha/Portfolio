"use client";

import { useState, useEffect } from "react";
import { usePhase } from "@/lib/usePhase";
import { PROJECTS } from "@/lib/data";
import { SectionLabel, NavigateButton } from "@/components/ui";
import SceneBackground from "@/components/visuals/SceneBackground";

interface ProjectsSceneProps {
  onBack: () => void;
  onContinue: () => void;
}

export default function ProjectsScene({ onBack, onContinue }: ProjectsSceneProps) {
  const [entered, setEntered] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const phase = usePhase([500, 1000, 1500, 2000]);

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
        gradient="linear-gradient(170deg,#080820 0%,#101238 20%,#141848 38%,#121642 55%,#0e1238 72%,#080a28 90%,#04061a 100%)"
        hue={240}
        palette="cool"
        bokehCount={20}
        dustCount={38}
        petalCount={12}
        sparkleCount={16}
        glows={[
          { size: 400, x: "20%", y: "35%", intensity: 0.6, hue: 230 },
          { size: 320, x: "75%", y: "55%", intensity: 0.5, hue: 250 },
        ]}
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-12 py-16 md:pt-24 md:pb-12">
        <SectionLabel index="04" label="Projects" visible={phase >= 1} />

        <h2
          className="mt-6"
          style={{
            fontFamily: "'Cormorant Garamond', Garamond, serif",
            fontSize: "clamp(2.2rem, 5vw, 3.4rem)",
            fontWeight: 400,
            lineHeight: 1.15,
            background:
              "linear-gradient(150deg, rgba(255,248,255,0.92) 0%, rgba(200,215,248,0.85) 50%, rgba(160,185,240,0.75) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            opacity: phase >= 1 ? 1 : 0,
            transform: phase >= 1 ? "translateY(0)" : "translateY(20px)",
            transition: "all 1s cubic-bezier(0.16,1,0.3,1) 0.15s",
          }}
        >
          What I built from scratch.
        </h2>

        {/* Project cards */}
        <div className="mt-10 space-y-6">
          {PROJECTS.map((project, i) => (
            <div
              key={project.title}
              className="p-7 rounded-2xl transition-all duration-600 cursor-default"
              style={{
                background:
                  project.theme === "medical"
                    ? "rgba(80,180,160,0.02)"
                    : "rgba(80,140,200,0.02)",
                border: `1px solid ${
                  project.theme === "medical"
                    ? "rgba(100,200,180,0.08)"
                    : "rgba(100,160,220,0.08)"
                }`,
                opacity: phase >= 2 ? 1 : 0,
                transform: phase >= 2 ? "translateY(0)" : "translateY(20px)",
                transition: `all 1s cubic-bezier(0.16,1,0.3,1) ${0.1 + i * 0.2}s`,
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                const isMedical = project.theme === "medical";
                el.style.background = isMedical
                  ? "rgba(80,180,160,0.05)"
                  : "rgba(80,140,200,0.05)";
                el.style.borderColor = isMedical
                  ? "rgba(110,210,190,0.16)"
                  : "rgba(110,170,230,0.16)";
                el.style.boxShadow = isMedical
                  ? "0 15px 50px rgba(80,180,160,0.06)"
                  : "0 15px 50px rgba(80,140,200,0.06)";
                el.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                const isMedical = project.theme === "medical";
                el.style.background = isMedical
                  ? "rgba(80,180,160,0.02)"
                  : "rgba(80,140,200,0.02)";
                el.style.borderColor = isMedical
                  ? "rgba(100,200,180,0.08)"
                  : "rgba(100,160,220,0.08)";
                el.style.boxShadow = "none";
                el.style.transform = "translateY(0)";
              }}
            >
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div className="flex items-center gap-3">
                  <h3
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "1.55rem",
                      fontWeight: 500,
                      color:
                        project.theme === "medical"
                          ? "rgba(170,230,215,0.85)"
                          : "rgba(170,200,240,0.85)",
                    }}
                  >
                    {project.title}
                  </h3>
                  {project.award && (
                    <span
                      className="px-3 py-1 rounded-full"
                      style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: "0.75rem",
                        letterSpacing: "0.08em",
                        color: "rgba(255,220,140,0.75)",
                        background: "rgba(255,200,80,0.06)",
                        border: "1px solid rgba(255,200,80,0.12)",
                      }}
                    >
                      &#127942; {project.award}
                    </span>
                  )}
                </div>
              </div>

              {/* Description */}
              <p
                className="mt-3"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "1rem",
                  lineHeight: 1.7,
                  color: "rgba(200,210,230,0.68)",
                  fontWeight: 300,
                  maxWidth: 600,
                }}
              >
                {project.description}
              </p>

              {/* Highlights */}
              <div className="mt-5 space-y-2.5">
                {project.highlights.map((h, j) => (
                  <div key={j} className="flex gap-3 items-start">
                    <span
                      style={{
                        color:
                          project.theme === "medical"
                            ? "rgba(120,200,180,0.4)"
                            : "rgba(120,170,220,0.4)",
                        fontSize: "0.6rem",
                        marginTop: 6,
                        flexShrink: 0,
                      }}
                    >
                      &#9670;
                    </span>
                    <p
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "1.15rem",
                        lineHeight: 1.65,
                        color: "rgba(200,210,230,0.65)",
                        fontWeight: 300,
                      }}
                    >
                      {h}
                    </p>
                  </div>
                ))}
              </div>

              {/* Tech stack */}
              <div className="mt-5 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full transition-all duration-500 cursor-default"
                    style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: "1rem",
                      color:
                        project.theme === "medical"
                          ? "rgba(140,200,185,0.4)"
                          : "rgba(140,175,220,0.4)",
                      background:
                        project.theme === "medical"
                          ? "rgba(80,180,160,0.03)"
                          : "rgba(80,140,200,0.03)",
                      border: `1px solid ${
                        project.theme === "medical"
                          ? "rgba(100,200,180,0.07)"
                          : "rgba(100,160,220,0.07)"
                      }`,
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget;
                      el.style.color = project.theme === "medical"
                        ? "rgba(180,235,220,0.75)"
                        : "rgba(180,210,245,0.75)";
                      el.style.background = project.theme === "medical"
                        ? "rgba(80,180,160,0.08)"
                        : "rgba(80,140,200,0.08)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget;
                      el.style.color = project.theme === "medical"
                        ? "rgba(140,200,185,0.4)"
                        : "rgba(140,175,220,0.4)";
                      el.style.background = project.theme === "medical"
                        ? "rgba(80,180,160,0.03)"
                        : "rgba(80,140,200,0.03)";
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Navigate */}
        <div className="mt-12 flex items-center gap-4">
          <NavigateButton
            label="Back"
            onClick={onBack}
            direction="back"
            visible={phase >= 3}
          />
          <NavigateButton
            label="Continue to Contact"
            onClick={handleContinue}
            visible={phase >= 3}
          />
        </div>
      </div>
    </div>
  );
}
