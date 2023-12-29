import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import UnoCSS from "unocss/astro";

export default defineConfig({
  site:
    process.env.VERCEL_ENV === "production"
      ? "https://www.damianpumar.com/"
      : "http://localhost:4321/",
  trailingSlash: "ignore",
  integrations: [sitemap(), UnoCSS({ injectReset: true })],
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },
});
