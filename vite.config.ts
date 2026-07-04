import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";

export default defineConfig({
  plugins: [
    TanStackRouterVite({
      routesDirectory: "./src/routes",
      generatedRouteTree: "./src/routeTree.gen.ts",
    }),
    react(),
    tailwindcss(),
    tsConfigPaths({
      projects: ["./tsconfig.json"],
    }),
  ],
  build: {
    outDir: "dist",
    rollupOptions: {
      external: ["mongodb", "dns", "aws4", "snappy", "kerberos", "tls", "net", "node:async_hooks", "async_hooks"],
    },
  },
});
