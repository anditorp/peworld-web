const initialState = {
  notifHire: [],
  error: null,
};

const notificationsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_HIRE_SUCCESS":
      return {
        ...state,
        notifHire: action.payload.data, // Update this line to set the data correctly
      };
    case "GET_HIRE_FAILURE":
      return {
        ...state,
        notifHire: [],
      };
    default:
      return state;
  }
};

export default notificationsReducer;
