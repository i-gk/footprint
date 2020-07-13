import React from "react";

import {
 Accordion,
 AccordionSummary,
 AccordionDetails,
 Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { SingleLineImageGrid } from "../../common";

export default function YearPreview(props) {
 const classes = useStyles();
 return (
  <Accordion className={classes.root} defaultExpanded={props.expanded}>
   <AccordionSummary
    expandIcon={<ExpandMoreIcon />}
    aria-controls="panel1a-content"
    id="panel1a-header"
   >
    <Typography> {props.title} </Typography>
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
 },
}));
