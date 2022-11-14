import { Fragment } from 'react';

import StorySlider from '../Swiper';
import AboutUs from './AboutUs';
import FeaturePosts from './FeaturePosts';
import SiteMap from './SiteMap';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Fragment>
      <footer className="mx-auto max-w-[1200px] px-4 mt-10">
        <StorySlider />
        <main className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          <AboutUs />
          <FeaturePosts />
          <SiteMap />
        </main>
        <p className="text-center block p-6 border-t-2 text-gray-800 font-medium">
          <span className="text-gray-500">©</span> {currentYear}, Familiar
          <span className="text-amber-500">Tech</span> - Latest News About Tech
          and Gadget. All rights reserved.
        </p>
      </footer>
    </Fragment>
  );
};

export default Footer;
