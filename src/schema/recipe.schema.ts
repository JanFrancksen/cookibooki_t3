import z from "zod";

export const getNewRecipesSchema = z.object({
  id: z.string(),
  img: z.string(),
  title: z.string(),
  description: z.string(),
  content: z.string(),
  categories: z.string(),
});

export const getSingleRecipeSchema = z.object({
  recipeId: z.string(),
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
