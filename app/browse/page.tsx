'use client';

import { Header } from '@/components/Page/Header/Header';
import { allVideos } from '@/data/videos';
import React from 'react';
import { IconList } from '@tabler/icons-react';
import { ClipItem } from '@/components/Clip/ClipItem/ClipItem';

export default function VideoPages() {
  const videos = allVideos.sort((a, b) => a.publishedAt.localeCompare(b.publishedAt));

  return (
    <>
      <Header hideBrowse />
      <div className="mx-auto w-full max-w-7xl mb-32">
        <div className="flex flex-col gap-4">
          <h2 className="text-4xl tomorrow-regular text-blue-200 flex gap-4 items-center text-shadow-lg p-4">
            <IconList />
            <span>Browse</span>
          </h2>
          <div className="px-4 flex flex-col gap-2 w-full">
            {videos.map((video) => (
              <ClipItem clip={video} key={video.id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
