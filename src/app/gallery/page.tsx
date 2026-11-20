import type { Metadata } from "next";
import Image from "next/image";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import CTABanner from "@/components/CTABanner";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import layoutFieldMarking1 from "@/assets/gallery/layout-field-marking-1.jpg";
import layoutFieldMarking2 from "@/assets/gallery/layout-field-marking-2.jpg";
import layoutFieldMarking3 from "@/assets/gallery/layout-field-marking-3.jpg";
import concreteScanning1 from "@/assets/gallery/concrete-scanning-1.jpg";
import concreteScanning2 from "@/assets/gallery/concrete-scanning-2.jpg";
import concreteScanning3 from "@/assets/gallery/concrete-scanning-3.jpg";
import coreDrilling1 from "@/assets/gallery/core-drilling-1.jpg";
import coreDrilling2 from "@/assets/gallery/core-drilling-2.jpg";
import coreDrilling3 from "@/assets/gallery/core-drilling-3.jpg";
import completedOpenings1 from "@/assets/gallery/completed-openings-1.jpg";
import completedOpenings2 from "@/assets/gallery/completed-openings-2.jpg";

export const metadata: Metadata = {
  title: "Project Gallery",
  description:
    "Photos of layout and field marking, concrete scanning, core drilling, and completed openings from PSPE Construction Solutions LLC job sites.",
};

const CATEGORIES = [
  {
    title: "Layout / Field Marking",
    photos: [layoutFieldMarking1, layoutFieldMarking2, layoutFieldMarking3],
  },
  {
    title: "Concrete Scanning",
    photos: [concreteScanning1, concreteScanning2, concreteScanning3],
  },
  { title: "Core Drilling", photos: [coreDrilling1, coreDrilling2, coreDrilling3] },
  {
    title: "Completed Openings / Job-Site Work",
    photos: [completedOpenings1, completedOpenings2, null],
  },
];

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Project Gallery"
        description="Real job-site photos from PSPE Construction Solutions LLC. More will be added as projects are completed. Confidential plan information, client names, addresses, and project data are not shown without authorization."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="space-y-12">
          {CATEGORIES.map((category) => (
            <Reveal key={category.title}>
              <h2 className="text-lg font-semibold uppercase tracking-wide text-white">
                {category.title}
              </h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                {category.photos.map((photo, i) =>
                  photo ? (
                    <div
                      key={i}
                      className="group relative aspect-square overflow-hidden rounded-lg border border-neutral-800"
                    >
                      <Image
                        src={photo}
                        alt={`${category.title} #${i + 1}`}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(min-width: 640px) 33vw, 100vw"
                      />
                    </div>
                  ) : (
                    <PhotoPlaceholder
                      key={i}
                      label={`${category.title} #${i + 1}`}
                      className="aspect-square overflow-hidden rounded-lg transition-transform duration-300 hover:scale-[1.03] hover:border-amber-500 hover:text-amber-400"
                    />
                  )
                )}
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
