import { ClipPlayer } from '@/components/Clip/ClipPlayer/ClipPlayer';
import { Header } from '@/components/Page/Header/Header';
import { allVideos } from '@/data/videos';
import { Container } from '@mantine/core';
import React from 'react';

export async function generateStaticParams() {
  return allVideos.map((video) => ({ videoId: video.id }));
}

export default function VideoPage({ params: { videoId } }: { params: { videoId: string } }) {
  const video = allVideos.find((v) => v.id === videoId);

  if (!video) {
    return <div>Video not found</div>;
  }

  return (
    <>
      <Header />
      <Container>
        <ClipPlayer clip={video} />
      </Container>
    </>
  );
}
