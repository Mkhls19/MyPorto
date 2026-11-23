import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhlisin | Informatics Engineering & Web Developer",
  description:
    "Portofolio resmi Muhlisin - Fresh graduate Teknik Informatika, Web Developer (Laravel), dan IoT Enthusiast.",
  authors: [{ name: "Muhlisin" }],
  keywords: [
    "Muhlisin",
    "Web Developer",
    "Teknik Informatika",
    "Laravel",
    "PHP",
    "React",
    "Next.js",
    "Tailwind CSS",
    "IoT",
    "ESP32",
    "Portfolio",
  ],
  openGraph: {
    title: "Muhlisin | Informatics Engineering & Web Developer",
    description:
      "Portofolio resmi Muhlisin - Fresh graduate Teknik Informatika yang berfokus pada pengembangan aplikasi web modern dan integrasi IoT.",
    type: "website",
    locale: "id_ID",
    url: "https://muhlisin.dev",
    siteName: "Muhlisin Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhlisin | Informatics Engineering & Web Developer",
    description:
      "Portofolio resmi Muhlisin - Fresh graduate Teknik Informatika, Web Developer (Laravel), dan IoT Enthusiast.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`scroll-smooth ${plusJakartaSans.variable}`}>
      <body className="font-sans antialiased text-slate-100 bg-[#070b14] relative">
        {children}
      </body>
    </html>
  );
}
