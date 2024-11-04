'use client';

/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';

import classes from './clipPlayer.module.css';
import { VideoItem } from '@/models';
import { shuffle } from '@/lib/util';
import { allVideos } from '@/data/videos';
import { ClipGrid } from '../ClipGrid/ClipGrid';
import moment from 'moment';

export interface ButtonProps {
  clip: VideoItem;
}

/** Primary UI component for user interaction */
export const ClipPlayer = ({ clip }: ButtonProps) => {
  const videoId = clip.id;
  const [shuffled, setShuffled] = useState<VideoItem[]>([]);

  const videoLink = `https://www.youtube.com/watch?v=${clip.id}`;
  const channelLink = `https://www.youtube.com/channel/${clip.channel.id}`;
  const relativeTime = moment(clip.publishedAt).fromNow();
  const formattedTime = moment(clip.publishedAt).format('MMMM Do YYYY');

  useEffect(() => {
    setShuffled(shuffle(allVideos).slice(0, 4));
  }, []);

  return (
    <div className={classes.clip}>
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}?&autoplay=1`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <h1>{clip.title}</h1>
      <div>
        <a className={classes.channelLink} href={channelLink}>
          {clip.channel.name}
        </a>
        &nbsp;-&nbsp;
        <span className={classes.timestamp} title={formattedTime}>
          {relativeTime}
        </span>
      </div>
      <h2>Other random videos</h2>
      <ClipGrid clips={shuffled} />
    </div>
  );
};
