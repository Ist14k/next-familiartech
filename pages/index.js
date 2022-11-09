import { Fragment, useState } from 'react';
import Head from 'next/head';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

import PostItem from '../components/PageElements/PostItem';

const HomePage = props => {
  const photos = props.photos;
  const renderedCards = photos?.map(el => <PostItem key={el.id} data={el} />);

  return (
    <Fragment>
      <Head>
        <title>
          FamiliarTech | Find Latest Blogs and News About Technology and Gadget
        </title>
      </Head>
      <section className="w-full basis-[780px]">
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 650: 2 }}>
          <Masonry gutter="16px">{renderedCards}</Masonry>
        </ResponsiveMasonry>
        <button className="px-4 py-1 w-max block bg-amber-500 font-medium rounded-sm text-white mx-auto mt-5">
          LOAD MORE
        </button>
      </section>
    </Fragment>
  );
};

const getStaticProps = async () => {
  const res = await fetch(
    'https://api.pexels.com/v1/search?query=nature&page=1&per_page=20',
    {
      headers: {
        Authorization:
          '563492ad6f91700001000001fa796036b1c74db780dee4e8870bf4e2',
      },
    }
  );
  const data = await res.json();

  return {
    props: {
      photos: data.photos,
    },
  };
};

export { getStaticProps };
export default HomePage;

// 1fbd7462b4b846a699f2be28d095db7c
