import React from 'react';
import './globals.css';
import NavBar from './navBar';

export const metadata = {
  title: 'Personal Portfolio',
  description: 'A showcase of my projects and skills.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-white transition-colors duration-500">
        <div className="absolute inset-0 
            bg-[radial-gradient(circle_at_80%_30%,rgba(59,130,246,0.4),transparent_60%)] 
            blur-3xl opacity-70 
            pointer-events-none" />
          <NavBar />
          {children}
        </body>
    </html>
  )
}