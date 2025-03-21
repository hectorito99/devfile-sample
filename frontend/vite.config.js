import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    host: "0.0.0.0",
    strictPort: true,
    allowedHosts: ["hector-martin-martin-nodejs-code-redirect-3.apps.rm1.0a51.p1.openshiftapps.com"]
  }
})