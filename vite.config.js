import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      ViteImageOptimizer({
        jpg: {
          quality: 70,
        },
        png: {
          quality: 70,
        },
      }),
    ],
    css: { postcss: "./postcss.config.js" },
    server: { host: true },
  };
});
