import { useEffect, useRef, useState } from "react";
import { useApp } from "../context/AppContext";
import { IconMenu, IconSearch, IconCart } from "./Icons";

export default function Navbar({ onOpenDrawer }) {
  const { navigate, cart, wishlist, currentUser, openAuthModal, logout } = useApp();

  const [searchOpen, setSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [accountOpen, setAccountOpen] = useState(false);

  const searchWrapRef = useRef(null);
  const accountWrapRef = useRef(null);
  const searchInputRef = useRef(null);

  const cartCount = cart.reduce((a, i) => a + i.qty, 0);
  const wlCount = wishlist.length;

  useEffect(() => {
    function onDocClick(e) {
      if (searchOpen && searchWrapRef.current && !searchWrapRef.current.contains(e.target)) {
        setSearchOpen(false);
        setSearchValue("");
      }
      if (accountOpen && accountWrapRef.current && !accountWrapRef.current.contains(e.target)) {
        setAccountOpen(false);
      }
    }
    function onKeyDown(e) {
      if (e.key === "Escape" && searchOpen) {
        setSearchOpen(false);
        setSearchValue("");
      }
    }
    document.addEventListener("click", onDocClick);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [searchOpen, accountOpen]);

  function toggleSearch() {
    setSearchOpen((o) => {
      const next = !o;
      if (next) setTimeout(() => searchInputRef.current?.focus(), 0);
      else setSearchValue("");
      return next;
    });
  }

  function doNavSearch(e) {
    e.preventDefault();
    const q = searchValue.trim();
    if (q) navigate("shop", { category: null, brand: null, search: q });
    setSearchOpen(false);
    setSearchValue("");
  }

  function handleAuthNavClick() {
    if (currentUser) setAccountOpen((o) => !o);
    else openAuthModal("login");
  }

  return (
    <div id="navbar">
      <div className="nav-topbar">
        <div className="container nav-topbar-inner">
          <span>seona.bd@gmail.com</span>
          <div className="nav-icon-wrap" id="account-wrap" ref={accountWrapRef}>
            <button className="topbar-login-btn" onClick={handleAuthNavClick}>
              {currentUser ? currentUser.name.split(" ")[0].toUpperCase() : "LOGIN"}
            </button>
            <div id="account-dropdown" className={accountOpen ? "" : "hidden"}>
              {currentUser && (
                <>
                  <div id="account-dropdown-name">{currentUser.name}</div>
                  <div id="account-dropdown-email">{currentUser.email}</div>
                  <div className="account-dropdown-divider"></div>
                  <div
                    className="account-dropdown-link"
                    onClick={() => {
                      logout();
                      setAccountOpen(false);
                    }}
                  >
                    LOG OUT
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="nav-main">
        <div className="nav-inner">
          <div className="nav-mobile-menu">
            <button className="nav-icon-btn" onClick={onOpenDrawer}>
              <IconMenu />
            </button>
          </div>

          <nav className="nav-left nav-left-desktop">
            <span className="nav-link" onClick={() => navigate("wishlist")}>
              ♡ WISHLIST ({wlCount})
            </span>
            <span className="nav-link" onClick={() => navigate("home")}>HOME</span>
            <span className="nav-link" onClick={() => navigate("brands")}>BRANDS</span>
            <span className="nav-link" onClick={() => navigate("categories")}>CATEGORIES</span>
          </nav>

          <div className="nav-logo" onClick={() => navigate("home")}>Seōna</div>

          <div className="nav-right nav-right-desktop">
            <nav style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
              <span className="nav-link" onClick={() => navigate("shop")}>SHOP</span>
              <span className="nav-link" onClick={() => navigate("about")}>ABOUT US</span>
              <span className="nav-link" onClick={() => navigate("review")}>REVIEW</span>
              <span className="nav-link" onClick={() => navigate("contact")}>CONTACT US</span>
            </nav>

            <div id="search-bar-wrap" ref={searchWrapRef}>
              <button className={`nav-icon-btn ${searchOpen ? "hidden" : ""}`} onClick={toggleSearch}>
                <IconSearch />
              </button>
              <form id="search-form" className={searchOpen ? "" : "hidden"} onSubmit={doNavSearch}>
                <input
                  ref={searchInputRef}
                  placeholder="Search products..."
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
                <button type="submit" className="nav-icon-btn search-submit-btn">
                  <IconSearch />
                </button>
              </form>
            </div>

            <div className="nav-icon-wrap">
              <button className="nav-icon-btn" onClick={() => navigate("cart")}>
                <IconCart />
              </button>
              <span className="cart-badge" style={{ display: cartCount > 0 ? "flex" : "none" }}>
                {cartCount}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
