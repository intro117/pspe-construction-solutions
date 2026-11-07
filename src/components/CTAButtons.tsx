import Link from "next/link";
import { SITE } from "@/lib/site";

export default function CTAButtons({
  className = "",
  variant = "dark",
}: {
  className?: string;
  variant?: "dark" | "light";
}) {
  const secondaryClasses =
    variant === "dark"
      ? "border border-neutral-700 text-neutral-100 hover:bg-neutral-800"
      : "border border-neutral-300 text-neutral-900 hover:bg-neutral-100";

  return (
    <div className={`flex flex-col sm:flex-row gap-3 ${className}`}>
      <Link
        href="/contact"
        className="inline-flex items-center justify-center rounded-md bg-red-600 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-[0_4px_16px_rgba(220,38,38,.35)] transition-all duration-200 hover:bg-red-700 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(220,38,38,.5)]"
      >
        Request a Quote
      </Link>
      <a
        href={`tel:${SITE.phoneTel}`}
        className={`inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-semibold uppercase tracking-wide transition-all duration-200 hover:-translate-y-0.5 ${secondaryClasses}`}
      >
        Call Now — {SITE.phoneDisplay}
      </a>
    </div>
  );
}
