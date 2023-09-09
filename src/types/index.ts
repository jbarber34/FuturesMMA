import { inferProcedureOutput } from '@trpc/server';
import dayjs from 'dayjs';
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

// Class Schedule
export type ClassSchedule = {
  [day: string]: { class: string; time: string }[];
};

// Fighter Details
export type FighterDetails = {
  [fighterName: string]: {
    fighterName: string;
    nickname: string;
    birthCountry: string;
    birthCity: string;
    countryFlagImage: string;
    birthday: dayjs.Dayjs;
    height: number;
    weight: number;
    weightClass: string;
    fightRecord: {
      wins: number;
      losses: number;
      winsBreakdown: {
        koTKO: number;
        sub: number;
        decision: number;
        other: number;
      };
      lossesBreakdown: {
        koTKO: number;
        sub: number;
        decision: number;
        other: number;
      };
    };
  };
};

export type FighterDetailsCompact = {
  fighterName: string;
  nickname: string;
  birthCountry: string;
  birthCity: string;
  countryFlagImage: string;
  birthday: dayjs.Dayjs;
  height: number;
  weight: number;
  weightClass: string;
  fightRecord: {
    wins: number;
    losses: number;
    winsBreakdown: {
      koTKO: number;
      sub: number;
      decision: number;
      other: number;
    };
    lossesBreakdown: {
      koTKO: number;
      sub: number;
      decision: number;
      other: number;
    };
  };
};

export type FighterOutcomes = {
  [fighterId: string]: {
    wins: {
      koTKOPerc: number;
      subPerc: number;
      decisionPerc: number;
      otherPerc: number;
    };
    losses: {
      koTKOPerc: number;
      subPerc: number;
      decisionPerc: number;
      otherPerc: number;
    };
  };
};

export type FighterOutcomesCompact = {
  wins: {
    koTKOPerc: number;
    subPerc: number;
    decisionPerc: number;
    otherPerc: number;
  };
  losses: {
    koTKOPerc: number;
    subPerc: number;
    decisionPerc: number;
    otherPerc: number;
  };
};

export type TQuery = keyof AppRouter['_def']['queries'];
export type InferQueryOutput<TRouteKey extends TQuery> = inferProcedureOutput<
  AppRouter['_def']['queries'][TRouteKey]
>;
