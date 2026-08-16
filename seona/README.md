# Seōna — React version

This is a React (Vite) rewrite of the original vanilla HTML/CSS/JS frontend. It is a
1:1 functional port — same pages, same cart/wishlist/localStorage behavior, same
session-based login, same review form, same WhatsApp checkout flow — and it talks to
**the exact same PHP API you already have** (`api/products.php`, `api/auth.php`, etc.).
Nothing on the backend needs to change.

## What's inside

```
seona-react/
  index.html
  vite.config.js
  package.json
  src/
    main.jsx              entry point
    App.jsx                page router / shell (navbar, drawer, modal, footer)
    api.js                 fetch helpers, money()/formatDate(), shared constants
    style.css               the original style.css, copied unchanged
    context/AppContext.jsx  global state: products/brands/categories/reviews,
                             cart & wishlist (localStorage), auth, toasts, navigation
    components/             Navbar, Drawer, AuthModal, WhatsAppWidget, Footer,
                             ProductCard, Stars, ToastContainer, Icons
    pages/                  Home, Shop, ProductDetail, Cart, Wishlist, Brands,
                             Categories, Reviews, Contact, About
```

## Running it against your existing XAMPP backend

1. Keep your PHP project running under XAMPP exactly as before (Apache + MySQL
   started, `seona_db` imported) — this app does **not** replace `api/`, `config.php`,
   or `database.sql`. Leave those where they are, e.g. `C:\xampp\htdocs\seona`.
2. In this `seona-react` folder:
   ```
   npm install
   npm run dev
   ```
3. Open the URL Vite prints (usually `http://localhost:5173`).

During development, `vite.config.js` proxies any request to `/api/...` from the React
app to `http://localhost/seona` (your XAMPP project), so the browser treats it as
same-origin and the PHP session cookie (used for login/orders/reviews) works normally.
If your XAMPP project folder isn't named `seona`, update the `target` in
`vite.config.js` to match.

## Building for production

```
npm run build
```

This outputs static files to `dist/`. Copy the contents of `dist/` into your XAMPP
project folder (e.g. replacing `index.html`, `script.js`, `style.css` there) so it's
served by the same Apache instance as `api/` — that keeps everything same-origin
without needing a proxy.

## Notes

- Cart and wishlist still live in `localStorage` (keys `seona_cart` / `seona_wishlist`),
  exactly like the original — only the final placed order is saved to the database.
- All API calls use `credentials: "include"` so the PHP session cookie is sent, which
  is required for login, submitting reviews, and placing orders.
- WhatsApp/Messenger links, numbers, and copy are unchanged from the original.
