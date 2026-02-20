# Template Instructions

This template includes shadcn/ui, Prisma, Better Auth, and a complete SEO setup with Navbar/Footer.

## 1. Environment Variables
Copy `.env.sample` to `.env` and fill in the values.

## 2. Prisma Setup
- Update `prisma/schema.prisma` if needed.
- Run `bunx prisma generate` to generate the Prisma client.
- Run `bunx prisma migrate dev` to sync your database.

## 3. Better Auth
- The auth config is in `src/lib/auth.ts` and `src/lib/auth-client.ts`.
- API route: `src/app/api/auth/[...all]/route.ts`.
- Login/Register pages are in `src/app/(auth)/`.

## 4. SEO & Config
- Edit `src/config/site.ts` to update your website's name, description, and social links.
- Global layout (Navbar/Footer/SEO) is in `src/app/layout.tsx`.

---

# How to Remove Features

### To Remove Prisma:
1. Delete `prisma/` directory.
2. Delete `prisma.config.ts`.
3. Delete `src/lib/prisma.ts`.
4. Uninstall: `bun remove @prisma/client prisma`.
5. Remove references in `src/lib/auth.ts`.

### To Remove Better Auth:
1. Delete `src/lib/auth.ts`, `src/lib/auth-client.ts`.
2. Delete `src/app/api/auth/[...all]/route.ts`.
3. Delete `src/app/(auth)/` folder.
4. Uninstall: `bun remove better-auth`.
5. Remove auth models from `prisma/schema.prisma` (if using Prisma).

### To Remove shadcn/ui:
1. Delete `src/components/ui/`.
2. Delete `src/lib/utils.ts`.
3. Delete `components.json`.
4. Uninstall: `bun remove tailwind-merge clsx lucide-react shadcn class-variance-authority radix-ui`.
5. Revert `src/app/globals.css` (remove shadcn variables).
6. Revert `src/app/layout.tsx` (remove `ThemeProvider` and components).

### To Remove SEO Config:
1. Delete `src/config/site.ts`.
2. Revert `src/app/layout.tsx` (remove `siteConfig` imports and metadata usage).
