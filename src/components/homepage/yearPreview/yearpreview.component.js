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
    <Typography>Accordion 1</Typography>
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

/* <div style={{ marginTop: "5rem" }}>
        <span
          style={{
            width: "30%",
            display: "inline-block",
            backgroundColor: "silver",
            height: "15px",
          }}
        ></span>
        <Divider component='span'> </Divider>
        <span style={{ margin: "1rem" }}>YEAR</span>
        <span style={{ margin: "1rem" }}>MONTH</span>
        <span
          style={{
            width: "30%",
            display: "inline-block",
            backgroundColor: "silver",
            height: "15px",
          }}
        ></span>
      </div>
      <div style={{ display: "flex" }}>
        <div
          style={{
            height: "250px",
            width: "250px",
            backgroundColor: "blue",
            margin: "1rem",
          }}
        ></div>
        <div
          style={{
            height: "250px",
            width: "250px",
            backgroundColor: "blue",
            margin: "1rem",
          }}
        ></div>
        <div
          style={{
            height: "250px",
            width: "250px",
            backgroundColor: "blue",
            margin: "1rem",
          }}
        ></div>
      </div> */
