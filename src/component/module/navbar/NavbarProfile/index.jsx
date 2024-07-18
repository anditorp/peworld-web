import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import imageLogo from "../../../../assets/img/header-logo.png";
import iconBell from "../../../../assets/img/icons/bell.png";
import iconMail from "../../../../assets/img/icons/mail.png";
import imageUserNav from "../../../../assets/img/profile-img/user-noimage.png";
import imageNoNotif from "../../../../assets/img/icons/no-notification.png";
import CardNotifications from "../../main/profile/CardNotifications";
import Button from "../../../base/Button";
import { logout } from "../../../../configs/redux/action/authAction";
import { getHire } from "../../../../configs/redux/action/hireAction";
import { getWorkerProfile } from "../../../../configs/redux/action/workerAction";
import { getRecruiterProfile } from "../../../../configs/redux/action/recruiterAction";

const NavbarProfile = ({
  isShadow = false,
  popoverVisible,
  togglePopover,
  role,
}) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [visible, setVisible] = useState(false);
  const { notifHire, error } = useSelector((state) => state.notifications);
  const loading = useSelector((state) => state.loading);
  const { user } = useSelector((state) => {
    if (state.checkRole.role === "worker") {
      return state.worker;
    } else if (state.checkRole.role === "recruiter") {
      return state.recruiter;
    }
    return { user: {} }; // Default empty object if role is neither worker nor recruiter
  });

  useEffect(() => {
    if (role === "worker") {
      dispatch(getWorkerProfile()); // Fetch worker profile if role is worker
    } else if (role === "recruiter") {
      dispatch(getRecruiterProfile()); // Fetch recruiter profile if role is recruiter
    }

    if (role) {
      dispatch(getHire(role)); // Always fetch hire notifications based on role
    }
  }, [dispatch, role]);

  const handleClickOutside = (event) => {
    const isDropdown = event.target.closest(".dropdown-menu");
    const isButton = event.target.closest(".dropdown-button");

    if (!isDropdown && !isButton) {
      setVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    dispatch(logout(navigate));
  };

  console.log("Notification Hire Data:", notifHire);

  return (
    <nav
      className={`px-4 md:px-16 lg:px-[150px] py-5 md:py-[33px] flex justify-between items-center ${
        isShadow && `shadow-lg`
      } bg-hirejob-white`}
    >
      <Link to={`/`}>
        <img className="md:w-auto w-24" src={imageLogo} alt={`logo-peworld`} />
      </Link>

      <div className="flex justify-between items-center gap-7 md:gap-10">
        <button onClick={togglePopover} className="relative">
          <img
            className="w-5 md:w-auto h-auto"
            src={iconBell}
            alt="Notifications"
          />
        </button>

        {popoverVisible && (
          <div
            id="popover-content"
            className={`absolute w-4/5 sm:w-1/2 md:w-2/5 xl:w-1/5 top-14 right-8 md:top-20 md:right-28 lg:right-48 z-10 bg-hirejob-white border border-hirejob-frost rounded-md shadow-lg transition duration-500 ${
              notifHire.length > 0 && `overflow-y-scroll`
            }`}
          >
            {loading ? (
              <p>Loading notifications...</p>
            ) : error ? (
              <p className="text-red-500">Error loading notifications.</p>
            ) : notifHire.length > 0 ? (
              <CardNotifications role={role} arrayNotif={notifHire} />
            ) : (
              <div className="flex flex-col justify-center items-center gap-4 px-10 py-20">
                <img src={imageNoNotif} alt="No Notifications" />
                <p className="font-normal text-sm text-hirejob-dark">
                  No Notifications Available
                </p>
              </div>
            )}
          </div>
        )}

        <div>
          <img className="w-5 md:w-auto h-auto" src={iconMail} alt="Messages" />
        </div>

        <div className="w-[32px] h-[32px] overflow-hidden rounded-[50%]">
          <Button onClick={() => setVisible(!visible)}>
            <img
              className="w-full h-auto dropdown-button"
              src={user?.photo ? user.photo : imageUserNav}
              alt="User Profile"
            />
          </Button>
          {visible && (
            <div className="dropdown-menu w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 h-auto rounded p-1 gap-1 flex flex-col bg-white absolute top-0 right-0 mt-16 md:mt-20 sm:mr-2 md:mr-12 lg:mr-32 z-50 border border-hirejob-purple-normal shadow-lg">
              <Button
                onClick={() =>
                  navigate(
                    role === "worker"
                      ? `/main/profile/worker`
                      : `/main/profile/company`
                  )
                }
                isBorder={true}
                colorButton={`primary`}
                radius="rounded"
                extra={`py-2`}
              >
                Profile
              </Button>
              <Button
                onClick={handleLogout}
                isBorder={true}
                colorButton={`primary`}
                isOutline={true}
                radius="rounded"
                extra={`py-2`}
              >
                Sign Out
              </Button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavbarProfile;
