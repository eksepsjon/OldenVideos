import { MantineProvider } from '@mantine/core';
import '../app/globals.css';
import '@mantine/core/styles.css';
import React from 'react';
import { StoryFn } from '@storybook/react';
import { siteTheme } from '../lib/theme';

const StorybookDecorator = (Story: StoryFn) => (
  <MantineProvider theme={siteTheme}>
    <Story />
  </MantineProvider>
);

export default StorybookDecorator;
