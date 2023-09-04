import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faStopwatch } from '@fortawesome/free-solid-svg-icons';

export default function Title() {
  return (
    <div className='py-16 relative text-white grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 title-image'>
      {/* Black canvas in front of image */}
      <div className='absolute inset-0 bg-black opacity-80'></div>
      <div className='order-2 lg:order-1 pt-16 m-auto text-3xl xl:text-5xl w-2/3 font-extrabold xl:col-span-2 text-center relative'>
        <h2>Welcome To Our Family </h2>
        <h3 className='text-2xl xl:text-4xl mb-4'>Your Journey Begins Here</h3>
        <p className='text-lg xl:text-xl'>
          Get World-Class MMA/Mixed Martial Arts Instruction In North Ft. Myers
        </p>
        <div className='grid grid-cols-1 xl:grid-cols-2 pt-12'>
          <div className='xl:text-2xl w-64 m-auto'>
            <Link href='/Classes/#schedule'>
              <button className='bg-white hover:bg-futuresRed hover:text-white text-black font-bold py-2 px-4 rounded-md'>
                <a>
                  <FontAwesomeIcon icon={faCalendarDays} className='fa-md' />{' '}
                  Schedule
                </a>
              </button>
            </Link>
          </div>
          <div className='xl:text-2xl w-64 pt-4 xl:pt-0 m-auto'>
            <Link href='/Coaches'>
              <button className='bg-clear border-solid border-2 hover:bg-white hover:text-futuresRed hover:border-futuresRed text-white font-bold py-2 px-4 rounded-md'>
                <a>
                  <FontAwesomeIcon icon={faStopwatch} className='fa-md' />{' '}
                  Coaches
                </a>
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className='order-1 lg:order-2 lg:mr-24'>
        <img
          className='m-auto mt-24 mb-8 border-solid border-4 border-neutral-50 rounded relative z-10'
          src='/futures-logo.png'
          width={400}
          alt='Futures Mixed Martial Arts Logo'
        />
      </div>
    </div>
  );
}
