import * as React from "react";
import { render, screen } from "@testing-library/react";

import { ThemeProvider, createTheme } from "@mui/material";
import lightThemeOptions from "../styles/theme/lightThemeOption";
import AboutUs from "../src/app/about/about";

describe("Page", () => {
  const lightTheme = createTheme(lightThemeOptions);

  it("renders the page", async () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <AboutUs />
      </ThemeProvider>
    );

    await screen.findByTestId("about-us");
    expect(screen.getByTestId("about-us")).toBeInTheDocument();
  });

  it("renders the top level headings", async () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <AboutUs />
      </ThemeProvider>
    );

    await screen.findByTestId("heading");
    expect(screen.getByTestId("heading")).toBeInTheDocument();
    expect(screen.getByTestId("heading")).toHaveTextContent(
      "Our Journal"
    );
  });

  it("renders the images", async () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <AboutUs />
      </ThemeProvider>
    );

    expect(screen.getByAltText("Beach view")).toBeInTheDocument();
    expect(screen.getByAltText("White mountains")).toBeInTheDocument();
    expect(screen.getByAltText("lady walking in the forest")).toBeInTheDocument();

    expect(screen.getAllByRole("img")[0]).toHaveAttribute("alt", "Beach view");
  });

  it("renders the section content", async () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <AboutUs />
      </ThemeProvider>
    );

    await screen.findByTestId("about-section");
    expect(screen.getByTestId("about-section")).toBeInTheDocument();

    await screen.findByTestId("description-section");
    expect(screen.getByTestId("description-section")).toBeInTheDocument();

    await screen.findByTestId("information-section");
    expect(screen.getByTestId("information-section")).toBeInTheDocument();
  });
});
