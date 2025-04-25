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

const formatDuration = (duration: number) => {
  const minutes = Math.floor(duration / 60);
  const seconds = duration % 60;
  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
};

/** Primary UI component for user interaction */
export const ClipThumb = ({ clip }: ButtonProps) => {
  const videoLink = `/${clip.id}`;

  const style = {
    '--bg': `url(${clip.thumbnail})`,
  } as React.CSSProperties;

  return (
    <div className="flex flex-col gap-2 p-4 bg-slate-900 rounded-sm border border-slate-800 shadow-lg">
      <a aria-hidden href={videoLink} className={classes.thumbLink} style={style}>
        <span className={classes.duration}>{formatDuration(clip.duration)}</span>
      </a>
      <a href={videoLink} className={'text-lg font-bold tracking-wide ' + classes[`title-${clip.id}`]}>
        {clip.title}
      </a>
      <div className="flex items-center gap-2">
        <ChannelLink channel={clip.channel} />
        <TimeOfVideo clip={clip} />
      </div>
    </div>
  );
};
