import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
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
              <ul className="mt-4 space-y-3 text-neutral-300">
                <li>
                  Phone:{" "}
                  <a
                    href={`tel:${SITE.phoneTel}`}
                    className="font-semibold text-red-500 hover:text-red-400"
                  >
                    {SITE.phoneDisplay}
                  </a>
                </li>
                <li>
                  Email:{" "}
                  <a
                    href={`mailto:${SITE.email}`}
                    className="font-semibold text-red-500 hover:text-red-400"
                  >
                    {SITE.email}
                  </a>
                </li>
                <li>Service Areas: New York | New Jersey | Connecticut</li>
              </ul>
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
