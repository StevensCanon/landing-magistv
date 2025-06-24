import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{vue,ts,js}'],
  theme: {
    extend: {
      animation: {
        spin: 'spin 2s linear infinite',
      },
    },
  },
  plugins: [],
}

export default config
