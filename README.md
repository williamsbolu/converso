This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Clerk Authentication Setup

This project uses [Clerk](https://clerk.com/) for authentication. To set up Clerk:

1. Create a Clerk account at [clerk.com](https://clerk.com)
2. Create a new application in your Clerk Dashboard
3. Copy your API keys from the [API keys page](https://dashboard.clerk.com/last-active?path=api-keys)
4. Create a `.env.local` file in the root directory with the following variables:

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key_here
CLERK_SECRET_KEY=your_secret_key_here
```

**Important:** The `.env.local` file is already included in `.gitignore` and will not be committed to version control.

### What's Included

- ✅ Clerk middleware for route protection
- ✅ ClerkProvider wrapping the entire app
- ✅ Sign-in and Sign-up buttons in the navbar
- ✅ User button for authenticated users
- ✅ Custom sign-in and sign-up pages
- ✅ Modal-based authentication flows

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
