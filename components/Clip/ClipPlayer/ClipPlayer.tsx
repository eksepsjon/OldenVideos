'use client';

/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';

import classes from './clipPlayer.module.css';
import { VideoItem } from '@/models';
import { shuffle } from '@/lib/util';
import { allVideos } from '@/data/videos';
import { ClipGrid } from '../ClipGrid/ClipGrid';
import moment from 'moment';
import Link from 'next/link';
import { ChannelLink } from '@/components/Elements/ChannelLink/ChannelLink';
import { TimeOfVideo } from '@/components/Elements/TimeOfVideo/TimeOfVideo';

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
    <div>
      <iframe
        width="100%"
        height="480"
        src={`https://www.youtube.com/embed/${videoId}?&autoplay=1`}
        frameBorder="0"
        allowFullScreen
      ></iframe>
      <h2 className="title is-2">{clip.title}</h2>
      <div>
        <ChannelLink channel={clip.channel} />
        &nbsp;-&nbsp;
        <TimeOfVideo clip={clip} />
      </div>
      <h3 className="title is-4">Other random videos</h3>
      <ClipGrid clips={shuffled} />
    </div>
  );
};
