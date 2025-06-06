import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/CardioMind/', // Gunakan '/' untuk root domain (subdomain Railway)
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});