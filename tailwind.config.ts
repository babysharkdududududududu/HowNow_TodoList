import { type Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-manrope)'],
      },
    },
    colors: {
      'white': '#ffffff',
      'gray-50': '#f8fafc',
      'gray-100': '#f1f5f9',
      'gray-200': '#e2e8f0',
      'gray-300': '#cbd5e1',
      'gray-400': '#94a3b8',
      'gray-500': '#64748b',
      'gray-600': '#475569',
      'gray-700': '#334155',
      'gray-800': '#1e293b',
      'gray-900': '#0f172a',
      'gray-950': '#020617',
      'gray-150': '#334155',
    },
    borderRadius: {
      1: '1px',
      6: '6px',
      12: '12px',
      15: '15px',
      full: '9999px',
    },
    borderWidth: {
      '1': '1px',
      '3': '3px', // Ví dụ: Thêm border-width là 3px
    },
  },
  plugins: [],
} satisfies Config
