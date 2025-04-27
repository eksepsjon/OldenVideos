/* eslint-disable @next/next/no-img-element */
import { IconBrandGithub, IconCoffee, IconList } from '@tabler/icons-react';
import Link from 'next/link';
import React from 'react';

export interface HeaderProps {
  hideTitle?: boolean;
  hideBrowse?: boolean;
}

/** Primary UI component for user interaction */
export const Header = ({ hideTitle, hideBrowse }: HeaderProps) => {
  return (
    <div className="w-full max-w-7xl mx-auto flex justify-between items-center p-4 mt-4 mb-8">
      {!hideTitle && (
        <div className="flex items-center gap-4">
          <Link className="" href="/">
            <h1 className="text-3xl tomorrow-regular">Nostalgia Clip</h1>
          </Link>
        </div>
      )}
      <div className="flex items-center gap-4">
        <Link
          href="https://buymeacoffee.com/eksepsjon"
          className="flex items-center gap-2 px-4 py-2 hover:bg-slate-900 text-gray-300"
        >
          <IconCoffee className="flex-shrink-0" />
          <span className="hidden md:block">Buy me a coffee</span>
        </Link>
        <Link
          href="https://github.com/eksepsjon/nostalgia-clip#contribute"
          className="flex items-center gap-2 px-4 py-2 hover:bg-slate-900 text-gray-300"
        >
          <IconBrandGithub className="flex-shrink-0" />
          <span className="hidden md:block">Contribute</span>
        </Link>
      </div>
      {!hideBrowse && (
        <Link href="/browse" className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-slate-500 text-white">
          <IconList className="flex-shrink-0" />
          <span className="hidden md:block">Browse</span>
        </Link>
      )}
    </div>
  );
};
