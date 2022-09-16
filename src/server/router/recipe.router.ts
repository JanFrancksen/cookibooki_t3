import { createRouter } from "./context";
import { getSingleRecipeSchema } from "../../schema/recipe.schema";

export const recipeRouter = createRouter()
  .query("getNewRecipes", {
    resolve({ ctx }) {
      return ctx.prisma.recipe.findMany({
        take: 8,
        orderBy: {
          createdAt: "desc",
        },
      });
    },
  })
  .query("getAllRecipes", {
    resolve({ ctx }) {
      return ctx.prisma.recipe.findMany();
    },
  })
  .query("getSingleRecipe", {
    input: getSingleRecipeSchema,
    resolve({ input, ctx }) {
      return ctx.prisma.recipe.findUnique({
        where: {
          id: input.recipeId,
        },
      });
    },
  });
