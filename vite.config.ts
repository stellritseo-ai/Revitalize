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
    {
      name: "api-server",
      configureServer(server) {
        server.middlewares.use(async (req, res, next) => {
          if (req.url && req.url.startsWith("/api/")) {
            try {
              const { handleNodeApiRequest } = await import("./src/lib/api-handler.server");
              const handled = await handleNodeApiRequest(req, res);
              if (handled) return;
            } catch (err) {
              console.error("Vite dev API error:", err);
              res.statusCode = 500;
              res.end(JSON.stringify({ error: String(err) }));
              return;
            }
          }
          next();
        });
      },
    },
  ],
  build: {
    outDir: "dist",
    rollupOptions: {
      external: ["mongodb", "dns", "aws4", "snappy", "kerberos", "tls", "net", "node:async_hooks", "async_hooks", "cloudinary", "crypto", "node:crypto"],
    },
  },
});
