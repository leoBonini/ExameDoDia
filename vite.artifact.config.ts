import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { viteSingleFile } from 'vite-plugin-singlefile'

// Build alternativo que gera um único arquivo HTML autocontido (JS e CSS
// inline), usado para publicar como Artifact ou abrir localmente sem
// servidor. O build normal (vite.config.ts) continua multi-arquivo.
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss(), viteSingleFile()],
  build: {
    outDir: 'dist-artifact',
  },
})
