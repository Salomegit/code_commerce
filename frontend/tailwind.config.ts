export default {
  theme: {
    extend: {
      colors: {
        primary: "#BFAB25",
        primaryLight: "#D4C347",  // Lighter gold
        primaryDark: "#9A8F1E",

        secondary: "#6A0136",
        secondaryLight: "#8B0147", // Lighter wine
        secondaryDark: "#4A0126",  // Darker wi

        bgLight: "#FFFBEB",
        // Light gold tint
        navy: '#1a1a2e',
        deep: '#0f3460',
        orange: '#f59e0b',
        accent: '#ea580c',
        bg: '#FFFBEB',
        brand: {
          navy: '#1a1a2e',
          deep: '#0f3460',
          light: '#16213e',
          orange: '#f59e0b',
          accent: '#ea580c',
          canvas: '#f9f7f4',
          cream: '#fffbeb',
          surface: '#ffffff',
          text: {
            primary: '#1a1a1a',
            secondary: '#555555',
            muted: 'rgba(255,255,255,0.5)',
          },

        },
        fontFamily: {
          syne: ['Syne', 'sans-serif'],
          dm: ['DM Sans', 'sans-serif'],
        },

        animation: {
          'float': 'float 4s ease-in-out infinite',
          'shimmer': 'shimmer 3s linear infinite',
          'fadeUp': 'fadeUp 0.7s ease forwards',
        },
        keyframes: {
          float: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-12px)' },
          },
          shimmer: {
            '0%': { backgroundPosition: '-200% center' },
            '100%': { backgroundPosition: '200% center' },
          },
          fadeUp: {
            from: { opacity: '0', transform: 'translateY(30px)' },
            to: { opacity: '1', transform: 'translateY(0)' },
          },
          },
        },
      },
    },
  };
