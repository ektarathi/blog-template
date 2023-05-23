import * as React from "react";
import Image from "next/image";

import { Box, Typography, Container, Grid } from "@mui/material";
import { MainHeading, SubTitle, SectionText } from "./journal.styled";
import topImage from "../../../public/images/khatam-tadayon-107740-1200x796.jpg";
import leftImage from "../../../public/images/luca-bravo-121931-unsplash-1200x800.jpg";
import rightImage from "../../../public/images/sho-hatakeyama-117306-unsplash-1200x800.jpg";

const AboutUs = () => {
  return (
    <Box data-testid="about-us" mt={5} id="journal">
      <Container>
        <Typography variant="h4" component="h1">
          <MainHeading data-testid="heading">Our Journal</MainHeading>
        </Typography>
        <Typography variant="subtitle1">
          <SubTitle data-testid="subtitle">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex itaque
            laboriosam quam, <br /> consequuntur vero officiis molestias,
            inventore repellendus.
          </SubTitle>
        </Typography>
        <Container>
          <Grid container spacing={3} style={{ border: '1px solid grey' }}>
            <Grid item xs={12}>
              <Grid container spacing={3}>
                <Grid item sm={4}>
                  <Box p={2}>
                    <SectionText data-testid="about-section">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Fuga ullam expedita ex eos qui autem <br/> consequuntur vero officiis molestias,
                      inventore repellendus.  Illo iure, nesciunt sunt fugiat vero tempora
                      aspernatur iste, repudiandae?
                    </SectionText>
                  </Box>
                </Grid>
                <Grid item sm={4} style={{ padding: 0 }}>
                    <Image src={topImage} alt="Beach view" style={{width: '100%', height: '100%'}}/>
                </Grid>
                <Grid item sm={4}>
                  <Box p={2}>
                    <SectionText data-testid="description-section">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Fuga ullam expedita ex eos qui autem <br/> consequuntur vero officiis molestias,
                      inventore repellendus.  Illo iure, nesciunt sunt fugiat vero tempora
                      aspernatur iste, repudiandae?
                    </SectionText>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={3}>
                <Grid item sm={4} style={{ padding: 0 }}>
                    <Image src={leftImage} alt="White mountains" style={{width: '100%', height: '100%'}}/>
                </Grid>
                <Grid item sm={4}>
                  <Box p={2}>
                    <SectionText data-testid="information-section">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Fuga ullam expedita ex eos qui autem <br/> consequuntur vero officiis molestias,
                      inventore repellendus.  Illo iure, nesciunt sunt fugiat vero tempora
                      aspernatur iste, repudiandae?
                    </SectionText>
                  </Box>
                </Grid>
                <Grid item sm={4} style={{ padding: 0 }}>
                    <Image src={rightImage} alt="lady walking in the forest" style={{width: '100%', height: '100%'}}/>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </Container>
    </Box>
  );
};

export default AboutUs;
