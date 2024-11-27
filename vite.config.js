import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Vite config
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": "/src", // Alias untuk src
    },
  },
  server: {
    open: true, // Membuka browser otomatis saat server berjalan
    host: true, // Mendukung jaringan lokal
    port: 3000, // Tentukan port (opsional)
  },
  build: {
    outDir: "dist", // Output build folder
  },
});

