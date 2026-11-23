import { ProfileData, NavItem } from "@/types";

export const navItems: NavItem[] = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Portfolio", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const profileData: ProfileData = {
  name: "Muhlisin",
  title: "Informatics Engineering Graduate | Web Developer",
  subline: "Informatics Engineering Graduate | Web Developer & IoT Enthusiast",
  degree: "S1 Teknik Informatika",
  description:
    "Fresh graduate Teknik Informatika yang berfokus pada pengembangan aplikasi web modern, sistem manajemen, serta integrasi perangkat keras IoT. Memiliki pengalaman praktis dalam membangun solusi berbasis Laravel, sistem monitoring real-time, dan otomasi.",
  email: "mkhlsma940@gmail.com",
  location: "Indonesia",
  aboutTitle: "Solusi Terintegrasi: Web & Embedded Systems",
  aboutDescription: [
    "Lulusan S1 Teknik Informatika yang memiliki ketertarikan mendalam pada rekayasa perangkat lunak dan sistem tertanam (embedded systems). Terbiasa bekerja dengan teknologi web seperti Laravel, PHP, JavaScript, dan Bootstrap, serta memiliki pengalaman langsung dalam pengembangan sistem monitoring energi berbasis IoT serta aplikasi manajemen operasional.",
    "Siap berkontribusi secara profesional baik di lingkungan korporat maupun proyek freelance dengan komitmen tinggi pada kualitas kode, keamanan data, dan efisiensi operasional.",
  ],
  stats: [
    {
      number: "S1",
      title: "Teknik Informatika",
      description: "Fondasi keilmuan software engineering & data yang terstruktur",
    },
    {
      number: "IoT + Web",
      title: "Integrasi Sistem",
      description: "Koneksi mikrokontroler hardware ke aplikasi dashboard cloud",
    },
  ],
  socials: [
    {
      platform: "GitHub",
      url: "https://github.com/Mkhls19",
      username: "github.com/mkhlsma",
      ariaLabel: "Kunjungi GitHub Muhlisin",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/muhlisin-m-51a475289",
      username: "linkedin.com/in/mkhlsma",
      ariaLabel: "Kunjungi LinkedIn Muhlisin",
    },
    {
      platform: "Email",
      url: "mailto:mkhlsma940@gmail.com",
      username: "mkhlsma940@gmail.com",
      ariaLabel: "Kirim email ke Muhlisin",
    },
  ],
};
