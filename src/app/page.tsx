import Link from "next/link";
import CTAButtons from "@/components/CTAButtons";
import PhotoPlaceholder from "@/components/PhotoPlaceholder";
import { SITE } from "@/lib/site";

const SERVICES = [
  {
    title: "Plan Review & Layout Services",
    description:
      "We review relevant construction drawings and coordinate layout requirements before work begins.",
    href: "/services#layout",
  },
  {
    title: "Concrete Scanning",
    description:
      "We scan designated concrete areas to help identify potential embedded objects or obstructions before drilling.",
    href: "/services#scanning",
  },
  {
    title: "Core Drilling & Concrete Openings",
    description:
      "Core drilling and concrete opening services for plumbing, electrical, HVAC, and other building-system requirements.",
    href: "/services#drilling",
  },
];

export default function Home() {
  return (
    <>
      <section className="bg-black text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
          <div className="flex flex-col justify-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-red-600">
              {SITE.tagline}
            </p>
            <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
              Layout, Concrete Scanning &amp; Core Drilling for Construction Projects
            </h1>
            <p className="mt-5 text-neutral-300">
              PSPE Construction Solutions LLC provides professional layout, concrete
              scanning, and core drilling services for construction projects across New
              York, New Jersey, and Connecticut. From plan review and accurate field
              layout to subsurface scanning and precise concrete openings, we help
              contractors plan the work, identify potential obstacles, and complete
              each task with a strong focus on safety, accuracy, and job-site
              coordination.
            </p>
            <p className="mt-3 text-sm italic text-neutral-400">
              From plans to precise openings — one coordinated solution.
            </p>
            <CTAButtons className="mt-8" />
          </div>
          <PhotoPlaceholder
            label="professional team/equipment hero photo"
            className="min-h-[260px] lg:min-h-full"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-2xl font-bold uppercase tracking-wide text-neutral-900">
          Our Services
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {SERVICES.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="block rounded-lg border border-neutral-200 p-6 hover:border-red-600 hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold text-neutral-900">{service.title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{service.description}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-red-600">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-neutral-100 py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold uppercase tracking-wide text-neutral-900">
            Service Area
          </h2>
          <p className="mt-4 max-w-3xl text-neutral-700">
            We serve general contractors, subcontractors, construction managers,
            plumbing, electrical, HVAC, and other contractors working on commercial,
            industrial, and construction projects throughout{" "}
            {SITE.serviceAreas}.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 text-center">
        <h2 className="text-2xl font-bold uppercase tracking-wide text-neutral-900">
          Ready to Start Your Project?
        </h2>
        <p className="mt-3 text-neutral-600">
          Contact us to discuss your project and request a quote.
        </p>
        <CTAButtons className="mt-6 justify-center" variant="light" />
      </section>
    </>
  );
}
