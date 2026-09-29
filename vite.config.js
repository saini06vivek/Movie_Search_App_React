import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base:"/Movie_Search_App_React/",
  plugins: [react()],
})
