"use client";

import { useState, useEffect } from "react";
import { usePhase } from "@/lib/usePhase";
import { EDUCATION } from "@/lib/data";
import { SectionLabel, NavigateButton } from "@/components/ui";
import { GujaratSkyline, OntarioSkyline } from "@/components/monuments";
import {
  BokehLights,
  FloatingPetals,
  AnimeSparkles,
  MagicDust,
  LightRays,
  PurpleGlow,
} from "@/components/visuals";

interface EducationSceneProps {
  onBack: () => void;
  onContinue: () => void;
}

export default function EducationScene({ onBack, onContinue }: EducationSceneProps) {
  const [entered, setEntered] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const [activeTab, setActiveTab] = useState<"india" | "canada">("india");
  const [tabFade, setTabFade] = useState(false);
  const phase = usePhase([500, 1000, 1500]);

  useEffect(() => {
    const t = setTimeout(() => setEntered(true), 150);
    return () => clearTimeout(t);
  }, []);

  const switchTab = (tab: "india" | "canada") => {
    if (tab === activeTab) return;
    setTabFade(true);
    setTimeout(() => {
      setActiveTab(tab);
      setTabFade(false);
    }, 500);
  };

  const isIndia = activeTab === "india";

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
      {/* Dynamic background */}
      <div
        className="absolute inset-0 transition-all duration-1000"
        style={{
          background: isIndia
            ? "linear-gradient(170deg,#120a28 0%,#1e1448 20%,#261855 38%,#241650 55%,#1c1240 72%,#100c2a 90%,#08061a 100%)"
            : "linear-gradient(170deg,#0c1025 0%,#101838 20%,#142042 38%,#12223e 55%,#0e1a35 72%,#081228 90%,#04081a 100%)",
          opacity: tabFade ? 0.6 : 1,
        }}
      />
      <div
        className="absolute inset-0 transition-all duration-1000"
        style={{
          background: isIndia
            ? "radial-gradient(ellipse at 40% 40%,rgba(160,80,180,0.1) 0%,transparent 50%)"
            : "radial-gradient(ellipse at 40% 40%,rgba(80,160,180,0.07) 0%,transparent 50%)",
          animation: "purpleWave1 22s ease-in-out infinite alternate",
        }}
      />
      <div
        className="absolute inset-0 transition-all duration-1000"
        style={{
          background: isIndia
            ? "radial-gradient(ellipse at 65% 55%,rgba(180,100,160,0.06) 0%,transparent 45%)"
            : "radial-gradient(ellipse at 65% 60%,rgba(100,140,200,0.05) 0%,transparent 45%)",
          animation: "purpleWave2 28s ease-in-out 4s infinite alternate",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 50% 75%,rgba(110,45,170,0.06) 0%,transparent 45%)",
          animation: "purpleWave2 30s ease-in-out 2s infinite alternate",
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 pointer-events-none"
        style={{
          height: "30%",
          background: isIndia
            ? "linear-gradient(to top,rgba(150,80,170,0.06) 0%,transparent 100%)"
            : "linear-gradient(to top,rgba(80,140,170,0.04) 0%,transparent 100%)",
          transition: "all 1s ease",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(ellipse at 50% 50%,transparent 40%,rgba(6,3,20,0.4) 100%)",
        }}
      />

      {/* Particles */}
      <LightRays hue={isIndia ? 280 : 200} />
      <BokehLights count={20} palette={isIndia ? "indiaWarm" : "cool"} />
      <MagicDust count={38} palette={isIndia ? "indiaWarm" : "cool"} />
      <FloatingPetals count={14} palette={isIndia ? "indiaWarm" : "cool"} />
      <AnimeSparkles count={10} warm={isIndia} />
      <PurpleGlow size={350} x="12%" y="30%" intensity={0.7} hue={isIndia ? 285 : 200} />
      <PurpleGlow size={280} x="85%" y="55%" intensity={0.5} hue={isIndia ? 275 : 210} />

      {/* Monuments */}
      <div
        className="transition-all duration-800"
        style={{
          opacity: isIndia && !tabFade ? 1 : 0,
          position: "absolute",
          inset: 0,
          zIndex: 1,
        }}
      >
        <GujaratSkyline />
      </div>
      <div
        className="transition-all duration-800"
        style={{
          opacity: !isIndia && !tabFade ? 1 : 0,
          position: "absolute",
          inset: 0,
          zIndex: 1,
        }}
      >
        <OntarioSkyline />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 md:px-12 py-16 md:pt-24 md:pb-12">
        <SectionLabel index="02" label="Education" visible={phase >= 1} />

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
          Where I learned to build.
        </h2>

        {/* Tabs */}
        <div
          className="mt-8 flex gap-3"
          style={{
            opacity: phase >= 2 ? 1 : 0,
            transform: phase >= 2 ? "translateY(0)" : "translateY(12px)",
            transition: "all 0.8s cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          {([
            { id: "india" as const, label: "\ud83c\uddee\ud83c\uddf3 India", sub: "Gujarat, 2014 \u2013 2020" },
            { id: "canada" as const, label: "\ud83c\udde8\ud83c\udde6 Canada", sub: "Ontario, 2023 \u2013 2025" },
          ]).map((tab) => (
            <button
              key={tab.id}
              onClick={() => switchTab(tab.id)}
              className="px-5 py-3 rounded-xl cursor-pointer transition-all duration-500 text-left"
              style={{
                background:
                  activeTab === tab.id
                    ? tab.id === "india"
                      ? "rgba(170,100,200,0.08)"
                      : "rgba(80,160,190,0.08)"
                    : "rgba(150,100,200,0.02)",
                border: `1px solid ${
                  activeTab === tab.id
                    ? tab.id === "india"
                      ? "rgba(190,130,220,0.18)"
                      : "rgba(100,180,210,0.18)"
                    : "rgba(150,100,200,0.06)"
                }`,
                boxShadow:
                  activeTab === tab.id
                    ? tab.id === "india"
                      ? "0 0 25px rgba(170,100,200,0.06)"
                      : "0 0 25px rgba(80,160,190,0.06)"
                    : "none",
              }}
            >
              <div
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "1rem",
                  letterSpacing: "0.04em",
                  color:
                    activeTab === tab.id
                      ? "rgba(230,215,250,0.85)"
                      : "rgba(195,175,228,0.55)",
                  transition: "color 0.5s ease",
                }}
              >
                {tab.label}
              </div>
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.9rem",
                  color: "rgba(180,165,215,0.5)",
                  marginTop: 2,
                }}
              >
                {tab.sub}
              </div>
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div
          className="mt-8 transition-all duration-500"
          style={{
            opacity: tabFade ? 0 : phase >= 2 ? 1 : 0,
            transform: tabFade ? "translateY(12px)" : "translateY(0)",
          }}
        >
          {isIndia ? (
            <div className="space-y-5">
              {EDUCATION.india.map((edu, i) => (
                <div
                  key={i}
                  className="p-6 rounded-2xl transition-all duration-500 cursor-default"
                  style={{
                    background: "rgba(170,110,200,0.02)",
                    border: "1px solid rgba(180,120,210,0.07)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget;
                    el.style.background = "rgba(170,110,200,0.06)";
                    el.style.borderColor = "rgba(195,140,225,0.16)";
                    el.style.boxShadow = "0 12px 40px rgba(170,110,200,0.06)";
                    el.style.transform = "translateY(-3px)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget;
                    el.style.background = "rgba(170,110,200,0.02)";
                    el.style.borderColor = "rgba(180,120,210,0.07)";
                    el.style.boxShadow = "none";
                    el.style.transform = "translateY(0)";
                  }}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                    <div>
                      <h3
                        style={{
                          fontFamily: "'Cormorant Garamond', serif",
                          fontSize: "1.4rem",
                          fontWeight: 500,
                          color: "rgba(230,200,245,0.82)",
                        }}
                      >
                        {edu.degree}
                      </h3>
                      <p
                        style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: "1rem",
                          color: "rgba(215,185,235,0.72)",
                          marginTop: 2,
                        }}
                      >
                        {edu.field}
                      </p>
                      <p
                        style={{
                          fontFamily: "'Space Mono', monospace",
                          fontSize: "0.95rem",
                          color: "rgba(195,165,220,0.55)",
                          marginTop: 6,
                        }}
                      >
                        {edu.school} &middot; {edu.location}
                      </p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <span
                        style={{
                          fontFamily: "'Space Mono', monospace",
                          fontSize: "1.15rem",
                          color: "rgba(200,170,225,0.6)",
                          letterSpacing: "0.05em",
                        }}
                      >
                        {edu.years}
                      </span>
                      {edu.gpa && (
                        <p
                          style={{
                            fontFamily: "'Space Mono', monospace",
                            fontSize: "1rem",
                            color: "rgba(220,185,245,0.65)",
                            marginTop: 4,
                            fontWeight: 700,
                          }}
                        >
                          {edu.gpa}
                        </p>
                      )}
                    </div>
                  </div>
                  <p
                    className="mt-3"
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "1rem",
                      color: "rgba(195,170,220,0.52)",
                      fontStyle: "italic",
                    }}
                  >
                    {edu.note}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <div>
              <div
                className="p-6 rounded-2xl transition-all duration-500 cursor-default"
                style={{
                  background: "rgba(80,160,190,0.02)",
                  border: "1px solid rgba(100,180,210,0.08)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.background = "rgba(80,160,190,0.05)";
                  el.style.borderColor = "rgba(110,190,220,0.16)";
                  el.style.boxShadow = "0 12px 40px rgba(80,160,190,0.05)";
                  el.style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.background = "rgba(80,160,190,0.02)";
                  el.style.borderColor = "rgba(100,180,210,0.08)";
                  el.style.boxShadow = "none";
                  el.style.transform = "translateY(0)";
                }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
                  <div>
                    <h3
                      style={{
                        fontFamily: "'Cormorant Garamond', serif",
                        fontSize: "1.4rem",
                        fontWeight: 500,
                        color: "rgba(185,225,240,0.85)",
                      }}
                    >
                      {EDUCATION.canada.degree}
                    </h3>
                    <p
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "1rem",
                        color: "rgba(170,210,225,0.72)",
                        marginTop: 2,
                      }}
                    >
                      {EDUCATION.canada.field}
                    </p>
                    <p
                      style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: "0.95rem",
                        color: "rgba(150,195,215,0.55)",
                        marginTop: 6,
                      }}
                    >
                      {EDUCATION.canada.school} &middot; {EDUCATION.canada.location}
                    </p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span
                      style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: "1.15rem",
                        color: "rgba(140,200,220,0.6)",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {EDUCATION.canada.years}
                    </span>
                    <p
                      style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: "1rem",
                        color: "rgba(130,220,240,0.7)",
                        marginTop: 4,
                        fontWeight: 700,
                      }}
                    >
                      {EDUCATION.canada.gpa}
                    </p>
                  </div>
                </div>
                <p
                  className="mt-2"
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "1rem",
                    color: "rgba(140,210,230,0.62)",
                  }}
                >
                  &#10022; {EDUCATION.canada.honors}
                </p>
              </div>

              {/* Certifications */}
              <div className="mt-6">
                <p
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: "0.9rem",
                    letterSpacing: "0.3em",
                    textTransform: "uppercase",
                    color: "rgba(140,190,215,0.52)",
                  }}
                >
                  Certifications
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {EDUCATION.canada.certs.map((cert) => (
                    <span
                      key={cert}
                      className="px-3 py-1.5 rounded-full transition-all duration-500 cursor-default"
                      style={{
                        fontFamily: "'Space Mono', monospace",
                        fontSize: "0.9rem",
                        color: "rgba(150,200,220,0.6)",
                        background: "rgba(80,160,190,0.03)",
                        border: "1px solid rgba(100,180,210,0.08)",
                      }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget;
                        el.style.borderColor = "rgba(120,200,230,0.22)";
                        el.style.color = "rgba(180,225,240,0.75)";
                        el.style.background = "rgba(80,160,190,0.08)";
                        el.style.boxShadow = "0 0 14px rgba(80,160,190,0.06)";
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget;
                        el.style.borderColor = "rgba(100,180,210,0.08)";
                        el.style.color = "rgba(150,200,220,0.6)";
                        el.style.background = "rgba(80,160,190,0.03)";
                        el.style.boxShadow = "none";
                      }}
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
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
            label="Continue to Experience"
            onClick={handleContinue}
            visible={phase >= 3}
          />
        </div>
      </div>
    </div>
  );
}
