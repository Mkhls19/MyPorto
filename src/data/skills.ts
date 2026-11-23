import { SkillCategory } from "@/types";

export const skillsData: SkillCategory[] = [
  {
    id: "backend",
    title: "Backend & Bahasa",
    iconName: "server",
    iconColor: "blue",
    skills: [
      { name: "PHP" },
      { name: "Laravel", highlight: true },
      { name: "JavaScript" },
      { name: "SQL" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend & Styling",
    iconName: "layout",
    iconColor: "cyan",
    skills: [
      { name: "Bootstrap" },
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "Tailwind CSS", highlight: true },
    ],
  },
  {
    id: "tools",
    title: "Tools & Version Control",
    iconName: "terminal",
    iconColor: "dark",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "SQLite" },
      { name: "MySQL" },
      { name: "Linux VPS" },
    ],
  },
  {
    id: "iot",
    title: "IoT & Hardware",
    iconName: "cpu",
    iconColor: "amber",
    skills: [
      { name: "ESP32", highlight: true },
      { name: "MQTT Protocol" },
      { name: "Sensor Integration" },
    ],
  },
];
