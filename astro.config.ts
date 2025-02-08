import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import UnoCSS from "unocss/astro";

import { FontaineTransform } from 'fontaine'

import { homepage } from "./package.json";

export default defineConfig({
  site: homepage,
  build: {
    assets: "assets",
  },
  trailingSlash: "ignore",
  integrations: [sitemap(), UnoCSS({ injectReset: true })],
  vite: {
    plugins: [
      FontaineTransform.vite({
        fallbacks: ['BlinkMacSystemFont', 'Segoe UI', 'Helvetica Neue', 'Arial', 'Noto Sans'],
        resolvePath: id => id
      })
    ],
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },
});
