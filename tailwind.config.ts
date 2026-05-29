import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'Georgia', 'serif'],
        body:    ['var(--font-body)', 'system-ui', 'sans-serif'],
        mono:    ['var(--font-mono)', 'monospace'],
      },
      colors: {
        gold: {
          DEFAULT: '#C9A84C',
          light:   '#E8C97A',
          dim:     '#7A6430',
        },
        obsidian: {
          DEFAULT: '#0A0A0B',
          2:       '#111113',
          3:       '#18181C',
        },
      },
      animation: {
        float:       'float 6s ease-in-out infinite',
        'glow-pulse':'glow-pulse 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config
