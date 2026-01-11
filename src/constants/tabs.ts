export type TabId = "home" | "about" | "projects" | "skills" | "resume" | "contact";

interface TabConfig {
  id: TabId;
  label: string;
  sidebarLabel: string;
  icon: string;
}

const PythonIcon = require("../assets/icons/PythonIcon.png");
const TSIcon = require("../assets/icons/TSIcon.png");
const JSIcon = require("../assets/icons/JSIcon.png");

export const TAB_CONFIG: Record<TabId, TabConfig> = {
  home: {
    id: "home",
    label: "Home.tsx",
    sidebarLabel: "Home.tsx",
    icon: PythonIcon,
  },
  about: {
    id: "about",
    label: "About.tsx",
    sidebarLabel: "About.tsx",
    icon: TSIcon,
  },
  projects: {
    id: "projects",
    label: "Projects.tsx",
    sidebarLabel: "Projects.tsx",
    icon: JSIcon,
  },
  skills: {
    id: "skills",
    label: "Skills.ts",
    sidebarLabel: "Skills.ts",
    icon: JSIcon,
  },
  resume: {
    id: "resume",
    label: "Resume.tsx",
    sidebarLabel: "Resume.tsx",
    icon: TSIcon,
  },
  contact: {
    id: "contact",
    label: "Contact.tsx",
    sidebarLabel: "Contact.tsx",
    icon: JSIcon,
  },
};

export const TAB_ORDER: TabId[] = [
  "home",
  "about",
  "projects",
  "skills",
  "resume",
  "contact",
];

export const SIDEBAR_FILES: TabConfig[] = TAB_ORDER.map((tabId) => TAB_CONFIG[tabId]);
