import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";
import robotsTxt from "astro-robots-txt";
import icon from "astro-icon";

import tailwindcss from "@tailwindcss/vite";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://fyrastack.com",

  integrations: [
    icon(),
    react(),
    sitemap({ filter: (page) => page !== "https://fyrastack.com/thanks/" }),
    compress(),
    robotsTxt(),
  ],

  redirects: {},

  vite: {
    plugins: [tailwindcss()],
  },

  adapter: cloudflare(),
});