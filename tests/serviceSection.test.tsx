import * as React from "react";
import { render, screen } from "@testing-library/react";

import { ThemeProvider, createTheme } from "@mui/material";
import lightThemeOptions from "../styles/theme/lightThemeOption";
import ServiceSection from "../src/app/components/servicesSection";

import "intersection-observer";

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...props} />
  },
}))

describe("Service Section", () => {
  const lightTheme = createTheme(lightThemeOptions);

  it("renders the page", async () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <ServiceSection />
      </ThemeProvider>
    );

    await screen.findByTestId("services-section");
    expect(screen.getByTestId("services-section")).toBeInTheDocument();
  });

  it("renders the top level headings", async () => {
    render(
      <ThemeProvider theme={lightTheme}>
        <ServiceSection />
      </ThemeProvider>
    );

    await screen.findByTestId("services-section-heading");
    expect(screen.getByTestId("services-section-heading")).toBeInTheDocument();
    expect(screen.getByTestId("services-section-heading")).toHaveTextContent(
      "Guidance And Support 24/7"
    );
  });
});
