import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry:  path.resolve(__dirname, 'packages/button/index.vue'),
      fileName: '[name]',
      formats: ['es']
    },
    rollupOptions: {
      input: {
        button: path.resolve(__dirname, 'packages/button/index.vue'),
        img: path.resolve(__dirname, 'packages/img/index.vue'),
        select: path.resolve(__dirname, 'packages/select/index.vue'),
      },
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
