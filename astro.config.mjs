// @ts-check
import { defineConfig } from 'astro/config'

import react from '@astrojs/react'
import tailwindcss from '@tailwindcss/vite'

import node from '@astrojs/node'

export default defineConfig({
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()]
  },
  output: 'server',
  security: {
    checkOrigin: true
  },
  adapter: node({
    mode: 'standalone'
  })
})
