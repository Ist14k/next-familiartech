import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { faker } from '@faker-js/faker';

const PostItem = props => {
  const data = props.data;

  return (
    <div className="flex flex-col first:items-stretch last:items-stretch">
      <Link
        href={'/posts/' + data.id}
        className="mb-2 overflow-hidden rounded-lg"
      >
        <Image
          className="object-cover w-full aspect-video sm:aspect-auto hover:scale-110 transition-all ease-in-out duration-300 max-h-[400px] hover:blur-sm"
          src={data.src.medium}
          width={data.width}
          height={data.height}
          alt="card-image"
        />
      </Link>
      <div className="text-center">
        <h5 className="mb-3 uppercase self-center text-xs font-bold before:block before:content-[' '] before:absolute before:inset-y-2 before:w-full before:h-2 before:bg-amber-400 relative inline-block">
          <span className="relative text-gray-700">Category</span>
        </h5>
        <Link href={'/posts/' + data.id} className="">
          <h1 className="font-bold text-[22px] px-2 leading-tight mb-3">
            {data.alt}
          </h1>
        </Link>
        <div className="flex gap-x-4 text-[13px] justify-center text-gray-400">
          <div className="flex gap-x-1 items-center">
            <i className="fa-regular fa-user text-amber-500"></i>
            <p>Istiak Ahmmed</p>
          </div>
          <div className="flex gap-x-1 items-center">
            <i className="fa-regular fa-clock text-amber-500"></i>
            <p>02/11/2022</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostItem;
