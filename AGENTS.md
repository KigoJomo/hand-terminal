## Engineering Rules

- Prefer official documentation for framework setup and version-sensitive choices.
- Keep the monorepo boring: apps live in `apps/*`; shared packages are added only when reuse is real.
- Use `bun` for package management and Turborepo for workspace task orchestration.
- Keep changes scoped to the requested behavior. Avoid unrelated refactors and generated churn.
- Run `bun turbo run typecheck` before handing off changes that touch TypeScript.
- Do not start, restart, stop, or clear-cache any dev server unless the user explicitly asks for that server action.
- Do not introduce hidden global state, ad hoc path aliases, or clever abstractions without a clear payoff.

## Code Style

- TypeScript should stay strict and readable.
- Use named components and small files for reusable UI.
- Prefer explicit, simple data flow over convenience magic.
- Add comments only when they explain non-obvious intent or constraints.
- Keep filenames lowercase for route files and use descriptive component filenames outside routes.
