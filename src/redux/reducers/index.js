import { combineReducers } from "redux";

import AuthReducer from "./auth.reducer";
import UIControlsReducer from "./uicontrols.reducer";
import MemoriesReducer from "./memories.reducer";

const rootReducer = combineReducers({
 auth: AuthReducer,
 uicontrols: UIControlsReducer,
 memories: MemoriesReducer,
});

export default rootReducer;
