/* eslint-disable @next/next/no-img-element */
import React from 'react';

import { VideoChannel } from '@/models';
import Link from 'next/link';
import { Anchor, Text } from '@mantine/core';

export interface ChannelLinkProps {
  channel: VideoChannel;
}

/** Primary UI component for user interaction */
export const ChannelLink = ({ channel }: ChannelLinkProps) => {
  const channelLink = `https://www.youtube.com/channel/${channel.id}`;

  return (
    <Text c="dimmed">
      <Anchor href={channelLink} c="dimmed">
        @{channel.name}
      </Anchor>
    </Text>
  );
};
