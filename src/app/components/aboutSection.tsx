import * as React from "react";
import { IconButton, Typography } from "@mui/material";
import {
  SectionText,
  SectionHeading,
} from "../journal/journal.styled";

// Icons
import CameraEnhanceIcon from "@mui/icons-material/CameraEnhance";

const AboutSection = () => {
  return (
    <SectionText data-testid="about-section">
      <IconButton sx={{ padding: 0 }}>
        <CameraEnhanceIcon
          sx={{
            width: "70px",
            height: "70px",
            display: "flex",
            alignSelf: "center",
            marginTop: '12px'
          }}
        />
      </IconButton>
      <Typography variant="h6">
        <SectionHeading data-testid="about-section-heading">
          Memories that will last <br /> for a Life Time
        </SectionHeading>
      </Typography>
      <Typography variant="body2" style={{ padding: 15 }}>
        We&apos;ll help you create beautiful memories and capture them in a stunning photos to bring home.
        Memories that will last forever and ever.
      </Typography>
    </SectionText>
  );
};

export default AboutSection;
