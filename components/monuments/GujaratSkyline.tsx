"use client";

interface GujaratSkylineProps {
  opacity?: number;
}

export default function GujaratSkyline({ opacity = 1 }: GujaratSkylineProps) {
  return (
    <svg
      className="absolute bottom-0 left-0 w-full pointer-events-none"
      viewBox="0 0 1200 280"
      preserveAspectRatio="xMidYMax meet"
      style={{ opacity, transition: "opacity 0.8s ease", height: "32%" }}
    >
      <defs>
        <linearGradient id="indiaGlow" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(200,160,220,0.25)" />
          <stop offset="100%" stopColor="rgba(160,100,180,0.02)" />
        </linearGradient>
        <linearGradient id="indiaSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(180,130,200,0.08)" />
          <stop offset="100%" stopColor="rgba(140,80,160,0.01)" />
        </linearGradient>
      </defs>

      {/* Stepped well (Adalaj Vav inspired) */}
      <g
        fill="url(#indiaGlow)"
        style={{
          animation: "monumentFloat 12s ease-in-out infinite alternate",
        }}
      >
        <rect x="80" y="200" width="180" height="80" rx="2" opacity="0.4" />
        <rect x="95" y="185" width="150" height="20" rx="2" opacity="0.5" />
        <rect x="110" y="170" width="120" height="18" rx="2" opacity="0.55" />
        <rect x="125" y="155" width="90" height="18" rx="2" opacity="0.6" />
        <rect x="140" y="138" width="60" height="20" rx="2" opacity="0.65" />
        <rect x="148" y="115" width="4" height="25" rx="1" opacity="0.5" />
        <rect x="162" y="110" width="4" height="30" rx="1" opacity="0.55" />
        <rect x="176" y="115" width="4" height="25" rx="1" opacity="0.5" />
        <path
          d="M145 118 Q163 95 181 118"
          fill="none"
          stroke="rgba(200,160,220,0.3)"
          strokeWidth="1.5"
        />
      </g>

      {/* Temple spires / mandir */}
      <g
        fill="url(#indiaGlow)"
        style={{
          animation: "monumentFloat 14s ease-in-out 2s infinite alternate",
        }}
      >
        <rect x="440" y="210" width="200" height="70" rx="3" opacity="0.35" />
        <rect x="460" y="195" width="160" height="20" rx="2" opacity="0.4" />
        <path d="M530 195 L530 100 Q540 70 550 100 L550 195" fill="rgba(200,160,220,0.3)" />
        <path d="M535 100 Q540 55 545 100" fill="rgba(210,175,230,0.25)" />
        <circle cx="540" cy="58" r="4" fill="rgba(220,185,240,0.35)" />
        <line x1="540" y1="54" x2="540" y2="45" stroke="rgba(220,185,240,0.3)" strokeWidth="1" />
        <path d="M490 195 L490 140 Q497 120 504 140 L504 195" fill="rgba(190,150,215,0.22)" />
        <circle cx="497" cy="122" r="3" fill="rgba(210,175,230,0.25)" />
        <path d="M576 195 L576 140 Q583 120 590 140 L590 195" fill="rgba(190,150,215,0.22)" />
        <circle cx="583" cy="122" r="3" fill="rgba(210,175,230,0.25)" />
        <path
          d="M510 195 Q520 175 530 195"
          fill="none"
          stroke="rgba(200,160,220,0.2)"
          strokeWidth="1"
        />
        <path
          d="M550 195 Q560 175 570 195"
          fill="none"
          stroke="rgba(200,160,220,0.2)"
          strokeWidth="1"
        />
      </g>

      {/* Old city buildings / pols */}
      <g
        fill="url(#indiaSky)"
        style={{
          animation: "monumentFloat 10s ease-in-out 4s infinite alternate",
        }}
      >
        <rect x="780" y="180" width="35" height="100" rx="2" opacity="0.3" />
        <rect x="820" y="165" width="30" height="115" rx="2" opacity="0.35" />
        <rect x="855" y="175" width="40" height="105" rx="2" opacity="0.3" />
        <rect x="900" y="190" width="32" height="90" rx="2" opacity="0.28" />
        <rect x="937" y="170" width="38" height="110" rx="2" opacity="0.32" />
        <rect x="980" y="185" width="30" height="95" rx="2" opacity="0.25" />
        <path
          d="M830 175 Q835 168 840 175"
          fill="none"
          stroke="rgba(200,160,220,0.2)"
          strokeWidth="1"
        />
        <path
          d="M870 185 Q875 178 880 185"
          fill="none"
          stroke="rgba(200,160,220,0.2)"
          strokeWidth="1"
        />
        <path
          d="M950 180 Q955 173 960 180"
          fill="none"
          stroke="rgba(200,160,220,0.2)"
          strokeWidth="1"
        />
        <rect
          x="825"
          y="195"
          width="20"
          height="3"
          rx="1"
          opacity="0.25"
          fill="rgba(200,160,220,0.3)"
        />
        <rect
          x="862"
          y="200"
          width="25"
          height="3"
          rx="1"
          opacity="0.25"
          fill="rgba(200,160,220,0.3)"
        />
      </g>

      {/* Ground */}
      <line
        x1="0"
        y1="278"
        x2="1200"
        y2="278"
        stroke="rgba(180,140,210,0.06)"
        strokeWidth="1"
      />
      <rect x="0" y="265" width="1200" height="15" fill="url(#indiaSky)" opacity="0.5" />
    </svg>
  );
}
