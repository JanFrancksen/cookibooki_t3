import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { CreatePostInput } from "../../schema/post.schema";
import { trpc } from "../../utils/trpc";

function CreatePostPage() {
  const { handleSubmit, register } = useForm<CreatePostInput>();

  const router = useRouter();

  const { mutate, error } = trpc.useMutation(["blog.create-post"], {
    onSuccess: ({ id }) => {
      router.push(`/posts/${id}`);
    },
  });

  function onSubmit(values: CreatePostInput) {
    mutate(values);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="my-80 mx-auto w-3/4">
      {error && error.message}

      <h1>create posts</h1>
      <input type="text" placeholder="your post title" {...register("title")} />
      <br />
      <input
        type="text"
        placeholder="your post title"
        {...register("content")}
      />
      <br />
      <button>Create Post</button>
    </form>
  );
}

export default CreatePostPage;
