// ===== DATA =====
const WHATSAPP_NUMBER = "8801706392496";
const MESSENGER_USERNAME = "joy.tmke.chudche";
const CONTACT_EMAIL = "bijoyhasan1612@gmail.com";

const BRANDS = [
  {
    id: 1,
    name: "I'm From",
    slug: "im-from",
    description:
      "A Korean brand focused on natural ingredients sourced from Korea's finest regions",
    country: "South Korea",
  },
  {
    id: 2,
    name: "COSRX",
    slug: "cosrx",
    description:
      "Beloved K-beauty brand known for effective, no-fuss skincare solutions",
    country: "South Korea",
  },
  {
    id: 3,
    name: "Some By Mi",
    slug: "some-by-mi",
    description:
      "Results-driven K-beauty brand popular for their AHA/BHA/PHA toner series",
    country: "South Korea",
  },
  {
    id: 4,
    name: "Innisfree",
    slug: "innisfree",
    description: "Natural brand inspired by the pristine island of Jeju",
    country: "South Korea",
  },
  {
    id: 5,
    name: "Klairs",
    slug: "klairs",
    description:
      "Minimalist K-beauty brand focused on sensitive skin solutions",
    country: "South Korea",
  },
  {
    id: 6,
    name: "Laneige",
    slug: "laneige",
    description:
      "Premium Korean beauty brand famous for its water science technology",
    country: "South Korea",
  },
  {
    id: 7,
    name: "Etude House",
    slug: "etude-house",
    description:
      "Playful and youthful Korean beauty brand with a wide color range",
    country: "South Korea",
  },
  {
    id: 8,
    name: "Benton",
    slug: "benton",
    description: "Science-backed K-beauty with clean, minimal ingredients",
    country: "South Korea",
  },
];

const CATEGORIES = [
  {
    id: 1,
    name: "Toner",
    slug: "toner",
    description: "Hydrating and balancing toners for all skin types",
    imageUrl:
      "https://images.unsplash.com/photo-1617897903246-719242758050?w=600&q=80",
  },
  {
    id: 2,
    name: "Serum",
    slug: "serum",
    description: "Targeted treatment serums for specific skin concerns",
    imageUrl:
      "https://images.unsplash.com/photo-1631390942025-f2dbece48f68?w=600&q=80",
  },
  {
    id: 3,
    name: "Moisturizer",
    slug: "moisturizer",
    description: "Nourishing creams and lotions for daily hydration",
    imageUrl:
      "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=600&q=80",
  },
  {
    id: 4,
    name: "Cleanser",
    slug: "cleanser",
    description: "Gentle cleansers that remove impurities without stripping",
    imageUrl:
      "https://images.unsplash.com/photo-1601612628452-9e99ced43524?w=600&q=80",
  },
  {
    id: 5,
    name: "Sunscreen",
    slug: "sunscreen",
    description: "SPF protection for everyday use",
    imageUrl:
      "https://images.unsplash.com/photo-1567721913486-6585f069b3c3?w=600&q=80",
  },
  {
    id: 6,
    name: "Mask",
    slug: "mask",
    description: "Sheet masks and wash-off masks for intensive care",
    imageUrl:
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&q=80",
  },
  {
    id: 7,
    name: "Eye Care",
    slug: "eye-care",
    description: "Targeted treatments for the delicate eye area",
    imageUrl:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&q=80",
  },
  {
    id: 8,
    name: "Lip Care",
    slug: "lip-care",
    description: "Nourishing treatments for soft, smooth lips",
    imageUrl:
      "https://images.unsplash.com/photo-1621786030484-4c855eed6974?w=600&q=80",
  },
];

const PRODUCTS = [
  {
    id: 1,
    name: "Black Rice Toner",
    slug: "black-rice-toner",
    brandId: 1,
    catId: 1,
    price: 18.9,
    originalPrice: 22.0,
    imageUrl:
      "https://images.unsplash.com/photo-1617897903246-719242758050?w=600&q=80",
    imageUrl2: "",
    isNew: true,
    isBestseller: true,
    isFeatured: true,
    inStock: true,
    rating: 4.8,
    reviewCount: 247,
    description:
      "A lightweight toner formulated with black rice extract to deliver intense hydration while controlling sebum for oily skin.",
    benefits:
      "Controls excess oil and sebum\nDeep hydration with black rice extract\nSmooths and brightens skin tone",
    ingredients:
      "Black Rice Extract, Niacinamide, Hyaluronic Acid, Centella Asiatica, Glycerin",
    howToUse:
      "After cleansing, pour a small amount onto a cotton pad or hands. Pat gently onto face and neck until fully absorbed.",
  },
  {
    id: 2,
    name: "AHA/BHA/PHA 30 Days Miracle Toner",
    slug: "some-by-mi-miracle-toner",
    brandId: 3,
    catId: 1,
    price: 19.0,
    originalPrice: null,
    imageUrl:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&q=80",
    imageUrl2: "",
    isNew: false,
    isBestseller: true,
    isFeatured: true,
    inStock: true,
    rating: 4.9,
    reviewCount: 512,
    description:
      "The cult-favorite toner that cleared acne for thousands. This triple-acid formula gently exfoliates dead skin, reduces blemishes, and visibly improves skin texture in just 30 days.",
    benefits:
      "Exfoliates dead skin cells\nReduces acne and blemishes\nImproves skin texture",
    ingredients:
      "AHA (Glycolic Acid), BHA (Salicylic Acid), PHA (Gluconolactone), Centella Asiatica, Tea Tree Extract",
    howToUse:
      "Apply to cotton pad and gently swipe over face. Start with 2-3 times per week.",
  },
  {
    id: 3,
    name: "Snail Mucin 96% Power Repairing Essence",
    slug: "cosrx-snail-mucin-essence",
    brandId: 2,
    catId: 2,
    price: 21.0,
    originalPrice: null,
    imageUrl:
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?w=600&q=80",
    imageUrl2: "",
    isNew: false,
    isBestseller: true,
    isFeatured: true,
    inStock: true,
    rating: 4.9,
    reviewCount: 1024,
    description:
      "The iconic essence that sparked a global K-beauty obsession. 96% snail secretion filtrate repairs damage, fades scars, and delivers next-level hydration.",
    benefits:
      "Repairs damaged skin barrier\nFades acne scars and dark spots\nIntense hydration",
    ingredients:
      "Snail Secretion Filtrate 96%, Sodium Hyaluronate, Betaine, Allantoin, Panthenol",
    howToUse: "Apply 2-3 drops to cleansed skin. Gently pat in until absorbed.",
  },
  {
    id: 4,
    name: "Supple Preparation Unscented Toner",
    slug: "klairs-supple-toner",
    brandId: 5,
    catId: 1,
    price: 22.0,
    originalPrice: 26.0,
    imageUrl:
      "https://images.unsplash.com/photo-1621786030484-4c855eed6974?w=600&q=80",
    imageUrl2: "",
    isNew: true,
    isBestseller: false,
    isFeatured: false,
    inStock: true,
    rating: 4.7,
    reviewCount: 389,
    description:
      "A fragrance-free toner for sensitive skin that delivers long-lasting hydration with a blend of soothing botanical ingredients.",
    benefits:
      "Deeply hydrates sensitive skin\nFragrance-free and gentle\nStrengthens skin barrier",
    ingredients:
      "Hyaluronic Acid, Beta-glucan, Centella Asiatica, Aloe Vera, Ceramide",
    howToUse:
      "After cleansing, apply a generous amount to hands or cotton pad. Press into skin.",
  },
  {
    id: 5,
    name: "Water Sleeping Mask",
    slug: "laneige-water-sleeping-mask",
    brandId: 6,
    catId: 6,
    price: 25.0,
    originalPrice: null,
    imageUrl:
      "https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=600&q=80",
    imageUrl2: "",
    isNew: false,
    isBestseller: true,
    isFeatured: true,
    inStock: true,
    rating: 4.8,
    reviewCount: 678,
    description:
      "The overnight miracle that started it all. This gel-type sleeping mask locks in moisture while you sleep.",
    benefits:
      "Overnight intensive hydration\nWakes up to plump, dewy skin\nSuitable for all skin types",
    ingredients:
      "Hydro Ionized Mineral Water, Beta-Glucan, Apricot Extract, Evening Primrose",
    howToUse:
      "Use as the last step of your evening skincare. Apply a generous layer and leave on overnight.",
  },
  {
    id: 6,
    name: "Green Tea Hyaluronic Acid Serum",
    slug: "innisfree-green-tea-serum",
    brandId: 4,
    catId: 2,
    price: 24.0,
    originalPrice: 28.0,
    imageUrl:
      "https://images.unsplash.com/photo-1631390942025-f2dbece48f68?w=600&q=80",
    imageUrl2: "",
    isNew: true,
    isBestseller: false,
    isFeatured: false,
    inStock: true,
    rating: 4.6,
    reviewCount: 203,
    description:
      "Powered by Jeju green tea and 3 types of hyaluronic acid, this serum provides multi-layer hydration that plumps fine lines.",
    benefits:
      "Triple hyaluronic acid complex\nJeju green tea antioxidants\nPlumps fine lines and wrinkles",
    ingredients:
      "Jeju Green Tea Extract, Sodium Hyaluronate, Hydrolyzed Hyaluronic Acid, Panthenol, Niacinamide",
    howToUse:
      "Apply 2-3 drops to cleansed face after toner. Follow with moisturizer.",
  },
  {
    id: 7,
    name: "BHA Blackhead Power Liquid",
    slug: "cosrx-bha-blackhead-power",
    brandId: 2,
    catId: 2,
    price: 24.0,
    originalPrice: null,
    imageUrl:
      "https://images.unsplash.com/photo-1567721913486-6585f069b3c3?w=600&q=80",
    imageUrl2: "",
    isNew: true,
    isBestseller: true,
    isFeatured: false,
    inStock: true,
    rating: 4.7,
    reviewCount: 445,
    description:
      "A targeted BHA exfoliant that dissolves blackheads and clogged pores with 4% betaine salicylate.",
    benefits:
      "Dissolves blackheads and clogged pores\nMinimizes pore appearance\nRefines skin texture",
    ingredients:
      "Betaine Salicylate 4%, Willow Bark Water, Niacinamide, Allantoin, Panthenol",
    howToUse:
      "Apply a thin layer using a cotton pad. Leave on for 15-20 minutes. Use 2-3 times per week.",
  },
  {
    id: 8,
    name: "Rice Toner",
    slug: "im-from-rice-toner",
    brandId: 1,
    catId: 1,
    price: 29.0,
    originalPrice: null,
    imageUrl:
      "https://images.unsplash.com/photo-1601612628452-9e99ced43524?w=600&q=80",
    imageUrl2: "",
    isNew: false,
    isBestseller: true,
    isFeatured: false,
    inStock: true,
    rating: 4.9,
    reviewCount: 367,
    description:
      "A luminosity-boosting toner with 77.78% rice extract for brightening and firming. Leaves skin looking lit-from-within.",
    benefits:
      "Brightens skin with 77.78% rice extract\nFirms and improves elasticity\nLuminous satin finish",
    ingredients:
      "Rice Extract 77.78%, Niacinamide, Adenosine, Hyaluronic Acid, Ceramide",
    howToUse:
      "Apply a generous amount to hands or cotton pad. Pat gently into skin in upward motions.",
  },
];

let reviews = [
  {
    id: 1,
    productId: 3,
    reviewerName: "Sarah K.",
    rating: 5,
    title: "Life-changing essence!",
    body: "I've been using this for 3 months and my skin has never looked better. The snail mucin is incredibly soothing.",
    createdAt: "2026-03-15",
  },
  {
    id: 2,
    productId: 2,
    reviewerName: "Emily L.",
    rating: 5,
    title: "Actually works in 30 days!",
    body: "Was skeptical but this toner genuinely cleared my acne. My skin texture has improved dramatically.",
    createdAt: "2026-04-02",
  },
  {
    id: 3,
    productId: 5,
    reviewerName: "Mia T.",
    rating: 5,
    title: "Best sleeping mask ever",
    body: "I wake up with the most hydrated, glowy skin. Worth every penny!",
    createdAt: "2026-04-20",
  },
  {
    id: 4,
    productId: 1,
    reviewerName: "Jenna R.",
    rating: 4,
    title: "Great for oily skin",
    body: "The black rice toner keeps my skin balanced throughout the day. Love how lightweight it feels.",
    createdAt: "2026-05-01",
  },
  {
    id: 5,
    productId: 8,
    reviewerName: "Amy C.",
    rating: 5,
    title: "Glow like no other",
    body: "The rice toner gives the most beautiful natural glow. I get compliments every day.",
    createdAt: "2026-06-10",
  },
];

// ===== STATE =====
let cart = JSON.parse(localStorage.getItem("seona_cart") || "[]");
let wishlist = JSON.parse(localStorage.getItem("seona_wishlist") || "[]");
let currentPage = "home";
let currentProductId = null;
let shopFilters = { category: null, brand: null, search: "" };

// ===== HELPERS =====
const $ = (id) => document.getElementById(id);
const brand = (id) => BRANDS.find((b) => b.id === id);
const cat = (id) => CATEGORIES.find((c) => c.id === id);
function money(amount) {
  return `৳${Number(amount).toLocaleString("en-BD", { maximumFractionDigits: 0 })}`;
}

function saveCart() {
  localStorage.setItem("seona_cart", JSON.stringify(cart));
  updateCounts();
}
function saveWishlist() {
  localStorage.setItem("seona_wishlist", JSON.stringify(wishlist));
  updateCounts();
}

function updateCounts() {
  const cartCount = cart.reduce((a, i) => a + i.qty, 0);
  const wlCount = wishlist.length;
  $("cart-badge").textContent = cartCount;
  $("cart-badge").style.display = cartCount > 0 ? "flex" : "none";
  $("wishlist-count").textContent = wlCount;
}

function toast(title, msg, type = "success") {
  const el = document.createElement("div");
  el.className = `toast ${type}`;
  el.innerHTML = `<div class="toast-title">${title}</div><div style="font-size:0.8rem;opacity:0.8">${msg || ""}</div>`;
  $("toast-container").appendChild(el);
  setTimeout(() => el.remove(), 3500);
}

function starsHTML(rating, size = "1rem") {
  return Array(5)
    .fill(0)
    .map(
      (_, i) =>
        `<span style="font-size:${size};color:${i < Math.round(rating) ? "var(--primary)" : "#ddd"}">★</span>`,
    )
    .join("");
}

function formatDate(d) {
  return new Date(d).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

// ===== NAVIGATION =====
function navigate(page, params = {}) {
  document
    .querySelectorAll(".page")
    .forEach((p) => p.classList.remove("active"));
  const el = $("page-" + page);
  if (!el) return;
  el.classList.add("active");
  currentPage = page;
  window.scrollTo(0, 0);

  if (page === "home") renderHome();
  else if (page === "shop") {
    applyShopParams(params);
    renderShop();
  } else if (page === "product") {
    currentProductId = params.id;
    renderProduct(params.id);
  } else if (page === "cart") renderCart();
  else if (page === "wishlist") renderWishlist();
  else if (page === "brands") renderBrands();
  else if (page === "categories") renderCategories();
  else if (page === "review") renderReviews();
}

function applyShopParams(params) {
  if (params.category !== undefined) shopFilters.category = params.category;
  if (params.brand !== undefined) shopFilters.brand = params.brand;
  if (params.search !== undefined) shopFilters.search = params.search;
}

// ===== SEARCH =====
let searchOpen = false;
function toggleSearch() {
  searchOpen = !searchOpen;
  $("search-toggle-btn").classList.toggle("hidden", searchOpen);
  $("search-form").classList.toggle("hidden", !searchOpen);
  if (searchOpen) $("search-input-nav").focus();
  else $("search-input-nav").value = "";
}

function doNavSearch(e) {
  e.preventDefault();
  const q = $("search-input-nav").value.trim();
  if (q) {
    shopFilters = { category: null, brand: null, search: q };
    navigate("shop");
  }
  toggleSearch();
}

document.addEventListener("click", (e) => {
  const wrap = $("search-bar-wrap");
  if (searchOpen && wrap && !wrap.contains(e.target)) toggleSearch();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && searchOpen) toggleSearch();
});

// ===== DRAWER =====
function openDrawer() {
  $("drawer").classList.add("open");
  $("drawer-overlay").style.display = "block";
}
function closeDrawer() {
  $("drawer").classList.remove("open");
  $("drawer-overlay").style.display = "none";
}

// ===== SIDEBAR TOGGLE (mobile) =====
function toggleSidebar() {
  $("shop-sidebar").classList.toggle("mobile-open");
}

// ===== PRODUCT CARD =====
function productCardHTML(p) {
  const b = brand(p.brandId);
  const discount = p.originalPrice
    ? Math.round((1 - p.price / p.originalPrice) * 100)
    : 0;
  return `
    <div class="product-card" onclick="navigate('product',{id:${p.id}})">
      <div class="product-card-img-wrap">
        <img class="product-card-img" src="${p.imageUrl}" alt="${p.name}" loading="lazy" />
        ${p.imageUrl2 ? `<img class="product-card-img2" src="${p.imageUrl2}" alt="${p.name}" loading="lazy" />` : ""}
        <div class="card-badges">
          ${p.isNew ? '<span class="badge badge-new">NEW</span>' : ""}
          ${p.isBestseller ? '<span class="badge badge-best">BEST</span>' : ""}
          ${discount > 0 ? `<span class="badge badge-sale">${discount}% OFF</span>` : ""}
        </div>
        <div class="card-actions" onclick="event.stopPropagation()">
          <button class="card-action-btn" title="Add to cart" onclick="addToCart(${p.id})">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-width="2" d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
          </button>
          <button class="card-action-btn" title="Add to wishlist" onclick="addToWishlist(${p.id})">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-width="2" d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          </button>
        </div>
      </div>
      <div class="product-card-body">
        <div class="card-brand">${b ? b.name : ""}</div>
        <div class="card-name line-clamp-2">${p.name}</div>
        <div class="card-prices">
          <span class="card-price">${money(p.price)}</span>
          ${p.originalPrice ? `<span class="card-original">${money(p.originalPrice)}</span>` : ""}
        </div>
      </div>
    </div>`;
}

// ===== HOME =====
function renderHome() {
  const newArrivals = PRODUCTS.filter((p) => p.isNew);
  const bestsellers = PRODUCTS.filter((p) => p.isBestseller);
  $("new-arrivals-grid").innerHTML = newArrivals
    .slice(0, 4)
    .map(productCardHTML)
    .join("");
  $("bestsellers-grid").innerHTML = bestsellers
    .slice(0, 4)
    .map(productCardHTML)
    .join("");
  $("brands-strip").innerHTML = BRANDS.slice(0, 6)
    .map(
      (b) =>
        `<span class="brand-strip-item" onclick="navigate('shop',{brand:'${b.slug}'})">${b.name}</span>`,
    )
    .join("");
}

// ===== SHOP =====
function renderShop() {
  // Sync filters UI
  const catContainer = $("cat-filters");
  catContainer.innerHTML = CATEGORIES.map(
    (c) => `
    <label class="filter-item">
      <input type="checkbox" ${shopFilters.category === c.slug ? "checked" : ""} onchange="toggleCatFilter('${c.slug}',this.checked)" />
      ${c.name}
    </label>`,
  ).join("");

  const brandContainer = $("brand-filters");
  brandContainer.innerHTML = BRANDS.map(
    (b) => `
    <label class="filter-item">
      <input type="checkbox" ${shopFilters.brand === b.slug ? "checked" : ""} onchange="toggleBrandFilter('${b.slug}',this.checked)" />
      ${b.name}
    </label>`,
  ).join("");

  const searchVal = $("shop-search") ? $("shop-search").value : "";
  const q = (shopFilters.search || searchVal || "").toLowerCase();

  let filtered = PRODUCTS.filter((p) => {
    const b = brand(p.brandId);
    const c = cat(p.catId);
    const matchCat =
      !shopFilters.category || (c && c.slug === shopFilters.category);
    const matchBrand =
      !shopFilters.brand || (b && b.slug === shopFilters.brand);
    const matchSearch =
      !q ||
      p.name.toLowerCase().includes(q) ||
      (b && b.name.toLowerCase().includes(q));
    return matchCat && matchBrand && matchSearch;
  });

  $("shop-count").textContent = `Showing ${filtered.length} products`;
  const grid = $("shop-grid");
  const empty = $("shop-empty");
  if (filtered.length === 0) {
    grid.innerHTML = "";
    empty.classList.remove("hidden");
  } else {
    grid.innerHTML = filtered.map(productCardHTML).join("");
    empty.classList.add("hidden");
  }

  if ($("shop-search") && shopFilters.search)
    $("shop-search").value = shopFilters.search;
}

function toggleCatFilter(slug, checked) {
  shopFilters.category = checked ? slug : null;
  if (checked) {
    document.querySelectorAll("#cat-filters input").forEach((el) => {
      if (
        el.parentElement.textContent.trim() !==
        CATEGORIES.find((c) => c.slug === slug)?.name
      )
        el.checked = false;
    });
  }
  renderShop();
}

function toggleBrandFilter(slug, checked) {
  shopFilters.brand = checked ? slug : null;
  if (checked) {
    document.querySelectorAll("#brand-filters input").forEach((el) => {
      if (
        el.parentElement.textContent.trim() !==
        BRANDS.find((b) => b.slug === slug)?.name
      )
        el.checked = false;
    });
  }
  renderShop();
}

function clearShopFilters() {
  shopFilters = { category: null, brand: null, search: "" };
  if ($("shop-search")) $("shop-search").value = "";
  renderShop();
}

// ===== PRODUCT DETAIL =====
let detailQty = 1;
function renderProduct(id) {
  const p = PRODUCTS.find((x) => x.id === id);
  if (!p) {
    navigate("shop");
    return;
  }
  const b = brand(p.brandId);
  const c = cat(p.catId);
  detailQty = 1;

  // Breadcrumbs
  $("product-breadcrumbs").innerHTML = `
    <span onclick="navigate('home')">Home</span> ›
    <span onclick="navigate('shop')">Shop</span> ›
    ${c ? `<span onclick="navigate('shop',{category:'${c.slug}'})">${c.name}</span> › ` : ""}
    <span style="color:var(--fg)">${p.name}</span>`;

  // Images
  const images = [p.imageUrl];
  if (p.imageUrl2) images.push(p.imageUrl2);

  $("product-detail-layout").innerHTML = `
    <div class="product-images">
      <div class="product-thumbs">
        ${images
          .map(
            (img, i) => `
          <button class="product-thumb ${i === 0 ? "active" : ""}" onclick="switchImg(${i},'${img}',this)">
            <img src="${img}" alt="view ${i + 1}" />
          </button>`,
          )
          .join("")}
      </div>
      <div class="product-main-img" id="main-img-wrap">
        <img id="main-img" src="${images[0]}" alt="${p.name}" />
      </div>
    </div>
    <div class="product-info">
      <div class="product-brand-link" onclick="navigate('shop',{brand:'${b?.slug}'})">${b?.name || ""}</div>
      <h1 class="product-title">${p.name}</h1>
      <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:0.5rem">
        <div class="stars">${starsHTML(p.rating)}</div>
        <span style="font-size:0.85rem;color:var(--muted-fg)">(${p.reviewCount} reviews)</span>
      </div>
      <div class="product-price-row">
        <span>${money(p.price)}</span>
        ${p.originalPrice ? `<span class="product-og-price">${money(p.originalPrice)}</span>` : ""}
      </div>
      <p class="product-desc">${p.description}</p>
      <div class="qty-row">
        <span class="qty-label">Quantity</span>
        <div class="qty-ctrl">
          <button class="qty-btn" onclick="changeQty(-1)">−</button>
          <span class="qty-num" id="qty-display">1</span>
          <button class="qty-btn" onclick="changeQty(1)">+</button>
        </div>
      </div>
      <div class="product-cta">
        <button class="btn btn-primary" style="flex:1;border-radius:9999px" onclick="addToCart(${p.id},detailQty);toast('Added to cart','${p.name} added to your cart.')">
          ${p.inStock ? "ADD TO CART" : "OUT OF STOCK"}
        </button>
        <button class="btn btn-outline" style="border-radius:9999px;padding:0.7rem 1.2rem" onclick="addToWishlist(${p.id})">
          <svg style="width:1.2rem;height:1.2rem" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-width="2" d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        </button>
      </div>
    </div>`;

  // Tabs
  const prodReviews = reviews.filter((r) => r.productId === id);
  $("product-tabs-nav").innerHTML = [
    "Details",
    "Ingredients",
    "How to Use",
    `Reviews (${prodReviews.length})`,
  ]
    .map(
      (t, i) =>
        `<button class="tab-btn ${i === 0 ? "active" : ""}" onclick="switchTab(${i},this)">${t}</button>`,
    )
    .join("");

  $("product-tabs-body").innerHTML = `
    <div class="tab-panel active" id="tab-0">
      <h3 class="satisfy" style="font-size:2rem;margin-bottom:1rem">Product Details</h3>
      <p style="color:var(--muted-fg);line-height:1.7">${p.description}</p>
      ${p.benefits ? `<h4 style="margin-top:1.5rem;margin-bottom:0.5rem;color:#555">Key Benefits:</h4><p style="color:var(--muted-fg);line-height:1.7;white-space:pre-line">${p.benefits}</p>` : ""}
    </div>
    <div class="tab-panel" id="tab-1">
      <h3 class="satisfy" style="font-size:2rem;margin-bottom:1rem">Ingredients</h3>
      <p style="color:var(--muted-fg);line-height:1.7">${p.ingredients || "No ingredient information available."}</p>
    </div>
    <div class="tab-panel" id="tab-2">
      <h3 class="satisfy" style="font-size:2rem;margin-bottom:1rem">How to Use</h3>
      <p style="color:var(--muted-fg);line-height:1.7">${p.howToUse || "Apply evenly to clean skin as needed."}</p>
    </div>
    <div class="tab-panel" id="tab-3">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:2rem">
        <h3 class="satisfy" style="font-size:2rem">Customer Reviews</h3>
        <button class="btn btn-outline btn-sm" onclick="navigate('review')">Write a Review</button>
      </div>
      ${
        prodReviews.length > 0
          ? prodReviews.map(reviewItemHTML).join("")
          : '<div class="empty-state"><p>No reviews yet. Be the first!</p></div>'
      }
    </div>`;
}

function switchImg(i, src, btn) {
  $("main-img").src = src;
  document
    .querySelectorAll(".product-thumb")
    .forEach((t) => t.classList.remove("active"));
  btn.classList.add("active");
}

function changeQty(delta) {
  detailQty = Math.max(1, detailQty + delta);
  $("qty-display").textContent = detailQty;
}

function switchTab(i, btn) {
  document
    .querySelectorAll(".tab-btn")
    .forEach((b) => b.classList.remove("active"));
  document
    .querySelectorAll(".tab-panel")
    .forEach((p) => p.classList.remove("active"));
  btn.classList.add("active");
  $("tab-" + i).classList.add("active");
}

// ===== CART =====
function addToCart(productId, qty = 1) {
  const existing = cart.find((i) => i.id === productId);
  if (existing) existing.qty += qty;
  else cart.push({ id: productId, qty });
  saveCart();
  const p = PRODUCTS.find((x) => x.id === productId);
  if (currentPage !== "product")
    toast("Added to cart", p?.name + " added to your cart.");
}

function removeFromCart(productId) {
  cart = cart.filter((i) => i.id !== productId);
  saveCart();
  renderCart();
  toast("Removed", "Product removed from your cart.");
}

function updateCartQty(productId, newQty) {
  if (newQty < 1) return;
  const item = cart.find((i) => i.id === productId);
  if (item) item.qty = newQty;
  saveCart();
  renderCart();
}

function renderCart() {
  const subtotal = cart.reduce((a, i) => {
    const p = PRODUCTS.find((x) => x.id === i.id);
    return a + (p ? p.price * i.qty : 0);
  }, 0);
  const total = subtotal;

  if (cart.length === 0) {
    $("cart-content").innerHTML = `
      <div class="empty-state">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-width="2" d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
        <h3>Your shopping bag is empty</h3>
        <p>Looks like you haven't added anything yet.</p>
        <button class="btn btn-primary" onclick="navigate('shop')">START SHOPPING</button>
      </div>`;
    return;
  }

  const itemsHTML = cart
    .map((i) => {
      const p = PRODUCTS.find((x) => x.id === i.id);
      if (!p) return "";
      const b = brand(p.brandId);
      return `
      <div class="cart-item">
        <img class="cart-item-img" src="${p.imageUrl}" alt="${p.name}" onclick="navigate('product',{id:${p.id}})" />
        <div class="cart-item-body">
          <div class="cart-item-brand" onclick="navigate('shop',{brand:'${b?.slug}'})">${b?.name || ""}</div>
          <div class="cart-item-name" onclick="navigate('product',{id:${p.id}})">${p.name}</div>
          <div class="cart-item-price">${money(p.price)}</div>
          <div class="cart-item-controls">
            <div class="qty-ctrl" style="border:1px solid var(--border);border-radius:var(--radius)">
              <button class="qty-btn" style="width:2rem;height:2rem" onclick="updateCartQty(${p.id},${i.qty - 1})" ${i.qty <= 1 ? "disabled" : ""}>−</button>
              <span class="qty-num">${i.qty}</span>
              <button class="qty-btn" style="width:2rem;height:2rem" onclick="updateCartQty(${p.id},${i.qty + 1})">+</button>
            </div>
            <button class="remove-btn" onclick="removeFromCart(${p.id})">
              <svg style="width:1rem;height:1rem" fill="none" stroke="currentColor" viewBox="0 0 24 24"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg>
              Remove
            </button>
          </div>
        </div>
        <div style="font-weight:700;font-size:1rem;flex-shrink:0">${money(p.price * i.qty)}</div>
      </div>`;
    })
    .join("");

  $("cart-content").innerHTML = `
    <div class="cart-layout">
      <div class="cart-items-col">${itemsHTML}</div>
      <div class="cart-summary-col">
        <div class="order-summary">
          <h3>Order Summary</h3>
          <div class="summary-row"><span style="color:var(--muted-fg)">Subtotal</span><span>${money(subtotal)}</span></div>
          <div class="summary-total"><span>Total</span><span>${money(total)}</span></div>
          <div class="free-shipping-hint">Free shipping on orders over ৳2,000.</div>

          <button class="btn btn-wa w-full" style="border-radius:9999px;padding:0.9rem;margin-bottom:0.75rem" onclick="whatsappCheckout()">
            <svg style="width:1.2rem;height:1.2rem;flex-shrink:0" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            PROCEED TO CHECKOUT
          </button>

          <button class="btn btn-ms w-full" style="border-radius:9999px;padding:0.9rem;margin-bottom:1rem" onclick="window.open('https://m.me/${MESSENGER_USERNAME}','_blank')">
            <svg style="width:1.2rem;height:1.2rem;flex-shrink:0" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 4.974 0 11.111c0 3.498 1.744 6.614 4.469 8.652V24l4.088-2.242c1.092.301 2.246.464 3.443.464 6.627 0 12-4.974 12-11.111S18.627 0 12 0zm1.191 14.963l-3.055-3.26-5.963 3.26L10.732 8l3.131 3.26L19.752 8l-6.561 6.963z"/></svg>
            ORDER VIA MESSENGER
          </button>

          <div class="text-center"><span style="font-size:0.875rem;color:var(--muted-fg);cursor:pointer;text-decoration:underline" onclick="navigate('shop')">Continue Shopping</span></div>
        </div>
      </div>
    </div>`;
}

function whatsappCheckout() {
  const subtotal = cart.reduce((a, i) => {
    const p = PRODUCTS.find((x) => x.id === i.id);
    return a + (p ? p.price * i.qty : 0);
  }, 0);
  const total = subtotal;
  const shippingNote =
    total >= 2000 ? "Shipping is free." : "Shipping charge is included.";
  const lines = cart
    .map((i) => {
      const p = PRODUCTS.find((x) => x.id === i.id);
      return `• ${p.name} x${i.qty} — ${money(p.price * i.qty)}`;
    })
    .join("\n");
  const msg = `Hi! I'd like to place an order from Seōna:\n\n${lines}\n\nSubtotal: ${money(subtotal)}\n*Total: ${money(total)}*\n${shippingNote}\n\nPlease let me know how to proceed. Thank you!`;
  window.open(
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`,
    "_blank",
  );
}

// ===== WHATSAPP SUPPORT WIDGET =====
function toggleWaPopup() {
  const popup = $("wa-popup");
  popup.classList.toggle("open");
}

function closeWaPopup() {
  $("wa-popup").classList.remove("open");
}

function whatsappSupport() {
  const msg =
    "Hi Seōna! I need some help/support regarding your products or my order.";
  window.open(
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`,
    "_blank",
  );
  closeWaPopup();
}

document.addEventListener("click", (e) => {
  const widget = $("wa-widget");
  if (widget && !widget.contains(e.target)) closeWaPopup();
});

// ===== WISHLIST =====
function addToWishlist(productId) {
  if (wishlist.includes(productId)) {
    toast("Already saved", "This product is already in your wishlist.");
    return;
  }
  wishlist.push(productId);
  saveWishlist();
  const p = PRODUCTS.find((x) => x.id === productId);
  toast("Added to wishlist", p?.name + " saved to your wishlist.");
}

function removeFromWishlist(productId) {
  wishlist = wishlist.filter((id) => id !== productId);
  saveWishlist();
  renderWishlist();
  toast("Removed", "Product removed from your wishlist.");
}

function renderWishlist() {
  if (wishlist.length === 0) {
    $("wishlist-content").innerHTML = `
      <div class="empty-state">
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-width="2" d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        <h3>Your wishlist is empty</h3>
        <p>Save items you love and come back later.</p>
        <button class="btn btn-primary" onclick="navigate('shop')">DISCOVER PRODUCTS</button>
      </div>`;
    return;
  }

  $("wishlist-content").innerHTML =
    `<div style="max-width:56rem;margin:0 auto">` +
    wishlist
      .map((id) => {
        const p = PRODUCTS.find((x) => x.id === id);
        if (!p) return "";
        const b = brand(p.brandId);
        return `
        <div class="wishlist-item">
          <img class="wishlist-item-img" src="${p.imageUrl}" alt="${p.name}" onclick="navigate('product',{id:${p.id}})" />
          <div class="wishlist-item-body">
            <div style="font-size:0.7rem;font-weight:700;color:var(--muted-fg);letter-spacing:0.1em;text-transform:uppercase;cursor:pointer;margin-bottom:0.25rem" onclick="navigate('shop',{brand:'${b?.slug}'})">${b?.name || ""}</div>
            <div style="font-size:1rem;font-weight:500;cursor:pointer;margin-bottom:0.5rem" onclick="navigate('product',{id:${p.id}})">${p.name}</div>
            <div style="display:flex;align-items:center;gap:0.5rem">
              <span style="font-weight:700">${money(p.price)}</span>
              ${p.originalPrice ? `<span style="font-size:0.8rem;color:var(--muted-fg);text-decoration:line-through">${money(p.originalPrice)}</span>` : ""}
            </div>
          </div>
          <div class="wishlist-item-actions">
            <button class="btn btn-primary btn-sm w-full" style="border-radius:var(--radius)" onclick="addToCart(${p.id});toast('Added to cart','${p.name} added.')">
              <svg style="width:1rem;height:1rem" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-width="2" d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
              ADD TO CART
            </button>
            <button class="btn btn-danger btn-sm w-full" style="border-radius:var(--radius)" onclick="removeFromWishlist(${p.id})">
              REMOVE
            </button>
          </div>
        </div>`;
      })
      .join("") +
    "</div>";
}

// ===== BRANDS =====
function renderBrands() {
  $("brands-grid").innerHTML = BRANDS.map(
    (b) => `
    <div class="brand-card" onclick="navigate('shop',{brand:'${b.slug}'})">
      <div style="height:6rem;display:flex;align-items:center;justify-content:center;margin-bottom:1rem">
        <div class="brand-card-name">${b.name}</div>
      </div>
      <div style="font-weight:700;font-size:1rem;margin-bottom:0.5rem">${b.name}</div>
      ${b.country ? `<div class="brand-card-country">${b.country}</div>` : ""}
      ${b.description ? `<div class="brand-card-desc">${b.description}</div>` : ""}
    </div>`,
  ).join("");
}

// ===== CATEGORIES =====
function renderCategories() {
  $("categories-grid").innerHTML = CATEGORIES.map(
    (c) => `
    <div class="category-card" onclick="navigate('shop',{category:'${c.slug}'})">
      ${
        c.imageUrl
          ? `<img class="cat-bg" src="${c.imageUrl}" alt="${c.name}" loading="lazy" />`
          : `<div class="cat-placeholder"><span>${c.name}</span></div>`
      }
      <div class="cat-overlay"></div>
      <div class="cat-label">
        <h3>${c.name}</h3>
        <span>Shop Now</span>
      </div>
    </div>`,
  ).join("");
}

// ===== REVIEWS =====
function reviewItemHTML(r) {
  const p = PRODUCTS.find((x) => x.id === r.productId);
  return `
    <div class="review-item">
      <div class="review-header">
        <div>
          ${p ? `<div style="font-weight:700;font-size:1rem;margin-bottom:0.25rem">${p.name}</div>` : ""}
          <div style="display:flex;align-items:center;gap:0.5rem">
            <span class="reviewer-name">${r.reviewerName}</span>
            <span class="review-date">• ${formatDate(r.createdAt)}</span>
          </div>
        </div>
        <div>${starsHTML(r.rating)}</div>
      </div>
      ${r.title ? `<div class="review-title">${r.title}</div>` : ""}
      ${r.body ? `<div class="review-body">${r.body}</div>` : ""}
      ${p ? `<div style="margin-top:1rem"><span style="font-size:0.85rem;color:var(--primary);cursor:pointer" onclick="navigate('product',{id:${p.id}})">View Product →</span></div>` : ""}
    </div>`;
}

function renderReviews() {
  // Populate product select
  const sel = $("review-product");
  sel.innerHTML =
    '<option value="">Select a product</option>' +
    PRODUCTS.map((p) => `<option value="${p.id}">${p.name}</option>`).join("");

  const list = $("review-list");
  list.innerHTML =
    reviews.length > 0
      ? reviews.map(reviewItemHTML).join("")
      : `<div class="empty-state"><h3>No reviews yet</h3><p>Be the first to share your thoughts.</p></div>`;
}

let pickedRating = 5;
function initStarPicker() {
  document.querySelectorAll(".star-pick").forEach((s) => {
    s.addEventListener("click", () => {
      pickedRating = parseInt(s.dataset.v);
      $("review-rating").value = pickedRating;
      document
        .querySelectorAll(".star-pick")
        .forEach((x, i) => x.classList.toggle("on", i < pickedRating));
    });
    s.addEventListener("mouseover", () => {
      const v = parseInt(s.dataset.v);
      document
        .querySelectorAll(".star-pick")
        .forEach((x, i) => x.classList.toggle("on", i < v));
    });
    s.addEventListener("mouseout", () => {
      document
        .querySelectorAll(".star-pick")
        .forEach((x, i) => x.classList.toggle("on", i < pickedRating));
    });
  });
}

function submitReview(e) {
  e.preventDefault();
  const productId = parseInt($("review-product").value);
  const reviewerName = $("review-name").value.trim();
  const rating = pickedRating;
  const title = $("review-title").value.trim();
  const body = $("review-body").value.trim();
  if (!productId || !reviewerName) return;

  reviews.unshift({
    id: Date.now(),
    productId,
    reviewerName,
    rating,
    title,
    body,
    createdAt: new Date().toISOString().split("T")[0],
  });
  toast("Review submitted", "Thank you for your feedback!");
  e.target.reset();
  pickedRating = 5;
  document.querySelectorAll(".star-pick").forEach((s) => s.classList.add("on"));
  renderReviews();
}

// ===== NEWSLETTER =====
function handleNewsletter(e) {
  e.preventDefault();
  toast("Subscribed!", "Thank you for subscribing to our newsletter.");
  $("newsletter-email").value = "";
}

// ===== CONTACT =====
function submitContact(e) {
  e.preventDefault();

  const name = $("contact-name").value.trim();
  const email = $("contact-email").value.trim();
  const order = $("contact-order").value.trim();
  const message = $("contact-message").value.trim();
  const btn = $("contact-submit-btn");

  if (!name || !email || !message) {
    toast(
      "Missing information",
      "Please fill in your name, email, and message.",
    );
    return;
  }

  const msg = `Hi Seōna!\n\nName: ${name}\nEmail: ${email}\nOrder Item: ${order || "N/A"}\n\nMessage:\n${message}`;
  const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;

  btn.textContent = "OPENING WHATSAPP...";
  btn.disabled = true;
  window.open(waUrl, "_blank");

  setTimeout(() => {
    toast("WhatsApp opened", "Your message is ready to send via WhatsApp.");
    e.target.reset();
    btn.textContent = "SEND MESSAGE";
    btn.disabled = false;
  }, 1000);
}

// ===== INIT =====
document.addEventListener("DOMContentLoaded", () => {
  $("copy-year").textContent = new Date().getFullYear();
  updateCounts();
  renderHome();
  initStarPicker();
});
