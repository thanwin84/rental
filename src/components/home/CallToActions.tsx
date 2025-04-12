'use client';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
export default function CallToActions({ className }: { className?: string }) {
  return (
    <section className={`relative py-24 ${className}`}>
      <Image
        fill
        src="/landing-call-to-action.jpg"
        alt="call to action photo"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <motion.div className="absolute inset-0 flex flex-col gap-4 items-center justify-center text-center">
        <p className="text-center text-xl text-slate-100 ">
          Discover a wide range of properties in your desired locations.
        </p>
        <div className="flex gap-4">
          <Button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            variant="outline"
            className=""
          >
            Search
          </Button>
          <Link href="/signup">
            <Button className="bg-red-400 hover:bg-red-500 cursor-pointer">
              Sign Up
            </Button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
