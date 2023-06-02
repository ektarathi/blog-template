import * as React from "react";
import { render, screen } from "@testing-library/react";
import Facility from "../src/app/facilities/facility";

import { ThemeProvider, createTheme } from "@mui/material";
import lightThemeOptions from "../styles/theme/lightThemeOption";

import "intersection-observer";

describe("Facility Page", () => {
  const lightTheme = createTheme(lightThemeOptions);

  it("renders the facility page", async () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <Facility />
      </ThemeProvider>
    );

    await screen.findByTestId("facility");
    expect(screen.getByTestId("facility")).toBeInTheDocument();
  });
});
