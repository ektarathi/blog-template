import * as React from "react";
import { IconButton, Typography } from "@mui/material";
import { SectionText, SectionHeading } from "../journal/journal.styled";

//Icons
import ScheduleIcon from '@mui/icons-material/Schedule';

const SupperSection = () => {
  return (
    <SectionText data-testid="support-section">
      <IconButton sx={{ padding: 0 }}>
        <ScheduleIcon
          sx={{
            width: "70px",
            height: "70px",
            display: "flex",
            alignSelf: "center",
          }}
        />
      </IconButton>
      <Typography variant="h6">
        <SectionHeading date-testid="support-section-heading">
          Guidance And <br /> Support 24/7
        </SectionHeading>
      </Typography>
      <Typography variant="body2">
        Our expertise, knowledge, and support will be at <br/> your service throughtout your entire journey.
        <br/> Please feel free to reach us out. Happy to help you !!
      </Typography>
    </SectionText>
  );
};

export default SupperSection;
