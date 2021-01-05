// Example `tailwind.config.js` file
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  prefix: 'tw-',
  important: true,
  separator: ':',
  theme: {
    screens: {
      sm: '640px',
      md: '1024px',
      lg: '1200px',
      xl: '1440px',
    },
    spacing: {
      px: '1px',
      em: '1em',
      '0': '0',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '8': '2rem',
      '10': '2.5rem',
      '12': '3rem',
      '16': '4rem',
      '20': '5rem',
      '24': '6rem',
      '32': '8rem',
      '36': '9rem',
      '40': '10rem',
      '48': '12rem',
      '56': '14rem',
      '64': '16rem',
      '72': '18rem',
      '84': '21rem',
      '96': '24rem',
      '128': '32rem',
      '10vh': '10vh',
      '20vh': '20vh',
      '30vh': '30vh',
      '40vh': '40vh',
      '50vh': '50vh',
      '60vh': '60vh',
      '70vh': '70vh',
      '80vh': '80vh',
      '90vh': '90vh',
      '1/4': '25%',
      '1/3': '33.333333%',
      '1/2': '50%',
      '2/3': '66.666666%',
      '3/4': '75%',
      'full': '100%',
    },
    extend: {
      colors: {
        'transparent': 'transparent',
        'black': '#000',
        'white': '#fff',
        'white-A50': 'rgba(255,255,255,.5)',
        social: {
          twitter: '#00aced',
          facebook: '#3b5998',
          pinterest: '#cb2027',
          linkedin: '#007bb6',
          youtube: '#bb0000',
          instagram: '#517fa4',
          vimeo: '#aad450'
        }
      },
      fontFamily: {
        //'sans': ['Montserrat', 'sans-serif'],
        //'serif': ['EB Garamond', 'serif'],
      },
      minHeight: theme => ({
        ...theme('spacing'),
      }),
      minWidth: theme => ({
        ...theme('spacing'),
      }),
      zIndex: {
        //'0': 0,
        // ...
        //'99': 99,
      },
    },
  },
  corePlugins: {
    container: false
  },
  plugins: [],
}
