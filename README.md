# A11y Relay

**Disability-led accessibility audits for the open web.**

A11y Relay helps people with disabilities report real barriers in websites and digital services, turns those experiences into actionable developer issues, and lets the original tester verify whether a fix works.

The project is designed for small nonprofits, civic organizations, community groups, and developers who need practical accessibility testing without relying only on expensive audits or automated compliance scores.

## Why A11y Relay exists

Automated accessibility tools are useful, but they cannot fully answer the most important question:

> Can a person with a disability actually complete the task?

A11y Relay puts disabled users at the center of the feedback loop:

1. A tester reports a barrier while trying to complete a real task.
2. A11y Relay captures the context, assistive technology, and reproduction steps.
3. The organization receives a structured, developer-ready issue.
4. The fix is tracked from report to resolution.
5. The original tester verifies the result.

The long-term goal is an open accessibility-barrier library containing anonymized reports, reproducible examples, and verified fixes that other communities can reuse.

## Current project status

A11y Relay is an early-stage, pre-launch project. The current repository contains the initial product landing page and a minimal application scaffold. Product functionality will be developed incrementally with disabled testers, accessibility practitioners, developers, and small organizations.

## Planned MVP

- Browser extension for reporting accessibility barriers
- Structured issue and evidence-submission workflow
- Organization dashboard for reviewing and prioritizing reports
- GitHub issue integration
- Privacy-preserving screenshot and context capture
- Fix verification workflow for the original tester
- Public documentation and an open reporting protocol

## Repository structure

```text
apps/
  frontend/    TanStack Start, React, TypeScript, Tailwind CSS, and shadcn/ui
  backend/     Express and TypeScript API scaffold
```

## Requirements

- Node.js 20 or newer
- npm 10 or newer

## Setup

From the repository root:

```bash
npm install
```

## Development

Run the frontend and backend together:

```bash
npm run dev
```

- Frontend: http://localhost:5173
- Backend health check: http://localhost:4000/health

## Verification commands

```bash
npm run typecheck
npm run build
npm run lint
```

## Frontend components

The frontend uses the shadcn/ui Nova preset with Base UI primitives, Tailwind CSS v4, Geist, and Lucide icons.

Add a shadcn component from the frontend app:

```bash
cd apps/frontend
npx shadcn@latest add button
```

## Product principles

- Build with disabled people, not only for disabled people.
- Treat lived experience as essential accessibility evidence.
- Collect the minimum data needed and protect user privacy.
- Keep the code, protocol, and learning open for reuse.
- Make the first useful version small enough to test with real communities.

## Open source

A11y Relay is released under the [Mozilla Public License 2.0](./LICENSE). See [CONTRIBUTING.md](./CONTRIBUTING.md) for development and pull-request guidance, [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md) for community expectations, and [SECURITY.md](./SECURITY.md) for responsible vulnerability reporting.
