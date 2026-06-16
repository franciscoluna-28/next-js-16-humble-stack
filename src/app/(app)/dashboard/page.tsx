"use client"

import { authClient } from "@/lib/auth-client"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { useRouter } from "next/navigation"

export default function DashboardPage() {
  const { data: session, isPending } = authClient.useSession()
  const router = useRouter()

  if (isPending) {
    return <p className="text-muted-foreground">Loading session...</p>
  }

  if (!session) {
    return <p className="text-muted-foreground">Not authenticated.</p>
  }

  return (
    <div className="flex w-full flex-col gap-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>

      <Card>
        <CardHeader>
          <CardTitle>Profile</CardTitle>
          <CardDescription>Your account information.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-2 text-sm">
          <div>
            <span className="font-medium">Name:</span> {session.user.name}
          </div>
          <div>
            <span className="font-medium">Email:</span> {session.user.email}
          </div>
          <div>
            <span className="font-medium">ID:</span> {session.user.id}
          </div>
          <div>
            <span className="font-medium">Email verified:</span>{" "}
            {session.user.emailVerified ? "Yes" : "No"}
          </div>
        </CardContent>
      </Card>

      <div>
        <Button
          variant="outline"
          onClick={async () => {
            await authClient.signOut()
            router.push("/")
          }}
        >
          Sign Out
        </Button>
      </div>
    </div>
  )
}
