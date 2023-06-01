"use client";

import styles from "./page.module.css";
import { Typography, Button } from "@mui/material";
import Journal from "./journal/journal";
import Feature from "./features/feature";
import Facility from "./facilities/facility";
import {
  MainHeading,
  StyledButton,
  SubHeading,
  StyledWrapper,
  OutlinedButton,
  ColouredButton,
} from "./page.styled";

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  
  const openModal = () => {
    router.push(`#ways-to-travel`);
  } 

  return (
    <>
      <StyledWrapper>
        <main className={styles.main} data-testid="main-section">
          <div className={styles.center}>
            <Typography variant="h2" component={"h3"}>
              <MainHeading data-testid="main-heading">
                Travel With Us
              </MainHeading>
            </Typography>

            <Typography variant="h6" component="h6">
              <SubHeading data-testid="sub-heading">
                Explore the world in any direction
              </SubHeading>
            </Typography>

            <StyledButton>
              <Button>
                <ColouredButton>Buy Now</ColouredButton>
              </Button>
              <Button>
                <OutlinedButton onClick={openModal}>Ways to travel</OutlinedButton>
              </Button>
            </StyledButton>
          </div>
        </main>
      </StyledWrapper>
      <Journal />
      <Feature />
      <Facility/>
    </>
  );
}
