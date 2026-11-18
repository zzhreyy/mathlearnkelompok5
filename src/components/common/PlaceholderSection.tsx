import { Link } from "@tanstack/react-router";
import { navLinks, type NavPath } from "@/lib/nav-links";

export function PlaceholderSection({ items, current }: { items: string[]; current: NavPath }) {
  const i = navLinks.findIndex((l) => l.to === current);
  const prev = navLinks[i - 1];
  const next = navLinks[i + 1];
  return (
    <div className="container-page py-12">
      <div className="rounded-lg border border-dashed bg-card p-6 md:p-8">
        <span className="inline-block rounded bg-accent px-2 py-1 font-mono text-xs text-accent-foreground">Segera hadir di tahap berikutnya</span>
        <p className="mt-4 font-medium">Rencana isi halaman ini:</p>
        <ul className="mt-3 space-y-2 text-muted-foreground">
          {items.map((t) => <li key={t} className="flex gap-2"><span className="text-primary">→</span>{t}</li>)}
        </ul>
      </div>
      <div className="mt-10 flex flex-wrap justify-between gap-3">
        {prev ? <Link to={prev.to} className="rounded-md border px-4 py-3 text-sm hover:bg-secondary">← {prev.label}</Link> : <span />}
        {next && <Link to={next.to} className="rounded-md bg-primary px-4 py-3 text-sm text-primary-foreground hover:bg-primary/90">{next.label} →</Link>}
      </div>
    </div>
  );
}
