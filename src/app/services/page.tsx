import type { Metadata } from "next";
import CTAButtons from "@/components/CTAButtons";

export const metadata: Metadata = {
  title: "Services | Layout, Concrete Scanning & Core Drilling",
  description:
    "Plan review and layout services, concrete scanning, and core drilling / concrete openings for plumbing, electrical, and HVAC construction projects in NY, NJ, and CT.",
};

const SERVICES = [
  {
    id: "layout",
    title: "A. Plan Review & Layout Services",
    intro:
      "We review relevant construction drawings and coordinate layout requirements before work begins. Based on the approved plans and field conditions, we mark designated locations, dimensions, reference points, and installation areas to help crews work accurately and stay coordinated.",
    items: [
      "Review of architectural, mechanical, electrical, and plumbing drawings as applicable to the assigned scope.",
      "Field measurements and reference-point checks.",
      "Marking locations and dimensions for planned work.",
      "Coordination with site personnel and other trades.",
      "Layout support for drilling, openings, and installations.",
    ],
  },
  {
    id: "scanning",
    title: "B. Concrete Scanning",
    intro:
      "We scan designated concrete areas to help identify and map potential embedded objects or obstructions before drilling or creating openings. Findings are reviewed with the project team so the work area can be evaluated and the next steps coordinated.",
    items: [
      "Pre-drilling concrete scanning.",
      "Review of scan indications and marked locations.",
      "Communication of potential obstructions and areas requiring further evaluation.",
      "Coordination with the contractor before proceeding.",
    ],
  },
  {
    id: "drilling",
    title: "C. Core Drilling & Concrete Openings",
    intro:
      "We provide core drilling and concrete opening services for construction installations, including plumbing, electrical, HVAC, and other approved building-system requirements. Work is planned around the project layout, site conditions, and available scanning information.",
    items: [
      "Core drilling for approved penetrations.",
      "Openings for plumbing, electrical, HVAC, and other building systems.",
      "Work based on approved dimensions, locations, and site coordination.",
      "Support for scheduled work and after-hours requests, subject to availability.",
    ],
  },
];

export default function ServicesPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h1 className="text-3xl font-bold uppercase tracking-wide text-neutral-900">
        Services
      </h1>
      <p className="mt-4 max-w-3xl text-neutral-600">
        Construction layout services, field layout for contractors, MEP layout,
        concrete scanning, and core drilling / concrete openings for plumbing,
        electrical, and HVAC installations across New York, New Jersey, and
        Connecticut.
      </p>

      <div className="mt-12 space-y-14">
        {SERVICES.map((service) => (
          <div key={service.id} id={service.id} className="scroll-mt-24 border-t border-neutral-200 pt-10">
            <h2 className="text-xl font-bold text-neutral-900">{service.title}</h2>
            <p className="mt-3 max-w-3xl text-neutral-700">{service.intro}</p>
            <ul className="mt-4 grid gap-2 sm:grid-cols-2">
              {service.items.map((item) => (
                <li key={item} className="flex gap-2 text-sm text-neutral-700">
                  <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-red-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <CTAButtons className="mt-14" variant="light" />
    </section>
  );
}
