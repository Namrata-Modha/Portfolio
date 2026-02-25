"use client";

import { useState, useCallback } from "react";
import type { Scene } from "@/lib/scenes";
import { UtilityBar } from "@/components/ui";
import {
  GateScene,
  AboutScene,
  EducationScene,
  ExperienceScene,
  ProjectsScene,
  ContactScene,
} from "@/components/scenes";

export default function Portfolio() {
  const [scene, setScene] = useState<Scene>("gate");

  const navigateTo = useCallback((target: Scene) => {
    setScene(target);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="relative w-full min-h-screen" style={{ background: "#06031a" }}>
      <UtilityBar
        visible={scene !== "gate"}
        currentScene={scene}
        onNavigate={navigateTo}
      />

      {scene === "gate" && (
        <GateScene onEnter={() => navigateTo("about")} />
      )}

      {scene === "about" && (
        <AboutScene
          onBack={() => navigateTo("gate")}
          onContinue={() => navigateTo("education")}
        />
      )}

      {scene === "education" && (
        <EducationScene
          onBack={() => navigateTo("about")}
          onContinue={() => navigateTo("experience")}
        />
      )}

      {scene === "experience" && (
        <ExperienceScene
          onBack={() => navigateTo("education")}
          onContinue={() => navigateTo("projects")}
        />
      )}

      {scene === "projects" && (
        <ProjectsScene
          onBack={() => navigateTo("experience")}
          onContinue={() => navigateTo("contact")}
        />
      )}

      {scene === "contact" && (
        <ContactScene onBack={() => navigateTo("projects")} />
      )}
    </div>
  );
}
