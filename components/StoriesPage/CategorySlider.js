import React, { useRef, useEffect } from 'react';
import Slider from 'react-slick';
import Link from 'next/link';

const categories = [
  { title: 'All Stories', url: '' },
  { title: 'Project', url: 'project' },
  { title: 'Experience', url: 'experience' },
  { title: 'Project', url: 'project' },
  { title: 'Experience', url: 'experience' },
];

const sliderSettings = {
  centerMode: true,
  slidesToShow: 3,
  infinite: true,
  focusOnSelect: true,
  speed: 0,
  swipe: false,
  centerPadding: '128px',
  arrows: false,
  dots: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        centerMode: true,
        slidesToShow: 1,
        infinite: true,
        focusOnSelect: true,
        speed: 0,
        swipe: false,
        centerPadding: '48px',
        arrows: false,
        dots: false,
      },
    },
  ],
};

const CategorySlider = ({ category }) => {
  const initialSlide = categories.map((val) => val.url).indexOf(category);
  const sliderRef = useRef();

  useEffect(() => {
    sliderRef.current.slickGoTo(initialSlide, true);
  }, [category, sliderRef]);

  return (
    <Slider {...sliderSettings} initialSlide={initialSlide} ref={sliderRef}>
      {categories.map(({ title, url }) => (
        <span className='focus: outline-none py-3' key={title}>
          <Link href={`/stories/${url}`}>
            <a>
              <h3 className='font-bold text-3xl lg:text-5xl text-center lg:mx-4 cursor-pointer focus:ring-0 focus:outline-none whitespace-nowrap'>
                {title}
              </h3>
            </a>
          </Link>
        </span>
      ))}
    </Slider>
  );
};

export default CategorySlider;
