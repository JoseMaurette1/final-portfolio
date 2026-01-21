# Codebase Guide for Agents

This repository is a personal portfolio website built with **Next.js 15**, **React 19**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

## 1. Commands

- **Development Server**: `npm run dev`
- **Production Build**: `npm run build`
- **Linting**: `npm run lint`
- **Start Production**: `npm run start`

_Note: There are currently no test scripts configured._

## 2. Project Structure

- **`/app`**: Next.js App Router pages and layouts.
- **`/components/ui`**: Reusable UI components (based on shadcn/ui patterns).
- **`/components/sections`**: Major page sections (Hero, Projects, etc.).
- **`/lib`**: Utilities, constants, and content data.
- **`/hooks`**: Custom React hooks.
- **`/public`**: Static assets.

## 3. Code Style & Conventions

### Formatting (Strict)

Follow `.prettierrc.json` settings:

- **Quotes**: Single quotes (`'`) for JS/TS.
- **Semicolons**: No semicolons (`semi: false`).
- **Tab Width**: 2 spaces.
- **Trailing Comma**: All.
- **Print Width**: 80 characters.

### Naming

- **Components**: PascalCase (e.g., `HeroSection.tsx`, `Button.tsx`).
- **Files**:
  - Components: kebab-case or PascalCase (consistency varies, prefer existing pattern in directory).
  - Utilities/Hooks: camelCase (e.g., `useRefreshAnimation.ts`, `utils.ts`).
- **Variables/Functions**: camelCase.
- **Constants**: UPPER_SNAKE_CASE for global constants (e.g., `PROFILE_IMAGE_URL`).

### TypeScript

- **Strict Mode**: Enabled. Avoid `any` type.
- **Interfaces**: Use `interface` or `type` for component props (e.g., `type Props = { ... }`).
- **Exports**: Named exports preferred for components.

### Imports

- Use the `@/` alias for absolute imports (e.g., `import { Button } from '@/components/ui/button'`).
- Group imports:
  1. External libraries (React, Motion, Next.js).
  2. Internal components/hooks/utils.
  3. Styles/Assets.

### Styling (Tailwind CSS)

- Use utility classes directly in `className`.
- Use the `cn()` utility from `@/lib/utils` for conditional class merging.
- Follow mobile-first responsive design (`sm:`, `md:`, `lg:` prefixes).

### React / Next.js Patterns

- **Client Components**: Add `'use client'` at the top of files using hooks or interactivity.
- **Images**: Use `next/image` where possible (or `<img>` if strictly required by specific constraints, but generally prefer Next.js Image).
- **Animations**: Use `framer-motion` (imported as `motion/react` or `framer-motion`).

## 4. Specific Guidelines

### Adding New Sections

1. Create the component in `components/sections/`.
2. Add relevant data to `lib/content.ts`.
3. Import and render in `app/page.tsx`.
4. Ensure entry animations match existing patterns (use `variants={PAGE_ANIMATIONS.section}`).

### UI Components

- When creating new UI elements, check `components/ui` first.
- If modifying UI, preserve the `cva` (Class Variance Authority) pattern if present.

### Error Handling

- Use React Error Boundaries for critical sections if needed (currently global error handling via Next.js default).
- Ensure async operations (if any added) have `try/catch` blocks.
