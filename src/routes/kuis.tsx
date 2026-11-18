import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/common/PageHeader";
import { PlaceholderSection } from "@/components/common/PlaceholderSection";

const title = "Kuis Interaktif";
const description = "Uji pemahamanmu dengan soal pilihan ganda dan skor otomatis.";

export const Route = createFileRoute("/kuis")({
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
      <PlaceholderSection current="/kuis" items={["Soal pilihan ganda", "Penilaian otomatis", "Skor akhir", "Pembahasan jawaban"]} />
    </>
  );
}
