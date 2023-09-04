export default function About() {
  return (
    <div>
      <div className='lg:px-36 pt-16 bg-white'>
        <h1
          className='container-fluid text-center text-3xl mt-8
          before:inline-block before:lg:w-48 before:md:w-40 before:sm:w-24 before:w-24 before:h-1 before:bg-futuresRed before:mb-2 before:mr-8
          after:inline-block after:lg:w-48 after:md:w-40 after:sm:w-24 after:w-24 after:h-1 after:bg-futuresRed after:mb-2 after:ml-8'
        >
          About Futures MMA
        </h1>
      </div>
      <section id='aboutFutures'>
        <meta
          name='About Futures Mixed Martial Arts'
          content='Futures MMA of North Fort Myers specializes in Muay Thai, Jiu-Jitsu (BJJ), Boxing, Wrestling, and Kids Martial Arts.'
        />

        <div className='px-4 lg:px-56 py-8 pb-8 bg-white'>
          <p className='py-4 bg-white indent-8 text-futuresRed font-semibold'>
            We are a Mixed Martial Arts gym located on the border of Cape Coral
            & North Fort Myers Florida, open to all ages and walks of life. Home
            to Professional and Amateur Mixed Martial Artists. We train hard, we
            fight hard, we play hard, we love hard, we are the FUTURE.
          </p>
          <img
            src='/CarouselImages/futures-team-pic_orig.png'
            alt='Futures MMA Team Huddle'
            width={500}
            className='mx-auto'
          />
        </div>
      </section>
      <hr />
    </div>
  );
}
