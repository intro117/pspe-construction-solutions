import type { Metadata } from "next";
import CTABanner from "@/components/CTABanner";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { ChevronIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about PSPE Construction Solutions LLC's layout, concrete scanning, and core drilling services in NY, NJ, and CT.",
};

const FAQS = [
  {
    q: "What areas do you serve?",
    a: "We serve construction projects throughout New York, New Jersey, and Connecticut. Contact us to confirm availability for your project location.",
  },
  {
    q: "What services do you provide?",
    a: "We provide plan review and layout support, concrete scanning, core drilling, and concrete openings for plumbing, electrical, HVAC, and other construction needs.",
  },
  {
    q: "Can you review plans and mark locations in the field?",
    a: "Yes. We can review applicable project drawings and provide field layout support based on the approved scope and site direction.",
  },
  {
    q: "Do you scan concrete before core drilling?",
    a: "Concrete scanning can be performed before drilling to help identify potential embedded objects or obstructions in the designated area. Scan results are not a guarantee that an area is free of all hazards.",
  },
  {
    q: "What information is needed for a quote?",
    a: "Please provide the project location, service required, approximate quantities and dimensions, requested schedule, and any available plans or photos.",
  },
  {
    q: "Do you offer after-hours service?",
    a: "After-hours and 24-hour service requests may be accommodated depending on project requirements and availability. Contact us to confirm.",
  },
];

export default function FaqPage() {
  return (
    <>
      <PageHero title="Frequently Asked Questions" />

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
        <div className="divide-y divide-neutral-800">
          {FAQS.map((faq) => (
            <Reveal key={faq.q}>
              <details className="group py-2">
                <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-base font-semibold text-neutral-100 marker:content-none">
                  {faq.q}
                  <ChevronIcon className="h-5 w-5 shrink-0 text-amber-400 transition-transform duration-200 group-open:rotate-180" />
                </summary>
                <p className="pb-4 text-sm text-neutral-400">{faq.a}</p>
              </details>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10">
          <CTABanner />
        </Reveal>
      </section>
    </>
  );
}
