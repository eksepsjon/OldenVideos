import type { Metadata } from 'next';
import './globals.css';
import '@mantine/core/styles.css';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { siteTheme } from '../lib/theme';

export const metadata: Metadata = {
  title: 'Olden Videos',
  description: 'A curated collection of old videos.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={siteTheme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
