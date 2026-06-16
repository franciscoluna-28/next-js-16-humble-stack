import type { Result } from "@/utils/api"
import type { SignUpInput, SignInInput } from "../../auth.validation"
export type { SignUpInput, SignInInput }

export type UserDTO = {
  id: string
  email: string
  name: string
  image: string | null
  emailVerified: boolean
  createdAt: Date
  updatedAt: Date
}

export type SessionDTO = {
  session: {
    id: string
    expiresAt: Date
    token: string
    createdAt: Date
    updatedAt: Date
    ipAddress: string | null
    userAgent: string | null
    userId: string
  }
  user: UserDTO
}

export type AuthResult = Result<SessionDTO>

export type AuthServiceShape = {
  signUp(input: SignUpInput): Promise<SessionDTO>
  signIn(input: SignInInput): Promise<SessionDTO>
  getSession(): Promise<SessionDTO | null>
  signOut(): Promise<void>
}
