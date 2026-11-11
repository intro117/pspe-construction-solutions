export default function PhotoPlaceholder({
  label,
  className = "",
  dark = true,
}: {
  label: string;
  className?: string;
  dark?: boolean;
}) {
  const palette = dark
    ? "border-2 border-dashed border-neutral-700 bg-neutral-900/60 text-neutral-400"
    : "border-2 border-dashed border-neutral-300 bg-neutral-100 text-neutral-500";

  return (
    <div
      className={`flex items-center justify-center text-center text-sm font-medium ${palette} ${className}`}
    >
      <span className="px-4">Photo needed: {label}</span>
    </div>
  );
}
