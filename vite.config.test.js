import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import sveltePreprocess from "svelte-preprocess";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  preprocess: [
    sveltePreprocess({
      postcss: true,
    }),
  ],
  test: {
      environment: "jsdom",
      setupFiles: ["./vitest-setup.js"],
      include: ["content/**/svelte5/*.test.ts"],
  },
});
