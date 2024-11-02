import { Video, VideoItem } from '@/models';
import { readFile, VIDEO_PATH } from './file';

export const allVideos: VideoItem[] = [...(JSON.parse(readFile('data/videos.json')) as VideoItem[])];

const videoMap = new Map<string, Video>();

export const videoById = (id: string): Video | undefined => {
  if (videoMap.has(id)) {
    return videoMap.get(id);
  } else {
    const video = JSON.parse(readFile(`${VIDEO_PATH}${id}.json`)) as Video;
    if (video) {
      videoMap.set(id, video);
      return video;
    }
  }
  return undefined;
};
