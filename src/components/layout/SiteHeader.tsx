import { Link } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { navLinks } from "@/lib/nav-links";

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2">
      <span className="grid h-9 w-9 place-items-center rounded-md bg-primary font-mono text-sm font-bold text-primary-foreground">nCr</span>
      <span className="font-display text-xl font-semibold">MathLearn</span>
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b bg-background/90 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navigasi utama">
          {navLinks.map((l) => (
            <Link key={l.to} to={l.to} activeOptions={{ exact: true }}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "bg-accent !text-accent-foreground" }}>
              {l.label}
            </Link>
          ))}
        </nav>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger className="grid h-11 w-11 place-items-center rounded-md border lg:hidden" aria-label="Buka menu">
            <Menu className="h-5 w-5" />
          </SheetTrigger>
          <SheetContent side="right" className="w-72">
            <SheetTitle className="font-display">Menu</SheetTitle>
            <nav className="mt-6 flex flex-col gap-1" aria-label="Navigasi seluler">
              {navLinks.map((l) => (
                <Link key={l.to} to={l.to} onClick={() => setOpen(false)} activeOptions={{ exact: true }}
                  className="rounded-md px-3 py-3 font-medium text-muted-foreground hover:text-foreground"
                  activeProps={{ className: "bg-accent !text-accent-foreground" }}>
                  {l.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
