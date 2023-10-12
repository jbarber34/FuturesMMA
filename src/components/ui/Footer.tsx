import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faStore,
  faEnvelope,
  faClock,
} from '@fortawesome/free-solid-svg-icons';
import { faCopyright } from '@fortawesome/free-regular-svg-icons';
import {
  faFacebook,
  faInstagram,
  faYelp,
} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <section id='contact'>
      <meta
        name='Contacting Futures MMA'
        content='This section offers contact information for Futures MMA martial arts academy, located in North Fort Myers Florida.'
      />
      <div>
        <div className='bg-futuresBlack grid grid-cols-3 place-items-center'>
          <div>
            <img
              src='/futures-logo.png'
              width={200}
              alt='Futures MMA - North Ft. Myers Logo'
            />
          </div>
          <div>
            <div className='mb-4 mt-12 lg:mx-auto lg:max-w-screen-sm'>
              <h1 className='text-center ml-2 mt-2 text-xl text-white'>
                {' '}
                Contact Futures MMA{' '}
              </h1>
              <table cellPadding={6} className='m-auto text-white'>
                <tbody>
                  <tr>
                    <td>
                      <FontAwesomeIcon
                        icon={faPhone}
                        className='fa-lg text-futuresRed'
                      />
                    </td>
                    <td className='text-sm'>
                      {' '}
                      <a href='tel:8083523318' className='hover:underline'>
                        (239) 997-2834
                      </a>{' '}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <FontAwesomeIcon
                        icon={faStore}
                        className='fa-lg text-futuresRed'
                      />
                    </td>
                    <td className='text-sm'>
                      <a
                        href='https://www.google.com/maps/place/931+Pondella+Rd,+North+Fort+Myers,+FL+33903/@26.6660992,-81.921136,17z/data=!3m1!4b1!4m6!3m5!1s0x88db43d137c4202f:0x94731eb9e915ba3e!8m2!3d26.6660993!4d-81.9162705!16s%2Fg%2F11flc5tlyy?entry=ttu'
                        className='hover:underline'
                      >
                        931 Pondella Rd <br /> North Fort Myers, FL 33903
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <FontAwesomeIcon
                        icon={faEnvelope}
                        className='fa-lg text-futuresRed'
                      />
                    </td>
                    <td className='text-sm'>
                      {' '}
                      <a
                        href='mailto:futuresmma2018@gmail.com?subject=Futures MMA - Information Request'
                        className='hover:underline'
                      >
                        FuturesMMA2018@gmail.com
                      </a>{' '}
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className='text-center p-2'>
                <a
                  className='p-3'
                  href='https://www.instagram.com/futures_mma/'
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className='fa-xl text-futuresRed'
                  />
                </a>
                <a className='p-3' href='https://www.facebook.com/futuresmma/'>
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className='fa-xl text-futuresRed'
                  />
                </a>
                {/* <a className='p-3' href=''>
                  <FontAwesomeIcon
                    icon={faYelp}
                    className='fa-xl text-futuresWhite'
                  />{' '}
                </a> */}
              </div>
            </div>
          </div>
          <div className='mb-6 mt-4 lg:mx-auto lg:max-w-screen-sm'>
            <h1 className='text-center ml-2 mt-2 text-xl text-white'>
              Hours of Operation
            </h1>
            <table cellPadding={6} className='m-auto text-white text-sm'>
              <tbody>
                <tr>
                  <td>
                    <FontAwesomeIcon
                      icon={faClock}
                      className='fa-lg text-futuresRed'
                    />
                  </td>
                  <td className='w-20'>Mon-Fri:</td>
                  <td>
                    <ul>
                      <li key='morning'>9:00am – 10:30am</li>
                      <li key='separator' className='text-center'>
                        &
                      </li>
                      <li key='evening'>5:30pm - 9:30pm</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>
                    <FontAwesomeIcon
                      icon={faClock}
                      className='fa-lg text-futuresRed'
                    />
                  </td>
                  <td className='w-20'>Sat:</td>
                  <td>9:00am - 11:30am</td>
                </tr>
                <tr>
                  <td>
                    <FontAwesomeIcon
                      icon={faClock}
                      className='fa-lg text-futuresRed'
                    />
                  </td>
                  <td className='w-20'>Sunday:</td>
                  <td>Closed</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <footer className='bg-futuresBlack text-white text-center text-xs pb-2'>
          <FontAwesomeIcon
            icon={faCopyright}
            className='fa-xs text-futuresWhite'
          />{' '}
          2023 Futures Mixed Martial Arts
        </footer>
      </div>
    </section>
  );
}
