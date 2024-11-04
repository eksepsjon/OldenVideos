import type { Metadata } from 'next';
import './globals.css';

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
      <body>{children}</body>
    </html>
  );
}
