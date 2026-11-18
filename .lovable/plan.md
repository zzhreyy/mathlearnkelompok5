# Rencana Tahap 1 — Fondasi dan Desain MathLearn

Catatan teknologi: PRD menyebut HTML/CSS/JS + GitHub Pages. Proyek ini sudah memakai TanStack Start (React) + Tailwind v4, yang tetap menghasilkan HTML/CSS/JS. Struktur ini dipertahankan. Tidak ada database, login, atau fitur Tahap 2+.

## 1. Struktur folder dan komponen

```text
src/
  routes/
    __root.tsx        -> kerangka: Header + <Outlet/> + Footer
    index.tsx         -> /            Beranda
    materi.tsx        -> /materi      Materi Pembelajaran
    contoh-soal.tsx   -> /contoh-soal Contoh Soal
    kalkulator.tsx    -> /kalkulator  Kalkulator Interaktif
    kuis.tsx          -> /kuis        Kuis Interaktif
    video.tsx         -> /video       Video Pembelajaran
    tentang.tsx       -> /tentang     Tentang
  components/
    layout/SiteHeader.tsx, MobileNav.tsx, SiteFooter.tsx
    common/PageHeader.tsx (judul + deskripsi halaman)
    common/PlaceholderSection.tsx ("Segera hadir di tahap berikutnya")
  lib/nav-links.ts    -> satu sumber daftar 7 menu
  styles.css          -> token warna, font, radius
```

## 2. Header, navigasi, footer
- Header sticky: logo "MathLearn" (ikon simbol nPr/nCr) di kiri, 7 menu di kanan; menu aktif diberi penanda (garis bawah/warna primer) via `activeProps` Link.
- Mobile: tombol hamburger membuka panel (Sheet shadcn) berisi menu yang sama; tertutup otomatis setelah klik.
- Footer: nama website, deskripsi singkat, tautan cepat ke 7 halaman, "Kelompok ... — Matematika Diskrit", tahun.

## 3. Sistem warna, tipografi, desain UI
- Arah visual: "buku catatan akademik modern" — latar krem terang, aksen biru tinta tua + kuning stabilo, pola kisi (grid) halus khas kertas matematika.
- Token oklch di styles.css: background krem, foreground biru-tinta gelap, primary biru tinta, accent kuning stabilo, secondary/muted abu kebiruan, border lembut; varian `.dark` disiapkan.
- Tipografi (Google Fonts via `<link>` di __root): judul "Fraunces" (serif berkarakter), isi "Plus Jakarta Sans", rumus/angka "JetBrains Mono".
- Komponen UI: kartu dengan border tipis dan bayangan lembut, radius sedang, tombol shadcn (primary/outline), skala jarak konsisten.

## 4. Tujuh halaman (placeholder)
Setiap halaman: PageHeader (judul + deskripsi) + PlaceholderSection berisi poin-poin isi dari PRD sebagai daftar rencana, dan `head()` sendiri (title, description, og:title, og:description).
- Beranda: hero (judul, deskripsi, tombol "Mulai Belajar" ke /materi), kartu ringkasan Permutasi vs Kombinasi (teks statis), grid 6 kartu menuju halaman lain.
- Materi, Contoh Soal, Kalkulator, Kuis, Video, Tentang: placeholder saja, tanpa logika.
- Halaman 404 diterjemahkan ke Bahasa Indonesia.

## 5. Navigasi antarhalaman
- Semua tautan memakai `<Link>` TanStack dari `nav-links.ts` (header, menu mobile, footer, kartu Beranda).
- Gulir kembali ke atas saat pindah halaman (scrollRestoration sudah aktif).
- Opsional ringan: tombol "Sebelumnya / Berikutnya" di bawah tiap halaman mengikuti urutan alur belajar.

## 6. Responsivitas
- Mobile-first; breakpoint: <768px hamburger, ≥1024px menu penuh (768–1023 hamburger juga agar 7 menu tidak sesak).
- Grid kartu: 1 kolom (HP), 2 kolom (tablet), 3 kolom (laptop). Kontainer maks ~1200px dengan padding samping.
- Ukuran teks judul fluid; area sentuh tombol min 44px.

## 7. Checklist pengujian Tahap 1
- [ ] Ketujuh URL terbuka tanpa error; URL salah menampilkan 404.
- [ ] Setiap menu header, menu mobile, footer, dan kartu Beranda menuju halaman yang benar.
- [ ] Menu aktif tersorot sesuai halaman.
- [ ] Menu hamburger buka/tutup dengan benar di lebar 375px.
- [ ] Tidak ada gulir horizontal di 375px, 768px, 1280px.
- [ ] Font dan warna tampil konsisten di semua halaman; kontras teks terbaca.
- [ ] Judul tab browser unik per halaman.
- [ ] Tes otomatis routing (src/test/app-routing.test.tsx) diperbarui dan lulus.
- [ ] Tidak ada fitur kalkulator/kuis/video/database yang ikut dibuat.

## Detail teknis
- Hapus placeholder bawaan di index.tsx; ganti meta "Lovable App" di __root.
- Tambah komponen shadcn yang dibutuhkan (Button, Sheet) bila belum ada.
- Catat struktur (route per halaman, nav-links tunggal) di AGENTS.md; simpan pilihan warna/font ke memori proyek.
