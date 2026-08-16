import { useApp } from "../context/AppContext";
import { CONTACT_EMAIL } from "../api";

export default function Footer() {
  const { navigate } = useApp();
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <div className="footer-brand">Seōna</div>
          <p className="footer-desc">
            Your curated destination for premium Korean skincare. Discover clean, soft, and trustworthy
            beauty products for your daily self-care routine.
          </p>
        </div>
        <div>
          <div className="footer-col-title">SHOP</div>
          <ul className="footer-links">
            <li><span onClick={() => navigate("shop")}>All Products</span></li>
            <li><span onClick={() => navigate("categories")}>Categories</span></li>
            <li><span onClick={() => navigate("brands")}>Brands</span></li>
          </ul>
        </div>
        <div>
          <div className="footer-col-title">SUPPORT</div>
          <ul className="footer-links">
            <li><span onClick={() => navigate("contact")}>Contact Us</span></li>
            <li><span>FAQ</span></li>
            <li><span>Shipping &amp; Returns</span></li>
            <li><span>Privacy Policy</span></li>
          </ul>
        </div>
        <div>
          <div className="footer-col-title">CONTACT</div>
          <ul className="footer-links">
            <li>
              <a href={`mailto:${CONTACT_EMAIL}`} style={{ color: "inherit", textDecoration: "none" }}>
                Email: {CONTACT_EMAIL}
              </a>
            </li>
            <li>Hours: Mon–Fri 9am – 5pm KST</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">&copy; {new Date().getFullYear()} Seōna. All rights reserved.</div>
    </footer>
  );
}
