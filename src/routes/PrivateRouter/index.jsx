import React from "react";
import { useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { resetRole } from "../../configs/redux/action/checkRoleAction";

const PrivateRouter = ({ children }) => {
  const dispatch = useDispatch();
  const token = localStorage.getItem(`token`);
  if (!token) {
    dispatch(resetRole());
    return <Navigate to={`/login`} replace />;
  }

  return children;
};

export default PrivateRouter;
