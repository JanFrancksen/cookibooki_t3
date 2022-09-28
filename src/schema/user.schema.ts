import z from "zod";

export const createPostSchema = z.object({
  title: z.string().max(256, "Max title length is 256"),
  /*content: z.string().min(10),*/
});

export type CreatePostInput = z.TypeOf<typeof createPostSchema>;

export const createRecipeSchema = z.object({
  title: z.string().max(256, "Max title length is 256"),
  /*content: z.string().min(10),*/
});

export type CreateRecipeInput = z.TypeOf<typeof createRecipeSchema>;

export const getUserInfoSchema = z.object({
  userId: z.string(),
});
