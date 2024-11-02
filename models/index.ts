export type VideoItem = {
  id: string;
  title: string;
  publishedAt: string;
  duration: number;
  thumbnail: string;
  source: 'youtube';
};

export type Video = VideoItem & {
  description: string;
};

export const convertToItem = (video: Video): VideoItem => {
  const { description, ...item } = video;
  return item;
};
