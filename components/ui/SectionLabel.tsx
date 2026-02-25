"use client";

interface SectionLabelProps {
  index: string;
  label: string;
  visible?: boolean;
}

export default function SectionLabel({ index, label, visible = true }: SectionLabelProps) {
  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(0)" : "translateX(-12px)",
        transition: "all 0.8s cubic-bezier(0.16,1,0.3,1)",
      }}
    >
      <span
        className="flex items-center gap-3"
        style={{
          fontFamily: "'Space Mono', monospace",
          fontSize: "1rem",
          letterSpacing: "0.35em",
          textTransform: "uppercase",
          color: "rgba(195,160,240,0.75)",
        }}
      >
        <span
          style={{
            width: 28,
            height: 1,
            background: "linear-gradient(to right, rgba(155,90,215,0.4), transparent)",
            display: "inline-block",
          }}
        />
        {index} // {label}
      </span>
    </div>
  );
}
