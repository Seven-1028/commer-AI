import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
//按需导入element-plus
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    //element-plus配置插件
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [
        //配置element-plus采用sass样式配色系统
        ElementPlusResolver({ importStyle: "sass" })
      ],
    }),
  ],
  resolve: {
    //实际的路径转换 @->src
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        //自动导入定制化样式文件进行样式覆盖
        additionalData: `
        @use "@/styles/element/index.scss" as *;
        @use "@/styles/var.scss" as *;
        `
      }
    }
  }
})
