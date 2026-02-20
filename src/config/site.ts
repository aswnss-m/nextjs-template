export const siteConfig = {
  name: "FunForm Template",
  shortName: "FunForm",
  description:
    "A modern Next.js template with shadcn/ui, Prisma, and Better Auth.",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  ogImage: "/og.png",
  author: "Aswin",
  links: {
    twitter: "@aswnss", // Please provide the handle only
    github: "https://github.com/aswin-codes/funform",
  },
  keywords: [
    "Next.js 15",
    "React 19",
    "Tailwind CSS",
    "Server Components",
    "Radix UI",
    "Shadcn UI",
    "Better Auth",
    "Prisma ORM",
    "Fullstack Template",
    "TypeScript",
  ],
};

export type SiteConfig = typeof siteConfig;
