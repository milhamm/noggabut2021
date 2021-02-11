import Layout from 'components/Layout';
import Stories from 'components/StoriesPage/Stories';
import React from 'react';
import { useRouter } from 'next/router';

const StoriesCategoryPage = () => {
  const router = useRouter();
  const { category } = router.query;

  return (
    <Layout>
      <Stories category={category} />
    </Layout>
  );
};

export default StoriesCategoryPage;
