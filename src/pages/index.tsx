import Features from '~/components/ui/Features';
// import Services from '~/components/ui/Services';
import Testimonials from '~/components/ui/Testimonials';
import Title from '~/components/ui/Title';
import ClassOverview from '~/components/ui/ClassOverview';
import Contact from '~/components/ui/Contact';
import ImageCarousel from '~/components/ui/ImageCarousel';
import { useDisclosure } from '@mantine/hooks';
import mod from 'zod/lib';

function Home() {
  // const [modalBasicIsOpen, { open: modalBasicOpen, close: modalBasicClosed }] =
  //   useDisclosure(false);
  // const [
  //   modalJuniorIsOpen,
  //   { open: modalJuniorOpen, close: modalJuniorClosed },
  // ] = useDisclosure(false);
  // const [
  //   modalPlayingIsOpen,
  //   { open: modalPlayingOpen, close: modalPlayingClosed },
  // ] = useDisclosure(false);
  // const [
  //   modalSamplerIsOpen,
  //   { open: modalSamplerOpen, close: modalSamplerClosed },
  // ] = useDisclosure(false);
  // const [modalAFIsOpen, { open: modalAFOpen, close: modalAFClosed }] =
  //   useDisclosure(false);
  // const [
  //   modalFittingIsOpen,
  //   { open: modalFittingOpen, close: modalFittingClosed },
  // ] = useDisclosure(false);

  return (
    <div>
      <Title />
      <Features />
      {/* <Services /> */}
      <Testimonials />
      <ClassOverview
      // modalBasicIsOpen={modalBasicIsOpen}
      // modalJuniorIsOpen={modalJuniorIsOpen}
      // modalPlayingIsOpen={modalPlayingIsOpen}
      // modalSamplerIsOpen={modalSamplerIsOpen}
      // modalAFIsOpen={modalAFIsOpen}
      // modalFittingIsOpen={modalFittingIsOpen}
      // openModalBasic={modalBasicOpen}
      // closeModalBasic={modalBasicClosed}
      // openModalJunior={modalJuniorOpen}
      // closeModalJunior={modalJuniorClosed}
      // openModalPlaying={modalPlayingOpen}
      // closeModalPlaying={modalPlayingClosed}
      // openModalSampler={modalSamplerOpen}
      // closeModalSampler={modalSamplerClosed}
      // openModalAF={modalAFOpen}
      // closeModalAF={modalAFClosed}
      // openModalFitting={modalFittingOpen}
      // closeModalFitting={modalFittingClosed}
      />
      <ImageCarousel />
      <Contact />
    </div>
  );
}
export default Home;
