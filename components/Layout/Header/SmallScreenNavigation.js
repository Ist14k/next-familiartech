import React from 'react';

import NavigationLinks from './NavigationLinks';

const SmallScreenNavigation = props => {
  return (
    <div
      className={
        'absolute bg-[#ffffff] w-full md:hidden px-6 pb-6 flex flex-col gap-y-7 drop-shadow-sm shadow-md ' +
        (props.menuState ? null : 'top-[-320px]')
      }
    >
      <nav>
        <ul className="flex flex-col gap-y-5">
          <NavigationLinks />
        </ul>
      </nav>
      <div className="self-center flex items-center gap-x-4">
        <i class="text-2xl fa-brands fa-facebook-f"></i>
        <i class="text-2xl fa-brands fa-twitter"></i>
        <i class="text-2xl fa-brands fa-instagram"></i>
        <i class="text-2xl fa-brands fa-dribbble"></i>
      </div>
    </div>
  );
};

export default SmallScreenNavigation;
