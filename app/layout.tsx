import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'WAKIKI — Branding Consultant & Creative Director',
  description:
    'WAKIKI is a branding consultant and creative director helping brands develop strategy, identity, campaigns and creative production.',
  keywords: [
    'Branding Consultant Medan',
    'Creative Director Medan',
    'Branding Consultant Jakarta',
    'Creative Director Indonesia',
    'Brand Strategy',
    'Brand Identity',
    'Creative Production',
  ],
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
