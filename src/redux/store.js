import { legacy_createStore as createStore } from "redux";
import profileReducer from "./userprofile/profileReducer";

const store = createStore(profileReducer);

export default store;
