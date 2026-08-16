import { useApp } from "../context/AppContext";

export default function Categories() {
  const { categories, navigate } = useApp();
  return (
    <div id="page-categories" className="page active">
      <div className="container" style={{ paddingTop: "3rem", paddingBottom: "5rem" }}>
        <div className="section-head">
          <div className="section-title">Shop by Category</div>
          <p style={{ color: "var(--muted-fg)", maxWidth: "500px", margin: "0 auto", fontSize: "0.9rem" }}>
            Explore our collection by step in your skincare routine.
          </p>
        </div>
        <div className="categories-grid">
          {categories.map((c) => (
            <div className="category-card" key={c.id} onClick={() => navigate("shop", { category: c.slug })}>
              {c.imageUrl ? (
                <img className="cat-bg" src={c.imageUrl} alt={c.name} loading="lazy" />
              ) : (
                <div className="cat-placeholder"><span>{c.name}</span></div>
              )}
              <div className="cat-overlay"></div>
              <div className="cat-label">
                <h3>{c.name}</h3>
                <span>Shop Now</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
