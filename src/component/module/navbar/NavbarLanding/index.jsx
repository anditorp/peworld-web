import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import imageLogo from "../../../../assets/img/header-logo.png";
import Button from "../../../base/Button";

const NavbarLanding = ({
  auth = false,
  role = "",
  popoverVisible,
  togglePopover,
  handleLogout,
}) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <>
      {!auth ? (
        <nav className="px-4 md:px-16 lg:px-[150px] py-5 md:py-[45px] flex justify-between items-center relative">
          <Link to={`/`}>
            <img
              className="md:w-auto w-24"
              src={imageLogo}
              alt={`logo-peworld`}
            />
          </Link>

          <div className="flex justify-between items-center gap-3 md:gap-4">
            <div className="relative">
              <Button
                onClick={toggleDropdown}
                colorButton={`primary`}
                size="text-sm"
                isBorder={true}
                isOutline={true}
                extra={`hidden md:block leading-6 px-[10px] md:px-5 py-[10px]`}
              >
                Sign Up
              </Button>
              {dropdownVisible && (
                <div className="absolute right-0 mt-2 w-48 bg-white border border-hirejob-frost rounded-md shadow-lg z-10">
                  <NavLink to={`/register`}>
                    <Button
                      colorButton={`primary`}
                      isBorder={true}
                      extra={`leading-6 px-[10px] py-[10px] mb-1 w-full text-left`}
                    >
                      Sign Up as Worker
                    </Button>
                  </NavLink>
                  <NavLink to={`/recruiter/register`}>
                    <Button
                      colorButton={`primary`}
                      isBorder={true}
                      extra={`leading-6 px-[10px] py-[10px] mb-1 w-full text-left`}
                    >
                      Sign Up as Recruiter
                    </Button>
                  </NavLink>
                </div>
              )}
            </div>
            <NavLink to={`/login`}>
              <Button
                colorButton={`primary`}
                size="text-sm"
                isBorder={true}
                isOutline={true}
                extra={`hidden md:block leading-6 px-[10px] md:px-5 py-[10px]`}
              >
                Sign In
              </Button>
            </NavLink>
            <Button
              onClick={togglePopover}
              colorButton={`primary`}
              isOutline={true}
              size="text-2xl"
              extra={`block md:hidden py-[10px] px-[15px]`}
            >
              &#9776;
            </Button>
            {popoverVisible && (
              <div
                id="popover-content"
                className="block md:hidden absolute w-1/2 sm:w-1/2 md:w-2/5 xl:w-1/5 h-auto p-1 top-16 right-4 md:top-20 md:right-28 lg:right-48 z-10 bg-hirejob-white border border-hirejob-frost rounded-md shadow-lg transition duration-500"
              >
                <NavLink to={`/login`}>
                  <Button
                    colorButton={`primary`}
                    isBorder={true}
                    isOutline={true}
                    extra={`leading-6 px-[10px] py-[10px] mb-1`}
                  >
                    Sign In
                  </Button>
                </NavLink>
                <NavLink to={`/register`}>
                  <Button
                    colorButton={`primary`}
                    isBorder={true}
                    extra={`leading-6 px-[10px] py-[10px]`}
                  >
                    Sign Up as Worker
                  </Button>
                </NavLink>
                <NavLink to={`/recruiter/register`}>
                  <div className=" w-full py-[10px] text-center">
                    <span className="font-semibold text-base text-hirejob-purple-normal hover:text-hirejob-purple-dark after:content-[''] after:block after:py-0 after:border-b-2 after:scale-x-0 after:transition after:ease-linear after:duration-200 after:hover:scale-x-[.6]">
                      Sign Up as Recruiter
                    </span>
                  </div>
                </NavLink>
              </div>
            )}
          </div>
        </nav>
      ) : (
        <nav className="px-4 md:px-16 lg:px-[150px] py-5 md:py-[45px] flex justify-between items-center relative">
          <div className="flex justify-between items-center gap-12 md:gap-16 xl:gap-36">
            <Link to={`/`}>
              <img
                className="md:w-auto w-24"
                src={imageLogo}
                alt={`logo-peworld`}
              />
            </Link>
          </div>

          <div className="flex justify-between items-center gap-3 md:gap-4">
            <NavLink
              to={
                role === "worker"
                  ? `/main/profile/worker`
                  : `/main/profile/company`
              }
            >
              <Button
                colorButton={`primary`}
                size="text-sm"
                isBorder={true}
                extra={`hidden md:block leading-6 px-[10px] md:px-5 py-[10px]`}
              >
                Profile
              </Button>
            </NavLink>
            <Button
              colorButton={`primary`}
              onClick={handleLogout}
              size="text-sm"
              isBorder={true}
              isOutline={true}
              extra={`hidden md:block leading-6 px-[10px] md:px-5 py-[10px]`}
            >
              Sign Out
            </Button>
            <Button
              onClick={togglePopover}
              colorButton={`primary`}
              isOutline={true}
              size="text-2xl"
              extra={`block md:hidden py-[10px] px-[15px]`}
            >
              &#9776;
            </Button>
            {popoverVisible && (
              <div
                id="popover-content"
                className="block md:hidden absolute w-1/2 sm:w-1/2 md:w-2/5 xl:w-1/5 h-auto p-1 top-16 right-4 md:top-20 md:right-28 lg:right-48 z-10 bg-hirejob-white border border-hirejob-frost rounded-md shadow-lg transition duration-500"
              >
                <NavLink
                  to={
                    role === "worker"
                      ? `/main/profile/worker`
                      : `/main/profile/company`
                  }
                >
                  <Button
                    colorButton={`primary`}
                    isBorder={true}
                    extra={`leading-6 px-[10px] py-[10px] mb-1`}
                  >
                    Profile
                  </Button>
                </NavLink>
                <Button
                  colorButton={`primary`}
                  onClick={handleLogout}
                  isBorder={true}
                  isOutline={true}
                  extra={`leading-6 px-[10px] py-[10px]`}
                >
                  Sign Out
                </Button>
              </div>
            )}
          </div>
        </nav>
      )}
    </>
  );
};

export default NavbarLanding;
