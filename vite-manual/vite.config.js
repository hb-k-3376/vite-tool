import { defineConfig } from 'vite';
import { resolve } from 'node:path';

const env = process.env.NODE_ENV;

//console.log(__dirname); // 루트부터 전체 패스
//console.log(resolve(__dirname, 'src')); // 루트부터 전체 패스 + /src를 설정해준다.

export default defineConfig({
  build: {
    outDir: 'docs',
  },
  server: {
    host: 'localhost',
    port: 3000,
    cors: true,
  },
  css: {
    devSourcemap: true,
    modules: {
      generateScopedName: env === 'development' ? 'css-[local]' : 'css-[hash:base64:6]',
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    },
  },
});
