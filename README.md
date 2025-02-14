# Nuxt Boilerplate

## Overview

Nuxt 3 boilerplate designed for building modern web applications with a structured project setup. It includes state management with Pinia, validation with Zod, and utility libraries for improved development.

## Features

- **Nuxt 3**: The latest Nuxt framework for modern web development.
- **Pinia**: State management with persistence support.
- **Tailwind CSS 4**: Utility-first styling.
- **Day.js**: Lightweight date handling.
- **Zod**: Schema validation for TypeScript and JavaScript.
- **Icons & Fonts**: Integrated support for Iconify and Nuxt Fonts.

## Project Structure

```
/app
  ├── assets
  │   ├── css      # Global styles
  │   ├── data     # Static data files
  ├── components   # Vue components
  ├── composables  # Reusable logic
  ├── pages        # Nuxt pages
  ├── stores       # Pinia stores
  ├── types        # TypeScript types
  ├── utils        # Helper functions
/public           # Static assets
/server
  ├── api         # API endpoints
```

## Installation

```sh
# Clone the repository
git clone https://github.com/dvrtnkv/nuxt-boilerplate.git
cd nuxt-boilerplate

# Install dependencies
npm install

# Start development server
npm run dev
```

## Scripts

| Command            | Description                |
| ------------------ | -------------------------- |
| `npm run dev`      | Start development server   |
| `npm run devh`     | Start dev server with host |
| `npm run build`    | Build for production       |
| `npm run generate` | Generate static site       |
| `npm run preview`  | Preview built app          |

## Dependencies

### Core

- `nuxt` `^3.15.4`
- `vue` `^3.5.13`
- `vue-router` `^4.5.0`
- `pinia` `^3.0.1`
- `pinia-plugin-persistedstate` `^4.2.0`
- `zod` `^3.24.2`
- `dayjs-nuxt` `^2.1.11`

### UI & Styling

- `@nuxt/icon` `^1.10.3`
- `@nuxt/fonts` `^0.10.3`
- `tailwindcss` `^4.0.6`
- `@tailwindcss/postcss` `^4.0.6`
- `@tailwindcss/vite` `^4.0.6`

## License

MIT
