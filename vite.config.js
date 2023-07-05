import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://blog-server.hunger-valley.com/',
  //       ws: false,
  //       changeOrigin: true, //允许跨域
  //       pathRewrite: {
  //         '^/api': '' //请求的时候使用这个api就可以
  //       }
  //     }
  //   }
  // },
  // server: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://blog-server.hunger-valley.com',
  //       changeOrigin: true,
  //       pathRewrite: {
  //         '^/api': ''
  //       }
  //     }
  //   }
  // },
  server: {
    proxy: {
      '/api': {
        target: 'http://blog-server.hunger-valley.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    }
  }
})
