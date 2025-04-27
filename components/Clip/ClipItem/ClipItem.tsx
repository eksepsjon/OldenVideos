/* eslint-disable @next/next/no-img-element */
import React from 'react';

import classes from '../ClipThumb/clipThumb.module.css';
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
export const ClipItem = ({ clip }: ButtonProps) => {
  const videoLink = `/${clip.id}`;

  const style = {
    '--bg': `url(${clip.thumbnail})`,
  } as React.CSSProperties;

  return (
    <div className="flex bg-slate-900 rounded-sm border border-slate-800 shadow-lg gap-2 items-center px-2">
      <Link aria-hidden href={videoLink} className={classes.itemLink} style={style}></Link>
      <div className="flex flex-grow grow-1 flex-col p-4 py-2 gap-2">
        <Link href={videoLink} className={'text-lg font-bold tracking-wide ' + classes[`title-${clip.id}`]}>
          {clip.title}
        </Link>
        <div className="flex items-center gap-2">
          <ChannelLink channel={clip.channel} />
          <TimeOfVideo clip={clip} />
          <span className="text-gray-400">{formatDuration(clip.duration)}</span>
        </div>
      </div>
    </div>
  );
};
