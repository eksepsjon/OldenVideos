import { existsSync, readFileSync, writeFileSync } from 'fs';

export const VIDEO_PATH = 'data/processed/' as const;
export const META_PATH = 'data/meta/' as const;

export const writeIfNotExists = async (path: string, contentCallback: () => Promise<string>) => {
  if (existsSync(path)) {
    console.log('🆗 File exists:', path);
    return Promise.resolve(readFile(path));
  }
  console.log('🆗 Does not exist:', path);
  const content = await contentCallback();
  writeFileSync(path, content);
  return content;
};

export const writeFile = async (path: string, content: string) => {
  console.log('🆗 Write:', path);
  writeFileSync(path, content);
  return content;
};

export const exists = (path: string) => {
  return existsSync(path);
};

export const readFile = (path: string) => {
  console.log('🆗 Read:', path);

  return readFileSync(path, { encoding: 'utf8', flag: 'r' });
};
