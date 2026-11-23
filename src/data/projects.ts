import { Project } from "@/types";

export const projectsData: Project[] = [
  {
    id: "plts-monitoring",
    title: "Web-Based PLTS Off-Grid Energy Monitoring & Prediction",
    category: "Web & IoT",
    description:
      "Solusi pemantauan energi surya secara real-time untuk mengatasi masalah ketiadaan data energi yang tersimpan dan termonitor dengan baik. Dilengkapi fitur pencatatan histori serta logika forecasting (prediksi energi harian, mingguan, dan bulanan).",
    technologies: ["Laravel", "MySQL", "MQTT", "Chart.js", "Bootstrap", "VPS IDCloudHost"],
    image: "/images/projects/plts-preview.svg",
    imageAlt: "Preview PLTS Off-Grid Energy Monitoring & Prediction",
    demoUrl: "#",
    repoUrl: "#",
  },
  {
    id: "simakos",
    title: "SIMKOS (Sistem Informasi Manajemen Kost)",
    category: "Management System",
    description:
      "Aplikasi manajemen kos komprehensif untuk pemilik dan penghuni kos. Menyelesaikan masalah kurangnya manajemen operasional dengan fitur pengelolaan kamar, pendataan penghuni, dan pencatatan status pembayaran secara terpusat.",
    technologies: ["Laravel", "MySQL", "Bootstrap", "DataTables"],
    image: "/images/projects/simakos-preview.svg",
    imageAlt: "Preview SIMAKOS Kost Management System",
    demoUrl: "#",
    repoUrl: "#",
  },
];
