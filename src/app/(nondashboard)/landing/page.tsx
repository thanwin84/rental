import Featured from './components/Featured';
import Hero from './components/Hero';

export default function LandingPage() {
  return (
    <div>
      <Hero />
      <Featured className="mt-6" />
    </div>
  );
}
