import type { Metadata } from 'next';
import './globals.css';

import SmoothScroll from './components/content/SmoothScroll';
import CursorGlow from './components/content/CursorGlow';

export const metadata: Metadata = {
  title: 'Akash S — Full Stack Developer',
  description:
    'Full Stack Developer & CSE Student focused on building scalable web applications and modern user experiences.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />

        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@400;500;600;700&family=Fira+Code:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>

      <body
        style={{
          background: '#0a0a0a',
          color: '#fff',
          overflowX: 'hidden',
        }}
      >
        {/* Smooth Scroll */}
        <SmoothScroll />

        {/* Mouse Glow */}
        <CursorGlow />

        {/* Noise Overlay */}
        <div className="noise" />

        {/* Main Content */}
        {children}
      </body>
    </html>
  );
}