import type { Meta, StoryObj } from '@storybook/react';

import { ChannelLink } from './ChannelLink';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Elements/ChannelLink',
  component: ChannelLink,
  parameters: {},
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof ChannelLink>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    channel: {
      id: 'UC9Ntx-EF3LzKY1nQ5rTUP2g',
      name: 'cyriak',
    },
  },
};
