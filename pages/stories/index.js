import Layout from 'components/Layout';
import Stories from 'components/StoriesPage/Stories';
import fetcher from 'lib/fetcher';
import React, { useEffect } from 'react';
import useSWR from 'swr';

const meta = {
  title: 'All Stories',
  description: 'See our latest stories here',
};

const StoriesPage = ({ posts }) => {
  const { data } = useSWR('/stories/', fetcher, { initialData: posts });

  return (
    <Layout meta={meta}>
      <Stories posts={data} />
    </Layout>
  );
};

export async function getStaticProps() {
  const posts = await fetcher('/stories/');
  return {
    props: {
      posts: posts,
      initialZustandState: {
        category: '',
      },
    },
    revalidate: 1,
  };
}

export default StoriesPage;
