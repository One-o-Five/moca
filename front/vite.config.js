import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/rental': {
        target: 'http://mocaapp.net',
        changeOrigin: true,
        secure: false,
      },
      '/api': {
        target: 'http://mocaapp.net',
        changeOrigin: true,
        secure: false,
      }
    }
  },
  base: './'
})