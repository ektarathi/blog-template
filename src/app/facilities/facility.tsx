import Image from "next/image";
import * as React from "react";

import { Grid, Typography, Container } from "@mui/material";
import {
  SectionContent,
  StyledWrapper,
  SubHeading,
  MainHeading,
} from "./facility.styled";

import airTravel from "../../../public/images/travel_air.jpeg";
import trainTravel from "../../../public/images/travel_train.jpeg";

const FacilitySection = () => {
  return (
    <StyledWrapper>
      <Container>
        <Grid container spacing={3}>
          <Grid item sm={4}>
            <Typography variant="h4" data-testid="content-heading">
              <MainHeading>We offer different ways to travel</MainHeading>
            </Typography>
            <SubHeading>
              <Typography variant="body1" data-testid="content-description">
                Travel by any means to the world. We offer different ways of
                travelling based on the user choice and requirements.
              </Typography>
            </SubHeading>
          </Grid>
          <Grid item sm={4}>
            <SectionContent>
              <Image
                src={airTravel}
                alt="Travel By Air"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 10,
                  marginBottom: 20,
                }}
              />
              <Typography variant="h6" data-testid="travel-air-heading">
                Travel by Air
              </Typography>
              <Typography variant="body2" style={{ marginTop: 15 }}>
                Air travel are separated into two general classifications:
                national/domestic and international flights. Flights from one
                point to another within the same country are domestic flights.
                Flights from a point in one country to a point within a
                different country are international flights.
              </Typography>
            </SectionContent>
          </Grid>
          <Grid item sm={4}>
            <SectionContent>
              <Image
                src={trainTravel}
                alt="Travel By Train"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 10,
                  marginBottom: 20,
                }}
              />
              <Typography variant="h6" data-testid="travel-train-heading">
                Travel by Train
              </Typography>
              <Typography variant="body2" style={{ marginTop: 15 }}>
                Rail transport (also known as train transport) is a means of
                transport that transfers passengers and goods on wheeled
                vehicles running on rails, which are incorporated in tracks.
                Rail vehicles (rolling stock) are directionally guided by the
                tracks on which they run.
              </Typography>
            </SectionContent>
          </Grid>
        </Grid>
      </Container>
    </StyledWrapper>
  );
};

export default FacilitySection;
