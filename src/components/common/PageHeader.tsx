export function PageHeader({ eyebrow, title, description }: { eyebrow?: string; title: string; description: string }) {
  return (
    <section className="border-b bg-grid">
      <div className="container-page py-12 md:py-16">
        {eyebrow && <p className="font-mono text-xs uppercase tracking-widest text-primary">{eyebrow}</p>}
        <h1 className="mt-2 font-display text-4xl font-semibold md:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{description}</p>
      </div>
    </section>
  );
}
