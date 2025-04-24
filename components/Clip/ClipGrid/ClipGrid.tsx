/* eslint-disable @next/next/no-img-element */
import React from 'react';

import { VideoItem } from '@/models';
import { ClipThumb } from '../ClipThumb/ClipThumb';

export interface ButtonProps {
  columns?: number;
  clips: VideoItem[];
}

/** Primary UI component for user interaction */
export const ClipGrid = ({ clips, columns = 1 }: ButtonProps) => {
  return (
    <div className={`grid grid-cols-${columns} gap-4`}>
      {clips.map((clip) => {
        return <ClipThumb key={clip.id} clip={clip} />;
      })}
    </div>
  );
};
