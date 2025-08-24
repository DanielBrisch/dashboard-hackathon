import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/olho-no-campo/', 
  plugins: [react()],
})
