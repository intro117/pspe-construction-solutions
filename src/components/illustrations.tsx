import type { ReactNode } from "react";

function Frame({
  children,
  className = "",
  title,
}: {
  children: ReactNode;
  className?: string;
  title: string;
}) {
  return (
    <svg
      viewBox="0 0 400 300"
      role="img"
      aria-label={title}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="panelFade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#141414" />
          <stop offset="100%" stopColor="#050505" />
        </linearGradient>
        <pattern id="blueGrid" width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M24 0H0V24" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="400" height="300" fill="url(#panelFade)" />
      <rect width="400" height="300" fill="url(#blueGrid)" />
      {children}
    </svg>
  );
}

export function LayoutIllustration({ className = "" }: { className?: string }) {
  return (
    <Frame title="Plan review and field layout diagram" className={className}>
      <g fill="none" stroke="#e5e5e5" strokeWidth="1.5">
        <rect x="70" y="60" width="200" height="140" />
        <line x1="70" y1="120" x2="270" y2="120" />
        <line x1="160" y1="60" x2="160" y2="200" />
        <line x1="160" y1="120" x2="210" y2="160" />
      </g>
      <g stroke="#dc2626" strokeWidth="1.5">
        <line x1="70" y1="215" x2="270" y2="215" />
        <line x1="70" y1="209" x2="70" y2="221" />
        <line x1="270" y1="209" x2="270" y2="221" />
      </g>
      <text x="150" y="232" fill="#dc2626" fontSize="11" fontFamily="monospace">
        42&apos;-6&quot;
      </text>
      <g stroke="#dc2626" strokeWidth="1.5">
        <line x1="285" y1="60" x2="285" y2="200" />
        <line x1="279" y1="60" x2="291" y2="60" />
        <line x1="279" y1="200" y2="200" x2="291" />
      </g>
      <g>
        <path d="M100 200 L100 182 L108 182 Z" fill="#dc2626" />
        <line x1="100" y1="200" x2="100" y2="210" stroke="#dc2626" strokeWidth="2" />
      </g>
      <g transform="translate(320,50)" stroke="#9ca3af" strokeWidth="1.2" fill="none">
        <circle r="18" />
        <path d="M0 -18 L0 18 M-18 0 L18 0" />
        <text x="-4" y="-22" fill="#9ca3af" fontSize="10" fontFamily="sans-serif">
          N
        </text>
      </g>
      <g fill="#6b7280" fontSize="9" fontFamily="monospace">
        <circle cx="130" cy="90" r="2.5" fill="#dc2626" />
        <text x="136" y="93">
          RP-1
        </text>
        <circle cx="220" cy="150" r="2.5" fill="#dc2626" />
        <text x="226" y="153">
          RP-2
        </text>
      </g>
    </Frame>
  );
}

export function ScanningIllustration({ className = "" }: { className?: string }) {
  return (
    <Frame title="Concrete scanning diagram showing detected embedded objects" className={className}>
      <rect x="40" y="170" width="320" height="70" fill="#1f1f1f" stroke="#3f3f3f" />
      <g stroke="#52525b" strokeWidth="1.2">
        <line x1="40" y1="195" x2="360" y2="195" strokeDasharray="4 4" />
        <line x1="40" y1="215" x2="360" y2="215" strokeDasharray="4 4" />
        <line x1="90" y1="170" x2="90" y2="240" strokeDasharray="4 4" />
        <line x1="170" y1="170" x2="170" y2="240" strokeDasharray="4 4" />
        <line x1="250" y1="170" x2="250" y2="240" strokeDasharray="4 4" />
        <line x1="330" y1="170" x2="330" y2="240" strokeDasharray="4 4" />
      </g>
      <circle cx="170" cy="205" r="7" fill="none" stroke="#dc2626" strokeWidth="2" />
      <circle cx="170" cy="205" r="2" fill="#dc2626" />
      <g stroke="#f97316" strokeWidth="1.5" fill="none" opacity="0.85">
        <path d="M130 170 Q170 150 210 170" />
        <path d="M110 170 Q170 130 230 170" />
        <path d="M90 170 Q170 108 250 170" />
      </g>
      <rect x="150" y="95" width="40" height="22" rx="3" fill="#262626" stroke="#dc2626" strokeWidth="1.5" />
      <line x1="170" y1="117" x2="170" y2="170" stroke="#dc2626" strokeWidth="2" />
      <g fill="#a3a3a3" fontSize="9" fontFamily="monospace">
        <text x="200" y="207">
          OBSTRUCTION
        </text>
        <text x="200" y="218">
          FLAGGED
        </text>
      </g>
      <g fill="#71717a" fontSize="9" fontFamily="monospace">
        <text x="45" y="255">
          SCAN PASS — DESIGNATED AREA
        </text>
      </g>
    </Frame>
  );
}

export function DrillingIllustration({ className = "" }: { className?: string }) {
  return (
    <Frame title="Core drilling diagram showing a concrete opening" className={className}>
      <rect x="50" y="160" width="300" height="80" fill="#1f1f1f" stroke="#3f3f3f" />
      <g stroke="#52525b" strokeWidth="1" opacity="0.6">
        <line x1="60" y1="175" x2="90" y2="175" />
        <line x1="60" y1="225" x2="100" y2="225" />
        <line x1="260" y1="180" x2="300" y2="180" />
        <line x1="270" y1="220" x2="330" y2="220" />
      </g>
      <g transform="translate(200,90)">
        <rect x="-8" y="-60" width="16" height="70" fill="#27272a" stroke="#71717a" strokeWidth="1" />
        <g fill="#dc2626">
          <polygon points="-11,8 11,8 0,22" />
        </g>
        <line x1="-16" y1="-60" x2="16" y2="-60" stroke="#71717a" strokeWidth="2" />
      </g>
      <ellipse cx="200" cy="200" rx="22" ry="9" fill="#050505" stroke="#dc2626" strokeWidth="2" />
      <g stroke="#9ca3af" strokeWidth="1" fill="none" opacity="0.8">
        <circle cx="255" cy="185" r="2.5" fill="#9ca3af" />
        <circle cx="265" cy="192" r="1.5" fill="#9ca3af" />
        <circle cx="248" cy="196" r="1.8" fill="#9ca3af" />
      </g>
      <g transform="translate(300,175)">
        <ellipse cx="0" cy="0" rx="18" ry="7" fill="#3f3f3f" stroke="#a3a3a3" strokeWidth="1.2" />
        <rect x="-18" y="0" width="36" height="22" fill="#3f3f3f" stroke="#a3a3a3" strokeWidth="1.2" />
        <ellipse cx="0" cy="22" rx="18" ry="7" fill="#2a2a2a" stroke="#a3a3a3" strokeWidth="1.2" />
      </g>
      <g fill="#71717a" fontSize="9" fontFamily="monospace">
        <text x="55" y="255">
          CORE OPENING — APPROVED DIMENSIONS
        </text>
      </g>
    </Frame>
  );
}
