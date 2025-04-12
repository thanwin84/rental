'use client';
import { motion } from 'framer-motion';
import FeaturedCard from './FeaturedCart';

const datas = [
  {
    imgSrc: '/landing-search1.png',
    title: 'Trustworthy and Verified Listings',
    description:
      'Discover the best rental options with user reviews and ratings.',
    linkText: 'Explore',
    linkHref: '/explore',
  },
  {
    imgSrc: '/landing-search2.png',
    title: 'Browse Rental Listings with Ease',
    description:
      'Get access to user reviews and ratings for a better understanding of rental options.',
    linkText: 'Search',
    linkHref: '/search',
  },
  {
    imgSrc: '/landing-search3.png',
    title: 'Simplify Your Rental Search with Advanced',
    description:
      'Find trustworthy and verified rental listings to ensure a hassle-free experience.',
    linkText: 'Search',
    linkHref: '/search',
  },
];
const sectionTitle =
  'Quickly find the home you want using our simple and effective search filters';
const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.4,
    },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Featured({ className }: { className?: string }) {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className={`w-[90%] md:w-[75%] mx-auto py-6 ${className}`}
    >
      <h2 className="mb-4 font-semibold text-center text-2xl">
        {sectionTitle}
      </h2>
      <ul className="flex flex-col md:flex-row gap-4">
        {datas.map((item) => (
          <motion.li key={item.title} variants={itemVariants}>
            <FeaturedCard
              title={item.title}
              description={item.description}
              imgSrc={item.imgSrc}
              linkHref={item.linkHref}
              linkText={item.linkText}
            />
          </motion.li>
        ))}
      </ul>
    </motion.section>
  );
}
