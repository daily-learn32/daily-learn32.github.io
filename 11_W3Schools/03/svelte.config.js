import adapter from "@sveltejs/adapter-static"; // Ubah dari adapter-auto
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    appDir: "internal", // folder resource file hasil build

    adapter: adapter({
      pages: "build",	// folder utama file hasil build
      assets: "build",
      fallback: "404.html", // Sangat penting untuk Single Page Application (SPA)
      precompress: false,
      strict: true,
    }),

    paths: {
      relative: true,
    },
  },
};

export default config;
