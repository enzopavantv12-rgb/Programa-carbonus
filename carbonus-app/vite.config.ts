import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2018',
    cssCodeSplit: true,
    assetsInlineLimit: 4096,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          // React core — carrega primeiro
          if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/') || id.includes('node_modules/react-is/')) {
            return 'vendor-react'
          }
          // Framer Motion — usado no Hero e Footer
          if (id.includes('node_modules/framer-motion/')) {
            return 'vendor-motion'
          }
          // Recharts — usado só no HowItWorks (lazy)
          if (id.includes('node_modules/recharts/') || id.includes('node_modules/d3-') || id.includes('node_modules/victory-')) {
            return 'vendor-charts'
          }
          // Paper Design Shaders — usado só no Hero
          if (id.includes('node_modules/@paper-design/')) {
            return 'vendor-shaders'
          }
          // Lucide + Radix + CVA — leve, junto no vendor-ui
          if (
            id.includes('node_modules/lucide-react/') ||
            id.includes('node_modules/@radix-ui/') ||
            id.includes('node_modules/class-variance-authority/') ||
            id.includes('node_modules/clsx/') ||
            id.includes('node_modules/tailwind-merge/')
          ) {
            return 'vendor-ui'
          }
          // dotted-map — usado só no HowItWorks (lazy)
          if (id.includes('node_modules/dotted-map/')) {
            return 'vendor-maps'
          }
        },
        // Hashing de assets para cache busting
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
      },
    },
    chunkSizeWarningLimit: 600,
  },
})
