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
    outDir: '../dist', // Ensure this matches the output directory
    rollupOptions: {
      external: ['react-router-dom'], // Add this line
      input: '/src/index.js'
    }
  }
})
