import React from "react";

import {
 Accordion,
 AccordionSummary,
 AccordionDetails,
 Typography,
 Divider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { SingleLineImageGrid } from "../../common";

export default function YearPreview({ previewDetails, expanded }) {
 const classes = useStyles();
 return (
  <Accordion
   key={`${previewDetails.year}-${previewDetails.title}`}
   className={classes.root}
   defaultExpanded={expanded}
  >
   <AccordionSummary
    expandIcon={<ExpandMoreIcon />}
    aria-controls="panel1a-content"
    id="panel1a-header"
   >
    <Typography> {previewDetails.title} </Typography>
    <Divider className={classes.devider} orientation="vertical" flexItem />
    <Typography> {previewDetails.year} </Typography>
   </AccordionSummary>
   <AccordionDetails>
    <SingleLineImageGrid />
   </AccordionDetails>
  </Accordion>
 );
}

const useStyles = makeStyles((theme) => ({
 root: {
  backgroundColor: "#1d1d1d",
  borderStyle: "1px solid #fff",
  marginBottom: "1rem",
 },
 devider: {
  margin: "0 1rem",
 },
}));
