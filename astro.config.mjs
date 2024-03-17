import { defineConfig } from "astro/config";
import AstroPWA from "@vite-pwa/astro";
import tailwind from "@astrojs/tailwind";
import alpinejs from "@astrojs/alpinejs";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    alpinejs({
      entrypoint: "/src/entrypoint",
    }),
    AstroPWA({
      base: "/",
      scope: "/",
      registerType: "autoUpdate",
      manifest: {
        name: "My Awesome App",
        short_name: "MyApp",
        description: "My Awesome App description",
        theme_color: "#120f0f",
        icons: [
          {
            src: "pwa-64x64.png",
            sizes: "64x64",
            type: "image/png",
          },
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any",
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable",
          },
        ],
      },
      pwaAssets: {
        config: true,
      },
      workbox: {
        navigateFallback: "/",
        globPatterns: ["**/*.{css,js,html,svg,png,ico,txt}"],
        maximumFileSizeToCacheInBytes: 15 * 1024 * 1024,
      },
    }),
    icon({
      iconDir: "src/icons",
      include: {
        ic: ["*"],
      },
    }),
  ],
});
