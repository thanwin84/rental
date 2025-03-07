import CallToActions from './components/CallToActions';
import Discover from './components/Discover';
import Featured from './components/Featured';
import Footer from './components/Footer';
import Hero from './components/Hero';

export default function LandingPage() {
  return (
    <div>
      <Hero />
      <Featured className="mt-6" />
      <Discover />
      <CallToActions />
      <Footer />
    </div>
  );
}
