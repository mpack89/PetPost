import { EDIT_PROFILE } from "./profileTypes";

const initialState = {
  pet: "",
  owner: "",
  bio: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_PROFILE:
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

export default profileReducer;
