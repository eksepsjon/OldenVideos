/* eslint-disable @next/next/no-img-element */
import React from 'react';

import classes from './logo.module.css';

export interface LogoProps {
  text: string;
}

/** Primary UI component for user interaction */
export const Logo = ({ text }: LogoProps) => {
  return (
    <span className={classes.logo} data-text={text}>
      {text}
    </span>
  );
};
