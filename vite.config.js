import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// If you host on a custom domain or at root, set base: '/'
// If you host on GitHub Pages under a repo name, set base: '/repo-name/'
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    esbuildOptions: {
      loader: { '.js': 'jsx' } // <<--- set here
    }
  },
  base: '/', // change if needed (e.g., '/spacebeta.github.io/')
});