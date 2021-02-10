import React from 'react';
import HomeSections from 'components/Home/HomeSections';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const listItem = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const data = [
  {
    image: '/images/aang.jpg',
    name: 'Muhammad Ilham Mubarak',
    role: 'As Frontend Developer',
  },
  {
    image: '/images/avtara.jpg',
    name: 'Muhammad Avtara Khrisna',
    role: 'As Backend Developer',
  },
];

const OurPeople = () => {
  return (
    <HomeSections title='Our Core People' outlineTitle='Our Core'>
      <motion.div
        className='grid grid-cols-2 gap-24'
        variants={container}
        initial='hidden'
        animate='show'
      >
        {data.map(({ image, name, role }, idx) => (
          <motion.div variants={listItem} key={idx}>
            <div className='relative h-64 overflow-hidden rounded mb-8 shadow-lg'>
              <img
                src={image}
                alt=''
                className='absolute object-cover min-w-full min-h-full -top-40'
              />
            </div>
            <h6 className='text-2xl font-medium'>{name}</h6>
            <p className='text-lg'>{role}</p>
          </motion.div>
        ))}
      </motion.div>
    </HomeSections>
  );
};

export default OurPeople;
