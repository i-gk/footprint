import React from "react";

import "./appHeader.styles.css";
import { AppBar, Typography, InputBase, Toolbar } from "@material-ui/core";
import { fade, makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import PersonSharpIcon from '@material-ui/icons/PersonSharp';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';

export default function AppHeader() {
  const classes = useStyles();

  function onProfileIconClick() {
    console.log('profile!')
  }

  function onLogoutIconClick() {
    console.log('logout!')
  }

  function search(event) {
      console.log('searching for: ', event.target.value)
  }

  return (
    <AppBar color="transparent" position="static">
      <Toolbar>
        <Typography className={classes.title} variant="h6" noWrap>
          App Logo
        </Typography>
        <div className={classes.grow} />
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            onChange={search}
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
          />
        </div>
        <PersonSharpIcon className={classes.profile} onClick={onProfileIconClick } />
        <ExitToAppOutlinedIcon className={classes.logout} onClick={onLogoutIconClick} />
      </Toolbar>
    </AppBar>
  );
}

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  profile: {
    padding: theme.spacing(2, 2),
    borderRadius: '2rem',
    "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      }
  },
  logout: {
    padding: theme.spacing(2, 2),
    borderRadius: '2rem',
    "&:hover": {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(3),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "40ch",
    },
  },
}));
