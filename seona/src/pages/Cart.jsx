import { useState } from "react";
import { useApp } from "../context/AppContext";
import { money, apiPost, WHATSAPP_NUMBER, MESSENGER_USERNAME } from "../api";
import { IconCart, IconTrash, IconWhatsApp, IconMessenger } from "../components/Icons";

export default function Cart() {
  const { cart, products, brand, navigate, updateCartQty, removeFromCart, currentUser, openAuthModal, toast } = useApp();

  const [name, setName] = useState(currentUser ? currentUser.name : "");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [placing, setPlacing] = useState(false);

  const subtotal = cart.reduce((a, i) => {
    const p = products.find((x) => x.id === i.id);
    return a + (p ? p.price * i.qty : 0);
  }, 0);
  const total = subtotal;

  function whatsappCheckout() {
    const shippingNote = total >= 2000 ? "Shipping is free." : "Shipping charge is included.";
    const lines = cart
      .map((i) => {
        const p = products.find((x) => x.id === i.id);
        return `• ${p.name} x${i.qty} — ${money(p.price * i.qty)}`;
      })
      .join("\n");
    const msg = `Hi! I'd like to place an order from Seōna:\n\n${lines}\n\nSubtotal: ${money(subtotal)}\n*Total: ${money(total)}*\n${shippingNote}\n\nPlease let me know how to proceed. Thank you!`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
  }

  async function placeOrder() {
    if (!currentUser) {
      toast("Please log in", "You need an account to place an order.", "error");
      openAuthModal("login");
      return;
    }
    const n = name.trim();
    const ph = phone.trim();
    const addr = address.trim();
    if (!n || !ph || !addr) {
      toast("Missing information", "Please enter your name, phone number, and delivery address.");
      return;
    }

    const items = cart
      .map((i) => {
        const p = products.find((x) => x.id === i.id);
        return p ? { id: p.id, qty: i.qty, price: p.price } : null;
      })
      .filter(Boolean);

    setPlacing(true);
    try {
      const res = await apiPost("/orders.php", { name: n, phone: ph, address: addr, items });
      if (!res.ok) throw new Error("Order failed");
      const data = await res.json();
      toast("Order saved", `Order #${data.orderId} recorded. Continuing to WhatsApp...`);
    } catch {
      toast("Couldn't save order", "The order wasn't saved to the database, but you can still continue via WhatsApp.");
    } finally {
      setPlacing(false);
    }
    whatsappCheckout();
  }

  if (cart.length === 0) {
    return (
      <div id="page-cart" className="page active">
        <div className="container" style={{ paddingTop: "3rem", paddingBottom: "5rem" }}>
          <div className="section-head"><div className="section-title">Shopping Bag</div></div>
          <div className="empty-state">
            <IconCart />
            <h3>Your shopping bag is empty</h3>
            <p>Looks like you haven't added anything yet.</p>
            <button className="btn btn-primary" onClick={() => navigate("shop")}>START SHOPPING</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div id="page-cart" className="page active">
      <div className="container" style={{ paddingTop: "3rem", paddingBottom: "5rem" }}>
        <div className="section-head"><div className="section-title">Shopping Bag</div></div>
        <div className="cart-layout">
          <div className="cart-items-col">
            {cart.map((i) => {
              const p = products.find((x) => x.id === i.id);
              if (!p) return null;
              const b = brand(p.brandId);
              return (
                <div className="cart-item" key={p.id}>
                  <img className="cart-item-img" src={p.imageUrl} alt={p.name} onClick={() => navigate("product", { id: p.id })} />
                  <div className="cart-item-body">
                    <div className="cart-item-brand" onClick={() => navigate("shop", { brand: b?.slug })}>{b?.name || ""}</div>
                    <div className="cart-item-name" onClick={() => navigate("product", { id: p.id })}>{p.name}</div>
                    <div className="cart-item-price">{money(p.price)}</div>
                    <div className="cart-item-controls">
                      <div className="qty-ctrl" style={{ border: "1px solid var(--border)", borderRadius: "var(--radius)" }}>
                        <button className="qty-btn" style={{ width: "2rem", height: "2rem" }} onClick={() => updateCartQty(p.id, i.qty - 1)} disabled={i.qty <= 1}>−</button>
                        <span className="qty-num">{i.qty}</span>
                        <button className="qty-btn" style={{ width: "2rem", height: "2rem" }} onClick={() => updateCartQty(p.id, i.qty + 1)}>+</button>
                      </div>
                      <button className="remove-btn" onClick={() => removeFromCart(p.id)}>
                        <IconTrash />
                        Remove
                      </button>
                    </div>
                  </div>
                  <div style={{ fontWeight: 700, fontSize: "1rem", flexShrink: 0 }}>{money(p.price * i.qty)}</div>
                </div>
              );
            })}
          </div>
          <div className="cart-summary-col">
            <div className="order-summary">
              <h3>Order Summary</h3>
              <div className="summary-row"><span style={{ color: "var(--muted-fg)" }}>Subtotal</span><span>{money(subtotal)}</span></div>
              <div className="summary-total"><span>Total</span><span>{money(total)}</span></div>
              <div className="free-shipping-hint">Free shipping on orders over ৳2,000.</div>

              <div className="form-field">
                <label className="form-label">Full Name</label>
                <input className="form-input" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="form-field">
                <label className="form-label">Phone Number</label>
                <input className="form-input" placeholder="e.g. 01XXXXXXXXX" value={phone} onChange={(e) => setPhone(e.target.value)} />
              </div>
              <div className="form-field" style={{ marginBottom: "1rem" }}>
                <label className="form-label">Delivery Address</label>
                <textarea className="form-textarea" rows="3" placeholder="Full delivery address" value={address} onChange={(e) => setAddress(e.target.value)} />
              </div>

              <button
                className="btn btn-wa w-full"
                style={{ borderRadius: "9999px", padding: "0.9rem", marginBottom: "0.75rem" }}
                onClick={placeOrder}
                disabled={placing}
              >
                <IconWhatsApp style={{ width: "1.2rem", height: "1.2rem", flexShrink: 0 }} />
                {placing ? "PLACING ORDER..." : "PROCEED TO CHECKOUT"}
              </button>

              <button
                className="btn btn-ms w-full"
                style={{ borderRadius: "9999px", padding: "0.9rem", marginBottom: "1rem" }}
                onClick={() => window.open(`https://m.me/${MESSENGER_USERNAME}`, "_blank")}
              >
                <IconMessenger style={{ width: "1.2rem", height: "1.2rem", flexShrink: 0 }} />
                ORDER VIA MESSENGER
              </button>

              <div className="text-center">
                <span style={{ fontSize: "0.875rem", color: "var(--muted-fg)", cursor: "pointer", textDecoration: "underline" }} onClick={() => navigate("shop")}>
                  Continue Shopping
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
