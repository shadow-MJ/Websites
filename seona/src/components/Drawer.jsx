import { useApp } from "../context/AppContext";

export default function Drawer({ open, onClose }) {
  const { navigate, currentUser, openAuthModal, logout } = useApp();

  function go(page) {
    navigate(page);
    onClose();
  }

  function handleAuthClick() {
    if (currentUser) logout();
    else openAuthModal("login");
    onClose();
  }

  return (
    <>
      <div id="drawer-overlay" style={{ display: open ? "block" : "none" }} onClick={onClose}></div>
      <div id="drawer" className={open ? "open" : ""}>
        <div
          style={{
            marginBottom: "1.5rem",
            fontFamily: '"Satisfy", cursive',
            fontSize: "1.8rem",
            color: "var(--primary)",
          }}
        >
          Seōna
        </div>
        <div className="drawer-link" onClick={() => go("home")}>HOME</div>
        <div className="drawer-link" onClick={() => go("shop")}>SHOP</div>
        <div className="drawer-link" onClick={() => go("brands")}>BRANDS</div>
        <div className="drawer-link" onClick={() => go("categories")}>CATEGORIES</div>
        <div className="drawer-link" onClick={() => go("review")}>REVIEW</div>
        <div className="drawer-link" onClick={() => go("contact")}>CONTACT US</div>
        <div className="drawer-link" onClick={handleAuthClick}>
          {currentUser ? "LOG OUT" : "LOGIN"}
        </div>
      </div>
    </>
  );
}
