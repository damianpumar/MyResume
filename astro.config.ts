import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import UnoCSS from "unocss/astro";
import preact from "@astrojs/preact";

export default defineConfig({
  site: "https://www.damianpumar.com/",
  build: {
    assets: "assets",
  },
  trailingSlash: "ignore",
  integrations: [
    sitemap(),
    UnoCSS({
      injectReset: true,
    }),
    preact(),
  ],
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },
});
