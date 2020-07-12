import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import "./homepage.styles.css";
import { Accordion } from "@material-ui/core";

import { AppHeader } from "../common";
import YearPreview from "./yearPreview/yearpreview.component";

export default function Homepage(props) {
  let history = useHistory();

  useEffect(() => {
    // history.push('/login')
  }, []);

  return (
    <>
      <AppHeader />
      <div style={{ height: "80vh", overflowY: "auto" }}>
        {Array.of(1, 2, 3).map((item) => (
          <YearPreview />
        ))}
      </div>
    </>
  );
}
