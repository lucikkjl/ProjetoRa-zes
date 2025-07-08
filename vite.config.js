import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      localsConvention: 'camelCaseOnly', // ou 'dashesOnly', dependendo da sua preferência
      generateScopedName: '[name]_[local]_[hash:base64:5]',
    },
  },
});