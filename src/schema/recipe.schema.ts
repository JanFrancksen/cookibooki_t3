import z from "zod";

export const getNewRecipesSchema = z.object({
  id: z.string(),
  img: z.string(),
  title: z.string(),
  description: z.string(),
  content: z.string(),
});

export const getSingleRecipeSchema = z.object({
  recipeId: z.string(),
});
