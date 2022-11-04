import { Fragment } from 'react';
import Link from 'next/link';

const NavigationLinks = props => {
  return (
    <Fragment>
      <li>
        <Link
          onClick={props.closeHandler}
          className="font-bold text-sm text-primary"
          href="/"
        >
          HOME
        </Link>
      </li>
      <li>
        <Link
          onClick={props.closeHandler}
          className="font-bold text-sm text-primary"
          href="/posts"
        >
          POSTS
        </Link>
      </li>
      <li>
        <Link
          onClick={props.closeHandler}
          className="font-bold text-sm text-primary"
          href="#"
        >
          CATEGORIES
        </Link>
      </li>
      <li>
        <Link
          onClick={props.closeHandler}
          className="font-bold text-sm text-primary"
          href="/about"
        >
          ABOUT
        </Link>
      </li>
      <li>
        <Link
          onClick={props.closeHandler}
          className="font-bold text-sm text-primary"
          href="/contact"
        >
          CONTACT
        </Link>
      </li>
    </Fragment>
  );
};

export default NavigationLinks;
