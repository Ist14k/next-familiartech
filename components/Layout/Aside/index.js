import React from 'react';

import Categories from './Categories';
import TrendingPosts from './TrendingPosts';
import NewsLetter from './NewsLetter';

const Aside = () => {
  return (
    <aside className="w-full basis-[330px] md:sticky md:top-0">
      <main className="flex flex-col gap-y-8">
        <Categories />
        <TrendingPosts />
        <NewsLetter />
      </main>
    </aside>
  );
};

export default Aside;
