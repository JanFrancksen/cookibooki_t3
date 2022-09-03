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

            <span className='text-white mr-4'>{session.user?.name}</span> <button className="bg-white px-3 py-1" onClick={() => signOut()}> Logout</button>


        </div>
      ) : (
        <div>
          <button onClick={() => signIn()}>Login</button>
        </div>
      )}
   </>
  )
}

export default LoginButton