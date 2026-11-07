import type { Metadata } from "next";
import CTAButtons from "@/components/CTAButtons";

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
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-bold uppercase tracking-wide text-neutral-900">
        How We Work
      </h1>
      <p className="mt-4 max-w-3xl text-neutral-600">
        PSPE doesn&apos;t just show up to drill — we review, prepare, coordinate,
        and then execute.
      </p>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {STEPS.map((step) => (
          <div key={step.number} className="rounded-lg border border-neutral-200 p-6">
            <span className="text-3xl font-bold text-red-600">{step.number}</span>
            <h2 className="mt-2 text-lg font-semibold uppercase tracking-wide text-neutral-900">
              {step.title}
            </h2>
            <p className="mt-2 text-sm text-neutral-600">{step.description}</p>
          </div>
        ))}
      </div>

      <CTAButtons className="mt-14" variant="light" />
    </section>
  );
}
