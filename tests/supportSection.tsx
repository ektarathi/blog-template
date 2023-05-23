import * as React from "react";
import { render, screen } from "@testing-library/react";

import { ThemeProvider, createTheme } from "@mui/material";
import lightThemeOptions from "../styles/theme/lightThemeOption";
import SupportSection from "../src/app/components/supportSection";

describe("Support Section", () => {
  const lightTheme = createTheme(lightThemeOptions);

  it("renders the page", async () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <SupportSection />
      </ThemeProvider>
    );

    await screen.findByTestId("support-section");
    expect(screen.getByTestId("support-section")).toBeInTheDocument();
  });

  it("renders the top level headings", async () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <SupportSection />
      </ThemeProvider>
    );

    await screen.findByTestId("support-section-heading");
    expect(screen.getByTestId("support-section-heading")).toBeInTheDocument();
    expect(screen.getByTestId("support-section-heading")).toHaveTextContent(
      "Guidance And Support 24/7"
    );
  });
});
