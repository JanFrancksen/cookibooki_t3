import TagPills from "./TagPills";
import { trpc } from "../../utils/trpc";

const RenderPills = () => {
  const { data } = trpc.useQuery(["recipe.getAllCategories"]);

  return (
    <div className="flex gap-2 w-80 flex-wrap justify-center">
      {data?.map((tags) => {
        return <TagPills tag={tags.name} />;
      })}
    </div>
  );
};

export default RenderPills;
