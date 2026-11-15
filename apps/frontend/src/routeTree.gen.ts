// This route tree is kept explicit for the initial one-page app. The TanStack
// Router Vite plugin will regenerate it as file-based routes are added.
import { Route as rootRoute } from "./routes/__root";
import { Route as indexRoute } from "./routes/index";

const routeTree = rootRoute.addChildren([indexRoute]);

export { routeTree };
