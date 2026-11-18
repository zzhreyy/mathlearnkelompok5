import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/common/PageHeader";
import { PlaceholderSection } from "@/components/common/PlaceholderSection";

const title = "Tentang MathLearn";
const description = "Kenali website ini, kelompok pembuatnya, dan referensi materi.";

export const Route = createFileRoute("/tentang")({
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
      <PlaceholderSection current="/tentang" items={["Deskripsi website", "Informasi kelompok pembuat", "Referensi materi"]} />
    </>
  );
}
