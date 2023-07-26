"use client";

import { useAuth, useClerk } from "@clerk/nextjs";

export const SignInButton = () => {
  const { openSignIn, signOut } = useClerk();
  // session works on client
  const a = useAuth();
  console.log(a);

  return (
    <>
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
        Sign in
      </button>

      <button
        className="bg-primary text-primary-foreground shadow hover:bg-primary/90 p-4"
        onClick={() => signOut()}
      >
        Sign out
      </button>
    </>
  );
};
