import { Fragment } from 'react';
import Link from 'next/link';

const NavigationLinks = () => {
  return (
    <Fragment>
      <li>
        <Link className="font-bold text-sm text-primary" href="#">
          HOME
        </Link>
      </li>
      <li>
        <Link className="font-bold text-sm text-primary" href="#">
          POSTS
        </Link>
      </li>
      <li>
        <Link className="font-bold text-sm text-primary" href="#">
          CATEGORY
        </Link>
      </li>
      <li>
        <Link className="font-bold text-sm text-primary" href="#">
          ABOUT
        </Link>
      </li>
      <li>
        <Link className="font-bold text-sm text-primary" href="#">
          CONTACT
        </Link>
      </li>
    </Fragment>
  );
};

export default NavigationLinks;
