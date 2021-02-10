import React from 'react';
import { motion } from 'framer-motion';
import Label from './Label';
import Link from 'next/link';

const BlogItems = ({ title, category, image, author }) => {
  return (
    <motion.div className='item'>
      <div className='relative w-full h-52 overflow-hidden rounded mb-4'>
        <img
          src={image}
          alt=''
          className='min-w-full min-h-full absolute object-cover transform hover:scale-125 transition-transform'
        />
      </div>
      <Label text={category} />
      <Link href='/article/designing-anu'>
        <a>
          <h4 className='text-2xl font-medium mt-4 hover:underline cursor-pointer'>
            {title}
          </h4>
        </a>
      </Link>
      <p className='text-gray-500 text-lg'>{`By ${author}`}</p>
    </motion.div>
  );
};

export default BlogItems;
