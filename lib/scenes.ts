export type Scene =
  | "gate"
  | "about"
  | "education"
  | "experience"
  | "projects"
  | "contact";

export const SCENE_ORDER: Scene[] = [
  "gate",
  "about",
  "education",
  "experience",
  "projects",
  "contact",
];

export interface SceneMeta {
  id: Scene;
  label: string;
  index: string;
}

export const SCENE_META: Record<Scene, SceneMeta> = {
  gate: { id: "gate", label: "Enter", index: "00" },
  about: { id: "about", label: "About", index: "01" },
  education: { id: "education", label: "Education", index: "02" },
  experience: { id: "experience", label: "Experience", index: "03" },
  projects: { id: "projects", label: "Projects", index: "04" },
  contact: { id: "contact", label: "Contact", index: "05" },
};

export function getNextScene(current: Scene): Scene | null {
  const idx = SCENE_ORDER.indexOf(current);
  if (idx === -1 || idx >= SCENE_ORDER.length - 1) return null;
  return SCENE_ORDER[idx + 1];
}

export function getPrevScene(current: Scene): Scene | null {
  const idx = SCENE_ORDER.indexOf(current);
  if (idx <= 0) return null;
  return SCENE_ORDER[idx - 1];
}
