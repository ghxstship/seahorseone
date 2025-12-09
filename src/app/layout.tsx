import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Fvthom Production Studios | Experiential Design & Production',
  description: 'Fvthom Production Studios is an experiential design and production house specializing in immersive entertainment, experiential marketing, and creative multimedia.',
  keywords: ['experiential design', 'production studio', 'immersive entertainment', 'experiential marketing', 'creative multimedia', 'brand activation', 'event production'],
  authors: [{ name: 'Fvthom Production Studios' }],
  openGraph: {
    title: 'Fvthom Production Studios',
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
