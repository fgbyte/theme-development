import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	//NEW LINES 👇
	build: {
		rollupOptions: {
			input: {
				counter: "src/main.tsx", //👈 component name
			},
			output: {
				dir: "assets",
				entryFileNames: "vite-[name].js",
				chunkFileNames: "vite-[name].js",
				assetFileNames: "vite-[name].[ext]",
			},
		},
		watch: {},
		emptyOutDir: false,
	},
	//END NEW LINES
});
