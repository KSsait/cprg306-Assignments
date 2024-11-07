"use client"

import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const signIn = async () => {
    await gitHubSignIn();
  }
  const signOut = async () => {
    await firebaseSignOut();
  }

  console.log(user);

  return(
      <main>
          <h1 className="font-bold text-3xl mb-5">Shopping List</h1>
          <h2 className="text-xl mb-5">Login Page </h2>
          {user ? ( 
            <div>
              <p className="m-4"> Welcome, {user.displayName} </p>
              <a href="/week-9/shopping-list">Go to Shopping List </a>
              <div>
                <button onClick={signOut}>Sign Out</button>
              </div>
            </div>
          ) : (
            <button onClick={signIn}>Sign In using Github</button>
          )}
          
      </main>
  )
}