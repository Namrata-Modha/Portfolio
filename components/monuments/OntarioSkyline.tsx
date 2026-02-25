"use client";

interface OntarioSkylineProps {
  opacity?: number;
}

export default function OntarioSkyline({ opacity = 1 }: OntarioSkylineProps) {
  return (
    <svg
      className="absolute bottom-0 left-0 w-full pointer-events-none"
      viewBox="0 0 1200 280"
      preserveAspectRatio="xMidYMax meet"
      style={{ opacity, transition: "opacity 0.8s ease", height: "32%" }}
    >
      <defs>
        <linearGradient id="canadaGlow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(130,200,220,0.22)" />
          <stop offset="100%" stopColor="rgba(90,160,190,0.02)" />
        </linearGradient>
        <linearGradient id="canadaSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(100,180,210,0.08)" />
          <stop offset="100%" stopColor="rgba(70,140,170,0.01)" />
        </linearGradient>
      </defs>

      {/* CN Tower */}
      <g style={{ animation: "monumentFloat 14s ease-in-out infinite alternate" }}>
        <rect x="388" y="30" width="6" height="248" rx="2" fill="rgba(130,200,220,0.2)" />
        <ellipse cx="391" cy="110" rx="22" ry="10" fill="rgba(130,200,220,0.15)" />
        <ellipse cx="391" cy="105" rx="18" ry="8" fill="rgba(150,215,230,0.18)" />
        <ellipse cx="391" cy="100" rx="14" ry="6" fill="rgba(170,225,240,0.2)" />
        <ellipse cx="391" cy="80" rx="10" ry="5" fill="rgba(140,210,225,0.15)" />
        <rect x="390" y="10" width="2" height="22" rx="1" fill="rgba(150,215,230,0.2)" />
        <circle cx="391" cy="10" r="2" fill="rgba(180,230,245,0.4)">
          <animate attributeName="opacity" values="0.3;0.7;0.3" dur="3s" repeatCount="indefinite" />
        </circle>
        <path d="M370 110 L340 270" stroke="rgba(130,200,220,0.03)" strokeWidth="15" />
        <path d="M412 110 L442 270" stroke="rgba(130,200,220,0.03)" strokeWidth="15" />
      </g>

      {/* Toronto skyline buildings */}
      <g
        fill="url(#canadaGlow)"
        style={{ animation: "monumentFloat 12s ease-in-out 2s infinite alternate" }}
      >
        <rect x="280" y="195" width="28" height="85" rx="2" opacity="0.3" />
        <rect x="312" y="175" width="22" height="105" rx="2" opacity="0.28" />
        <rect x="338" y="185" width="30" height="95" rx="2" opacity="0.25" />
        <rect x="430" y="180" width="25" height="100" rx="2" opacity="0.28" />
        <rect x="460" y="190" width="32" height="90" rx="2" opacity="0.25" />
        <rect x="498" y="170" width="20" height="110" rx="2" opacity="0.3" />
        <rect x="522" y="185" width="28" height="95" rx="2" opacity="0.22" />
        <rect x="555" y="195" width="24" height="85" rx="2" opacity="0.2" />
      </g>

      {/* Forest treeline left */}
      <g
        fill="url(#canadaSky)"
        style={{ animation: "monumentFloat 10s ease-in-out 3s infinite alternate" }}
      >
        <path d="M40 280 L55 220 L70 280 Z" opacity="0.2" />
        <path d="M65 280 L82 210 L99 280 Z" opacity="0.25" />
        <path d="M95 280 L108 225 L121 280 Z" opacity="0.18" />
        <path d="M120 280 L138 215 L156 280 Z" opacity="0.22" />
        <path d="M150 280 L162 230 L174 280 Z" opacity="0.17" />
        <path d="M175 280 L190 218 L205 280 Z" opacity="0.2" />
        <path d="M200 280 L212 235 L224 280 Z" opacity="0.15" />
        <path d="M222 280 L240 220 L258 280 Z" opacity="0.2" />
      </g>

      {/* Forest treeline right */}
      <g
        fill="url(#canadaSky)"
        style={{ animation: "monumentFloat 11s ease-in-out 5s infinite alternate" }}
      >
        <path d="M750 280 L768 225 L786 280 Z" opacity="0.18" />
        <path d="M780 280 L795 215 L810 280 Z" opacity="0.22" />
        <path d="M808 280 L820 230 L832 280 Z" opacity="0.17" />
        <path d="M830 280 L848 218 L866 280 Z" opacity="0.2" />
        <path d="M860 280 L875 225 L890 280 Z" opacity="0.18" />
        <path d="M888 280 L905 210 L922 280 Z" opacity="0.22" />
        <path d="M918 280 L932 228 L946 280 Z" opacity="0.16" />
        <path d="M942 280 L960 215 L978 280 Z" opacity="0.2" />
        <path d="M975 280 L988 232 L1001 280 Z" opacity="0.15" />
      </g>

      {/* Water reflection */}
      <line
        x1="260"
        y1="278"
        x2="600"
        y2="278"
        stroke="rgba(130,200,220,0.08)"
        strokeWidth="1"
      />
      <rect x="0" y="268" width="1200" height="12" fill="url(#canadaSky)" opacity="0.4" />
    </svg>
  );
}
