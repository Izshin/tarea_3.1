import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/tarea_3.1/', // Cambia a '/nombre-del-repo/' si no usas dominio personalizado
})
