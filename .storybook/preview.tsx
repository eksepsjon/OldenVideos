import type { Preview } from '@storybook/react';
import { createTheme, MantineProvider } from '@mantine/core';
import '../app/globals.css';
import '@mantine/core/styles.css';
import React from 'react';

const theme = createTheme({
  /** Put your mantine theme override here */
});

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    // 👇 Defining the decorator in the preview file applies it to all stories
    (Story) => {
      return (
        <MantineProvider defaultColorScheme="dark" theme={theme}>
          <Story />
        </MantineProvider>
      );
    },
  ],
};

export default preview;
