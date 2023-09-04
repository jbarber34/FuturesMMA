export default function Services() {
  return (
    <section id='services'>
      <div className='bg-black pb-24 md:px-12'>
        <div className='pt-16 bg-black'>
          <h1
            className='before:inline-block before:md:w-52 before:sm:w-40 before:w-24 before:h-1 before:bg-legacyGold before:mb-2 before:mr-8
            after:inline-block after:md:w-52 after:sm:w-40 after:w-24 after:h-1 after:bg-legacyGold after:mb-2 after:ml-8
            rounded-lg text-center text-4xl  px-2 text-white font-extrabold drop-shadow-xl shadow-black'
          >
            Services
          </h1>
        </div>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 lg:mx-56 md:mx-2 gap-4 text-center pt-8'>
          <h2 className='bg-gray-800 text-white px-4 py-2 rounded-lg'>
            Jewelry Repair
          </h2>
          <h2 className='bg-gray-800 text-white px-4 py-2 rounded-lg'>
            Watch Repair
          </h2>
          <h2 className='bg-gray-800 text-white px-4 py-2 rounded-lg'>
            Appraisals
          </h2>
          <h2 className='bg-gray-800 text-white px-4 py-2 rounded-lg'>
            Cleaning/Polishing
          </h2>
          <h2 className='bg-gray-800 text-white px-4 py-2 rounded-lg'>
            Gold Buy
          </h2>
          <h2 className='bg-gray-800 text-white px-4 py-2 rounded-lg'>
            Custom Jewelry
          </h2>
        </div>
      </div>
    </section>
  );
}
