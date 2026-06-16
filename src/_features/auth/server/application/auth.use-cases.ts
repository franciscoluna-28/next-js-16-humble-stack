import { wrap } from "@/utils/api"
import type { SignUpInput, SignInInput, AuthServiceShape } from "./auth.types"

export const signUpUseCase = (
  input: SignUpInput,
  deps: AuthServiceShape,
) => wrap(() => deps.signUp(input))

export const signInUseCase = (
  input: SignInInput,
  deps: AuthServiceShape,
) => wrap(() => deps.signIn(input))

export const getSessionUseCase = (deps: AuthServiceShape) =>
  deps.getSession()

export const signOutUseCase = (deps: AuthServiceShape) =>
  deps.signOut()
