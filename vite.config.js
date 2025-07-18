import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      localsConvention: 'camelCaseOnly', 
      generateScopedName: '[name]_[local]_[hash:base64:5]',
    },
  },
});