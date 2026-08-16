import { useState } from "react";
import { useApp } from "../context/AppContext";
import { apiPost, WHATSAPP_NUMBER, CONTACT_EMAIL } from "../api";

export default function Contact() {
  const { toast } = useApp();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [orderItem, setOrderItem] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | opening

  async function submitContact(e) {
    e.preventDefault();
    const n = name.trim();
    const em = email.trim();
    const ord = orderItem.trim();
    const msgBody = message.trim();

    if (!n || !em || !msgBody) {
      toast("Missing information", "Please fill in your name, email, and message.");
      return;
    }

    setStatus("sending");

    try {
      await apiPost("/contact.php", { name: n, email: em, orderItem: ord, message: msgBody });
    } catch (err) {
      console.error("Failed to save contact message to database:", err);
    }

    const waMsg = `Hi Seōna!\n\nName: ${n}\nEmail: ${em}\nOrder Item: ${ord || "N/A"}\n\nMessage:\n${msgBody}`;
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(waMsg)}`;

    setStatus("opening");
    window.open(waUrl, "_blank");

    setTimeout(() => {
      toast("Message sent", "Saved and ready to send via WhatsApp too.");
      setName("");
      setEmail("");
      setOrderItem("");
      setMessage("");
      setStatus("idle");
    }, 1000);
  }

  const btnLabel = status === "sending" ? "SENDING..." : status === "opening" ? "OPENING WHATSAPP..." : "SEND MESSAGE";

  return (
    <div id="page-contact" className="page active">
      <div className="container" style={{ paddingTop: "3rem", paddingBottom: "5rem", maxWidth: "900px" }}>
        <div className="section-head">
          <div className="section-title">Contact Us</div>
          <p style={{ color: "var(--muted-fg)", maxWidth: "500px", margin: "0 auto", fontSize: "0.9rem" }}>
            We'd love to hear from you. Fill out the form or reach out directly.
          </p>
        </div>
        <div className="contact-layout">
          <div className="contact-info">
            <h3 style={{ fontFamily: '"Satisfy", cursive', fontSize: "2rem", marginBottom: "1rem" }}>Get in Touch</h3>
            <p style={{ color: "var(--muted-fg)", marginBottom: "2rem", fontSize: "0.9rem", lineHeight: 1.7 }}>
              Whether you have a question about our products, your order, or just want to say hello, we're here
              for you.
            </p>
            <div className="contact-detail">
              <div className="contact-detail-label">EMAIL</div>
              <div style={{ color: "var(--muted-fg)", fontSize: "0.9rem" }}>
                <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: "inherit", textDecoration: "none" }}>{CONTACT_EMAIL}</a>
              </div>
            </div>
            <div className="contact-detail">
              <div className="contact-detail-label">HOURS</div>
              <div style={{ color: "var(--muted-fg)", fontSize: "0.9rem" }}>Monday – Friday<br />9:00 AM – 5:00 PM KST</div>
            </div>
            <div className="contact-detail">
              <div className="contact-detail-label">WHATSAPP</div>
              <div style={{ color: "var(--muted-fg)", fontSize: "0.9rem" }}>
                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" style={{ color: "var(--wa-green)", fontWeight: 700 }}>
                  +880 1706 392496
                </a>
              </div>
            </div>
          </div>
          <div className="contact-form-col">
            <form className="form-box" style={{ background: "rgba(240, 246, 248, 0.5)" }} onSubmit={submitContact}>
              <div className="form-field">
                <label className="form-label">Name</label>
                <input className="form-input" required value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div className="form-field">
                <label className="form-label">Email</label>
                <input type="email" className="form-input" required value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="form-field">
                <label className="form-label">Order Item (Optional)</label>
                <input className="form-input" value={orderItem} onChange={(e) => setOrderItem(e.target.value)} />
              </div>
              <div className="form-field">
                <label className="form-label">Message</label>
                <textarea className="form-textarea" rows="6" required value={message} onChange={(e) => setMessage(e.target.value)} />
              </div>
              <button type="submit" className="btn btn-primary w-full btn-sq" style={{ borderRadius: "var(--radius)" }} disabled={status !== "idle"}>
                {btnLabel}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
