import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    appDir: "app", // folder resource file hasil build
    adapter: adapter({
      pages: "build", // folder hasil build HTML
      assets: "build", // folder hasil build CSS/JS
      fallback: "404.html", // penting untuk Single Page Application
      precompress: false,
      strict: true,
    }),
    paths: {
      // Di lokal akan jadi "", di GitHub akan jadi "/02_FrontMent/20/build"
      base:
        // process.env.NODE_ENV === "production" ? "/02_FrontMent/20/build" : "",
        process.env.NODE_ENV === "production" ? "" : "",
        relative: true,
    },
  },
};

export default config;
