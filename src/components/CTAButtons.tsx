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
        className="inline-flex items-center justify-center rounded-md bg-red-600 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white hover:bg-red-700 transition-colors"
      >
        Request a Quote
      </Link>
      <a
        href={`tel:${SITE.phoneTel}`}
        className={`inline-flex items-center justify-center rounded-md px-6 py-3 text-sm font-semibold uppercase tracking-wide transition-colors ${secondaryClasses}`}
      >
        Call Now — {SITE.phoneDisplay}
      </a>
    </div>
  );
}
