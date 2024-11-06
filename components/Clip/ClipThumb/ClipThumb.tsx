/* eslint-disable @next/next/no-img-element */
import React from 'react';

import classes from './clipThumb.module.css';
import { VideoItem } from '@/models';
import Link from 'next/link';
import { ChannelLink } from '../../Elements/ChannelLink/ChannelLink';
import { TimeOfVideo } from '../../Elements/TimeOfVideo/TimeOfVideo';

export interface ButtonProps {
  clip: VideoItem;
}

/** Primary UI component for user interaction */
export const ClipThumb = ({ clip }: ButtonProps) => {
  const videoLink = `/${clip.id}`;

  return (
    <div className={classes.clip}>
      <Link href={videoLink} className={classes.thumbLink}>
        <img className={classes.thumbImage} src={clip.thumbnail} alt={clip.title} />
      </Link>
      <Link href={videoLink} className={classes.clipLink}>
        {clip.title}
      </Link>
      <ChannelLink channel={clip.channel} />
      <TimeOfVideo clip={clip} />
    </div>
  );
};
