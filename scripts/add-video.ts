import 'dotenv/config';
import { convertYoutubeToVideo, fetchWithYoutubeApi, getYoutubeId, YOUTUBE_PATH } from '@/lib/youtube';
import { META_PATH, VIDEO_PATH, writeIfNotExists } from '@/lib/file';
import { Video } from '@/models';

console.log(
  'Importing Youtube videos',
  process.argv.filter((val, index) => index > 1),
);

process.argv.forEach(async (val: string, index: number) => {
  const youtubeId = getYoutubeId(val);

  if (!youtubeId) {
    return;
  }

  try {
    const ytData = await writeIfNotExists(`${YOUTUBE_PATH}${youtubeId}.json`, async () => {
      return fetchWithYoutubeApi(process.env.YOUTUBE_API_KEY, 'videos', [
        ['id', youtubeId],
        ['part', encodeURIComponent('snippet,contentDetails')],
      ]);
    });

    const processedData = await writeIfNotExists(`${VIDEO_PATH}${youtubeId}.json`, () => {
      return Promise.resolve(JSON.stringify(convertYoutubeToVideo(JSON.parse(ytData)), null, 2));
    });

    writeIfNotExists(`${META_PATH}${youtubeId}.json`, () => {
      const processed = JSON.parse(processedData) as Video;

      return Promise.resolve(
        JSON.stringify({ importedAt: processed.importedAt, publishedAt: processed.publishedAt }, null, 2),
      );
    });
  } catch (err: any) {
    console.error(err);
  }
});
