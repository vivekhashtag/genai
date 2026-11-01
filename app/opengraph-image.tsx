import { ImageResponse } from "next/og";

export const alt = "Gen AI for Finance: A Hands-On Course";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          color: "white",
          background: "linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #db2777 100%)",
        }}
      >
        <div style={{ fontSize: 28, opacity: 0.85, marginBottom: 24 }}>FREE COURSE · 9 MODULES · 8 LABS</div>
        <div style={{ fontSize: 84, fontWeight: 800, lineHeight: 1.05 }}>Gen AI for Finance</div>
        <div style={{ fontSize: 34, marginTop: 28, opacity: 0.92 }}>
          RAG · Agents · Governance · Security · Observability
        </div>
      </div>
    ),
    size
  );
}
