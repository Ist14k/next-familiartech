import React from 'react';

import TrendingPostItem from './TrendingPostItem';

const TrendingPosts = () => {
  return (
    <div>
      <div className="mb-8 flex items-center justify-between after:flex-shrink after:content-[' '] after:h-0.5 after:w-full after:ml-8 after:bg-gray-200">
        <h5 className="min-w-max text-lg uppercase text-gray-900">
          Trending Posts
        </h5>
      </div>
      <div className=" flex flex-col gap-y-2">
        <TrendingPostItem />
        <TrendingPostItem />
        <TrendingPostItem />
        <TrendingPostItem />
        <TrendingPostItem />
      </div>
    </div>
  );
};

export default TrendingPosts;
