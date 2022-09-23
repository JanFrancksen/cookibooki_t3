import Image from "next/image";
import Link from "next/link";
import Loader from "../components/common/Loader";
import { trpc } from "../utils/trpc";
import food from "../../public/images/food.jpg";

function PostListingPage() {
  const { data, isLoading } = trpc.useQuery(["recipe.getLikedRecipes"]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="mt-60 w-3/4 mx-auto">
      <h1 className="header text-center h1">Dein Kochbuch</h1>
      <h2 className="header text-center h2 normal-case mt-4">
        Hier werden alle Rezepte angezeigt, die du favorisiert hast.
      </h2>
      <div className="flex flex-col gap-4 my-40">
        {data?.map((recipe) => {
          return (
            <article
              key={recipe.id}
              className="border hover:bg-cb_black hover:text-cb_white dark:border-4 dark:bg-cb_primary dark:hover:bg-cb_white dark:hover:text-cb_black"
            >
              <Link href={`rezepte/${recipe.id}`}>
                <a className="flex items-center relative">
                  <div className="basis-1/3 inline-block overflow-hidden">
                    <Image
                      src={food}
                      width="600"
                      height="400"
                      layout="responsive"
                    />
                  </div>
                  <div className="pl-8 basis-2/3 flex flex-col items-start">
                    <h2 className="font-bold font-serif text-xl">
                      {recipe.title}
                    </h2>
                    <p className="text-md">{recipe.description}</p>
                    <span className="text-xs">
                      {recipe.createdAt.getDate()}.{recipe.createdAt.getMonth()}
                      .{recipe.createdAt.getFullYear()}
                    </span>
                    <button className="text-sm">weiter lesen ...</button>
                  </div>
                </a>
              </Link>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export default PostListingPage;
