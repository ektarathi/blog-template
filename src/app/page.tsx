"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { Typography, Button } from "@mui/material";
import Link from "next/link";
import { MainHeading, StyledButton, SubHeading } from "./page.styled";

export default function Home() {
  return (
    <main className={styles.main} data-testid="main-section">
      <div className={styles.center}>
        <Typography variant="h2" component={"h3"}>
          <MainHeading data-testid="main-heading">Travel With Us</MainHeading>
        </Typography>

        <Typography variant="h6" component="h6">
          <SubHeading data-testid="sub-heading">
            Explore the world in any direction
          </SubHeading>
        </Typography>

        <StyledButton>
          <Button>Buy Now</Button>
          <Button> Ways to travel</Button>
        </StyledButton>
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs <span>-&gt;</span>
          </h2>
          <p>Find in-depth information about Next.js features and API.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Learn <span>-&gt;</span>
          </h2>
          <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Templates <span>-&gt;</span>
          </h2>
          <p>Explore the Next.js 13 playground.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Deploy <span>-&gt;</span>
          </h2>
          <p>
            Instantly deploy your Next.js site to a shareable URL with Vercel.
          </p>
        </a>
      </div>
    </main>
  );
}
