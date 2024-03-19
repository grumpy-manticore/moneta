import { defineConfig } from "astro/config";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

export default defineConfig({
  output: "static",
  site: "https://www.nicktelsan.com",
  vite: {
    plugins: [vanillaExtractPlugin()],
  },
});
