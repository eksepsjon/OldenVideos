import type { Meta, StoryObj } from '@storybook/react';

import { ClipThumb } from './ClipThumb';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Clip/Thumb',
  component: ClipThumb,
  parameters: {},
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof ClipThumb>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    clip: {
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
  },
};
