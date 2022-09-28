import { createRouter } from "./context";
import * as trpc from "@trpc/server";
import { createPostSchema, createRecipeSchema } from "../../schema/user.schema";

export const userRouter = createRouter()
  .mutation("create-post", {
    input: createPostSchema,
    async resolve({ ctx, input }) {
      if (!ctx.session?.user) {
        new trpc.TRPCError({
          code: "FORBIDDEN",
          message: "Can not create a post while logged out",
        });
      }
      const post = await ctx.prisma.post.create({
        data: {
          ...input,
          author: {
            connect: {
              id: ctx.session?.user?.id,
            },
          },
        },
      });
      return post;
    },
  })
  .mutation("create-recipe", {
    input: createRecipeSchema,
    async resolve({ ctx, input }) {
      if (!ctx.session?.user) {
        new trpc.TRPCError({
          code: "FORBIDDEN",
          message: "Can not create a recipe while logged out",
        });
      }
      const recipe = await ctx.prisma.recipe.create({
        data: {
          ...input,
          author: {
            connect: {
              id: ctx.session?.user?.id,
            },
          },
        },
      });
      return recipe;
    },
  })
  .query("getUserInfo", {
    resolve({ ctx }) {
      return ctx.prisma.user.findUnique({
        where: {
          id: ctx.session?.user?.id,
        },
      });
    },
  });
