import React from "react";
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
          <span className="mr-4 ">{session.user?.name}</span>
          <button
            className="font-bold font-serif uppercase"
            onClick={() => signOut()}
          >
            <FaSignOutAlt />
          </button>
        </div>
      ) : (
        <div>
          <button
            className="font-bold font-serif uppercase"
            onClick={() => signIn()}
          >
            Login
          </button>
        </div>
      )}
    </>
  );
};

export default LoginButton;
