'use client';

/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';

import { VideoItem } from '@/models';
import { shuffle } from '@/lib/util';
import { allVideos } from '@/data/videos';
import { ClipGrid } from '../ClipGrid/ClipGrid';
import { ChannelLink } from '@/components/Elements/ChannelLink/ChannelLink';
import { TimeOfVideo } from '@/components/Elements/TimeOfVideo/TimeOfVideo';

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
        <div>
          <div>
            <iframe
              width="100%"
              height="480"
              src={`https://www.youtube.com/embed/${videoId}?&autoplay=1`}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div>
            <h2>
              {clip.title}
            </h2>
            <div>
              <ChannelLink channel={clip.channel} />
              <span>-</span>
              <TimeOfVideo clip={clip} />
            </div>
          </div>
        </div>
        <div>
          <h3>Other random videos</h3>
          <ClipGrid clips={shuffled} />
        </div>
      </div>
    </div>
  );
};
