import React from 'react';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStar } from '@fortawesome/free-regular-svg-icons';
import {
  faArrowLeft,
  faArrowRight,
  faStar,
} from '@fortawesome/free-solid-svg-icons';
/* Install pure-react-carousel using -> npm i pure-react-carousel */
export default function Testimonials() {
  return (
    <div className='grid sm:grid-flow-col mt-12'>
      <meta
        name='Futures MMA Member Testimonials'
        content='This section offers feedback from Futures Mixed Martial Arts members.'
      />
      <div>
        <div className='flex items-center justify-between w-full z-0'>
          <div className='w-1/3 bg-white h-full' />
          <div className='w-4/6 ml-16 bg-gray-100 h-full' />
        </div>
        <div className='bg-futuresRed xl:px-20 px-8 py-20 2xl:mx-auto relative z-40'>
          {/* @ts-ignore */}
          <CarouselProvider
            naturalSlideWidth={100}
            isIntrinsicHeight={true}
            totalSlides={3}
            isPlaying
            interval={4000}
          >
            <h1 className='text-5xl text-center font-bold xl:block hidden leading-tight text-white'>
              What our members are saying
            </h1>
            <h1 className='text-5xl text-center font-bold xl:hidden block leading-tight lg:leading-10 text-white'>
              What our members are saying
            </h1>
            <div
              className='flex justify-between max-w-min m-auto items-center mt-4 before:inline-block before:md:w-52 before:sm:w-40 before:w-24 before:h-1 before:bg-futuresWhite before:mr-8
            after:inline-block after:md:w-52 after:sm:w-40 after:w-24 after:h-1 after:bg-futuresWhite after:ml-8
'
            >
              <i>
                <FontAwesomeIcon icon={faStar} className='text-xs text-white' />
              </i>
              <i>
                <FontAwesomeIcon icon={faStar} className='text-xs text-white' />
              </i>
              <i>
                <FontAwesomeIcon icon={faStar} className='text-xs text-white' />
              </i>
              <i>
                <FontAwesomeIcon icon={faStar} className='text-xs text-white' />
              </i>
              <i>
                <FontAwesomeIcon icon={faStar} className='text-xs text-white' />
              </i>
            </div>
            <Slider>
              {/* @ts-ignore */}
              <Slide index={0} tabIndex='null'>
                <div className='flex'>
                  <div className='mt-14 md:flex'>
                    <div className='w-full xl:ml-32 md:ml-20 md:mt-0 mt-4 flex flex-col justify-between'>
                      <div>
                        <h1 className='text-2xl font-semibold xl:leading-loose text-white'>
                          The atmosphere at FUTURE MMA is remarkable
                        </h1>
                        <p className='text-base font-medium leading-6 mt-4 text-gray-300'>
                          Jeremiah is an exceptional and compassionate coach
                          whose dedication to the sport is truly inspiring. He
                          goes above and beyond to bring out the best in every
                          athlete he trains. What sets him apart is his genuine
                          interest in understanding each individual students
                          goals and aspirations. Whether it's during group
                          classes or personal training sessions, Jeremiah takes
                          the time to tailor the training specifically to the
                          needs of each person, ensuring that they are
                          constantly in good form, challenged, and motivated.
                          The atmosphere at FUTURE MMA is remarkable. Not only
                          are the staff and classmates incredibly friendly and
                          approachable, but the entire gym sends forth a
                          professional vibe that is perfect for martial arts
                          training. It's a comfortable and clean environment,
                          creating a positive energy throughout.
                        </p>
                      </div>
                      <div className='mt-8'>
                        <p className='text-base font-medium leading-4 text-white'>
                          Carolina M. Serwy Martins
                        </p>
                        <p className='text-base leading-4 mt-2 mb-4 text-gray-300'>
                          Fort Myers, FL
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Slide>
              <Slide index={1}>
                <div
                  className='flex relative'
                  style={{ transform: 'translateX(0%)' }}
                >
                  <div className='mt-14 md:flex'>
                    <div className='w-full xl:ml-32 md:ml-20 md:mt-0 mt-4 flex flex-col justify-between'>
                      <div>
                        <h1 className='text-2xl font-semibold xl:leading-loose text-white'>
                          Their dedication is infectious
                        </h1>
                        <p className='text-base font-medium leading-6 mt-4 text-gray-300'>
                          I find FUTURES MMA to be an excellent choice for
                          defensive tactics and MMA training. However, what
                          truly keeps me coming back is the commitment and
                          passion that Coach Jeremiah and Coach Joey bring to
                          their craft day in and day out. Their dedication is
                          infectious and serves as a constant source of
                          motivation for me to push myself further.
                        </p>
                      </div>
                      <div className='mt-8'>
                        <p className='text-base font-medium leading-4 text-white'>
                          Lola Nader
                        </p>
                        <p className='text-base leading-4 mt-2 mb-4 text-gray-300'>
                          North Ft. Myers, FL
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Slide>
              <Slide index={2}>
                <div
                  className='flex relative'
                  style={{ transform: 'translateX(0%)' }}
                >
                  <div className='mt-14 md:flex'>
                    <div className='w-full xl:ml-32 md:ml-20 md:mt-0 mt-4 flex flex-col justify-between'>
                      <div>
                        <h1 className='text-2xl font-semibold xl:leading-loose text-white'>
                          Such a great gym!
                        </h1>
                        <p className='text-base font-medium leading-6 mt-4 text-gray-300'>
                          My 7 year old has been doing wrestling and Brazilian
                          Jiu Jitsu classes here and he's loving it. In just a
                          few weeks he has improved a ton and gotten a lot
                          stronger and more confident. The coaches here are
                          amazing. Truly been a blessing going here. Awesome
                          environment.
                        </p>
                      </div>
                      <div className='mt-8'>
                        <p className='text-base font-medium leading-4 text-white'>
                          Jeremy Cullen
                        </p>
                        <p className='text-base leading-4 mt-2 mb-4 text-gray-300'>
                          North Ft. Myers, FL
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Slide>
            </Slider>
            <div className='flex items-center mt-8'>
              <ButtonBack
                className='cursor-pointer '
                role='button'
                aria-label='previous slide'
              >
                <i>
                  <FontAwesomeIcon
                    icon={faArrowLeft}
                    className='text-xs text-white'
                  />
                </i>
              </ButtonBack>

              <ButtonNext
                role='button'
                aria-label='next slide'
                className='cursor-pointer ml-2'
              >
                <i>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className='text-2xl text-white'
                  />
                </i>
              </ButtonNext>
            </div>
          </CarouselProvider>
        </div>
      </div>
    </div>
  );
}
