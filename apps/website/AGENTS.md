<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## Website App Rules

- Use Bun for package management and workspace commands.
- Run website tasks from the repo root with `bun --filter website <script>` or through Turborepo.
- Do not use pnpm, npm, or yarn commands in this app.
- Keep Next.js routing and data-loading choices aligned with the local Next.js docs in `node_modules/next/dist/docs/`.
- Keep shadcn-style UI code local to this app unless another workspace app actually needs it.
- Prefer small typed components, semantic design tokens, and readable composition over broad abstractions.
- Run `bun --filter website lint` after website code changes when linting is relevant.
- Do not start, restart, stop, clear-cache, build, or otherwise run the dev server unless explicitly asked to.
