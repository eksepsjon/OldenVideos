import { exists, META_PATH, readFile, VIDEO_PATH, writeFile } from '@/lib/file';
import { VideoItem, convertToItem } from '@/models';
import { readdirSync } from 'fs';

const allVideos: VideoItem[] = [];

readdirSync(VIDEO_PATH)
  .filter((file) => file.endsWith('.json'))
  .forEach((file) => {
    let video = JSON.parse(readFile(`${VIDEO_PATH}${file}`));
    const metaPath = `${META_PATH}${file}`;
    if (exists(metaPath)) {
      const videoMeta = JSON.parse(readFile(metaPath));
      video = { ...video, ...videoMeta };
    }
    console.log('🎞️', video.title);
    allVideos.push(convertToItem(video));
  });

writeFile(
  'data/videos.ts',
  'import { VideoItem } from "@/models";\n\nexport const allVideos: VideoItem[] = ' +
    JSON.stringify(
      allVideos.sort((a, b) => a.publishedAt.localeCompare(b.publishedAt)),
      null,
      2,
    ) +
    ';',
);
