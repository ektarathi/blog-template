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
            <LeftContent data-testid="left-content">
              <Typography variant="h6" style={{ paddingBottom: 20 }} data-testid="left-section-heading"> Northern countries</Typography>
              Northern Europe include some or all of the following areas: British Isles, Fennoscandia, 
              the peninsula of Jutland, the Baltic plain that lies to the east, and the many islands that 
              lie offshore from mainland Northern Europe and the main European continent.
            </LeftContent>
          </Grid>
          <Grid item xs={12} sm={4}>
            <MiddleContent data-testid="middle-content">
              <Typography variant="h6" style={{ paddingBottom: 20 }} data-testid="middle-section-heading"> Southern countries</Typography>
              Southern Europe is the southern region of Europe, It is also known as Mediterranean Europe, as its geography is marked by the Mediterranean Sea. 
              It is focused on the three peninsulas located in the extreme south of the European continent.
            </MiddleContent>
          </Grid>
          <Grid item xs={12} sm={4}>
            <RightContent data-testid="right-content">
              <Typography variant="h6" style={{ paddingBottom: 20 }} data-testid="right-section-heading"> Eastern countries</Typography>
              Eastern Europe is a subregion of the European continent. As a largely ambiguous term, 
              it has a wide range of geopolitical, geographical, ethnic, cultural, and socio-economic connotations. 
              The vast majority of the region is covered by Russia.
            </RightContent>
          </Grid>
        </Grid>
      </Container>
    </StyledWrapper>
  );
};

export default Feature;
