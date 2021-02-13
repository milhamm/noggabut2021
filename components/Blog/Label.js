import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { capitalize } from 'utils/capitalize';

const Label = ({ text, link, ...rest }) => {
  return (
    <Link href={`/stories/${link}`}>
      <a>
        <motion.span
          className='bg-black px-4 py-2 text-white rounded mr-2'
          {...rest}
        >
          {capitalize(text)}
        </motion.span>
      </a>
    </Link>
  );
};

export default Label;
