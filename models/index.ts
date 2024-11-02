export type VideoChannel = {
  id: string;
  name: string;
};

export type VideoItem = {
  id: string;
  title: string;
  publishedAt: string;
  importedAt: string;
  duration: number;
  thumbnail: string;
  source: 'youtube';
  channel: VideoChannel;
};

export type Video = VideoItem & {
  description: string;
};

export const convertToItem = (video: Video): VideoItem => {
  const { description, ...item } = video;
  return item;
};
