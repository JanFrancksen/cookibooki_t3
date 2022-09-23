import { useState } from "react";
import { trpc } from "../utils/trpc";
import SearchContent from "../components/recipes/SearchContent";

const Rezepte = () => {
  const [searchTerm, setSearchTerm] = useState<string>();
  const [tag, setTag] = useState<string[]>([]);

  const { data } = trpc.useQuery(["recipe.getAllCategories"]);

  console.log("x " + tag);

  function resetFilters() {
    setTag([]);
  }
  return (
    <div className="flex flex-col">
      <div className="relative w-full h-72 flex flex-col gap-8 items-center justify-center py-72 bg-rezepteHero bg-cover bg-no-repeat bg-fixed before:inset-0 before:absolute before:bg-black before:bg-gradient-to-t before:opacity-60">
        <h1 className="h1 text-white text-center font-bold font-serif z-10">
          Finde dein neues Lieblingsrezept!
        </h1>
        <div className="z-10 flex flex-col items-center gap-y-4">
          <input
            type="text"
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
            placeholder="Search.."
            className="py-2 px-4 rounded-full mr-4"
          />
          <div className="flex gap-2 w-80 flex-wrap justify-center">
            {data?.map((tags) => {
              return (
                <button
                  key={tags.id}
                  onClick={() => setTag([...tag, tags.name])}
                  className="bg-cb_white text-cb_primary rounded-full px-3 py-1 text-xs"
                >
                  {tags.name}
                </button>
              );
            })}
          </div>
          {tag.length !== 0 ? (
            <button
              onClick={resetFilters}
              className="underline text-cb_white text-xs"
            >
              Filter zurücksetzen
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
      <SearchContent searchTerm={searchTerm} tag={tag} />
    </div>
  );
};

export default Rezepte;
