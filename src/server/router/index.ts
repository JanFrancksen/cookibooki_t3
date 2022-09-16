// src/server/router/index.ts
import { createRouter } from "./context";
import superjson from "superjson";

import { protectedExampleRouter } from "./protected-example-router";
import { blogRouter } from "./blog.router";
import { recipeRouter } from "./recipe.router";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("auth.", protectedExampleRouter)
  .merge("blog.", blogRouter)
  .merge("recipe.", recipeRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
