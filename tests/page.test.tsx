import * as React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Page from "../src/app/page";

import { ThemeProvider, createTheme } from "@mui/material";
import lightThemeOptions from "../styles/theme/lightThemeOption";

describe("Page", () => {
  const lightTheme = createTheme(lightThemeOptions);

  it("renders the page", async () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Page />
      </ThemeProvider>
    );

    await screen.findByTestId("main-section");
    expect(screen.getByTestId("main-section")).toBeInTheDocument();

    await screen.findByTestId("main-heading");
    expect(screen.getByTestId("main-heading")).toBeInTheDocument();
    expect(screen.getByTestId("main-heading")).toHaveTextContent(
      "Travel With Us"
    );

    await screen.findByTestId("sub-heading");
    expect(screen.getByTestId("sub-heading")).toBeInTheDocument();
    expect(screen.getByTestId("sub-heading")).toHaveTextContent(
      "Explore the world in any direction"
    );
  });

  it("fires onClick function successfully", async () => {
    const onClick = jest.fn();
    render(
      <ThemeProvider theme={lightTheme}>
        <Page />
      </ThemeProvider>
    );

    const button = screen.getAllByRole('button')[0];
    fireEvent.click(button);

    expect(button).toHaveTextContent("Buy Now");
    expect(screen.getAllByRole('button')[1]).toHaveTextContent("Ways to travel");
  });
});
