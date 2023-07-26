"use client";

import { useClerk } from "@clerk/nextjs";

export const SignInButton = () => {
  const { openSignIn } = useClerk();

  return (
    <button
      className="bg-primary text-primary-foreground shadow hover:bg-primary/90 p-4"
      onClick={() =>
        openSignIn({
          appearance: {
            variables: {
              colorPrimary: "#E24A8D",
            },
          },
        })
      }
    >
      Logga in
    </button>
  );
};
