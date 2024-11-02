import 'dotenv/config';
import { convertYoutubeToVideo, fetchWithYoutubeApi, getYoutubeId } from '@/lib/youtube';
import { writeIfNotExists } from '@/lib/file';

console.log('Hello from add-video.ts');

process.argv.forEach(async (val: string, index: number) => {
  const youtubeId = getYoutubeId(val);

  if (!youtubeId) {
    return;
  }

  try {
    const ytData = await writeIfNotExists(`data/downloaded/youtube/${youtubeId}.json`, async () => {
      return fetchWithYoutubeApi(process.env.YOUTUBE_API_KEY, 'videos', [
        ['id', youtubeId],
        ['part', encodeURIComponent('snippet,contentDetails')],
      ]);
    });

    writeIfNotExists(`data/processed/${youtubeId}.json`, () => {
      return Promise.resolve(JSON.stringify(convertYoutubeToVideo(JSON.parse(ytData))));
    });
  } catch (err: any) {
    console.error(err);
  }
});
