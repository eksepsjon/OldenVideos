import type { Meta, StoryObj } from '@storybook/react';

import { Frontpage } from './Frontpage';

const meta = {
  title: 'Pages/Frontpage',
  component: Frontpage,
  parameters: {},
  tags: ['autodocs'],
} satisfies Meta<typeof Frontpage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
