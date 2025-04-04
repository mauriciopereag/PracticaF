import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
    return {
        base: mode === 'production' ? '/PracticaF/' : '/',
        plugins: [react()],
    }
})