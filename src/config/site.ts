export const siteConfig = {
  name: "FunForm Template",
  description: "A modern Next.js template with shadcn/ui, Prisma, and Better Auth.",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  ogImage: "https://your-domain.com/og.jpg",
  links: {
    twitter: "https://twitter.com/your-handle",
    github: "https://github.com/your-repo",
  },
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
    "Radix UI",
    "Shadcn UI",
    "Better Auth",
    "Prisma",
  ],
}

export type SiteConfig = typeof siteConfig
