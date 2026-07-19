import { defineConfig, fontProviders } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://www.chrisryantaylor.com",
  integrations: [mdx(), sitemap(), icon()],
  vite: {
    plugins: [tailwindcss()],
  },  
  fonts: [{
    provider: fontProviders.fontsource(),
    name: "Figtree",
    cssVariable: "--font-figtree",
    weights: [400, 600],
  }]
});
