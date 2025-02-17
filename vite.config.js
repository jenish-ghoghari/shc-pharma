import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(() => {
  return {
    plugins: [react()],
    css: { postcss: "./postcss.config.js" },
    server: { host: true },
  
  };
});
