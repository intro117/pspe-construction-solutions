import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";

export default function PageHero({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="industrial-bg relative overflow-hidden py-16 text-white">
      <div className="blueprint-grid opacity-60" />
      <div className="glow-blob glow-blob-a -top-16 -left-16 h-72 w-72 bg-amber-500/25" />
      <div className="glow-blob glow-blob-b top-10 -right-20 h-80 w-80 bg-amber-600/15" />
      <Reveal className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <h1 className="text-3xl font-bold uppercase tracking-wide text-white">{title}</h1>
        {description && <p className="mt-4 max-w-3xl text-neutral-300">{description}</p>}
        {children}
      </Reveal>
    </section>
  );
}
