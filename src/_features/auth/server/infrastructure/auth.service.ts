import { auth } from "@/utils/auth"
import type { AuthServiceShape, SignUpInput, SignInInput, SessionDTO, UserDTO } from "../application/auth.types"

function _hasUser(value: unknown): value is { user: UserDTO } {
  if (!value || typeof value !== "object") return false
  const user = (value as Record<string, unknown>).user
  return (
    typeof user === "object" &&
    user !== null &&
    typeof (user as Record<string, unknown>).id === "string" &&
    typeof (user as Record<string, unknown>).email === "string"
  )
}

function _hasSession(value: unknown): value is SessionDTO {
  if (!value || typeof value !== "object") return false
  const session = (value as Record<string, unknown>).session
  return (
    _hasUser(value) &&
    typeof session === "object" &&
    session !== null &&
    typeof (session as Record<string, unknown>).id === "string" &&
    typeof (session as Record<string, unknown>).token === "string"
  )
}

export const authService: AuthServiceShape = {
  async signUp(input: SignUpInput) {
    const response: unknown = await auth.api.signUpEmail({ body: input })
    if (!_hasUser(response)) throw new Error("Sign up failed: invalid response")
    return response as unknown as SessionDTO
  },

  async signIn(input: SignInInput) {
    const response: unknown = await auth.api.signInEmail({ body: input })
    if (!_hasUser(response)) throw new Error("Sign in failed: invalid response")
    return response as unknown as SessionDTO
  },

  async getSession() {
    const { headers } = await import("next/headers")
    const response = await auth.api.getSession({ headers: await headers() })
    if (response === null) return null
    if (!_hasSession(response)) throw new Error("Get session failed: invalid response")
    return response
  },

  async signOut() {
    const { headers } = await import("next/headers")
    await auth.api.signOut({ headers: await headers() })
  },
}
