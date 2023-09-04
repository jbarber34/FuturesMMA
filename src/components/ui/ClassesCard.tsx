import { ClassDetail } from '~/types';
import ClassesModal from './ClassesModal';

interface Props {
  classDetails: ClassDetail;
  // modalIsOpen: any;
  // openModal: any;
  // closeModal: any;
}

export default function ClassesCard({
  classDetails,
}: // modalIsOpen,
// openModal,
// closeModal,
Props) {
  return (
    <div
      id={classDetails.imageName}
      className='bg-white border rounded-lg shadow-md bg-gray-800 border-gray-700 '
    >
      <p className='py-4 text-2xl font-black bg-gray-300 rounded-t-lg'>
        {classDetails.name}
      </p>
      <div className='p-5 h-72 relative grid grid-cols-2'>
        <div className='text-left tracking-tight text-white'>
          <ul style={{ listStyleType: 'circle', margin: '20px' }}>
            {classDetails.detailInformation.map((item: any) => {
              if (item.subFeature) {
                return (
                  <ul>
                    <li key={item.feature}>{item.feature}</li>{' '}
                    <ul style={{ listStyleType: 'circle', marginLeft: '20px' }}>
                      <li style={{ paddingBottom: '5px 0' }}>
                        {item.subFeature}
                      </li>
                    </ul>
                  </ul>
                );
              } else {
                return (
                  <li style={{ padding: '5px 0' }} key={item.feature}>
                    {item.feature}
                  </li>
                );
              }
            })}
          </ul>
          {/* <div className='text-xl font-bold tracking-tight text-white'>
            {classDetails.description}
          </div> */}
        </div>
        <div className='m-auto'>
          <img
            src={'/' + classDetails.imageName + '.png'}
            alt={classDetails.imageName + ' image'}
            className='max-w-full max-h-full'
          />
        </div>
      </div>
      {/* <ClassesModal
        content={classDetails.modalInformation}
        open={openModal}
        close={closeModal}
        modalIsOpened={modalIsOpen}
      ></ClassesModal> */}
    </div>
  );
}
