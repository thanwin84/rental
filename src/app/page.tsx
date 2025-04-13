import {
  Hero,
  Featured,
  Discover,
  CallToActions,
  Footer,
} from '@/components/home';
import { Navbar } from '@/components/navbar';

export default function HomePage() {
  return (
    <div>
      <div className='fixed top-0 left-0 right-0 z-50 bg-white shadow-md'>
        <Navbar />
      </div>
      <Hero />
      <Featured className='mt-6' />
      <Discover />
      <CallToActions />
      <Footer />
    </div>
  );
}
