import { combineReducers } from "redux";

import AuthReducer from "./auth.reducer";
import UIControlsReducer from "./uicontrols.reducer";

const rootReducer = combineReducers({
 auth: AuthReducer,
 uicontrols: UIControlsReducer,
});

export default rootReducer;
