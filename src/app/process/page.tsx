import type { Metadata } from "next";
import CTABanner from "@/components/CTABanner";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Our Process",
  description:
    "From plan review to field layout, concrete scanning, coordination, and core drilling — see how PSPE Construction Solutions LLC works, step by step.",
};

const STEPS = [
  {
    number: "01",
    title: "Plan Review",
    description:
      "We review the applicable project drawings, scope, dimensions, and requested locations. We clarify the work requirements with the contractor before going to the field.",
  },
  {
    number: "02",
    title: "Field Layout",
    description:
      "We verify reference points and field conditions, then mark the required locations and dimensions according to the approved plans and site direction.",
  },
  {
    number: "03",
    title: "Concrete Scanning",
    description:
      "Before drilling, we scan the designated concrete area to help identify potential embedded objects or obstructions. We mark and communicate relevant findings for review.",
  },
  {
    number: "04",
    title: "Coordination & Approval",
    description:
      "We review the marked layout and scan findings with the responsible site contact. Drilling proceeds only after the contractor / authorized site representative confirms the location and gives the required approval.",
  },
  {
    number: "05",
    title: "Core Drilling / Openings",
    description:
      "Once authorized, we perform the requested core drilling or concrete openings according to the agreed scope, dimensions, and job-site requirements.",
  },
  {
    number: "06",
    title: "Completion & Communication",
    description:
      "We communicate completion to the site contact and leave the work area in the condition agreed for the project. Any additional work or changed condition is discussed before proceeding.",
  },
];

export default function ProcessPage() {
  return (
    <>
      <PageHero
        title="How We Work"
        description="PSPE doesn't just show up to drill — we review, prepare, coordinate, and then execute."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="relative">
          <div className="absolute left-6 top-2 hidden h-[calc(100%-2rem)] w-px bg-neutral-800 sm:block" />
          <div className="space-y-10">
            {STEPS.map((step) => (
              <Reveal key={step.number}>
                <div className="relative flex gap-6 sm:pl-0">
                  <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-red-600 bg-neutral-950 text-sm font-bold text-red-500">
                    {step.number}
                  </span>
                  <div className="rounded-lg border border-neutral-800 bg-neutral-900/40 p-6 transition-colors hover:border-red-600">
                    <h2 className="text-lg font-semibold uppercase tracking-wide text-white">
                      {step.title}
                    </h2>
                    <p className="mt-2 text-sm text-neutral-400">{step.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="mt-14">
          <CTABanner />
        </Reveal>
      </section>
    </>
  );
}
