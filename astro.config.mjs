import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import AutoImport from "astro-auto-import";
import { defineConfig, squooshImageService } from "astro/config";
import remarkCollapse from "remark-collapse";
import remarkToc from "remark-toc";
import config from "./src/config/config.json";
import netlify from "@astrojs/netlify";
import pageInsight from "astro-page-insight";
import robots from "astro-robots";
import metaTags from "astro-meta-tags";
import playformInline from "@playform/inline";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  site: config.site.base_url,
  base: config.site.base_path,
  trailingSlash: config.site.trailing_slash ? "always" : "never",
  image: {
    service: squooshImageService()
  },
  integrations: [react(), sitemap(), tailwind({
    config: {
      applyBaseStyles: false
    }
  }), AutoImport({
    imports: ["@/shortcodes/Button", "@/shortcodes/Accordion", "@/shortcodes/Notice", "@/shortcodes/Video", "@/shortcodes/Youtube", "@/shortcodes/Tabs", "@/shortcodes/Tab"]
  }), mdx(), pageInsight(), robots(), metaTags(), playformInline()],
  markdown: {
    remarkPlugins: [remarkToc, [remarkCollapse, {
      test: "Table of contents"
    }]],
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true
    },
    extendDefaultPlugins: true
  },
  i18n: {
    defaultLocale: "en",
    locales: [{
      path: "de",
      codes: ["de", "de-CH", "de-DE"]
    }, {
      path: "en",
      codes: ["en", "en-GB", "en-US"]
    }, {
      path: "fr",
      codes: ["fr", "fr-CH"]
    }, {
      path: "it",
      codes: ["fr", "it-CH"]
    }],
    routing: {
      prefixDefaultLocale: true,
      redirectToDefaultLocale: false,
      strategy: "pathname"
    }
  },
  adapter: netlify({
    edgeMiddleware: true
  })
});
