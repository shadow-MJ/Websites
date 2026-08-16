import { useApp } from "../context/AppContext";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const { products, brands, navigate } = useApp();
  const newArrivals = products.filter((p) => p.isNew).slice(0, 4);
  const bestsellers = products.filter((p) => p.isBestseller).slice(0, 4);

  return (
    <div id="page-home" className="page active">
      <section className="hero">
        <div className="hero-bg">
          <img
            src="https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?q=80&w=2000&auto=format&fit=crop"
            alt="Hero"
          />
        </div>
        <div className="container">
          <div className="hero-content">
            <h1>Discover Your<br />Signature Glow</h1>
            <p>Curated Korean skincare for a clean, soft, and radiant complexion. Skincare as self-care.</p>
            <button className="btn btn-primary btn-lg" onClick={() => navigate("shop")}>
              SHOP NOW
            </button>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="section-title">New Arrivals</div>
            <div className="section-sub">Fresh from Seoul</div>
          </div>
          <div className="product-grid">
            {newArrivals.map((p) => (
              <ProductCard key={p.id} p={p} />
            ))}
          </div>
          <div className="text-center mt-4" style={{ marginTop: "3rem" }}>
            <button className="btn btn-outline" onClick={() => navigate("shop")}>
              VIEW ALL NEW
            </button>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "rgba(123, 187, 221, 0.08)", padding: "5rem 0" }}>
        <div className="container">
          <div className="section-head">
            <div className="section-title">Cult Favorites</div>
            <div className="section-sub">Loved by everyone</div>
          </div>
          <div className="product-grid">
            {bestsellers.map((p) => (
              <ProductCard key={p.id} p={p} />
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: "4rem 0", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <div className="stats-grid">
            <div><div className="stat-num">8+</div><div className="stat-label">Products</div></div>
            <div><div className="stat-num">8+</div><div className="stat-label">Brands</div></div>
            <div><div className="stat-num">8+</div><div className="stat-label">Categories</div></div>
            <div><div className="stat-num">8+</div><div className="stat-label">Happy Reviews</div></div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div className="section-title">Featured Brands</div>
            <div className="section-sub">The best of K-Beauty</div>
          </div>
          <div className="brands-strip">
            {brands.slice(0, 6).map((b) => (
              <span key={b.id} className="brand-strip-item" onClick={() => navigate("shop", { brand: b.slug })}>
                {b.name}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
