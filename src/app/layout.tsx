"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import NavBar from "./components/NavBar";

import * as React from "react";
import type { AppProps } from "next/app";
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

const inter = Inter({ subsets: ["latin"] });

type LayoutProps = {
  children: React.ReactNode;
  emotionCache?: EmotionCache;
};

export default function RootLayout({
  children,
  emotionCache = clientSideEmotionCache,
}: LayoutProps) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CacheProvider value={emotionCache}>
          <ThemeProvider theme={lightTheme}>
            <CssBaseline />
            <NavBar />
            {children}
          </ThemeProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
