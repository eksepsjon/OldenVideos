'use client';

import { ClipGrid } from '@/components/Clip/ClipGrid/ClipGrid';
import { allVideos } from '@/data/videos';
import { shuffle } from '@/lib/util';
import { VideoItem } from '@/models';
import { Button, Container, Group, List, Paper, Stack, Text, ThemeIcon, Title } from '@mantine/core';
import React, { useEffect, useState } from 'react';
import classes from './frontpage.module.css';
import { Header } from '@/components/Page/Header/Header';
import { Logo } from '@/components/Elements/Logo/Logo';

export function Frontpage() {
  const newlyAdded = allVideos.sort((a, b) => b.importedAt.localeCompare(a.importedAt)).slice(0, 8);
  const [shuffled, setShuffled] = useState<VideoItem[]>([]);

  useEffect(() => {
    setShuffled(shuffle(allVideos).slice(0, 8));
  }, []);

  return (
    <>
      <Header />
      <Container size="lg">
        <Paper mt="xl">Olden Videos is a curated collection of viral videos from the early days of the internet.</Paper>
        <Stack gap="xl" mt="lg">
          <Stack gap="lg" mt="lg">
            <Title order={2}>Newly added</Title>
            <ClipGrid clips={newlyAdded} />
          </Stack>
          <Stack gap="lg" mt="lg">
            <Title order={2}>Random</Title>
            <ClipGrid clips={shuffled} />
          </Stack>
        </Stack>
      </Container>
    </>
  );
}
