import { existsSync, readFileSync, writeFileSync } from 'fs';

export const VIDEO_PATH = 'data/processed/' as const;

export const writeIfNotExists = async (path: string, contentCallback: () => Promise<string>) => {
  if (existsSync(path)) {
    console.log('File exists', path);
    return Promise.resolve(readFile(path));
  }
  const content = await contentCallback();
  writeFileSync(path, content);
  return content;
};

export const writeFile = async (path: string, content: string) => {
  writeFileSync(path, content);
  return content;
};

export const readFile = (path: string) => {
  return readFileSync(path, { encoding: 'utf8', flag: 'r' });
};
