import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  UserButton,
  auth,
} from "@clerk/nextjs";

import { SignInButton } from "./_components/signin";
import { env } from "~/env.mjs";

export default function Home() {
  // everything is null on server
  const a = auth();
  console.log(a);

  return (
    <>
      <main className="z-10 flex gap-4 bg-white">
        <ClerkProvider publishableKey={env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
          <SignedOut>
            <SignInButton />
          </SignedOut>

          <SignedIn>
            This doesnt work on server
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                layout: {
                  logoPlacement: "none",
                },
                elements: {
                  userButtonAvatarBox: "h-8 w-8 sm:h-10 sm:w-10",
                },
              }}
            />
          </SignedIn>
        </ClerkProvider>
      </main>
    </>
  );
}