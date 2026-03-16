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

        {/* Heading + Photo */}
        <div className="mt-7 flex flex-col md:flex-row md:items-center md:gap-12">
          <div
            className="flex-1"
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
              Fueled by K-drama marathons and too many cups of latt&egrave;. Built across India and Canada:
              systems, teams, and time zones.
            </p>
          </div>

          {/* Portrait with anime effects */}
          <div
            className="mt-8 md:mt-0 flex-shrink-0"
            style={{
              opacity: phase >= 1 ? 1 : 0,
              transform: phase >= 1 ? "translateY(0) scale(1)" : "translateY(18px) scale(0.97)",
              transition: "all 1.3s cubic-bezier(0.16,1,0.3,1) 0.4s",
            }}
          >
            <div
              className="relative mx-auto md:mx-0"
              style={{
                width: "clamp(200px, 22vw, 260px)",
                height: "clamp(250px, 28vw, 330px)",
              }}
            >
              {/* Outer pulsing aura */}
              <div
                className="absolute pointer-events-none"
                style={{
                  inset: "-18%",
                  borderRadius: "32% 68% 55% 45% / 40% 45% 55% 60%",
                  background: "radial-gradient(ellipse, rgba(150,80,220,0.12) 0%, rgba(150,80,220,0.04) 45%, transparent 70%)",
                  animation: "portraitAura 4s ease-in-out infinite",
                  filter: "blur(12px)",
                }}
              />

              {/* Orbiting sparkle ring */}
              {[0, 1, 2, 3, 4, 5].map((i) => (
                <div
                  key={`orbit-${i}`}
                  className="absolute pointer-events-none"
                  style={{
                    width: "100%",
                    height: "100%",
                    top: 0,
                    left: 0,
                    animation: `portraitOrbit ${12 + i * 2}s linear ${i * 1.5}s infinite`,
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: i % 2 === 0 ? "-6px" : "auto",
                      bottom: i % 2 !== 0 ? "-6px" : "auto",
                      left: `${15 + i * 12}%`,
                      width: i % 3 === 0 ? 5 : 3,
                      height: i % 3 === 0 ? 5 : 3,
                      borderRadius: "50%",
                      background: i % 2 === 0
                        ? "rgba(255,225,195,0.9)"
                        : "rgba(210,180,255,0.9)",
                      boxShadow: `0 0 ${8 + i * 2}px ${i % 2 === 0 ? "rgba(255,220,180,0.5)" : "rgba(190,160,240,0.5)"}`,
                    }}
                  />
                </div>
              ))}

              {/* Floating anime sparkles around the photo */}
              {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                <div
                  key={`sparkle-${i}`}
                  className="absolute pointer-events-none"
                  style={{
                    left: `${["-8%", "95%", "50%", "-12%", "102%", "30%", "80%", "10%"][i]}`,
                    top: `${["20%", "35%", "-6%", "65%", "70%", "105%", "10%", "90%"][i]}`,
                    width: [8, 6, 10, 5, 7, 6, 8, 5][i],
                    height: [8, 6, 10, 5, 7, 6, 8, 5][i],
                    animation: `sparkleFlash ${[2.5, 3.2, 2.8, 3.5, 2.2, 3.8, 2.6, 3.1][i]}s ease-in-out ${[0, 1.2, 0.5, 2.1, 0.8, 1.5, 1.8, 0.3][i]}s infinite`,
                  }}
                >
                  <div
                    className="absolute"
                    style={{
                      left: "50%",
                      top: 0,
                      width: 1,
                      height: "100%",
                      transform: "translateX(-50%)",
                      background: `linear-gradient(to bottom, transparent, ${i % 2 === 0 ? "rgba(255,225,195,0.9)" : "rgba(210,180,255,0.9)"} 50%, transparent)`,
                    }}
                  />
                  <div
                    className="absolute"
                    style={{
                      top: "50%",
                      left: 0,
                      height: 1,
                      width: "100%",
                      transform: "translateY(-50%)",
                      background: `linear-gradient(to right, transparent, ${i % 2 === 0 ? "rgba(255,225,195,0.9)" : "rgba(210,180,255,0.9)"} 50%, transparent)`,
                    }}
                  />
                  <div
                    className="absolute rounded-full"
                    style={{
                      width: 2,
                      height: 2,
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%,-50%)",
                      background: i % 2 === 0 ? "rgba(255,240,220,1)" : "rgba(230,210,255,1)",
                    }}
                  />
                </div>
              ))}

              {/* Floating dust motes */}
              {[0, 1, 2, 3, 4].map((i) => (
                <div
                  key={`dust-${i}`}
                  className="absolute pointer-events-none rounded-full"
                  style={{
                    left: `${[-5, 105, 50, -10, 95][i]}%`,
                    top: `${[30, 50, 110, 80, 15][i]}%`,
                    width: [2, 2.5, 1.5, 2, 1.5][i],
                    height: [2, 2.5, 1.5, 2, 1.5][i],
                    background: i % 2 === 0
                      ? "rgba(250,220,180,0.6)"
                      : "rgba(200,175,240,0.6)",
                    boxShadow: `0 0 6px ${i % 2 === 0 ? "rgba(250,220,180,0.3)" : "rgba(190,160,235,0.3)"}`,
                    animation: `dustDrift${i % 3} ${14 + i * 3}s ease-in-out ${i * 2}s infinite alternate`,
                  }}
                />
              ))}

              {/* Photo frame */}
              <div
                className="relative w-full h-full"
                style={{
                  borderRadius: "32% 68% 55% 45% / 40% 45% 55% 60%",
                  overflow: "hidden",
                  border: "1.5px solid rgba(175,115,235,0.2)",
                  boxShadow: "0 0 40px rgba(150,80,220,0.15), 0 0 80px rgba(150,80,220,0.08), inset 0 0 30px rgba(150,80,220,0.05)",
                  animation: "monumentFloat 8s ease-in-out infinite alternate",
                }}
              >
                <img
                  src="/namrata.jpg"
                  alt="Namrata Modha"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center 20%",
                    filter: "brightness(0.9) contrast(1.08) saturate(0.85)",
                  }}
                />
                {/* Purple color blend */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "linear-gradient(170deg, rgba(150,80,220,0.06) 0%, rgba(100,50,180,0.12) 100%)",
                    mixBlendMode: "color",
                  }}
                />
                {/* Vignette */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "radial-gradient(ellipse at 50% 30%, transparent 45%, rgba(16,10,40,0.45) 100%)",
                  }}
                />
                {/* Anime light streak */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "linear-gradient(135deg, transparent 30%, rgba(220,200,255,0.06) 45%, transparent 60%)",
                    animation: "portraitSheen 6s ease-in-out 2s infinite",
                  }}
                />
              </div>
            </div>
          </div>
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
