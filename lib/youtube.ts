import { Video } from '@/models';
import * as duration from 'duration-fns';
import moment from 'moment';

export const YOUTUBE_PATH = './.data/youtube/' as const;

export const getYoutubeId = (url: string | undefined): string | null => {
  if (!url) {
    return null;
  }
  // https://youtu.be/zAYR-i4S-ZE?si=cqtU6zExSpwMOU30

  if (url.includes('youtu.be/') && url.includes('?')) {
    return url.split('youtu.be/')[1].split('?')[0];
  }

  if (url.includes('youtube') && url.includes('v=')) {
    return url.split('v=')[1].split('&')[0].split('%')[0];
  }
  return null;
};

export const fetchWithYoutubeApi = async (
  apiKey: string | undefined,
  path: string,
  queryParams: [string, string][],
): Promise<string> => {
  if (!apiKey) {
    throw new Error('YOUTUBE_API_KEY is not set');
  }

  const qp = [...queryParams, ['key', apiKey]].map((p) => p.join('=')).join('&');
  const url = `https://www.googleapis.com/youtube/v3/${path}?${qp}`;

  console.log('📺 Downloading Youtube information', url);

  const response = await fetch(url, {
    headers: { Accept: 'application/json' },
  });

  console.log('🤔 Youtube API Response', response.ok, response.status);

  const json = await response.json();
  return JSON.stringify(json, null, 2);
};

export const convertYoutubeToVideo = (youtube: any): Video => {
  const item = youtube.items[0];
  const snippet = item.snippet;
  const contentDetails = item.contentDetails;

  console.log('💪 Converting youtube to video', item.id, snippet.title);

  return {
    id: item.id,
    title: snippet.title,
    description: snippet.description,
    publishedAt: moment(snippet.publishedAt).toISOString(),
    importedAt: moment().toISOString(),
    duration: duration.toSeconds(contentDetails.duration),
    thumbnail: snippet.thumbnails.default.url,
    source: 'youtube',
    channel: {
      id: snippet.channelId,
      name: snippet.channelTitle,
    },
  };
};
