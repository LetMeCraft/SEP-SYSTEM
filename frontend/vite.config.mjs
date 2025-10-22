import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// 🚀 simple, modern ESM config — works with Tailwind 4
export default defineConfig({
  plugins: [react()],
});
