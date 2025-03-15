'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <div className="relative h-screen">
      <Image
        className="object-cover object-center"
        fill
        src="/landing-splash.jpg"
        alt="landing photo"
        priority
      />
      <div className="absolute inset-0 bg-black opacity-60 "></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="absolute z-10 inset-0 flex items-center justify-center text-center"
      >
        <div className="max-w-4xl mx-auto p-6">
          <h1 className="text-2xl md:text-3xl mb-4 font-bold text-white">
            Start your journey to finding the perfect place to call home
          </h1>
          <p className="text-slate-200 text-lg">
            Explore wide range of rental properties tailored to fit your
            lifestyle and needs
          </p>
        </div>
      </motion.div>
    </div>
  );
}
