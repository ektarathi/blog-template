"use client";

import "./globals.css";
import * as React from "react";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import createEmotionCache from "../../utility/createEmotionCache";
import lightThemeOptions from "../../styles/theme/lightThemeOption";

const clientSideEmotionCache = createEmotionCache();
const lightTheme = createTheme(lightThemeOptions);

export default function RootLayout({
  children,
  params : {
    emotionCache = clientSideEmotionCache
  }
}: {
  children: React.ReactNode;
  params: {
    emotionCache?: EmotionCache;
  }
}) {
  return (
    <html lang="en">
      <body>
         <CacheProvider value={emotionCache}>
         <ThemeProvider theme={lightTheme}>
            <CssBaseline />
            {children}
          </ThemeProvider>
          </CacheProvider>
      </body>
    </html>
  );
}
