import api from "../../../services/api";

// Register worker action
export const register = (form, navigate) => async (dispatch) => {
  dispatch({ type: "REGISTER_REQUEST" });
  dispatch({ type: "ALERT_IDLE" });

  try {
    await api.post("/worker/register", {
      email: form.email,
      password: form.password,
      name: form.name,
      phone: form.phone,
    });
    dispatch({ type: "REGISTER_SUCCESS" });
    dispatch({ type: "ALERT_SUCCESS", payload: "Register Successfully!" });
    navigate("/login");
  } catch (error) {
    dispatch({ type: "REGISTER_FAILURE" });
    dispatch({
      type: "ALERT_FAILED",
      payload: error.response.data.message,
    });
  }
};

// Get workers action
export const getWorkers = (params) => async (dispatch) => {
  try {
    dispatch({ type: "MAIN_REQUEST" });
    const response = await api.get("/worker", {
      params: {
        limit: params.limit,
        page: params.page,
        ...(params.search ? { search: params.search } : {}),
        sort: params.sort,
        sortBy: params.sortBy,
      },
    });
    dispatch({
      type: "MAIN_DATA_SUCCESS",
      data: response.data.data,
      totalPage: response.data.pagination.totalPage,
    });
  } catch (error) {
    dispatch({
      type: "MAIN_DATA_FAILURE",
      message: "Error. Please wait or refresh the web.",
    });
  }
};

// Sort workers action
export const sortWorkers = (sort, sortBy) => {
  return { type: "SORT_DATA", sort: sort, sortBy: sortBy };
};

// Search worker action
export const searchWorker = (search) => {
  return { type: "SEARCH_DATA", search: search };
};

// Pagination actions
export const prevPagination = () => {
  return { type: "PREV_PAGE" };
};

export const nextPagination = () => {
  return { type: "NEXT_PAGE" };
};

export const selectPagination = (number) => {
  return { type: "SELECT_PAGE", page: number };
};

export const resetWorkers = () => {
  return { type: "WORKER_RESET" };
};

export const getWorkerProfile = () => async (dispatch) => {
  dispatch({ type: "MAIN_REQUEST" });

  try {
    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("No token found");
    }

    const response = await api.get("/worker/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch({ type: "GET_WORKER_USER_SUCCESS", user: response.data.data });
  } catch (error) {
    dispatch({ type: "MAIN_FAILURE" });
    dispatch({ type: "GET_WORKER_FAILURE" });
  }
};

// Update worker user action
export const updateWorkerUser = (user) => {
  return { type: "UPDATE_WORKER_USER", user: user };
};

// Update worker profile action
export const updateWorkerProfile = (user) => async (dispatch) => {
  dispatch({ type: "MAIN_REQUEST" });
  dispatch({ type: "ALERT_IDLE" });

  try {
    await api.put(`/worker/update-profile`, {
      name: user.name,
      job_desc: user.job_desc,
      domicile: user.domicile,
      workplace: user.workplace,
      description: user.description,
    });
    dispatch({ type: "UPDATE_SUCCESS" });
    dispatch({ type: "ALERT_SUCCESS", payload: "Profile successfully saved." });
    dispatch(getWorkerProfile());
  } catch (error) {
    dispatch({ type: "MAIN_FAILURE" });
    dispatch({ type: "ALERT_FAILED", payload: error.response.data.message });
  }
};

// Update worker profile photo action
export const updateWorkerProfilePhoto = (file) => async (dispatch) => {
  dispatch({ type: "MAIN_REQUEST" });
  dispatch({ type: "ALERT_IDLE" });

  const formData = new FormData();
  formData.append("photo", file);

  try {
    await api.put(`/worker/update-profile`, formData, {
      headers: { "content-type": "multipart/form-data" },
    });
    dispatch({ type: "UPDATE_SUCCESS" });
    dispatch({
      type: "ALERT_SUCCESS",
      payload: "Profile photo successfully updated.",
    });
    dispatch(getWorkerProfile());
  } catch (error) {
    dispatch({ type: "MAIN_FAILURE" });
    dispatch({ type: "ALERT_FAILED", payload: error.response.data.message });
  }
};
