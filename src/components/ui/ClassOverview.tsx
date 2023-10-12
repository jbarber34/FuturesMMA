import ClassOverviewCard from './ClassOverviewCard';
import { ClassDescriptions } from '~/ClassDescriptions';

export default function ClassOverview() {
  const classDetails = ClassDescriptions;
  return (
    <div>
      <h2
        className='font-black text-5xl container-fluid text-center text-3xl my-8
            before:inline-block before:xl:w-44 before:lg:w-28 before:md:w-12 before:sm:w-24 before:w-24 before:h-1 before:bg-futuresRed before:mb-2 before:mr-8
            after:inline-block after:xl:w-44 after:lg:w-28 after:md:w-12 after:sm:w-24 after:w-24 after:h-1 after:bg-futuresRed after:mb-2 after:ml-8'
      >
        Classes
      </h2>
      <ClassOverviewCard classDetails={classDetails.muayThai} order='right' />
      <ClassOverviewCard classDetails={classDetails.boxing} order='left' />
      <ClassOverviewCard classDetails={classDetails.jiuJitsu} order='right' />
      <ClassOverviewCard classDetails={classDetails.wrestling} order='left' />
      <ClassOverviewCard classDetails={classDetails.kids} order='right' />
    </div>
  );
}
