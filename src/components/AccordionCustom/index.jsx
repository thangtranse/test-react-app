// REACRT
import React, { memo, useState } from "react";
// MATERIAL
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";

const AccordionCustomComponent = ({ title, subTitle, children }) => {
  const [expanded, setExpanded] = React.useState(false);
  const handleChangeAccordion = React.useCallback(
    (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    },
    [setExpanded]
  );
  return (
    <Accordion
      expanded={expanded === "panel1"}
      onChange={handleChangeAccordion("panel1")}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1bh-content"
        id="panel1bh-header"
      >
        <Typography sx={{ width: "33%", flexShrink: 0 }}>{title} </Typography>
        <Typography sx={{ color: "text.secondary" }}>{subTitle} </Typography>
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  );
};

export default memo(AccordionCustomComponent);
