/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        // Premium Brand Colors
        brand: {
          primary: '#4F46E5',      // Vivid indigo - main CTAs, buttons, links
          secondary: '#6366F1',    // Lighter indigo - secondary actions, hovers
        },
        // Dark Backgrounds
        dark: {
          primary: '#0E1428',      // Main dark background
          secondary: '#19203B',    // Alternate dark for depth
        },
        // Light Backgrounds
        light: {
          primary: '#F8FAFC',      // Section backgrounds
          secondary: '#FFFFFF',    // Card backgrounds
        },
        // Text Colors
        text: {
          primary: '#1E293B',      // Primary text on light backgrounds
          secondary: '#475569',    // Secondary text on light backgrounds
          light: '#E5E7EB',        // Light text on dark backgrounds
          white: '#FFFFFF',        // White text on dark backgrounds
        },
        // Borders & Dividers
        border: {
          DEFAULT: '#CBD5E1',      // Default border color
          light: '#E2E8F0',        // Lighter borders
        },
        // Legacy support (keep for backward compatibility)
        primary: {
          500: '#4F46E5',
          600: '#4338CA',
          700: '#3730A3',
          50: '#EEF2FF',
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          md: '2rem',
          lg: '3rem',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        heading: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in': 'fadeIn 0.6s ease-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

