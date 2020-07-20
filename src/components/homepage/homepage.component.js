import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./homepage.styles.css";
import { Container, makeStyles } from "@material-ui/core";

import { AppHeaderContainer } from "../common";
import YearPreview from "./yearPreview/yearpreview.component";

import { searchByMemoryDetails } from "../../redux/selectors";
import { getMemories } from "../../redux/actions/memories.actions";

export default function Homepage(props) {
 const DEFAULT_EXPANDED_INDEX = 0;
 const classes = useStyle();

 const dispatch = useDispatch();
 const { previews } = useSelector(({ memories }) => memories);
 const [yearPreviews, setYearPreviews] = useState(previews);

 useEffect(() => {
  fetchYearPreviewData();
 }, []);

 useEffect(() => {
  setYearPreviews(previews);
 }, [previews]);

 function fetchYearPreviewData() {
  dispatch(getMemories());
 }

 function searchMemories(value) {
  setYearPreviews(searchByMemoryDetails(previews, value));
 }

 return (
  <>
   <AppHeaderContainer searchStrategy={searchMemories} />
   <Container
    id="footprint-homepage"
    className={classes.container}
    maxWidth="xl"
   >
    {yearPreviews.map((item, index) => (
     <YearPreview
      key={`${item.year}-${item.title}`}
      previewDetails={item}
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
