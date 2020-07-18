import React from "react";
import debounce from "lodash/debounce";

import AppHeader from "./appHeader.component";

export default function AppHeaderContainer(props) {
 const DEBOUNCE_TIME_FOR_SEARCH = 500;

 function onProfileIconClick() {
  console.log("profile!");
 }

 function onLogoutIconClick() {
  console.log("logout!");
 }

 const search = debounce(function (value) {
  props.searchStrategy(value);
 }, DEBOUNCE_TIME_FOR_SEARCH);

 const isSearchEnabled = () => {
  return props.searchStrategy !== undefined;
 };

 return (
  <AppHeader
   onLogout={onLogoutIconClick}
   onProfileSelect={onProfileIconClick}
   searchEnabled={isSearchEnabled()}
   onSearch={search}
  />
 );
}
