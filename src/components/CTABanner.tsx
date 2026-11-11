import CTAButtons from "@/components/CTAButtons";

export default function CTABanner({
  title = "Ready to Start Your Project?",
  subtitle = "Contact us to discuss your project and request a quote.",
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-900 via-black to-neutral-900 px-6 py-14 text-center sm:px-12">
      <div className="blueprint-grid opacity-50" />
      <div className="glow-blob glow-blob-a left-1/2 top-0 h-64 w-64 -translate-x-1/2 bg-amber-500/30" />
      <div className="relative">
        <h2 className="text-2xl font-bold uppercase tracking-wide text-white">{title}</h2>
        <p className="mt-3 text-neutral-300">{subtitle}</p>
        <CTAButtons className="mt-6 justify-center" />
      </div>
    </div>
  );
}
