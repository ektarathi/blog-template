import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Page from '../src/app/page'

import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import lightThemeOptions from "../styles/theme/lightThemeOption";

describe("Page", () => {
    const lightTheme = createTheme(lightThemeOptions);
    
    it("renders main heading", async () => {
      render(
        <ThemeProvider theme={lightTheme}>
            <Page />
        </ThemeProvider>
        
      );
  
      await screen.findByTestId("main-section");
      expect(screen.getByTestId("main-section")).toBeInTheDocument();
      //expect(screen.getByTestId("main-section")).toHaveBeenCalledWith("Travel With Us");      

      await screen.findByTestId("main-heading");
      expect(screen.getByTestId("main-heading")).toBeInTheDocument();
      expect(screen.getByTestId("main-heading")).toHaveTextContent("Travel With Us");      
    });
  });
