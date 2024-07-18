const initialState = {
  user: {},
  data: [],
  notification: [],
  params: {
    limit: 10,
    search: "",
    sort: "name",
    sortBy: "DESC",
    page: 1,
  },
  totalPage: 1,
  loading: {
    search: false,
    data: false,
  },
  response: {
    show: false,
    error: false,
    message: "",
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "MAIN_RESET":
      return initialState;
    case "GET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "MAIN_RESPONSE_RESET":
      return {
        ...state,
        response: {
          show: false,
          error: false,
          message: "",
        },
      };
    case "MAIN_REQUEST":
      return {
        ...state,
        loading: {
          ...state.loading,
          data: true,
        },
        response: {
          show: false,
          error: false,
          message: "",
        },
      };
    case "MAIN_DATA_SUCCESS":
      return {
        ...state,
        data: action.data,
        totalPage: action.totalPage,
        loading: {
          search: false,
          data: false,
        },
        response: {
          ...state.response,
          error: false,
          message: "",
        },
      };
    case "MAIN_DATA_FAILURE":
      return {
        ...state,
        totalPage: initialState.totalPage,
        loading: {
          search: false,
          data: false,
        },
        response: {
          ...state.response,
          error: true,
          message: action.message,
        },
      };
    case "MAIN_FAILURE":
      return {
        ...state,
        loading: {
          search: false,
          data: false,
        },
        response: {
          show: true,
          error: true,
          message: "failed",
        },
      };
    case "NOTIFICATION_SUCCESS":
      return {
        ...state,
        notification: action.notification,
      };
    case "NOTIFICATION_FAILURE":
      return {
        ...state,
        notification: [],
      };
    case "SEARCH_DATA":
      return {
        ...state,
        params: {
          ...state.params,
          search: action.search,
          page: 1,
        },
        totalPage: 1,
        loading: {
          ...state.loading,
          search: true,
        },
      };
    case "SORT_DATA":
      return {
        ...state,
        params: {
          ...state.params,
          sort: action.sort,
          sortBy: action.sortBy,
        },
      };
    case "PREV_PAGE":
      return {
        ...state,
        params: {
          ...state.params,
          page: state.params.page - 1,
        },
      };
    case "NEXT_PAGE":
      return {
        ...state,
        params: {
          ...state.params,
          page: state.params.page + 1,
        },
      };
    case "SELECT_PAGE":
      return {
        ...state,
        params: {
          ...state.params,
          page: action.page,
        },
      };
    case "CREATE_SUCCESS":
      return {
        ...state,
        loading: {
          search: false,
          data: false,
        },
        // response: {
        //   ...state.response,
        //   show: true,
        //   error: false,
        //   message: action.message,
        // },
      };
    case "UPDATE_SUCCESS":
      return {
        ...state,
        loading: {
          search: false,
          data: false,
        },
        // response: {
        //   ...state.response,
        //   show: true,
        //   error: false,
        //   message: action.message,
        // },
      };
    case "DELETE_SUCCESS":
      return {
        ...state,
        loading: {
          search: false,
          data: false,
        },
        // response: {
        //   ...state.response,
        //   show: true,
        //   error: false,
        //   message: action.message,
        // },
      };
    default:
      return state;
  }
};

export default mainReducer;
