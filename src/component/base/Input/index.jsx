import React from "react";

const Input = ({
  label,
  className,
  classLabel,
  type = "text",
  validation,
  ...props
}) => {
  return (
    <div className={classLabel ? classLabel : "flex flex-col flex-nowrap py-4"}>
      {label && (
        <span className="font-normal text-xs text-hirejob-gray mb-1">
          {label}
        </span>
      )}

      {type === `textarea` ? (
        <textarea
          className={
            className
              ? className
              : "w-full rounded p-[15px] border border-hirejob-frost font-normal text-sm text-hirejob-dark placeholder:text-hirejob-gray"
          }
          {...props}
        ></textarea>
      ) : (
        <input
          className={
            className
              ? className
              : "w-full h-[50px] rounded px-[15px] border border-hirejob-frost font-normal text-sm text-hirejob-dark placeholder:text-hirejob-gray"
          }
          type={type}
          {...props}
        />
      )}

      {validation && (
        <span className="font-normal text-sm text-hirejob-danger-normal mt-1">
          {validation}
        </span>
      )}
    </div>
  );
};

export default Input;
