export default function Contact() {
  return (
    <section id='contact' className='pt-20 pb-40'>
      <meta
        name='Contact Futures MMA'
        content='This section lists options for contacting Futures Mixed Martial Arts'
      />
      <div className='text-center'>
        <h2
          className='font-black  text-5xl container-fluid text-center text-3xl mt-8
        before:inline-block before:lg:w-48 before:md:w-40 before:sm:w-24 before:w-20 before:h-1 before:bg-futuresRed before:mb-2 before:mr-8
        after:inline-block after:lg:w-48 after:md:w-40 after:sm:w-24 after:w-20 after:h-1 after:bg-futuresRed after:mb-2 after:ml-8'
        >
          Contact Us
        </h2>
        <div className='grid lg:grid-cols-2 mb-8 px-8 font-black'>
          <div className='m-auto'>
            <div>
              Questions? Please call, email, or stop by the gym and a friendly
              Futures staff member will assist you with any questions you have.
            </div>
            <div className='mt-4'>
              <a
                href='https://www.google.com/maps/place/931+Pondella+Rd,+North+Fort+Myers,+FL+33903/@26.6660992,-81.921136,17z/data=!3m1!4b1!4m6!3m5!1s0x88db43d137c4202f:0x94731eb9e915ba3e!8m2!3d26.6660993!4d-81.9162705!16s%2Fg%2F11flc5tlyy?entry=ttu'
                className='hover:underline'
              >
                931 Pondella Rd <br /> North Fort Myers, FL 33903
              </a>{' '}
              <br />
              <a href='tel:8083523318' className='hover:underline'>
                (239) 997-2834
              </a>
            </div>
            <div></div>
          </div>
          <img
            src='/free-class.png'
            alt='Sponsor free class logo'
            // width={100}
            className='m-auto'
          />
        </div>
      </div>
    </section>
  );
}
