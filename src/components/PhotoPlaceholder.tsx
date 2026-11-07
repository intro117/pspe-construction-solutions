export default function PhotoPlaceholder({
  label,
  className = "",
}: {
  label: string;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center justify-center border-2 border-dashed border-neutral-300 bg-neutral-100 text-center text-sm font-medium text-neutral-500 ${className}`}
    >
      <span className="px-4">Photo needed: {label}</span>
    </div>
  );
}
