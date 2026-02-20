import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { auth } from "@/lib/auth";

export default async function DashboardPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Welcome back, {session.user.name}!</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              This is a server-side protected page. Only authenticated users can
              see this content.
            </p>
            <div className="mt-4 p-4 bg-muted rounded-md overflow-x-auto">
              <pre className="text-xs">{JSON.stringify(session, null, 2)}</pre>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
