import * as React from "react";
import { IconButton, Typography } from "@mui/material";
import { SectionText, SectionHeading } from "../journal/journal.styled";

// Icons
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
const ServiceSection = () => {
  return (
    <SectionText data-testid="services-section">
      <IconButton sx={{ padding: 0 }}>
        <MiscellaneousServicesIcon
          sx={{
            width: "70px",
            height: "70px",
            display: "flex",
            alignSelf: "center",
          }}
        />
      </IconButton>
      <Typography variant="h6">
        <SectionHeading data-testid="services-section-heading">
          Guidance And <br /> Support 24/7
        </SectionHeading>
      </Typography>
      <Typography variant="body2">
        You can expect only top notch and high <br /> quality experiences when choosing our services.
      </Typography>
    </SectionText>
  );
};

export default ServiceSection;
