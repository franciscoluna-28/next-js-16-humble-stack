import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-4">
      <main className="flex max-w-2xl flex-col items-center gap-6 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Welcome to Humble Stack
        </h1>
        <p className="max-w-lg text-lg text-muted-foreground">
          A modern Next.js starter with authentication, database, and UI components out of the box.
        </p>
        <div className="flex gap-4">
          <Link
            href="/sign-up"
            className="inline-flex h-10 items-center justify-center rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground hover:bg-primary/80"
          >
            Get Started
          </Link>
          <Link
            href="/sign-in"
            className="inline-flex h-10 items-center justify-center rounded-lg border border-border bg-background px-6 text-sm font-medium hover:bg-muted"
          >
            Sign In
          </Link>
        </div>
      </main>
    </div>
  )
}
