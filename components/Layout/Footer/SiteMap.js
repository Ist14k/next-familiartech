import React from 'react';
import Link from 'next/link';

const SiteMap = () => {
  return (
    <div className="md:col-span-2 lg:col-span-1 text-[15px] leading-6 text-gray-600 md:flex lg:block justify-between gap-x-6">
      <div className="basis-1/2 mb-6">
        <div className="mb-8 flex items-center justify-between after:flex-shrink after:content-[' '] after:h-0.5 after:w-full after:ml-8 after:bg-gray-200">
          <h5 className="min-w-max font-bold text-lg uppercase text-gray-900">
            Site Map
          </h5>
        </div>
        <div className="flex flex-wrap gap-2">
          <button className="px-5 py-1 bg-gray-100 hover:bg-gray-200 text-gray-600 text-sm rounded-sm">
            Home
          </button>
          <button className="px-5 py-1 bg-gray-100 hover:bg-gray-200 text-gray-600 text-sm rounded-sm">
            About
          </button>
          <button className="px-5 py-1 bg-gray-100 hover:bg-gray-200 text-gray-600 text-sm rounded-sm">
            Contact
          </button>
          <button className="px-5 py-1 bg-gray-100 hover:bg-gray-200 text-gray-600 text-sm rounded-sm">
            Author
          </button>
          <button className="px-5 py-1 bg-gray-100 hover:bg-gray-200 text-gray-600 text-sm rounded-sm">
            Category
          </button>
          <button className="px-5 py-1 bg-gray-100 hover:bg-gray-200 text-gray-600 text-sm rounded-sm">
            Information
          </button>
          <button className="px-5 py-1 bg-gray-100 hover:bg-gray-200 text-gray-600 text-sm rounded-sm">
            Headlines
          </button>
          <button className="px-5 py-1 bg-gray-100 hover:bg-gray-200 text-gray-600 text-sm rounded-sm">
            More
          </button>
        </div>
      </div>

      <div className="basis-1/2">
        <div className="mb-8 flex items-center justify-between after:flex-shrink after:content-[' '] after:h-0.5 after:w-full after:ml-8 after:bg-gray-200">
          <h5 className="min-w-max font-bold text-lg uppercase text-gray-900">
            Social Links
          </h5>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link
            className="w-10 h-10 p-4 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full"
            href="#"
          >
            <i className="fa-brands fa-facebook-f"></i>
          </Link>
          <Link
            className="w-10 h-10 p-4 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full"
            href="#"
          >
            <i className="fa-brands fa-twitter"></i>
          </Link>
          <Link
            className="w-10 h-10 p-4 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full"
            href="#"
          >
            <i className="fa-brands fa-instagram"></i>
          </Link>
          <Link
            className="w-10 h-10 p-4 flex items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-full"
            href="#"
          >
            <i className="fa-brands fa-dribbble"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SiteMap;
