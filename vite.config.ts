import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import path from "path";

export default defineConfig({
  envPrefix: ["PUBLIC_"],
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg"],
      manifest: {
        name: "Shram Sewa - Nepal Manpower",
        short_name: "Shram Sewa",
        description:
          "Local government linked manpower discovery and hiring platform.",
        theme_color: "#7C1D2B",
        background_color: "#FAF7F0",
        display: "standalone",
        orientation: "portrait",
        start_url: "/",
        icons: [
          {
            src: "favicon.svg",
            sizes: "any",
            type: "image/svg+xml",
          },
        ],
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html,ico,png,svg,woff2}"],
        runtimeCaching: [
          {
            urlPattern: /\/api\/workers/,
            handler: "StaleWhileRevalidate",
            options: {
              cacheName: "workers-cache",
              expiration: {
                maxAgeSeconds: 3600,
                maxEntries: 100,
              },
            },
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
