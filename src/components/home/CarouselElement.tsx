import Image from "next/image";
import React from "react";

const CarouselElement = ({ title, img, description }: any) => {
  return (
    <div className="basis-72 shrink-0 grow-0 h-auto ">
      <Image src={img} width="400" height="300" objectFit="cover" />
      <div className="text-center py-4">
        <h3 className="font-bold text-lg">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CarouselElement;
