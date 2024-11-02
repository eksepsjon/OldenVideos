import { existsSync, readFileSync, writeFileSync } from 'fs';

export const writeIfNotExists = async (path: string, contentCallback: () => Promise<string>) => {
  if (existsSync(path)) {
    console.log('File exists', path);
    return Promise.resolve(readFileSync(path, { encoding: 'utf8', flag: 'r' }));
  }
  const content = await contentCallback();
  writeFileSync(path, content);
  return content;
};
