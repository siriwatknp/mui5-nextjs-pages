import "@/styles/globals.css";
import { EmotionCache } from "@emotion/cache";
import {
  AppCacheProvider,
  createEmotionCache,
} from "@mui/material-nextjs/v15-pagesRouter";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import type { AppProps } from "next/app";

const clientCache = createEmotionCache({ key: "mui", enableCssLayer: true });

const theme = createTheme({
  cssVariables: true,
  modularCssLayers: "@layer theme, base, mui, components, utilities;",
  palette: {
    primary: {
      main: "#0A2540",
      light: "#425466",
      dark: "#0A1929",
    },
    secondary: {
      main: "#635BFF",
      light: "#80E9FF",
      dark: "#7A73FF",
    },
    text: {
      primary: "#0A2540",
      secondary: "#425466",
    },
    background: {
      default: "#FFFFFF",
      paper: "#F6F9FC",
    },
    grey: {
      100: "#F6F9FC",
      200: "#E3E8EE",
      300: "#C1C9D2",
      400: "#8792A2",
      500: "#697386",
      600: "#4F566B",
      700: "#3C4257",
      800: "#2A2F45",
      900: "#1A1F36",
    },
  },
  typography: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    h1: {
      fontSize: "3rem",
      fontWeight: 600,
      lineHeight: 1.2,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontSize: "2.25rem",
      fontWeight: 600,
      lineHeight: 1.25,
      letterSpacing: "-0.02em",
    },
    h3: {
      fontSize: "1.875rem",
      fontWeight: 600,
      lineHeight: 1.3,
      letterSpacing: "-0.01em",
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 600,
      lineHeight: 1.35,
      letterSpacing: "-0.01em",
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 500,
      lineHeight: 1.4,
      letterSpacing: "-0.01em",
    },
    h6: {
      fontSize: "1rem",
      fontWeight: 600,
      lineHeight: 1.5,
      letterSpacing: "-0.01em",
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.5,
      letterSpacing: "-0.01em",
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.5,
      letterSpacing: "-0.01em",
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          fontWeight: 600,
          borderRadius: 6,
          padding: "8px 16px",
          transition: "all 0.15s ease",
          boxShadow: "none",
          "&:hover": {
            boxShadow: "none",
          },
        },
        sizeLarge: {
          padding: "12px 24px",
          fontSize: "1rem",
        },
        contained: {
          backgroundColor: "#635BFF",
          color: "#FFFFFF",
          "&:hover": {
            backgroundColor: "#7A73FF",
            transform: "translateY(-1px)",
            boxShadow: "0 4px 12px rgba(99, 91, 255, 0.25)",
          },
        },
        outlined: {
          borderColor: "#E3E8EE",
          color: "#0A2540",
          backgroundColor: "#FFFFFF",
          "&:hover": {
            borderColor: "#C1C9D2",
            backgroundColor: "#F6F9FC",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)",
          border: "1px solid #E3E8EE",
          transition: "all 0.2s ease",
          "&:hover": {
            boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
            transform: "translateY(-2px)",
          },
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: 24,
          "&:last-child": {
            paddingBottom: 24,
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: "#635BFF",
          textDecoration: "none",
          fontWeight: 500,
          transition: "color 0.15s ease",
          "&:hover": {
            color: "#7A73FF",
            textDecoration: "none",
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#0A2540",
        },
        h1: {
          color: "#0A2540",
        },
        h2: {
          color: "#0A2540",
        },
        h3: {
          color: "#0A2540",
        },
        h4: {
          color: "#0A2540",
        },
        h5: {
          color: "#0A2540",
        },
        h6: {
          color: "#0A2540",
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: 24,
          paddingRight: 24,
        },
      },
    },
  },
});

export default function App({
  Component,
  pageProps,
  emotionCache = clientCache,
}: AppProps & { emotionCache?: EmotionCache }) {
  return (
    <AppCacheProvider emotionCache={emotionCache}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </AppCacheProvider>
  );
}
