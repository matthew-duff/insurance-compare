/** @type {import('tailwindcss').Config} */

export default {
  content: [
    './src/**/*.{html,js,svelte}',
  ],
  theme: {
    extend: {
      colors: {
        // 🌊 Primary Colours (Blue Tones)
        primary: {
          light: 'hsl(200, 70%, 90%)', // Soft pale blue
          DEFAULT: 'hsl(204, 35.20%, 50.20%)', // Muted blue
          dark: 'hsl(210, 100%, 10%)', // Bold deep blue
        },
        // 🌌 Secondary Colours (Complementary Blues)
        secondary: {
          light: 'hsl(200, 10%, 91%)', // Soft pale grey
          DEFAULT: 'hsl(0, 0.00%, 52.20%)', // Muted grey
          dark: 'hsl(210, 10%, 12%)', // Bold deep grey
        },
        // 🌒 Dark Shades
        dark: {
          blue: 'hsl(204, 100%, 14%)', // Rich midnight blue
          black: 'hsl(205, 100%, 8%)', // Almost black with a blue tint
        },
        // 🎨 Neutral Colours
        neutral: {
          white: 'hsl(0, 0%, 100%)', // Pure white
          offwhite: 'hsl(210, 20%, 96%)', // Light greyish blue
          grey: 'hsl(210, 16%, 88%)', // Neutral light grey
          black: 'hsl(0, 0%, 16%)', // Neutral dark grey/black
        },
        // 🎉 Accent Colours
        accent: {
          success: 'hsl(120, 39%, 53%)', // Fresh green
          danger: 'hsl(4, 70%, 53%)', // Alert red
          warning: 'hsl(39, 100%, 60%)', // Warm amber
          info: 'hsl(204, 100%, 37%)', // Brighter blue for highlights
        },
      },
      fontSize: {
        // 📏 Customise default font sizes
        xs: '0.625', // 10px
        sm: '0.75rem', // 12px
        base: '0.875rem', // 14px
        lg: '1rem', // 16
        xl: '1.125rem', // 20px
        '2xl': '1.25rem', // 24px
        '3xl': '1.5rem', // 30px
        '4xl': '1.875rem', // 36px
        '5xl': '2.25rem', // 48px
        '6xl': '3rem', // 60px
      },
      fontWeight: {
        normal: 400,
        medium: 500,
        bold: 700,
      },
      lineHeight: {
        tight: '1.25',
        snug: '1.375',
        normal: '1.5',
        relaxed: '1.625',
        loose: '2',
      },
    },
  },
  plugins: [
  ],
};
