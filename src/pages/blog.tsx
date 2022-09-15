import Image from "next/image";
import Link from "next/link";
import { trpc } from "../utils/trpc";

function PostListingPage() {
  const { data, isLoading } = trpc.useQuery(["blog.getAllPosts"]);

  if (isLoading) {
    return <p className="my-80">Loading ...</p>;
  }

  return (
    <div className="my-80 w-3/4 mx-auto grid grid-cols-3 gap-8">
      {data?.map((post) => {
        return (
          <article key={post.id} className="border">
            <Image src="/public/images/food.jpg" width="400" height="300" />
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <Link href={`posts/${post.id}`}>Link</Link>
          </article>
        );
      })}
    </div>
  );
}

export default PostListingPage;
