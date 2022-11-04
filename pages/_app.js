import { Fragment } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import '../styles/globals.css';

import Header from '../components/Layout/Header';
import Aside from '../components/Layout/Aside';
import StorySlider from '../components/Layout/Swiper';

const MyApp = props => {
  const { Component, pageProps } = props;
  const router = useRouter();

  const pathname = router.pathname;

  return (
    <Fragment>
      <Header />

      <main className="mx-auto max-w-[1200px] flex flex-col md:flex-row md:gap-x-8 justify-between px-6 mt-6">
        <Component {...pageProps} />
        {pathname === '/' || pathname === '/posts' ? <Aside /> : null}
      </main>
      <section className="mx-auto max-w-[1200px] px-6 mt-10">
        <StorySlider />
      </section>
    </Fragment>
  );
};

export default MyApp;
