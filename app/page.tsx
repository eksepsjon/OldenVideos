'use client';

import { ClipGrid } from '@/components/Clip/ClipGrid/ClipGrid';
import { allVideos } from '@/data/videos';
import { shuffle } from '@/lib/util';
import { VideoItem } from '@/models';
import { Container, Text, Title } from '@mantine/core';
import React, { useEffect, useState } from 'react';

export default function Home() {
  const newlyAdded = allVideos.sort((a, b) => b.importedAt.localeCompare(a.importedAt)).slice(0, 8);
  const [shuffled, setShuffled] = useState<VideoItem[]>([]);

  useEffect(() => {
    setShuffled(shuffle(allVideos).slice(0, 8));
  }, []);

  return (
    <Container>
      <Title order={1}>Olden Videos</Title>
      <Text>Forklare hva OldenVideos er.</Text>
      <Title order={2}>Newly added</Title>
      <ClipGrid clips={newlyAdded} />
      <Title order={2}>Random</Title>
      <ClipGrid clips={shuffled} />
    </Container>
  );
}
