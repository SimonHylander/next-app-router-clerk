"use client";

import { SignedIn, useAuth } from "@clerk/nextjs";

export const UserData = () => {
  const { userId } = useAuth();

  return (
    <>
      <SignedIn>
        <div>I am signed in as {userId}</div>
      </SignedIn>
    </>
  );
};
