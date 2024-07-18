import { REHYDRATE } from "redux-persist";

const initialState = {
  user: {
    company: "",
    position: "",
    city: "",
    description: "",
    email: "",
    instagram: "",
    phone: "",
    linkedin: "",
    photo: "",
  },
};

const recruiterReducer = (state = initialState, action) => {
  switch (action.type) {
    case REHYDRATE:
      if (action.payload && action.payload.recruiter) {
        return { ...state, ...action.payload.recruiter };
      }
      return state;

    case "RECRUITER_RESET":
      return initialState;

    case "GET_RECRUITER_SUCCESS":
      return {
        ...state,
        user: action.user,
      };

    case "GET_RECRUITER_FAILURE":
      return {
        ...state,
        user: initialState.user,
      };

    case "UPDATE_RECRUITER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default recruiterReducer;
