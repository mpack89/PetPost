import { Switch } from "@mui/material";
import React from "react";
import { connect } from "react-redux";

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
    case BUY_CAKE:
      return {
        pet: state.pet,
      };
    default:
      return state;
  }
};
