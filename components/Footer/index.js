import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer>
      <div className='h-full max-w-6xl mx-auto relative px-6'>
        <span className='hidden lg:inline text-outline absolute -top-10 right-0 lg:-right-20 font-bold z-0 text-lg lg:text-9xl text-transparent select-none overflow-hidden overflow-clip'>
          Contact Us
        </span>
        <div className='w-full lg:w-2/3 text-xl lg:text-4xl font-bold z-10 relative leading-snug'>
          If you're looking for someone that does amazing work and has relevant
          experience, we are a perfect match.
        </div>
        <strong className='text-2xl lg:text-4xl font-bold underline cursor-pointer mt-6 block text-blue-500'>
          <Link href='/contact-us'>
            <a>Let’s make your dream app</a>
          </Link>
        </strong>
      </div>
      <div className='bg-black mt-24'>
        <div className='container mx-auto px-6 flex flex-col-reverse lg:flex-row justify-between text-white py-12'>
          <p className='mt-3 lg:mt-0'>© 2021 DoubleEng</p>
          <p>
            Follow us for more thoughts and updates on{' '}
            <span className='underline cursor-pointer'>Github</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
