import React from 'react';
import { ClassDescriptions } from '~/ClassDescriptions';
import ClassesCard from '~/components/ui/ClassesCard';
import ClassScheduleTable from '~/components/ui/ClassScheduleTable';
import { ClassSchedule } from '~/types';
import { ClassScheduleData } from '~/components/ClassInformation';

export default function Classes() {
  const classDetails = ClassDescriptions;
  const classSchedule: ClassSchedule = ClassScheduleData;

  return (
    <section id='classes' className='my-20 text-center'>
      <meta
        name='Futures Classes'
        content='This section lists the different class options offered by Futures Mixed Martial Arts.'
      />
      <h2
        id='top'
        className='font-black text-5xl container-fluid text-center text-3xl mt-8
            before:inline-block before:xl:w-44 before:lg:w-28 before:md:w-12 before:sm:w-24 before:w-24 before:h-1 before:bg-futuresRed before:mb-2 before:mr-8
            after:inline-block after:xl:w-44 after:lg:w-28 after:md:w-12 after:sm:w-24 after:w-24 after:h-1 after:bg-futuresRed after:mb-2 after:ml-8'
      >
        Classes
      </h2>
      <meta
        name='Martial Arts Classes Available'
        content='Striking, BJJ & Wrestling classes available'
      />

      <p className='text-gray-500'>
        Whether you're a beginner or a professional, we welcome all skill
        levels!
      </p>
      <div className='grid grid-cols-1 2xl:grid-cols-2 sm:mx-8 gap-4 text-center pt-8'>
        <ClassesCard classDetails={classDetails.muayThai} />
        <ClassesCard classDetails={classDetails.boxing} />
        <ClassesCard classDetails={classDetails.jiuJitsu} />
        <ClassesCard classDetails={classDetails.wrestling} />
        <ClassesCard classDetails={classDetails.kids} />

        <ClassesCard classDetails={classDetails.private} />
      </div>
      <div id='schedule' className='mb-20'></div>
      <h2
        className='font-black text-5xl container-fluid text-center text-3xl mt-8
            before:inline-block before:xl:w-44 before:lg:w-28 before:md:w-12 before:sm:w-24 before:w-24 before:h-1 before:bg-futuresRed before:mb-2 before:mr-8
            after:inline-block after:xl:w-44 after:lg:w-28 after:md:w-12 after:sm:w-24 after:w-24 after:h-1 after:bg-futuresRed after:mb-2 after:ml-8'
      >
        Class Schedule
      </h2>
      <p className='text-gray-500'>
        Any changes to the daily schedule can be seen on our social media
        accounts listed in the contact us section.
      </p>
      <ClassScheduleTable classSchedule={classSchedule} />
    </section>
  );
}
