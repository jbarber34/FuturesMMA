import {
  FighterOutcomesData,
  FighterStatsData,
} from '~/components/FighterInformation';
import FighterCard from '~/components/ui/FighterCard';
import { FighterDetails, FighterOutcomes } from '~/types';

export default function Fighters() {
  const fighterStats: FighterDetails = FighterStatsData;

  const fighterOutcomes: FighterOutcomes = FighterOutcomesData;

  return (
    <section id='fighters' className='my-20 text-center'>
      <meta
        name='Futures Fighters'
        content='This section offers information about the athletes at Futures Mixed Martial Arts.'
      />
      <h2
        id='top'
        className='font-black text-5xl container-fluid text-center text-3xl mt-8
              before:inline-block before:xl:w-44 before:lg:w-28 before:md:w-12 before:sm:w-24 before:w-24 before:h-1 before:bg-futuresRed before:mb-2 before:mr-8
              after:inline-block after:xl:w-44 after:lg:w-28 after:md:w-12 after:sm:w-24 after:w-24 after:h-1 after:bg-futuresRed after:mb-2 after:ml-8'
      >
        Fighters
      </h2>
      <meta
        name='Martial Arts Classes Available'
        content='Striking, BJJ & Wrestling classes available'
      />

      <p className='text-gray-500'>Featured fighters trained at Futures MMA</p>
      {/* Eduardo Diez */}
      <div className='grid grid-cols-2 2xl:grid-cols-2 sm:mx-8 text-center pt-16 px-4 fighter-stat-data'>
        <FighterCard
          fighterStats={fighterStats.cabello}
          fighterOutcomes={fighterOutcomes.cabello}
        />
        <div className='grid lg:grid-cols-2 mx-auto'>
          <img
            src='/Fighters/cabello1.png'
            alt='Eduardo Diez hands raised after a victory'
            width={300}
            className='my-auto'
          />
          <img
            src='/Fighters/cabello2.png'
            alt='Eduardo Diez fight photo'
            width={300}
            className='pl-4'
          />
          F
        </div>
      </div>
      {/* Pablo Caballero */}
      <div className='grid grid-cols-2 2xl:grid-cols-2 sm:mx-8 text-center pt-16 px-4 fighter-stat-data'>
        <FighterCard
          fighterStats={fighterStats.killer}
          fighterOutcomes={fighterOutcomes.killer}
        />
        <div className='grid lg:grid-cols-2 mx-auto'>
          <img
            src='/Fighters/killer1.png'
            alt='Pablo Caballero with team after a fight'
            width={300}
            className='my-auto'
          />
          <img
            src='/Fighters/killer2.png'
            alt='Pablo Caballero about to get his hand raised'
            width={300}
            className='pl-4'
          />
        </div>
      </div>
      {/* Carlos Guerra */}
      <div className='grid grid-cols-2 2xl:grid-cols-2 sm:mx-8 text-center pt-16 px-4 fighter-stat-data'>
        <FighterCard
          fighterStats={fighterStats.diamante}
          fighterOutcomes={fighterOutcomes.diamante}
        />
        <div className='mx-auto'>
          <img
            src='/Fighters/diamante1.png'
            alt='Carlos Guerra with coaches after a fight'
            width={300}
          />
        </div>
      </div>
    </section>
  );
}
