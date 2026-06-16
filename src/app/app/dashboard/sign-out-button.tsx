"use client";

import { Button } from "@/components/ui/button";
import { useSignOut } from "@/hooks/use-auth";

export function SignOutButton() {
  const signOut = useSignOut();

  return (
    <Button variant="outline" onClick={signOut}>
      Sign Out
    </Button>
  );
}
