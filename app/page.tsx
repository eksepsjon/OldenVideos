'use client';

import { ClipGrid } from '@/components/ClipGrid/ClipGrid';
import { allVideos } from '@/data/videos';
import { shuffle } from '@/lib/util';
import { VideoItem } from '@/models';
import React, { useEffect, useState } from 'react';

export default function Home() {
  const newlyAdded = allVideos.sort((a, b) => b.importedAt.localeCompare(a.importedAt)).slice(0, 8);
  const [shuffled, setShuffled] = useState<VideoItem[]>([]);

  useEffect(() => {
    setShuffled(shuffle(allVideos).slice(0, 8));
  }, []);

  return (
    <div>
      <h2>Newly added</h2>
      <ClipGrid clips={newlyAdded} />
      <h2>Random</h2>
      <ClipGrid clips={shuffled} />
      <h2>All</h2>
      <ClipGrid clips={allVideos} />
    </div>
  );
}
