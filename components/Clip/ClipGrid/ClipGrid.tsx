/* eslint-disable @next/next/no-img-element */
import React from 'react';

import classes from './clipGrid.module.css';
import { VideoItem } from '@/models';
import { ClipThumb } from '../ClipThumb/ClipThumb';

export interface ButtonProps {
  clips: VideoItem[];
}

/** Primary UI component for user interaction */
export const ClipGrid = ({ clips }: ButtonProps) => {
  return (
    <div className={classes.gridContainer}>
      <div className={classes.grid}>
        {clips.map((clip) => {
          return <ClipThumb key={clip.id} clip={clip} />;
        })}
      </div>
    </div>
  );
};
