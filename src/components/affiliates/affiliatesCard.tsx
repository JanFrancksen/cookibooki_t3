import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Affiliates {
  link: string;
  title: string;
  image: string;
  beschreibung: string;
}

const AffiliatesCard = ({ link, image, title, beschreibung }: Affiliates) => {
  return (
    <Link href={link}>
      <div className="border flex flex-col  rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer">
        <Image src={image} width="400" height="250" objectFit="cover" />
        <div className="p-4 gap-4 flex-flex-col flex-auto justify-between">
          <div>
            <h2 className="text-xl font-bold text-cb_primary">{title}</h2>
            <p className="text-base text-cb_black">{beschreibung}</p>
          </div>
          <span className="text-sm bg-cb_primary rounded-full px-3 py-1">
            mehr erfahren ...
          </span>
        </div>
      </div>
    </Link>
  );
};

export default AffiliatesCard;
