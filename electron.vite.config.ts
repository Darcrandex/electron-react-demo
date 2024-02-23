import react from '@vitejs/plugin-react'
import { defineConfig, externalizeDepsPlugin, loadEnv } from 'electron-vite'
import { resolve } from 'path'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, './')
  console.log('env ==>', env)

  return {
    main: {
      resolve: {
        alias: {
          '@lib': resolve('src/lib')
        }
      },
      plugins: [externalizeDepsPlugin()]
    },

    preload: {
      resolve: {
        alias: {
          '@lib': resolve('src/lib')
        }
      },
      plugins: [externalizeDepsPlugin()]
    },

    renderer: {
      resolve: {
        alias: {
          '@lib': resolve('src/lib'),
          '@renderer': resolve('src/renderer/src')
        }
      },
      plugins: [react()]
    }
  }
})
