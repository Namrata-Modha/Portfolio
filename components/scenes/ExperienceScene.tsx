"use client";

import { useState, useEffect } from "react";
import { usePhase } from "@/lib/usePhase";
import { EXPERIENCE } from "@/lib/data";
import { SectionLabel, NavigateButton } from "@/components/ui";
import SceneBackground from "@/components/visuals/SceneBackground";

interface ExperienceSceneProps {
  onBack: () => void;
  onContinue: () => void;
}

export default function ExperienceScene({ onBack, onContinue }: ExperienceSceneProps) {
  const [entered, setEntered] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const [cardFade, setCardFade] = useState(false);
  const phase = usePhase([500, 1000, 1500, 2000]);

  useEffect(() => {
    const t = setTimeout(() => setEntered(true), 150);
    return () => clearTimeout(t);
  }, []);

  const switchCompany = (idx: number) => {
    if (idx === activeIdx) return;
    setCardFade(true);
    setTimeout(() => {
      setActiveIdx(idx);
      setCardFade(false);
    }, 400);
  };

  const active = EXPERIENCE[activeIdx];
  const isConstellation = active.theme === "constellation";

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
        gradient={
          isConstellation
            ? "linear-gradient(170deg,#0a0820 0%,#12103a 20%,#1a1548 38%,#181345 55%,#120e38 72%,#0a0825 90%,#050418 100%)"
            : "linear-gradient(170deg,#0e0a25 0%,#181240 20%,#201650 38%,#1e1448 55%,#16103a 72%,#0c0828 90%,#06041a 100%)"
        }
        hue={isConstellation ? 250 : 270}
        palette="purple"
        bokehCount={18}
        dustCount={35}
        petalCount={10}
        sparkleCount={14}
        glows={[
          { size: 380, x: "15%", y: "30%", intensity: 0.7, hue: isConstellation ? 245 : 270 },
          { size: 300, x: "80%", y: "65%", intensity: 0.5, hue: isConstellation ? 260 : 280 },
        ]}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-12 py-16 md:pt-24 md:pb-12">
        <SectionLabel index="03" label="Experience" visible={phase >= 1} />

        <h2
          className="mt-6"
          style={{
            fontFamily: "'Cormorant Garamond', Garamond, serif",
            fontSize: "clamp(2.2rem, 5vw, 3.4rem)",
            fontWeight: 400,
            lineHeight: 1.15,
            background:
              "linear-gradient(150deg, rgba(255,248,255,0.92) 0%, rgba(220,195,248,0.85) 50%, rgba(190,155,230,0.75) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            opacity: phase >= 1 ? 1 : 0,
            transform: phase >= 1 ? "translateY(0)" : "translateY(20px)",
            transition: "all 1s cubic-bezier(0.16,1,0.3,1) 0.15s",
          }}
        >
          Where I shipped real things.
        </h2>

        {/* Company selector */}
        <div
          className="mt-8 flex gap-3"
          style={{
            opacity: phase >= 2 ? 1 : 0,
            transform: phase >= 2 ? "translateY(0)" : "translateY(12px)",
            transition: "all 0.8s cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          {EXPERIENCE.map((exp, i) => (
            <button
              key={exp.company}
              onClick={() => switchCompany(i)}
              className="px-5 py-3 rounded-xl cursor-pointer transition-all duration-500 text-left"
              style={{
                background:
                  activeIdx === i
                    ? "rgba(150,80,220,0.08)"
                    : "rgba(150,100,200,0.02)",
                border: `1px solid ${
                  activeIdx === i
                    ? "rgba(175,115,235,0.18)"
                    : "rgba(150,100,200,0.06)"
                }`,
                boxShadow:
                  activeIdx === i ? "0 0 25px rgba(150,80,220,0.06)" : "none",
              }}
            >
              <div
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "1rem",
                  letterSpacing: "0.04em",
                  color:
                    activeIdx === i
                      ? "rgba(230,215,250,0.85)"
                      : "rgba(195,175,228,0.55)",
                  transition: "color 0.5s ease",
                }}
              >
                {exp.company}
              </div>
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.9rem",
                  color: "rgba(180,165,215,0.5)",
                  marginTop: 2,
                }}
              >
                {exp.period}
              </div>
            </button>
          ))}
        </div>

        {/* Active company card */}
        <div
          className="mt-8 transition-all duration-500"
          style={{
            opacity: cardFade ? 0 : phase >= 2 ? 1 : 0,
            transform: cardFade ? "translateY(12px)" : "translateY(0)",
          }}
        >
          <div
            className="p-7 rounded-2xl transition-all duration-500"
            style={{
              background: "rgba(150,80,220,0.02)",
              border: "1px solid rgba(155,90,215,0.08)",
            }}
          >
            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
              <div>
                <h3
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.5rem",
                    fontWeight: 500,
                    color: "rgba(230,210,248,0.85)",
                  }}
                >
                  {active.role}
                </h3>
                <p
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "0.95rem",
                    color: "rgba(195,170,225,0.6)",
                    marginTop: 4,
                  }}
                >
                  {active.company} &middot; {active.location}
                </p>
              </div>
              <span
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "1.15rem",
                  color: "rgba(200,170,230,0.6)",
                  letterSpacing: "0.05em",
                  flexShrink: 0,
                }}
              >
                {active.period}
              </span>
            </div>

            {/* Highlights */}
            <div className="mt-6 space-y-3">
              {active.highlights.map((h, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <span
                    style={{
                      color: "rgba(180,140,235,0.6)",
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
                      fontSize: "0.95rem",
                      lineHeight: 1.7,
                      color: "rgba(210,195,235,0.68)",
                      fontWeight: 300,
                    }}
                  >
                    {h}
                  </p>
                </div>
              ))}
            </div>

            {/* Notable project */}
            {active.notableProject && (
              <div
                className="mt-6 p-4 rounded-xl"
                style={{
                  background: "rgba(150,80,220,0.03)",
                  border: "1px solid rgba(155,90,215,0.06)",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "0.9rem",
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    color: "rgba(180,150,225,0.55)",
                  }}
                >
                  Notable Project
                </p>
                <h4
                  className="mt-2"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "1.15rem",
                    fontWeight: 500,
                    color: "rgba(220,200,245,0.75)",
                  }}
                >
                  {active.notableProject.name}
                </h4>
                <p
                  className="mt-1"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.9rem",
                    lineHeight: 1.65,
                    color: "rgba(195,180,225,0.62)",
                    fontWeight: 300,
                  }}
                >
                  {active.notableProject.desc}
                </p>
              </div>
            )}

            {/* Tech chips */}
            <div className="mt-5 flex flex-wrap gap-2">
              {active.techUsed.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-full transition-all duration-500 cursor-default"
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "1rem",
                    color: "rgba(180,155,225,0.58)",
                    background: "rgba(150,80,220,0.03)",
                    border: "1px solid rgba(155,90,215,0.06)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = "rgba(175,120,235,0.22)";
                    el.style.color = "rgba(220,205,248,0.75)";
                    el.style.background = "rgba(150,80,220,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.borderColor = "rgba(155,90,215,0.06)";
                    el.style.color = "rgba(180,155,225,0.58)";
                    el.style.background = "rgba(150,80,220,0.03)";
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
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
            label="Continue to Projects"
            onClick={handleContinue}
            visible={phase >= 3}
          />
        </div>
      </div>
    </div>
  );
}
