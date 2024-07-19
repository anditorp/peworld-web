import api from "../../../services/api";

export const getSkills = () => async (dispatch) => {
  dispatch({ type: "MAIN_REQUEST" });
  try {
    const response = await api.get(`/skill/my-skill`);
    dispatch({
      type: "GET_WORKER_SKILL_SUCCESS",
      skills: response.data.data,
    });
  } catch (error) {
    dispatch({
      type: "MAIN_FAILURE",
      error: error.message,
    });
  }
};

export const createSkill = (skill, setSkill) => async (dispatch) => {
  dispatch({ type: "MAIN_REQUEST" });
  dispatch({
    type: "ALERT_IDLE",
  });
  try {
    await api.post(`/skill`, { skill_name: skill });
    dispatch({
      type: "CREATE_SUCCESS",
    });
    dispatch({
      type: "ALERT_SUCCESS",
      payload: `Skill ${skill} successfully added.`,
    });
    setSkill("");
    dispatch(getSkills());
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

export const deleteSkill = (id) => async (dispatch) => {
  dispatch({ type: "MAIN_REQUEST" });
  dispatch({
    type: "ALERT_IDLE",
  });
  try {
    await api.delete(`/skill/${id}`);
    dispatch({
      type: "DELETE_SUCCESS",
    });
    dispatch({
      type: "ALERT_SUCCESS",
      payload: `Skill successfully deleted!`,
    });
    dispatch(getSkills());
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
