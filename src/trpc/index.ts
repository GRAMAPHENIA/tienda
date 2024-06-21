import { router, publicProcedure } from "./trpc";

export const appRouter = router({
  anyApiRouter: publicProcedure.query(() => {
    return "Gramaphenia";
  }),
});

export type AppRouter = typeof appRouter
