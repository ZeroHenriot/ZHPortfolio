import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Permette di ascoltare su tutti gli indirizzi IP
    port: 5173, // Assicurati che sia la porta giusta
  },
})
