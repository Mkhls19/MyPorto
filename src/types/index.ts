export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  username: string;
  ariaLabel: string;
}

export interface ProfileData {
  name: string;
  title: string;
  subline: string;
  degree: string;
  description: string;
  email: string;
  location: string;
  aboutTitle: string;
  aboutDescription: string[];
  stats: {
    number: string;
    title: string;
    description: string;
  }[];
  socials: SocialLink[];
}

export interface SkillCategory {
  id: string;
  title: string;
  iconName: "server" | "layout" | "terminal" | "cpu";
  iconColor: "blue" | "cyan" | "dark" | "amber";
  skills: {
    name: string;
    highlight?: boolean;
  }[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  image: string;
  imageAlt: string;
  demoUrl?: string;
  repoUrl?: string;
}

export interface WorkExperience {
  role: string;
  company: string;
  division?: string;
  badge: string;
  description: string;
}

export interface Certification {
  title: string;
  issuer: string;
  description: string;
  iconType: "course" | "badge";
}
