"use server"

import { err } from "@/utils/api"
import { authService } from "./auth.service"
import {
  signUpUseCase,
  signInUseCase,
  signOutUseCase,
} from "../application/auth.use-cases"
import type { AuthResult } from "../application/auth.types"
import { signUpSchema, signInSchema } from "../../auth.validation"

export async function signUpAction(
  _prev: AuthResult | null,
  formData: FormData,
): Promise<AuthResult> {
  const parsed = signUpSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  })

  if (!parsed.success) return err(parsed.error.issues[0]!.message)

  return signUpUseCase(parsed.data, authService)
}

export async function signInAction(
  _prev: AuthResult | null,
  formData: FormData,
): Promise<AuthResult> {
  const parsed = signInSchema.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
    rememberMe: formData.get("rememberMe"),
  })

  if (!parsed.success) return err(parsed.error.issues[0]!.message)

  return signInUseCase(parsed.data, authService)
}

export async function signOutAction(): Promise<void> {
  return signOutUseCase(authService)
}
