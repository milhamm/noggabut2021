import Layout from 'components/Layout';
import StoriesSection from 'components/Stories/StoriesSection';
import React from 'react';
import { useRouter } from 'next/router';

const StoriesCategoryPage = () => {
  const router = useRouter();
  const { category } = router.query;

  return (
    <Layout>
      <StoriesSection category={category} />
    </Layout>
  );
};

export default StoriesCategoryPage;
