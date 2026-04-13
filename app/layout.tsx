import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Raheeb Ahmad | Software Engineer & Game Developer',
  description: 'Software Engineer specializing in Unity Game Development, Applied AI & LLM Tooling. Creator of EditorMind MCP and The Hawala Network.',
  keywords: ['Unity Developer', 'Game Developer', 'AI Tooling', 'MCP', 'Lahore', 'Pakistan'],
  openGraph: {
    title: 'Raheeb Ahmad | Software Engineer & Game Developer',
    description: 'Unity Game Dev | Applied AI & LLM Tooling | 50+ Games Shipped',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;400;500;600&family=Share+Tech+Mono&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
