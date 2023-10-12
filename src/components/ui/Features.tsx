import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  // faCheckCircle,
  faBullseye,
  faChartLine,
  faAward,
} from '@fortawesome/free-solid-svg-icons';

export default function Features() {
  return (
    <section id='brands'>
      <meta
        name='Futures MMA mixed martial arts classes'
        content='This section lists the features Futures Mixed Martial Arts offers.'
      />
      <div className='md:px-12 py-40'>
        <div className='grid md:grid-cols-3 sm:grid-cols-1 xl:mx-56 md:mx-2 gap-4 text-center'>
          <div className='mx-auto'>
            <i>
              <FontAwesomeIcon
                icon={faAward}
                className='text-7xl text-futuresRed mb-4'
              />
            </i>
            <h3 className='text-2xl font-black'>Quality Instruction</h3>
            <p className='px-20 w-80 mx-auto'>
              Elite coaching staff with decades of experience.
            </p>
          </div>
          <div className='mx-auto'>
            <i>
              <FontAwesomeIcon
                icon={faBullseye}
                className='text-7xl text-futuresRed mb-4'
              />
            </i>
            <h3 className='text-2xl font-black'>Elite Clientele</h3>
            <p className='px-20 w-80 mx-auto'>
              We have worked with some of the best martial artists in the world.
            </p>
          </div>
          <div className='mx-auto'>
            <i>
              <FontAwesomeIcon
                icon={faChartLine}
                className='text-7xl text-futuresRed mb-4'
              />
            </i>
            <h3 className='text-2xl font-black'>Unmatched Services</h3>
            <p className='px-20 w-80 mx-auto'>
              From Jiu-Jitsu to Muy Thai, we've got you covered!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
