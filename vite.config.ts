import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "MyReactWidget",
      formats: ["es", "cjs"],
      fileName: (format) => (format === "es" ? "esm/index.js" : "cjs/index.js"),
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
