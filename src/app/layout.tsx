import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Fathom Production Studios | Experiential Design & Production',
  description: 'Fathom Production Studios is an experiential design and production house specializing in immersive entertainment, experiential marketing, and creative multimedia.',
  keywords: ['experiential design', 'production studio', 'immersive entertainment', 'experiential marketing', 'creative multimedia', 'brand activation', 'event production'],
  authors: [{ name: 'Fathom Production Studios' }],
  openGraph: {
    title: 'Fathom Production Studios',
    description: 'We create immersive experiences that transform spaces, captivate audiences, and leave lasting impressions.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
