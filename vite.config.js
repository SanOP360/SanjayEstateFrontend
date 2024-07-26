import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:10000",
        changeOrigin: true, // Add this line if you are dealing with CORS issues
        secure: false,
      },
    },

    host: true,
    strictPort: true,
    port: 5173,
  },
  plugins: [react()]
});
