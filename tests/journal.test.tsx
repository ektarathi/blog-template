import * as React from "react";
import { render, screen } from "@testing-library/react";

import { ThemeProvider, createTheme } from "@mui/material";
import lightThemeOptions from "../styles/theme/lightThemeOption";
import Journal from "../src/app/journal/journal";

describe("Page", () => {
  const lightTheme = createTheme(lightThemeOptions);

  it("renders the page", async () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Journal />
      </ThemeProvider>
    );

    await screen.findByTestId("about-us");
    expect(screen.getByTestId("about-us")).toBeInTheDocument();
  });

  it("renders the top level headings", async () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Journal />
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
        <Journal />
      </ThemeProvider>
    );

    expect(screen.getByAltText("Beach view")).toBeInTheDocument();
    expect(screen.getByAltText("White mountains")).toBeInTheDocument();
    expect(screen.getByAltText("lady walking in the forest")).toBeInTheDocument();

    expect(screen.getAllByRole("img")[0]).toHaveAttribute("alt", "Beach view");
  });
});
