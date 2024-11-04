/* eslint-disable @next/next/no-img-element */
import React from 'react';

import classes from './clipPreview.module.css';
import { VideoItem } from '@/models';
import moment from 'moment';

export interface ButtonProps {
  clip: VideoItem;
}

/** Primary UI component for user interaction */
export const ClipPreview = ({ clip }: ButtonProps) => {
  const videoLink = `../${clip.id}`;
  const channelLink = `https://www.youtube.com/channel/${clip.channel.id}`;
  const relativeTime = moment(clip.publishedAt).fromNow();
  const formattedTime = moment(clip.publishedAt).format('MMMM Do YYYY');

  return (
    <div className={classes.clip}>
      <a href={videoLink} className={classes.thumbLink}>
        <img className={classes.thumbImage} src={clip.thumbnail} alt={clip.title} />
      </a>
      <a className={classes.clipLink} href={videoLink}>
        {clip.title}
      </a>
      <a className={classes.channelLink} href={channelLink}>
        {clip.channel.name}
      </a>
      <span className={classes.timestamp} title={formattedTime}>
        {relativeTime}
      </span>
    </div>
  );
};
