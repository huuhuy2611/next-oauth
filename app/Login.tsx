"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { UserCard } from "./userCard";

export default function Login() {
  const { data: session } = useSession();
  console.log(
    111,
    session,
    process.env.FACEBOOK_CLIENT_ID,
    process.env.FACEBOOK_CLIENT_SECRET
  );

  if (session) {
    return (
      <>
        <button
          onClick={() => signOut()}
          type="button"
          className="btn btn-primary"
        >
          Sign Out
        </button>
        {/* Pass session info to server component */}
        <UserCard user={session?.user} />
      </>
    );
  } else {
    return (
      <>
        <button
          onClick={() => signIn()}
          type="button"
          className="btn btn-primary"
        >
          Sign In
        </button>
      </>
    );
  }

  // if a user doesn't exist -> show a Sign In button
}
