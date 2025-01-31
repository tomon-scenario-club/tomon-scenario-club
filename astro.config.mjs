import { defineConfig } from "astro/config";
import 'dotenv/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://tomonshinaken.github.io',
  base: '/tomon-scenario-club/',
  vite: {
    resolve: {
      alias: {
        "@": "/src"
      }
    }
  },
  build: {
    format: "preserve", // NOTE: 出力ファイルの設定
    outDir: "docs"
  },
  integrations: [tailwind()]
});