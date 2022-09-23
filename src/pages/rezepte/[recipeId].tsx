import Error from "next/error";
import { useRouter } from "next/router";
import Loader from "../../components/common/Loader";
import { trpc } from "../../utils/trpc";

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
    <div className="my-80">
      <h1>{data?.title}</h1>
      <p>{data?.description}</p>
    </div>
  );
}

export default SinglePostPage;
