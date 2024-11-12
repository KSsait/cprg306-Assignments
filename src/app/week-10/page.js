"use client"

import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();
  const router = useRouter();

  const signIn = async () => {
    await gitHubSignIn();
    router.push("week-10/shopping-list");
  }
  const signOut = async () => {
    await firebaseSignOut();
    router.push("week-10/");
  }

  console.log(user);

  return(
      <main>
        <h1 className="font-bold text-3xl mb-5">Shopping List</h1>
        <h2 className="text-xl mb-5">Login Page </h2>
        {user ? ( 
          <div>
            <p className="m-4"> Welcome, {user.displayName} </p>
            <Link href="/week-10/shopping-list">Go to Shopping List </Link>
            <div className="mt-5 text-right">
              <button onClick={signOut}>Sign Out</button>
            </div>
          </div>
        ) : (
          <button onClick={signIn}>Sign In using Github</button>
        )}
          
      </main>
  )
}