# Portofolio Profesional Muhlisin 🚀

Website portofolio pribadi modern yang dibangun menggunakan **Next.js (App Router)**, **TypeScript**, **React**, dan **Tailwind CSS**. Merepresentasikan profil **Muhlisin** sebagai lulusan S1 Teknik Informatika (*Informatics Engineering Graduate*) dengan fokus keahlian di bidang **Web Development** dan **Software Development**.

---

## 🌟 Fitur Utama

- **Modern Developer Portfolio Design**: Konsep estetika *Deep Space Dark* dengan aksen *Neon Cyan* (`#38bdf8`) dan *Royal Blue* (`#2563eb`), dilengkapi efek *glassmorphism* yang elegan.
- **Floating Pill Navbar**: Navigasi fixed di atas halaman dengan *scrollspy* dinamis, *smooth scrolling*, dan menu responsif untuk perangkat mobile.
- **2-Kolom Hero Section Desktop & Balanced Mobile View**: Tampilan hero yang seimbang di desktop dan penataan posisi foto profil yang proporsional di smartphone.
- **Struktur Komponen Modular**: Dibangun menggunakan arsitektur berbasis komponen (*component-based*) dan Server Components secara default.
- **Data-Driven Architecture**: Seluruh informasi proyek, keterampilan, pengalaman, dan kontak dikelola dalam data terstruktur TypeScript (`src/data/`), memudahkan penambahan konten tanpa mengubah kode antarmuka.
- **Optimasi Gambar Otomatis**: Memanfaatkan `next/image` untuk kompresi WebP/AVIF, pencegahan CLS, dan *lazy loading*.
- **SEO & Social Share Ready**: Konfigurasi Next.js Metadata API lengkap dengan Open Graph, Twitter Cards, dan meta description.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict Type Checking)
- **UI Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS 3.4](https://tailwindcss.com/) & PostCSS
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com/) (Hobby Plan)

---

## 📁 Struktur Proyek

```text
My_Portofolio/
├── public/
│   ├── images/
│   │   ├── profile/
│   │   │   └── Profile.jpg         # Foto profil asli
│   │   └── projects/
│   │       ├── plts-preview.svg    # Preview visual proyek PLTS
│   │       └── simakos-preview.svg # Preview visual proyek SIMAKOS
│   └── documents/                  # Tempat berkas PDF CV
│
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout & Metadata SEO
│   │   ├── page.tsx                # Halaman utama menggabungkan seluruh section
│   │   └── globals.css             # Tailwind base & custom design tokens
│   │
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx          # Floating Pill Navbar & ScrollSpy
│   │   │   └── Footer.tsx          # Footer dengan dynamic copyright
│   │   │
│   │   ├── sections/
│   │   │   ├── Hero.tsx            # Hero Section (Desktop 2-kolom & Mobile)
│   │   │   ├── About.tsx           # Narasi profil & statistik
│   │   │   ├── Skills.tsx          # Grid keahlian 4 kategori
│   │   │   ├── Projects.tsx        # Kartu proyek terstruktur
│   │   │   ├── Experience.tsx      # Pengalaman kerja & sertifikasi
│   │   │   └── Contact.tsx         # Saluran kontak & form interaktif
│   │   │
│   │   └── ui/
│   │       ├── Button.tsx          # Reusable pill buttons
│   │       ├── Card.tsx            # Reusable glassmorphism card
│   │       ├── Container.tsx       # Layout container max-w-6xl
│   │       └── SectionHeader.tsx   # Tag pill, title, subtitle
│   │
│   ├── data/
│   │   ├── portfolio.ts            # Data profil, bio, dan sosial media
│   │   ├── projects.ts             # Data proyek unggulan
│   │   ├── skills.ts               # Data kategori tech stack
│   │   └── experience.ts           # Data magang dan sertifikasi
│   │
│   └── types/
│       └── index.ts                # TypeScript interfaces
│
├── tailwind.config.ts
├── postcss.config.mjs
├── tsconfig.json
├── next.config.ts
├── package.json
└── README.md
```

---

## 🚀 Memulai Proyek Secara Lokal

### Prasyarat

- Node.js (versi 18.18+ atau versi 20+)
- npm / pnpm / yarn

### Instalasi Dependensi

```bash
npm install
```

### Menjalankan Server Pengembangan

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000) di browser untuk melihat website.

### Menjalankan Production Build

```bash
npm run build
```

Untuk menguji hasil build produksi secara lokal:

```bash
npm run start
```

---

## 🚢 Panduan Deployment ke Vercel

1. **Inisialisasi Git & Push ke GitHub**:
   ```bash
   git add .
   git commit -m "feat: migrate portfolio to modern nextjs stack"
   git branch -M main
   git remote add origin https://github.com/<username-anda>/<nama-repo>.git
   git push -u origin main
   ```

2. **Hubungkan ke Vercel**:
   - Masuk ke dashboard [Vercel](https://vercel.com).
   - Klik tombol **"Add New..."** -> **"Project"**.
   - Pilih repositori GitHub portofolio Anda.
   - Vercel akan otomatis mendeteksi konfigurasi Next.js (`Framework Preset: Next.js`).
   - Klik **"Deploy"**.

3. Website akan live dalam beberapa detik di domain gratis `*.vercel.app`.

---

## 👤 Kontak & Pengembang

- **Nama**: Muhlisin
- **Email**: [mkhlsma940@gmail.com](mailto:mkhlsma940@gmail.com)
- **LinkedIn**: [linkedin.com/in/muhlisin-m-51a475289](https://www.linkedin.com/in/muhlisin-m-51a475289)
- **GitHub**: [github.com/Mkhls19](https://github.com/Mkhls19)
