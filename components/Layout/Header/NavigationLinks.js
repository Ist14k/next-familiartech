import { Fragment } from 'react';
import Link from 'next/link';

const NavigationLinks = props => {
  return (
    <Fragment>
      <li>
        <Link onClick={props.closeHandler} href="/">
          HOME
        </Link>
      </li>
      <li>
        <Link onClick={props.closeHandler} href="/posts">
          POSTS
        </Link>
      </li>
      <li>
        <Link onClick={props.closeHandler} href="#">
          CATEGORIES
        </Link>
      </li>
      <li>
        <Link onClick={props.closeHandler} href="/about">
          ABOUT
        </Link>
      </li>
      <li>
        <Link onClick={props.closeHandler} href="/contact">
          CONTACT
        </Link>
      </li>
    </Fragment>
  );
};

export default NavigationLinks;
