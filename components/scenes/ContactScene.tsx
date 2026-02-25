"use client";

import { useState, useEffect } from "react";
import { usePhase } from "@/lib/usePhase";
import { PERSONAL } from "@/lib/data";
import { SectionLabel, NavigateButton } from "@/components/ui";
import SceneBackground from "@/components/visuals/SceneBackground";

interface ContactSceneProps {
  onBack: () => void;
}

export default function ContactScene({ onBack }: ContactSceneProps) {
  const [entered, setEntered] = useState(false);
  const phase = usePhase([500, 1000, 1500, 2000, 2500]);

  useEffect(() => {
    const t = setTimeout(() => setEntered(true), 150);
    return () => clearTimeout(t);
  }, []);

  const links = [
    {
      label: "LinkedIn",
      href: PERSONAL.linkedin,
      icon: "\u25c8",
      desc: "Let\u2019s connect",
    },
    {
      label: "GitHub",
      href: PERSONAL.github,
      icon: "\u2318",
      desc: "See the code",
    },
    {
      label: "Email",
      href: `mailto:${PERSONAL.email}`,
      icon: "\u25c7",
      desc: PERSONAL.email,
    },
  ];

  return (
    <div
      className="relative min-h-screen overflow-hidden flex items-center justify-center"
      style={{
        opacity: entered ? 1 : 0,
        transition: "opacity 1.2s ease-out",
      }}
    >
      <SceneBackground
        gradient="linear-gradient(175deg,#0a0625 0%,#140e38 25%,#1c1448 45%,#181240 60%,#120e35 78%,#080625 92%,#04031a 100%)"
        hue={270}
        bokehCount={16}
        dustCount={30}
        petalCount={10}
        sparkleCount={10}
        glows={[
          { size: 350, x: "50%", y: "40%", intensity: 0.9 },
          { size: 200, x: "50%", y: "45%", intensity: 1.2 },
        ]}
      />

      <div className="relative z-10 text-center px-6 max-w-2xl md:pt-24 md:pb-12">
        <SectionLabel index="05" label="Contact" visible={phase >= 1} />

        <h2
          className="mt-8"
          style={{
            fontFamily: "'Cormorant Garamond', Garamond, serif",
            fontSize: "clamp(2.4rem, 5.5vw, 3.8rem)",
            fontWeight: 300,
            lineHeight: 1.1,
            background:
              "linear-gradient(160deg, rgba(255,248,255,0.95) 0%, rgba(225,200,250,0.88) 40%, rgba(195,155,235,0.78) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            opacity: phase >= 1 ? 1 : 0,
            transform: phase >= 1 ? "translateY(0)" : "translateY(25px)",
            transition: "all 1.2s cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          Let&apos;s build something together.
        </h2>

        <p
          className="mt-4"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "1.15rem",
            lineHeight: 1.7,
            color: "rgba(210,195,235,0.72)",
            fontWeight: 300,
            opacity: phase >= 2 ? 1 : 0,
            transform: phase >= 2 ? "translateY(0)" : "translateY(12px)",
            transition: "all 1s cubic-bezier(0.16,1,0.3,1) 0.1s",
          }}
        >
          Currently open to full-time roles in software engineering, backend
          development, and systems architecture. Based in Ontario, Canada.
        </p>

        {/* Links */}
        <div
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          style={{
            opacity: phase >= 3 ? 1 : 0,
            transform: phase >= 3 ? "translateY(0)" : "translateY(15px)",
            transition: "all 1s cubic-bezier(0.16,1,0.3,1) 0.15s",
          }}
        >
          {links.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="group flex flex-col items-center gap-2 px-8 py-5 rounded-2xl transition-all duration-600 cursor-pointer"
              style={{
                background: "rgba(150,80,220,0.03)",
                border: "1px solid rgba(155,90,215,0.08)",
                opacity: phase >= 3 ? 1 : 0,
                animation: phase >= 3 ? `tagFloat 0.7s ease-out ${i * 0.12}s both` : "none",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.background = "rgba(150,80,220,0.08)";
                el.style.borderColor = "rgba(175,115,235,0.2)";
                el.style.boxShadow = "0 15px 45px rgba(150,80,220,0.08)";
                el.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.background = "rgba(150,80,220,0.03)";
                el.style.borderColor = "rgba(155,90,215,0.08)";
                el.style.boxShadow = "none";
                el.style.transform = "translateY(0)";
              }}
            >
              <span
                style={{
                  fontSize: "1.4rem",
                  color: "rgba(195,165,235,0.72)",
                }}
              >
                {link.icon}
              </span>
              <span
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "1rem",
                  letterSpacing: "0.08em",
                  color: "rgba(220,200,245,0.7)",
                }}
              >
                {link.label}
              </span>
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "1.15rem",
                  color: "rgba(185,165,220,0.52)",
                }}
              >
                {link.desc}
              </span>
            </a>
          ))}
        </div>

        {/* Resume download */}
        <div
          className="mt-8"
          style={{
            opacity: phase >= 4 ? 1 : 0,
            transform: phase >= 4 ? "translateY(0)" : "translateY(10px)",
            transition: "all 1s ease-out 0.2s",
          }}
        >
          <a
            href="/Namrata_Modha.pdf"
            download
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-500 cursor-pointer"
            style={{
              background: "rgba(150,80,220,0.06)",
              border: "1px solid rgba(155,90,215,0.12)",
              fontFamily: "'Space Mono', monospace",
              fontSize: "1.15rem",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "rgba(195,165,235,0.72)",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.background = "rgba(150,80,220,0.12)";
              el.style.borderColor = "rgba(175,115,235,0.25)";
              el.style.color = "rgba(230,215,250,0.85)";
              el.style.boxShadow = "0 0 30px rgba(150,80,220,0.1)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.background = "rgba(150,80,220,0.06)";
              el.style.borderColor = "rgba(155,90,215,0.12)";
              el.style.color = "rgba(195,165,235,0.68)";
              el.style.boxShadow = "none";
            }}
          >
            &#10515; Download Resume
          </a>
        </div>

        {/* Back navigation */}
        <div
          className="mt-10 flex justify-center"
          style={{
            opacity: phase >= 4 ? 1 : 0,
            transform: phase >= 4 ? "translateY(0)" : "translateY(10px)",
            transition: "all 1s ease-out 0.15s",
          }}
        >
          <NavigateButton
            label="Back"
            onClick={onBack}
            direction="back"
            visible={phase >= 4}
          />
        </div>

        {/* Closing whisper */}
        <p
          className="mt-16"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "0.9rem",
            fontStyle: "italic",
            letterSpacing: "0.15em",
            color: "rgba(180,150,220,0.32)",
            opacity: phase >= 5 ? 1 : 0,
            transition: "opacity 2s ease-out 0.5s",
          }}
        >
          built with Next.js, Framer Motion, and a lot of espresso &#10022;
        </p>
      </div>
    </div>
  );
}
