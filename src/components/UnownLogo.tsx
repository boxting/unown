/**
 * Abstract Unown-inspired logo for Boxting Labs.
 * A stylized eye shape with geometric letter-like forms, inspired by
 * the Unown Pokemon aesthetic — mysterious glyphs with a central eye.
 */
export function UnownLogo({ size = 32, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer body — abstract angular shape */}
      <path
        d="M32 4 L52 16 L56 40 L44 56 L20 56 L8 40 L12 16 Z"
        fill="#1a1a2e"
        stroke="#1a1a2e"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      {/* Inner angular cutout */}
      <path
        d="M32 12 L46 20 L49 38 L40 50 L24 50 L15 38 L18 20 Z"
        fill="#f7931e"
        strokeLinejoin="round"
      />
      {/* Central eye */}
      <circle cx="32" cy="32" r="8" fill="#1a1a2e" />
      <circle cx="32" cy="32" r="4" fill="#ffffff" />
      <circle cx="33.5" cy="30.5" r="1.5" fill="#1a1a2e" />
      {/* Small appendage/leg — Unown-like */}
      <rect x="29" y="56" width="6" height="6" rx="2" fill="#1a1a2e" />
    </svg>
  );
}
