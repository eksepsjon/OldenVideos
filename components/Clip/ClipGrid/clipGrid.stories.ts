import type { Meta, StoryObj } from '@storybook/react';

import { ClipGrid } from './ClipGrid';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Clip/Grid',
  component: ClipGrid,
  parameters: {},
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof ClipGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    clips: [
      {
        id: 'DFM140rju4k',
        title: 'The Golden Age of Video by Ricardo Autobahn',
        publishedAt: '2009-10-03T21:31:31.000Z',
        importedAt: '2024-11-02T09:30:01.908Z',
        duration: 200,
        thumbnail: 'https://i.ytimg.com/vi/DFM140rju4k/default.jpg',
        source: 'youtube',
        channel: {
          id: 'UCpHKwQwAj0hbTmVu8YIdGdw',
          name: 'SPRAY',
        },
      },
      {
        id: 'dQw4w9WgXcQ',
        title: 'Rick Astley - Never Gonna Give You Up (Official Music Video)',
        publishedAt: '2009-10-25T06:57:33.000Z',
        importedAt: '2024-11-02T09:30:01.908Z',
        duration: 213,
        thumbnail: 'https://i.ytimg.com/vi/dQw4w9WgXcQ/default.jpg',
        source: 'youtube',
        channel: {
          id: 'UCuAXFkgsw1L7xaCfnd5JJOw',
          name: 'Rick Astley',
        },
      },
      {
        id: 'DD5UKQggXTc',
        title: 'The Annoying Orange (Original)',
        publishedAt: '2010-02-15T20:07:37.000Z',
        importedAt: '2024-11-02T09:30:01.907Z',
        duration: 96,
        thumbnail: 'https://i.ytimg.com/vi/DD5UKQggXTc/default.jpg',
        source: 'youtube',
        channel: {
          id: 'UCi-5OZ2tYuwMLIcEyOsbdRA',
          name: 'Annoying Orange',
        },
      },
      {
        id: 'sTSA_sWGM44',
        title: 'Trololo...   The Full Original Version.',
        publishedAt: '2010-03-04T20:44:53.000Z',
        importedAt: '2024-11-02T17:37:28.910Z',
        duration: 296,
        thumbnail: 'https://i.ytimg.com/vi/sTSA_sWGM44/default.jpg',
        source: 'youtube',
        channel: {
          id: 'UCQXasu5wxVohnuG70mGlFqQ',
          name: 'zoomadood',
        },
      },
      {
        id: '-0Xa4bHcJu8',
        title: 'Cycles',
        publishedAt: '2010-03-09T17:00:49.000Z',
        importedAt: '2024-11-02T09:30:01.906Z',
        duration: 179,
        thumbnail: 'https://i.ytimg.com/vi/-0Xa4bHcJu8/default.jpg',
        source: 'youtube',
        channel: {
          id: 'UC9Ntx-EF3LzKY1nQ5rTUP2g',
          name: 'cyriak',
        },
      },
      {
        id: '3m5qxZm_JqM',
        title: 'Clarke and Dawe - The Front Fell Off',
        publishedAt: '2010-06-24T03:55:03.000Z',
        importedAt: '2024-11-02T09:30:01.907Z',
        duration: 129,
        thumbnail: 'https://i.ytimg.com/vi/3m5qxZm_JqM/default.jpg',
        source: 'youtube',
        channel: {
          id: 'UCPyb1dDiGoZ07j_DKzam4sQ',
          name: 'ClarkeAndDawe',
        },
      },
    ],
  },
};
