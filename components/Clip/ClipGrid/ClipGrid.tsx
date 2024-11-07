/* eslint-disable @next/next/no-img-element */
import React from 'react';

import { VideoItem } from '@/models';
import { ClipThumb } from '../ClipThumb/ClipThumb';
import { Grid } from '@mantine/core';

export interface ButtonProps {
  clips: VideoItem[];
}

/** Primary UI component for user interaction */
export const ClipGrid = ({ clips }: ButtonProps) => {
  return (
    <Grid>
      {clips.map((clip) => {
        return (
          <Grid.Col span={{ base: 6, xs: 4, sm: 3 }}>
            <ClipThumb key={clip.id} clip={clip} />
          </Grid.Col>
        );
      })}
    </Grid>
  );
};
