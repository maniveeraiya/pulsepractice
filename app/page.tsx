import Banner from '@/Components/Banner';
import Navbar from '@/Components/Navbar';
import Pricing from '@/Components/Pricing';
import Image from 'next/image';

export default function Home() {
  return (
    <div className='max-w-screen-2xl mx-auto'>
      <Navbar />
      <Banner />
      <Pricing />
    </div>
  );
}
