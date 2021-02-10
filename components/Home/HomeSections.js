import React from 'react';

const HomeSections = ({ title, outlineTitle, children }) => {
  return (
    <div className='max-w-6xl mx-auto w-full relative mb-32'>
      <h5 className='text-center block font-bold text-4xl z-10 relative mb-12'>
        {title}
      </h5>
      <span className='text-outline absolute -top-10 -right-20 font-bold z-0 text-9xl text-transparent select-none'>
        {outlineTitle}
      </span>
      {children}
    </div>
  );
};

export default HomeSections;
