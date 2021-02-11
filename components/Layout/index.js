import React from 'react';
import Head from 'next/head';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';

const Layout = ({ meta, children }) => {
  const pageTitle = meta && meta.title ? `${title} | DoubleEng` : 'DoubleEng';
  const pageDescription =
    meta && meta.description
      ? meta.description
      : 'Hello We are DoubleEng, A group that needs money';

  const pageImage =
    meta && meta.image ? meta.image : 'https://i.imgur.com/RFg9V6X.png';

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name='description' content={pageDescription} key='description' />
        <meta name='og:title' content={pageTitle} key='title' />
        <meta
          name='og:description'
          content={pageDescription}
          key='og:description'
        />
        <meta name='og:image' content={pageImage} />
        <meta name='og:image:width' content='1200' />
        <meta name='og:image:height' content='600' />
        <meta name='og:type' content='website' />

        <meta name='twitter:title' content={pageTitle} />
        <meta name='twitter:description' content={pageDescription} />
        <meta name='twitter:card' content='summary_large_image' />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
