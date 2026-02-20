import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center p-8 sm:p-24 transition-colors">
      <main className="flex flex-col gap-8 max-w-2xl w-full">
        <header className="space-y-2 text-center sm:text-left">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Next.js Template
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            Configured with shadcn/ui, Prisma, and Better-auth.
          </p>
        </header>

        <div className="grid gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Shadcn Components</CardTitle>
              <CardDescription>
                Example of Button and Card components.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                You can add more components by running:
                <code className="block mt-2 p-2 bg-zinc-100 dark:bg-zinc-800 rounded text-xs">
                  bunx shadcn add [component]
                </code>
              </p>
            </CardContent>
            <CardFooter className="flex gap-4">
              <Button>Primary Button</Button>
              <Button variant="outline">Secondary Button</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Next Steps</CardTitle>
              <CardDescription>
                Check <code>GEMINI.md</code> for setup instructions.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 border rounded-lg bg-yellow-50 dark:bg-yellow-950/20 border-yellow-200 dark:border-yellow-900/50">
                <p className="text-sm text-yellow-800 dark:text-yellow-200 font-medium">
                  Missing Configuration
                </p>
                <p className="text-xs text-yellow-700 dark:text-yellow-300 mt-1">
                  Don&apos;t forget to set up your <code>.env</code> file based
                  on <code>.env.sample</code>.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
