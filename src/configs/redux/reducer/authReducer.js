const initialState = {
  isLogged: false,
  loading: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "AUTH_RESET":
      return initialState;

    case "LOGGED_ON":
      return {
        ...state,
        isLogged: true,
      };

    case "LOGIN_REQUEST":
      return {
        ...state,
        loading: true,
      };

    case "LOGIN_SUCCESS":
      return {
        ...state,
        isLogged: true,
        loading: false,
      };

    case "LOGIN_FAILURE":
      return {
        ...state,
        loading: false,
      };

    case "REGISTER_REQUEST":
      return {
        ...state,
        loading: true,
      };

    case "REGISTER_SUCCESS":
      return {
        ...state,
        loading: false,
      };

    case "REGISTER_FAILURE":
      return {
        ...state,
        loading: false,
      };

    case "GET_PROFILE_REQUEST":
      return {
        ...state,
        loading: true,
      };

    case "GET_PROFILE_SUCCESS":
      return {
        ...state,
        loading: false,
      };

    case "GET_PROFILE_FAILURE":
      return {
        ...state,
        loading: false,
      };

    case "LOGOUT":
      return {
        ...state,
        isLogged: false,
      };

    default:
      return state;
  }
};

export default authReducer;
