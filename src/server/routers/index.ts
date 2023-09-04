import { createRouter } from '~/server/utils/createRouter';
import superjson from 'superjson';
import { TRPCError } from '@trpc/server';

export const appRouter = createRouter()
  .middleware(async ({ ctx, next }) => {
    if (!ctx.session) {
      throw new TRPCError({
        code: 'UNAUTHORIZED',
        message: 'You are unauthorized',
      });
    }
    return next();
  })
  .transformer(superjson);

// export type definition of API
export type AppRouter = typeof appRouter;
