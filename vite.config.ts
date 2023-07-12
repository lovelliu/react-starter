import { resolve } from 'path'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import UnoCSS from 'unocss/vite'

const pathResolve = (dir: string) => resolve(process.cwd(), '.', dir)

export default defineConfig({
  plugins: [react(), UnoCSS()],
  resolve: {
    alias: [
      { find: '@', replacement: pathResolve('src') },
      { find: '#', replacement: pathResolve('types') },
    ],
  },
})
