import React from "react";
import redux from "redux";
import { legacy_createStore } from "redux";

const UPDATE_PROFILE = "UPDATE_PROFILE";

function updateProfile() {
  return {
    type: UPDATE_PROFILE,
  };
}

const initialState = {
  pet: "",
  owner: "",
  bio: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_PROFILE:
      return {
        ...state,
        pet: state.pet,
        owner: state.owner,
        bio: state.bio,
      };
    default:
      return state;
  }
};

const store = legacy_createStore(reducer);
