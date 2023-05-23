import * as React from "react";
import Image from "next/image";

import { Box, Typography, Container, Grid } from "@mui/material";
import { MainHeading, SubTitle, InfoContent } from "./journal.styled";
import topImage from "../../../public/images/khatam-tadayon-107740-1200x796.jpg";
import leftImage from "../../../public/images/luca-bravo-121931-unsplash-1200x800.jpg";
import rightImage from "../../../public/images/sho-hatakeyama-117306-unsplash-1200x800.jpg";

// Components
import AboutSection from "../components/aboutSection";
import SupportSection from "../components/supportSection";
import ServiceSection from "../components/servicesSection";

const AboutUs = () => {
  return (
    <Box data-testid="about-us" mt={5} id="journal">
      <Container>
        <Typography variant="h4" component="h1">
          <MainHeading data-testid="heading">Our Journal</MainHeading>
        </Typography>
        <Typography variant="subtitle1">
          <SubTitle data-testid="subtitle">
            We are passionate about crafting unforgettable travel experiences{" "}
            <br />
            that take you on a journey of relaxation, exploration and indulgence{" "}
            <br /> in some of the world&apos;s most breathtaking destinations.
          </SubTitle>
        </Typography>
        <Container>
          <Grid
            container
            spacing={3}
            style={{ border: "1px solid #78828c21", borderRadius: "5px" }}
          >
            <Grid item xs={12}>
              <Grid container spacing={3}>
                <Grid item sm={4}>
                  <Box>
                    <AboutSection />
                  </Box>
                </Grid>
                <Grid item sm={4} style={{ padding: 0 }}>
                  <Image
                    src={topImage}
                    alt="Beach view"
                    style={{ width: "100%", height: "100%" }}
                  />
                </Grid>
                <Grid item sm={4}>
                  <Box>
                    <SupportSection />
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={3}>
                <Grid item sm={4} style={{ padding: 0 }}>
                  <Image
                    src={leftImage}
                    alt="White mountains"
                    style={{ width: "100%", height: "100%" }}
                  />
                </Grid>
                <Grid item sm={4}>
                  <Box>
                   <ServiceSection/>
                  </Box>
                </Grid>
                <Grid item sm={4} style={{ padding: 0 }}>
                  <Image
                    src={rightImage}
                    alt="lady walking in the forest"
                    style={{ width: "100%", height: "100%" }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
        <Container>
          <InfoContent>
            <Typography variant="subtitle1">
              We believe that every traveler is unique, and that&apos;s why 
              we don&apos;t believe in “one size fits all” vacations. Instead, we work closely with 
              each client to create a personalized itinerary that is tailored to their individual 
              preferences and vision. 
            </Typography>
          </InfoContent>
        </Container>
      </Container>
    </Box>
  );
};

export default AboutUs;
