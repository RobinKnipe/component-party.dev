import { defineConfig } from "vite";
import { svelte, vitePreprocess } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  preprocess: [
    vitePreprocess({
      postcss: true,
    }),
  ],
  test: {
    environment: "jsdom",
    setupFiles: ["./vitest-setup.js"],
    include: ["content/**/svelte5/*.test.ts"],
  },
});
