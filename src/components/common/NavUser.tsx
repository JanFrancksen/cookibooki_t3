import React from 'react'
import { signIn, signOut, useSession } from "next-auth/react";
import { FaSignOutAlt } from "react-icons/fa";




const LoginButton = () => {

    const { data: session, status } = useSession();
    if (status === "loading") {
        return <main>Loading...</main>;
      }

  return (
   <>
   {session ? (
        <div>

            <span className='text-white mr-4'>{session.user?.name}</span> <button className="bg-transparent text-cb_white px-3 py-1" onClick={() => signOut()}> <FaSignOutAlt /> </button>


        </div>
      ) : (
        <div>
          <button className='text-white font-bold' onClick={() => signIn()}>Login</button>
        </div>
      )}
   </>
  )
}

export default LoginButton