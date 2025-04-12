import {
  Hero,
  Featured,
  Discover,
  CallToActions,
  Footer,
} from '@/components/home';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Featured className='mt-6' />
      <Discover />
      <CallToActions />
      <Footer />
    </div>
  );
}
