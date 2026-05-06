/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#2563eb',
          dark: '#1d4ed8',
          ink: '#0f172a'
        }
      },
      boxShadow: {
        card: '0 10px 30px rgba(15, 23, 42, 0.08)',
        soft: '0 12px 40px rgba(15, 23, 42, 0.10)'
      },
      maxWidth: {
        prosewide: '72ch'
      }
    }
  },
  plugins: []
};
