import React from "react";
import imageUserNav from "../../../../../assets/img/profile-img/user-noimage.png";
import Button from "../../../../base/Button";

const CardNotifications = ({ role, arrayNotif = [] }) => {
  console.log("Array Notifications:", arrayNotif);
  return (
    <>
      {role === "worker"
        ? arrayNotif.map((hire) => (
            <div key={hire.id} className="w-full border-y border-hirejob-frost">
              <div className="flex px-5 pt-5 gap-5">
                <div className="w-1/4">
                  <img
                    src={
                      hire.recruiter_photo ? hire.recruiter_photo : imageUserNav
                    }
                  />
                </div>
                <div className="w-3/4">
                  <h1 className="text-gray-500 mb-3 ">
                    {hire.message_purpose}
                  </h1>
                  <p className="font-medium text-sm leading-6 text-hirejob-dark">
                    {hire.company} has sent you a message
                  </p>
                </div>
              </div>
              <div className="w-full text-center">
                <Button
                  colorButton={`primary`}
                  isWidthFull={false}
                  extra={`w-5/6 mt-2 mx-5 mb-5 p-2`}
                  isDisabled={false}
                >
                  View message
                </Button>
              </div>
            </div>
          ))
        : arrayNotif.map((hire) => (
            <div key={hire.id} className="w-full border-y border-hirejob-frost">
              <div className="flex px-5 pt-5 gap-5">
                <div className="w-1/4">
                  <img
                    className="rounded-[50%]"
                    src={hire.worker_photo ? hire.worker_photo : imageUserNav}
                  />
                </div>
                <div className="w-3/4">
                  <p className="font-medium text-sm leading-6 text-hirejob-dark">
                    You're hiring a job to{" "}
                    {hire.worker_name ? hire.worker_name : `Someone`}, now
                    waiting for response.
                  </p>
                </div>
              </div>
              <div className="w-full text-center">
                <Button
                  colorButton={`primary`}
                  isWidthFull={false}
                  extra={`w-5/6 mt-2 mx-5 mb-5 p-2`}
                  isDisabled={false}
                >
                  View Offers
                </Button>
              </div>
            </div>
          ))}
    </>
  );
};

export default CardNotifications;
