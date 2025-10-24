import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
   tailwindcss()
  ],
  theme: {
    extend: {
      animation: {
        'marquee-rtl': 'marquee-rtl 30s linear infinite',
        'marquee-ltr': 'marquee-ltr 30s linear infinite',
      },
      keyframes: {
        'marquee-rtl': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'marquee-ltr': {
          '0%': { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
      }
    }
  }
})

