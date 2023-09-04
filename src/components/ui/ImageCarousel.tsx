import { Carousel } from '@mantine/carousel';
import { AspectRatio, Image } from '@mantine/core';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

const images = [
  {
    url: '/CarouselImages/futures-team-pic_orig.png',
    title: 'Futures MMA team huddle',
  },
  {
    url: '/CarouselImages/futures-cageside.png',
    title: 'Futures MMA coaches cageside at MMA event',
  },
  {
    url: '/CarouselImages/futures-kids-class.png',
    title: 'Futures MMA Kids class',
  },
];

export default function ImageCarousel() {
  const slides = images.map((i) => (
    <Carousel.Slide key={i.url} className='my-auto text-white'>
      <AspectRatio ratio={720 / 1080} sx={{ maxWidth: 400 }} mx='auto'>
        <Image src={i.url} alt={i.title} />
      </AspectRatio>
      {/* <p className='text-center'>{i.title}</p> */}
    </Carousel.Slide>
  ));

  const autoplay = useRef(Autoplay({ delay: 4000 }));

  return (
    <div className='bg-futuresBlack xl:px-20 px-8 py-20 2xl:mx-auto relative'>
      <meta
        name='Futures MMA In Action'
        content='This section includes features and examples of the lessons Futures MMA provides, along with the different fighters Futures MMA has interacted with.'
      />
      <Carousel
        // sx={{ maxWidth: 320 }}
        // mx='auto'
        slideGap={'md'}
        align='start'
        slideSize={'50%'}
        slidesToScroll={2}
        nextControlIcon={
          <FontAwesomeIcon icon={faArrowRight} className='fa-lg text-white' />
        }
        previousControlIcon={
          <FontAwesomeIcon icon={faArrowLeft} className='fa-lg text-white' />
        }
        loop
        withIndicators
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
      >
        {slides}
      </Carousel>
    </div>
  );
}
