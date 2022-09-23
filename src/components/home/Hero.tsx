import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

import food from "../../../public/images/foodplate.png";
import Loader from "../../components/common/Loader";
import { trpc } from "../../utils/trpc";

const Hero = () => {
  const recipeId = "cl8blt8ul00898tiqgjc5t4n6";

  const { data: session } = useSession();
  const userId = session?.user?.id as string;
  const { data, isLoading } = trpc.useQuery([
    "recipe.getSingleRecipe",
    { recipeId },
  ]);

  const [likeactive, setlikeactive] =
    useState(false); /*Checkt ob geliked ist oder nicht */

  function likePost() {
    trpc.useQuery(["recipe.increaseLikedRecipe", { userId, recipeId }]);
    setlikeactive(true);
  }

  function unlikePost() {
    trpc.useQuery(["recipe.increaseLikedRecipe", { userId, recipeId }]);
    setlikeactive(false);
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="lg:flex hidden w-full m-auto h-[70vh] relative  items-center justify-center">
      <div className="w-96 flex flex-col gap-y-8 items-start z-10 p-8 absolute left-8 top-1/2 -translate-y-1/2">
        <h1 className="header2 text-cb_green">Rezept des Tages</h1>
        <h2 className="header1 dark:text-cb_white text-5xl drop-shadow-md font-bold font-serif">
          {data?.title}
        </h2>
        <div className="flex gap-x-4">
          <Link href={`/rezepte/${recipeId}`} className="btn">
            zeig mir mehr ...
          </Link>
          {likeactive ? (
            <button
              className="flex gap-x-2 items-center justify-center text-xl text-cb_white"
              onClick={unlikePost}
            >
              <FaHeart className="text-red-500" /> {data?.likes}
            </button>
          ) : (
            <button
              className="flex gap-x-2 items-center justify-center text-xl text-cb_white"
              onClick={likePost}
            >
              <FaRegHeart /> {data?.likes}
            </button>
          )}
        </div>
      </div>
      <Image src={food} width={400} height={400} />
      <div className="flex flex-col gap-y-4 z-10  absolute right-0 top-1/2 -translate-y-1/2 items-end">
        <button className="bg-cb_primary w-80 p-4 rounded-l-full text-white hover:w-96 transition-all cursor-pointer flex flex-row gap-x-4 items-center">
          <Image src={food} width={100} height={100} />
          <div className="">
            <h3 className="font-bold font-serif">Rezept des Tages</h3>
            <p>Beschreibung</p>
          </div>
        </button>
        <button className="bg-cb_primary w-80 p-4 rounded-l-full text-white hover:w-96 transition-all  cursor-pointer flex flex-row gap-x-4 items-center">
          <Image src={food} width={100} height={100} />
          <div className="">
            <h3 className="font-bold">Rezept des Tages</h3>
            <p>Beschreibung</p>
          </div>
        </button>
        <button className="bg-cb_primary w-80 p-4 rounded-l-full text-white hover:w-96 transition-all  cursor-pointer flex flex-row gap-x-4 items-center">
          <Image src={food} width={100} height={100} />
          <div className="">
            <h3 className="font-bold">Rezept des Tages</h3>
            <p>Beschreibung</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Hero;
