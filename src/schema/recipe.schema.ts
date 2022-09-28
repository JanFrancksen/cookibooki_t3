import z from "zod";

export const createRecipeSchema = z.object({
  title: z.string().max(256, "Max title length is 256"),
  content: z.string().min(10),
});

export type CreateRecipeInput = z.TypeOf<typeof createRecipeSchema>;

export const getNewRecipesSchema = z.object({
  id: z.string(),
  img: z.string(),
  title: z.string(),
  description: z.string(),
  content: z.string(),
  categories: z.string(),
});

export const getSingleRecipeSchema = z.object({
  recipeId: z.string().cuid(),
});

export const getFilteredRecipesSchema = z.object({
  searchTerm: z.string().max(30).optional(),
  tag: z.string().array(),
});

export const getLikedRecipesSchema = z.object({
  userId: z.string().cuid(),
});

export const likeRecipeSchema = z.object({
  recipeId: z.string(),
  userId: z.string().cuid(),
});
