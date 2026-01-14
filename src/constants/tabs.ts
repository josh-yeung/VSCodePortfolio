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
const CppIcon = require("../assets/logos/C++_Logo.png");

export const TAB_CONFIG: Record<TabId, TabConfig> = {
  home: {
    id: "home",
    label: "home.ts",
    sidebarLabel: "home.ts",
    icon: TSIcon,
  },
  about: {
    id: "about",
    label: "about.ts",
    sidebarLabel: "about.ts",
    icon: TSIcon,
  },
  projects: {
    id: "projects",
    label: "projects.cc",
    sidebarLabel: "projects.cc",
    icon: CppIcon,
  },
  skills: {
    id: "skills",
    label: "skills.js",
    sidebarLabel: "skills.js",
    icon: JSIcon,
  },
  resume: {
    id: "resume",
    label: "resume.py",
    sidebarLabel: "resume.py",
    icon: PythonIcon,
  },
  contact: {
    id: "contact",
    label: "contact.js",
    sidebarLabel: "contact.js",
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
