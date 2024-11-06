/* eslint-disable @next/next/no-img-element */
import React from 'react';

import classes from './channelLink.module.css';
import { VideoChannel } from '@/models';
import Link from 'next/link';

export interface ChannelLinkProps {
  channel: VideoChannel;
}

/** Primary UI component for user interaction */
export const ChannelLink = ({ channel }: ChannelLinkProps) => {
  const channelLink = `https://www.youtube.com/channel/${channel.id}`;

  return (
    <Link href={channelLink} className={classes.channelLink}>
      {channel.name}
    </Link>
  );
};
