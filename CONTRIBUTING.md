# Contributing to A11y Relay

Thank you for helping make the web more usable. Contributions are welcome from developers, accessibility practitioners, disabled testers, designers, researchers, and community organizers.

## Before you start

Please read:

- [AGENTS.md](./AGENTS.md) for repository conventions
- [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md) for community expectations
- [SECURITY.md](./SECURITY.md) before reporting a vulnerability

## Local setup

```bash
npm install
npm run dev
```

Run checks before opening a pull request:

```bash
npm run typecheck
npm run build
npm run lint
```

## Contribution guidelines

- Keep pull requests focused and explain the user problem they address.
- Preserve the separation between `apps/frontend` and `apps/backend`.
- Include accessible labels, keyboard behavior, focus states, and error states in UI changes.
- Do not include real personal, health, financial, or authentication data in issues, fixtures, screenshots, or tests.
- Add or update documentation when behavior or setup changes.
- Prefer small, reviewable pull requests.
- If a change affects disabled users, involve relevant users or accessibility practitioners in review where possible.

## Commit messages

Use clear, imperative messages, for example:

```text
Add report status model
Improve keyboard focus on issue form
Document evidence redaction flow
```

## Pull requests

Please describe:

1. The problem being solved.
2. The approach taken.
3. How the change was tested.
4. Any accessibility considerations.
5. Any follow-up work that remains.
