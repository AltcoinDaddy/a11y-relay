# A11y Relay Agent Instructions

## Project overview

A11y Relay is a minimal Turborepo with separate frontend and backend apps.

- `apps/frontend`: Vite, React, and TypeScript
- `apps/backend`: Express and TypeScript

## Development commands

Run from the repository root:

```bash
npm install
npm run dev
npm run typecheck
npm run build
```

## Working conventions

- Keep frontend and backend concerns separate.
- Use TypeScript and preserve strict type checking.
- Keep the scaffold minimal until product requirements are defined.
- Do not add product features, dependencies, or infrastructure without a clear task.
- Update the README when setup or developer commands change.
- Preserve existing user work and inspect related files before editing.
