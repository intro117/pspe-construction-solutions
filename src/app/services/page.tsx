import type { Metadata } from "next";
import CTABanner from "@/components/CTABanner";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { CheckIcon, DrillIcon, LayoutIcon, ScanIcon } from "@/components/icons";
import {
  DrillingIllustration,
  LayoutIllustration,
  ScanningIllustration,
} from "@/components/illustrations";

export const metadata: Metadata = {
  title: "Services | Layout, Concrete Scanning & Core Drilling",
  description:
    "Plan review and layout services, concrete scanning, and core drilling / concrete openings for plumbing, electrical, and HVAC construction projects in NY, NJ, and CT.",
};

const SERVICES = [
  {
    id: "layout",
    title: "A. Plan Review & Layout Services",
    Icon: LayoutIcon,
    intro:
      "We review relevant construction drawings and coordinate layout requirements before work begins. Based on the approved plans and field conditions, we mark designated locations, dimensions, reference points, and installation areas to help crews work accurately and stay coordinated.",
    items: [
      "Review of architectural, mechanical, electrical, and plumbing drawings as applicable to the assigned scope.",
      "Field measurements and reference-point checks.",
      "Marking locations and dimensions for planned work.",
      "Coordination with site personnel and other trades.",
      "Layout support for drilling, openings, and installations.",
    ],
    Illustration: LayoutIllustration,
  },
  {
    id: "scanning",
    title: "B. Concrete Scanning",
    Icon: ScanIcon,
    intro:
      "We scan designated concrete areas to help identify and map potential embedded objects or obstructions before drilling or creating openings. Findings are reviewed with the project team so the work area can be evaluated and the next steps coordinated.",
    items: [
      "Pre-drilling concrete scanning.",
      "Review of scan indications and marked locations.",
      "Communication of potential obstructions and areas requiring further evaluation.",
      "Coordination with the contractor before proceeding.",
    ],
    Illustration: ScanningIllustration,
  },
  {
    id: "drilling",
    title: "C. Core Drilling & Concrete Openings",
    Icon: DrillIcon,
    intro:
      "We provide core drilling and concrete opening services for construction installations, including plumbing, electrical, HVAC, and other approved building-system requirements. Work is planned around the project layout, site conditions, and available scanning information.",
    items: [
      "Core drilling for approved penetrations.",
      "Openings for plumbing, electrical, HVAC, and other building systems.",
      "Work based on approved dimensions, locations, and site coordination.",
      "Support for scheduled work and after-hours requests, subject to availability.",
    ],
    Illustration: DrillingIllustration,
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Services"
        description="Construction layout services, field layout for contractors, MEP layout, concrete scanning, and core drilling / concrete openings for plumbing, electrical, and HVAC installations across New York, New Jersey, and Connecticut."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="space-y-14">
          {SERVICES.map((service, i) => (
            <Reveal key={service.id}>
              <div id={service.id} className="scroll-mt-24 border-t border-neutral-800 pt-10">
                <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="flex items-center gap-4">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-amber-950/40 text-amber-400">
                        <service.Icon className="h-6 w-6" />
                      </span>
                      <h2 className="text-xl font-bold text-white">{service.title}</h2>
                    </div>
                    <p className="mt-4 max-w-xl text-neutral-300">{service.intro}</p>
                    <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                      {service.items.map((item) => (
                        <li key={item} className="flex gap-2 text-sm text-neutral-300">
                          <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <service.Illustration
                    className={`w-full rounded-lg border border-neutral-800 ${i % 2 === 1 ? "lg:order-1" : ""}`}
                  />
                </div>
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
