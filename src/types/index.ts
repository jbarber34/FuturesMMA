import { inferProcedureOutput } from '@trpc/server';
import { AppRouter } from '~/server/routers';

// Class Details
export type ClassDetail = {
  name: string;
  description: string;
  imageName: string;
  lookAt: string;
  detailInformation: {
    title?: string;
    feature?: string;
    subFeature?: string;
  }[];
};

export type ClassDetails = {
  [key: string]: ClassDetail;
};

export type TQuery = keyof AppRouter['_def']['queries'];
export type InferQueryOutput<TRouteKey extends TQuery> = inferProcedureOutput<
  AppRouter['_def']['queries'][TRouteKey]
>;
