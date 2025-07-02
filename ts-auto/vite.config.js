import { defineConfig } from 'vite';
//vite-env.d.ts 덕분에 vite에 대한 인리센스를 사용 가능하다.
export default defineConfig({
  css: {
    modules: {},
  },
  build: {
    outDir: 'dist',
  },
});
