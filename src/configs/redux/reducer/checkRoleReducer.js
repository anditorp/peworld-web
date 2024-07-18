const initialState = {
  role: "",
};
const checkRoleReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ROLE":
      return {
        ...state,
        role: action.role,
      };
    case "RESET_ROLE":
      return initialState;
    default:
  }
  return state;
};

export default checkRoleReducer;
