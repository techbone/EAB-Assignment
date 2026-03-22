# EAB - Technical Approach

## Technical Stack

- **Framework**: [React 19](https://react.dev/) - Leveraging the latest concurrent features, modern hooks, and optimized rendering.
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Ensuring robust type safety, better developer experience, and long-term maintainability.
- **Build Tool**: [Vite 8](https://vitejs.dev/) - Providing an ultra-fast development environment with Hot Module Replacement (HMR) and optimized build pipelines.
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) - Utilizing a utility-first approach for rapid, consistent, and highly responsive styling.
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/) - Integrating a comprehensive set of modern icons (FontAwesome, Feather, etc.) for a polished UI.

## Architectural Philosophy

- **Component-Driven Development**: The UI is architected into modular, reusable sections (e.g., `HeroBanner`, `ImpactSection`, `AboutSection`, `Footer`). This promotes clean code separation and easier feature updates.
- **Pixel-Perfect & Premium Design**: Special attention is paid to typography, spacing, and micro-interactions to deliver a high-end feel that matches modern web standards.
- **Performance-First**: Assets are optimized, and the code structure is kept lean to ensure fast load times and smooth animations.
- **Type Safety Layer**: Full TypeScript implementation across all components and utility functions to catch potential issues early.

## Project Structure

- `src/components/`: Core UI components organized by feature and section.
- `src/assets/`: Static assets, including images and custom SVG icons.
- `src/test/`: Unit and component testing suite powered by Vitest.
- `vite.config.ts`: Modern build configuration for optimized performance.

## Development Workflows

- **Development**: `npm run dev` for local development with HMR.
- **Testing**: `npm run test` for running the automated test suite.
- **Build**: `npm run build` for generating an optimized production bundle with TypeScript validation.
- **Linting**: `npm run lint` for maintaining consistent code style.
