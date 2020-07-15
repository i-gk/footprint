import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import "./homepage.styles.css";
import { Container, makeStyles } from "@material-ui/core";

import { AppHeaderContainer } from "../common";
import YearPreview from "./yearPreview/yearpreview.component";

export default function Homepage(props) {
 const DEFAULT_EXPANDED_INDEX = 0;
 let history = useHistory();

 useEffect(() => {
  fetchYearPreviewData();
 }, []);

 function fetchYearPreviewData() {
  // TODO: fill
 }

 const classes = useStyle();

 return (
  <>
   <AppHeaderContainer />
   <Container className={classes.container} maxWidth="xl">
    {Array.of(2020, 2019, 2018, 2017).map((item, index) => (
     <YearPreview
      key={item}
      title={item}
      expanded={index === DEFAULT_EXPANDED_INDEX}
     />
    ))}
   </Container>
  </>
 );
}

const useStyle = makeStyles((theme) => ({
 container: {
  overflowY: "auto",
  height: "85vh",
 },
}));
