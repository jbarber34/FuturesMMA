import dayjs from 'dayjs';
import { FighterDetails, FighterOutcomes } from '~/types';

export const FighterStatsData: FighterDetails = {
  cabello: {
    fighterName: 'Eduardo Diez',
    nickname: 'Cabello',
    birthCountry: 'Brazil',
    birthCity: 'Sao Paulo',
    countryFlagImage: '/Flags/brazil.png',
    birthday: dayjs('1989/10/07', { format: 'YYYY/MM/DD' }),
    height: 68,
    weight: 125,
    weightClass: 'FLYWEIGHT',
    fightRecord: {
      wins: 8,
      losses: 1,
      winsBreakdown: {
        koTKO: 1,
        sub: 2,
        decision: 5,
        other: 0,
      },
      lossesBreakdown: {
        koTKO: 0,
        sub: 0,
        decision: 1,
        other: 0,
      },
    },
  },
  killer: {
    fighterName: 'Pablo Caballero',
    nickname: 'The Killer',
    birthCountry: 'Argentina',
    birthCity: '',
    countryFlagImage: '/Flags/argentina.png',
    birthday: dayjs('1900/01/01', { format: 'YYYY/MM/DD' }),
    height: 0,
    weight: 125,
    weightClass: 'FLYWEIGHT',
    fightRecord: {
      wins: 8,
      losses: 7,
      winsBreakdown: {
        koTKO: 3,
        sub: 4,
        decision: 1,
        other: 0,
      },
      lossesBreakdown: {
        koTKO: 2,
        sub: 2,
        decision: 2,
        other: 1,
      },
    },
  },
  diamante: {
    fighterName: 'Carlos Guerra',
    nickname: 'Diamante',
    birthCountry: 'Mexico',
    birthCity: 'Mexico City',
    countryFlagImage: '/Flags/mexico.png',
    birthday: dayjs('1990/01/20', { format: 'YYYY/MM/DD' }),
    height: 69,
    weight: 145,
    weightClass: 'FEATHERWEIGHT',
    fightRecord: {
      wins: 2,
      losses: 8,
      winsBreakdown: {
        koTKO: 2,
        sub: 0,
        decision: 0,
        other: 0,
      },
      lossesBreakdown: {
        koTKO: 3,
        sub: 2,
        decision: 3,
        other: 0,
      },
    },
  },
};

// Helper function to calculate percentages
const calculatePercentages = (record: Record<string, number>) => {
  const total = Object.values(record).reduce((sum, value) => sum + value, 0);
  return {
    koTKOPerc: (record.koTKO / total) * 100,
    subPerc: (record.sub / total) * 100,
    decisionPerc: (record.decision / total) * 100,
    otherPerc: (record.other / total) * 100,
  };
};

export const FighterOutcomesData: FighterOutcomes = Object.fromEntries(
  Object.entries(FighterStatsData).map(([fighterId, fighterData]) => [
    fighterId,
    {
      wins: calculatePercentages(fighterData.fightRecord.winsBreakdown),
      losses: calculatePercentages(fighterData.fightRecord.lossesBreakdown),
    },
  ])
);
