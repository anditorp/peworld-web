import api from "../../../services/api";

export const getPortofolio = () => async (dispatch) => {
  dispatch({ type: "MAIN_REQUEST" });
  try {
    const token = localStorage.getItem("token");
    const response = await api.get(`/portofolio/my-portofolio`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    console.log(response.data.data); // Tambahkan log di sini

    dispatch({
      type: "GET_WORKER_PORTOFOLIO_SUCCESS",
      portofolio: response.data.data,
    });
  } catch (error) {
    dispatch({
      type: "MAIN_FAILURE",
      error: error.message,
    });
  }
};

export const readPortofolio = (id, setPortofolio) => async (dispatch) => {
  setPortofolio({
    application_name: "",
    link_repository: "",
    application: "Aplikasi Mobile",
    image: "",
  });
  const response = await api.get("/portofolio");
  const dataPortofolio = response.data.data.filter((item) => item.id === id);
  dataPortofolio.map((value) => {
    setPortofolio({
      application_name: value.application_name,
      link_repository: value.link_repository,
      application: value.application,
      image: value.image,
    });
  });
};

export const createPortofolio =
  (portofolio, setPortofolio) => async (dispatch) => {
    dispatch({ type: "MAIN_REQUEST" });
    dispatch({
      type: "ALERT_IDLE",
    });

    try {
      const formData = new FormData();
      formData.append("application_name", portofolio.application_name);
      formData.append("link_repository", portofolio.link_repository);
      formData.append("application", portofolio.application);
      formData.append("image", portofolio.image);

      await api.post(`/portofolio`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      dispatch({
        type: "CREATE_SUCCESS",
      });
      dispatch({
        type: "ALERT_SUCCESS",
        payload: `Portfolio successfully added.`,
      });
      setPortofolio({
        application_name: "",
        link_repository: "",
        application: "Aplikasi Mobile",
        image: "",
      });
      dispatch(getPortofolio());
    } catch (error) {
      dispatch({
        type: "MAIN_FAILURE",
      });
      dispatch({
        type: "ALERT_FAILED",
        payload: error.response?.data?.message || error.message,
      });
    }
  };

export const updatePortofolio =
  (id, portofolio, setPortofolio) => async (dispatch) => {
    dispatch({ type: "MAIN_REQUEST" });
    dispatch({
      type: "ALERT_IDLE",
    });
    try {
      const formData = new FormData();
      formData.append("application_name", portofolio.application_name);
      formData.append("link_repository", portofolio.link_repository);
      formData.append("application", portofolio.application);
      if (portofolio.image) {
        formData.append("image", portofolio.image);
      }

      await api.put(`/portofolio/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      dispatch({
        type: "UPDATE_SUCCESS",
      });
      dispatch({
        type: "ALERT_SUCCESS",
        payload: `Portfolio successfully updated.`,
      });
      setPortofolio({
        application_name: "",
        link_repository: "",
        application: "Aplikasi Mobile",
        image: "",
      });
      dispatch(getPortofolio());
    } catch (error) {
      dispatch({
        type: "MAIN_FAILURE",
      });
      dispatch({
        type: "ALERT_FAILED",
        payload: error.response?.data?.message || error.message,
      });
    }
  };

export const deletePortofolio = (id) => async (dispatch) => {
  dispatch({ type: "MAIN_REQUEST" });
  dispatch({
    type: "ALERT_IDLE",
  });
  try {
    await api.delete(`/portofolio/${id}`);
    dispatch({
      type: "DELETE_SUCCESS",
    });
    dispatch({
      type: "ALERT_SUCCESS",
      payload: `Portofolio successfully deleted!`,
    });
    dispatch(getPortofolio());
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
