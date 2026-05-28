import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      components: path.resolve(__dirname, "./src/components"),
      hooks: path.resolve(__dirname, "./src/hooks"),
      helpers: path.resolve(__dirname, "./src/helpers"),
      utils: path.resolve(__dirname, "./src/utils"),
    },
  },

  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./vitest.setup.js",
    include: [
      "src/tests/**/*.{test,spec}.{js,jsx,ts,tsx}",
    ],
    exclude: [
      "node_modules",
      "dist",
      ".storybook",
    ],
  },
});