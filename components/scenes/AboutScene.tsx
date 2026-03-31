"use client";

import { useState, useEffect } from "react";
import { usePhase } from "@/lib/usePhase";
import { ABOUT } from "@/lib/data";
import { SectionLabel, NavigateButton } from "@/components/ui";
import DepthEnvironment from "@/components/visuals/DepthEnvironment";
import GlassCard, { GlassChip } from "@/components/visuals/GlassCard";

interface AboutSceneProps {
  onBack: () => void;
  onContinue: () => void;
}

export default function AboutScene({ onBack, onContinue }: AboutSceneProps) {
  const [entered, setEntered] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [portraitHover, setPortraitHover] = useState(false);
  const phase = usePhase([600, 1100, 1600, 2100, 2600]);

  useEffect(() => {
    const t = setTimeout(() => setEntered(true), 150);
    return () => clearTimeout(t);
  }, []);

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

  const handleContinue = () => {
    setLeaving(true);
    setTimeout(onContinue, 1200);
  };

  // Portrait parallax effect
  const portraitParallax = {
    x: (mousePos.x - 0.5) * 20,
    y: (mousePos.y - 0.5) * 20,
  };

  return (
    <div
      className="relative min-h-screen overflow-hidden"
      style={{
        opacity: entered && !leaving ? 1 : 0,
        transition: "opacity 1.2s ease-out",
      }}
    >
      {/* ENVIRONMENTAL LAYERS */}
      <DepthEnvironment scene="about" />

      {/* MAIN CONTENT LAYER */}
      <div className="relative z-20 w-full max-w-6xl mx-auto px-6 md:px-12 py-16 md:pt-24 md:pb-12">
        <SectionLabel index="01" label="About" visible={phase >= 1} />

        {/* HEADING + PORTRAIT */}
        <div className="mt-10 flex flex-col md:flex-row md:items-start md:gap-16">
          {/* Text content */}
          <div
            className="flex-1 relative z-10"
            style={{
              opacity: phase >= 1 ? 1 : 0,
              transform: phase >= 1 ? "translateY(0)" : "translateY(30px)",
              transition: "all 1.2s cubic-bezier(0.16,1,0.3,1) 0.15s",
            }}
          >
            <h2
              style={{
                fontFamily: "'Cormorant Garamond', Garamond, serif",
                fontSize: "clamp(2.8rem, 6.5vw, 4.5rem)",
                fontWeight: 300,
                lineHeight: 1.05,
                background:
                  "linear-gradient(160deg, rgba(255,250,255,0.98) 0%, rgba(230,210,255,0.92) 35%, rgba(200,170,245,0.85) 70%, rgba(180,150,235,0.78) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 0 80px rgba(200, 170, 240, 0.3)",
              }}
            >
              Hey, I&apos;m Namrata.
            </h2>
            <p
              className="mt-5"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "clamp(1.05rem, 2vw, 1.3rem)",
                lineHeight: 1.9,
                color: "rgba(230,220,250,0.8)",
                maxWidth: 620,
                fontWeight: 300,
                textShadow: "0 2px 8px rgba(0, 0, 0, 0.3)",
              }}
            >
              Software engineer who builds things that work, and occasionally things that make
              people go{" "}
              <span
                style={{
                  color: "rgba(220,180,255,0.9)",
                  fontStyle: "italic",
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "1.1em",
                }}
              >
                &ldquo;wait, that&apos;s cool.&rdquo;
              </span>{" "}
              Fueled by K-drama marathons and too many cups of lattè. Built across India and Canada:
              systems, teams, and time zones.
            </p>
          </div>

          {/* Portrait - IN THE ENVIRONMENT */}
          <div
            className="mt-10 md:mt-0 flex-shrink-0 relative"
            style={{
              opacity: phase >= 1 ? 1 : 0,
              transform: phase >= 1 
                ? `translateY(0) scale(1)` 
                : `translateY(25px) scale(0.96)`,
              transition: "all 1.4s cubic-bezier(0.16,1,0.3,1) 0.5s",
            }}
          >
            <div
              className="relative"
              style={{
                width: "clamp(220px, 24vw, 300px)",
                height: "clamp(280px, 32vw, 380px)",
              }}
              onMouseEnter={() => setPortraitHover(true)}
              onMouseLeave={() => setPortraitHover(false)}
            >
              {/* Outer energy field */}
              <div
                className="absolute pointer-events-none"
                style={{
                  inset: "-25%",
                  borderRadius: "40% 60% 65% 35% / 45% 50% 50% 55%",
                  background: portraitHover
                    ? "radial-gradient(ellipse, rgba(200, 140, 255, 0.25) 0%, rgba(170, 110, 240, 0.12) 40%, transparent 65%)"
                    : "radial-gradient(ellipse, rgba(170, 110, 240, 0.15) 0%, rgba(150, 90, 220, 0.08) 40%, transparent 65%)",
                  filter: "blur(20px)",
                  animation: "portraitAura 4s ease-in-out infinite",
                  transform: `translate(${portraitParallax.x * 0.3}px, ${portraitParallax.y * 0.3}px)`,
                  transition: "all 0.6s cubic-bezier(0.16,1,0.3,1)",
                }}
              />

              {/* Mid-layer glow */}
              <div
                className="absolute pointer-events-none"
                style={{
                  inset: "-15%",
                  borderRadius: "45% 55% 60% 40% / 40% 45% 55% 60%",
                  background: portraitHover
                    ? "radial-gradient(ellipse, rgba(220, 170, 255, 0.18) 0%, transparent 60%)"
                    : "radial-gradient(ellipse, rgba(180, 130, 240, 0.12) 0%, transparent 60%)",
                  filter: "blur(15px)",
                  transform: `translate(${portraitParallax.x * 0.5}px, ${portraitParallax.y * 0.5}px) scale(${portraitHover ? 1.08 : 1})`,
                  transition: "all 0.5s cubic-bezier(0.16,1,0.3,1)",
                }}
              />

              {/* Orbiting light particles */}
              {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                <div
                  key={`orbit-${i}`}
                  className="absolute pointer-events-none"
                  style={{
                    width: "100%",
                    height: "100%",
                    top: 0,
                    left: 0,
                    animation: `portraitOrbit ${14 + i * 2.5}s linear ${i * 2}s infinite`,
                    opacity: portraitHover ? 1 : 0.7,
                    transition: "opacity 0.5s ease",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: i % 2 === 0 ? "-8px" : "auto",
                      bottom: i % 2 !== 0 ? "-8px" : "auto",
                      left: `${10 + i * 12}%`,
                      width: portraitHover ? 7 : 5,
                      height: portraitHover ? 7 : 5,
                      borderRadius: "50%",
                      background: i % 2 === 0
                        ? "rgba(255,235,210,0.95)"
                        : "rgba(230,200,255,0.95)",
                      boxShadow: `0 0 ${12 + i * 3}px ${i % 2 === 0 ? "rgba(255,230,200,0.6)" : "rgba(210,180,255,0.6)"}`,
                      transition: "all 0.3s ease",
                    }}
                  />
                </div>
              ))}

              {/* Anime sparkles */}
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                <div
                  key={`sparkle-${i}`}
                  className="absolute pointer-events-none"
                  style={{
                    left: `${["-10%", "98%", "45%", "-15%", "105%", "25%", "85%", "8%", "55%", "-8%"][i]}`,
                    top: `${["18%", "32%", "-8%", "68%", "75%", "108%", "8%", "92%", "50%", "40%"][i]}`,
                    width: portraitHover ? [10, 8, 12, 7, 9, 8, 10, 7, 11, 8][i] : [8, 6, 10, 5, 7, 6, 8, 5, 9, 6][i],
                    height: portraitHover ? [10, 8, 12, 7, 9, 8, 10, 7, 11, 8][i] : [8, 6, 10, 5, 7, 6, 8, 5, 9, 6][i],
                    animation: `sparkleFlash ${[2.3, 3.5, 2.6, 3.8, 2.1, 4.0, 2.5, 3.3, 2.8, 3.1][i]}s ease-in-out ${[0, 1.3, 0.4, 2.3, 0.7, 1.6, 2.0, 0.2, 1.0, 1.8][i]}s infinite`,
                    transition: "all 0.3s ease",
                  }}
                >
                  {/* Four-pointed star */}
                  <div
                    className="absolute"
                    style={{
                      left: "50%",
                      top: 0,
                      width: 1.5,
                      height: "100%",
                      transform: "translateX(-50%)",
                      background: `linear-gradient(to bottom, transparent, ${i % 2 === 0 ? "rgba(255,235,210,0.95)" : "rgba(230,200,255,0.95)"} 50%, transparent)`,
                    }}
                  />
                  <div
                    className="absolute"
                    style={{
                      top: "50%",
                      left: 0,
                      height: 1.5,
                      width: "100%",
                      transform: "translateY(-50%)",
                      background: `linear-gradient(to right, transparent, ${i % 2 === 0 ? "rgba(255,235,210,0.95)" : "rgba(230,200,255,0.95)"} 50%, transparent)`,
                    }}
                  />
                  <div
                    className="absolute rounded-full"
                    style={{
                      width: 3,
                      height: 3,
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%,-50%)",
                      background: i % 2 === 0 ? "rgba(255,250,230,1)" : "rgba(240,220,255,1)",
                    }}
                  />
                </div>
              ))}

              {/* Glass frame container */}
              <div
                className="relative w-full h-full"
                style={{
                  borderRadius: "35% 65% 60% 40% / 45% 50% 50% 55%",
                  overflow: "hidden",
                  transform: `
                    translate(${portraitParallax.x}px, ${portraitParallax.y}px)
                    scale(${portraitHover ? 1.02 : 1})
                  `,
                  transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
                  boxShadow: portraitHover
                    ? "0 0 60px rgba(200, 160, 255, 0.4), 0 0 120px rgba(180, 130, 240, 0.2), inset 0 0 40px rgba(200, 170, 255, 0.15)"
                    : "0 0 50px rgba(180, 140, 240, 0.25), 0 0 100px rgba(160, 110, 230, 0.12), inset 0 0 30px rgba(180, 150, 240, 0.1)",
                }}
              >
                {/* Portrait image */}
                <img
                  src="/namrata.jpg"
                  alt="Namrata Modha"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center 25%",
                    filter: "brightness(0.92) contrast(1.12) saturate(0.88)",
                  }}
                />

                {/* Glass overlay with depth */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "linear-gradient(170deg, rgba(180, 130, 240, 0.08) 0%, rgba(140, 80, 220, 0.15) 100%)",
                    mixBlendMode: "color",
                  }}
                />

                {/* Atmospheric vignette */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "radial-gradient(ellipse at 50% 35%, transparent 40%, rgba(16, 10, 40, 0.5) 100%)",
                  }}
                />

                {/* Anime light streak */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: "linear-gradient(135deg, transparent 35%, rgba(240, 220, 255, 0.08) 48%, transparent 62%)",
                    animation: "portraitSheen 7s ease-in-out 2.5s infinite",
                  }}
                />

                {/* Edge light refraction */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    border: "2px solid rgba(220, 190, 255, 0.3)",
                    borderRadius: "35% 65% 60% 40% / 45% 50% 50% 55%",
                    boxShadow: "inset 0 0 20px rgba(200, 170, 255, 0.2)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* HIGHLIGHT CARDS WITH GLASS MATERIAL */}
        <div
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5"
          style={{
            opacity: phase >= 2 ? 1 : 0,
            transform: phase >= 2 ? "translateY(0)" : "translateY(30px)",
            transition: "all 1.1s cubic-bezier(0.16,1,0.3,1) 0.2s",
          }}
        >
          {ABOUT.highlights.map((h, i) => (
            <GlassCard
              key={i}
              depth="mid"
              variant="default"
              className="p-7 transition-all duration-700 cursor-default hover:translate-y-[-6px]"
            >
              <span style={{ fontSize: "1.6rem" }}>{h.icon}</span>
              <h3
                className="mt-4"
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "1.05rem",
                  letterSpacing: "0.05em",
                  color: "rgba(235,220,255,0.92)",
                  fontWeight: 400,
                  textShadow: "0 2px 8px rgba(0, 0, 0, 0.4)",
                }}
              >
                {h.title}
              </h3>
              <p
                className="mt-3"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.95rem",
                  lineHeight: 1.75,
                  color: "rgba(215,200,240,0.75)",
                  fontWeight: 300,
                }}
              >
                {h.desc}
              </p>
            </GlassCard>
          ))}
        </div>

        {/* TECH STACK CHIPS */}
        <div
          className="mt-10 flex flex-wrap gap-3"
          style={{
            opacity: phase >= 3 ? 1 : 0,
            transform: phase >= 3 ? "translateY(0)" : "translateY(12px)",
            transition: "all 1s cubic-bezier(0.16,1,0.3,1) 0.1s",
          }}
        >
          {ABOUT.techStack.map((tech, i) => (
            <GlassChip
              key={tech}
              className="px-4 py-2 transition-all duration-500 cursor-default hover:translate-y-[-2px]"
            >
              <span
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.95rem",
                  letterSpacing: "0.05em",
                  color: "rgba(220,200,250,0.8)",
                }}
              >
                {tech}
              </span>
            </GlassChip>
          ))}
        </div>

        {/* FLOURISH DIVIDER */}
        <div
          className="mt-12 flex items-center gap-5"
          style={{
            opacity: phase >= 4 ? 1 : 0,
            transition: "all 1.3s ease-out 0.4s",
          }}
        >
          <div
            className="h-px flex-1"
            style={{
              background: "linear-gradient(to right, transparent, rgba(200, 170, 250, 0.2), transparent)",
            }}
          />
          <span
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.05rem",
              fontStyle: "italic",
              letterSpacing: "0.18em",
              color: "rgba(210,180,245,0.5)",
            }}
          >
            {ABOUT.flourish}
          </span>
          <div
            className="h-px flex-1"
            style={{
              background: "linear-gradient(to right, transparent, rgba(200, 170, 250, 0.2), transparent)",
            }}
          />
        </div>

        {/* NAVIGATION */}
        <div className="mt-12 flex items-center gap-5">
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