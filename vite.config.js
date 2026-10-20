import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Relative base so the build works on GitHub Pages under any repository name
export default defineConfig({
  plugins: [react()],
  base: './',
});
