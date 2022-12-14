import { useState } from 'react';

import BigScreenNavigation from './BigScreenNavigation';
import SmallScreenNavigation from './SmallScreenNavigation';

const Header = () => {
  const [menuState, setMenuState] = useState(false);

  const menuOpenHandler = () => setMenuState(true);
  const menuCloseHandler = () => setMenuState(false);

  return (
    <header className="w-full drop-shadow-sm shadow-md sticky top-0 bg-white z-50">
      <main className="mx-auto max-w-[1200px] py-6 px-4 container flex gap-y-4 items-center justify-between">
        <h1 className="text-2xl font-bold">
          Familiar<span className="text-amber-600">Tech</span>
        </h1>
        {/* navigation for big screen */}
        <BigScreenNavigation />
        {/* end */}
        <div className="md:hidden flex items-center">
          <div className="pr-6">
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
          {menuState ? (
            <button className="w-[21px] h-[32px]" onClick={menuCloseHandler}>
              <i className="text-2xl fa-solid fa-xmark"></i>
            </button>
          ) : (
            <button className="w-[21px] h-[32px]" onClick={menuOpenHandler}>
              <i className="text-2xl fa-solid fa-bars"></i>
            </button>
          )}
        </div>
      </main>
      {/* navigation for small screen */}
      <SmallScreenNavigation
        closeHandler={menuCloseHandler}
        menuState={menuState}
      />
      {/* end */}
    </header>
  );
};

export default Header;
