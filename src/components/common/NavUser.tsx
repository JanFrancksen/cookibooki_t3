import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import { MdLogout } from "react-icons/md";
import Link from "next/link";

const LoginButton = () => {
  const { data: session, status } = useSession();
  if (status === "loading") {
    return <main>Loading...</main>;
  }

  return (
    <>
      {session ? (
        <div>
          <Link href="/profile">
            <a className="mr-4 rounded-full p-2 hover:bg-cb_primary hover:text-cb_white dark:hover:bg-cb_secondary transition-colors">
              {session.user?.name}
            </a>
          </Link>
          <button
            onClick={() => signOut()}
            className="hover:bg-cb_primary hover:text-cb_white dark:hover:bg-cb_secondary rounded-full p-2 transition-colors"
          >
            <MdLogout />
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
