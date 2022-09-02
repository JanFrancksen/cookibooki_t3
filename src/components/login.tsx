import React from 'react'
import { signIn, signOut, useSession } from "next-auth/react";


const LoginButton = () => {

    const { data: session, status } = useSession();
    if (status === "loading") {
        return <main>Loading...</main>;
      }

  return (
   <>
   {session ? (
        <div>
          <p>
            hi {session.user?.name}
          </p>

          <button onClick={() => signOut()}>Logout</button>
        </div>
      ) : (
        <div>
          <button onClick={() => signIn()}>Login with Discord</button>
        </div>
      )}
   </>
  )
}

export default LoginButton