import dayjs from 'dayjs';
import { FighterDetailsCompact, FighterOutcomesCompact } from '~/types';
import OutcomeMeter from './OutcomeMeter';

interface Props {
  fighterStats: FighterDetailsCompact;
  fighterOutcomes: FighterOutcomesCompact;
}

export default function FighterCard({ fighterStats, fighterOutcomes }: Props) {
  const today = dayjs();

  return (
    <>
      <div className='lg:w-3/4 mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2'>
          <div>
            <h1 className='font-bold text-white drop-shadow-[0_1.2px_1.2px_rgba(192,44,37,0.8)]'>
              {fighterStats.fighterName}
            </h1>
            <h2 className='mb-4 text-2xl font-bold text-futuresRed drop-shadow-[0_1.2px_1.2px_rgba(255,255,255,0.2)]'>
              "{fighterStats.nickname}"
            </h2>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 text-white m-auto'>
            <div className='text-12px'>
              <p>{fighterStats.birthCountry}</p>
              <p>{fighterStats.birthCity}</p>
            </div>
            <img
              src={fighterStats.countryFlagImage}
              alt='Birth country flag'
              className='m-auto'
            />
          </div>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          <div>
            <table className='text-white font-bold text-left'>
              <tbody>
                <tr>
                  <td className='px-4 text-gray-300'>AGE</td>
                  <td>
                    <b>{today.diff(fighterStats.birthday, 'year')}</b>
                    <em className='p-2 text-mmaGold'>/</em>
                    <span className='text-xs text-gray-300'>
                      {fighterStats.birthday.format('MMM DD, YYYY')}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className='px-4 text-gray-300'>HEIGHT</td>
                  <td>
                    <b>{formatAsFeetAndInches(fighterStats.height)}</b>
                    <em className='p-2 text-mmaGold'>/</em>
                    <span className='text-xs text-gray-300'>
                      {inchesToCentimeters(fighterStats.height)} cm
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className='px-4 text-gray-300'>WEIGHT</td>
                  <td>
                    <b>{fighterStats.weight} lbs</b>
                    <em className='p-2 text-mmaGold'>/</em>
                    <span className='text-xs text-gray-300'>
                      {(fighterStats.weight * 0.453592).toFixed(2)} kg
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
            <div className='w-1/2'>
              <hr className='my-4' />
              <table className='text-xs text-left font-bold'>
                <tbody>
                  <tr>
                    <td className='px-4 text-gray-300'>ASSOCIATION</td>
                  </tr>
                  <tr>
                    <td className='px-4 text-mmaGold'>FUTURES MMA</td>
                  </tr>
                  <tr>
                    <td className='pt-4 px-4 text-gray-300'>WEIGHT CLASS</td>
                  </tr>
                  <tr>
                    <td className='px-4 text-mmaGold'>
                      {fighterStats.weightClass}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 text-left text-white font-bold'>
            {/* WINS SECTION */}
            <div>
              <div className='grid grid-cols-2 pl-4 py-2 text-base w-40 bg-winnerGreen'>
                <div className='text-center'>WINS</div>
                <span className='px-4  m-auto bg-black'>
                  {fighterStats.fightRecord.wins}
                </span>
              </div>
              {/* WINS KO */}
              <OutcomeMeter
                fighterOutcomeTotal={
                  fighterStats.fightRecord.winsBreakdown.koTKO
                }
                fighterOutcomesPercentage={fighterOutcomes.wins.koTKOPerc}
                category='KO'
              />
              {/* WINS SUBMISSION */}
              <OutcomeMeter
                fighterOutcomeTotal={fighterStats.fightRecord.winsBreakdown.sub}
                fighterOutcomesPercentage={fighterOutcomes.wins.subPerc}
                category='SUBMISSIONS'
              />
              {/* WINS DECISIONS */}
              <OutcomeMeter
                fighterOutcomeTotal={
                  fighterStats.fightRecord.winsBreakdown.decision
                }
                fighterOutcomesPercentage={fighterOutcomes.wins.decisionPerc}
                category='DECISIONS'
              />
              {/* WINS OTHER */}
              {fighterStats.fightRecord.winsBreakdown.other > 0 && (
                <OutcomeMeter
                  fighterOutcomeTotal={
                    fighterStats.fightRecord.winsBreakdown.other
                  }
                  fighterOutcomesPercentage={fighterOutcomes.wins.otherPerc}
                  category='OTHERS'
                />
              )}
            </div>
            {/* LOSSES SECTION */}
            <div>
              <div className='grid grid-cols-2 pl-4 py-2 text-base w-40 bg-lossesRed'>
                <div className='text-center'>LOSSES</div>
                <span className='px-4  m-auto bg-black'>
                  {fighterStats.fightRecord.losses}
                </span>
              </div>
              {/* LOSSES KO */}
              <OutcomeMeter
                fighterOutcomeTotal={
                  fighterStats.fightRecord.lossesBreakdown.koTKO
                }
                fighterOutcomesPercentage={fighterOutcomes.losses.koTKOPerc}
                category='KO'
              />
              {/* LOSSES SUBMISSION */}
              <OutcomeMeter
                fighterOutcomeTotal={
                  fighterStats.fightRecord.lossesBreakdown.sub
                }
                fighterOutcomesPercentage={fighterOutcomes.losses.subPerc}
                category='SUBMISSIONS'
              />
              {/* LOSSES DECISIONS */}
              <OutcomeMeter
                fighterOutcomeTotal={
                  fighterStats.fightRecord.lossesBreakdown.decision
                }
                fighterOutcomesPercentage={fighterOutcomes.losses.decisionPerc}
                category='DECISIONS'
              />
              {/* LOSSES OTHER */}
              {fighterStats.fightRecord.lossesBreakdown.other > 0 && (
                <OutcomeMeter
                  fighterOutcomeTotal={
                    fighterStats.fightRecord.lossesBreakdown.other
                  }
                  fighterOutcomesPercentage={fighterOutcomes.losses.otherPerc}
                  category='OTHERS'
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function formatAsFeetAndInches(inches: number) {
  const feet = Math.floor(inches / 12);
  const remainingInches = inches % 12;
  return `${feet}'${remainingInches}"`;
}

function inchesToCentimeters(inches: number) {
  const cmPerInch = 2.54;
  return inches * cmPerInch;
}
