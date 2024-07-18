import React, { useState, useRef, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import NavbarProfile from "../../component/module/navbar/NavbarProfile";
import Footer from "../../component/module/Footer";
import { getWorkerProfile } from "../../configs/redux/action/workerAction";
import { getRecruiterProfile } from "../../configs/redux/action/recruiterAction";
import { getHire } from "../../configs/redux/action/hireAction";
import { checkRole } from "../../configs/redux/action/checkRoleAction";

const Main = () => {
  const dispatch = useDispatch();
  const { role } = useSelector((state) => state.checkRole);
  const { user, notification } = useSelector((state) => state.main);
  const [popoverVisible, setPopoverVisible] = useState(false);

  const getUser = (role) => {
    if (role === "worker") {
      dispatch(getWorkerProfile());
    } else {
      dispatch(getRecruiterProfile());
    }
    dispatch(getHire(role));
  };

  const togglePopover = () => {
    setPopoverVisible((prev) => !prev);
  };

  const closePopover = () => {
    setPopoverVisible(false);
  };

  const handleOutsideClick = (event) => {
    if (!event.target.closest("#popover-content") && popoverVisible) {
      closePopover();
    }
  };

  useEffect(() => {
    dispatch(checkRole());
    getUser(role);
  }, []);

  return (
    <>
      <div onClick={handleOutsideClick}>
        <NavbarProfile
          popoverVisible={popoverVisible}
          togglePopover={togglePopover}
          role={role}
          notifHire={notification}
          image={user.photo}
        />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default Main;
