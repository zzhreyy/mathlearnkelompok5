import { createFileRoute, Link } from "@tanstack/react-router";
import { navLinks } from "@/lib/nav-links";

const description = "Belajar Permutasi dan Kombinasi lewat materi, contoh soal, kalkulator, kuis, dan video.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MathLearn — Belajar Permutasi & Kombinasi" },
      { name: "description", content: description },
      { property: "og:title", content: "MathLearn — Belajar Permutasi & Kombinasi" },
      { property: "og:description", content: description },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <section className="border-b bg-grid">
        <div className="container-page grid gap-10 py-16 md:py-24 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-primary">Matematika Diskrit</p>
            <h1 className="mt-3 font-display text-4xl font-semibold leading-tight md:text-6xl">
              Hitung cara, <span className="highlight">pahami polanya.</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">{description}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/materi" className="inline-flex h-12 items-center rounded-md bg-primary px-6 font-medium text-primary-foreground hover:bg-primary/90">Mulai Belajar</Link>
              <Link to="/kalkulator" className="inline-flex h-12 items-center rounded-md border bg-card px-6 font-medium hover:bg-secondary">Coba Kalkulator</Link>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border bg-card p-6 shadow-soft">
              <p className="font-display text-xl font-semibold">Permutasi</p>
              <p className="mt-2 text-sm text-muted-foreground">Susunan di mana urutan diperhatikan.</p>
              <p className="mt-4 font-mono text-lg">P(n,r) = n! / (n−r)!</p>
            </div>
            <div className="rounded-lg border bg-card p-6 shadow-soft">
              <p className="font-display text-xl font-semibold">Kombinasi</p>
              <p className="mt-2 text-sm text-muted-foreground">Pemilihan di mana urutan tidak diperhatikan.</p>
              <p className="mt-4 font-mono text-lg">C(n,r) = n! / r!(n−r)!</p>
            </div>
          </div>
        </div>
      </section>
      <section className="container-page py-16">
        <h2 className="font-display text-3xl font-semibold">Jelajahi MathLearn</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {navLinks.slice(1).map((l, i) => (
            <Link key={l.to} to={l.to} className="group rounded-lg border bg-card p-6 transition hover:-translate-y-0.5 hover:shadow-soft">
              <span className="font-mono text-xs text-primary">0{i + 1}</span>
              <p className="mt-2 font-display text-xl font-semibold group-hover:text-primary">{l.label}</p>
              <p className="mt-2 text-sm text-muted-foreground">{l.desc}</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
