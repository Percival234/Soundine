import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@Root': path.resolve(__dirname, 'src/Root'),
      '@Redux': path.resolve(__dirname, 'src/Redux'),
      '@Pages': path.resolve(__dirname, 'src/Pages'),
      '@Hooks': path.resolve(__dirname, 'src/Hooks'),
      '@Routes': path.resolve(__dirname, 'src/Routes'),
      '@Assets': path.resolve(__dirname, 'src/Assets'),
      '@Styles': path.resolve(__dirname, 'src/Styles'),
      '@Helpers': path.resolve(__dirname, 'src/Helpers'),
      '@UI': path.resolve(__dirname, 'src/Components/UI'),
      '@Providers': path.resolve(__dirname, 'src/Providers'),
      '@Middleware': path.resolve(__dirname, 'src/Middleware'),
      '@Components': path.resolve(__dirname, 'src/Components'),
      '@Constants': path.resolve(__dirname, 'src/Constants'),
    },
  },
});
