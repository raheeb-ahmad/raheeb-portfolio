export type Project = {
  id: string
  title: string
  category: 'featured' | 'voodoo' | 'studio' | 'personal'
  categoryLabel: string
  description: string
  tags: string[]
  links: { label: string; url: string }[]
  stats?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    id: 'editormind',
    title: 'EditorMind MCP',
    category: 'featured',
    categoryLabel: 'OPEN SOURCE',
    description: 'AI bridge tool that connects LLMs to Unity Editor via Model Context Protocol. Self-contained binaries — no Python/Node.js prerequisites. Built for autonomous AI playtesting and game dev automation.',
    tags: ['C#', 'TypeScript', 'MCP Protocol', 'Unity', 'AI Tooling', 'LLM'],
    links: [
      { label: 'GitHub', url: 'https://github.com/raheeb-ahmad' },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/raheeb-ahmad/' },
    ],
    featured: true,
  },
  {
    id: 'hawala',
    title: 'The Hawala Network',
    category: 'featured',
    categoryLabel: 'STEAM GAME',
    description: 'Post-apocalyptic co-op FPS roguelite for 1–4 players. South Asian cultural aesthetics, low-poly dark visuals, cash-scavenging core loop. Built with Unity 6 URP.',
    tags: ['Unity 6 URP', 'FPS', 'Co-op', 'Roguelite', 'Steam', 'C#'],
    links: [
      { label: 'Steam (Coming Soon)', url: '#' },
    ],
    featured: true,
  },
  {
    id: 'light-fortress',
    title: 'Light Fortress',
    category: 'voodoo',
    categoryLabel: 'VOODOO PROTOTYPE',
    description: 'Strategically place powerful weapons to defend your tower from waves of enemies. Tower defense with deep upgrade mechanics.',
    tags: ['Unity', 'Mobile', 'Tower Defense', 'iOS'],
    links: [{ label: 'App Store', url: 'https://apps.apple.com/US/app/id6673906256' }],
  },
  {
    id: 'monkey-cannon',
    title: 'Monkey Cannon Mania',
    category: 'voodoo',
    categoryLabel: 'VOODOO PROTOTYPE',
    description: 'Control your crazy monkey as waves of enemies try to stand in your way. Wild coconut-smashing jungle action.',
    tags: ['Unity', 'Mobile', 'Arcade', 'iOS'],
    links: [{ label: 'App Store', url: 'https://apps.apple.com/US/app/id6737464231' }],
  },
  {
    id: 'capybara',
    title: 'Capybara Merge Clash',
    category: 'voodoo',
    categoryLabel: 'VOODOO PROTOTYPE',
    description: 'Merge capybara heroes, fight slimes, and master grid strategy in this fun RPG mobile game.',
    tags: ['Unity', 'Mobile', 'Merge', 'RPG', 'Android'],
    links: [{ label: 'Play Store', url: 'https://play.google.com/store/apps/details?id=com.MiniSports.capybaramergeclash' }],
  },
  {
    id: 'house-makeover',
    title: 'House Makeover',
    category: 'studio',
    categoryLabel: 'GAME DISTRICT',
    description: 'ASMR house renovation game with calming sounds and satisfying cleanup mechanics.',
    tags: ['Unity', 'Mobile', 'Hyper-casual', 'Android'],
    stats: '10M+ Downloads',
    links: [{ label: 'Play Store', url: 'https://play.google.com/store/apps/details?id=com.gps.housemakeover.satisfying.clean' }],
  },
  {
    id: 'smash-frustrating',
    title: 'Smash Frustrating Guy',
    category: 'studio',
    categoryLabel: 'GAME DISTRICT',
    description: 'Become the ultimate smasher and take on irritating characters in hilarious scenarios.',
    tags: ['Unity', 'Mobile', 'Hyper-casual', 'Android'],
    stats: '10M+ Downloads',
    links: [{ label: 'Play Store', url: 'https://play.google.com/store/search?q=smash+frustrating+guy&c=apps' }],
  },
  {
    id: 'scary-teacher',
    title: 'Scary Teacher 3D',
    category: 'studio',
    categoryLabel: 'GENITEAM',
    description: 'Contributed to new events, mechanics improvements, and mini-games for one of the most popular games on mobile.',
    tags: ['Unity', 'Mobile', 'Action', 'Android/iOS'],
    stats: '100M+ Downloads',
    links: [{ label: 'Play Store', url: 'https://play.google.com/store/apps/details?id=com.zakg.scaryteacher.hellgame' }],
  },
  {
    id: 'code-quest',
    title: 'Code Quest',
    category: 'personal',
    categoryLabel: 'PERSONAL',
    description: 'Learn the basics of C# while playing an RPG adventure game. Gamified programming education.',
    tags: ['Unity', 'Education', 'RPG', 'itch.io'],
    links: [{ label: 'itch.io', url: 'https://rfantasy.itch.io/code-quest' }],
  },
  {
    id: 'english-quest',
    title: 'English Quest',
    category: 'personal',
    categoryLabel: 'PERSONAL',
    description: 'Unique RPG English learning game combining language education with adventure gameplay.',
    tags: ['Unity', 'Education', 'RPG', 'itch.io'],
    links: [{ label: 'itch.io', url: 'https://rfantasy.itch.io/english-quest' }],
  },
]
