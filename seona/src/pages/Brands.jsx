import { useApp } from "../context/AppContext";

export default function Brands() {
  const { brands, navigate } = useApp();
  return (
    <div id="page-brands" className="page active">
      <div className="container" style={{ paddingTop: "3rem", paddingBottom: "5rem" }}>
        <div className="section-head">
          <div className="section-title">Our Brands</div>
          <p style={{ color: "var(--muted-fg)", maxWidth: "500px", margin: "0 auto", fontSize: "0.9rem" }}>
            We carefully curate the best Korean beauty brands, focusing on quality ingredients and effective
            formulations.
          </p>
        </div>
        <div className="brands-grid">
          {brands.map((b) => (
            <div className="brand-card" key={b.id} onClick={() => navigate("shop", { brand: b.slug })}>
              <div style={{ height: "6rem", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem" }}>
                <div className="brand-card-name">{b.name}</div>
              </div>
              <div style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "0.5rem" }}>{b.name}</div>
              {b.country && <div className="brand-card-country">{b.country}</div>}
              {b.description && <div className="brand-card-desc">{b.description}</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
