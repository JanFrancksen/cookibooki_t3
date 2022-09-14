import Image from "next/image";
import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import food from "../../../public/images/foodplate.png";

const Hero = () => {
  const [like, setlike] = useState(87);
  const [likeactive, setlikeactive] = useState(false);

  const title = "Kartoffelstampf mit lecker Gedöns";

  function likePost() {
    if (likeactive) {
      setlikeactive(false);
      setlike(like - 1);
    } else {
      setlikeactive(true);
      setlike(like + 1);
    }
  }

  return (
    <div className="w-full m-auto h-[80vh] relative flex items-center justify-center">
      <div className="w-96 flex flex-col gap-y-8 items-start z-10 p-8 absolute left-8 top-1/2 -translate-y-1/2">
        <h1 className="header2 text-cb_green">Rezept des Tages</h1>
        <h2 className="header1 dark:text-cb_white text-5xl drop-shadow-md">
          {title}
        </h2>
        <div className="flex gap-x-4">
          <button className="btn">zeig mir mehr ...</button>
          {likeactive ? (
            <button
              className="flex gap-x-2 items-center justify-center text-xl text-cb_white"
              onClick={likePost}
            >
              <FaHeart className="text-red-500" /> {like}
            </button>
          ) : (
            <button
              className="flex gap-x-2 items-center justify-center text-xl text-cb_white"
              onClick={likePost}
            >
              <FaRegHeart /> {like}
            </button>
          )}
        </div>
      </div>
      <Image src={food} width={400} height={400} />
      <div className="flex flex-col gap-y-4 z-10  absolute right-0 top-1/2 -translate-y-1/2">
        <div className="bg-cb_primary w-80 p-4 rounded-l-full text-white hover:scale-105 transition-transform cursor-pointer flex flex-row gap-x-4 items-center">
          <Image src={food} width={100} height={100} />
          <div className="">
            <h3 className="font-bold">Rezept des Tages</h3>
            <p>Beschreibung</p>
          </div>
        </div>
        <div className="bg-cb_primary w-80 p-4 rounded-l-full text-white hover:scale-105 transition-transform cursor-pointer flex flex-row gap-x-4 items-center">
          <Image src={food} width={100} height={100} />
          <div className="">
            <h3 className="font-bold">Rezept des Tages</h3>
            <p>Beschreibung</p>
          </div>
        </div>
        <div className="bg-cb_primary w-80 p-4 rounded-l-full text-white hover:scale-105 transition-transform cursor-pointer flex flex-row gap-x-4 items-center">
          <Image src={food} width={100} height={100} />
          <div className="">
            <h3 className="font-bold">Rezept des Tages</h3>
            <p>Beschreibung</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
