import { META_PATH, readFile, VIDEO_PATH, writeFile, writeIfNotExists } from '@/lib/file';
import { convertYoutubeToVideo, YOUTUBE_PATH } from '@/lib/youtube';
import { Video } from '@/models';
import { readdirSync } from 'fs';

readdirSync(YOUTUBE_PATH)
  .filter((file) => file.endsWith('.json'))
  .forEach(async (file) => {
    const youtube = JSON.parse(readFile(`${YOUTUBE_PATH}${file}`));
    console.log('💪 Reconverting', file);

    const processedData = await writeIfNotExists(`${VIDEO_PATH}${file}`, () =>
      Promise.resolve(JSON.stringify(convertYoutubeToVideo(youtube), null, 2)),
    );

    writeIfNotExists(`${META_PATH}${file}`, () => {
      const processed = JSON.parse(processedData) as Video;

      return Promise.resolve(JSON.stringify({ importedAt: processed.importedAt }, null, 2));
    });
  });
