This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Why I Built this Template

In my previous role as a founding engineer, I used a decoupled architecture with multiple CI/CD pipelines using a separate Express instance and a Vite + React 19 Frontend. While this decoupled architecture was productive, we had to introduce OpenAPI, monitor the external API, deal with network failures and run 2 separate CI/CD pipelines for a MVP.

The ideal solution would've been a Next.js/Laravel monolith with PM2 in a VPS for the given stage. I might build a template with Laravel in the future, however, I'm starting with Node.js and Next.js.

For backend heavy projects, I'd use Laravel. If I need a backend and the app is frontend-heavy, Next.js.

## What This Template Contains

- All ShadcnUI default components so you can focus on shipping.
- Drizzle ORM setup with support for database migrations and transactions.
- Password and Email authentication with BetterAuth so you can focus on shipping.
- Minimal hexagonal architecture with use cases, ports and adapters.
- Tests configured with Vitest and Playwright.
- Best practices brought from experience working in production systems.

## Best Practices No One Has Told You

- Run database migrations in CI/CD to prevent race conditions, not in the app startup, if you're running multiple nodes.
- NEVER use the command drizzle-kit push in production. The idea is to always have a `database_migrations` table in your database, which will be a version control of the migrations ran. Push inserts your schema changes directly to the database without any kind of SQL generation, making it riskier.

## Why this?

I'm not telling you to use this template, however, I've led small teams and shipped actual production projects with actual users and on-calls rotations during these 3 years. I'm providing the tools to survive the real world with:

- Logging as a first class citizen, unlike most Next.js projects.
- Built for AI agents by using skills and clear architecture patterns.
- Minimal abstractions. Remove what you don't need and add the tools you need, this is a template, not a framework. 
- Clear testing strategies. Unit tests, integration tests and E2E tests with Playwright. Again, expand them as needed. 