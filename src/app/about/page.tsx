import type { Metadata } from "next";
import CTAButtons from "@/components/CTAButtons";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "PSPE Construction Solutions LLC is a construction support company focused on layout services, concrete scanning, and core drilling across NY, NJ, and CT.",
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <Reveal>
        <h1 className="text-3xl font-bold uppercase tracking-wide text-neutral-900">
          About Us
        </h1>
      </Reveal>

      <div className="mt-8 grid gap-10 lg:grid-cols-2">
        <Reveal>
          <p className="text-neutral-700">
            PSPE Construction Solutions LLC is a construction support company
            focused on layout services, concrete scanning, and core drilling. We
            support contractors by translating project plans into clear field
            markings, scanning concrete areas before drilling, and completing
            accurate openings for building systems and construction installations.
          </p>
          <p className="mt-4 text-neutral-700">
            Our approach emphasizes preparation, precision, safety awareness, and
            coordination with other trades on the job site.
          </p>
          <CTAButtons className="mt-8" variant="light" />
        </Reveal>
        <Reveal className="delay-150">
          <PhotoPlaceholder
            label="team working / personnel using PPE"
            className="min-h-[260px] rounded-lg"
          />
        </Reveal>
      </div>
    </section>
  );
}
