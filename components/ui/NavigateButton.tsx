"use client";

interface NavigateButtonProps {
  label: string;
  onClick: () => void;
  direction?: "forward" | "back";
  visible?: boolean;
}

export default function NavigateButton({
  label,
  onClick,
  direction = "forward",
  visible = true,
}: NavigateButtonProps) {
  const isBack = direction === "back";

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(8px)",
        transition: "all 0.8s ease-out 0.3s",
      }}
    >
      <button
        onClick={onClick}
        className="flex items-center gap-3 px-7 py-3.5 rounded-full cursor-pointer transition-all duration-500"
        style={{
          background: "rgba(150,80,220,0.04)",
          border: "1px solid rgba(155,90,215,0.1)",
          fontFamily: "'Space Mono', monospace",
          fontSize: "0.9rem",
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "rgba(200,175,240,0.6)",
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget;
          el.style.borderColor = "rgba(175,115,235,0.25)";
          el.style.color = "rgba(230,218,252,0.8)";
          el.style.background = "rgba(150,80,220,0.09)";
          el.style.boxShadow = "0 0 35px rgba(150,80,220,0.08)";
          el.style.transform = isBack ? "translateX(-4px)" : "translateX(4px)";
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget;
          el.style.borderColor = "rgba(155,90,215,0.1)";
          el.style.color = "rgba(200,175,240,0.6)";
          el.style.background = "rgba(150,80,220,0.04)";
          el.style.boxShadow = "none";
          el.style.transform = "translateX(0)";
        }}
      >
        {isBack && <span>{"<-"}</span>}
        {label}
        {!isBack && <span>{"->"}</span>}
      </button>
    </div>
  );
}
