import React from "react";

import AppHeader from "./appHeader.component";

export default () => {
 function onProfileIconClick() {
  console.log("profile!");
 }

 function onLogoutIconClick() {
  console.log("logout!");
 }

 function search(value) {
  console.log("searching for: ", value);
 }

 return (
  <AppHeader
   onLogout={onLogoutIconClick}
   onProfileSelect={onProfileIconClick}
   onSearch={search}
  />
 );
};
