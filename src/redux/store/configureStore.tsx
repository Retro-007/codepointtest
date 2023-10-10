import { configureStore } from '@reduxjs/toolkit';
import rootReducer from "../reducers";
import thunk from "redux-thunk";

// Create and configure the Redux store
const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
