'use client';

/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';

import { VideoItem } from '@/models';
import { shuffle } from '@/lib/util';
import { allVideos } from '@/data/videos';
import { ChannelLink } from '@/components/Elements/ChannelLink/ChannelLink';
import { TimeOfVideo } from '@/components/Elements/TimeOfVideo/TimeOfVideo';
import { IconDice3 } from '@tabler/icons-react';
import { ClipThumb } from '../ClipThumb/ClipThumb';

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
      <div>
        <div className="mx-auto w-full max-w-7xl shadow-2xl shadow-slate-600/10 rounded-lg overflow-hidden">
          <iframe
            width="100%"
            height="480"
            src={`https://www.youtube.com/embed/${videoId}?&autoplay=1`}
            frameBorder="0"
            allowFullScreen
          ></iframe>
        </div>
        <div className="mx-auto w-full max-w-7xl gap-2 p-4 flex flex-col">
          <h2 className="text-3xl">{clip.title}</h2>
          <div className="flex items-center gap-2">
            <ChannelLink channel={clip.channel} />
            <TimeOfVideo clip={clip} />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 mx-auto w-full max-w-7xl p-8 mb-32">
        <h2 className="text-2xl tomorrow-regular mb-1 mt-8 text-blue-400 flex gap-4 items-center text-shadow-lg">
          <IconDice3 />
          <span>Other random videos</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {shuffled.map((clip) => {
            return <ClipThumb key={clip.id} clip={clip} />;
          })}
        </div>
      </div>
    </div>
  );
};
