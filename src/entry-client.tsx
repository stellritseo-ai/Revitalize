import { createRoot } from "react-dom/client";
import { StartClient } from "@tanstack/react-start";
import { createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";
import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();
const router = createRouter({
  routeTree,
  context: { queryClient },
});

const rootElement = document.getElementById("root");
if (rootElement && !rootElement.innerHTML) {
  const root = createRoot(rootElement);
  root.render(<StartClient router={router} />);
}
