'use client';

/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';

import { VideoItem } from '@/models';
import { shuffle } from '@/lib/util';
import { allVideos } from '@/data/videos';
import { ClipGrid } from '../ClipGrid/ClipGrid';
import { ChannelLink } from '@/components/Elements/ChannelLink/ChannelLink';
import { TimeOfVideo } from '@/components/Elements/TimeOfVideo/TimeOfVideo';
import { Card, Group, Stack, Title } from '@mantine/core';

export interface ButtonProps {
  clip: VideoItem;
}

/** Primary UI component for user interaction */
export const ClipPlayer = ({ clip }: ButtonProps) => {
  const videoId = clip.id;
  const [shuffled, setShuffled] = useState<VideoItem[]>([]);

  useEffect(() => {
    setShuffled(shuffle(allVideos).slice(0, 4));
  }, []);

  return (
    <div>
      <Stack gap="xl">
        <Card shadow="sm" padding="lg" radius="md" withBorder>
          <Card.Section>
            <iframe
              width="100%"
              height="480"
              src={`https://www.youtube.com/embed/${videoId}?&autoplay=1`}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </Card.Section>
          <Stack gap="xs">
            <Title order={2} mt="md">
              {clip.title}
            </Title>
            <Group gap="xs">
              <ChannelLink channel={clip.channel} />
              <span>-</span>
              <TimeOfVideo clip={clip} />
            </Group>
          </Stack>
        </Card>
        <Stack gap="xs">
          <Title order={3}>Other random videos</Title>
          <ClipGrid clips={shuffled} />
        </Stack>
      </Stack>
    </div>
  );
};
