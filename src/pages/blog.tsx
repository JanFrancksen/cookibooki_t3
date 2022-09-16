import Image from "next/image";
import Link from "next/link";
import Loader from "../components/common/Loader";
import { trpc } from "../utils/trpc";
import food from "../../public/images/food.jpg";

function PostListingPage() {
  const { data, isLoading } = trpc.useQuery(["blog.getAllPosts"]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="mt-60 w-3/4 mx-auto">
      <h1 className="header text-center h1">Unsere Blogbeiträge</h1>
      <h2 className="header text-center h2 normal-case mt-4">
        Informiere dich über veganes Essen, neueste Foodtrends und Traditionen
        aus verschiedenen Cuisines
      </h2>
      <div className="flex flex-col gap-4 my-40">
        {data?.map((post) => {
          return (
            <article
              key={post.id}
              className="border hover:bg-cb_black hover:text-cb_white dark:border-4 dark:bg-cb_primary dark:hover:bg-cb_white dark:hover:text-cb_black"
            >
              <Link href={`posts/${post.id}`}>
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
                      {post.title}
                    </h2>
                    <p className="text-md">{post.content}</p>
                    <span className="text-xs">
                      {post.createdAt.getDate()}.{post.createdAt.getMonth()}.
                      {post.createdAt.getFullYear()}
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
