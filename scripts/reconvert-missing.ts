import { readFile, VIDEO_PATH, writeFile, writeIfNotExists } from '@/lib/file';
import { convertYoutubeToVideo, YOUTUBE_PATH } from '@/lib/youtube';
import { readdirSync } from 'fs';

readdirSync(YOUTUBE_PATH)
  .filter((file) => file.endsWith('.json'))
  .forEach((file) => {
    const youtube = JSON.parse(readFile(`${YOUTUBE_PATH}${file}`));
    console.log('Reconverting', file);

    writeIfNotExists(`${VIDEO_PATH}${file}`, () =>
      Promise.resolve(JSON.stringify(convertYoutubeToVideo(youtube), null, 2)),
    );
  });
