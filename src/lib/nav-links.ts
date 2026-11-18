export const navLinks = [
  { to: "/", label: "Beranda", desc: "Ringkasan dan titik awal belajar." },
  { to: "/materi", label: "Materi", desc: "Pengertian, rumus, dan perbedaan Permutasi & Kombinasi." },
  { to: "/contoh-soal", label: "Contoh Soal", desc: "Soal dengan langkah penyelesaian lengkap." },
  { to: "/kalkulator", label: "Kalkulator", desc: "Hitung nPr dan nCr beserta langkahnya." },
  { to: "/kuis", label: "Kuis", desc: "Uji pemahaman dengan skor otomatis." },
  { to: "/video", label: "Video", desc: "Video pembelajaran kelompok dan referensi." },
  { to: "/tentang", label: "Tentang", desc: "Tentang website, kelompok, dan referensi." },
] as const;
export type NavPath = (typeof navLinks)[number]["to"];
