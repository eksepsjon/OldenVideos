import { readFile, VIDEO_PATH, writeFile } from '@/lib/file';
import { VideoItem, convertToItem } from '@/models';
import { readdirSync } from 'fs';

const allVideos: VideoItem[] = [];

readdirSync(VIDEO_PATH)
  .filter((file) => file.endsWith('.json'))
  .forEach((file) => {
    const video = JSON.parse(readFile(`${VIDEO_PATH}${file}`));
    console.log('🎞️', video.title);
    allVideos.push(convertToItem(video));
  });

writeFile(
  'data/videos.json',
  JSON.stringify(
    allVideos.sort((a, b) => a.publishedAt.localeCompare(b.publishedAt)),
    null,
    2,
  ),
);
