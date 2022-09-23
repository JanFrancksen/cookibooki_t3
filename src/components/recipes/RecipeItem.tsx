import Image from "next/image";
import Link from "next/link";
import React from "react";
import { map } from "zod";

const RecipeItem = ({
  image,
  title,
  description,
  difficulty,
  time,
  link,
  tag,
}: any) => {
  console.log(tag);
  return (
    <Link href={`rezepte/${link}`}>
      <a>
        <div className="bg-cb_green text-cb_white flex flex-col text-center border shadow-md hover:shadow-lg transition-shadow">
          <div className="w-full">
            <Image
              src={image}
              alt={title}
              width="500"
              height="250"
              objectFit="cover"
            />
            <div className="p-8 flex gap-2 flex-col items-center">
              <div className="">
                <span>{difficulty}</span>
                <span>{time}</span>
              </div>
              <h3 className="h2 font-bold font-serif">{title}</h3>
              <p>{description}</p>
              <div className="flex gap-2">
                {tag?.map((tags: any) => {
                  return (
                    <span
                      key={tags.id}
                      className="bg-cb_primary text-cb_white rounded-full px-3 py-1 text-xs"
                    >
                      {tags.name}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default RecipeItem;
