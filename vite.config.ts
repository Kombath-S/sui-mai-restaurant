import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/sui-mai-restaurant/",
  server: {
    // Configuration pour la gestion des fichiers statiques
    fs: {
      // permet d'accéder aux fichiers du dossier public
      allow: ['.', '..'],
    },
  },
  build: {
    outDir: 'public'
  }
})
