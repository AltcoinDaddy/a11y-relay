import type { ReactNode } from "react";
import { createRootRoute, HeadContent, Outlet, Scripts } from "@tanstack/react-router";
import "../styles.css";

export const Route = createRootRoute({
  head: () => ({ meta: [
    { charSet: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { title: "A11y Relay — Make the web work for everyone" },
    { name: "description", content: "A community-led way to find, fix, and verify accessibility barriers." },
  ] }),
  component: RootComponent,
});

function RootComponent() {
  return <RootDocument><Outlet /></RootDocument>;
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return <html lang="en"><head><HeadContent /></head><body>{children}<Scripts /></body></html>;
}
