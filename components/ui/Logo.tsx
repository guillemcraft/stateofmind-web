interface LogoProps {
  className?: string;
}

/* Wavy "State Of Mind" wordmark, traced from the 2026 press kit */
export function Logo({ className = "" }: LogoProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/images/logo.svg"
      alt="State Of Mind"
      width={618}
      height={493}
      className={`block h-auto ${className}`}
      draggable={false}
    />
  );
}
