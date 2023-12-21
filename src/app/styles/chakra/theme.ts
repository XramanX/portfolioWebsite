import { extendTheme, type ThemeConfig, theme as base  } from "@chakra-ui/react";
const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: true,
};

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        backgroundImage: "linear-gradient(to bottom, #000000, #222222)",
        color: "white",
      },
      a: {
        color: "teal.500",
        _hover: {
          textDecoration: "underline",
        },
      },
    },
  },
  colors: {
    brand: {
      primary: "#0E162E",
      secondary: "#332f2f",
      tertiary: "#2b2a2a",
      quaternary: "#101E42",
      quinary: "#222121",
      teal:"#4DB6AC",
      ghost:"#8B9CBA",
      skillTextColor:"#5BE3CF",
      skillBgColor:"#183452",
      mintGreen:"#CCF381",
      darkBlue:"#183452",
      vibrantPurple:"#4831D4",
      white:"#fff",
      lavender:"#BF94E4"
    },
  },
  config,
  fonts: {
    body: "Poppins, sans-serif",
    heading: "Poppins, sans-serif",
    // mono: "Menlo, monospace",
    anton: `'Anton', sans-serif`,
  },
  fontSizes: {
    xs: "12px",
    sm: "0.875rem",
    md: "0.95rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "2.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
  lineHeights: {
    normal: "normal",
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: "2",
    "3": ".75rem",
    "4": "1rem",
    "5": "1.25rem",
    "6": "1.5rem",
    "7": "1.75rem",
    "8": "2rem",
    "9": "2.25rem",
    "10": "2.5rem",
  },
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
});
