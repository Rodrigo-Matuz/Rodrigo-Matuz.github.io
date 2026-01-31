import adapter from "@sveltejs/adapter-static";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { mdsvex } from "mdsvex";

const config = {
	preprocess: [vitePreprocess(), mdsvex()],

	kit: {
		adapter: adapter({
			fallback: "404.html",
		}),
		alias: {
			$components: "src/lib/components",
			// $api: "src/lib/api",
			// $lang: "src/lib/lang",
			// $utils: "src/lib/utils",
			// $config: "src/lib/config",
			// $types: "src/types",
		},
	},

	extensions: [".svelte", ".svx"],
};

export default config;
