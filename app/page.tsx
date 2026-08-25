"use client";

import { useState, useCallback } from "react";
import type { Scene } from "@/lib/scenes";
import { UtilityBar } from "@/components/ui";
import {
  AboutScene,
  EducationScene,
  ExperienceScene,
  ProjectsScene,
  RubinScoutScene,
  MyHealthQRScene,
  MediLightScene,
  OrderServiceScene,
  ContactScene,
} from "@/components/scenes";

type ProjectView = "hub" | "rubin-scout" | "myhealthqr" | "medilight" | "order-service";

export default function Portfolio() {
  const [scene, setScene] = useState<Scene>("about");
  const [projectView, setProjectView] = useState<ProjectView>("hub");

  const navigateTo = useCallback((target: Scene) => {
    setScene(target);
    setProjectView("hub");
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const openProject = useCallback((project: Exclude<ProjectView, "hub">) => {
    setProjectView(project);
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const backToHub = useCallback(() => {
    setProjectView("hub");
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="relative w-full min-h-screen" style={{ background: "#06031a" }}>
      <UtilityBar currentScene={scene} onNavigate={navigateTo} />

      {scene === "about" && (
        <AboutScene onContinue={() => navigateTo("education")} />
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

      {scene === "projects" && projectView === "hub" && (
        <ProjectsScene
          onBack={() => navigateTo("experience")}
          onContinue={() => navigateTo("contact")}
          onSelectProject={openProject}
        />
      )}

      {scene === "projects" && projectView === "rubin-scout" && (
        <RubinScoutScene onBack={backToHub} />
      )}

      {scene === "projects" && projectView === "myhealthqr" && (
        <MyHealthQRScene onBack={backToHub} />
      )}

      {scene === "projects" && projectView === "medilight" && (
        <MediLightScene onBack={backToHub} />
      )}

      {scene === "projects" && projectView === "order-service" && (
        <OrderServiceScene onBack={backToHub} />
      )}

      {scene === "contact" && (
        <ContactScene onBack={() => navigateTo("projects")} />
      )}
    </div>
  );
}
