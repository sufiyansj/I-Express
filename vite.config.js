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
  base: '/vite-react-deploy/', // Add this line
  build: {
    rollupOptions: {
      external: ['react-router-dom'] // Add this line
    }
  }
})
