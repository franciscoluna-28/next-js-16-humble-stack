export const AUTH_ERRORS = {
  USER_ALREADY_EXISTS: "USER_ALREADY_EXISTS",
  INVALID_EMAIL_OR_PASSWORD: "INVALID_EMAIL_OR_PASSWORD",
} as const

export class AuthError extends Error {
  constructor(
    message: string,
    public code: string,
  ) {
    super(message)
    this.name = "AuthError"
  }
}

export class EmailAlreadyTakenError extends AuthError {
  constructor() {
    super("Email is already registered", AUTH_ERRORS.USER_ALREADY_EXISTS)
  }
}

export class InvalidCredentialsError extends AuthError {
  constructor() {
    super("Invalid email or password", AUTH_ERRORS.INVALID_EMAIL_OR_PASSWORD)
  }
}
