import { ImageResponse } from "next/og";

export const alt = "From AI Research to Commercial Production: Gen AI for Finance";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const stages = [
  { label: "RESEARCH", color: "#38bdf8" },
  { label: "ENGINEER", color: "#a78bfa" },
  { label: "DEPLOY", color: "#f472b6" },
  { label: "COMMERCIALISE", color: "#fbbf24" },
];

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          color: "white",
          backgroundColor: "#0b1020",
          backgroundImage:
            "radial-gradient(circle at 85% 15%, rgba(168,85,247,0.55) 0%, rgba(168,85,247,0) 45%), radial-gradient(circle at 10% 95%, rgba(56,189,248,0.45) 0%, rgba(56,189,248,0) 50%)",
        }}
      >
        <div style={{ display: "flex", fontSize: 26, letterSpacing: 4, color: "#c4b5fd" }}>
          GEN AI FOR FINANCE · 9 MODULES · 8 HANDS-ON LABS
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 40, color: "#cbd5e1", marginBottom: 12 }}>
            From AI Research to
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 84,
              fontWeight: 800,
              lineHeight: 1,
              color: "#fde68a",
            }}
          >
            Commercial Production
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            {stages.map((s, i) => (
              <div key={s.label} style={{ display: "flex", alignItems: "center" }}>
                <div
                  style={{
                    display: "flex",
                    padding: "14px 26px",
                    borderRadius: 999,
                    border: `3px solid ${s.color}`,
                    color: s.color,
                    fontSize: 28,
                    fontWeight: 700,
                    background: "rgba(255,255,255,0.06)",
                  }}
                >
                  {s.label}
                </div>
                {i < stages.length - 1 && (
                  <div style={{ display: "flex", fontSize: 36, color: "#94a3b8", margin: "0 14px" }}>→</div>
                )}
              </div>
            ))}
          </div>
          <div style={{ display: "flex", fontSize: 26, color: "#94a3b8", marginTop: 28 }}>
            genai-by-vivek.vercel.app
          </div>
        </div>
      </div>
    ),
    size
  );
}
