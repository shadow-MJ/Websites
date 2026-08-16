import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// During development, the React app runs on its own port (5173) while the
// existing PHP API still runs under XAMPP (Apache) at http://localhost/seona/api.
// This proxy makes calls to "/api/..." from the React app get forwarded there,
// so the browser sees everything as same-origin and the PHP session cookie
// (used for login) works correctly.
//
// If your project folder inside htdocs is named something other than "seona",
// update the target path below to match (e.g. http://localhost/your-folder-name/api).
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      "/api": {
        target: "http://localhost/seona",
        changeOrigin: true,
      },
    },
  },
});
