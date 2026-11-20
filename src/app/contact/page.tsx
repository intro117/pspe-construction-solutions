import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { MailIcon, PhoneIcon, PinIcon } from "@/components/icons";
import QuoteForm from "./QuoteForm";

export const metadata: Metadata = {
  title: "Contact & Request a Quote",
  description:
    "Call or email PSPE Construction Solutions LLC to discuss your project and request a quote for layout, concrete scanning, or core drilling services.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact / Request a Quote"
        description="Call or email us to discuss your project and request a quote."
      />

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-lg border border-neutral-800 bg-neutral-900/40 p-6">
              <h2 className="text-lg font-semibold uppercase tracking-wide text-white">
                PSPE Construction Solutions LLC
              </h2>
              <ul className="mt-5 space-y-4 text-neutral-300">
                <li className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-950/40 text-amber-400">
                    <PhoneIcon />
                  </span>
                  <a
                    href={`tel:${SITE.phoneTel}`}
                    className="font-semibold text-amber-400 hover:text-amber-300"
                  >
                    {SITE.phoneDisplay}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-950/40 text-amber-400">
                    <MailIcon />
                  </span>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="font-semibold text-amber-400 hover:text-amber-300"
                  >
                    {SITE.email}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-950/40 text-amber-400">
                    <PinIcon />
                  </span>
                  Service Areas: New York | New Jersey | Connecticut
                </li>
              </ul>
            </div>

            <div className="mt-6 overflow-hidden rounded-lg border border-neutral-800">
              <iframe
                title="PSPE Construction Solutions LLC service area — New York, New Jersey, and Connecticut"
                src="https://www.google.com/maps?q=New+York,+NY&z=8&output=embed"
                className="h-72 w-full grayscale invert-[0.92] contrast-[0.9] sm:h-80"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          <Reveal className="delay-150">
            <QuoteForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
