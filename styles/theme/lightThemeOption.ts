import { ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    greenGradient: Palette['primary'];
    redGradient: Palette['primary'];
    blueGradient: Palette['primary'];
  }

  interface PaletteOptions {
    greenGradient: PaletteOptions['primary'];
    redGradient: PaletteOptions['primary'];
    blueGradient: PaletteOptions['primary'];
  }
}

const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#ffffff',
      light: '#808080',
      dark: '#444444'
    },
    secondary: {
      main: '#8d97ad',
      dark: '#000000'
    },
    greenGradient: {
      main: "#2bdc9d",
      light: "#1dc9cb"
    },
    redGradient: {
      main: "#ff4f7b",
      light: "#ff695c",
    },
    blueGradient: {
      main: "#188ef4",
      light: "#306de8"
    }
  },
};

export default lightThemeOptions;