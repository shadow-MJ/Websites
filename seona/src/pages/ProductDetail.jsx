import { useEffect, useState } from "react";
import { useApp } from "../context/AppContext";
import { money, formatDate } from "../api";
import Stars from "../components/Stars";
import { IconHeart } from "../components/Icons";

export default function ProductDetail() {
  const { products, reviews, brand, cat, navigate, currentProductId, addToCart, addToWishlist } = useApp();
  const p = products.find((x) => x.id === currentProductId);

  const [qty, setQty] = useState(1);
  const [activeImg, setActiveImg] = useState(0);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    setQty(1);
    setActiveImg(0);
    setActiveTab(0);
  }, [currentProductId]);

  useEffect(() => {
    if (!p && products.length > 0) navigate("shop");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [p, products.length]);

  if (!p) return null;

  const b = brand(p.brandId);
  const c = cat(p.catId);
  const images = [p.imageUrl];
  if (p.imageUrl2) images.push(p.imageUrl2);
  const prodReviews = reviews.filter((r) => r.productId === p.id);

  const tabs = ["Details", "Ingredients", "How to Use", `Reviews (${prodReviews.length})`];

  return (
    <div id="page-product" className="page active">
      <div className="container" style={{ paddingTop: "3rem", paddingBottom: "5rem" }}>
        <div className="breadcrumbs">
          <span onClick={() => navigate("home")}>Home</span> ›{" "}
          <span onClick={() => navigate("shop")}>Shop</span> ›{" "}
          {c && (
            <>
              <span onClick={() => navigate("shop", { category: c.slug })}>{c.name}</span> ›{" "}
            </>
          )}
          <span style={{ color: "var(--fg)" }}>{p.name}</span>
        </div>

        <div className="product-detail-layout">
          <div className="product-images">
            <div className="product-thumbs">
              {images.map((img, i) => (
                <button
                  key={i}
                  className={`product-thumb ${i === activeImg ? "active" : ""}`}
                  onClick={() => setActiveImg(i)}
                >
                  <img src={img} alt={`view ${i + 1}`} />
                </button>
              ))}
            </div>
            <div className="product-main-img">
              <img src={images[activeImg]} alt={p.name} />
            </div>
          </div>
          <div className="product-info">
            <div className="product-brand-link" onClick={() => navigate("shop", { brand: b?.slug })}>
              {b?.name || ""}
            </div>
            <h1 className="product-title">{p.name}</h1>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.5rem" }}>
              <div className="stars"><Stars rating={p.rating} /></div>
              <span style={{ fontSize: "0.85rem", color: "var(--muted-fg)" }}>({p.reviewCount} reviews)</span>
            </div>
            <div className="product-price-row">
              <span>{money(p.price)}</span>
              {p.originalPrice && <span className="product-og-price">{money(p.originalPrice)}</span>}
            </div>
            <p className="product-desc">{p.description}</p>
            <div className="qty-row">
              <span className="qty-label">Quantity</span>
              <div className="qty-ctrl">
                <button className="qty-btn" onClick={() => setQty((q) => Math.max(1, q - 1))}>−</button>
                <span className="qty-num">{qty}</span>
                <button className="qty-btn" onClick={() => setQty((q) => q + 1)}>+</button>
              </div>
            </div>
            <div className="product-cta">
              <button
                className="btn btn-primary"
                style={{ flex: 1, borderRadius: "9999px" }}
                onClick={() => addToCart(p.id, qty)}
                disabled={!p.inStock}
              >
                {p.inStock ? "ADD TO CART" : "OUT OF STOCK"}
              </button>
              <button
                className="btn btn-outline"
                style={{ borderRadius: "9999px", padding: "0.7rem 1.2rem" }}
                onClick={() => addToWishlist(p.id)}
              >
                <IconHeart />
              </button>
            </div>
          </div>
        </div>

        <div style={{ marginTop: "4rem" }}>
          <div className="tabs-nav">
            {tabs.map((t, i) => (
              <button
                key={i}
                className={`tab-btn ${i === activeTab ? "active" : ""}`}
                onClick={() => setActiveTab(i)}
              >
                {t}
              </button>
            ))}
          </div>
          <div>
            <div className={`tab-panel ${activeTab === 0 ? "active" : ""}`}>
              <h3 className="satisfy" style={{ fontSize: "2rem", marginBottom: "1rem" }}>Product Details</h3>
              <p style={{ color: "var(--muted-fg)", lineHeight: 1.7 }}>{p.description}</p>
              {p.benefits && (
                <>
                  <h4 style={{ marginTop: "1.5rem", marginBottom: "0.5rem", color: "#555" }}>Key Benefits:</h4>
                  <p style={{ color: "var(--muted-fg)", lineHeight: 1.7, whiteSpace: "pre-line" }}>{p.benefits}</p>
                </>
              )}
            </div>
            <div className={`tab-panel ${activeTab === 1 ? "active" : ""}`}>
              <h3 className="satisfy" style={{ fontSize: "2rem", marginBottom: "1rem" }}>Ingredients</h3>
              <p style={{ color: "var(--muted-fg)", lineHeight: 1.7 }}>
                {p.ingredients || "No ingredient information available."}
              </p>
            </div>
            <div className={`tab-panel ${activeTab === 2 ? "active" : ""}`}>
              <h3 className="satisfy" style={{ fontSize: "2rem", marginBottom: "1rem" }}>How to Use</h3>
              <p style={{ color: "var(--muted-fg)", lineHeight: 1.7 }}>
                {p.howToUse || "Apply evenly to clean skin as needed."}
              </p>
            </div>
            <div className={`tab-panel ${activeTab === 3 ? "active" : ""}`}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
                <h3 className="satisfy" style={{ fontSize: "2rem" }}>Customer Reviews</h3>
                <button className="btn btn-outline btn-sm" onClick={() => navigate("review")}>Write a Review</button>
              </div>
              {prodReviews.length > 0 ? (
                prodReviews.map((r) => <ReviewItem key={r.id} r={r} products={products} navigate={navigate} />)
              ) : (
                <div className="empty-state"><p>No reviews yet. Be the first!</p></div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ReviewItem({ r, products, navigate }) {
  const p = products.find((x) => x.id === r.productId);
  return (
    <div className="review-item">
      <div className="review-header">
        <div>
          {p && <div style={{ fontWeight: 700, fontSize: "1rem", marginBottom: "0.25rem" }}>{p.name}</div>}
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <span className="reviewer-name">{r.reviewerName}</span>
            <span className="review-date">• {formatDate(r.createdAt)}</span>
          </div>
        </div>
        <div><Stars rating={r.rating} /></div>
      </div>
      {r.title && <div className="review-title">{r.title}</div>}
      {r.body && <div className="review-body">{r.body}</div>}
      {p && (
        <div style={{ marginTop: "1rem" }}>
          <span style={{ fontSize: "0.85rem", color: "var(--primary)", cursor: "pointer" }} onClick={() => navigate("product", { id: p.id })}>
            View Product →
          </span>
        </div>
      )}
    </div>
  );
}
