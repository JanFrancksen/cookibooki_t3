import { createRouter } from "./context";
import * as trpc from "@trpc/server";
import {
  createPostSchema,
  getSinglePostSchema,
} from "../../schema/post.schema";

export const blogRouter = createRouter()
  .mutation("create-post", {
    input: createPostSchema,
    async resolve({ ctx, input }) {
      if (!ctx.session) {
        new trpc.TRPCError({
          code: "FORBIDDEN",
          message: "Can not create a post while logged out",
        });
      }
      const post = await ctx.prisma.post.create({
        data: {
          ...input,
          user: {
            connect: {
              id: ctx.session?.user?.id,
            },
          },
        },
      });
      return post;
    },
  })
  .query("getAllPosts", {
    resolve({ ctx }) {
      return ctx.prisma.post.findMany();
    },
  })
  .query("getSinglePost", {
    input: getSinglePostSchema,
    resolve({ input, ctx }) {
      return ctx.prisma.post.findUnique({
        where: {
          id: input.postId,
        },
      });
    },
  });
