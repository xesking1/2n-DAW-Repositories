import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
    esbuild: { jsx: "automatic" },
    build: {
        rollupOptions: {
            input: {
                principal: resolve(import.meta.dirname, "index.html"),
                react: resolve(import.meta.dirname, "react.html")
            }
        }
    }
});
