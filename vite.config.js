import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
    return {
        base: mode === 'production' ? '/PracticaF/' : '/',
        plugins: [react()],
        build: {
            outDir: 'dist',
            assetsDir: 'assets',
            emptyOutDir: true,
            sourcemap: false,
            minify: 'terser',
            rollupOptions: {
                output: {
                    entryFileNames: 'assets/[name]-[hash].js',
                    chunkFileNames: 'assets/[name]-[hash].js',
                    assetFileNames: 'assets/[name]-[hash].[ext]'
                }
            }
        }
    }
})