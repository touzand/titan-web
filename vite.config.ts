import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ["a9eb32ae59f2.ngrok-free.app", "*"],
  },
});
