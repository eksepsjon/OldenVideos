/* eslint-disable @next/next/no-img-element */
import React from 'react';

import classes from './header.module.css';
import Link from 'next/link';
import { Logo } from '@/components/Elements/Logo/Logo';
import { Container, Group } from '@mantine/core';

export interface HeaderProps {}

/** Primary UI component for user interaction */
export const Header = ({}: HeaderProps) => {
  return (
    <div className={classes.header}>
      <Container size="lg">
        <Group align="center" justify="space-between">
          <Link className={classes.logo} href="/">
            <Logo text="Olden Videos" />
          </Link>
          <Group className={classes.links} align="center" justify="end">
            <Link href="https://github.com/eksepsjon/OldenVideos#contribute">Contribute</Link>
            <Link href="https://buymeacoffee.com/eksepsjon">Buy me a coffee</Link>
          </Group>
        </Group>
      </Container>
    </div>
  );
};
