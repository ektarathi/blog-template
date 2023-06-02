import * as React from "react";
import { render, screen } from "@testing-library/react";
import Feature from "../src/app/features/feature";

import { ThemeProvider, createTheme } from "@mui/material";
import lightThemeOptions from "../styles/theme/lightThemeOption";

describe("Feature Page", () => {
  const lightTheme = createTheme(lightThemeOptions);

  it("renders the page", async () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Feature />
      </ThemeProvider>
    );

    await screen.findByTestId("features");
    expect(screen.getByTestId("features")).toBeInTheDocument();
  });

  it("renders the left section content", async () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Feature />
      </ThemeProvider>
    );

    await screen.findByTestId("left-content");
    expect(screen.getByTestId("left-content")).toBeInTheDocument();

    await screen.findByTestId("left-section-heading");
    expect(screen.getByTestId("left-section-heading")).toBeInTheDocument();
    expect(screen.getByTestId("left-section-heading")).toHaveTextContent(
      "Northern countries"
    );
  });

  it("renders the middle section content", async () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Feature />
      </ThemeProvider>
    );

    await screen.findByTestId("middle-content");
    expect(screen.getByTestId("middle-content")).toBeInTheDocument();

    await screen.findByTestId("middle-section-heading");
    expect(screen.getByTestId("middle-section-heading")).toBeInTheDocument();
    expect(screen.getByTestId("middle-section-heading")).toHaveTextContent(
      "Southern countries"
    );
  });

  it("renders the right section content", async () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Feature />
      </ThemeProvider>
    );

    await screen.findByTestId("right-content");
    expect(screen.getByTestId("right-content")).toBeInTheDocument();

    await screen.findByTestId("right-section-heading");
    expect(screen.getByTestId("right-section-heading")).toBeInTheDocument();
    expect(screen.getByTestId("right-section-heading")).toHaveTextContent(
      "Eastern countries"
    );
  });
});
