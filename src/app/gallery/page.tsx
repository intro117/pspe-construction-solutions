import type { Metadata } from "next";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import CTABanner from "@/components/CTABanner";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Project Gallery",
  description:
    "Photos of layout and field marking, concrete scanning, core drilling, and completed openings from PSPE Construction Solutions LLC job sites.",
};

const CATEGORIES = [
  { title: "Layout / Field Marking", count: 3 },
  { title: "Concrete Scanning", count: 3 },
  { title: "Core Drilling", count: 3 },
  { title: "Completed Openings / Job-Site Work", count: 3 },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Project Gallery"
        description="Real job-site photos will be added here once provided by PSPE. Confidential plan information, client names, addresses, and project data are not shown without authorization."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="space-y-12">
          {CATEGORIES.map((category) => (
            <Reveal key={category.title}>
              <h2 className="text-lg font-semibold uppercase tracking-wide text-white">
                {category.title}
              </h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                {Array.from({ length: category.count }).map((_, i) => (
                  <PhotoPlaceholder
                    key={i}
                    label={`${category.title} #${i + 1}`}
                    className="aspect-square overflow-hidden rounded-lg transition-transform duration-300 hover:scale-[1.03] hover:border-amber-500 hover:text-amber-400"
                  />
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14">
          <CTABanner />
        </Reveal>
      </section>
    </>
  );
}
