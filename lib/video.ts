import { Video, VideoItem } from '@/models';
import { exists, META_PATH, readFile, VIDEO_PATH } from './file';

export const allVideos: VideoItem[] = [...(JSON.parse(readFile('data/videos.json')) as VideoItem[])];

const videoMap = new Map<string, Video>();

export const videoById = (id: string): Video | undefined => {
  if (videoMap.has(id)) {
    return videoMap.get(id);
  } else {
    const videoPath = `${VIDEO_PATH}${id}.json`;
    const metaPath = `${META_PATH}${id}.json`;

    let video = JSON.parse(readFile(videoPath));
    if (video) {
      if (exists(metaPath)) {
        const videoMeta = JSON.parse(readFile(metaPath)) as Partial<Video>;

        video = { ...video, ...videoMeta };
      }
      videoMap.set(id, video as Video);
      return video;
    }
  }
  return undefined;
};
