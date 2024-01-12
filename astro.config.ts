import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import UnoCSS from "unocss/astro";
import { FontaineTransform } from "fontaine";

export default defineConfig({
  site: "https://www.damianpumar.com/",
  build: {
    assets: "assets",
  },
  trailingSlash: "ignore",
  integrations: [sitemap(), UnoCSS({ injectReset: true })],
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
    plugins: [
      FontaineTransform.vite({
        fallbacks: ["Arial"],
        resolvePath: (id) => new URL(`./public${id}`, import.meta.url), // id is the font src value in the CSS
      }),
    ],
  },
});
