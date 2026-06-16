import { SessionDTO } from "@/_features/auth/server/application/auth.types";
import { authService } from "@/_features/auth/server/infrastructure/auth.service";
import { redirect } from "next/navigation";

export const ssrAuthGuard = async (): Promise<SessionDTO> => {
  const session = await authService.getSession();

  if (!session) {
    redirect("/sign-in");
  }

  return session;
};
