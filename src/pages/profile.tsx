import type { NextPage } from "next";
import { trpc } from "../utils/trpc";
import Usercheck from "../components/common/Usercheck";
import ProfileNav from "../components/profile/profileNav";
import Link from "next/link";

const Profile: NextPage = () => {
  const { data, isLoading } = trpc.useQuery(["user.getUserInfo"]);

  if (isLoading) {
    return <div className="my-40 mx-auto">Lädt...</div>;
  }

  return (
    <Usercheck>
      <div className="my-40 mx-auto w-3/4 flex flex-col gap-y-4">
        <ProfileNav />
        <div className="border rounded-lg p-4 grid gap-4 grid-cols-2">
          <div className="">
            <p>E-Mail Adresse: {data?.email}</p>
            <p>Nutzername: {data?.name}</p>
            <p>Rolle: {data?.role}</p>
            <button className="bg-cb_primary px-4 py-2 mt-2 text-xs rounded-full">
              daten bearbeiten
            </button>
          </div>
          <div className="w-20 h-20 rounded-full bg-cb_black">
            <img src={`${data?.image}`} width="400" height="400" />
          </div>
          <Link href="/cookbook">
            <a className="p-8 bg-cb_primary rounded-lg">
              Deine Lieblingsrezepte
            </a>
          </Link>
          <Link href="/wochenplan">
            <a className="p-8 bg-cb_primary rounded-lg">Wochenplan</a>
          </Link>
        </div>
      </div>
    </Usercheck>
  );
};

export default Profile;
