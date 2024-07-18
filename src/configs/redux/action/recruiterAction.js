import api from "../../../services/api";

export const registerRecruiter = (form, navigate) => async (dispatch) => {
  dispatch({
    type: "REGISTER_REQUEST",
  });
  dispatch({
    type: "ALERT_IDLE",
  });

  try {
    await api.post("/recruiter/register", {
      email: form.email,
      password: form.password,
      name: form.name,
      company: form.company,
      position: form.position,
      phone: form.phone,
    });
    dispatch({ type: "REGISTER_SUCCESS" });
    dispatch({ type: "ALERT_SUCCESS", payload: "Register Successfully!" });
    navigate("/login");
  } catch (error) {
    dispatch({
      type: "REGISTER_FAILURE",
    });
    dispatch({
      type: "ALERT_FAILED",
      payload: error.response.data.message,
    });
  }
};

export const getRecruiterProfile = () => async (dispatch) => {
  dispatch({ type: "MAIN_REQUEST" });
  try {
    const response = await api.get("/recruiter/profile");
    const userData = response.data.data;
    dispatch({ type: "GET_USER", user: userData });
    dispatch({ type: "GET_RECRUITER_SUCCESS", user: userData });
  } catch (error) {
    dispatch({ type: "MAIN_FAILURE" });
    dispatch({ type: "GET_RECRUITER_FAILURE" });
  }
};

export const updateRecruiterUser = (user) => {
  return { type: "UPDATE_RECRUITER", user: user };
};

export const updateRecruiterProfile = (user) => async (dispatch) => {
  dispatch({ type: "MAIN_REQUEST" });
  dispatch({
    type: "ALERT_IDLE",
  });
  try {
    await api.put(`/recruiter/update-profile`, {
      company: user.company,
      position: user.position,
      city: user.city,
      description: user.description,
      email: user.email,
      instagram: user.instagram,
      phone: user.phone,
      linkedin: user.linkedin,
      photo: user.photo,
    });
    dispatch({
      type: "UPDATE_SUCCESS",
    });
    dispatch({ type: "ALERT_SUCCESS", payload: "Profile successfully saved." });
    dispatch(getWorkerProfile());
  } catch (error) {
    dispatch({
      type: "MAIN_FAILURE",
    });
    dispatch({
      type: "ALERT_FAILED",
      payload: error.response.data.message,
    });
  }
};
