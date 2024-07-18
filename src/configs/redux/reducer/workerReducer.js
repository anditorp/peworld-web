const initialState = {
  user: {
    name: "",
    job_desc: "",
    domicile: "",
    workplace: "",
    description: "",
  },
  profile: {
    skills: [],
    experiences: [],
    portofolios: [],
  },
};

const workerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "WORKER_RESET":
      return initialState;
    case "GET_WORKER_USER_SUCCESS":
      return {
        ...state,
        user: action.user,
      };
    case "GET_WORKER_SKILL_SUCCESS":
      return {
        ...state,
        profile: {
          ...state.profile,
          skills: action.skills,
        },
      };
    case "GET_WORKER_EXPERIENCE_SUCCESS":
      return {
        ...state,
        profile: {
          ...state.profile,
          experiences: action.experiences,
        },
      };
    case "GET_WORKER_PORTOFOLIO_SUCCESS":
      return {
        ...state,
        profile: {
          ...state.profile,
          portofolios: action.portofolio,
        },
      };
    case "GET_WORKER_FAILURE":
      return {
        ...state,
        user: {},
        profile: {
          skills: [],
          experiences: [],
          portofolios: [],
        },
      };
    case "UPDATE_WORKER_USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default workerReducer;
