import { Fragment } from 'react';

import NavigationLinks from './NavigationLinks';

const BigScreenNavigation = () => {
  return (
    <Fragment>
      <nav className="hidden md:block">
        <ul className="flex gap-x-6">
          <NavigationLinks />
        </ul>
      </nav>
      <div className="hidden md:flex md:gap-x-2 md:items-center ">
        <div className="pr-6 border-r">
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className="flex gap-x-3">
          <i class="fa-brands fa-facebook-f"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-dribbble"></i>
        </div>
      </div>
    </Fragment>
  );
};

export default BigScreenNavigation;
