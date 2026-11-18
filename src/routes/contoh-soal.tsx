import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/common/PageHeader";
import { PlaceholderSection } from "@/components/common/PlaceholderSection";

const title = "Contoh Soal";
const description = "Kumpulan soal beserta langkah penyelesaian dan jawaban akhir.";

export const Route = createFileRoute("/contoh-soal")({
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
      <PlaceholderSection current="/contoh-soal" items={["Soal latihan", "Langkah penyelesaian", "Jawaban akhir"]} />
    </>
  );
}
