import Link from "next/link";
import { NAV_LINKS, SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-neutral-800 text-neutral-400">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <p className="text-base font-bold uppercase tracking-wide text-white">
              PSPE <span className="text-red-600">Construction</span> Solutions LLC
            </p>
            <p className="mt-3 text-sm">
              Layout, concrete scanning, and core drilling / concrete openings for
              construction projects.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-neutral-300">Menu</p>
            <ul className="mt-3 space-y-2 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-neutral-300">Contact</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a href={`tel:${SITE.phoneTel}`} className="hover:text-white">
                  {SITE.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${SITE.email}`} className="hover:text-white">
                  {SITE.email}
                </a>
              </li>
              <li>Service area: NY | NJ | CT</li>
            </ul>
          </div>
        </div>

        <p className="mt-8 border-t border-neutral-800 pt-6 text-xs text-neutral-500">
          © {new Date().getFullYear()} PSPE Construction Solutions LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
