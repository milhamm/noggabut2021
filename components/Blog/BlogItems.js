import React from 'react';
import { motion } from 'framer-motion';
import Label from './Label';
import Link from 'next/link';
import { capitalize } from 'utils/capitalize';

const BlogItems = ({ title, category, image, author, id, slug }) => {
  return (
    <div className='item'>
      <motion.div
        className='relative w-full h-52 overflow-hidden rounded mb-4'
        layoutId={`image-${id}`}
      >
        <img
          src={image}
          alt=''
          className='min-w-full min-h-full absolute object-cover transform hover:scale-125 transition-transform'
        />
      </motion.div>
      {category &&
        category.map((tag) => <Label text={tag} key={tag} link={tag} />)}
      <Link href={`/article/${slug}`}>
        <a>
          <motion.h4
            className='text-lg lg:text-2xl font-medium mt-4 hover:underline cursor-pointer'
            layoutId={`title-${id}`}
          >
            {capitalize(title)}
          </motion.h4>
        </a>
      </Link>
      <a href={`mailto:${author.email}`}>
        <p className='text-gray-500 text-sm lg:text-lg'>{`By ${author.name}`}</p>
      </a>
    </div>
  );
};

export default BlogItems;
