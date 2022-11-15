import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const TrendingPostItem = () => {
  return (
    <Link href="#" className="flex gap-x-5 items-center">
      <figure className=" min-w-[96px] relative">
        <Image
          className="rounded-full w-24 h-24"
          src="https://images.pexels.com/photos/1509534/pexels-photo-1509534.jpeg"
          alt=""
          height={96}
          width={96}
        />
        <div className="absolute top-0 left-1 bg-black rounded-full w-6 h-6 flex items-center justify-center">
          <p className="text-white">10</p>
        </div>
      </figure>
      <div className="flex flex-col justify-between items-start gap-y-1">
        <h5 className="uppercase text-xs font-bold before:block before:content-[' '] before:absolute before:inset-y-2 before:w-full before:h-2 before:bg-amber-400 relative inline-block">
          <span className="relative text-gray-700">Category</span>
        </h5>
        <h2 className="font-semibold">
          Lorem ipsum dolor sit amet consectetur.
        </h2>
        <div className="flex gap-x-1 items-center text-gray-400 text-sm">
          <i className="fa-regular fa-clock"></i>
          <p>02/11/2022</p>
        </div>
      </div>
    </Link>
  );
};

export default TrendingPostItem;
