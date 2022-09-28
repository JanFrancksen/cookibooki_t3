import { createRouter } from "./context";
import {
  getSingleRecipeSchema,
  getFilteredRecipesSchema,
  likeRecipeSchema,
} from "../../schema/recipe.schema";

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
        include: {
          tag: true,
          content: {
            orderBy: {
              id: "asc",
            },
          },
        },
      });
    },
  })
  .query("getFilteredRecipes", {
    input: getFilteredRecipesSchema,
    resolve({ input, ctx }) {
      return ctx.prisma.recipe.findMany({
        where: {
          AND: [
            {
              title: {
                contains:
                  input.searchTerm === "" ? undefined : input.searchTerm,
              },
            },
            {
              tag: {
                some: {
                  name: {
                    in: input.tag?.length === 0 ? undefined : input.tag,
                  },
                },
              },
            },
          ],
        },
        include: {
          tag: true,
        },
      });
    },
  })
  .query("getLikedRecipes", {
    resolve({ ctx }) {
      return ctx.prisma.recipe.findMany({
        where: {
          likedById: ctx.session?.user?.id,
        },
      });
    },
  })
  .query("increaseLikedRecipe", {
    input: likeRecipeSchema,
    resolve({ input, ctx }) {
      return ctx.prisma.recipe.update({
        where: {
          id: input.recipeId,
        },
        data: {
          likedById: ctx.session?.user?.id,
        },
      });
    },
  })
  .query("getAllCategories", {
    resolve({ ctx }) {
      return ctx.prisma.tag.findMany();
    },
  });
