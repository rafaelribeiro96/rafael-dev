/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'surface-tint': '#775925',
        'on-secondary-container': '#656464',
        'on-surface-variant': '#4E453A',
        'primary-fixed-dim': '#E8C082',
        'surface-container-highest': '#E9E1DA',
        'on-error': '#FFFFFF',
        'inverse-surface': '#34302B',
        'error-container': '#FFDAD6',
        'on-tertiary-container': '#253C5D',
        'surface-container-high': '#EFE7DF',
        'tertiary-fixed': '#D5E3FF',
        'surface-container-lowest': '#FFFFFF',
        'on-background': '#1E1B17',
        'on-surface': '#1E1B17',
        'on-tertiary-fixed': '#001C3B',
        'secondary-fixed-dim': '#C8C6C5',
        primary: '#775925',
        'surface-deep': '#1A1A1A',
        'primary-container': '#C5A065',
        'secondary-container': '#E5E2E1',
        background: '#FFFFFF',
        'on-primary-container': '#503704',
        'on-primary': '#FFFFFF',
        'on-secondary-fixed-variant': '#474646',
        'on-secondary-fixed': '#1C1B1B',
        'glow-cyan': 'rgba(197, 160, 101, 0.22)',
        'outline-variant': '#D1C5B5',
        'tertiary-container': '#90A7CE',
        surface: '#FFF8F3',
        'surface-slate': '#F5F5F7',
        'on-primary-fixed-variant': '#5D420F',
        'border-glass': 'rgba(30, 27, 23, 0.08)',
        outline: '#807668',
        'on-error-container': '#93000A',
        'surface-variant': '#E9E1DA',
        'inverse-primary': '#E8C082',
        'surface-container-low': '#FBF2EB',
        'surface-container': '#F5ECE5',
        'secondary-fixed': '#E5E2E1',
        'text-muted': '#6E6E73',
        secondary: '#5F5E5E',
        'on-tertiary': '#FFFFFF',
        'inverse-on-surface': '#F8EFE8',
        'on-tertiary-fixed-variant': '#304769',
        'surface-bright': '#FFF8F3',
        'primary-fixed': '#FFDEAC',
        'on-secondary': '#FFFFFF',
        'surface-dim': '#E1D9D1',
        error: '#BA1A1A',
        'on-primary-fixed': '#281900',
        tertiary: '#495F83',
        'tertiary-fixed-dim': '#B0C8F0',
        'bg-primary': '#FFFFFF',
        'bg-secondary': '#F5F5F7',
        'border-thin': '#E5E7EB',
        'accent-hover': '#B38F54',
        'text-secondary': '#6E6E73'
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        full: '9999px'
      },
      spacing: {
        'stack-md': '1.5rem',
        'container-max': '1200px',
        'container-wide': '1440px',
        'stack-sm': '0.5rem',
        gutter: '24px',
        'section-gap': '70px',
        'margin-page': 'clamp(16px, 3.5vw, 44px)'
      },
      maxWidth: {
        'container-max': '1200px',
        'container-wide': '1440px'
      },
      fontFamily: {
        'label-md': ['Geist', 'sans-serif'],
        'body-md': ['Inter', 'sans-serif'],
        'headline-md': ['Geist', 'sans-serif'],
        'headline-xl': ['Geist', 'sans-serif'],
        'headline-lg-mobile': ['Geist', 'sans-serif'],
        'headline-lg': ['Geist', 'sans-serif'],
        'body-lg': ['Inter', 'sans-serif']
      },
      fontSize: {
        'label-md': [
          '13px',
          {
            lineHeight: '18px',
            letterSpacing: '0.05em',
            fontWeight: '600'
          }
        ],
        'body-md': [
          '17px',
          {
            lineHeight: '27px',
            fontWeight: '400'
          }
        ],
        'headline-md': [
          '32px',
          {
            lineHeight: '40px',
            fontWeight: '600'
          }
        ],
        'headline-xl': [
          '48px',
          {
            lineHeight: '58px',
            letterSpacing: '0px',
            fontWeight: '700'
          }
        ],
        'headline-lg-mobile': [
          '32px',
          {
            lineHeight: '40px',
            letterSpacing: '0px',
            fontWeight: '700'
          }
        ],
        'headline-lg': [
          '40px',
          {
            lineHeight: '52px',
            letterSpacing: '0px',
            fontWeight: '700'
          }
        ],
        'body-lg': [
          '19px',
          {
            lineHeight: '30px',
            fontWeight: '400'
          }
        ]
      }
    }
  },
  plugins: []
};
