import React from "react";
import { useSelector } from "react-redux";
import debounce from "lodash/debounce";

import AppHeader from "./appHeader.component";

export default function AppHeaderContainer(props) {
 const DEBOUNCE_TIME_FOR_SEARCH = 500;

 const { previews } = useSelector(({ memories }) => memories);

 function onProfileIconClick() {
  console.log("profile!");
 }

 function onLogoutIconClick() {
  console.log("logout!");
 }

 const search = debounce(function (value) {
  props.searchStrategy(value);
 }, DEBOUNCE_TIME_FOR_SEARCH);

 return (
  <AppHeader
   onLogout={onLogoutIconClick}
   onProfileSelect={onProfileIconClick}
   onSearch={search}
  />
 );
}
