import React from 'react';
import Head from 'next/head';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';

const Layout = ({ title, children }) => {
  const pageTitle = title ? `${title} | DoubleEng` : 'DoubleEng';

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
