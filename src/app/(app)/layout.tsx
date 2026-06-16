import { redirect } from "next/navigation"
import { authService } from "@/_features/auth/server/infrastructure/auth.service"

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await authService.getSession()

  if (!session) {
    redirect("/sign-in")
  }

  return (
    <div className="flex flex-1 flex-col">
      <header className="flex h-14 items-center justify-between border-b px-6">
        <span className="font-semibold">Humble Stack</span>
        <span className="text-sm text-muted-foreground">{session.user.email}</span>
      </header>
      <main className="flex flex-1 p-6">{children}</main>
    </div>
  )
}
