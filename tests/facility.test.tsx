import * as React from "react";
import { render, screen } from "@testing-library/react";
import Facility from "../src/app/facilities/facility";

import { ThemeProvider, createTheme } from "@mui/material";
import lightThemeOptions from "../styles/theme/lightThemeOption";

import "intersection-observer";

jest.mock('next/image', () => ({
    __esModule: true,
    default: (props: any) => {
      let value = true;
      // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
      return <img {...props} priority={value.toString()} />
    },
}))
  
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
