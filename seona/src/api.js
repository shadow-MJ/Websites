// Relative path to the PHP API folder — same endpoints as the original vanilla JS version.
// In dev this is proxied to XAMPP by vite.config.js; in production, build this app and
// drop the output next to the existing api/ folder on the same server.
export const API_BASE = "/api";

export const WHATSAPP_NUMBER = "8801706392496";
export const MESSENGER_USERNAME = "joy.tmke.chudche";
export const CONTACT_EMAIL = "bijoyhasan1612@gmail.com";

// credentials: "include" is required so the PHP session cookie (used for login)
// is sent with every request, matching the original same-origin behavior.
export async function apiGet(path) {
  const res = await fetch(`${API_BASE}${path}`, { credentials: "include" });
  return res;
}

export async function apiPost(path, body) {
  const res = await fetch(`${API_BASE}${path}`, {
    method: "POST",
    credentials: "include",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  return res;
}

export function money(amount) {
  return `৳${Number(amount).toLocaleString("en-BD", {
    maximumFractionDigits: 0,
  })}`;
}

export function formatDate(d) {
  return new Date(d).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
