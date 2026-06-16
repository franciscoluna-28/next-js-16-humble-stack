import { authClient } from "@/lib/auth-client";
import { logger } from "@/lib/logger";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const useAuthGuard = () => {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();

  useEffect(() => {
    if (!isPending && !session) {
      router.replace("/sign-in");
    }
  }, [session, isPending, router]);

  return {
    session,
    isPending,
  };
};

export const useSignOut = () => {
  const router = useRouter();

  const signOut = async () => {
    try {
      await authClient.signOut();
      router.push("/");
      router.refresh();
    } catch (e) {
      logger.error("Sign out failed", e);
    }
  };

  return signOut;
};
