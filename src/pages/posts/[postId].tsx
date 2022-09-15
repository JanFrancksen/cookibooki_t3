import Error from "next/error";
import { useRouter } from "next/router";
import { trpc } from "../../utils/trpc";

function SinglePostPage() {
  const router = useRouter();
  const postId = router.query.postId as string;
  const { data, isLoading } = trpc.useQuery(["blog.getSinglePost", { postId }]);

  if (isLoading) {
    return <p className="my-80">Loading posts...</p>;
  }

  if (!data) {
    return <Error statusCode={404} />;
  }
  return (
    <div className="my-80">
      <h1>{data?.title}</h1>
      <p>{data?.content}</p>
    </div>
  );
}

export default SinglePostPage;
