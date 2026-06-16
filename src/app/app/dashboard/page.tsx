import { SignOutButton } from "./sign-out-button"
import { ssrAuthGuard } from "@/utils/guards";

export default async function DashboardPage() {
  const session = await ssrAuthGuard();

  const { user } = session

  return (
    <div className="flex w-full flex-col gap-6">
      <h1 className="text-2xl font-bold">Dashboard</h1>

      <div className="rounded-lg border p-4">
        <h2 className="mb-2 text-lg font-semibold">Profile</h2>
        <p className="text-sm text-muted-foreground">Your account information.</p>
        <dl className="mt-4 flex flex-col gap-2 text-sm">
          <div>
            <dt className="font-medium">Name</dt>
            <dd>{user.name}</dd>
          </div>
          <div>
            <dt className="font-medium">Email</dt>
            <dd>{user.email}</dd>
          </div>
          <div>
            <dt className="font-medium">ID</dt>
            <dd>{user.id}</dd>
          </div>
          <div>
            <dt className="font-medium">Email verified</dt>
            <dd>{user.emailVerified ? "Yes" : "No"}</dd>
          </div>
        </dl>
      </div>

      <div>
        <SignOutButton />
      </div>
    </div>
  )
}
