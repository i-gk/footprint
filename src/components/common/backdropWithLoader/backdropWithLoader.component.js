import React from "react";
import { useSelector, useDispatch } from "react-redux";

import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";

import { hideLoader } from "../../../redux/actions/uicontrols.actions";

export default function BackdropWithLoader(props) {
 const classes = useStyles();
 const dispatch = useDispatch();
 const { loaderVisibility } = useSelector(({ uicontrols }) => uicontrols);

 function handleClose() {
  if (props.handleClose) {
   props.handleClose();
  }

  dispatch(hideLoader());
 }

 return (
  <Backdrop
   className={classes.backdrop}
   open={loaderVisibility}
   onClick={handleClose}
  >
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
