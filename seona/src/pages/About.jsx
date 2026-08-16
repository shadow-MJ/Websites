import { useApp } from "../context/AppContext";

export default function About() {
  const { navigate } = useApp();
  return (
    <div id="page-about" className="page active">
      <div className="container" style={{ paddingTop: "3rem", paddingBottom: "5rem", maxWidth: "700px", textAlign: "center" }}>
        <div className="section-title" style={{ marginBottom: "1rem" }}>About Seōna</div>
        <p style={{ color: "var(--muted-fg)", lineHeight: 1.8, fontSize: "1rem" }}>
          Seōna is your curated destination for premium Korean skincare. We handpick the finest products from
          South Korea's most trusted brands — bringing you clean, effective, and honest beauty.
        </p>
        <p style={{ color: "var(--muted-fg)", lineHeight: 1.8, fontSize: "1rem", marginTop: "1rem" }}>
          We believe skincare is self-care. Every product we carry is chosen with intention, to help you build a
          routine that works for your skin and feels like a ritual.
        </p>
        <button className="btn btn-primary" style={{ marginTop: "2rem" }} onClick={() => navigate("shop")}>
          SHOP NOW
        </button>
      </div>
    </div>
  );
}
