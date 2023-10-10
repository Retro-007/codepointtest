import { combineReducers } from "redux";
import userReducer from "../reducers/reducer";

// Combine multiple reducers into a root reducer
const rootReducer = combineReducers({
    user: userReducer,
});

export default rootReducer;
