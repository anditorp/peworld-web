import api from "../../../services/api";

export const checkRole = () => async (dispatch) => {
  if (localStorage.getItem("token")) {
    dispatch({ type: "LOGGED_ON" });
    try {
      const response = await api.get("/user/check-role");
      const role = response.data.data.role;
      dispatch({ type: "GET_ROLE", role });
    } catch (error) {
      console.error("Error fetching role:", error);
      // handle error if needed
    }
  }
};

export const resetRole = () => {
  return { type: "RESET_ROLE" };
};
