import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,  // Enable polling
      interval: 1000     // Check every 1 second
    },
    hmr: {
      overlay: true
    }
  }
})