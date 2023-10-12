import { Button, Group } from '@mantine/core';
import Link from 'next/link';
import router from 'next/router';
import { ClassDetail } from '~/types';

interface Props {
  classDetails: ClassDetail;
  order: string;
}

export default function ClassOverviewCard({ classDetails, order }: Props) {
  return (
    <div className='relative grid grid-cols-2'>
      <div
        className={`m-auto ${
          order === 'left' ? 'order-1 ml-4 lg:mx-12' : 'mx-4 lg:mx-12'
        }`}
      >
        <div className='tracking-tight'>
          <h2 className='text-3xl font-bold'>{classDetails.name}</h2>
          <p className='text-gray-500'>{classDetails.description}</p>
        </div>
        <div className='pt-12'>
          <button
            onClick={() => {
              router.push(`/Classes#${classDetails.lookAt}`);
            }}
            className='text-white font-extrabold block w-full bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-200 font-medium text-sm px-4 py-2.5 text-center dark:focus:ring-blue-900 rounded-md'
          >
            Learn More
          </button>
        </div>
      </div>
      <div>
        <img
          src={'/' + classDetails.imageName + '.png'}
          alt={classDetails.imageName + ' image'}
          style={{ width: '100%', height: '100%' }}
        />
      </div>
    </div>
  );
}
