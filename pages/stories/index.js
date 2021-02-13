import Layout from 'components/Layout';
import Stories from 'components/StoriesPage/Stories';
import fetcher from 'lib/fetcher';
import React from 'react';
import useSWR from 'swr';

const StoriesPage = ({ posts }) => {
  const { data } = useSWR('/stories/', fetcher, { initialData: posts });

  return (
    <Layout>
      <Stories posts={data} />
    </Layout>
  );
};

export async function getStaticaProps() {
  const posts = await fetcher('/stories/');
  return { props: { posts } };
}

export default StoriesPage;
