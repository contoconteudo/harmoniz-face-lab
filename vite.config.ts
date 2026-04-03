import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    // In production, convert the render-blocking CSS link to async preload.
    // Critical above-fold styles are inlined in index.html so there is no FOUC.
    mode === "production" && {
      name: "async-css",
      transformIndexHtml(html: string) {
        return html.replace(
          /<link rel="stylesheet" crossorigin href="(\/assets\/[^"]+\.css)">/g,
          `<link rel="preload" as="style" crossorigin href="$1" onload="this.onload=null;this.rel='stylesheet'"><noscript><link rel="stylesheet" href="$1"></noscript>`
        );
      },
    },
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime"],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor-react": ["react", "react-dom", "react-router-dom"],
          "vendor-query": ["@tanstack/react-query"],
          "vendor-carousel": ["embla-carousel-react", "embla-carousel-autoplay"],
          "vendor-radix": [
            "@radix-ui/react-accordion",
            "@radix-ui/react-collapsible",
          ],
        },
      },
    },
  },
}));
