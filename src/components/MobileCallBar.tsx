import Link from "next/link";
import { SITE } from "@/lib/site";

export default function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 flex lg:hidden border-t border-neutral-800 bg-black">
      <a
        href={`tel:${SITE.phoneTel}`}
        className="flex-1 py-3 text-center text-sm font-bold uppercase tracking-wide text-white bg-neutral-900"
      >
        Call Now
      </a>
      <Link
        href="/contact"
        className="flex-1 py-3 text-center text-sm font-bold uppercase tracking-wide text-white bg-red-600"
      >
        Request a Quote
      </Link>
    </div>
  );
}
