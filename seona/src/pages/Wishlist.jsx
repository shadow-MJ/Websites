import { useApp } from "../context/AppContext";
import { money } from "../api";
import { IconHeart, IconCart } from "../components/Icons";

export default function Wishlist() {
  const { wishlist, products, brand, navigate, addToCart, removeFromWishlist, toast } = useApp();

  if (wishlist.length === 0) {
    return (
      <div id="page-wishlist" className="page active">
        <div className="container" style={{ paddingTop: "3rem", paddingBottom: "5rem" }}>
          <div className="section-head"><div className="section-title">Your Wishlist</div></div>
          <div className="empty-state">
            <IconHeart />
            <h3>Your wishlist is empty</h3>
            <p>Save items you love and come back later.</p>
            <button className="btn btn-primary" onClick={() => navigate("shop")}>DISCOVER PRODUCTS</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="page-wishlist" className="page active">
      <div className="container" style={{ paddingTop: "3rem", paddingBottom: "5rem" }}>
        <div className="section-head"><div className="section-title">Your Wishlist</div></div>
        <div style={{ maxWidth: "56rem", margin: "0 auto" }}>
          {wishlist.map((id) => {
            const p = products.find((x) => x.id === id);
            if (!p) return null;
            const b = brand(p.brandId);
            return (
              <div className="wishlist-item" key={p.id}>
                <img className="wishlist-item-img" src={p.imageUrl} alt={p.name} onClick={() => navigate("product", { id: p.id })} />
                <div className="wishlist-item-body">
                  <div
                    style={{ fontSize: "0.7rem", fontWeight: 700, color: "var(--muted-fg)", letterSpacing: "0.1em", textTransform: "uppercase", cursor: "pointer", marginBottom: "0.25rem" }}
                    onClick={() => navigate("shop", { brand: b?.slug })}
                  >
                    {b?.name || ""}
                  </div>
                  <div
                    style={{ fontSize: "1rem", fontWeight: 500, cursor: "pointer", marginBottom: "0.5rem" }}
                    onClick={() => navigate("product", { id: p.id })}
                  >
                    {p.name}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <span style={{ fontWeight: 700 }}>{money(p.price)}</span>
                    {p.originalPrice && (
                      <span style={{ fontSize: "0.8rem", color: "var(--muted-fg)", textDecoration: "line-through" }}>
                        {money(p.originalPrice)}
                      </span>
                    )}
                  </div>
                </div>
                <div className="wishlist-item-actions">
                  <button
                    className="btn btn-primary btn-sm w-full"
                    style={{ borderRadius: "var(--radius)" }}
                    onClick={() => {
                      addToCart(p.id, 1, true);
                      toast("Added to cart", `${p.name} added.`);
                    }}
                  >
                    <IconCart />
                    ADD TO CART
                  </button>
                  <button className="btn btn-danger btn-sm w-full" style={{ borderRadius: "var(--radius)" }} onClick={() => removeFromWishlist(p.id)}>
                    REMOVE
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
