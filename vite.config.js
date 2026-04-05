import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
/*
application.properties 설정 파일
server: {
    port: 3000
  }
*/
export default defineConfig({
  base: '/',
  plugins: [react()],
})
