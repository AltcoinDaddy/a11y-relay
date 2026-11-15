import { createRoute } from "@tanstack/react-router";
import { LandingPage } from "../main";
import { Route as rootRoute } from "./__root";

export const Route = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: LandingPage,
});
