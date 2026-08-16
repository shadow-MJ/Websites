import { useEffect, useState } from "react";
import { AppProvider, useApp } from "./context/AppContext";
import ToastContainer from "./components/ToastContainer";
import WhatsAppWidget from "./components/WhatsAppWidget";
import Drawer from "./components/Drawer";
import Navbar from "./components/Navbar";
import AuthModal from "./components/AuthModal";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Brands from "./pages/Brands";
import Categories from "./pages/Categories";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";
import About from "./pages/About";

function Shell() {
  const { currentPage, authModalOpen, closeAuthModal } = useApp();
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Escape key closes the auth modal (mirrors the original document-level listener)
  useEffect(() => {
    function onKeyDown(e) {
      if (e.key === "Escape" && authModalOpen) closeAuthModal();
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [authModalOpen, closeAuthModal]);

  function renderPage() {
    switch (currentPage) {
      case "home": return <Home />;
      case "shop": return <Shop />;
      case "product": return <ProductDetail />;
      case "cart": return <Cart />;
      case "wishlist": return <Wishlist />;
      case "brands": return <Brands />;
      case "categories": return <Categories />;
      case "review": return <Reviews />;
      case "contact": return <Contact />;
      case "about": return <About />;
      default: return <Home />;
    }
  }

  return (
    <>
      <ToastContainer />
      <WhatsAppWidget />
      <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />
      <Navbar onOpenDrawer={() => setDrawerOpen(true)} />
      <AuthModal />
      <main>{renderPage()}</main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <AppProvider>
      <Shell />
    </AppProvider>
  );
}
