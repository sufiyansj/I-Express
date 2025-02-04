import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
  base: '/vite-react-deploy/', // Ensure this matches the deployment path
  root: 'src',
  build: {
    outDir: 'dist', // Ensure this matches the publish directory
    emptyOutDir: true, // Ensure the output directory is emptied before building
    rollupOptions: {
      external: ['react-router-dom'],
      input: '/src/index.js' // Ensure this path is correct
    }
  }
})
