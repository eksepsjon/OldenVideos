'use client';

import { ClipGrid } from '@/components/Clip/ClipGrid/ClipGrid';
import { allVideos } from '@/data/videos';
import { shuffle } from '@/lib/util';
import { VideoItem } from '@/models';
import React, { useEffect, useState } from 'react';
import { IconBrandGithub, IconCoffee } from '@tabler/icons-react';
import { ClipThumb } from '@/components/Clip/ClipThumb/ClipThumb';

export function Frontpage() {
  const newlyAdded = allVideos.sort((a, b) => b.importedAt.localeCompare(a.importedAt)).slice(0, 8);
  const [shuffled, setShuffled] = useState<VideoItem[]>([]);

  useEffect(() => {
    setShuffled(shuffle(allVideos).slice(0, 4));
  }, []);

  return (
    <>
      <div className="flex flex-col gap-4 mx-auto w-full max-w-7xl justify-stretch md:flex-row">
        <div className="flex-grow grow-1 p-8 flex flex-col justify-center bg-gray-900 text-white border-b-16 border-blue-900">
          <h1 className="text-6xl tomorrow-regular">Olden Videos</h1>
          <p className="text-2xl mt-4 mb-16">Viral videos from the early days of the internet</p>
          <div className="flex items-center gap-4">
            <a
              href="https://buymeacoffee.com/eksepsjon"
              className="flex items-center gap-2 px-4 py-2 hover:bg-gray-800"
            >
              <IconCoffee className="flex-shrink-0" />
              <span>Buy me a coffee</span>
            </a>
            <a
              href="https://github.com/eksepsjon/nostalgia-clip#contribute"
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white"
            >
              <IconBrandGithub className="flex-shrink-0" />
              Contribute
            </a>
          </div>
        </div>
        <div className="flex-grow grow-1 p-8">
          <h2 className="text-4xl tomorrow-regular mb-8">Random</h2>
          <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4`}>
            {shuffled.map((clip) => {
              return <ClipThumb key={clip.id} clip={clip} />;
            })}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 mx-auto w-full max-w-7xl p-8">
        <h2 className="text-4xl tomorrow-regular mb-8">Newly added</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {newlyAdded.map((clip) => {
            return <ClipThumb key={clip.id} clip={clip} />;
          })}
        </div>
      </div>
    </>
  );
}
