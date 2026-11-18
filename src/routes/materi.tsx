import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/common/PageHeader";
import { PlaceholderSection } from "@/components/common/PlaceholderSection";

const title = "Materi Pembelajaran";
const description = "Pahami konsep Permutasi dan Kombinasi dengan bahasa yang sederhana.";

export const Route = createFileRoute("/materi")({
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
      <PlaceholderSection current="/materi" items={["Pengantar materi", "Pengertian Permutasi", "Pengertian Kombinasi", "Rumus dan penjelasan", "Perbedaan Permutasi dan Kombinasi"]} />
    </>
  );
}
