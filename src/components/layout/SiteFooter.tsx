import { Link } from "@tanstack/react-router";
import { navLinks } from "@/lib/nav-links";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t bg-secondary">
      <div className="container-page grid gap-8 py-10 md:grid-cols-2">
        <div>
          <p className="font-display text-lg font-semibold">MathLearn</p>
          <p className="mt-2 max-w-sm text-sm text-muted-foreground">
            Media belajar Matematika Diskrit untuk mahasiswa, berfokus pada Permutasi dan Kombinasi.
          </p>
        </div>
        <nav className="grid grid-cols-2 gap-2 text-sm sm:grid-cols-3" aria-label="Tautan cepat">
          {navLinks.map((l) => (
            <Link key={l.to} to={l.to} className="text-muted-foreground hover:text-foreground">{l.label}</Link>
          ))}
        </nav>
      </div>
      <div className="border-t">
        <p className="container-page py-4 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Kelompok MathLearn — Matematika Diskrit
        </p>
      </div>
    </footer>
  );
}
