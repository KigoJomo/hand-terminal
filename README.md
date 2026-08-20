# Hand Terminal

An early mobile interface for using Codex away from the desk. The repository has an Expo app and a small Next.js component catalogue used while working out the visual system.

## Current status

The mobile shell, drawer navigation, light and dark themes, settings screen, and pairing screen exist. Pairing and remote Codex execution do not. This is still a UI prototype, not a usable remote terminal.

## Repository layout

| Path | Purpose |
| --- | --- |
| `apps/mobile` | Expo Router app for Android, iOS, and web |
| `apps/website` | Next.js catalogue for the web component set |

The workspace uses Bun and Turborepo.

## Run it

```bash
bun install
bun run dev
```

To target one Expo platform, run one of these from the repository root.

```bash
bun run android
bun run ios
bun run web
```

`bun run dev` starts both workspace development tasks. Use `bun run --cwd apps/mobile dev` or `bun run --cwd apps/website dev` when you only need one app.

## Checks

```bash
bun run lint
bun run typecheck
```
