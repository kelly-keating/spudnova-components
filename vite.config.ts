import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: [
        path.resolve(__dirname, 'src/index.ts'),
        path.resolve(__dirname, 'src/styles/main.scss'),
      ],
      name: 'UIModule',
      fileName: (format) => `components.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'], // Exclude React from the bundle
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
});
