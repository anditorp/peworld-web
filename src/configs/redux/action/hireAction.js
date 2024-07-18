import api from "../../../services/api";

export const getHire = (role) => async (dispatch) => {
  try {
    const response = await api.get(`/hire/${role}`); // Adjust endpoint as necessary
    console.log("API Response:", response.data); // Log the API response
    dispatch({
      type: "GET_HIRE_SUCCESS",
      payload: response.data,
    });
  } catch (error) {
    console.error("Error fetching hire data:", error);
    dispatch({
      type: "GET_HIRE_FAILURE",
      payload: error,
    });
  }
};

export const createHire = (hire, worker_id, navigate) => async (dispatch) => {
  dispatch({ type: "MAIN_REQUEST" });
  dispatch({
    type: "ALERT_IDLE",
  });
  try {
    await api.post(`/hire`, {
      message_purpose: hire.message_purpose,
      description: hire.description,
      worker_id: worker_id,
    });
    dispatch({
      type: "ALERT_SUCCESS",
      payload: `Success to send job!`,
    });
    setTimeout(() => {
      dispatch({
        type: "ALERT_IDLE",
      });
    }, 2000);
    dispatch({ type: "MAIN_SUCCESS" });
    navigate(`/main/home`);
  } catch (error) {
    dispatch({ type: "MAIN_FAILURE" });
    dispatch({
      type: "ALERT_ERROR",
      payload: error.response ? error.response.data.message : error.message,
    });
    setTimeout(() => {
      dispatch({
        type: "ALERT_IDLE",
      });
    }, 2000);
  }
};
