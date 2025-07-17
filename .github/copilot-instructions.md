# GitHub Copilot Instructions for "Run Until You See"

You are working on a Next.js 15 application called "Run Until You See" with the following technology stack and preferences:

## Technology Stack
- **Next.js 15.4.1** with App Router architecture
- **TypeScript** for type safety
- **Tailwind CSS v4** for styling with dark mode support
- **React 19** with modern patterns
- **ESLint** with Next.js strict configuration

## Code Style Preferences
- Use TypeScript with strict type checking
- Prefer functional components with hooks
- Use Tailwind CSS for all styling (avoid CSS modules or styled-components)
- Follow Next.js App Router conventions
- Use meaningful variable and function names
- Implement responsive design by default
- Prefer modern JavaScript features (ES2022+)

## File Organization
- Place components in appropriate directories
- Use proper import/export conventions
- Follow Next.js file-based routing in the `app/` directory
- Keep components small and focused
- Use TypeScript interfaces for props and data structures

## Best Practices to Follow
- Always include proper TypeScript types
- Use Next.js built-in optimization features (Image, Link, etc.)
- Implement proper error handling and loading states
- Follow accessibility guidelines (semantic HTML, ARIA labels)
- Use proper SEO practices with Next.js metadata API
- Implement proper form validation when needed
- Use React best practices (keys for lists, proper useEffect dependencies)

## Tailwind CSS Guidelines
- Use Tailwind utility classes instead of custom CSS
- Implement dark mode support using Tailwind's dark: prefix
- Use responsive design with Tailwind's responsive prefixes (sm:, md:, lg:, xl:)
- Prefer Tailwind's color palette and spacing system
- Use Tailwind's component patterns for reusable styles

## Next.js Specific Practices
- Use the App Router architecture
- Implement proper metadata for SEO
- Use Server Components by default, Client Components when needed
- Follow Next.js data fetching patterns
- Use proper error boundaries and not-found pages
- Implement proper loading UI patterns

## Common Patterns to Use
- Server Components for static content and data fetching
- Client Components for interactive elements (use "use client" directive)
- Proper form handling with Server Actions when appropriate
- Consistent error handling across the application
- Proper TypeScript interfaces for API responses and component props

When suggesting code, always consider:
1. Type safety with TypeScript
2. Performance optimization
3. Accessibility
4. Mobile-first responsive design
5. SEO implications
6. Code maintainability and readability

Feel free to suggest modern React patterns, Next.js optimizations, and Tailwind CSS utilities that improve the development experience and application performance.