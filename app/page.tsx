'use client';

import { ClipGrid } from '@/components/Clip/ClipGrid/ClipGrid';
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
    <div className="container">
      <h1 className="title is-1">Olden Videos</h1>
      <p>Forklare hva OldenVideos er.</p>
      <h2 className="title is-2">Newly added</h2>
      <ClipGrid clips={newlyAdded} />
      <h2 className="title is-2">Random</h2>
      <ClipGrid clips={shuffled} />
    </div>
  );
}
