import React from "react";
import { ThemeProvider } from "@material-ui/core";
import { createMuiTheme } from "@material-ui/core/styles";
import BackdropWithLoader from "../common/backdropWithLoader/backdropWithLoader.component";

const darkTheme = createMuiTheme({
 palette: {
  type: "dark",
 },
});

export default function App(props) {
 return (
  <ThemeProvider theme={darkTheme}>
   <BackdropWithLoader />
   {props.children}
  </ThemeProvider>
 );
}
