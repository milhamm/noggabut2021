import Head from 'next/head';
import { AnimateSharedLayout } from 'framer-motion';
import { useHydrate } from 'lib/store';

import '../styles/globals.css';
import { StoreProvider } from 'lib/zustandProvider';

function MyApp({ Component, pageProps }) {
  const store = useHydrate(pageProps.initialZustandState);
  return (
    <>
      <Head>
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap'
          rel='stylesheet'
        />
        <link
          rel='stylesheet'
          type='text/css'
          charSet='UTF-8'
          href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css'
        />
        <link
          rel='stylesheet'
          type='text/css'
          href='https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css'
        />
      </Head>
      <StoreProvider store={store}>
        <AnimateSharedLayout>
          <Component {...pageProps} />
        </AnimateSharedLayout>
      </StoreProvider>
    </>
  );
}

export default MyApp;
