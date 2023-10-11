import { defineConfig } from 'vite'

export default defineConfig({
  base: "./",
  build: {
    outDir: './docs',
    rollupOptions: {
      external: ['matter-js']
    },
  },
})
