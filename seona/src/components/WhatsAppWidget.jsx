import { useEffect, useRef, useState } from "react";
import { WHATSAPP_NUMBER } from "../api";
import { IconWhatsAppRound, IconWhatsAppFab } from "./Icons";

export default function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function onClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  function whatsappSupport() {
    const msg = "Hi Seōna! I need some help/support regarding your products or my order.";
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, "_blank");
    setOpen(false);
  }

  return (
    <div id="wa-widget" ref={ref}>
      <div id="wa-popup" className={open ? "open" : ""}>
        <div id="wa-popup-header">
          <div className="wa-popup-avatar">
            <IconWhatsAppRound />
          </div>
          <div>
            <div className="wa-popup-title">Seōna Support</div>
            <div className="wa-popup-status">
              <span className="wa-status-dot"></span>Typically replies within minutes
            </div>
          </div>
          <button className="wa-popup-close" onClick={() => setOpen(false)} aria-label="Close">
            &times;
          </button>
        </div>
        <div id="wa-popup-body">
          <div className="wa-chat-bubble">
            Hi there! 👋 Need help finding a product or have a question about your order? Chat with us on
            WhatsApp and we'll get back to you right away.
          </div>
        </div>
        <button className="wa-popup-cta" onClick={whatsappSupport}>
          <IconWhatsAppFab style={{ width: "1.1rem", height: "1.1rem" }} />
          START CHAT
        </button>
      </div>
      <button id="wa-fab" onClick={() => setOpen((o) => !o)} aria-label="Chat with us on WhatsApp">
        <IconWhatsAppRound />
        <span className="wa-fab-ping"></span>
      </button>
    </div>
  );
}
