"use client";

import { PERSONAL } from "@/lib/data";
import type { Scene } from "@/lib/scenes";
import { SCENE_ORDER, SCENE_META } from "@/lib/scenes";

interface UtilityBarProps {
  visible: boolean;
  currentScene: Scene;
  onNavigate: (scene: Scene) => void;
}

const NAV_ITEMS = [
  { label: "Resume", icon: "CV", href: "/Namrata_Modha.pdf", download: true },
  { label: "GitHub", icon: "GH", href: PERSONAL.github },
  { label: "LinkedIn", icon: "in", href: PERSONAL.linkedin },
  { label: "Email", icon: "@", href: `mailto:${PERSONAL.email}` },
];

const NAVIGABLE_SCENES = SCENE_ORDER.filter((s) => s !== "gate");

export default function UtilityBar({ visible, currentScene, onNavigate }: UtilityBarProps) {
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-3"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(-20px)",
        transition: "all 1s cubic-bezier(0.4,0,0.2,1) 0.4s",
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      {/* Left: Scene navigation dots */}
      <div className="flex items-center gap-1.5">
        {NAVIGABLE_SCENES.map((sceneId) => {
          const meta = SCENE_META[sceneId];
          const isActive = currentScene === sceneId;
          return (
            <button
              key={sceneId}
              onClick={() => onNavigate(sceneId)}
              className="relative flex items-center gap-1.5 px-2.5 py-1.5 rounded-full cursor-pointer transition-all duration-500"
              style={{
                background: isActive
                  ? "rgba(150,80,220,0.14)"
                  : "rgba(130,60,190,0.04)",
                border: `1px solid ${
                  isActive
                    ? "rgba(175,115,235,0.28)"
                    : "rgba(150,80,210,0.06)"
                }`,
                boxShadow: isActive
                  ? "0 0 20px rgba(150,80,220,0.1)"
                  : "none",
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  const el = e.currentTarget;
                  el.style.background = "rgba(145,75,210,0.1)";
                  el.style.borderColor = "rgba(175,115,230,0.2)";
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  const el = e.currentTarget;
                  el.style.background = "rgba(130,60,190,0.04)";
                  el.style.borderColor = "rgba(150,80,210,0.06)";
                }
              }}
            >
              <span
                className="rounded-full transition-all duration-500"
                style={{
                  width: isActive ? 7 : 5,
                  height: isActive ? 7 : 5,
                  background: isActive
                    ? "rgba(200,170,245,0.85)"
                    : "rgba(180,150,225,0.3)",
                  boxShadow: isActive
                    ? "0 0 8px rgba(180,130,240,0.4)"
                    : "none",
                }}
              />
              <span
                className="transition-all duration-500 hidden sm:inline"
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: "0.68rem",
                  letterSpacing: "0.06em",
                  color: isActive
                    ? "rgba(225,210,250,0.85)"
                    : "rgba(185,160,225,0.4)",
                }}
              >
                {meta.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Right: External links */}
      <div className="flex items-center gap-2">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target={
              item.download
                ? undefined
                : item.href.startsWith("mailto")
                  ? undefined
                  : "_blank"
            }
            rel="noopener noreferrer"
            download={item.download ? true : undefined}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs transition-all duration-500"
            style={{
              background: "rgba(130,60,190,0.06)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(150,80,210,0.1)",
              color: "rgba(195,170,230,0.65)",
              fontFamily: "'Space Mono', monospace",
              fontSize: "0.68rem",
              letterSpacing: "0.08em",
              textDecoration: "none",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.background = "rgba(145,75,210,0.15)";
              el.style.borderColor = "rgba(175,115,230,0.3)";
              el.style.color = "rgba(230,215,250,0.9)";
              el.style.boxShadow = "0 0 24px rgba(145,75,210,0.12)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.background = "rgba(130,60,190,0.06)";
              el.style.borderColor = "rgba(150,80,210,0.1)";
              el.style.color = "rgba(195,170,230,0.65)";
              el.style.boxShadow = "none";
            }}
          >
            <span style={{ fontSize: "0.6rem", fontWeight: 700, opacity: 0.7 }}>{item.icon}</span>
            <span className="hidden md:inline">{item.label}</span>
          </a>
        ))}
      </div>
    </nav>
  );
}
