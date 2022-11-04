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
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className="flex gap-x-3">
          <i className="fa-brands fa-facebook-f"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-instagram"></i>
          <i className="fa-brands fa-dribbble"></i>
        </div>
      </div>
    </Fragment>
  );
};

export default BigScreenNavigation;
