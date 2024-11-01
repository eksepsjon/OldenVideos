import 'dotenv/config';
import { writeFileSync, existsSync, readFileSync } from 'fs';
import { convertYoutubeToVideo, fetchWithYoutubeApi, getYoutubeId } from '@/lib/youtube';

console.log('Hello from add-video.ts');

const writeIfNotExists = async (path: string, contentCallback: () => Promise<string>) => {
  if (existsSync(path)) {
    console.log('File exists', path);
    return Promise.resolve(readFileSync(path, { encoding: 'utf8', flag: 'r' }));
  }
  const content = await contentCallback();
  writeFileSync(path, content);
  return content;
};

process.argv.forEach(async (val: string, index: number) => {
  const youtubeId = getYoutubeId(val);

  if (!youtubeId) {
    return;
  }

  try {
    const ytData = await writeIfNotExists(`data/youtube/${youtubeId}.yt.json`, async () => {
      return fetchWithYoutubeApi(process.env.YOUTUBE_API_KEY, 'videos', [
        ['id', youtubeId],
        ['part', encodeURIComponent('snippet,contentDetails')],
      ]);
    });

    writeIfNotExists(`data/youtube/${youtubeId}.fr.json`, () => {
      return Promise.resolve(JSON.stringify(convertYoutubeToVideo(JSON.parse(ytData))));
    });
  } catch (err: any) {
    console.error(err);
  }
});
