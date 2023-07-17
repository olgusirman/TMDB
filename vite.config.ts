import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  define: {
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    'process.env.PUBLIC_URL': JSON.stringify(
      process.env.NODE_ENV === 'production' ? '/travel-miniapp-web' : '',
    ),
  },
});

console.log(process.env.PUBLIC_URL, 'process.env.PUBLIC_URL');
