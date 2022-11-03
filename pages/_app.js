import { Fragment } from 'react';
import Head from 'next/head';
import '../styles/globals.css';

import Header from '../components/Layout/Header';

const MyApp = props => {
  const { Component, pageProps } = props;

  return (
    <Fragment>
      <Header />
      <main className="mx-auto max-w-[1200px] px-6">
        <Component {...pageProps} />
      </main>
    </Fragment>
  );
};

export default MyApp;
