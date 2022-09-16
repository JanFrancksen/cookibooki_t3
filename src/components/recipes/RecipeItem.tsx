import Image from "next/image";
import Link from "next/link";
import React from "react";

const RecipeItem = ({
  image,
  title,
  description,
  difficulty,
  time,
  link,
}: any) => {
  return (
    <Link href={`rezepte/${link}`}>
      <a>
        <div className="bg-cb_green text-cb_white flex flex-col">
          <div>
            <Image src={image} alt={title} width="400" height="200" />
            <div className="p-4">
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default RecipeItem;
