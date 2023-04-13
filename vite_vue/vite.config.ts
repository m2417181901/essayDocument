import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    AutoImport({
      resolvers: [
        ElementPlusResolver(),
        IconsResolver({
          prefix: 'Icon'
        })
      ],
    }),
    Components({
      resolvers: [
        ElementPlusResolver(),
        IconsResolver({
          enabledCollections: ['ep']
        })
      ],
    }),
    Icons({
      autoInstall: true
    })
  ],
  resolve: {
    alias: {
      '@': path.join(__dirname, 'src'),
      '#': path.join(__dirname, 'types')
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        math: 'always',
        globalVars: {
          mainColor: "red"
        }
      }
    }
  }
})
