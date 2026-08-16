import { useApp } from "../context/AppContext";
import { money } from "../api";
import { IconCart, IconHeart } from "./Icons";

export default function ProductCard({ p }) {
  const { brand, navigate, addToCart, addToWishlist } = useApp();
  const b = brand(p.brandId);
  const discount = p.originalPrice ? Math.round((1 - p.price / p.originalPrice) * 100) : 0;

  return (
    <div className="product-card" onClick={() => navigate("product", { id: p.id })}>
      <div className="product-card-img-wrap">
        <img className="product-card-img" src={p.imageUrl} alt={p.name} loading="lazy" />
        {p.imageUrl2 && <img className="product-card-img2" src={p.imageUrl2} alt={p.name} loading="lazy" />}
        <div className="card-badges">
          {p.isNew && <span className="badge badge-new">NEW</span>}
          {p.isBestseller && <span className="badge badge-best">BEST</span>}
          {discount > 0 && <span className="badge badge-sale">{discount}% OFF</span>}
        </div>
        <div className="card-actions" onClick={(e) => e.stopPropagation()}>
          <button className="card-action-btn" title="Add to cart" onClick={() => addToCart(p.id)}>
            <IconCart />
          </button>
          <button className="card-action-btn" title="Add to wishlist" onClick={() => addToWishlist(p.id)}>
            <IconHeart />
          </button>
        </div>
      </div>
      <div className="product-card-body">
        <div className="card-brand">{b ? b.name : ""}</div>
        <div className="card-name line-clamp-2">{p.name}</div>
        <div className="card-prices">
          <span className="card-price">{money(p.price)}</span>
          {p.originalPrice && <span className="card-original">{money(p.originalPrice)}</span>}
        </div>
      </div>
    </div>
  );
}
