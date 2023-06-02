import * as React from "react";
import { render, screen } from "@testing-library/react";

import { ThemeProvider, createTheme } from "@mui/material";
import lightThemeOptions from "../styles/theme/lightThemeOption";
import AboutUs from "../src/app/components/aboutSection";

import "intersection-observer";

describe("About Section", () => {
  const lightTheme = createTheme(lightThemeOptions);

  it("renders the page", async () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <AboutUs />
      </ThemeProvider>
    );

    await screen.findByTestId("about-section");
    expect(screen.getByTestId("about-section")).toBeInTheDocument();
  });

  it("renders the top level headings", async () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <AboutUs />
      </ThemeProvider>
    );

    await screen.findByTestId("about-section-heading");
    expect(screen.getByTestId("about-section-heading")).toBeInTheDocument();
    expect(screen.getByTestId("about-section-heading")).toHaveTextContent(
      "Memories that will last for a Life Time"
    );
  });
});
