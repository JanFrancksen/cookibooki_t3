import Error from "next/error";
import Image from "next/image";
import { useRouter } from "next/router";
import Loader from "../../components/common/Loader";
import { trpc } from "../../utils/trpc";
import { FaClock, FaTwitter, FaCalendarAlt } from "react-icons/fa";

function SinglePostPage() {
  const router = useRouter();
  const recipeId = router.query.recipeId as string;
  const { data, isLoading } = trpc.useQuery([
    "recipe.getSingleRecipe",
    { recipeId },
  ]);

  if (isLoading) {
    return (
      <p className="my-80">
        <Loader />
      </p>
    );
  }

  if (!data) {
    return <Error statusCode={404} />;
  }
  return (
    <div>
      <div className="relative h-96">
        <div className="z-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="header text-center h1">{data?.title}</h1>
          <div className="flex gap-2 pt-2">
            {data.tag?.map((tags: any) => {
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
        <Image src="/images/food.jpg" layout="fill" objectFit="cover" />
      </div>
      <div className="mx-auto my-20 w-3/4">
        <div className="flex flex-1 gap-4 relative">
          <div className="basis-2/3 h-screen border rounded-md p-4 flex flex-col gap-4">
            <div className="text-sm flex gap-x-4">
              <span className="flex gap-x-2">Likes </span>
              <span className="flex gap-x-2">
                <FaClock /> {data?.timeNeeded}
              </span>
              <span className="flex gap-x-2">
                <FaTwitter /> {data?.difficulty}
              </span>
              <span className="flex gap-x-2">
                <FaCalendarAlt /> {data.createdAt.getDate()}.
                {data?.createdAt.getMonth()}.{data?.createdAt.getFullYear()}
              </span>
            </div>
            <h1 className="header text-3xl text-cb_primary">{data?.title}</h1>
            <p className="">{data?.description}</p>
            <div className="counterBody">
              <h2 className="text-2xl header">Anleitung</h2>
              {data.content?.map((content: any) => {
                return (
                  <p key={content.id}>
                    {content?.image !== null && (
                      <Image
                        src={content?.image}
                        layout="responsive"
                        width="1000"
                        height="600"
                        objectFit="cover"
                      />
                    )}
                    <h3 className="text-xl header counter">{content.title}</h3>
                    <p>{content.text}</p>
                  </p>
                );
              })}
            </div>
          </div>
          <div className="basis-1/3 h-min sticky top-32 border rounded-md p-4">
            <h3 className="header text-2xl text-cb_primary">Zutaten:</h3>
            <ul>
              <li className="list-disc list-inside">350g Paprika</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePostPage;
