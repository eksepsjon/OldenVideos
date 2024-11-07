/* eslint-disable @next/next/no-img-element */
import React from 'react';

import { VideoItem } from '@/models';
import moment from 'moment';
import { Text } from '@mantine/core';

export interface TimeOfVideoProps {
  clip: VideoItem;
}

/** Primary UI component for user interaction */
export const TimeOfVideo = ({ clip }: TimeOfVideoProps) => {
  const relativeTime = moment(clip.publishedAt).fromNow();
  const formattedTime = moment(clip.publishedAt).format('MMMM Do YYYY');

  return (
    <Text c="dimmed" title={formattedTime}>
      {relativeTime}
    </Text>
  );
};
