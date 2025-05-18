// thoda zada ts ho gya idhar
export enum SkillNames {
  JS = "js",
  TS = "ts",
  HTML = "html",
  CSS = "css",
  REACT = "react",
  REACT_NATIVE = "react_native",
  FLUTTER = "flutter",
  TAILWIND = "tailwind",
  PYTHON = "python",
  FIREBASE = "firebase",
  SUPABASE = "supabase",
  GIT = "git",
  GITHUB = "github",
  VSCODE = "vscode",
  ARDUINO = "arduino",
  IOT = "iot",
  ML = "ml",
}
export type Skill = {
  id: number;
  name: string;
  label: string;
  shortDescription: string;
  color: string;
  icon: string;
};
export const SKILLS: Record<SkillNames, Skill> = {
  [SkillNames.JS]: {
    id: 1,
    name: "js",
    label: "JavaScript",
    shortDescription: "Building interactive web experiences with modern JavaScript",
    color: "#f0db4f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  [SkillNames.TS]: {
    id: 2,
    name: "ts",
    label: "TypeScript",
    shortDescription: "Adding type safety to JavaScript applications",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  [SkillNames.HTML]: {
    id: 3,
    name: "html",
    label: "HTML",
    shortDescription: "Creating structured and semantic web content",
    color: "#e34c26",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  [SkillNames.CSS]: {
    id: 4,
    name: "css",
    label: "CSS",
    shortDescription: "Styling beautiful and responsive user interfaces",
    color: "#563d7c",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  [SkillNames.REACT]: {
    id: 5,
    name: "react",
    label: "React",
    shortDescription: "Building dynamic user interfaces with React",
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  [SkillNames.REACT_NATIVE]: {
    id: 6,
    name: "react_native",
    label: "React Native",
    shortDescription: "Developing cross-platform mobile applications",
    color: "#61dafb",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  [SkillNames.FLUTTER]: {
    id: 7,
    name: "flutter",
    label: "Flutter",
    shortDescription: "Creating beautiful native apps with Flutter",
    color: "#02569b",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
  },
  [SkillNames.TAILWIND]: {
    id: 8,
    name: "tailwind",
    label: "Tailwind CSS",
    shortDescription: "Building modern designs with utility-first CSS",
    color: "#38bdf8",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },
  [SkillNames.PYTHON]: {
    id: 9,
    name: "python",
    label: "Python",
    shortDescription: "Developing backend solutions and ML applications",
    color: "#3776ab",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  [SkillNames.FIREBASE]: {
    id: 10,
    name: "firebase",
    label: "Firebase",
    shortDescription: "Building scalable backend solutions with Firebase",
    color: "#ffca28",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  },
  [SkillNames.SUPABASE]: {
    id: 11,
    name: "supabase",
    label: "Supabase",
    shortDescription: "Creating powerful backend solutions with Supabase",
    color: "#3ecf8e",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg",
  },
  [SkillNames.GIT]: {
    id: 12,
    name: "git",
    label: "Git",
    shortDescription: "Version control and collaboration",
    color: "#f1502f",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  [SkillNames.GITHUB]: {
    id: 13,
    name: "github",
    label: "GitHub",
    shortDescription: "Code hosting and collaboration platform",
    color: "#000000",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  [SkillNames.VSCODE]: {
    id: 14,
    name: "vscode",
    label: "VS Code",
    shortDescription: "Powerful code editor for development",
    color: "#007acc",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  },
  [SkillNames.ARDUINO]: {
    id: 15,
    name: "arduino",
    label: "Arduino",
    shortDescription: "Building IoT and embedded systems",
    color: "#00979d",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg",
  },
  [SkillNames.IOT]: {
    id: 16,
    name: "iot",
    label: "IoT",
    shortDescription: "Developing connected devices and smart systems",
    color: "#00a4ef",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg",
  },
  [SkillNames.ML]: {
    id: 17,
    name: "ml",
    label: "Machine Learning",
    shortDescription: "Building intelligent applications with ML",
    color: "#ff6f00",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  },
};

export const themeDisclaimers = {
  light: [
    "Warning: Light mode emits a gazillion lumens of pure radiance!",
    "Caution: Light mode ahead! Please don't try this at home.",
    "Only trained professionals can handle this much brightness. Proceed with sunglasses!",
    "Brace yourself! Light mode is about to make everything shine brighter than your future.",
    "Flipping the switch to light mode... Are you sure your eyes are ready for this?",
  ],
  dark: [
    "Light mode? I thought you went insane... but welcome back to the dark side!",
    "Switching to dark mode... How was life on the bright side?",
    "Dark mode activated! Thanks you from the bottom of my heart, and my eyes too.",
    "Welcome back to the shadows. How was life out there in the light?",
    "Dark mode on! Finally, someone who understands true sophistication.",
  ],
};

