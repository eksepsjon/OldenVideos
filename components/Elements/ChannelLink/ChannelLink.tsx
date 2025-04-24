/* eslint-disable @next/next/no-img-element */
import React from 'react';

import { VideoChannel } from '@/models';

export interface ChannelLinkProps {
  channel: VideoChannel;
}

/** Primary UI component for user interaction */
export const ChannelLink = ({ channel }: ChannelLinkProps) => {
  const channelLink = `https://www.youtube.com/channel/${channel.id}`;

  return (
    <div>
      <a href={channelLink}>
        @{channel.name}
      </a>
    </div>
  );
};
