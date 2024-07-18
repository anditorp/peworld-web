import api from "../../../services/api";
import { months } from "../../../utils/constants";
import { currentMonthYear } from "../../../utils/helper";

export const getExperience = () => async (dispatch) => {
  dispatch({ type: "MAIN_REQUEST" });
  try {
    const response = await api.get(`/experience/my-experience`);
    dispatch({
      type: "GET_WORKER_EXPERIENCE_SUCCESS",
      experiences: response.data.data,
    });
  } catch (error) {
    dispatch({
      type: "MAIN_FAILURE",
      error: error.message,
    });
  }
};

export const readExperience = (id, setExperience) => async (dispatch) => {
  setExperience({
    position: "",
    company: "",
    work_month: "",
    work_year: "",
    description: "",
  });
  const response = await api.get("/experience");
  const dataExperience = response.data.data.filter((item) => item.id === id);
  dataExperience.map((value) => {
    const setMonth = (
      months.findIndex((month) => month === value.work_month) + 1
    )
      .toString()
      .padStart(2, "0");
    setExperience({
      position: value.position,
      company: value.company,
      work_date: `${value.work_year}-${setMonth}`,
      description: value.description,
    });
  });
};

export const createExperience =
  (experience, setExperience) => async (dispatch) => {
    dispatch({ type: "MAIN_REQUEST" });
    dispatch({
      type: "ALERT_IDLE",
    });
    const date = new Date(experience.work_date);
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    try {
      await api.post(`/experience`, {
        position: experience.position,
        company: experience.company,
        work_month: month,
        work_year: year,
        description: experience.description,
      });
      dispatch({
        type: "CREATE_SUCCESS",
      });
      dispatch({
        type: "ALERT_SUCCESS",
        payload: "Experience successfully added.",
      });
      setExperience({
        position: "",
        company: "",
        work_date: currentMonthYear(),
        description: "",
      });
      dispatch(getExperience());
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

export const updateExperience =
  (id, experience, setExperience) => async (dispatch) => {
    dispatch({ type: "MAIN_REQUEST" });
    dispatch({
      type: "ALERT_IDLE",
    });
    const date = new Date(experience.work_date);
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    try {
      await api.put(`/experience/${id}`, {
        position: experience.position,
        company: experience.company,
        work_month: month,
        work_year: year,
        description: experience.description,
      });
      dispatch({
        type: "UPDATE_SUCCESS",
      });
      dispatch({
        type: "ALERT_SUCCESS",
        payload: "Experience successfully updated.",
      });
      setExperience({
        position: "",
        company: "",
        work_date: currentMonthYear(),
        description: "",
      });
      dispatch(getExperience());
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

export const deleteExperience = (id) => async (dispatch) => {
  dispatch({ type: "MAIN_REQUEST" });
  dispatch({
    type: "ALERT_IDLE",
  });
  try {
    await api.delete(`/experience/${id}`);
    dispatch({
      type: "DELETE_SUCCESS",
    });
    dispatch({
      type: "ALERT_SUCCESS",
      payload: "Experience successfully deleted!",
    });
    dispatch(getExperience());
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
