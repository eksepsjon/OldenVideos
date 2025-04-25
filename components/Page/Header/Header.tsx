/* eslint-disable @next/next/no-img-element */
import { IconBrandGithub, IconCoffee } from '@tabler/icons-react';
import React from 'react';

export interface HeaderProps {}

/** Primary UI component for user interaction */
export const Header = ({}: HeaderProps) => {
  return (
    <div className="w-full max-w-7xl mx-auto flex justify-between items-center p-4 mt-4 mb-8">
      <a className="" href="/">
        <h1 className="text-3xl tomorrow-regular">Nostalgia Clip</h1>
      </a>
      <div className="flex items-center gap-4">
        <a
          href="https://buymeacoffee.com/eksepsjon"
          className="flex items-center gap-2 px-4 py-2 bg-slate-900 hover:bg-slate-800"
        >
          <IconCoffee className="flex-shrink-0" />
          <span className="hidden md:block">Buy me a coffee</span>
        </a>
        <a
          href="https://github.com/eksepsjon/nostalgia-clip#contribute"
          className="flex items-center gap-2 px-4 py-2 bg-slate-600 hover:bg-slate-500 text-white"
        >
          <IconBrandGithub className="flex-shrink-0" />
          <span className="hidden md:block">Contribute</span>
        </a>
      </div>
    </div>
  );
};
