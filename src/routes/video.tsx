import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/common/PageHeader";
import { PlaceholderSection } from "@/components/common/PlaceholderSection";

const title = "Video Pembelajaran";
const description = "Video penjelasan dari kelompok dan referensi tambahan dari sumber eksternal.";

export const Route = createFileRoute("/video")({
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
      <PlaceholderSection current="/video" items={["Video pembelajaran dari kelompok", "Link video tambahan dari sumber eksternal"]} />
    </>
  );
}
