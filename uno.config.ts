import {
  defineConfig,
  presetIcons,
  presetWind,
  presetTypography,
} from "unocss";
import { pallete } from "src/components/generic/colors";

export default defineConfig({
  presets: [
    presetWind(),
    presetIcons({
      collections: {
        uil: () =>
          import("@iconify-json/uil/icons.json").then((l) => l.default),
      },
    }),
    presetTypography(),
  ],
  theme: {
    colors: {
      ...pallete
    },
  },
});
