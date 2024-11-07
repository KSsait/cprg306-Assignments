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
          <h1>Week 9 Demo</h1>
          <h2>Login Page </h2>
          {user ? ( 
            <div>
              <p> Welcome, {user.displayName} </p>
              <button onClick={signOut}>Sign Out</button>
            </div>
          ) : (
            <button onClick={signIn}>Sign In</button>
          )}
          
      </main>
  )
}