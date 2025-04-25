/* eslint-disable @next/next/no-img-element */
import React from 'react';

import classes from './header.module.css';
import Link from 'next/link';
import { Logo } from '@/components/Elements/Logo/Logo';

export interface HeaderProps {}

/** Primary UI component for user interaction */
export const Header = ({}: HeaderProps) => {
  return (
    <div className={classes.header}>
      <div>
        <div>
          <Link className={classes.logo} href="/">
            <Logo text="Olden Videos" />
          </Link>
          <div className={classes.links}>
            <Link href="https://github.com/eksepsjon/nostalgia-clip#contribute">Contribute</Link>
            <Link href="https://buymeacoffee.com/eksepsjon">Buy me a coffee</Link>
          </div>
        </div>
      </div>
    </div>
  );
};
