import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

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

    await screen.findByTestId("heading");
    expect(screen.getByTestId("heading")).toBeInTheDocument();
    expect(screen.getByTestId("heading")).toHaveTextContent(
      "Our Journal"
    );
  });
});
