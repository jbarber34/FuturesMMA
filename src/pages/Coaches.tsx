export default function Coaches() {
  return (
    <section id='coaches' className='my-20 text-center'>
      <meta
        name='Futures Coaches'
        content='This section offers information about coaches at Futures Mixed Martial Arts.'
      />
      <h2
        id='top'
        className='font-black text-5xl container-fluid text-center text-3xl mt-8
            before:inline-block before:xl:w-44 before:lg:w-28 before:md:w-12 before:sm:w-24 before:w-24 before:h-1 before:bg-futuresRed before:mb-2 before:mr-8
            after:inline-block after:xl:w-44 after:lg:w-28 after:md:w-12 after:sm:w-24 after:w-24 after:h-1 after:bg-futuresRed after:mb-2 after:ml-8'
      >
        Coaches
      </h2>
      <meta
        name='Martial Arts Classes Available'
        content='Striking, BJJ & Wrestling classes available'
      />

      <p className='text-gray-500'>
        Our instructors have decades of experience to help you reach your
        martial arts goals!
      </p>
      {/* Jeremiah */}
      <div className='grid grid-cols-2 2xl:grid-cols-2 sm:mx-8 text-center pt-16 px-4'>
        <div className='lg:w-3/4 mx-auto'>
          <h1 className='font-bold'>Jeremiah Rodriguez</h1>
          <p className='text-futuresRed font-semibold'>
            Head Coach, Striking & MMA Instructor
          </p>
          <p className='text-futuresRed font-semibold mx-auto text-left'>
            Over 20 yrs of martial arts experience
          </p>
        </div>
        <div className='mx-auto'>
          <img
            src='/jeremiah-rodriguez.png'
            alt='Head coach Jeremiah Rodriguez'
            width={300}
          />
        </div>
      </div>
      {/* Eduardo */}
      <div className='grid grid-cols-2 2xl:grid-cols-2 sm:mx-8 text-center pt-16 px-4'>
        <div className='lg:w-3/4 mx-auto'>
          <h1 className='font-bold'>Eduardo "Cabello" Diez</h1>
          <p className='text-futuresRed font-semibold mx-auto'>
            Jiu Jitsu Coach
          </p>
          <p className='text-futuresRed font-semibold text-left'>
            Eduardo is a 3rd degree Black Belt, and has received his training
            under Demian Maia, Marcelo Blade, and Rani Yahia. He has been a
            black belt for over 6 years. Eduardo is also an active professional
            competitor in mixed martial arts.
          </p>
        </div>
        <div className='grid lg:grid-cols-2 mx-auto'>
          <img
            src='/eduardo-diez-lineage.png'
            alt='Jiu Jitsu coach Eduardo Diez'
            width={300}
          />
          <img
            src='/eduardo-diez.png'
            alt='Jiu Jitsu coach Eduardo Diez BJJ Lineage'
            width={300}
          />
        </div>
      </div>
      {/* Mason */}
      <div className='grid grid-cols-2 2xl:grid-cols-2 sm:mx-8 text-center pt-16 px-4'>
        <div className='lg:w-3/4 mx-auto'>
          <h1 className='font-bold'>Mason Maher</h1>
          <p className='text-futuresRed font-semibold'>Wrestling Coach</p>
          <p className='text-futuresRed font-semibold mx-auto text-left'>
            Mason has been wrestling from the age of 4 years old
          </p>
        </div>
        <div className='mx-auto'>
          <img
            src='/mason-maher.png'
            alt='Wrestling coach Mason Maher'
            width={300}
          />
        </div>
      </div>
    </section>
  );
}
