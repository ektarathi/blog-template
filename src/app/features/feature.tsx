import { Box, Grid, Container, Typography } from "@mui/material";
import * as React from "react";
import { StyledWrapper, LeftContent, MiddleContent, RightContent } from "./feature.styled";

const Feature = () => {
  return (
    <StyledWrapper
      data-testid="features"
      id="feature"
    >
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4}>
            <LeftContent date-testid="left-content">
              <Typography variant="h6" style={{paddingBottom: 20}}> Northern countries</Typography>
                Lorem ipsum dolor amet, consecte tempor incididunt ut labore et dolore tumber tur adipisicing elit.
            </LeftContent>
          </Grid>
          <Grid item xs={12} sm={4}>
            <MiddleContent date-testid="middle-content">
              <Typography variant="h6" style={{paddingBottom: 20}}> Southern countries</Typography>
              Lorem ipsum dolor amet, consecte tempor incididunt ut labore et dolore tumber tur adipisicing elit.
            </MiddleContent>
          </Grid>
          <Grid item xs={12} sm={4}>
            <RightContent date-testid="right-content">
              <Typography variant="h6" style={{paddingBottom: 20}}> Eastern countries</Typography>
              Lorem ipsum dolor amet, consecte tempor incididunt ut labore et dolore tumber tur adipisicing elit.
            </RightContent>
          </Grid>
        </Grid>
      </Container>
    </StyledWrapper>
  );
};

export default Feature;
