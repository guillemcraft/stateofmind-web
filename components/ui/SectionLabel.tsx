interface SectionLabelProps {
  number: string;
  label: string;
  className?: string;
}

/* "02 — ABOUT" mono marker, as on every press-kit page */
export function SectionLabel({ number, label, className = "" }: SectionLabelProps) {
  return (
    <p className={`label ${className}`}>
      {number}
      <span className="mx-2">—</span>
      {label}
    </p>
  );
}
