import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import Reveal from "@/components/Reveal";
import QuoteForm from "./QuoteForm";

export const metadata: Metadata = {
  title: "Contact & Request a Quote",
  description:
    "Call or email PSPE Construction Solutions LLC to discuss your project and request a quote for layout, concrete scanning, or core drilling services.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <Reveal>
        <h1 className="text-3xl font-bold uppercase tracking-wide text-neutral-900">
          Contact / Request a Quote
        </h1>
        <p className="mt-4 text-neutral-600">
          Call or email us to discuss your project and request a quote.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-12 lg:grid-cols-2">
        <Reveal>
          <div className="rounded-lg border border-neutral-200 p-6">
            <h2 className="text-lg font-semibold uppercase tracking-wide text-neutral-900">
              PSPE Construction Solutions LLC
            </h2>
            <ul className="mt-4 space-y-3 text-neutral-700">
              <li>
                Phone:{" "}
                <a
                  href={`tel:${SITE.phoneTel}`}
                  className="font-semibold text-red-600 hover:text-red-700"
                >
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                Email:{" "}
                <a
                  href={`mailto:${SITE.email}`}
                  className="font-semibold text-red-600 hover:text-red-700"
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
  );
}
