import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.js',
  },
  build: {
        outDir: 'dist', // Ensure this matches your deployment output directory
    },
  server: {
    proxy: {
      '/api': {
        // target: 'http://localhost:3000', // Development
        target: 'https://nfl-website-beta.vercel.app', // Production
        changeOrigin: true,
      },
    },
  },
});
