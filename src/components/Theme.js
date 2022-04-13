import { ThemeProvider } from "styled-components";

const theme = {
  colour: {
    primary: '#D93F3F', // red
    secondary: '#0C0C0C', // black
    base: 'white',
  },
  font: {
    size: {
      fontBase: '18px',
      extraLarge: 'clamp(3rem, 7vw, 8rem)',
      large: 'clamp(2rem, 5vw, 4rem)',
      medium: 'clamp(1.5rem, 5vw, 2.5rem)',
      small: 'clamp(1rem, 5vw, 1.5rem)',
    },
  },
  breakpoint: {
    mobile: '375px',
    tablet: '610px',
    laptop: '1200px',
    desktop: '1600px',
  },
  spacing: {
    sm: '0.5rem',
    md: '1rem',
    lg: '2rem'
  },
  fontFamily: 'Raleway, sans-serif',
  containerMaxWidths: {
    sm: '540px',
    md: '720px',
    lg: '960px',
    xl: '1140px',
    xxl: '1320px'
  }
}

const Theme = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;