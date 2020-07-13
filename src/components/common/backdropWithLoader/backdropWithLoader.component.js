import React, { useState } from "react";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

export default function BackdropWithLoader(props) {
 const classes = useStyles();
 // TODO: use redux state to show hide panel
 const [backdrop, setBackdrop] = useState(true);

 function handleClose() {
  if (props.handleClose) {
   props.handleClose();
  }

  // TODO dev test purposes only
  setBackdrop(false);
 }

 return (
  <Backdrop className={classes.backdrop} open={backdrop} onClick={handleClose}>
   <CircularProgress color="inherit" />
  </Backdrop>
 );
}

const useStyles = makeStyles((theme) => ({
 backdrop: {
  zIndex: theme.zIndex.drawer + 1,
  color: "#fff",
 },
}));
