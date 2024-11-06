/* eslint-disable @next/next/no-img-element */
import React from 'react';

import classes from './header.module.css';
import Link from 'next/link';

export interface HeaderProps {}

/** Primary UI component for user interaction */
export const Header = ({}: HeaderProps) => {
  return (
    <div className={'container ' + classes.header}>
      <Link href="/">
        <h1 className="title is-1">Olden Videos</h1>
      </Link>
    </div>
  );
};
