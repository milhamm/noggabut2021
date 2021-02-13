import BlogItems from 'components/Blog/BlogItems';
import fetcher from 'lib/fetcher';
import Link from 'next/link';
import React from 'react';
import useSWR from 'swr';
import HomeSections from './HomeSections';

const LatestReleases = () => {
  const { data } = useSWR('/stories/', fetcher);

  if (!data) {
    return <div>Loading . . .</div>;
  }

  return (
    <HomeSections title='New Releases' outlineTitle='New Releases'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24'>
        <BlogItems
          id={`${data.data[0].slug}-home`}
          title={data.data[0].title}
          category={data.data[0].Tags}
          slug={data.data[0].slug}
          image={data.data[0].thumbnail}
          author={data.data[0].author}
        />
        <BlogItems
          id={`${data.data[1].slug}-home`}
          title={data.data[1].title}
          category={data.data[1].Tags}
          image={data.data[1].thumbnail}
          slug={data.data[1].slug}
          author={data.data[1].author}
        />
      </div>

      <Link href='/stories'>
        <a>
          <div className='mx-auto static text-center mt-16 underline cursor-pointer'>
            View All
          </div>
        </a>
      </Link>
    </HomeSections>
  );
};

export default LatestReleases;
