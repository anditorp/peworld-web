import React from "react";

const AuthDesc = ({ title, para }) => {
  return (
    <>
      {title && (
        <h1 className="font-semibold text-[32px] leading-[43.58px]">{title}</h1>
      )}
      {para && (
        <p className="font-normal text-lg leading-[24.51px] mt-4 mb-9">
          {para}
        </p>
      )}
    </>
  );
};

export default AuthDesc;
