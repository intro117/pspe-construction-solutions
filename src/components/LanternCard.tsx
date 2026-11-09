"use client";
import Link from "next/link";
import type { ReactNode } from "react";

export default function LanternCard({
  href,
  className = "",
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  function onMouseMove(e: React.MouseEvent<HTMLAnchorElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
  }

  return (
    <Link href={href} onMouseMove={onMouseMove} className={`lantern-card ${className}`}>
      {children}
    </Link>
  );
}
