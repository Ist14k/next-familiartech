import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const CategoryItem = () => {
  return (
    <Link
      href="#"
      className="max-w-full flex items-center justify-between relative overflow-hidden rounded-lg h-20"
    >
      <Image
        className="w-full h-[85px] object-cover hover:scale-105 hover:transition-all hover:blur-sm ease-out duration-500"
        src="https://images.pexels.com/photos/2156881/pexels-photo-2156881.jpeg"
        width={200}
        height={200}
        alt="post-title"
      />
      <h5 className="absolute font-bold text-white left-4 uppercase">
        Category Name
      </h5>
      <div className="absolute rounded-full bg-white w-10 h-10 flex items-center justify-center right-4">
        <p className="font-medium">10</p>
      </div>
    </Link>
  );
};

export default CategoryItem;
