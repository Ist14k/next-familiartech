import React from 'react';

import CategoryItem from './CategoryItem';

const Categories = () => {
  return (
    <div>
      <div className="mb-8 flex items-center justify-between after:flex-shrink after:content-[' '] after:h-0.5 after:w-full after:ml-8 after:bg-gray-200">
        <h5 className="min-w-max text-lg uppercase text-gray-900">
          Categories
        </h5>
      </div>
      <div className=" flex flex-col gap-y-2">
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
        <CategoryItem />
      </div>
    </div>
  );
};

export default Categories;
