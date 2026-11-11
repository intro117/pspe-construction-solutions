import CTAButtons from "@/components/CTAButtons";
import CTABanner from "@/components/CTABanner";
import Reveal from "@/components/Reveal";
import HeroScene from "@/components/HeroScene";
import LanternCard from "@/components/LanternCard";
import { LayoutIcon, ScanIcon, DrillIcon } from "@/components/icons";
import {
  DrillingIllustration,
  LayoutIllustration,
  ScanningIllustration,
} from "@/components/illustrations";
import { SITE } from "@/lib/site";

const SERVICES = [
  {
    title: "Plan Review & Layout Services",
    description:
      "We review relevant construction drawings and coordinate layout requirements before work begins.",
    href: "/services#layout",
    Icon: LayoutIcon,
    Illustration: LayoutIllustration,
  },
  {
    title: "Concrete Scanning",
    description:
      "We scan designated concrete areas to help identify potential embedded objects or obstructions before drilling.",
    href: "/services#scanning",
    Icon: ScanIcon,
    Illustration: ScanningIllustration,
  },
  {
    title: "Core Drilling & Concrete Openings",
    description:
      "Core drilling and concrete opening services for plumbing, electrical, HVAC, and other building-system requirements.",
    href: "/services#drilling",
    Icon: DrillIcon,
    Illustration: DrillingIllustration,
  },
];

const AREAS = ["New York", "New Jersey", "Connecticut"];

export default function Home() {
  return (
    <>
      <section className="relative flex min-h-[92vh] items-center overflow-hidden bg-black text-white lg:min-h-screen">
        <HeroScene className="absolute inset-0 h-full w-full" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-black/55 to-black" />
        <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center px-4 py-20 text-center sm:px-6 lg:py-28">
          <div
            className="fade-up glass-pill inline-flex w-fit items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-neutral-200"
            style={{ animationDelay: "0.05s" }}
          >
            <span className="pulse-dot" />
            Serving NY · NJ · CT
          </div>
          <p
            className="fade-up mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-amber-400"
            style={{ animationDelay: "0.1s" }}
          >
            {SITE.tagline}
          </p>
          <h1
            className="fade-up mt-3 font-bold leading-[1.05] text-[clamp(2.3rem,6vw,4.25rem)]"
            style={{ animationDelay: "0.15s" }}
          >
            Layout, <span className="text-gradient">Concrete Scanning</span> &amp;
            Core Drilling for Construction Projects
          </h1>
          <p
            className="fade-up mt-5 max-w-2xl text-neutral-300"
            style={{ animationDelay: "0.28s" }}
          >
            PSPE Construction Solutions LLC provides professional layout, concrete
            scanning, and core drilling services for construction projects across New
            York, New Jersey, and Connecticut. From plan review and accurate field
            layout to subsurface scanning and precise concrete openings, we help
            contractors plan the work, identify potential obstacles, and complete each
            task with a strong focus on safety, accuracy, and job-site coordination.
          </p>
          <p
            className="fade-up mt-3 text-sm italic text-neutral-400"
            style={{ animationDelay: "0.38s" }}
          >
            From plans to precise openings — one coordinated solution.
          </p>
          <div className="fade-up mt-8" style={{ animationDelay: "0.48s" }}>
            <CTAButtons />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <Reveal>
          <h2 className="text-2xl font-bold uppercase tracking-wide text-white">
            Our Services
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} className={i === 1 ? "delay-100" : i === 2 ? "delay-200" : ""}>
              <LanternCard
                href={service.href}
                className="accent-card group block h-full overflow-hidden rounded-lg border border-neutral-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-amber-500 hover:shadow-xl hover:shadow-amber-950/40"
              >
                <service.Illustration className="aspect-[4/3] w-full border-b border-neutral-800" />
                <div className="p-6">
                  <service.Icon className="h-8 w-8 text-amber-500" />
                  <h3 className="mt-4 text-lg font-semibold text-neutral-900">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-neutral-600">{service.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-amber-500 transition-transform group-hover:translate-x-1">
                    Learn more →
                  </span>
                </div>
              </LanternCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="industrial-bg relative overflow-hidden py-16 text-white">
        <div className="blueprint-grid opacity-60" />
        <div className="glow-blob glow-blob-b top-0 right-0 h-72 w-72 bg-amber-600/15" />
        <Reveal className="relative mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold uppercase tracking-wide">Service Area</h2>
          <p className="mt-4 max-w-3xl text-neutral-300">
            We serve general contractors, subcontractors, construction managers,
            plumbing, electrical, HVAC, and other contractors working on commercial,
            industrial, and construction projects throughout New York, New Jersey, and
            Connecticut.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {AREAS.map((area) => (
              <span
                key={area}
                className="rounded-full border border-neutral-700 px-4 py-1.5 text-sm font-medium uppercase tracking-wide text-neutral-200"
              >
                {area}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      <Reveal className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <CTABanner />
      </Reveal>
    </>
  );
}
