import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Page from './page'
import {MainHeading, StyledButton, SubHeading} from "./page.styled";

describe("Page", () => {
    it("renders main heading", async () => {
      render(
        <Page />
      );
  
      await screen.findByTestId("main-section");
      expect(screen.getByTestId("main-section")).toBeInTheDocument();
      
    });
  });
