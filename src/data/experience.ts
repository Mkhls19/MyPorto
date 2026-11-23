import { WorkExperience, Certification } from "@/types";

export const experienceData: WorkExperience[] = [
  {
    role: "Web Developer Intern",
    company: "Dinas Komunikasi dan Informatika (Diskominfo) Kab. Kediri",
    division: "Divisi Aplikasi Informatika (Aptika)",
    badge: "Magang",
    description:
      "Berkolaborasi dalam mendukung pengembangan dan pemeliharaan aplikasi berbasis web di lingkungan instansi pemerintahan daerah guna meningkatkan efisiensi tata kelola layanan publik.",
  },
];

export const certificationsData: Certification[] = [
  {
    title: "Sertifikasi Dicoding Indonesia",
    issuer: "Dicoding Indonesia",
    description: "Kurikulum terstruktur bidang Web & Back-End Application Development.",
    iconType: "course",
  },
  {
    title: "Pelatihan & Workshop IoT",
    issuer: "Kompetensi IoT",
    description: "Integrasi hardware ESP32, telemetri sensor, dan protokol broker MQTT.",
    iconType: "badge",
  },
];
