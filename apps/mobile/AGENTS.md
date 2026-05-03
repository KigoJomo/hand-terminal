# Mobile App Instructions

## Expo Routing

- Use Expo Router as the only routing layer.
- Keep route files thin. Move reusable view logic into `src/components` or feature folders.

## UI And Styling

- Mobile owns its UI components under `src/components/ui`.
- Use NativeWind classes for styling unless a React Native style object is required by a library API.
- Keep UI components shadcn-like: small, composable, typed, and variant-driven when useful.
- Maintain light/dark behavior for new screens and reusable components.
- Use accessible labels and roles for icon-only controls.

## Verification

- Run `bun turbo run typecheck` from the repo root after routing, component, or dependency changes.
- Use Expo-compatible dependency versions through `expo install` when adding native Expo modules.
- Do not start, restart, stop, or clear-cache Expo/Metro unless explicitly instructed to do so.
