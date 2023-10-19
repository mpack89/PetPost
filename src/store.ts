import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "./redux/userprofile/profileReducer";
//import rootReducer from "./"
const store = configureStore(profileReducer);

export default store;
