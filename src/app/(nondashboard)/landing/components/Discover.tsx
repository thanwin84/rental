'use client';
import { motion } from 'framer-motion';
import DiscoverCard from './DiscoverCard';

const discoverData = [
  {
    imageSrc: '/landing-icon-wand.png',
    title: 'Search for Properties',
    description:
      'Browse through our extensive collection of rental properties in your desired location.',
  },
  {
    imageSrc: '/landing-icon-calendar.png',
    title: 'Book Your Rental',
    description:
      "Once you've found the perfect rental property, easily book it online with just a few clicks.",
  },
  {
    imageSrc: '/landing-icon-heart.png',
    title: 'Enjoy your New Home',
    description:
      'Move into your new rental property and start enjoying your dream home.',
  },
];
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
    },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
export default function Discover({}: { className?: string }) {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.8 }}
      className="  bg-gray-100 text-center py-8"
    >
      <div className="w-[80%] mx-auto">
        <h2 className="text-xl font-semibold mb-4 text-slate-800">Discover</h2>
        <p className="font-bold mb-2 text-2xl text-red-400">
          Find your Dream Rental Property Today!
        </p>
        <p className="text-justify text-slate-700 my-6">
          Searching for your dream rental property has never been easier. With
          our user-friendly search feature, you can quickly find the perfect
          home that meets all your needs. Start your search today and discover
          your dream rental property!
        </p>
        <div className="flex flex-col md:flex-row gap-4 mt-6">
          {discoverData.map((item) => (
            <motion.div
              variants={itemVariants}
              whileHover={{ y: -20 }}
              key={item.title}
            >
              <DiscoverCard
                imgSrc={item.imageSrc}
                title={item.title}
                description={item.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
