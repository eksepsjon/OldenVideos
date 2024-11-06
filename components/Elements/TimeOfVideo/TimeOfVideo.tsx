/* eslint-disable @next/next/no-img-element */
import React from 'react';

import classes from './timeOfVideo.module.css';
import { VideoItem } from '@/models';
import moment from 'moment';

export interface TimeOfVideoProps {
  clip: VideoItem;
}

/** Primary UI component for user interaction */
export const TimeOfVideo = ({ clip }: TimeOfVideoProps) => {
  const relativeTime = moment(clip.publishedAt).fromNow();
  const formattedTime = moment(clip.publishedAt).format('MMMM Do YYYY');

  return (
    <span className={classes.timestamp} title={formattedTime}>
      {relativeTime}
    </span>
  );
};
