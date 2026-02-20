# Nextjs Template

A modern, production-ready Next.js starter template designed for speed, security, and developer experience. Created using gemini cli, so you can use gemini cli to carry on improvements and remove features you don't need.

## 🚀 Key Features

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Database**: [Prisma ORM](https://www.prisma.io/) with PostgreSQL/SQLite support
- **Authentication**: [Better Auth](https://www.better-auth.com/) (Email/Password & Social)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) with Tailwind CSS v4
- **SEO Ready**: Automated sitemap, robots.txt, and metadata configuration via `siteConfig`
- **Protected Routes**: Pre-configured server and client-side protection
- **Dark Mode**: Integrated with `next-themes`

## 🛠️ Tech Stack

- **React 19**
- **TypeScript**
- **Tailwind CSS v4**
- **Lucide Icons**
- **React Hook Form & Zod**

## 📋 Getting Started

### 1. Environment Variables

Copy `.env.sample` to `.env` and fill in your database and auth credentials.

```bash
cp .env.sample .env
```

### 2. Install Dependencies

```bash
bun install
```

### 3. Database Setup

Generate the Prisma client and run migrations:

```bash
bunx prisma generate
bunx prisma migrate dev --name init
```

### 4. Run Development Server

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to see your app.

## 📂 Project Structure

- `src/app`: Application routes and layouts.
    - `(auth)`: Login and registration pages.
    - `(protected)`: Routes requiring authentication (Dashboard, Profile).
- `src/components`: Reusable UI components.
    - `ui`: shadcn/ui components.
- `src/lib`: Core logic and third-party integrations (Prisma, Auth).
- `src/config`: Global site configuration (`site.ts`).
- `prisma`: Database schema and migrations.

## 🔒 Authentication

This template uses **Better Auth**.

- Configuration: `src/lib/auth.ts`
- Client Hooks: `src/lib/auth-client.ts`
- API Route: `src/app/api/auth/[...all]/route.ts`

## 🌍 SEO & Metadata

Update `src/config/site.ts` to change the global site name, description, and social links. The template automatically generates:

- `sitemap.xml`
- `robots.txt`
- `manifest.json`

## 📄 License

MIT

---

_Refer to `GEMINI.md` for more specific instructions on removing features or advanced configuration._

