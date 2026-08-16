import { createContext, useContext, useEffect, useRef, useState, useCallback } from "react";
import { apiGet, apiPost } from "../api";

const AppContext = createContext(null);

export function useApp() {
  return useContext(AppContext);
}

function loadLocal(key) {
  try {
    return JSON.parse(localStorage.getItem(key) || "[]");
  } catch {
    return [];
  }
}

export function AppProvider({ children }) {
  // ===== catalogue data (loaded from the PHP API, same as loadData() in script.js) =====
  const [brands, setBrands] = useState([]);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [dataLoaded, setDataLoaded] = useState(false);

  // ===== cart / wishlist (persisted to localStorage, same keys as before) =====
  const [cart, setCart] = useState(() => loadLocal("seona_cart"));
  const [wishlist, setWishlist] = useState(() => loadLocal("seona_wishlist"));

  // ===== navigation state (page-swap router, mirrors navigate() in script.js) =====
  const [currentPage, setCurrentPage] = useState("home");
  const [currentProductId, setCurrentProductId] = useState(null);
  const [shopFilters, setShopFilters] = useState({ category: null, brand: null, search: "" });

  // ===== auth =====
  const [currentUser, setCurrentUser] = useState(null);

  // ===== toasts =====
  const [toasts, setToasts] = useState([]);
  const toastId = useRef(0);

  const toast = useCallback((title, msg, type = "success") => {
    const id = ++toastId.current;
    setToasts((t) => [...t, { id, title, msg, type }]);
    setTimeout(() => {
      setToasts((t) => t.filter((x) => x.id !== id));
    }, 3500);
  }, []);

  // ===== data loading =====
  const loadData = useCallback(async () => {
    try {
      const [brandsRes, catsRes, prodsRes, reviewsRes] = await Promise.all([
        apiGet("/brands.php"),
        apiGet("/categories.php"),
        apiGet("/products.php"),
        apiGet("/reviews.php"),
      ]);
      setBrands(await brandsRes.json());
      setCategories(await catsRes.json());
      setProducts(await prodsRes.json());
      setReviews(await reviewsRes.json());
    } catch (err) {
      console.error("Failed to load data from API:", err);
      toast(
        "Connection error",
        "Could not load data from the database. Check that XAMPP (Apache + MySQL) is running.",
        "error"
      );
    } finally {
      setDataLoaded(true);
    }
  }, [toast]);

  const reloadReviews = useCallback(async () => {
    const res = await apiGet("/reviews.php");
    setReviews(await res.json());
  }, []);

  const checkAuth = useCallback(async () => {
    try {
      const res = await apiGet("/auth.php?action=me");
      const data = await res.json();
      setCurrentUser(data.user || null);
    } catch {
      setCurrentUser(null);
    }
  }, []);

  useEffect(() => {
    loadData();
    checkAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // persist cart/wishlist whenever they change
  useEffect(() => {
    localStorage.setItem("seona_cart", JSON.stringify(cart));
  }, [cart]);
  useEffect(() => {
    localStorage.setItem("seona_wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // ===== helpers =====
  const brand = useCallback((id) => brands.find((b) => b.id === id), [brands]);
  const cat = useCallback((id) => categories.find((c) => c.id === id), [categories]);

  // ===== navigation =====
  function navigate(page, params = {}) {
    if (page === "shop") {
      setShopFilters((prev) => ({
        category: params.category !== undefined ? params.category : prev.category,
        brand: params.brand !== undefined ? params.brand : prev.brand,
        search: params.search !== undefined ? params.search : prev.search,
      }));
    } else if (page === "product") {
      setCurrentProductId(params.id);
    }
    setCurrentPage(page);
    window.scrollTo(0, 0);
  }

  // ===== cart =====
  function addToCart(productId, qty = 1, silent = false) {
    setCart((prev) => {
      const existing = prev.find((i) => i.id === productId);
      let next;
      if (existing) {
        next = prev.map((i) => (i.id === productId ? { ...i, qty: i.qty + qty } : i));
      } else {
        next = [...prev, { id: productId, qty }];
      }
      return next;
    });
    const p = products.find((x) => x.id === productId);
    if (!silent) toast("Added to cart", (p?.name || "") + " added to your cart.");
  }

  function removeFromCart(productId) {
    setCart((prev) => prev.filter((i) => i.id !== productId));
    toast("Removed", "Product removed from your cart.");
  }

  function updateCartQty(productId, newQty) {
    if (newQty < 1) return;
    setCart((prev) => prev.map((i) => (i.id === productId ? { ...i, qty: newQty } : i)));
  }

  // ===== wishlist =====
  function addToWishlist(productId) {
    if (wishlist.includes(productId)) {
      toast("Already saved", "This product is already in your wishlist.");
      return;
    }
    setWishlist((prev) => [...prev, productId]);
    const p = products.find((x) => x.id === productId);
    toast("Added to wishlist", (p?.name || "") + " saved to your wishlist.");
  }

  function removeFromWishlist(productId) {
    setWishlist((prev) => prev.filter((id) => id !== productId));
    toast("Removed", "Product removed from your wishlist.");
  }

  // ===== auth =====
  async function login(email, password) {
    const res = await apiPost("/auth.php?action=login", { email, password });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Login failed");
    setCurrentUser(data.user);
    return data.user;
  }

  async function register(name, email, password) {
    const res = await apiPost("/auth.php?action=register", { name, email, password });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error || "Registration failed");
    setCurrentUser(data.user);
    return data.user;
  }

  async function logout() {
    try {
      await apiGet("/auth.php?action=logout");
    } catch {
      // ignore network errors on logout
    }
    setCurrentUser(null);
    toast("Logged out", "You've been logged out.");
  }

  // ===== auth modal =====
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authTab, setAuthTab] = useState("login");
  function openAuthModal(tab = "login") {
    setAuthTab(tab);
    setAuthModalOpen(true);
  }
  function closeAuthModal() {
    setAuthModalOpen(false);
  }

  const value = {
    brands,
    categories,
    products,
    reviews,
    dataLoaded,
    brand,
    cat,
    cart,
    wishlist,
    addToCart,
    removeFromCart,
    updateCartQty,
    addToWishlist,
    removeFromWishlist,
    currentPage,
    currentProductId,
    shopFilters,
    setShopFilters,
    navigate,
    currentUser,
    login,
    register,
    logout,
    checkAuth,
    reloadReviews,
    toast,
    toasts,
    authModalOpen,
    authTab,
    openAuthModal,
    closeAuthModal,
    setAuthTab,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
