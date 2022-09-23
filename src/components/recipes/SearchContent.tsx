import Loader from "../common/Loader";
import RecipeItem from "./RecipeItem";
import { trpc } from "../../utils/trpc";

const SearchContent = ({ searchTerm, tag }: any) => {
  const { data, isLoading } = trpc.useQuery([
    "recipe.getFilteredRecipes",
    { searchTerm, tag },
  ]);

  if (isLoading) {
    return <div className=""></div>;
  }

  return (
    <div
      className="grid sd:grid-cols-3  grid-cols-3 md:w-3/4 m-auto gap-8 -mt-16 mb-16 z-20"
      id="recipeContainer"
    >
      {data?.map((recipe) => {
        return (
          <RecipeItem
            key={recipe.id}
            image={recipe.img}
            title={recipe.title}
            description={recipe.description}
            link={recipe.id}
            tag={recipe.tag}
          />
        );
      })}
    </div>
  );
};

export default SearchContent;
