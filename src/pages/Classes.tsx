import React from 'react';
import { useDisclosure } from '@mantine/hooks';
import { ClassDescriptions } from '~/ClassDescriptions';
import ClassesCard from '~/components/ui/ClassesCard';

export default function Classes() {
  //   const [
  //     modalMuayThaiIsOpen,
  //     { open: modalMuayThaiOpen, close: modalMuayThaiClosed },
  //   ] = useDisclosure(false);
  //   const [
  //     modalBoxingIsOpen,
  //     { open: modalBoxingOpen, close: modalBoxingClosed },
  //   ] = useDisclosure(false);
  //   const [
  //     modalJiuJitsuIsOpen,
  //     { open: modalJiuJitsuOpen, close: modalJiuJitsuClosed },
  //   ] = useDisclosure(false);
  //   const [
  //     modalWrestlingIsOpen,
  //     { open: modalWrestlingOpen, close: modalWrestlingClosed },
  //   ] = useDisclosure(false);
  //   const [modalKidsIsOpen, { open: modalKidsOpen, close: modalKidsClosed }] =
  //     useDisclosure(false);
  //   const [
  //     modalPrivateIsOpen,
  //     { open: modalPrivateOpen, close: modalPrivateClosed },
  //   ] = useDisclosure(false);

  const classDetails = ClassDescriptions;

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
        <ClassesCard
          classDetails={classDetails.muayThai}
          //   openModal={modalMuayThaiOpen}
          //   closeModal={modalMuayThaiClosed}
          //   modalIsOpen={modalMuayThaiIsOpen}
        />
        <ClassesCard
          classDetails={classDetails.boxing}
          //   openModal={modalBoxingOpen}
          //   closeModal={modalBoxingClosed}
          //   modalIsOpen={modalBoxingIsOpen}
        />
        <ClassesCard
          classDetails={classDetails.jiuJitsu}
          //   openModal={modalJiuJitsuOpen}
          //   closeModal={modalJiuJitsuClosed}
          //   modalIsOpen={modalJiuJitsuIsOpen}
        />
        <ClassesCard
          classDetails={classDetails.wrestling}
          //   openModal={modalWrestlingOpen}
          //   closeModal={modalWrestlingClosed}
          //   modalIsOpen={modalWrestlingIsOpen}
        />
        <ClassesCard
          classDetails={classDetails.kids}
          //   openModal={modalKidsOpen}
          //   closeModal={modalKidsClosed}
          //   modalIsOpen={modalKidsIsOpen}
        />

        <ClassesCard
          classDetails={classDetails.private}
          //   openModal={modalPrivateOpen}
          //   closeModal={modalPrivateClosed}
          //   modalIsOpen={modalPrivateIsOpen}
        />
      </div>
    </section>
  );
}
