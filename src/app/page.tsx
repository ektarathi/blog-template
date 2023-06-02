"use client";

import { motion, useScroll } from "framer-motion";

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

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const { scrollYProgress } = useScroll();

  const openModal = () => {
    router.push(`#ways-to-travel`);
  };

  return (
    <>
    <motion.div
        className={styles.progressBar}
        style={{ scaleX: scrollYProgress }}
      />
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
              <motion.div
                className="animatable"
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.9 }}
              >
                <Button className="animatable">
                  <ColouredButton>Buy Now</ColouredButton>
                </Button>
              </motion.div>
              <motion.div
                className="animatable"
                whileHover={{
                  scale: 1.2,
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.9 }}
              >
                <Button className="animatable">
                  <OutlinedButton onClick={openModal} date-testid="click-button">
                    Ways to travel
                  </OutlinedButton>
                </Button>
              </motion.div>
            </StyledButton>
          </div>
        </main>
      </StyledWrapper>
      <Journal />
      <Feature />
      <Facility />
    </>
  );
}
