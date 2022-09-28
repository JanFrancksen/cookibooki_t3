import { signIn, useSession } from "next-auth/react";

export default function Usercheck({ children }: any) {
  const { data } = useSession();
  if (!data?.user) {
    return (
      <div className="my-40 flex flex-col items-center gap-4">
        Bitte melde dich an, um Zugriff auf disese Seite zu haben.
        <button
          className="font-bold font-serif uppercase bg-cb_primary px-4 py-2 hover:bg-cb_secondary rounded-full"
          onClick={() => signIn()}
        >
          Login
        </button>
      </div>
    );
  }

  return <>{children}</>;
}
