import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/common/PageHeader";
import { PlaceholderSection } from "@/components/common/PlaceholderSection";

const title = "Kalkulator Interaktif";
const description = "Hitung Permutasi dan Kombinasi secara otomatis lengkap dengan langkahnya.";

export const Route = createFileRoute("/kalkulator")({
  head: () => ({
    meta: [
      { title: `${title} — MathLearn` },
      { name: "description", content: description },
      { property: "og:title", content: `${title} — MathLearn` },
      { property: "og:description", content: description },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHeader eyebrow="MathLearn" title={title} description={description} />
      <PlaceholderSection current="/kalkulator" items={["Input nilai n dan r", "Pilihan Permutasi atau Kombinasi", "Perhitungan otomatis", "Langkah penyelesaian"]} />
    </>
  );
}
