import React from "react";
import imageLogo from "../../../../assets/img/header-logo.png";
import keyLock from "../../../../assets/img/icons/keylock.png";
import Button from "../../../../component/base/Button";

const ResetRequest = () => {
  return (
    <main className="container h-screen max-w-full flex justify-center items-center bg-hirejob-ice">
      <div className="flex flex-col flex-nowrap justify-center items-center w-5/6 md:w-3/5 lg:w-1/2 xl:w-2/5 2xl:w-1/3 p-5 rounded-[20px] border-b-8 border-hirejob-purple-normal bg-hirejob-white">
        <img className="w-[179px] my-7" src={imageLogo} alt="logo-peworld" />
        <h1 className="font-['Poppins'] font-semibold text-lg md:text-2xl text-center mx-0 md:mx-14 xl:mx-20 my-4">
          Request to Reset Your Account Password
        </h1>
        <img className="my-4" src={keyLock} alt="unlock-password" />
        <p className="font-['Poppins'] font-light text-sm leading-[21px] text-center my-4">
          The following is the button for you to reset the password.
        </p>
        <div className="w-3/4 md:w-2/5 lg:w-1/3 text-center mt-4 mb-10 md:mb-20">
          <Button colorButton={"secondary"} extra="p-2">
            Change Password
          </Button>
        </div>
      </div>
    </main>
  );
};

export default ResetRequest;
