'use client';

import { allVideos } from '@/data/videos';
import { shuffle } from '@/lib/util';
import { VideoItem } from '@/models';
import React, { useEffect, useState } from 'react';
import { IconAlarmPlus, IconBrandGithub, IconCoffee, IconDice, IconDice3 } from '@tabler/icons-react';
import { ClipThumb } from '@/components/Clip/ClipThumb/ClipThumb';

export function Frontpage() {
  const newlyAdded = allVideos.sort((a, b) => b.importedAt.localeCompare(a.importedAt)).slice(0, 8);
  const [shuffled, setShuffled] = useState<VideoItem[]>([]);

  useEffect(() => {
    setShuffled(shuffle(allVideos).slice(0, 4));
  }, []);

  return (
    <>
      <div className="flex flex-col gap-12 mx-auto w-full max-w-7xl justify-stretch md:flex-row">
        <div className="flex-grow grow-1 p-8 flex flex-col justify-center">
          <h1 className="text-6xl tomorrow-regular">Nostalgia Clip</h1>
          <p className="text-2xl mt-4 mb-16">Viral videos from the early days of the internet</p>
          <div className="flex items-center gap-4">
            <a
              href="https://buymeacoffee.com/eksepsjon"
              className="flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800"
            >
              <IconCoffee className="flex-shrink-0" />
              <span>Buy me a coffee</span>
            </a>
            <a
              href="https://github.com/eksepsjon/nostalgia-clip#contribute"
              className="flex items-center gap-2 px-4 py-2 bg-slate-600 hover:bg-slate-500 text-white"
            >
              <IconBrandGithub className="flex-shrink-0" />
              Contribute
            </a>
          </div>
        </div>
        <div className="flex-grow grow-1 p-8 max-w-1/2">
          <h2 className="text-4xl tomorrow-regular mb-4 text-blue-400 flex gap-4 items-center text-shadow-lg">
            <IconDice3 />
            <span>Random</span>
          </h2>
          <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4`}>
            {shuffled.map((clip) => {
              return <ClipThumb key={clip.id} clip={clip} />;
            })}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 mx-auto w-full max-w-7xl p-8 mb-32">
        <h2 className="text-4xl tomorrow-regular mb-4 mt-8 text-blue-400 flex gap-4 items-center text-shadow-lg">
          <IconAlarmPlus />
          <span>Newly added</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {newlyAdded.map((clip) => {
            return <ClipThumb key={clip.id} clip={clip} />;
          })}
        </div>
      </div>
    </>
  );
}
