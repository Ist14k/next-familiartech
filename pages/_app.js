import { Fragment } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import '../styles/globals.css';

import Header from '../components/Layout/Header';
import Aside from '../components/Layout/Aside';
import Footer from '../components/Layout/Footer';

// import { createClient } from 'pexels';

// const client = createClient('YOUR_API_KEY');

const MyApp = props => {
  const { Component, pageProps } = props;
  const router = useRouter();

  const pathname = router.pathname;

  return (
    <Fragment>
      <Header />

      <main className="mx-auto max-w-[1200px] flex flex-col md:flex-row md:gap-x-8 justify-between px-4 mt-6 sm:mt-10">
        <Component {...pageProps} />
        {pathname === '/' || pathname === '/posts' ? <Aside /> : null}
      </main>

      <Footer />
    </Fragment>
  );
};

export default MyApp;
