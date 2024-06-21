import { appRouter } from "@/trpc/index";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";

const handler = (req: Request) => {
  fetchRequestHandler({
    endpoint: "/api/trpc",
    req,
    AppRouter: appRouter,
    createContext: () => ({}),
  });
};

export  { handler as GET, handler as POST};
