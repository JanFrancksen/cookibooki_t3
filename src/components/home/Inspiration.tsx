import Image from "next/image";
import React from "react";
import food from "../../../public/images/food.jpg";

const Inspiration = () => {
  return (
    <div className="md:w-3/4 md:p-0 p-8 m-auto md:my-20">
      <h2 className="h1 font-bold font-serif mb-8">Inspiration gefällig?</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="relative h-fit">
          <span className="z-10 absolute inset-0 bg-gradient-to-t from-cb_black opacity-70"></span>
          <Image
            src={food}
            width="400"
            height="400"
            layout="responsive"
            objectFit="cover"
          />
          <h1 className="z-20 absolute bottom-4 left-4 text-xl font-bold text-cb_white drop-shadow-sm">
            Kochen
          </h1>
        </div>
        <div className="relative h-fit">
          <span className="z-10 absolute inset-0 bg-gradient-to-t from-cb_black opacity-70"></span>
          <Image
            src={food}
            width="400"
            height="400"
            objectFit="cover"
            layout="responsive"
          />
          <h1 className="z-20 absolute bottom-4 left-4 text-xl font-bold text-cb_white drop-shadow-sm">
            Backen
          </h1>
        </div>
        <div className="relative h-fit">
          <span className="z-10 absolute inset-0 bg-gradient-to-t from-cb_black opacity-70"></span>
          <Image
            src={food}
            width="400"
            height="400"
            objectFit="cover"
            layout="responsive"
          />
          <h1 className="z-20 absolute bottom-4 left-4 text-xl font-bold text-cb_white drop-shadow-sm">
            Trinken
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Inspiration;
