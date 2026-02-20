export default function Loading() {
  return (
    <div className="container mx-auto py-20 flex flex-col items-center justify-center space-y-4">
      <div className="h-12 w-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
      <p className="text-muted-foreground font-medium animate-pulse">
        Loading...
      </p>
    </div>
  );
}
