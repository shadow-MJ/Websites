import { useState } from "react";
import { useApp } from "../context/AppContext";
import ProductCard from "../components/ProductCard";
import { IconFilter } from "../components/Icons";

export default function Shop() {
  const { products, brands, categories, brand, cat, shopFilters, setShopFilters } = useApp();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [localSearch, setLocalSearch] = useState(shopFilters.search || "");

  function toggleCatFilter(slug, checked) {
    setShopFilters((prev) => ({ ...prev, category: checked ? slug : null }));
  }
  function toggleBrandFilter(slug, checked) {
    setShopFilters((prev) => ({ ...prev, brand: checked ? slug : null }));
  }
  function clearShopFilters() {
    setShopFilters({ category: null, brand: null, search: "" });
    setLocalSearch("");
  }
  function onSearchInput(e) {
    const val = e.target.value;
    setLocalSearch(val);
    setShopFilters((prev) => ({ ...prev, search: val }));
  }

  const q = (shopFilters.search || "").toLowerCase();
  const filtered = products.filter((p) => {
    const b = brand(p.brandId);
    const c = cat(p.catId);
    const matchCat = !shopFilters.category || (c && c.slug === shopFilters.category);
    const matchBrand = !shopFilters.brand || (b && b.slug === shopFilters.brand);
    const matchSearch = !q || p.name.toLowerCase().includes(q) || (b && b.name.toLowerCase().includes(q));
    return matchCat && matchBrand && matchSearch;
  });

  return (
    <div id="page-shop" className="page active">
      <div className="container" style={{ paddingTop: "3rem", paddingBottom: "5rem" }}>
        <div className="section-head">
          <div className="section-title">Shop All</div>
          <p style={{ color: "var(--muted-fg)", maxWidth: "500px", margin: "0 auto", fontSize: "0.9rem" }}>
            Discover our full collection of premium Korean skincare products.
          </p>
        </div>
        <div className="shop-layout">
          <div className={`shop-sidebar ${sidebarOpen ? "mobile-open" : ""}`}>
            <div className="filter-group">
              <div className="shop-sidebar-title">CATEGORIES</div>
              <div>
                {categories.map((c) => (
                  <label className="filter-item" key={c.id}>
                    <input
                      type="checkbox"
                      checked={shopFilters.category === c.slug}
                      onChange={(e) => toggleCatFilter(c.slug, e.target.checked)}
                    />
                    {c.name}
                  </label>
                ))}
              </div>
            </div>
            <div className="filter-group">
              <div className="shop-sidebar-title">BRANDS</div>
              <div>
                {brands.map((b) => (
                  <label className="filter-item" key={b.id}>
                    <input
                      type="checkbox"
                      checked={shopFilters.brand === b.slug}
                      onChange={(e) => toggleBrandFilter(b.slug, e.target.checked)}
                    />
                    {b.name}
                  </label>
                ))}
              </div>
            </div>
          </div>

          <div className="shop-main">
            <div className="shop-toolbar">
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <button className="btn btn-outline btn-sm filters-mobile-btn" onClick={() => setSidebarOpen((o) => !o)}>
                  <IconFilter />
                  Filters
                </button>
                <div className="shop-count">Showing {filtered.length} products</div>
              </div>
              <div className="search-input-wrap">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.35-4.35" strokeLinecap="round" />
                </svg>
                <input
                  type="text"
                  className="shop-search-input"
                  placeholder="Search products..."
                  value={localSearch}
                  onChange={onSearchInput}
                />
              </div>
            </div>

            {filtered.length === 0 ? (
              <div className="no-products">
                <h3>No products found</h3>
                <p style={{ color: "var(--muted-fg)", margin: "0.5rem 0 1.5rem" }}>
                  Try adjusting your filters or search term.
                </p>
                <button className="btn btn-outline" onClick={clearShopFilters}>
                  Clear all filters
                </button>
              </div>
            ) : (
              <div className="product-grid">
                {filtered.map((p) => (
                  <ProductCard key={p.id} p={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
