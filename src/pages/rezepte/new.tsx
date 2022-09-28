import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { CreateRecipeInput } from "../../schema/recipe.schema";
import { trpc } from "../../utils/trpc";

function CreateRecipePage() {
  const { handleSubmit, register } = useForm<CreateRecipeInput>();

  const router = useRouter();

  const { mutate, error } = trpc.useMutation(["user.create-recipe"], {
    onSuccess: ({ id }) => {
      router.push(`/rezepte/${id}`);
    },
  });

  function onSubmit(values: CreateRecipeInput) {
    mutate(values);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="my-80 mx-auto w-3/4">
      {error && error.message}

      <h1 className="text-3xl header mb-4">Neues Rezept erstellen</h1>
      <input
        type="text"
        placeholder="your post title"
        {...register("title")}
        className="border py-2 px-4 rounded-full"
      />
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

export default CreateRecipePage;
