<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Frontend Guidelines & Directory Structure

- `app/`: Routing only (pages, layouts, route handlers).
- `assets/`: Stores images, files, videos, etc. (typically Cloudinary links or asset references).
- `configs/`: Configuration files (e.g., `apis.ts`).
- `contexts/`: Global context providers.
- `features/`: The core business logic and modules. Each feature must contain:
  - `pages/` (feature page views)
  - `components/` (feature-specific components)
  - `hooks/` (feature-specific custom hooks)
- `messages/`: Localization message dictionaries (e.g., `vn.json`, `en.json`, expandable to more languages).
- `shared/`: Shared components and logic across features.
- `utils/`: Common utility functions.
